/// <reference types="cypress" />
require('cypress-xpath')


describe('PRUEBA DE LA FUNCIONALIDAD DE USUARIOS: HAPPY PATH', () => {
    it('passes', () => {
      
    //INGRESO A LA WEB DE ARQUISOFT
    cy.visit('https://localhost:7085/')  
    //VERIFICAR NOMBRE ARQUISOFT AL INGRESAR A LA PÁGINA
    cy.get('.display-1').should("be.visible") 
    //VERIFICAR LAS IMAGENES DEL LOGIN, EL TÍTULO DE LOGIN CLIENTE Y DESCRIPCIÓN
    cy.get(':nth-child(1) > .card > .card-img-top').should("be.visible")
    cy.get(':nth-child(2) > .card > .card-img-top').should("be.visible")
    cy.get(':nth-child(1) > .card > .card-body > .card-title').should("be.visible")
    cy.get(':nth-child(2) > .card > .card-body > .card-title').should("be.visible")
    cy.get(':nth-child(1) > .card > .card-body > .card-text').should("be.visible")
    cy.get(':nth-child(2) > .card > .card-body > .card-text').should("be.visible")
    //CLIC EN INICIAR SESIÓN COMO CLIENTE
    cy.get(':nth-child(2) > .card > .card-body > .card-title').should("be.visible").click()     
   //ESCRIBIR EL USUARIO Y CONTRASEÑA EN EL ACCESO A CLIENTE       
    cy.get('#Mail').should("be.visible").type("jm@hotmail.com")
    cy.get('#Password').should("be.visible").type("31355352")
    //HACER CLIC EN EL BOTÓN INGRESAR
    cy.get('.btn-primary').should("be.visible").click()
      cy.wait(1000)       
      //VERIFICAR LA EXISTENCIA DEL NOMBRE Arquisoft (para Clientes) EN LA WEB AL INGRESAR
      cy.get('.navbar-brand > strong').should("be.visible").contains("Arquisoft (para Clientes)")
      //VERIFICAR EL NOMBRE DEL USUARIO LOGUEADO EN LA WEB AL INGRESAR
      cy.get(':nth-child(1) > .nav-link').should("be.visible").contains("Cliente: José Matías Marquez")
      //VERIFICAR LOS BOTONES HABILITADOS QUE TIENE EL USUARIO ADMIN AL INGRESAR A LA WEB CON USUARIO Y CONTRASEÑA VALIDA
      cy.get(':nth-child(2) > .nav-link').should("be.visible").contains("Cerrar sesión")    
       //VERIFICAR LA EXISTENCIA DEL NOMBRE DASHBOARD EN LA WEB AL INGRESAR
       cy.xpath("//h1[contains(.,'Dashboard')]").should("be.visible").contains("Dashboard")      
      //VERIFICAR MENSAJE DE BIENVENIDA AL USUARIO 
      cy.get('.container > :nth-child(2)').contains("Bienvenido José Matías!")
      //VERIFICAR LA EXISTENCIA DEL DETALLE DE LA FUNCIÓN QUE CORRESPONDE 
      cy.get('.container > :nth-child(3)').contains("A continuación, se presenta una visualización de los proyectos, incluyendo su estado actual, tipología y el arquitecto responsable de cada proyecto. Esto permite el seguimiento de sus proyectos, brindando información clave sobre su progreso y las personas involucradas en su ejecución.")
      //VERIFICAR LA EXISTENCIA DEL SUB TÍTULO  
      cy.get('.container > :nth-child(4)').should("be.visible").contains("Tus proyectos actuales:")
      //VERIFICAR PROYECTOS ACTUALES
      cy.get('.accordion-button').should("be.visible").contains("Casa de 2 habitaciones con hall")
      cy.get('.accordion-button').should("be.visible").click()

      
      cy.xpath("//li[contains(.,'Planificación de Recursos Prueba Completa')]").should("be.visible").contains("Planificación de Recursos Prueba Completa")
      
      cy.xpath("//li[contains(.,'Diseño Preliminar Prueba Completa')]").should("be.visible").contains("Diseño Preliminar Prueba Completa")
      
      cy.xpath("//li[contains(.,'Adquisición de Materiales Prueba Completa')]").should("be.visible").contains("Adquisición de Materiales Prueba Completa")
     
      cy.xpath("//li[contains(.,'Supervisión de Construcción Prueba Completa')]").should("be.visible").contains("Supervisión de Construcción Prueba Completa")
           
      cy.xpath("//li[contains(.,'Control de Calidad Prueba Completa')]").should("be.visible").contains("Control de Calidad Prueba Completa")
                         
      //cy.xpath("cy.get('.progress-indicator > :nth-child(1)')").should("be.visible")

      //TAREAS STATUS
      cy.get(':nth-child(1) > .card > .card-header > .mb-0 > span').should("be.visible").contains("Planificación de Recursos Prueba")
      cy.get(':nth-child(1) > .card > .card-header > .mb-0 > div > .col-auto').should("be.visible").contains("Completa")
      cy.get(':nth-child(1) > .card > .card-body').should("be.visible").contains("Descripcion de la tarea: Planificación de recursos para Proyectos Sin Detalle Prueba")
      //cy.get(':nth-child(1) > .card > .card-body').should("be.visible").contains("Compromiso Inicial: 24-04-24")
      //cy.get(':nth-child(1) > .card > .card-body').should("be.visible").contains("Compromiso Actual: 16-12-2024")
      //cy.get(':nth-child(1) > .card > .card-body').should("be.visible").contains("Fecha Completa: 23-04-24")
      //cy.get(':nth-child(1) > .card > .card-body').should("be.visible").contains("Fecha de Inicio: 23-04-24")

      cy.get(':nth-child(2) > .card > .card-header > .mb-0 > span').should("be.visible").contains("Diseño Preliminar Prueba")
      cy.get(':nth-child(2) > .card > .card-header > .mb-0 > div > .col-auto').should("be.visible").contains("Completa")
      cy.get(':nth-child(2) > .card > .card-body').should("be.visible").contains("Descripcion de la tarea: Diseño preliminar para Proyectos Sin Detalle Prueba")
      //cy.get(':nth-child(2) > .card > .card-body').should("be.visible").contains("Compromiso Inicial: 24-04-24")
      //cy.get(':nth-child(2) > .card > .card-body').should("be.visible").contains("Compromiso Actual: 24-04-2024")
      //cy.get(':nth-child(2) > .card > .card-body').should("be.visible").contains("Fecha Completa: 23-04-24")
      //cy.get(':nth-child(2) > .card > .card-body').should("be.visible").contains("Fecha de Inicio: 23-04-24")

      cy.get(':nth-child(3) > .card > .card-header > .mb-0 > span').should("be.visible").contains("Adquisición de Materiales Prueba")
      cy.get(':nth-child(3) > .card > .card-header > .mb-0 > div > .col-auto').should("be.visible").contains("Completa")
      cy.get(':nth-child(3) > .card > .card-body').should("be.visible").contains("Descripcion de la tarea: Adquisición de materiales para Proyecto Sin Detalle Prueba")
      //cy.get(':nth-child(3) > .card > .card-body').should("be.visible").contains("Compromiso Inicial: 24-04-24")
      //cy.get(':nth-child(3) > .card > .card-body').should("be.visible").contains("Compromiso Actual: 24-04-2024")
      //cy.get(':nth-child(3) > .card > .card-body').should("be.visible").contains("Fecha Completa: 23-04-24")
      //cy.get(':nth-child(3) > .card > .card-body').should("be.visible").contains("Fecha de Inicio: 23-04-24")

      cy.get(':nth-child(4) > .card > .card-header > .mb-0 > span').should("be.visible").contains("Supervisión de Construcción Prueba")
      cy.get(':nth-child(4) > .card > .card-header > .mb-0 > div > .col-auto').should("be.visible").contains("Completa")
      cy.get(':nth-child(4) > .card > .card-body').should("be.visible").contains("Descripcion de la tarea: Supervición de construcción para Proyecto Sin Detalle Prueba")
      //cy.get(':nth-child(4) > .card > .card-body').should("be.visible").contains("Compromiso Inicial: 24-04-24")
      //cy.get(':nth-child(4) > .card > .card-body').should("be.visible").contains("Compromiso Actual: 24-04-2024")
      //cy.get(':nth-child(4) > .card > .card-body').should("be.visible").contains("Fecha Completa: 23-04-24")
      //cy.get(':nth-child(4) > .card > .card-body').should("be.visible").contains("Fecha de Inicio: 23-04-24")

      cy.get(':nth-child(5) > .card > .card-header > .mb-0 > span').should("be.visible").contains("Control de Calidad Prueba")
      cy.get(':nth-child(5) > .card > .card-header > .mb-0 > div > .col-auto').should("be.visible").contains("Completa")
      cy.get(':nth-child(5) > .card > .card-body').should("be.visible").contains("Descripcion de la tarea: Control de Calidad para Proyecto Sin Detalle Prueba")
      //cy.get(':nth-child(5) > .card > .card-body').should("be.visible").contains("Compromiso Inicial: 24-04-24")
      //cy.get(':nth-child(5) > .card > .card-body').should("be.visible").contains("Compromiso Actual: 24-04-2024")
      //cy.get(':nth-child(5) > .card > .card-body').should("be.visible").contains("Fecha Completa: 23-04-24")
      //cy.get(':nth-child(5) > .card > .card-body').should("be.visible").contains("Fecha de Inicio: 23-04-24")

      //CERRAR  SESSION
      cy.get(':nth-child(2) > .nav-link').should("be.visible").contains("Cerrar sesión").click()        
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('.modal-footer > .btn-primary').should("be.visible").click() 
            

    })
  })
