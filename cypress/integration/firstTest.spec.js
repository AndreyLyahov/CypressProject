// describe('My First Test', () => {
  //  it('Does not do much!', () => {
    //  expect(true).to.equal(true)
    //})
  //}) 


it('By ID', ()=>{

    cy.visit("https://www.facebook.com/")
    cy.get('#email')
});

it('By Class', ()=>{

    cy.visit("https://docs.cypress.io/api/commands/and.html#Syntax")
    cy.get('.ds-input')
});

it('By Tag', ()=>{

    cy.visit("https://docs.cypress.io/api/commands/and.html#Syntax")
    cy.get('nav')
});

it('By Tag Value', ()=>{

    cy.visit("https://www.facebook.com/")
    cy.get('[name="pass"]')
});

it('Using Get with Find and Eq', ()=>{

    cy.visit("https://next.privat24.ua/deposit")
    cy.get('tbody').find('td').find('div').find('button').eq('0').click() //comment for git1 1111 dfgsdfgdfggit 
});

it('By Tag Value', ()=>{

    cy.visit("https://www.facebook.com/")
    cy.get('[name="pass"]')
});