Cypress.Commands.add('typeLogin', (user) => {
    cy.get('#email-input').type(user.email)
    })
Cypress.Commands.add('maritalStatus',(user)=>{
  cy.get('#maritalStatus').select(user.maritalStatut)
} )
Cypress.Commands.add('childNumberPropal', (user)=>{
  cy.get('#childNumberPropal-input').select(user.childNumberPropal)
})
Cypress.Commands.add('housingStatus', (user)=>{
  cy.get('#housingStatus-input').select(user.housingStatus)
})
Cypress.Commands.add('housingStatusMonth',(user)=>{
  cy.get('#housingStatusFrom-input-month').type(user.housingStatusMonth)
})
Cypress.Commands.add('housingStatusYear',(user)=>{
  cy.get('#housingStatusFrom-input-year').type(user.housingStatusYear)
})
Cypress.Commands.add('activitySector',(user)=>{
  cy.get('#activitySector-input').select(user.activitySector)
})
Cypress.Commands.add('profession',(user)=>{
  cy.get('#profession-input').select(user.profession)
})
Cypress.Commands.add('businessActivityMonth',(user)=>{
  cy.get('#businessActivityStartDate-input-month').type(user.businessActivityMonth)
})
Cypress.Commands.add('businessActivityYear',(user)=>{
  cy.get('#businessActivityStartDate-input-year').type(user.businessActivityYear)
})
Cypress.Commands.add('mainIncome',(user)=>{
  cy.get('#mainIncome-input').type(user.mainIncome)
})
Cypress.Commands.add('housingAssistance',(user)=>{
  cy.get('#housingAssistance-input').type(user.housingAssistance)
})
Cypress.Commands.add('additionalIncome', (user)=>{
  cy.get('#additionalIncome-input').type(user.additionalIncome)
})
Cypress.Commands.add('rentAmount',(user)=>{
  cy.get('#rentAmount-input').type(user.rentAmount)
})
Cypress.Commands.add('loanCount',(user)=>{
  cy.get('#loanCount-input').select(user.loanCount)
})
Cypress.Commands.add('type',(user)=>{
  cy.get('#type-input').select(user.type)
})
Cypress.Commands.add('loanAmount',(user)=>{
  cy.get('#loanAmount-input').type(user.loanAmount)
})
Cypress.Commands.add('bankCode',(user)=>{
  cy.get('#bankCode-input').select(user.bankCode)
})
Cypress.Commands.add('bankFrom',(user)=>{
  cy.get('#bankFrom-input-year').type(user.bankFrom)
})