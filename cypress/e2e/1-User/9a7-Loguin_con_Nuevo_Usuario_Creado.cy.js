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
      //VALIDAR TÍTULOS, SUB TÍTULOS Y TEXTOS
      cy.get('.container > :nth-child(2)').should("be.visible").contains("Bienvenido")
      cy.get(':nth-child(2) > strong').should("be.visible").contains("Federico Lucas")
      cy.get(':nth-child(3) > :nth-child(1) > .card > .card-body > .card-title').should("be.visible").contains("Rol de Usuarios Activos")
      cy.get(':nth-child(3) > :nth-child(2) > .card > .card-body > .card-title').should("be.visible").contains("Cantidad de Clientes Activos")
  
        cy.get(':nth-child(2) > .card > .card-body > .table > thead > tr > :nth-child(1)').should("be.visible").contains("Tipo de Cliente")
        cy.get(':nth-child(2) > .card > .card-body > .table > tbody > tr > :nth-child(1)').should("be.visible").contains("Activo")
        cy.xpath("//th[contains(.,'Cantidad')]").should("be.visible").contains("Cantidad")

        cy.xpath("//h5[contains(.,'Último Cliente Creado')]").should("be.visible").contains("Último Cliente Creado")
        cy.get(':nth-child(1) > .card > .card-body > .card-text').should("be.visible").contains("José Matías Marquez")
        cy.xpath("//h5[contains(.,'Último Usuario Creado')]").should("be.visible").contains("Último Usuario Creado")
        cy.get(':nth-child(2) > .card > .card-body > .card-text').should("be.visible").contains("Federico Lucas Marquez (Usuario)")
        cy.xpath("//h5[contains(.,'Último Proyecto Creado')]").should("be.visible").contains("Último Proyecto Creado")
        cy.get(':nth-child(3) > .card > .card-body > .card-text').should("be.visible").contains("Casa de 2 habitaciones con hall")
        cy.xpath("//h5[contains(.,'Porcentaje de Proyectos por Tipo')]").should("be.visible").contains("Porcentaje de Proyectos por Tipo")
        cy.xpath("//h5[contains(.,'Cantidad de Proyectos por Tipo')]").should("be.visible").contains("Cantidad de Proyectos por Tipo")
        cy.xpath("//h5[@class='card-title'][contains(.,'Cantidad de Proyectos por Tipo y Tiempo')]").should("be.visible").contains("Cantidad de Proyectos por Tipo y Tiempo")
        cy.xpath("//h5[contains(.,'Estado de Proyectos por Intervalo de Tiempo')]").should("be.visible").contains("Estado de Proyectos por Intervalo de Tiempo")
        cy.xpath("//h5[contains(.,'Cobro por Intervalo de Tiempo')]").should("be.visible").contains("Cobro por Intervalo de Tiempo")
        cy.xpath("//h5[contains(.,'Porcentaje y Montos de Metodos de Pago')]").should("be.visible").contains("Porcentaje y Montos de Metodos de Pago")

        //CERRAR SESIÓN  
        cy.xpath("//button[@class='nav-link btn btn-link'][contains(.,'Cerrar sesión')]").should("be.visible").contains("Cerrar sesión").click()        
        cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
        cy.get('.modal-footer > .btn-primary').should("be.visible").click()      
      });
    });



 

