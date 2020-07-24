Cypress.Commands.add('startProcess',(projectSelect, amount, creditMaturity)=>{
  cy.get('#projectSelect').select(projectSelect).should('have.class', 'ng-valid')
  cy.get('#amount').select(amount).should('have.class', 'ng-valid')
  cy.get('#creditMaturity').select(creditMaturity).should('have.class', 'ng-valid')
})
Cypress.Commands.add('typeLogin', (email) => {
    cy.get('#email-input').type(email).should('have.class', 'ng-valid')
    })
Cypress.Commands.add('familyStatus',(maritalStatus,childNumberPropal) =>{
  cy.get('#maritalStatus-input').select(maritalStatus).should('have.class', 'ng-valid')
  cy.get('#childNumberPropal-input').select(childNumberPropal).should('have.class', 'ng-valid')
})
Cypress.Commands.add('housingStatutUser', (housingStatus, housingStatusMonth, housingStatusYear) =>{
  cy.get('#housingStatus-input').select(housingStatus).should('have.class', 'ng-valid')
  cy.get('#housingStatusFrom-input-month').type(housingStatusMonth).should('have.class', 'ng-valid')
  cy.get('#housingStatusFrom-input-year').type(housingStatusYear).should('have.class', 'ng-valid')
})
Cypress.Commands.add('activityUser',(activitySector,profession, businessActivityMonth,businessActivityYear,contractType,employedFromMonth,employedFromYear,pensionMonth,pensionYear) =>{
  cy.get('#activitySector-input').select(activitySector).should('have.class', 'ng-valid')
  cy.wait(2000)
  if(activitySector != "RETIRED"){
    cy.get('#profession-input').select(profession).should('have.class', 'ng-valid')
    cy.wait(2000)
    if(profession == "AUTO_ENTREPRENEUR"){
      cy.get('#businessActivityStartDate-input-month').type(businessActivityMonth).should('have.class', 'ng-valid')
      cy.get('#businessActivityStartDate-input-year').type(businessActivityYear).should('have.class', 'ng-valid')
    }
    if(profession == "Cadre supérieur"){
      cy.get('#contractType-input').select(contractType).should('have.class', 'ng-valid')
      cy.get('#employedFrom-input-month').type(employedFromMonth).should('have.class', 'ng-valid')
      cy.get('#employedFrom-input-year').type(employedFromYear).should('have.class', 'ng-valid')
    }
  }
  if(activitySector == "RETIRED"){
    cy.get('#profession-input').select(profession).should('have.class', 'ng-valid')
    cy.wait(2000)
    cy.get('#pensionFrom-input-month').type(pensionMonth).should('have.class', 'ng-valid')
    cy.get('#pensionFrom-input-year').type(pensionYear).should('have.class', 'ng-valid')
  }

})
Cypress.Commands.add('salaryUser',(mainIncome, coIncome, housingAssistance, additionalIncome,maritalStatus) =>{
  cy.get('#mainIncome-input').type(mainIncome).should('have.class', 'ng-valid')
  if(maritalStatus == "Marié(e)"||"COHABITING"){
    cy.get('#coIncome-input').type(coIncome).should('have.class', 'ng-valid')
  }
  if(maritalStatus == "SINGLE"){
    cy.get('#housingAssistance-input').type(housingAssistance).should('have.class', 'ng-valid')
    cy.get('#additionalIncome-input').type(additionalIncome).should('have.class', 'ng-valid')
  }
})
Cypress.Commands.add('partnerActivity',(partnerActivitySector, partnerProfession, partnerContract,partnerEmployedM,partnerEmployedY)=>{
    cy.get('#partnerActivitySector-input').select(partnerActivitySector).should('have.class', 'ng-valid')
    cy.get('#partnerProfession-input').select(partnerProfession).should('have.class', 'ng-valid')
    cy.get('#partnerContractType-input').select(partnerContract).should('have.class', 'ng-valid')
    cy.get('#partnerEmployedFrom-input-month').type(partnerEmployedM).should('have.class', 'ng-valid')
    cy.get('#partnerEmployedFrom-input-year').type(partnerEmployedY).should('have.class', 'ng-valid')
})
Cypress.Commands.add('outcomesUser',(mortgageAmount,rentAmount, loanCount, type, loanAmount) =>{
    cy.get('#rentAmount-input').type(rentAmount).should('have.class', 'ng-valid')
    cy.get('#loanCount-input').select(loanCount).should('have.class', 'ng-valid')
    cy.get('#type-input').select(type).should('have.class', 'ng-valid')
    cy.get('#loanAmount-input').type(loanAmount).should('have.class', 'ng-valid')
    cy.get('#mortgageAmount-input').type(mortgageAmount).should('have.class', 'ng-valid')
    cy.get('#loanCount-input').select(loanCount).should('have.class', 'ng-valid')
  cy.wait(2000)  
  
})
Cypress.Commands.add('bankUser', (bankCode, bankFrom)=>{
  cy.get('#bankCode-input').select(bankCode).should('have.class', 'ng-valid')
  cy.get('#bankFrom-input-year').type(bankFrom).should('have.class', 'ng-valid')
})
Cypress.Commands.add('personnalInfo',(maritalStatus, gender, lastName, firstName, maidenName, dayBirth,monthBirth,yearBirth,postalCodeBirth)=>{
  cy.get('#GENDERCODE_'+ gender).check({ force: true }).should('be.checked')
  cy.get('#lastName-input').type(lastName).should('have.class', 'ng-valid')
  cy.get('#firstName-input').type(firstName).should('have.class', 'ng-valid')
  if(maritalStatus == 'MARRIED') {
    cy.get('#maidenName-input').type(maidenName).should('have.class', 'ng-valid')
  }
  cy.get('#dateOfBirth-input-day').type(dayBirth).should('have.class', 'ng-valid')
  cy.get('#dateOfBirth-input-month').type(monthBirth).should('have.class', 'ng-valid')
  cy.get('#dateOfBirth-input-year').type(yearBirth).should('have.class', 'ng-valid')
  cy.get('#postalCode-input').type(postalCodeBirth).should('have.class', 'ng-valid')
  cy.get('#city-input').should('have.class', 'ng-valid')
  cy.wait(2000)
})

Cypress.Commands.add('userContact',(personnalNumber, userAddress, userPostalCode, userCountry)=>{
  cy.get('#cellPhoneNumber-input').type(personnalNumber).should('have.class', 'ng-valid')
  cy.get('#address-input').type(userAddress).should('have.class', 'ng-valid')
  cy.get('#postalCode-input').type(userPostalCode).should('have.class', 'ng-valid')
  cy.get('#city-input').should('have.class', 'ng-valid')
  cy.get('#countryZone-input').select(userCountry).should('have.class', 'ng-valid')
})