/// <reference types="cypress" />

describe("Test Kustomer Custom App", () => {
  it("should show chat button", () => {
    cy.visit("http://localhost:8080", {
      onBeforeLoad: (win) => {
        win.__mockedWidgetSdk = {
          settings: {
            123: {
              apiKey: Cypress.env("apiKey"),
            },
          },
        };
      },
    });

    cy.get(`iframe#launcher`, { timeout: 10000 });
  });
});
