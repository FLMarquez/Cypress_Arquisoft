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
      cy.get(':nth-child(1) > .card > .card-body > .card-title').should("be.visible")
      cy.get(':nth-child(1) > .card > .card-body > .card-text').should("be.visible")
      //CLIC EN INICIAR SESIÓN COMO USUARIO
      cy.get(':nth-child(1) > .card > .card-body > div.text-center > .btn').should("be.visible").click()     
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
      //ASIGNAR TAREA AL SERVICIO
      cy.get(':nth-child(6) > .nav-link').should("be.visible").click()
      cy.get(':nth-child(3) > .card > .card-body > .btn-group > .btn-info').should("be.visible").click()
      cy.get('h1').should("be.visible").contains("Tareas para Construcción de Vivienda") 
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Permite administrar las tareas") 

      cy.get('[href="/AssignmentType/Create/6"]').should("be.visible").click()
      cy.get('h1').should("be.visible").contains("Agregar Tipos de Tarea") 
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Permite agregar nuevas categorías")
      cy.get(':nth-child(1) > .control-label').should("be.visible").contains("Nombre del Tipo Tarea") 
      cy.get(':nth-child(2) > .control-label').should("be.visible").contains("Descripción")
      cy.get('#AssignmentTypeName').should("be.visible").type("Planificación de Recursos Prueba")
      cy.get('#AssignmentTypeDescription').should("be.visible").type("Planificación de recursos para Proyectos Sin Detalle Prueba")
      cy.get('.m-3 > .btn-primary').should("be.visible").click()

      cy.get('[href="/AssignmentType/Create/6"]').should("be.visible").click()
      cy.get('h1').should("be.visible").contains("Agregar Tipos de Tarea") 
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Permite agregar nuevas categorías")
      cy.get(':nth-child(1) > .control-label').should("be.visible").contains("Nombre del Tipo Tarea") 
      cy.get(':nth-child(2) > .control-label').should("be.visible").contains("Descripción")
      cy.get('#AssignmentTypeName').should("be.visible").type("Diseño Preliminar Prueba")
      cy.get('#AssignmentTypeDescription').should("be.visible").type("Diseño preliminar para Proyectos Sin Detalle Prueba")
      cy.get('.m-3 > .btn-primary').should("be.visible").click()

      cy.get('[href="/AssignmentType/Create/6"]').should("be.visible").click()
      cy.get('h1').should("be.visible").contains("Agregar Tipos de Tarea") 
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Permite agregar nuevas categorías")
      cy.get(':nth-child(1) > .control-label').should("be.visible").contains("Nombre del Tipo Tarea") 
      cy.get(':nth-child(2) > .control-label').should("be.visible").contains("Descripción")
      cy.get('#AssignmentTypeName').should("be.visible").type("Adquisición de Materiales Prueba")
      cy.get('#AssignmentTypeDescription').should("be.visible").type("Adquisición de materiales para Proyecto Sin Detalle Prueba")
      cy.get('.m-3 > .btn-primary').should("be.visible").click()

      cy.get('[href="/AssignmentType/Create/6"]').should("be.visible").click()
      cy.get('h1').should("be.visible").contains("Agregar Tipos de Tarea") 
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Permite agregar nuevas categorías")
      cy.get(':nth-child(1) > .control-label').should("be.visible").contains("Nombre del Tipo Tarea") 
      cy.get(':nth-child(2) > .control-label').should("be.visible").contains("Descripción")
      cy.get('#AssignmentTypeName').should("be.visible").type("Supervisión de Construcción Prueba")
      cy.get('#AssignmentTypeDescription').should("be.visible").type("Supervición de construcción para Proyecto Sin Detalle Prueba")
      cy.get('.m-3 > .btn-primary').should("be.visible").click()

      cy.get('[href="/AssignmentType/Create/6"]').should("be.visible").click()
      cy.get('h1').should("be.visible").contains("Agregar Tipos de Tarea") 
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Permite agregar nuevas categorías")
      cy.get(':nth-child(1) > .control-label').should("be.visible").contains("Nombre del Tipo Tarea") 
      cy.get(':nth-child(2) > .control-label').should("be.visible").contains("Descripción")
      cy.get('#AssignmentTypeName').should("be.visible").type("Control de Calidad Prueba")
      cy.get('#AssignmentTypeDescription').should("be.visible").type("Control de Calidad para Proyecto Sin Detalle Prueba")
      cy.get('.m-3 > .btn-primary').should("be.visible").click()

     cy.get('#sortable > :nth-child(1) > :nth-child(2)').should("be.visible").contains("Planificación de Recursos Prueba") 
     cy.get('#sortable > :nth-child(2) > :nth-child(2)').should("be.visible").contains("Diseño Preliminar Prueba") 
     cy.get('#sortable > :nth-child(3) > :nth-child(2)').should("be.visible").contains("Adquisición de Materiales Prueba") 
     cy.get('#sortable > :nth-child(4) > :nth-child(2)').should("be.visible").contains("Supervisión de Construcción Prueba") 
     cy.get(':nth-child(5) > :nth-child(2)').should("be.visible").contains("Control de Calidad Prueba") 

      //CERRAR SESIÓN  
      cy.get(':nth-child(8) > .nav-link').should("be.visible").click()   
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('.modal-footer > .btn-primary').should("be.visible").click()                          
      

    })
})