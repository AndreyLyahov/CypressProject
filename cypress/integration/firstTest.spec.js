/// <reference types="Cypress" />

import { mobileRplenishment } from "../support/pages/mobileReplenishment"


it.only("Replenishment of Ukrainian mobile phone number", () => {

    cy.visit('https://next.privat24.ua/mobile')
    
    mobileRplenishment.typePhoneNumber('686979712')
    mobileRplenishment.typeAmount('1')
    mobileRplenishment.tyoeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(3000)
    mobileRplenishment.submitPayment()
    mobileRplenishment.checkDebitCard('4552 **** **** 8217')
    mobileRplenishment.checkDebitAmount('1')
    mobileRplenishment.checkDebitAmountAndComission('2')
    mobileRplenishment.checkReceiverAmount('1')
    mobileRplenishment.checkPaymentCurrency('UAH')
})

it('PageObject1', () => {

    cy.visit('https://docs.cypress.io/guides/getting-started/installing-cypress.html#Opening-Cypress')
    cy.contains('Getting Started');
})