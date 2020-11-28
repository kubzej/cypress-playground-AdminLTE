describe('working with radio buttons', () => {
    beforeEach(() => {
        cy.visit('/pages/forms/general.html')
    })

    it('select unchecked radio by click()', () => {
        cy.get('.col-sm-6 .form-group .form-check [type="radio"]').then(radios => {
            cy.wrap(radios).first().click()
            cy.wrap(radios).first().should('be.checked')
        })
    })

    it('select already checked radio by click()', () => {
        cy.get('.col-sm-6 .form-group .form-check [type="radio"]').then(radios => {
            // it remains checked
            cy.wrap(radios).eq(1).click()
            cy.wrap(radios).eq(1).should('be.checked')
        })
    })

    it('select unchecked radio by check()', () => {
        cy.get('.col-sm-6 .form-group .form-check [type="radio"]').then(radios => {
            cy.wrap(radios).first().check()
            cy.wrap(radios).first().should('be.checked')
        })
    })

    it('select already checked radio by check()', () => {
        cy.get('.col-sm-6 .form-group .form-check [type="radio"]').then(radios => {
            // it remains checked
            cy.wrap(radios).eq(1).check()
            cy.wrap(radios).eq(1).should('be.checked')
        })
    })

    it('check every radio one by one', () => {
        cy.get('.col-sm-6 .form-group .form-check [type="radio"]').then(radios => {
            cy.wrap(radios).each(radio => {
                cy.wrap(radio).invoke('attr', 'disabled').then(attr => {
                    if (attr != 'disabled') {
                        // the new one is always checked
                        cy.wrap(radio).check()
                        cy.wrap(radio).should('be.checked')
                    }
                })
            })
        })
    })
})