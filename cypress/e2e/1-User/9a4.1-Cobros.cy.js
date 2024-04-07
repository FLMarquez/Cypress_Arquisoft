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
      // VERIFICAR LA EXISTENCIA DEL NOMBRE Arquisoft (para Arquitectos) EN LA WEB AL INGRESAR
      cy.get('.navbar-brand > strong').should("be.visible").contains("Arquisoft (para Arquitectos)")
      // VERIFICAR EL NOMBRE DEL USUARIO LOGUEADO EN LA WEB AL INGRESAR
      cy.get(':nth-child(7) > .nav-link').should("be.visible").contains("Usuario: Federico Lucas Marquez")
      // VERIFICAR LOS BOTONES HABILITADOS QUE TIENE EL USUARIO ADMIN AL INGRESAR A LA WEB CON USUARIO Y CONTRASEÑA VALIDA
      cy.get(':nth-child(1) > .nav-link').should("be.visible").contains("Dashboard")    
      cy.get(':nth-child(2) > .nav-link').should("be.visible").contains("Clientes")
      cy.get(':nth-child(3) > .nav-link').should("be.visible").contains("Usuarios")
      cy.get(':nth-child(4) > .nav-link').should("be.visible").contains("Tipología")
      cy.get(':nth-child(5) > .nav-link').should("be.visible").contains("Proyecto")
      cy.get(':nth-child(6) > .nav-link').should("be.visible").contains("Servicio")
      cy.get(':nth-child(7) > .nav-link').should("be.visible").contains("Usuario: Federico Lucas Marquez")
      cy.get(':nth-child(8) > .nav-link').should("be.visible").contains("Cerrar sesión") 
      // PROYECTOS - COBROS
      cy.get(':nth-child(5) > .nav-link').should("be.visible").click()
      cy.get('#dt-search-0').should("be.visible").type("Casa de 2 habitaciones con hall{enter}")
      cy.get('.btn-warning').should("be.visible").click()
      cy.get('.fw-bold').should("be.visible").contains("Listado de Cobros:")
      cy.get('h2').should("be.visible").should("be.visible").contains("Casa de 2 habitaciones con hall (Marquez, José Matías)")
      cy.get('.pb-3 > :nth-child(5)').should("be.visible").contains("Permite gestionar los cobros del Proyecto")
      cy.get(':nth-child(4) > .nav-link').should("be.visible").click()
      cy.get('#dt-search-0').should("be.visible").type("Vivienda Clásica con 2 habitaciones y hall{enter}")

      // Obtener el número de pantalla1
cy.get('[style="text-align: right;"]').then($numeroPantalla1 => {
    const numeroPantalla1 = parseFloat($numeroPantalla1.text().replace(/\$|\.|,/g, ''));

    cy.get(':nth-child(5) > .nav-link').should("be.visible").click()
    cy.get('#dt-search-0').should("be.visible").type("Casa de 2 habitaciones con hall{enter}")
    cy.get('[href="/Project/Edit/26"]').should("be.visible").click()

    // Obtener el número de pantalla2
    cy.get('#Budget').then($numeroPantalla2 => {
        const numeroPantalla2Text = $numeroPantalla2.text().replace(/[^\d.,]/g, ''); // Eliminar caracteres no numéricos
        const numeroPantalla2 = parseFloat(numeroPantalla2Text.replace(',', '.')); // Reemplazar la coma por un punto para el separador decimal

        // Verificar que el número obtenido sea válido
        if (!isNaN(numeroPantalla2)) {
            // Calcular la suma
            const suma = numeroPantalla1 + numeroPantalla2;

            cy.get(':nth-child(5) > .nav-link').should("be.visible").click()
            cy.get('#dt-search-0').should("be.visible").type("Casa de 2 habitaciones con hall{enter}")
            cy.get('.btn-warning').should("be.visible").click()

            cy.xpath("(//span[contains(@class,'text-black')])[2]").then($numeroPantalla3 => {
                const numeroPantalla3Text = $numeroPantalla3.text();
                const numeroPantalla3 = parseFloat(numeroPantalla3Text);

                // Log para verificar el valor obtenido
                console.log('Valor de pantalla3:', numeroPantalla3);

                // Verificar que el número de pantalla3 sea la suma de los números de pantalla1 y pantalla2
                expect(numeroPantalla3).to.equal(suma);
            });
        } else {
            console.error('El número de pantalla 2 no es válido:', numeroPantalla2Text);
        }
    });
});


//CREAR COBRO EFECTIVO
cy.get(':nth-child(5) > .nav-link').should("be.visible").click()
cy.get('#dt-search-0').should("be.visible").type("Casa de 2 habitaciones con hall{enter}")
cy.get('.btn-warning').should("be.visible").click()
cy.wait(1000)
cy.xpath("//a[contains(.,'Crear Cobro')]").should("be.visible").click()
cy.get('h1').should("be.visible").contains("Agregar Cobro")
cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Agregar un nuevo cobro al Proyecto:")
cy.get('.row > .form-group > .control-label').should("be.visible").contains("Nº Cobro:")
cy.get(':nth-child(2) > .control-label').should("be.visible").contains("Fecha de cobro:")
cy.get(':nth-child(4) > .control-label').should("be.visible").contains("Monto")
cy.get(':nth-child(5) > .control-label').should("be.visible").contains("Método de Pago")

// Obtener la fecha actual
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
const dd = String(today.getDate()).padStart(2, '0');

// Formatear la fecha actual al formato 'YYYY-MM-DD'
const fechaActual = `${yyyy}-${mm}-${dd}`;


// Verificar la fecha en el elemento #PaymentDate
cy.get('#PaymentDate').invoke('val').then(paymentDate => {
    // Comparar la fecha actual con la fecha del elemento #PaymentDate
    expect(paymentDate.trim()).to.equal(fechaActual);
});


cy.get('#Amount').should("be.visible").clear()
cy.get('#Amount').should("be.visible").type("2500000")
cy.get('#PaymentMethodValue').should("be.visible").select("Efectivo")
cy.get('.m-3 > .btn-primary').should("be.visible").click()



//CREAR COBRO TRANSFERENCIA
cy.get(':nth-child(5) > .nav-link').should("be.visible").click()
cy.get('#dt-search-0').should("be.visible").type("Casa de 2 habitaciones con hall{enter}")
cy.get('.btn-warning').should("be.visible").click()
cy.xpath("//a[contains(.,'Crear Cobro')]").should("be.visible").click()
cy.get('h1').should("be.visible").contains("Agregar Cobro")
cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Agregar un nuevo cobro al Proyecto:")
cy.get('.row > .form-group > .control-label').should("be.visible").contains("Nº Cobro:")
cy.get(':nth-child(2) > .control-label').should("be.visible").contains("Fecha de cobro:")
cy.get(':nth-child(4) > .control-label').should("be.visible").contains("Monto")
cy.get(':nth-child(5) > .control-label').should("be.visible").contains("Método de Pago")

// Obtener la fecha actual
const today2 = new Date();
const yyyy2 = today2.getFullYear();
const mm2 = String(today2.getMonth() + 1).padStart(2, '0'); // Enero es 0!
const dd2 = String(today2.getDate()).padStart(2, '0');

// Formatear la fecha actual al formato 'YYYY-MM-DD'
const fechaActual2 = `${yyyy2}-${mm2}-${dd2}`;


// Verificar la fecha en el elemento #PaymentDate
cy.get('#PaymentDate').invoke('val').then(paymentDate => {
    // Comparar la fecha actual con la fecha del elemento #PaymentDate
    expect(paymentDate.trim()).to.equal(fechaActual2);
});


cy.get('#Amount').should("be.visible").clear()
cy.get('#Amount').should("be.visible").type("2500000")
cy.get('#PaymentMethodValue').should("be.visible").select("Transferencia")
cy.get('.m-3 > .btn-primary').should("be.visible").click()

//CREAR COBRO DÉBITO
cy.get(':nth-child(5) > .nav-link').should("be.visible").click()
cy.get('#dt-search-0').should("be.visible").type("Casa de 2 habitaciones con hall{enter}")
cy.get('.btn-warning').should("be.visible").click()
cy.xpath("//a[contains(.,'Crear Cobro')]").should("be.visible").click()
cy.get('h1').should("be.visible").contains("Agregar Cobro")
cy.get('.pb-3 > :nth-child(4)').should("be.visible").contains("Agregar un nuevo cobro al Proyecto:")
cy.get('.row > .form-group > .control-label').should("be.visible").contains("Nº Cobro:")
cy.get(':nth-child(2) > .control-label').should("be.visible").contains("Fecha de cobro:")
cy.get(':nth-child(4) > .control-label').should("be.visible").contains("Monto")
cy.get(':nth-child(5) > .control-label').should("be.visible").contains("Método de Pago")

// Obtener la fecha actual
const today3 = new Date();
const yyyy3 = today3.getFullYear();
const mm3 = String(today3.getMonth() + 1).padStart(2, '0'); // Enero es 0!
const dd3 = String(today3.getDate()).padStart(2, '0');

// Formatear la fecha actual al formato 'YYYY-MM-DD'
const fechaActual3 = `${yyyy3}-${mm3}-${dd3}`;


// Verificar la fecha en el elemento #PaymentDate
cy.get('#PaymentDate').invoke('val').then(paymentDate => {
    // Comparar la fecha actual con la fecha del elemento #PaymentDate
    expect(paymentDate.trim()).to.equal(fechaActual3);
});


cy.get('#Amount').should("be.visible").clear()
cy.get('#Amount').should("be.visible").type("7500000")
cy.get('#PaymentMethodValue').should("be.visible").select("Débito")
cy.get('.m-3 > .btn-primary').should("be.visible").click()


    // Función para convertir valores de moneda a números
    function parseCurrencyToNumber(currencyString) {
        // Eliminar caracteres no numéricos
        const cleanString = currencyString.replace(/[^\d,.-]/g, '')
  
        // Reemplazar ',' por '.' para representar números decimales
        const numberString = cleanString.replace(',', '.')
  
        // Convertir a número
        return parseFloat(numberString)
      }
  
       
      // Obtener los elementos de la tabla y sus valores
      cy.get('#dt-search-0').should("be.visible").clear()
      cy.get('#dt-search-0').should("be.visible").type("Efectivo{enter}")
      cy.get('#myTable > tbody > tr > :nth-child(4)').then(($row1Column4) => {
        const valor1 = parseCurrencyToNumber($row1Column4.text())
        console.log('Valor 1:', valor1);
        cy.get('#dt-search-0').should("be.visible").clear()
        cy.get('#dt-search-0').should("be.visible").type("Transferencia{enter}")
        cy.get('#myTable > tbody > tr > :nth-child(4)').then(($row2Column4) => {
          const valor2 = parseCurrencyToNumber($row2Column4.text())
          console.log('Valor 2:', valor2);
          cy.get('#dt-search-0').should("be.visible").clear()
          cy.get('#dt-search-0').should("be.visible").type("Débito{enter}")
          cy.get('#myTable > tbody > tr > :nth-child(4)').then(($row3Column4) => {
            const valor3 = parseCurrencyToNumber($row3Column4.text())
            console.log('Valor 3:', valor3);
  
            // Calcular la suma de los valores obtenidos
            const sumaValores = valor1 + valor2 + valor3
            console.log('Valor Suma Valores:', sumaValores);
  
            // Obtener el elemento específico
            cy.get('[style="display: flex; align-items: center;"] > .table > tbody > tr > :nth-child(5)').then(($specificElement) => {
              const valorEspecifico = parseCurrencyToNumber($specificElement.text())
              console.log('Valor Especifico:', valorEspecifico);

              // Verificar si la suma de los valores seleccionados coincide con el valor específico
              expect(sumaValores).to.equal(valorEspecifico)


              
            })

            
          })


          // Realizar la resta de los valores obtenidos
const restarResultado = (valor1, valor2) => {
    const resultado = valor1 - valor2;
    return resultado;
};

// Obtener el valor del primer elemento
cy.get('.fs-6 > .text-black').then(($elemento1) => {
    const valor1 = parseFloat($elemento1.text().replace(/[^\d.,]/g, ''));
    
    // Obtener el valor del segundo elemento
    cy.get('[style="display: flex; align-items: center;"] > .table > tbody > tr > :nth-child(5)').then(($elemento2) => {
        const valor2 = parseFloat($elemento2.text().replace(/[^\d.,]/g, ''));

        // Realizar la resta
        const resultadoResta = restarResultado(valor1, valor2);

        // Asignar el resultado a un nuevo elemento
        cy.get('[style="display: flex; align-items: center;"] > .table > tbody > tr > :nth-child(8)').should("be.visible").contains(resultadoResta);
    });
});
     
        cy.get('#dt-search-0').should("be.visible").clear()
        cy.get('#dt-search-0').should("be.visible").type("Efectivo")
        cy.xpath("(//button[contains(.,'Anular')])[1]").should("be.visible").click(); 
        cy.get('#deleteModalLabel').should("be.visible").contains("Motivo de Anulación")
        cy.get('[for="deleteReason"]').should("be.visible").contains("Motivo")
        cy.xpath("//textarea[contains(@id,'deleteReason')]").click().type("El cobro no fué realizado")
        cy.get('#confirmDeleteBtn').should("be.visible").click()
        cy.get('tbody > :nth-child(1) > :nth-child(10)').should("be.visible").contains("El cobro no fué realizado")


// Función para realizar la resta entre los valores de los elementos
const restarValores = () => {
    // Obtener el primer valor
    cy.get('.fs-6 > .text-black').then(($elemento1) => {
        const valor1 = parseFloat($elemento1.text().replace(/[^\d.,]/g, ''));

        // Obtener el segundo valor
        cy.get('[style="display: flex; align-items: center;"] > .table > tbody > tr > :nth-child(5)').then(($elemento2) => {
            const valor2 = parseFloat($elemento2.text().replace(/[^\d.,]/g, ''));

            // Calcular la resta
            const resultado = valor1 - valor2;

            // Asignar el resultado al elemento deseado
            cy.get('[style="display: flex; align-items: center;"] > .table > tbody > tr > :nth-child(8)').should("be.visible").contains(resultado);
        });
    });
};

// Llamar a la función para realizar la resta
restarValores();



               
  
  // CERRAR SESIÓN  
  cy.get(':nth-child(8) > .nav-link').should("be.visible").contains("Cerrar sesión").click();        
  cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?");  
  cy.get('.modal-footer > .btn-primary').should("be.visible").click();
  });
  
  })
  })

  })




