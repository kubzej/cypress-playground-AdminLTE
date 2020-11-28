describe('working with tables', () => {
    beforeEach(() => {
        cy.visit('/pages/tables/data.html')
    })

    it('search value, count rows and check each row value', () => {
        cy.get('#example1_filter input').type('Tasman')
        cy.get('.table').last().then(table => {
            cy.wrap(table).find('tbody tr').then(rows => {
                expect(rows).to.have.length(3)
                cy.wrap(rows).each(row => {
                    cy.wrap(row).find('td').first().should('contain', 'Tasman')
                })
            })
        })
    })

    it('move to last page and check last item', () => {
        cy.get('#example1_paginate .pagination a').contains('6').click()
        cy.get('#example1 tbody tr').then(rows => {
            cy.wrap(rows).last().find('td').then(columns => {
                cy.wrap(columns).eq(0).should('contain', 'Webkit')
                cy.wrap(columns).eq(1).should('contain', 'S60')
                cy.wrap(columns).eq(2).should('contain', 'S60')
                cy.wrap(columns).eq(3).should('contain', '413')
                cy.wrap(columns).eq(4).should('contain', 'A')
            })
        })
    })

    it('order "engine" column and check first value', () => {
        cy.get('#example1 thead tr th')
        .eq(3)
        .dblclick()
        .should('have.class', 'sorting_desc')

        cy.get('#example1 tbody tr')
        .first()
        .find('td')
        .eq(3)
        .should('contain', '522.1')
    })

    it('hide column', () => {
        cy.contains('Column visibility').click()
        cy.get('a.dt-button.dropdown-item').contains('Rendering engine').click()
        cy.get('#example1 thead tr th').should('have.length', 4)
    })
})