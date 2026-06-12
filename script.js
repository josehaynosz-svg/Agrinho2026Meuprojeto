document.addEventListener('DOMContentLoaded', () => {
    
    // --- PASSO 3: COMPORTAMENTO DO ACCORDION ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            const panel = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');

            // Fechar todos os outros painéis (Comportamento Singleton opcional e elegante)
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    const otherPanel = otherHeader.nextElementSibling;
                    otherPanel.style.maxHeight = null;
                    otherPanel.style.padding = '0';
                    otherPanel.setAttribute('hidden', '');
                    otherHeader.querySelector('.accordion-icon').textContent = '+';
                }
            });

            // Alternar estado atual
            if (isExpanded) {
                header.setAttribute('aria-expanded', 'false');
                panel.style.maxHeight = null;
                panel.style.padding = '0';
                panel.setAttribute('hidden', '');
                icon.textContent = '+';
            } else {
                header.setAttribute('aria-expanded', 'true');
                panel.removeAttribute('hidden');
                panel.style.padding = '1.5rem';
                panel.style.maxHeight = panel.scrollHeight + 100 + "px";
                icon.textContent = '-';
            }
        });
    });

    // --- PASSO 4: SISTEMA AVANÇADO DE ACESSIBILIDADE ---
    const mainContent = document.getElementById('mainContent');
    let currentFontSizeRem = 1.0;

    // 1. Controle de tamanho de Fonte
    // Aumentar e Diminuir Fonte - Apontando para o documento inteiro
    document.getElementById('btnIncreaseText').addEventListener('click', () => {
        if (currentFontSizeRem < 1.5) {
            currentFontSizeRem += 0.1;
            // Altera o tamanho base da página inteira
            document.documentElement.style.fontSize = `${currentFontSizeRem}rem`;
        }
    });

    document.getElementById('btnDecreaseText').addEventListener('click', () => {
        if (currentFontSizeRem > 0.8) {
            currentFontSizeRem -= 0.1;
            // Altera o tamanho base da página inteira
            document.documentElement.style.fontSize = `${currentFontSizeRem}rem`;
        }
    });

    // 2. Alternar Modo de Alto Contraste
    document.getElementById('btnToggleContrast').addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // 3. Leitura por Voz (Text-to-Speech API)
    let speechSynthInstance = null;

    document.getElementById('btnPlaySpeech').addEventListener('click', () => {
        // Cancela qualquer leitura em andamento
        window.speechSynthesis.cancel();

        // Captura apenas elementos de conteúdo narrativo ou títulos principais
        const speechElements = mainContent.querySelectorAll('p, h2');
        let combinedText = "";

        speechElements.forEach(el => {
            // Ignora explicitamente elementos estruturais ou ocultos dentro do accordion fechado
            if (!el.closest('.accordion-panel[hidden]') && !el.closest('.accessibility-menu')) {
                combinedText += el.textContent + ". ";
            }
        });

        if (combinedText.trim().length > 0) {
            speechSynthInstance = new SpeechSynthesisUtterance(combinedText);
            speechSynthInstance.lang = 'pt-BR';
            speechSynthInstance.rate = 1.0;
            window.speechSynthesis.speak(speechSynthInstance);
        }
    });

    document.getElementById('btnStopSpeech').addEventListener('click', () => {
        window.speechSynthesis.cancel();
    });


    // --- PASSO 2.6: GERENCIAMENTO DINÂMICO DE INTERAÇÕES ---
    
    // Envio do Formulário de Inscrição
    const seminarForm = document.getElementById('seminarForm');
    seminarForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Inscrição confirmada com sucesso! Você receberá os links de acesso ao seminário no e-mail cadastrado.');
        seminarForm.reset();
    });

    // Feed de Comentários em Memória Local
    const commentForm = document.getElementById('commentForm');
    const commentText = document.getElementById('commentText');
    const commentsList = document.getElementById('commentsList');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const message = commentText.value.trim();
        if (message) {
            const card = document.createElement('div');
            card.classList.add('comment-card');
            
            const now = new Date();
            const timeString = now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'});

            card.innerHTML = `
                <p>${escapeHTML(message)}</p>
                <small>Postado por Produtor Visitante • ${timeString}</small>
            `;
            
            commentsList.prepend(card);
            commentText.value = '';
        }
    });

    // Sanitização simples para evitar ataques XSS na injeção de comentários
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }
});