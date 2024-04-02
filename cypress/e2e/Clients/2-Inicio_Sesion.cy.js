/// <reference types="cypress" />
require('cypress-xpath')


describe('PRUEBA DE LA FUNCIONALIDAD DE USUARIOS: HAPPY PATH', () => {
    it('passes', () => {
      //INGRESO A LA WEB DE ARQUISOFT
      cy.visit('https://localhost:7085/')  
      //VERIFICAR NOMBRE ARQUISOFT AL INGRESAR A LA PÁGINA
      cy.get('.display-1').should("be.visible") 
      //VERIFICAR LAS IMAGENES DEL LOGIN, EL TÍTULO DE LOGIN CLIENTE Y DESCRIPCIÓN
      cy.get(':nth-child(2) > .card > .card-img-top').should("be.visible")
      cy.get(':nth-child(2) > .card > .card-body > .card-title').should("be.visible")
      cy.get(':nth-child(2) > .card > .card-body > .card-text').should("be.visible")
      //CLIC EN INICIAR SESIÓN COMO CLIENTE
      cy.get(':nth-child(2) > .card > .card-body > div.text-center > .btn').should("be.visible").click()     
     //ESCRIBIR EL USUARIO Y CONTRASEÑA EN EL ACCESO A USUARIOS       
      cy.get('#Mail').should("be.visible").type("jm@hotmail.com")
      cy.get('#Password').should("be.visible").type("31355352")
      //HACER CLIC EN EL BOTÓN INGRESAR
      cy.get('.btn-primary').should("be.visible").click()
      //VERIFICAR LA EXISTENCIA DEL NOMBRE DASHBOARD EN LA WEB AL INGRESAR
      cy.get('.text-light').should("be.visible").contains("Dashboard)")      
      //VERIFICAR LA EXISTENCIA DEL NOMBRE Arquisoft (para Clientes) EN LA WEB AL INGRESAR
      cy.get('.navbar-brand > strong').should("be.visible").contains("Arquisoft (para Clientes)")
      //VERIFICAR EL NOMBRE DEL USUARIO LOGUEADO EN LA WEB AL INGRESAR
      cy.get(':nth-child(1) > .nav-link').should("be.visible").contains("Cliente: José Matías Marquez")
      //VERIFICAR LOS BOTONES HABILITADOS QUE TIENE EL USUARIO ADMIN AL INGRESAR A LA WEB CON USUARIO Y CONTRASEÑA VALIDA
      cy.get(':nth-child(2) > .nav-link').should("be.visible").contains("Cerrar sesión")        
      //VERIFICAR MENSAJE DE BIENVENIDA AL USUARIO 
      cy.get('.container > :nth-child(2)').contains("Bienvenido José Matías!")
      //VERIFICAR LA EXISTENCIA DEL DETALLE DE LA FUNCIÓN QUE CORRESPONDE 
      cy.get('.container > :nth-child(3)').contains("A continuación, se presenta una visualización de los proyectos, incluyendo su estado actual, tipología y el arquitecto responsable de cada proyecto. Esto permite el seguimiento de sus proyectos, brindando información clave sobre su progreso y las personas involucradas en su ejecución.")
      //VERIFICAR LA EXISTENCIA DEL SUB TÍTULO  
      cy.get('.container > :nth-child(4)').should("be.visible").contains("Tus proyectos actuales:")
      //VERIFICAR LA EXISTENCIA  DE LOS NOMBRES DE LAS COLUMNAS DONDE SE MOSTRARÁN UN RESUMEN DE LOS DATOS DEL USUARIO
      cy.get('thead > tr > :nth-child(1)').should("be.visible").contains("Nombre")
      cy.get('thead > tr > :nth-child(2)').should("be.visible").contains("Apellido")
      cy.get('thead > tr > :nth-child(3)').should("be.visible").contains("DNI")
      cy.get('thead > tr > :nth-child(4)').should("be.visible").contains("Telefono")
      cy.get('thead > tr > :nth-child(5)').should("be.visible").contains("Mail")
      //CERRAR  SESSION
      cy.get(':nth-child(8) > .nav-link').should("be.visible").contains("Cerrar sesión").click()        
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('.btn-primary').should("be.visible").click() 
            

    })
  })
