describe('working with inline charts', () => {
    beforeEach(() => {
        cy.visit('/pages/charts/inline.html')
    })

    it('sets value of chart', () => {
        cy.get('canvas').first().then(canvas => {
            cy.wrap(canvas).next().clear().type('50{enter}')
            cy.wrap(canvas).next().should('have.value', '50')
        })
        })
    
})