import 'cypress-file-upload';
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
      //CREAR PROYECTO NUEVO
      cy.get(':nth-child(5) > .nav-link').should("be.visible").click()
      cy.get('h1').should("be.visible").contains("Listado de Proyectos")    
      cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Gestion de tareas, cobros y graficos")
      cy.get('#dt-search-0').should("be.visible").type("Casa de 2 habitaciones con hall{enter}")
      cy.get(':nth-child(1) > .sorting_1').should("be.visible").contains("Casa de 2 habitaciones con hall")
      cy.get('.btn-info').click()
      cy.get('h1').should("be.visible").contains("Tareas para el Proyecto")
      cy.get('.pb-3 > :nth-child(4)').contains("Permite administrar las tareas")
      cy.get('.pb-3 > :nth-child(7)').contains("Progreso")
      cy.xpath("//li[contains(.,'Planificación de Recursos Prueba En Espera')]").contains("Planificación de Recursos Prueba En Espera")
      cy.xpath("//li[contains(.,'Diseño Preliminar Prueba En Espera')]").contains("Diseño Preliminar Prueba En Espera")
      cy.xpath("//li[contains(.,'Adquisición de Materiales Prueba En Espera')]").contains("Adquisición de Materiales Prueba En Espera")
      cy.xpath("//li[contains(.,'Supervisión de Construcción Prueba En Espera')]").contains("Supervisión de Construcción Prueba En Espera")
      cy.xpath("//li[contains(.,'Control de Calidad Prueba En Espera')]").contains("Control de Calidad Prueba En Espera")
  
      
      cy.get('.pb-3 > :nth-child(10)').contains("Tareas")
      cy.get('.pb-3 > :nth-child(11)').contains("Para iniciar una tarea debe seleccionar una fecha de compromiso posterior al dia de hoy.")
      cy.get(':nth-child(12) > .container > :nth-child(1) > :nth-child(1) > .col-9 > strong').contains("Planificación de Recursos Prueba")
      cy.get(':nth-child(12) > .container > :nth-child(1) > :nth-child(2) > .col-9 > strong').contains("Planificación de recursos para Proyectos Sin Detalle Prueba")
      cy.get(':nth-child(13) > .container > :nth-child(1) > :nth-child(1) > .col-9 > strong').contains("Diseño Preliminar Prueba")
      cy.get(':nth-child(13) > .container > :nth-child(1) > :nth-child(2) > .col-9 > strong').contains("Diseño preliminar para Proyectos Sin Detalle Prueba")
      cy.get(':nth-child(14) > .container > :nth-child(1) > :nth-child(1) > .col-9 > strong').contains("Adquisición de Materiales Prueba")
      cy.get(':nth-child(14) > .container > :nth-child(1) > :nth-child(2) > .col-9 > strong').contains("Adquisición de materiales para Proyecto Sin Detalle Prueba")
      cy.get(':nth-child(15) > .container > :nth-child(1) > :nth-child(1) > .col-9 > strong').contains("Supervisión de Construcción Prueba")
      cy.get(':nth-child(15) > .container > :nth-child(1) > :nth-child(2) > .col-9 > strong').contains("Supervición de construcción para Proyecto Sin Detalle Prueba")
      cy.get(':nth-child(16) > .container > :nth-child(1) > :nth-child(1) > .col-9 > strong').contains("Control de Calidad Prueba")
      cy.get(':nth-child(16) > .container > :nth-child(1) > :nth-child(2) > .col-9 > strong').contains("Control de Calidad para Proyecto Sin Detalle Prueba")


      // Obtener la fecha actual
      const today = new Date();

      // Formatear la fecha en el formato yyyy-mm-dd
      const formattedDate = today.toISOString().slice(0, 10);

      // Luego, en tu prueba Cypress, puedes usar la fecha formateada
      cy.get('#Assignment_StartedDate').clear().type(formattedDate);
      cy.wait(1000)
      cy.get(':nth-child(12) > .container > :nth-child(1)').click()
      cy.wait(1000)
      cy.get(':nth-child(12) > .container > :nth-child(2) > .assignment-group > .row > .col-auto > .btn').click();
      cy.wait(1000)
      //cy.get('#Assignment_StartedDate').clear().type('2024-04-11')      
      cy.get('#Assignment_StartedDate').clear().type(() => new Date().toISOString().split('T')[0]);


      cy.wait(1000)
      cy.get(':nth-child(13) > .container > :nth-child(1) > :nth-child(2) > .col-3').click()
      cy.wait(1000)
      cy.get(':nth-child(13) > .container > :nth-child(2) > .assignment-group > .row > .col-auto > .btn').click()
      cy.wait(1000)
      cy.get('#Assignment_StartedDate').clear().type('2024-04-18')
      cy.wait(1000)
      cy.get(':nth-child(14) > .container > :nth-child(1) > :nth-child(2) > .col-3').click()
      cy.wait(1000)
      cy.get(':nth-child(14) > .container > :nth-child(2) > .assignment-group > .row > .col-auto > .btn').click()
      cy.wait(1000)
      cy.get('#Assignment_StartedDate').clear().type('2024-04-25')
      cy.wait(1000)
      cy.get(':nth-child(15) > .container > :nth-child(1) > :nth-child(2) > .col-3').click()
      cy.wait(1000)
      cy.get(':nth-child(15) > .container > :nth-child(2) > .assignment-group > .row > .col-auto > .btn').click()
      cy.wait(1000)
      cy.get('#Assignment_StartedDate').clear().type('2024-05-02')
      cy.wait(1000)
      cy.get(':nth-child(16) > .container > :nth-child(1) > :nth-child(2) > .col-3').click()
      cy.wait(1000)
      cy.get(':nth-child(16) > .container > :nth-child(2) > .assignment-group > .row > .col-auto > .btn').click()
      cy.wait(1000)

      cy.xpath("//li[contains(.,'Planificación de Recursos Prueba Iniciada')]").contains("Planificación de Recursos Prueba Iniciada")
      cy.xpath("//li[contains(.,'Diseño Preliminar Prueba Iniciada')]").contains("Diseño Preliminar Prueba Iniciada")
      cy.xpath("//li[contains(.,'Adquisición de Materiales Prueba Iniciada')]").contains("Adquisición de Materiales Prueba Iniciada")
      cy.xpath("//li[contains(.,'Supervisión de Construcción Prueba Iniciada')]").contains("Supervisión de Construcción Prueba Iniciada")
      cy.xpath("//li[contains(.,'Control de Calidad Prueba Iniciada')]").contains("Control de Calidad Prueba Iniciada")

      //ESTADO DE TAREAS ----- INICIADAS 100%
      //cy.get('.btn-info').click()
      //cy.xpath("(//div[contains(.,'100%')])[5]").should('be.visible')


      //VER TAREAS PARA EL PROYECTO ---- BTN VER
      
      cy.get('h1').should("be.visible").click()
      cy.wait(1000)
      cy.get(':nth-child(12) > .container > .col-2 > .btn').should("be.visible").click()
      cy.get('h1').should("be.visible").contains("Tareas")
      cy.get('.pb-3 > :nth-child(5)').should("be.visible").contains("Permite gestionar notas, adjuntos y compromisos")
      cy.get('form > :nth-child(6) > :nth-child(1)').should("be.visible").contains("Listado")
      cy.get(':nth-child(6) > .row > :nth-child(1) > .form-label').should("be.visible").contains("Compromiso Inicial:")
      cy.get('.row > :nth-child(2) > .form-label').should("be.visible").contains("Compromiso Actual:")
      // Obtener la fecha actual
      const today2 = new Date();

      // Formatear la fecha en el formato dd-mm-aaaa
      const formattedDate2 = `${today2.getDate().toString().padStart(2, '0')}-${(today2.getMonth() + 1).toString().padStart(2, '0')}-${today2.getFullYear()}`;

      // Luego, en tu prueba Cypress, puedes usar la fecha formateada
      cy.get(':nth-child(1) > .text-muted').should("be.visible").contains(formattedDate2);
      cy.get('.row > :nth-child(2) > .text-muted').should("be.visible").contains(formattedDate2);


      //ASIGNAR NUEVO ITEM
      cy.get('.btn-group > button.btn-primary').should("be.visible").click()
      cy.get('#exampleModalLabel').should("be.visible").contains("Agregar Item")
      cy.get('#itemSelect').should("be.visible").select('Compromiso')
      cy.get('#NewHub_DueDate').clear().type('2024-05-02')
      cy.get('#NewHub_Note').should("be.visible").type("Por problemas de Lluvia, se modifica el compromiso")
      cy.get('#NewHub_UserId').should("be.visible").select('Federico Lucas, Marquez')
      cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
      cy.wait(1000)
      cy.get('.row > :nth-child(2) > .text-muted').should("be.visible").contains("02-05-2024")
      cy.wait(1000)
      cy.get(':nth-child(1) > .sorting_1').should("be.visible").contains("02-05-2024")
      cy.get('.dt-layout-cell > #myTable > tbody > :nth-child(1) > :nth-child(3)').should("be.visible").contains("Por problemas de Lluvia, se modifica el compromiso")

      //COMPROMISO Y ADJUNTO
      cy.get('.btn-group > button.btn-primary').should("be.visible").click()
      cy.get('#exampleModalLabel').should("be.visible").contains("Agregar Item")
      cy.get('#itemSelect').should("be.visible").select('Compromiso y Adjunto')
      cy.get('#NewHub_DueDate').clear().type('2024-05-16')
      cy.get('#NewHub_Note').should("be.visible").type("Se adjunt foto de las condiciones climáticas. Se modifica Compromiso")
      cy.get('#NewHub_FileName').should("be.visible").type("Foto")
      cy.get('#NewHub_FileDescription').should("be.visible").type("El día de la fecha se presenta en la obra para verificar las coniciones de cumplimiento del trabajo diario y se observa que las condiciones climáticas son malas")
      cy.get('#fileInput').should("be.visible").click()

      // Ruta relativa al archivo dentro del directorio "fixtures"
      const filePath = 'LluviaenObra.jpg'
      
      cy.get('input[id="fileInput"]').attachFile({
        filePath: filePath,
        fileName: 'LluviaenObra.jpg',
        contentType: 'application/jpg'
      })
      
      
      cy.get('#NewHub_UserId').should("be.visible").select('Federico Lucas, Marquez')
      cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
      cy.xpath("//small[@class='text-muted'][contains(.,'16-05-2024')]").should("be.visible").contains("16-05-2024")
      cy.get('#dt-search-0').should("be.visible").type("El día de la fecha se presenta en la obra para verificar las coniciones de cumplimiento del trabajo diario y se observa que las condiciones climáticas son malas")      
      cy.get('.sorting_1').should("be.visible").contains("16-05-2024")
      cy.get('.dt-layout-cell > #myTable > tbody > tr > :nth-child(6)').should("be.visible").contains("El día de la fecha se presenta en la obra para verificar las coniciones de cumplimiento del trabajo diario y se observa que las condiciones climáticas son malas")
      cy.get('.dt-layout-cell > #myTable > tbody > tr > :nth-child(7) > .btn').should("be.visible").click()
      cy.wait(2000)
      cy.get('.btn-group > a.btn').should("be.visible").click()
      cy.get(':nth-child(12) > .container > .col-2 > .btn').should("be.visible").click()
      cy.xpath("//button[contains(.,'Completar')]").should("be.visible").click()
      cy.wait(1000)
      cy.get('.btn-group > a.btn').should("be.visible").click()
      cy.wait(2000)
      cy.xpath("//li[contains(.,'Planificación de Recursos Prueba Completa')]").contains("Planificación de Recursos Prueba Completa")
      cy.get(':nth-child(13) > .container > .col-2 > .btn').should("be.visible").click()
      cy.xpath("//button[contains(.,'Completar')]").should("be.visible").click()
      cy.wait(1000)
      cy.get('.btn-group > a.btn').should("be.visible").click()
      cy.wait(2000)
      cy.xpath("//li[contains(.,'Diseño Preliminar Prueba Completa')]").contains("Diseño Preliminar Prueba Completa")
      cy.get(':nth-child(14) > .container > .col-2 > .btn').should("be.visible").click()
      cy.xpath("//button[contains(.,'Completar')]").should("be.visible").click()
      cy.wait(1000)
      cy.get('.btn-group > a.btn').should("be.visible").click()
      cy.wait(2000)
      cy.xpath("//li[contains(.,'Adquisición de Materiales Prueba Completa')]").contains("Adquisición de Materiales Prueba Completa")
      cy.get(':nth-child(15) > .container > .col-2 > .btn').should("be.visible").click()
      cy.xpath("//button[contains(.,'Completar')]").should("be.visible").click()
      cy.wait(1000)
      cy.get('.btn-group > a.btn').should("be.visible").click()
      cy.wait(2000)
      cy.xpath("//li[contains(.,'Supervisión de Construcción Prueba Completa')]").contains("Supervisión de Construcción Prueba Completa")
      cy.get(':nth-child(16) > .container > .col-2 > .btn').should("be.visible").click()
      cy.wait(1000)
      cy.xpath("//button[contains(.,'Completar')]").should("be.visible").click()
      cy.wait(1000)
      cy.get('.btn-group > a.btn').should("be.visible").click()
      
      cy.xpath("//li[contains(.,'Control de Calidad Prueba Completa')]").contains("Control de Calidad Prueba Completa")


    //VERIFICAR DETALLE 100% COMPLETADAS
    cy.get('.btn-info').should("be.visible").click()
    cy.xpath("(//div[contains(.,'100%')])[5]").should("be.visible")
    //cy.get('.container-fluid').should("be.visible").click()

    cy.get('h1').should("be.visible").contains("Tareas para el Proyecto").click()
    cy.wait(1000)
    cy.get('.btn-primary.mb-3').should("be.visible").click()

    

      //CERRAR SESIÓN  
      cy.get(':nth-child(8) > .nav-link').should("be.visible").click()   
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('#confirmLogoutModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()                          
      

    })
})