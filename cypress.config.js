// Configuración principal de Cypress
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Sitio que vamos a probar
    baseUrl: "https://www.saucedemo.com",
    // No usamos archivo de soporte para mantenerlo simple
    supportFile: false,
    // Graba video solo cuando lo pidamos
    video: false,
  },
});