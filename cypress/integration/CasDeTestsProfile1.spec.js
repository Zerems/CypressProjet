context('Choose the options to get credit with profile 1', () => {
  let profile = require('../fixtures/Profile1')

  before(() => {
    cy.visit("https://www.younited-credit.com/")
    cy.wait(2000)
    cy.title().should('include','Le Crédit')
    cy.get('#projectSelect').select('NEWCAR')
    cy.get('option').should('contain','Véhicule neuf')
    cy.get('#amount').select('2K')
    cy.get('option').should('contain','2000 €')
    cy.get('#creditMaturity').select('M12')
    cy.get('option').should('contain','12 mois')
    cy.get('[data-di-id=di-id-bca9a80c-4fc29f73]').click()
    cy.url().should('include', '/email')
    cy.get("h2").should('contain', 'Découvrez votre offre de prêt de')
    cy.typeLogin({ email: 'michel.sapin@gmail.com'})
    cy.get('[data-test=navigator-compact-forward]').click()
})
  it('Consumer choose his marital status', ()=>{
    cy.get("h2").should('contain', 'Votre situation familiale')
    cy.url().should('contain','familysituation')
    cy.familyStatus(profile.maritalStatus, profile.chilNumberPropal)
    cy.get('[type="checkbox"]').check({ force: true }).should('be.checked')
    cy.get('[data-test="navigator-compact-forward"]').click()
  })
  it('Consumer choose his housing statut',()=>{
    cy.get("h2").should('contain', 'Votre logement')
    cy.url().should('contain', '/housing')
    cy.housingStatutUser(profile.housinStatus, profile.housingStatusMonth,profile.housingStatusYear)
    cy.get('[type="checkbox"]').uncheck({ force: true })
    cy.get('[data-test="navigator-compact-forward"]').click()
  })
  
  it('Consummer choose his job', () =>{
      cy.get("h2").should('contain', 'Votre situation professionnelle')
     cy.url().should('contain', '/professionalsituation')
     cy.activityUser(profile.activitySector, profile.profession, profile.bunsinessActivityMonth,profile.businessActivityYear)
     cy.get('option').should('contain','Indépendants / Travailleurs non salariés')
     cy.get('option').should('contain','Auto-Entrepreneur')
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
    cy.get('option').should('contain','1')
    cy.get('option').should('contain','Prêt Personnel')
    cy.get('[data-test="navigator-compact-forward"]').click()
  })
  
  it ('Consumer give his Bank',()=>{
    cy.get("h2").should('contain','Votre banque')
    cy.url().should('contain', '/bank')
    cy.bankUser(profile.bankCode, profile.bankFrom)
    cy.get('option').should('contain','HSBC')
    cy.get('[data-test=navigator-compact-forward]').click()
  }) 
})