describe('working with inputs', () => {

    it('writes text to input', () => {
        cy.visit('/pages/forms/general.html')
        const text = 'Just a testing note'
        cy.get('[placeholder="Enter ..."]').first().type(text).should('have.value', text)
    })

    it('writes and clear text', () => {
        cy.visit('/pages/forms/general.html')
        const text = 'Just a testing note'
        cy.get('[placeholder="Enter ..."]').first()
        .type(text)
        .should('have.value', text)
        .clear()
        .should('have.value', '')
    })

    it('writes and press {enter}', () => {
        cy.visit('/pages/forms/advanced.html')
        const text = 'Alabama'
        cy.get('.select2-search__field').first()
        .type(text + '{enter}')
        cy.get('ul.select2-selection__rendered li').should('contain', text)
    })

    it('writes into date input', () => {
        cy.visit('/pages/forms/advanced.html')
        const date = '22/08/2018'
        cy.get('input[data-inputmask-alias="datetime"][data-inputmask-inputformat="dd/mm/yyyy"]').type(date)
        .should('have.value', date)
    })

    it('writes bold text', () => {
        cy.visit('/pages/forms/editors.html')
        cy.get('.note-editable').then(textbox => {
            cy.wrap(textbox)
            .clear()
            .type('This is normal text')
            .should('contain', 'This is normal text')

            cy.wrap(textbox)
            .clear()
            .type('{command}b')
            .type('This is bold text')
            .find('b')
            .should('contain', 'This is bold text')
        })
    })

    it('creates ordered list', () => {
        cy.visit('/pages/forms/editors.html')
        cy.get('.note-editable').then(textbox => {
            cy.wrap(textbox)
            .clear()
            .type('{command+shift+8}')
            .type('First item{enter}')
            .type('Second item{enter}')
            .type('Third item')
            .find('ol li')
            .should('have.length', 3)
        })
    })

    it('checks visibility of input', () => {
        cy.visit('/pages/forms/general.html')
        cy.get('[placeholder="Enter ..."]').first().should('not.be.disabled')
        cy.get('[placeholder="Enter ..."]').eq(1).should('be.disabled')
    })

    it('focus and blur text area', () => {
        cy.visit('/pages/forms/general.html')
        // cy.get('[placeholder="Enter ..."]').first()
        cy.get('[placeholder="Enter ..."]').first().focus().type('Typing into focused area').blur()
    })

})