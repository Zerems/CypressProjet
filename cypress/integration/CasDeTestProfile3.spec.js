context('Choose the options to get credit with profile3', () => {
  let pacs = require('../fixtures/Profile3Pacs')  
  before(() => {
    cy.visit("https://www.younited-credit.com/")
    cy.wait(2000)
  })
    it('Start process on LandingPage',()=>{
      cy.title().should('include','Le Crédit')
      cy.startProcess(pacs.projectSelect, pacs.amount, pacs.creditMaturity)
      cy.get('[data-di-id=di-id-bca9a80c-4fc29f73]').click()
    })
   it('Enter email', ()=>{
    cy.url().should('include', '/email')
    cy.get("h2").should('contain', 'Découvrez votre offre de prêt de')
    cy.typeLogin(pacs.email)
    cy.get('[data-test=navigator-compact-forward]').click()
   })

   it('Consummer choose his marital statut',() => {
    cy.url().should('contain','familysituation')
    cy.get("h2").should('contain', 'Votre situation familiale')
    cy.familyStatus(pacs.maritalStatus, pacs.childNumberPropal)
    cy.get('[type="checkbox"]').check({ force: true }).should('be.checked') 
    cy.get('[data-test=navigator-compact-forward]').click()
  })
  it('Consumer choose is housing statut',()=>{
    cy.url().should('include', '/housing')
    cy.get("h2").should('contain', 'Votre logement')
    cy.housingStatutUser(pacs.housingStatus, pacs.housingStatusMonth,pacs.housingStatusYear)
    cy.get('[type="checkbox"]').uncheck({ force: true })
    cy.get('[data-test=navigator-compact-forward]').click() 
  })
   it('Consumer choose his job',()=>{
    cy.url().should('include', '/professionalsituation')
    cy.get("h2").should('contain', 'Votre situation professionnelle')
    cy.activityUser(pacs.activitySector,pacs.profession,null,null,null,null,null,pacs.pensionMonth,pacs.pensionYear)
    cy.get('[data-test=navigator-compact-forward]').click()
   })
   it('Consumer choose his partner job',()=>{
    cy.url().should('include', '/partnerprofession')
    cy.get("h2").should('contain', 'Profession de votre conjoint')
    cy.partnerActivity(pacs.partnerActivitySector,pacs.partnerProfession,pacs.partnerContract,pacs.partnerEmployedM,pacs.partnerEmployedY)
    cy.get('[data-test=navigator-compact-forward]').click()
   })
 it('Consumer give his salary',()=>{
    cy.url().should('include', '/incomes')
    cy.get("h2").should('contain', 'Vos revenus mensuels')
    cy.salaryUser(pacs.maritalStatus,pacs.mainIncome, pacs.coIncome, pacs.housingAssistance, pacs.additionalIncome)
    cy.get('[data-test=navigator-compact-forward]').click()
 })
 it('Consumer give his outcomes',()=>{
    cy.url().should('include', '/outcomes')
    cy.get("h2").should('contain', 'Vos charges mensuelles')
    cy.outcomesUser(pacs.housingStatus,null,pacs.loanCount,pacs.rentAmount,null,null)
    cy.get('[data-test=navigator-compact-forward]').click()  
 })   
 it('Consumer give his bank', ()=>{
    cy.url().should('include', '/bank')
    cy.get("h2").should('contain', 'Votre banque')
    cy.bankUser(pacs.bankCode, pacs.bankFrom)
    cy.get('[data-test=navigator-compact-forward]').click()
 })
 it('Consumer give personnal info',()=>{
  cy.get("h2").should('contain','Vos informations')
  cy.url().should('contain','/identity')
  cy.personnalInfo(pacs.gender,pacs.lastName,pacs.firstName,pacs.dayBirth,pacs.monthBirth,pacs.yearBirth,pacs.postalCodeBirth)
  cy.get('[data-test=navigator-compact-forward]').click()
})
it('Consumer give Partner personnal info',()=>{
  cy.get("h2").should('contain','Les informations de votre conjoint')
  cy.url().should('contain','/partneridentity')
  cy.partnerInfoPerso(pacs.maidenName,pacs.genderpartner,pacs.lastNamePartner,pacs.firstNamePartner, pacs.dayBirthPartner,pacs.monthBirthPartner,pacs.yearBirthPartner,pacs.postalCodeBirthPartner)
  cy.get('[data-test=navigator-compact-forward]').click()
})
it('Consumer give his contact',()=>{
  cy.get("h2").should('contain','Vos coordonnées')
  cy.url().should('contain','/contact')
  cy.userContact(pacs.personnalNumber,pacs.userAddress,pacs.userPostalCode,pacs.userCountry)
  cy.get('[data-test=navigator-compact-forward]').click()
})     
 
})