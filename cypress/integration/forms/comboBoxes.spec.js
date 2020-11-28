describe('working with combo boxes', () => {

    it('selects 1 option by text', () => {
        cy.visit('/pages/forms/general.html')
        cy.get('.card-warning > .card-body').find('.col-sm-6 .form-group select').first().then(combobox => {
            cy.wrap(combobox).select('option 4').should('have.value', 'option 4')
        })
    })

    it('selects option 1 by 1', () => {
        cy.visit('/pages/forms/general.html')
        cy.get('.card-warning > .card-body').find('.col-sm-6 .form-group select').first().then(combobox => {
            for (var i = 1; i<=5; i++) {
                cy.wrap(combobox).select('option ' + i).should('have.value', 'option ' + i)
                
            }
        })
    })

    it('multiple selects 3 options', () => {
        cy.visit('/pages/forms/general.html')
        cy.get('.card-warning > .card-body').find('.col-sm-6 .form-group select').eq(2).then(combobox => {
            cy.wrap(combobox)
            .select(['option 1', 'option 2', 'option 5']).invoke('val')
            .should('deep.equal', ['option 1', 'option 2', 'option 5'])
        })
    })

    it('selects option which is visually not visible', () => {
        cy.visit('/pages/forms/advanced.html')
        cy.get('select[class="form-control select2 select2-hidden-accessible"]').first().then(combobox => {
            cy.wrap(combobox).select('Alaska', {force: true})
        })
    })

    it('selects option by UI', () => {
        cy.visit('/pages/forms/advanced.html')
        cy.get('.select2-selection__arrow').first().click()
        const option = 'California'
        cy.get('.select2-results').contains(option).click()
        cy.get('.select2-selection__rendered').first().should('contain', option)
    })

    it('selects option by search', () => {
        cy.visit('/pages/forms/advanced.html')
        cy.get('.select2-selection__arrow').first().click()
        cy.get('.select2-search__field').last().type('Al')
        cy.get('.select2-results li').last().click()
        cy.get('.select2-selection__rendered').first().should('contain', 'California')
    })
})