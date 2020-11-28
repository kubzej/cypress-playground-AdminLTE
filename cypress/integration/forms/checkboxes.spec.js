describe('working with checkboxes', () => {
    beforeEach(() => {
        cy.visit('/pages/forms/general.html')
    })

    it('un/check by click()', () => {
        cy.get('.col-sm-6 .form-group .form-check [type="checkbox"]').then(checkboxes => {
            
            //check first checbox
            cy.wrap(checkboxes).first().click()
            cy.wrap(checkboxes).first().should('be.checked')

            //uncheck second checkbox
            cy.wrap(checkboxes).eq(1).click()
            cy.wrap(checkboxes).eq(1).should('not.be.checked')
            
        })
    })

    it('click on every checkbox and if it s disabled, skip it', () => {
        cy.get('.col-sm-6 .form-group .form-check [type="checkbox"]').then(checkboxes => {
            
            cy.wrap(checkboxes).each(checkbox => {

                cy.wrap(checkbox).invoke('attr', 'disabled').then(attr => {
                    if (attr != 'disabled') {
                        cy.wrap(checkbox).click()
                    }
                })
            })
            cy.wrap(checkboxes).first().should('be.checked')
            cy.wrap(checkboxes).eq(1).should('not.be.checked')
        })
    })

    it('check by check()', () => {
        cy.get('.col-sm-6 .form-group .form-check [type="checkbox"]').then(checkboxes => {
            cy.wrap(checkboxes).first().check()
            cy.wrap(checkboxes).first().should('be.checked')
        })
    })

    it('uncheck by uncheck()', () => {
        cy.get('.col-sm-6 .form-group .form-check [type="checkbox"]').then(checkboxes => {
            cy.wrap(checkboxes).eq(1).uncheck()
            cy.wrap(checkboxes).eq(1).should('not.be.checked')
        })
    })

    it('check all by check()', () => {
        cy.get('.col-sm-6 .form-group .form-check [type="checkbox"]').then(checkboxes => {
            cy.wrap(checkboxes).each(checkbox => {
                cy.wrap(checkbox).invoke('attr', 'disabled').then(attr => {
                    if (attr != 'disabled') {
                        // all checkboxes are checked
                        cy.wrap(checkbox).check()
                        cy.wrap(checkbox).should('be.checked')
                    }
                })
            })
        })
    })

    it('uncheck all by uncheck()', () => {
        cy.get('.col-sm-6 .form-group .form-check [type="checkbox"]').then(checkboxes => {
            cy.wrap(checkboxes).each(checkbox => {
                cy.wrap(checkbox).invoke('attr', 'disabled').then(attr => {
                    if (attr != 'disabled') {
                        // all checkboxes are unchecked
                        cy.wrap(checkbox).uncheck()
                        cy.wrap(checkbox).should('not.be.checked')
                    }
                })
            })
        })
    })
})