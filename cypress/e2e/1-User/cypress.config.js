const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  viewportWidth: 1500,
  viewportHeight: 864,
  chromeWebSecurity: false, // Corrección del nombre de la propiedad
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 19000,
  projectId: "se1mbb",
  videoCompression: false, 
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        queryDatabase(query) {
          return sqlServer.queryDatabase(dbConfig, query)
            .then(result => {
              // Devuelve el resultado obtenido de la base de datos
              return result;
            })
            .catch(error => {
              // Maneja cualquier error que ocurra durante la consulta
              throw error;
            });
        }
      });
    }
    }
});