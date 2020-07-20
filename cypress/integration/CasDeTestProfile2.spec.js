context('Choose the options to get credit with profile 2', () => {
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
  it('Consummer choose his marital statut',() => {
    cy.url().should('contain','familysituation')
    cy.get("h2").should('contain', 'Votre situation familiale')
    cy.get('#maritalStatus-input').select('Marié(e)')
    cy.get('option').should('contain', 'Marié(e)')
    cy.get('#childNumberPropal-input').select('0')
    cy.get('option').should('contain','0')
    cy.get('[type="checkbox"]').check({ force: true }).should('be.checked') 
    cy.get('[data-test=navigator-compact-forward]').click()
  })
  it('Consumer choose is housing statut',()=>{
    cy.url().should('include', '/housing')
    cy.get("h2").should('contain', 'Votre logement')
    cy.get('#housingStatus-input').select('Propriétaire (avec crédit immobilier en cours)')
    cy.get('#housingStatusFrom-input-month').type('03')
    cy.get('#housingStatusFrom-input-year').type('2010')
    cy.get('[type="checkbox"]').uncheck({ force: true })
    cy.get('[data-test=navigator-compact-forward]').click()     
  })
  it('Consumer choose his job',()=>{
    cy.get("h2").should('contain', 'Votre situation professionnelle')
    cy.url().should('include', '/professionalsituation')
    cy.get('#activitySector-input').select('Salarié(e) du secteur privé')
    cy.get('#profession-input').select('Cadre supérieur')
    cy.get('#contractType-input').select('CDI')
    cy.get('#employedFrom-input-month').type('09')
    cy.get('#employedFrom-input-year').type('2010')
    cy.get('[data-test=navigator-compact-forward]').click()
  })
  it('Consumer choose his partner job',()=>{
    cy.url().should('include', '/partnerprofession')
    cy.get("h2").should('contain', 'Profession de votre conjoint')
    cy.get('#partnerActivitySector-input').select('Salarié(e) du secteur privé')
    cy.get('#partnerProfession-input').select('Cadre supérieur')
    cy.get('#partnerContractType-input').select('CDI')
    cy.get('#partnerEmployedFrom-input-month').type('05')
    cy.get('#partnerEmployedFrom-input-year').type('2000')
    cy.get('[data-test=navigator-compact-forward]').click()
  })   
  it('Consumer give his salary',()=>{
    cy.url().should('include', '/incomes')
    cy.get("h2").should('contain', 'Vos revenus mensuels')
    cy.get('#mainIncome-input').type('2200')
    cy.get('#coIncome-input').type('2300')
    cy.get('[data-test=navigator-compact-forward]').click()
  })  
  it('Consumer give his outcomes',()=>{
    cy.url().should('include', '/outcomes')
    cy.get("h2").should('contain', 'Vos charges mensuelles')
    cy.get('#mortgageAmount-input').type('780')
    cy.get('#loanCount-input').select('0')
    cy.get('[data-test=navigator-compact-forward]').click()  
  })    
  it('Consumer give his bank', ()=>{
    cy.url().should('include', '/bank')
    cy.get("h2").should('contain', 'Votre banque')
    cy.get('#bankCode-input').select('LCL')
    cy.get('#bankFrom-input-year').type('1995')
    cy.get('[data-test=navigator-compact-forward]').click()
  }) 
})