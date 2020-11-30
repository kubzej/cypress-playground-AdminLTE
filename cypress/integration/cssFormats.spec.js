describe('working with CSS format', () => {
    beforeEach(() => {
        cy.visit('/pages/UI/general.html ')
    })

    it('item has background color', () => {
        cy.get('.bg-primary').first().then(item => {
            expect(item).to.have.css('background-color', 'rgb(0, 123, 255)')
            expect(item).to.have.prop('textContent', '#007bff')
        })
    })

    it('item visibility', () => {
        cy.get('.color-palette-set .bg-primary').then(item => {
            cy.wrap(item).eq(0).should('be.visible')
            cy.wrap(item).eq(1).should('have.class', 'disabled')
        })
    })

    it.only('item has css', () => {
        cy.get('.alert-danger').then(alert => {
            expect(alert).to.have.css('color', 'rgb(255, 255, 255)')
            expect(alert).to.have.css('background-color', 'rgb(220, 53, 69)')
            expect(alert).to.have.css('border-color', 'rgb(211, 37, 53)')

            // or

            cy.wrap(alert)
            .should('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'background-color', 'rgb(220, 53, 69)')
            .and('have.css', 'border-color', 'rgb(211, 37, 53)')
        })
    })

})