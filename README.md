🌾 Concurso Agrinho 2026 — AgroTech 🌱
Tema Oficial: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"
Movimento: AgroTech — Os piás que produzem e preservam.

Este repositório contém a página web oficial do AgroTech, um movimento de jovens do campo focado em conciliar a alta produtividade agrícola com a preservação ambiental. O site foi projetado como peça de competição para o Concurso Agrinho 2026, destacando a proteção de nascentes de água como o ativo mais valioso de uma propriedade rural sustentável.

🚀 Funcionalidades em Destaque
O projeto utiliza recursos modernos de desenvolvimento web nativo para entregar uma experiência imersiva, limpa e inclusiva.

♿ Acessibilidade Integrada (Acessibilidade em Primeiro Lugar)
O site conta com uma barra superior de acessibilidade totalmente funcional via scripts, permitindo:

Ajuste de Texto: Botões dinâmicos para aumentar (A+) e diminuir (A-) a tipografia.

Modo de Contraste: Alternância de tema (🌓) para garantir leitura confortável a pessoas com baixa visão.

Leitura por Voz (Nativa): Sistema de áudio (🔊 Ouvir / ⏹️ Parar) baseado na API de síntese de voz do navegador, promovendo a inclusão de deficientes visuais.

🌟 Seções e Interatividade
Hero Section Imersiva: Apresentação de impacto com vídeo em segundo plano (fonteAguaJorrando.mp4) rodando em loop contínuo e mascarado por um overlay escuro para priorizar a leitura do título.

Galeria de Fotos com Modais: Exibição da rotina do movimento utilizando a tag semântica <dialog>. A ampliação das imagens abre em uma camada superior e fecha de forma intuitiva ao clicar fora da foto.

As Três Crenças (Accordion): Painel interativo estilo "sanfona" que organiza os pilares do AgroTech sem poluir o visual da página, expandindo as informações ao clique do usuário.

Formulário de Eventos: Área de captura de dados (Nome, E-mail e Celular) estruturada de forma moderna para engajar a comunidade em futuros eventos.

Mural de Relatos: Espaço interativo e dinâmico voltado para a troca de ideias, dúvidas ou relatos sobre práticas ecológicas no campo.

🛠️ Tecnologias Utilizadas
Para garantir leveza, carregamento instantâneo e total conformidade com as diretrizes de desenvolvimento limpo, o projeto foi construído sem frameworks externos (Vanilla Web):

HTML5: Estrutura semântica rica, uso de atributos aria-* para leitores de tela e gerenciamento nativo de mídia.

CSS3 (style.css): Estilização responsiva, transições suaves para os accordions e regras de inversão para o modo de alto contraste.

JavaScript (script.js): Lógica por trás do sintetizador de voz, controle de estado dos modais e manipulação de eventos de formulário.

📁 Organização dos Arquivos
Plaintext
/
├── index.html          # Código-fonte principal da plataforma AgroTech
├── style.css           # Identidade visual, responsividade e contraste
├── script.js           # Funções de acessibilidade, modais e validações
└── imagens/            # Mídias e registros visuais do projeto
    ├── fonteAguaJorrando.mp4
    ├── foto1.jpg
    ├── foto2.jpg
    └── foto3.jpg
💻 Como Rodar o Projeto Localmente
Por se tratar de um site estático construído com tecnologias puras, nenhuma instalação de servidor ou dependência (como Node.js) é necessária:

Baixe os arquivos do projeto ou clone o repositório.

Certifique-se de que a estrutura da pasta imagens/ está preenchida com os respectivos arquivos de foto e vídeo.

Abra o arquivo index.html em qualquer navegador de sua preferência (Chrome, Firefox, Edge, Safari).
