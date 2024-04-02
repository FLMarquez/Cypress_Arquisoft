/// <reference types="cypress" />
require('cypress-xpath')


describe('PRUEBA DE LA FUNCIONALIDAD DE USUARIOS: HAPPY PATH', () => {
    it('passes', () => {
      //INGRESO A LA WEB DE ARQUISOFT
      cy.visit('https://localhost:7085/')    
     
      //CLIC EN INICIAR SESIÓN COMO USUARIO
      cy.get(':nth-child(1) > .card > .card-body > div.text-center > .btn').should("be.visible").click()     
     //ESCRIBIR EL USUARIO Y CONTRASEÑA EN EL ACCESO A USUARIOS       
      cy.get('#Mail').should("be.visible").type("admin@admin.com")
      cy.get('#Password').should("be.visible").type("1234")
      //HACER CLIC EN EL BOTÓN INGRESAR
      cy.get('.btn-primary').should("be.visible").click()
       //INGRESAR A USUARIOS - CLIC USUARIOS
       cy.get(':nth-child(3) > .nav-link').should("be.visible").click()       
      //HACER CLIC EN EL BOTÓN CREAR NUEVO USUARIO
      cy.get('.btn.mb-3').should("be.visible").click()
      //VERIFICAR LA EXISTENCIA DE TÍTULO DE DESCRIPCIÓN
      cy.get('h1').should("be.visible").contains("Agregar un Usuario")
      //VERIFICAR QUE EN EL SUBTÍTULO INDIQUE EL DETALLE DE LA FUNCIÓN QUE CORRESPONDE 
      cy.get('h5').contains("Esta función, permite registrar nuevos usuarios.")
      //VERIFICAR LA EXISTENCIA  DE LOS NOMBRES DE LAS ENTIDADES DEL USUARIO
      //DOCUMENTO
      cy.get(':nth-child(1) > .control-label').should("be.visible").contains("Documento Nacional")
      cy.xpath("//input[contains(@placeholder,'Ingrese el dni')]").should("be.visible")
      cy.get(':nth-child(1) > .control-label').should("be.visible").type("30789456")
      //NOMBRE
      cy.get(':nth-child(2) > .control-label').should("be.visible").contains("Nombre del Usuario")
      cy.xpath("//input[contains(@placeholder,'Ingrese el nombre')]").should("be.visible")
      cy.get(':nth-child(2) > .control-label').should("be.visible").click()
      //DNI YA EXISTENTE
      cy.get('#DocumentNumber-error').should("be.visible").contains("El DNI 30789456 ya existe")
      
      
      

    })
  })

 

