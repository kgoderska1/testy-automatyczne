/// <reference types="cypress" />

describe("Test związany z wybieraniem select", () => {
    it("Kliknięcie w zakładce Women", () => {
        cy.visit("/");
        cy.get('a[title="Women"]').click();
    })

    it("Wybranie filtra In stock", () => {
        cy.get("#selectProductSort").select("In stock")
    })

    it("Wybranie filtra Product Name: A to Z", () => {
        cy.get("#selectProductSort").select("Product Name: A to Z")
    })
})