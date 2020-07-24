context('Choose the options to get credit with profile 1', () => {
  let profile = require('../fixtures/Profile1')

  before(() => {
    cy.visit("https://www.younited-credit.com/")
    cy.wait(2000)
  })
    it('Start process on LandingPage',()=>{
      cy.title().should('include','Le Crédit')
      cy.startProcess(profile.projectSelect, profile.amount, profile.creditMaturity)
      cy.get('[data-di-id=di-id-bca9a80c-4fc29f73]').click()
    })
   it('Enter email', ()=>{
    cy.url().should('include', '/email')
    cy.get("h2").should('contain', 'Découvrez votre offre de prêt de')
    cy.typeLogin(profile.email)
    cy.get('[data-test=navigator-compact-forward]').click()

   })
    
  it('Consumer choose his marital status', ()=>{
    cy.get("h2").should('contain', 'Votre situation familiale')
    cy.url().should('contain','familysituation')
    cy.familyStatus(profile.maritalStatus, profile.childNumberPropal)
    cy.get('[type="checkbox"]').check({ force: true }).should('be.checked')
    cy.get('[data-test="navigator-compact-forward"]').click()
  })
  it('Consumer choose his housing statut',()=>{
    cy.get("h2").should('contain', 'Votre logement')
    cy.url().should('contain', '/housing')
    cy.housingStatutUser(profile.housingStatus, profile.housingStatusMonth,profile.housingStatusYear)
    cy.get('[type="checkbox"]').uncheck({ force: true })
    cy.get('[data-test="navigator-compact-forward"]').click()
  })
  
  it('Consummer choose his job', () =>{
    cy.get("h2").should('contain', 'Votre situation professionnelle')
    cy.url().should('contain', '/professionalsituation')
    cy.activityUser(profile.activitySector, profile.profession, profile.businessActivityMonth,profile.businessActivityYear)
    cy.get('[data-di-id="di-id-d838032c-320c79b9"] > label').click()
    cy.get('[data-test="navigator-compact-forward"]').click()
  })
  
  it('Consumer give his salary',()=>{
    cy.get("h2").should('contain', 'Vos revenus mensuels')
    cy.url().should('contain', '/incomes')
    cy.salaryUser(profile.mainIncome, profile.housingAssistance, profile.additionalIncome)
    cy.get('[data-test="navigator-compact-forward"]').click()
  })
  
  it('Consumer give his outcomes', ()=> {
    cy.get("h2").should('contain', 'Vos charges mensuelles')
    cy.url().should('contain', '/outcomes')
    cy.outcomesUser(profile.rentAmount, profile.loanCount, profile.type, profile.loanAmount)
    cy.get('[data-test="navigator-compact-forward"]').click()
  })
  
  it ('Consumer give his Bank',()=>{
    cy.get("h2").should('contain','Votre banque')
    cy.url().should('contain', '/bank')
    cy.bankUser(profile.bankCode, profile.bankFrom)
    cy.get('[data-test=navigator-compact-forward]').click()
  })
  it('Consumer give personnal info',()=>{
    cy.get("h2").should('contain','Vos informations')
    cy.url().should('contain','/identity')
    cy.personnalInfo(profile.maritalStatus, profile.gender,profile.lastName,profile.firstName, null, profile.dayBirth,profile.monthBirth,profile.yearBirth,profile.postalCodeBirth)
    cy.get('[data-test=navigator-compact-forward]').click()
  })
  it('Consumer give his contact',()=>{
    cy.get("h2").should('contain','Vos coordonnées')
    cy.url().should('contain','/contact')
    cy.userContact(profile.personnalNumber,profile.userAddress,profile.userPostalCode,profile.userCountry)
    cy.get('[data-test=navigator-compact-forward]').click()
  })
})