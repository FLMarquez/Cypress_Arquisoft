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
       //BUSCAR A ROBERTO PERFUMO
       cy.get('#dt-search-0').should("be.visible").type("Perfumo{enter}")
      //VERIFICAR LA EXISTENCIA DEL BOTÓN EDITAR 
      cy.get(':nth-child(6) > .btn-primary').should("be.visible").contains("Editar").click()
      //EDITAR LOS DATOS DEL USUARIO
        //NOMBRE
       cy.get(':nth-child(2) > .form-label').should("be.visible").contains("Nombre")
       cy.get('#Name').clear()
       cy.get('#Name').should("be.visible").type("Juan")
        //APELLIDO
        cy.get(':nth-child(3) > .form-label').should("be.visible").contains("Apellido")
      cy.get('#LastName').clear()
      cy.get('#LastName').should("be.visible").type("Riquelme")     
      //DOCUMENTO
      cy.get(':nth-child(4) > .form-label').should("be.visible").contains("DNI")
      cy.get('#DocumentNumber').clear()
      cy.get('#DocumentNumber').should("be.visible").type("31789941")
      //MAIL
      cy.get(':nth-child(5) > .form-label').should("be.visible").contains("Email")
      cy.get('#Mail').clear()
      cy.get('#Mail').should("be.visible").type("juanRiquelme@hotmail.com.ar")
      //TELEFONO
      cy.get(':nth-child(6) > .form-label').should("be.visible").contains("Telefono")
      cy.get('#Telephone').clear()
      cy.get('#Telephone').should("be.visible").type("3516985632")
      //ROL
      cy.get('.control-label').should("be.visible").contains("Rol del Usuario")      
      cy.get('#UserRoleId').should("be.visible").select('Soporte')
      //CLIC EN BOTÓN ENVIAR
      cy.get('form > .btn-primary').should("be.visible").click()
      //VALIDAR LA CREACIÓN DEL NUEVO CLIENTE
      cy.get('#dt-search-0').should("be.visible").type("Riquelme")
      cy.get('.sorting_1').should("be.visible").contains("Riquelme")
      //CERRAR  SESIÓN
      cy.get(':nth-child(8) > .nav-link').should("be.visible").contains("Cerrar sesión").click()        
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('.modal-footer > .btn-primary').should("be.visible").click() 

      
    



    })
})
