Cypress.Commands.add('typeLogin', (user) => {
    cy.get('#email-input').type(user.email)
    })
Cypress.Commands.add('familyStatus',(maritalStatus,childNumberPropal) =>{
  cy.get('#maritalStatus-input').select(maritalStatus).should('have.class', 'ng-valid')
  cy.get('#childNumberPropal-input').select(childNumberPropal).should('have.class', 'ng-valid')
})
Cypress.Commands.add('housingStatutUser', (housingStatus, housingStatusMonth, housingStatusYear) =>{
  cy.get('#housingStatus-input').select(housingStatus)
  cy.get('#housingStatusFrom-input-month').type(housingStatusMonth)
  cy.get('#housingStatusFrom-input-year').type(housingStatusYear)
})
Cypress.Commands.add('activityUser',(activitySector,profession, businessActivityMonth,businessActivityYear) =>{
  cy.get('#activitySector-input').select(activitySector)
  cy.get('#profession-input').select(profession)
  cy.get('#businessActivityStartDate-input-month').type(businessActivityMonth)
  cy.get('#businessActivityStartDate-input-year').type(businessActivityYear)
})
Cypress.Commands.add('salaryUser',(mainIncome, housingAssistance, additionalIncome) =>{
  cy.get('#mainIncome-input').type(mainIncome)
  cy.get('#housingAssistance-input').type(housingAssistance)
  cy.get('#additionalIncome-input').type(additionalIncome)
})
Cypress.Commands.add('outcomesUser',(rentAmount, loanCount, type, loanAmount) =>{
  cy.get('#rentAmount-input').type(rentAmount)
  cy.get('#loanCount-input').select(loanCount)
  cy.get('#type-input').select(type)
  cy.get('#loanAmount-input').type(loanAmount)
})
Cypress.Commands.add('bankUser', (bankCode, bankFrom)=>{
  cy.get('#bankCode-input').select(bankCode)
  cy.get('#bankFrom-input-year').type(bankFrom)
})