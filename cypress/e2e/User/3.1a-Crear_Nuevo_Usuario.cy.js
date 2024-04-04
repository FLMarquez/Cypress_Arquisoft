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
      //VERIFICAR QUE EN EL TÍTULO INDIQUE LISTADO DE USUARIOS 
      cy.get('h1').should("be.visible").contains("Listado de Usuarios")
      //VERIFICAR QUE EN EL SUBTÍTULO INDIQUE EL DETALLE DE LA FUNCIÓN QUE CORRESPONDE 
      cy.get('h5').contains("Administrar la información de los usuarios registrados en el sistema.")
      //VERIFICAR LA EXISTENCIA DEL BOTÓN CREAR NUEVO USUARIO 
      cy.get('.btn.mb-3').should("be.visible").contains("Crear Usuario")
      //VERIFICAR LA EXISTENCIA  DE LOS NOMBRES DE LAS COLUMNAS DONDE SE MOSTRARÁN UN RESUMEN DE LOS DATOS DEL USUARIO
      cy.get('.dt-ordering-asc > .dt-column-title').should("be.visible").contains("Apellido")
      cy.get('[data-dt-column="1"] > .dt-column-title').should("be.visible").contains("Nombre")
      cy.get('[data-dt-column="2"] > .dt-column-title').should("be.visible").contains("DNI")
      cy.get('[data-dt-column="3"] > .dt-column-title').contains("Telefono")
      cy.get('[data-dt-column="4"] > .dt-column-title').should("be.visible").contains("Mail")
      cy.get('.dt-orderable-none > .dt-column-title').should("be.visible").contains("Acciones")     
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
      cy.get('form > .btn-primary').should("be.visible").click()
      //INGRESAR A USUARIOS - CLIC USUARIOS
      cy.get(':nth-child(3) > .nav-link').should("be.visible").click()
      //VALIDAR LA CREACIÓN DEL NUEVO CLIENTE
      cy.get('#dt-search-0').should("be.visible").type("Perfumo")
      cy.get('.sorting_1').should("be.visible").contains("Perfumo")
      //CERRAR  SESIÓN
      cy.get(':nth-child(8) > .nav-link').should("be.visible").contains("Cerrar sesión").click()        
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('.modal-footer > .btn-primary').should("be.visible").click() 

    })
  })

 

