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
      cy.xpath('//span[contains(.,"Usuario: Federico Lucas Marquez")]').should("be.visible").contains("Usuario: Federico Lucas Marquez")
      //VERIFICAR LOS BOTONES HABILITADOS QUE TIENE EL USUARIO ADMIN AL INGRESAR A LA WEB CON USUARIO Y CONTRASEÑA VALIDA
      cy.get(':nth-child(1) > .nav-link').should("be.visible").contains("Dashboard")    
      cy.get(':nth-child(2) > .nav-link').should("be.visible").contains("Clientes")
      cy.get(':nth-child(3) > .nav-link').should("be.visible").contains("Usuarios")
      cy.get(':nth-child(4) > .nav-link').should("be.visible").contains("Tipología")
      cy.get(':nth-child(5) > .nav-link').should("be.visible").contains("Proyecto")
      cy.get(':nth-child(6) > .nav-link').should("be.visible").contains("Servicio")
      cy.xpath('//span[contains(.,"Usuario: Federico Lucas Marquez")]').should("be.visible").contains("Usuario: Federico Lucas Marquez")
      cy.xpath("//button[@class='nav-link btn btn-link'][contains(.,'Cerrar sesión')]").should("be.visible").contains("Cerrar sesión")
      //CREAR PROYECTO NUEVO
      cy.get(':nth-child(5) > .nav-link').should("be.visible").click()
      cy.get('h1').should("be.visible").contains("Listado de Proyectos")    
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Gestion de tareas, cobros y graficos")
      cy.get('[href="/Project/Create"]').should("be.visible").click()
      cy.get('h1').should("be.visible").contains("Agregar Proyectos")    
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Descripcion de esta función")
      cy.get(':nth-child(1) > .control-label').should("be.visible").contains("Nombre del Proyecto") 
      cy.get('#Name').should("be.visible").type("Casa de 2 habitaciones con hall")    
      cy.get(':nth-child(2) > .control-label').should("be.visible").contains("Presupuesto")
      cy.get('#Budget').should("be.visible").clear() 
      cy.get('#Budget').should("be.visible").type("2500000") 
      cy.get(':nth-child(3) > .control-label').should("be.visible").contains("Clientes") 
      cy.get('#ClientValue').should("be.visible").select("Marquez, José Matías")    
      cy.get(':nth-child(4) > .control-label').should("be.visible").contains("Usuario")
      cy.get('#UserValue').should("be.visible").select("Marquez, Federico Lucas") 
      cy.get(':nth-child(5) > .control-label').should("be.visible").contains("Servicio") 
      cy.get('#ServiceTypeValue').should("be.visible").select("Construcción de Vivienda") 
      cy.get(':nth-child(6) > .control-label').should("be.visible").contains("Tipo de Proyecto")
      cy.get('#ProjectTypeValue').should("be.visible").select("Vivienda Clásica con 2 habitaciones y hall") 
      cy.get('.m-3 > .btn-primary').should("be.visible").click()
      cy.get('#dt-search-0').should("be.visible").type("Casa de 2 habitaciones con hall{enter}")
      cy.get(':nth-child(1) > .sorting_1').should("be.visible").contains("Casa de 2 habitaciones con hall")
      
      //CERRAR SESIÓN  
      cy.xpath("//button[@class='nav-link btn btn-link'][contains(.,'Cerrar sesión')]").should("be.visible").contains("Cerrar sesión").click()        
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('.modal-footer > .btn-primary').should("be.visible").click()                         
      

    })
})