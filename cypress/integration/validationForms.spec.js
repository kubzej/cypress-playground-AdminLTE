describe('working with validation formular', () => {
    beforeEach(() => {
        cy.visit('/pages/forms/validation.html')
    })

    it('submit empty formular by submit()', () => {
        cy.get('form').last().then(form => {
            //submit() works only for "form" element
            cy.wrap(form).submit()
            cy.wrap(form).get('#exampleInputEmail1-error').should('exist')
            cy.wrap(form).get('#exampleInputPassword1-error').should('exist')
            cy.wrap(form).get('#terms-error').should('exist')
        })
        
    })

})