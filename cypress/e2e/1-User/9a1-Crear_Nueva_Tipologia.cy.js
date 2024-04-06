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
      cy.get(':nth-child(4) > .nav-link').should("be.visible").click()
      cy.get('h1').should("be.visible").contains("Listado de Tipologías").click()        
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Administrar las categorías o tipos de proyectos")  
      cy.get('.btn.mb-3').should("be.visible").click()      
      cy.get('h1').should("be.visible").contains("Agregar Tipos de Proyecto").click()        
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Agregar nuevas categorías") 
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label').contains("Nombre del Tipo Proyecto").click()        
      cy.get(':nth-child(2) > .control-label').should("be.visible").contains("Descripción")  
      cy.get(':nth-child(3) > :nth-child(1) > .form-group > .control-label').contains("Rango Mín. (m²)")      
      cy.get(':nth-child(2) > .form-group > .control-label').should("be.visible").contains("Rango Máx. (m²)")  
      cy.get('.col-md-12 > .form-group > .control-label').should("be.visible").contains("Honorarios")
      cy.get('#ProjectTypeName').should("be.visible").type("Vivienda Clásica con 2 habitaciones y hall")
      cy.get('#ProjectTypeDescription').should("be.visible").type("Es una vivienda clásica que tiene dos habitaciones y un hall.")
      cy.get('#RangeMin').should("be.visible").clear()
      cy.get('#RangeMin').should("be.visible").type("100")      
      cy.get('#RangeMax').should("be.visible").clear()
      cy.get('#RangeMax').should("be.visible").type("200")    
      cy.get('#ProfessionalFee').should("be.visible").clear()
      cy.get('#ProfessionalFee').should("be.visible").type("50000000")     
      cy.get('.m-3 > .btn-primary').should("be.visible").click()  
      cy.get('#dt-search-0').should("be.visible").type("Vivienda Clásica con 2 habitaciones y hall{enter}")
      cy.get(':nth-child(1) > .sorting_1').should("be.visible").contains("Vivienda Clásica con 2 habitaciones y hall")

      //CERRAR SESIÓN  
      cy.get(':nth-child(8) > .nav-link').should("be.visible").contains("Cerrar sesión").click()        
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('.modal-footer > .btn-primary').should("be.visible").click()                          
      






    })
  })