// Pruebas del login de SauceDemo
describe("Login", () => {

  // Antes de cada prueba, abre la página de login
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login exitoso con usuario válido", () => {
    // Escribir usuario y contraseña
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Validar que entró a la página de productos
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");
  });

  it("Login fallido con contraseña incorrecta", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("clave_mala");
    cy.get("#login-button").click();

    // Validar que aparece el mensaje de error
    cy.get("[data-test='error']").should("be.visible");
  });

  it("Login bloqueado con usuario bloqueado", () => {
    cy.get("#user-name").type("locked_out_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Validar que el mensaje dice que el usuario está bloqueado
    cy.get("[data-test='error']").should("contain", "locked out");
  });

});