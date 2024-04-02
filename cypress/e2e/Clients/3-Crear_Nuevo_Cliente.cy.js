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
      cy.get(':nth-child(2) > .control-label').should("be.visible").type("Roberto")
      //APELLIDO
      cy.get(':nth-child(3) > .control-label').should("be.visible").contains("Apellido del Usuario")
      cy.xpath("//input[contains(@placeholder,'Ingrese el apellido')]").should("be.visible")
      cy.get(':nth-child(3) > .control-label').should("be.visible").type("Perfumo")
      //CONTRASEÑA
      cy.get(':nth-child(4) > .control-label').should("be.visible").contains("Contraseña")
      cy.xpath("//input[contains(@placeholder,'Ingrese la Contraseña')]").should("be.visible")
      cy.get(':nth-child(4) > .control-label').should("be.visible").type("123456")
      //MAIL
      cy.get(':nth-child(5) > .control-label').should("be.visible").contains("Mail")
      cy.xpath("//input[contains(@placeholder,'Ingrese el correo electrónico')]").should("be.visible")
      cy.get(':nth-child(5) > .control-label').should("be.visible").type("robertoperfumo@hotmail.com.ar")
      //TELEFONO
      cy.get(':nth-child(6) > .control-label').should("be.visible").contains("Teléfono")
      cy.xpath("//input[contains(@inputmode,'numeric')]").should("be.visible")
      cy.get(':nth-child(6) > .control-label').should("be.visible").type("3512784512")
      //ROL
      cy.get(':nth-child(7) > .control-label').should("be.visible").contains("Rol del Usuario")      
      cy.get('#UserRoleId').should("be.visible").select('Técnico')
      //CLIC EN BOTÓN ENVIAR
      cy.get('.btn-primary').should("be.visible").click()
      

    })
  })