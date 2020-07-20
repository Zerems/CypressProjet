Cypress.Commands.add('typeLogin', (user) => {
    cy.get('#email-input')
      .type(user.email)
    })
