import 'cypress-pipe'

describe('working with modals', () => {
    beforeEach(() => {
        cy.visit('/pages/UI/modals.html')
    })

    it('triggers modal', () => {
        cy.get('.modal-content').should('not.be.visible')
        cy.get('.card-primary button').first().click()
        cy.get('.modal-content').should('be.visible')
    })

    it('triggers and close modal', () => {
        cy.get('.card-primary button').first().click()
        cy.get('.modal-content').should('be.visible')
        
        // problem with event listeners https://www.cypress.io/blog/2019/01/22/when-can-the-test-click/
        const click = $el => $el.click()
        cy.contains('Close').pipe(click).should($el => {
            expect($el).to.not.be.visible
          })
    })

    it('tries some asserts', () => {
        cy.get('.card-primary button').first().click()
        cy.get('.modal-content').then(modal => {
            cy.wrap(modal).find('h4').first().invoke('text').should('not.equal', 'Test')
            cy.wrap(modal).find('[aria-label="Close"] span').invoke('attr', 'aria-hidden').should('not.be.true')
            cy.get('.modal.fade.show').should('have.id', 'modal-default')
            cy.wrap(modal).invoke('prop', 'shadowRoot').should('be.null')
            cy.wrap(modal).invoke('prop', 'translate').should('be.true')
            cy.wrap(modal).invoke('prop', 'childNodes').should('not.be.empty')
            cy.wrap(modal).invoke('prop', 'childElementCount').should('be.greaterThan', 1)
            cy.wrap(modal).invoke('prop', 'childElementCount').should('not.be.lessThan', 3)
            cy.wrap(modal).invoke('prop', 'childElementCount').should('be.within', 1, 5)            

            
        })
    })

    it('closes modal with overlay by clicking outside of modal', () => {
        cy.get('.card-primary button').last().click()
        cy.get('.overlay').click(-50, -50, {force: true})
        cy.get('.modal-content').should('not.be.visible')
    })
})