/// <reference types="cypress" />

import Base from "../pages/Base";
import home from "../pages/home";
import women from "../pages/women";

describe("Test związany z zaznaczaniem checkboxa", () => {
    it("Kliknięcie w zakładce Women", () => {
        Base.openHomePage();
        home.clickOnWomenTab();
        cy.url().should("include", "id_category=3&controller=category")
    })

    it("Zaznaczenie checkboxa w zakładce Women", () => {
        women.checkTops();
        women.topsCheckbox.should("be.checked");
        women.checkDresses();
        women.checkSize();
    })
})