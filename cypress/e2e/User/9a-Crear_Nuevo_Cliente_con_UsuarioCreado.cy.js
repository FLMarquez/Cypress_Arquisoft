/// <reference types="cypress" />
require('cypress-xpath')


describe('PRUEBA DE LA FUNCIONALIDAD DE USUARIOS: HAPPY PATH', () => {
    it('passes', () => {
      //INGRESO A LA WEB DE ARQUISOFT
      cy.visit('https://localhost:7085/')  
      //VERIFICAR NOMBRE ARQUISOFT AL INGRESAR A LA PÁGINA
      cy.get('.display-1').should("be.visible") 
      //VERIFICAR LAS IMAGENES DEL LOGIN, EL TÍTULO DE LOGIN USUARIO Y DESCRIPCIÓN
      cy.get(':nth-child(1) > .card > .card-img-top').should("be.visible")
      cy.get(':nth-child(2) > .card > .card-img-top').should("be.visible")
      cy.get(':nth-child(1) > .card > .card-body > .card-title').should("be.visible")
      cy.get(':nth-child(2) > .card > .card-body > .card-title').should("be.visible")
      cy.get(':nth-child(1) > .card > .card-body > .card-text').should("be.visible")
      cy.get(':nth-child(2) > .card > .card-body > .card-text').should("be.visible")
      //CLIC EN INICIAR SESIÓN COMO USUARIO
      cy.get(':nth-child(1) > .card > .card-body > .card-title').should("be.visible").click()     
     //ESCRIBIR EL USUARIO Y CONTRASEÑA EN EL ACCESO A USUARIOS       
      cy.get('#Mail').should("be.visible").type("flucas.marquez@hotmail.com.ar")
      cy.get('#Password').should("be.visible").type("32785541")
      //HACER CLIC EN EL BOTÓN INGRESAR
      cy.get('.btn-primary').should("be.visible").click()
      //VERIFICAR LA EXISTENCIA DEL NOMBRE Arquisoft (para Arquitectos) EN LA WEB AL INGRESAR
      cy.get('.navbar-brand > strong').should("be.visible").contains("Arquisoft (para Arquitectos)")
      //VERIFICAR EL NOMBRE DEL USUARIO LOGUEADO EN LA WEB AL INGRESAR
      cy.get(':nth-child(7) > .nav-link').should("be.visible").contains("Usuario: Federico Lucas Marquez")
      //VERIFICAR LOS BOTONES HABILITADOS QUE TIENE EL USUARIO ADMIN AL INGRESAR A LA WEB CON USUARIO Y CONTRASEÑA VALIDA
      cy.get(':nth-child(1) > .nav-link').should("be.visible").contains("Dashboard")    
      cy.get(':nth-child(2) > .nav-link').should("be.visible").contains("Clientes")
      cy.get(':nth-child(3) > .nav-link').should("be.visible").contains("Usuarios")
      cy.get(':nth-child(4) > .nav-link').should("be.visible").contains("Tipología")
      cy.get(':nth-child(5) > .nav-link').should("be.visible").contains("Proyecto")
      cy.get(':nth-child(6) > .nav-link').should("be.visible").contains("Servicio")
      cy.get(':nth-child(7) > .nav-link').should("be.visible").contains("Usuario: Federico Lucas Marquez")
      cy.get(':nth-child(8) > .nav-link').should("be.visible").contains("Cerrar sesión") 
      //CREAR CLIENTE NUEVO
      cy.get(':nth-child(2) > .nav-link').should("be.visible").click()
      
      cy.get('h1').should("be.visible").contains("Listado de Clientes")   
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Administra la información de los clientes registrados en el sistema.")
      cy.xpath('//a[@href="/Client/Create"]').should("be.visible").click()
      
      cy.xpath('//h1[contains(.,"Agregar un Cliente")]').should("be.visible").contains("Agregar un Cliente")
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Registrar nuevo cliente")
      cy.get('#DocumentNumber').should("be.visible").click()
      cy.get('#DocumentNumber').should("be.visible").type("31355352")
      cy.get('#Name').should("be.visible").type("José Matías")
      cy.get('#Lastname').should("be.visible").type("Marquez") 
      cy.get('#Mail').should("be.visible").type("jm@hotmail.com") 
      cy.get('#Telephone').should("be.visible").type("3512489632") 
      cy.get('#Address_AddressLine').should("be.visible").type("Agustín Zarate") 
      cy.get('#Address_Numbering').should("be.visible").type("123456")  
      cy.get('#Address_Floor').should("be.visible").type("1")
      cy.get('#Address_Department').should("be.visible").type("A")  
      cy.get('#Address_PostalCode').should("be.visible").type("5008")   
      cy.get('#Address_Neighborhood').should("be.visible").type("Zumarán") 
      cy.get('#provinceSelect').should("be.visible").select('Córdoba')
      cy.get('#localitySelect').should("be.visible").select("Córdoba") 
      cy.get('.m-3 > .btn-primary').should("be.visible").click()
      cy.wait(1000)
      //VALIDAR LA CREACIÓN DEL NUEVO CLIENTE
      cy.get('#dt-search-0').should("be.visible").type("Marquez")
      cy.get('.sorting_1').should("be.visible").contains("Marquez")

      //CERRAR SESIÓN  
      cy.get(':nth-child(8) > .nav-link').should("be.visible").contains("Cerrar sesión").click()        
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('.modal-footer > .btn-primary').should("be.visible").click()                          
      






    })
  })