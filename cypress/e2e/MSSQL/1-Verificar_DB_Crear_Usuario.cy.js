const sql = require('mssql')

describe('Verificar creación de usuario en la base de datos', () => {
    it('Verifica si el usuario ha sido creado correctamente', () => {
        const sql = require('mssql')

// Configuración de la conexión a la base de datos con autenticación de Windows
const config = {
    server: 'LMARQUEZ-NB\SQLEXPRESS', // Cambia a la dirección del servidor si es necesario
    database: 'Arquisoft',
    options: {
        trustedConnection: true // Utiliza la autenticación de Windows
    }
}


        // Consulta SQL para verificar si el usuario ha sido creado
        const query = "select * from Users where Mail = 'robertoperfumo@hotmail.com.ar'"

        // Conectarse a la base de datos y ejecutar la consulta
        sql.connect(config).then(pool => {
            return pool.request().query(query)
        }).then(result => {
            // Verificar si se encontraron resultados (es decir, si el usuario existe)
            expect(result.recordset.length).to.be.greaterThan(0)
        }).catch(err => {
            // Manejar errores de conexión o consulta
            console.error('Error en la consulta:', err)
            throw err
        })
    })
})
