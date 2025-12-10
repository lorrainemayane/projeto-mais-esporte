describe('Fluxo Completo do +Esporte', () => {

    const baseUrl = 'http://127.0.0.1:5500';

    it('Deve realizar o login, navegar pelo calendário, mapa e fazer uma avaliação', () => {

        // --- 1. TELA DE LOGIN ---
        cy.visit(`${baseUrl}/login.html`);

        // Preenche o formulário (dados fictícios para teste)
        cy.get('#email').type('usuario@teste.com');
        cy.get('#senha').type('123456');

        // Clica em entrar
        cy.contains('button', 'Entrar').click();

        // Validação: Deve ter ido para o calendário
        cy.url().should('include', 'calendario.html');
        cy.contains('Próximos Eventos Esportivos').should('be.visible');


        // --- 2. TELA DE CALENDÁRIO & INSCRIÇÃO ---
        // Clica no primeiro botão de "Inscrever-se" que encontrar
        cy.contains('button', 'Inscrever-se').first().click();

        // Validação: Deve ter ido para inscrição
        cy.url().should('include', 'inscricao.html');
        cy.contains('Sua inscrição foi confirmada!').should('be.visible');

        // Clica em voltar
        cy.contains('button', 'Voltar').click();

        // Validação: Voltou para o calendário
        cy.url().should('include', 'calendario.html');


        // --- 3. NAVEGAÇÃO PARA O MAPA ---
        // Clica no menu "Locais Disponíveis"
        cy.contains('a', 'Locais Disponíveis').click();

        // Validação: Está na página do mapa
        cy.url().should('include', 'mapaiterativo.html');
        cy.get('#map').should('be.visible');


        // --- 4. INTERAÇÃO COM O MAPA (Leaflet) ---
        // Espera o mapa carregar e clica no primeiro marcador (o ícone azul do Leaflet)
        // O Cypress clica no marcador para abrir o popup
        cy.get('.leaflet-marker-icon').first().click();

        // Clica em "Ver Detalhes" dentro do popup que abriu
        cy.contains('button', 'Ver Detalhes').should('be.visible').click();


        // --- 5. DETALHES DO ESPAÇO ---
        // Validação: Foi para a página de detalhes esportivos
        cy.url().should('include', 'detalhesesportivos.html');
        cy.contains('Quadra Central').should('be.visible');

        // Clica em "Avaliar este espaço"
        cy.contains('button', 'Avaliar este espaço').click();


        // --- 6. AVALIAÇÃO ---
        // Validação: Chegou na página de avaliação
        cy.url().should('include', 'avaliacao.html');

        // Dá 5 estrelas (clica no label, pois o input radio é oculto)
        cy.get('label[for="estrela5"]').click();

        // Escreve um comentário
        cy.get('#comentario').type('O espaço é excelente, muito bem iluminado!');

        // Envia a avaliação
        cy.get('#enviar').click();

        // Validação final: Mensagem de sucesso
        cy.get('#msg').should('contain', 'Avaliação enviada com sucesso!');
    });
});