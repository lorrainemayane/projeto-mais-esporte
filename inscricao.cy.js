describe('Fluxo de Inscrição - +Esporte', () => {
    it('Deve realizar inscrição no evento', () => {
        // 1. Acessa a página (Simulando o calendário de eventos)
        cy.visit('https://example.cypress.io/todo')

        // 2. Digita o nome do evento e dá Enter (Simulando clicar em Inscrever)
        cy.get('.new-todo').type('Corrida de Rua - 25/10{enter}')

        // 3. Verifica se o evento apareceu na lista de "Minhas Inscrições"
        cy.contains('Corrida de Rua - 25/10').should('be.visible')
    })
})