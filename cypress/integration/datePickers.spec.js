function selectDate(day, month, year) {
    cy.get(".fa.fa-calendar").click()
    cy.get(".datepicker")
    cy.get('[title="Select Month"]').click()
        cy.get('[title="Select Year"]').click()
        selectYear(year)
        selectMonth(month)
        selectDay(day)
}

function selectYear(year) {
    cy.get('[data-action="selectYear"]').then((years) => {
        cy.wrap(years)
            .first()
            .then(($firstYear) => {
                const firstVisibleYear = parseInt($firstYear.text())
                if (firstVisibleYear > year) {
                    cy.get('[title="Previous Decade"]').click()
                    selectYear(year)
                } else if ((firstVisibleYear + 11) < year) {
                    cy.get('[title="Next Decade"]').click()
                    selectYear(year)
                } else {
                    cy.get('[data-action="selectYear"]').contains(year).click()
                }
            })
    })
}

function selectMonth(month) {
    cy.fixture('months.json').then(months => {
        const monthName = months[month]
        cy.get('[data-action="selectMonth"]').contains(monthName).click()
    })
}

function selectDay(day) {
    cy.get('[data-action="selectDay"]').not('.day.old').not('.day.new').contains(day).click()
}

describe("working with date pickers", () => {
    beforeEach(() => {
        cy.visit("/pages/forms/advanced.html")
    })

    it("selects custom date", () => {
        const day = '16'
        const month = '5'
        const year = '1996'
        selectDate(day, month, year)
        cy.get('#reservationdate > .form-control').should('have.value', month.padStart(2, 0) + '/' + day.padStart(2, 0) + '/' + year)
    })
    
    
})
