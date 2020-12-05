describe('other tests', () => {

    Cypress.config('viewportWidth', 500)
    Cypress.config('viewportHeight', 500)

    it('mouse over submit button', () => {
        cy.visit('/pages/forms/validation.html')
        cy.get('form').last().then(form => {
            cy.wrap(form).find('[type="submit"]').trigger('mouseover')
        })
    })

    it('mousedown on top right corner of button', () => {
        cy.visit('/pages/forms/validation.html')
        cy.get('form').last().then(form => {
            cy.wrap(form).find('[type="submit"]').trigger('mousedown', 'topRight', {force: true})
            cy.wait(5000)
            cy.wrap(form).find('[type="submit"]').trigger('mouseleave')
        })
    })
    
    it('takes screenshot', () => {
        cy.visit('/pages/forms/validation.html')
        cy.screenshot('validation-form')
    })

    it('will run with different viewportWidth and viewportHeight', {'viewportWidth': 2000, 'viewportHeight': 2000}, () => {
        cy.visit('/pages/forms/general.html')
        const text = 'Just a testing note'
        cy.get('[placeholder="Enter ..."]').first()
        .type(text)
        .should('have.value', text)
        .clear()
        .should('have.value', '')

    })
    
})