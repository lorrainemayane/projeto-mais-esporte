describe('Fluxo de Autenticação - +Esporte', () => {
  it('Deve realizar login com sucesso', () => {
    // 1. Acessa a página
    cy.visit('https://example.cypress.io/commands/actions')

    // 2. Digita o e-mail
    cy.get('.action-email')
      .type('joao.silva@email.com')
      .should('have.value', 'joao.silva@email.com')

    // 3. Digita a senha
    cy.get('.action-disabled')
      .type('senha123', { force: true })

    // 4. CORREÇÃO: Verifica se o Título principal da página está visível
    cy.get('h1').should('contain', 'Actions')
  })
})