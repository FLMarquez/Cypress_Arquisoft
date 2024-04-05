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
      //CERRAR SESIÓN  
      cy.get(':nth-child(8) > .nav-link').should("be.visible").contains("Cerrar sesión").click()        
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('.btn-primary').should("be.visible").click()      

    })
  })

 

