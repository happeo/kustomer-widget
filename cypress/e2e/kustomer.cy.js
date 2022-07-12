/// <reference types="cypress" />

describe("Test Kustomer Custom App", () => {
  it("should show empty state", () => {
    cy.visit("http://localhost:8080");

    cy.get("[data-testid=chatbot-not-configured-container]");
  });
  it.skip("should show chat button", () => {
    cy.visit("http://localhost:8080", {
      onBeforeLoad: (win) => {
        win.__mockedWidgetSdk = {
          settings: {
            123: {
              apiKey: Cypress.env("ApiKey"),
            },
          },
        };
      },
    });

    cy.get(`iframe#kustomer-ui-sdk-iframe`, { timeout: 10000 });
  });
});
