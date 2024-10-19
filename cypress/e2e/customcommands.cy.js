/// <reference types="cypress" />

import { login, passwd } from "../fixtures/loginData.json"; 

describe("Custom Commands", () => {
    it("Logowanie", () => {
        cy.login(login, passwd);
    })
})