describe('working with sliders', () => {
    beforeEach(() => {
        cy.visit('pages/UI/sliders.html')
    })

    it('change sliders left/right value by invoking its attribute', () => {
        const from = 10
        const to = 30

        cy.get('.js-irs-0').then(slider => {
            cy.wrap(slider).find('.irs-bar').invoke('attr', 'style', 'left: '+ from.toString() + '%; width: ' + to.toString() + '%;')
            cy.wrap(slider).find('.irs-from').invoke('attr', 'style', 'left: ' + from.toString() + '%;')
            cy.wrap(slider).find('.irs-to').invoke('attr', 'style', 'left: ' + to.toString() + '%;')
            cy.wrap(slider).find('.irs-handle.from').invoke('attr', 'style', 'left: ' + from.toString() + '%;')
            cy.wrap(slider).find('.irs-handle.to').invoke('attr', 'style', 'left: ' + to.toString() + '%;')
        })
    })

    it('change slider by clicking on position', () => {
        cy.get('.js-irs-0').then(slider => {
            cy.wrap(slider).find('.irs-bar').click('center')
            cy.wrap(slider).find('.irs-bar').invoke('attr', 'style').should('contain', '50%')
            cy.wrap(slider).find('.irs-from').should('have.text', '$2 500')
        })
    })

    it('change slider by clicking on coordinates', () => {
        cy.get('.js-irs-0').then(slider => {
            cy.wrap(slider).find('.irs-bar').click(100, 0)
            cy.wrap(slider).find('.irs-bar').click(200, 0)
            cy.wrap(slider).find('.irs-bar').should('have.attr', 'style', 'left: 42.3678%; width: 21.1963%;')
            cy.wrap(slider).find('.irs-from').should('have.text', '$2 105')
            cy.wrap(slider).find('.irs-to').should('have.text', '$3 202')
        })
    })
})