import 'cypress-pipe'

describe('working with toasters', () => {
    beforeEach(() => {
        cy.visit('/pages/UI/modals.html')
    })

    it('shows toaster', () => {
        cy.get('[role="alert"]').should('not.exist')
        cy.get('.card-info button').first().click()
        cy.get('[role="alert"]').should('be.visible')
    })

    it('closes toaster', () => {
        cy.get('.card-info button').first().click()

        const click = $el => $el.click()
        cy.get('[data-dismiss="toast"]').pipe(click).should($el => {
            expect($el).to.not.be.visible
          })
        cy.get('[role="alert"]').should('not.exist')
    })

    it('verify that toaster was automatically closed', () => {
        cy.get('.card-info button').eq(3).click()
        cy.get('.toast.fade').should('exist')
        cy.get('.toast.fade').should('not.exist')
        
    })

    it('opens and check trigger of all toasters', () => {
        cy.get('.card-info button').each(toaster => {
            cy.wrap(toaster).click()
            cy.get('.toast.fade.show').should('exist')
            cy.get('button[data-dismiss="toast"]').click()
        })
    })

    it('triggers same toaster more times', () => {
        cy.get('.card-info button').first().then(button => {
            for (var i = 0; i < 3; i++) {
                cy.wrap(button).click()
            }
            cy.get('.toast.fade.show').should('have.length', 3)
        })
    })

})