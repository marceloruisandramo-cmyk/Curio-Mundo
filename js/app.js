/**
 * CURIO MUNDO - JavaScript Principal (100% Puro, Sem Dependências)
 * Responsável por:
 * 1. Menu mobile acessível
 * 2. Pesquisa instantânea no navegador
 * 3. Gerador e alternador de "Curiosidade do Dia"
 * 4. Índice local de artigos
 */

(function () {
  'use strict';

  // Base de dados estática dos artigos para pesquisa e recomendação
  const BANCO_ARTIGOS = [
    {
      titulo: "7 cidades antigas que ainda despertam curiosidade",
      categoria: "História",
      catSlug: "historia",
      url: "artigos/historia/7-cidades-antigas-que-ainda-despertam-curiosidade.html",
      resumo: "De Çatalhöyük a Petra e Mohenjo-daro, descubra civilizações que desenvolveram engenharia surpreendente há milênios.",
      data: "03/10/2026",
      leitura: "6 min"
    },
    {
      titulo: "Como eram os primeiros sistemas de escrita?",
      categoria: "História",
      catSlug: "historia",
      url: "artigos/historia/como-eram-os-primeiros-sistemas-de-escrita.html",
      resumo: "Como a humanidade passou de fichas de argila para a escrita cuneiforme na Suméria e os hieróglifos egípcios.",
      data: "02/10/2026",
      leitura: "5 min"
    },
    {
      titulo: "Por que o céu é azul?",
      categoria: "Ciência",
      catSlug: "ciencia",
      url: "artigos/ciencia/por-que-o-ceu-e-azul.html",
      resumo: "A explicação física do Espalhamento de Rayleigh: como as moléculas da atmosfera espalham a luz solar.",
      data: "03/10/2026",
      leitura: "4 min"
    },
    {
      titulo: "O que aconteceria se a Lua desaparecesse?",
      categoria: "Ciência",
      catSlug: "ciencia",
      url: "artigos/ciencia/o-que-aconteceria-se-a-lua-desaparecesse.html",
      resumo: "O impacto dramático nas marés, na estabilidade do eixo de rotação da Terra e nos ciclos biológicos do planeta.",
      data: "01/10/2026",
      leitura: "5 min"
    },
    {
      titulo: "Os lugares mais extremos do planeta",
      categoria: "Geografia",
      catSlug: "geografia",
      url: "artigos/geografia/os-lugares-mais-extremos-do-planeta.html",
      resumo: "Do deserto mais seco de Atacama à depressão mais profunda da Fossa das Marianas e o calor do Vale da Morte.",
      data: "02/10/2026",
      leitura: "6 min"
    },
    {
      titulo: "Por que existem tantos fusos horários?",
      categoria: "Geografia",
      catSlug: "geografia",
      url: "artigos/geografia/por-que-existem-tantos-fusos-horarios.html",
      resumo: "A história da Conferência Internacional do Meridiano de 1884 e como a ferrovia forçou a padronização do tempo.",
      data: "30/09/2026",
      leitura: "4 min"
    },
    {
      titulo: "10 curiosidades surpreendentes sobre os polvos",
      categoria: "Animais",
      catSlug: "animais",
      url: "artigos/animais/10-curiosidades-surpreendentes-sobre-os-polvos.html",
      resumo: "Três corações, sangue azul à base de cobre e dois terços dos neurônios espalhados pelos seus oito braços.",
      data: "03/10/2026",
      leitura: "5 min"
    },
    {
      titulo: "Como alguns animais conseguem sobreviver em ambientes extremos?",
      categoria: "Animais",
      catSlug: "animais",
      url: "artigos/animais/como-alguns-animais-conseguem-sobreviver-em-ambientes-extremos.html",
      resumo: "Extremófilos da natureza: dos tardígrados microscópicos aos peixes com proteínas anticongelantes na Antártida.",
      data: "29/09/2026",
      leitura: "5 min"
    },
    {
      titulo: "Por que bocejamos?",
      categoria: "Corpo Humano",
      catSlug: "corpo-humano",
      url: "artigos/corpo-humano/por-que-bocejamos.html",
      resumo: "A hipótese do resfriamento cerebral e o curioso fenômeno do contágio social mediado pela empatia.",
      data: "02/10/2026",
      leitura: "4 min"
    },
    {
      titulo: "Por que temos impressões digitais?",
      categoria: "Corpo Humano",
      catSlug: "corpo-humano",
      url: "artigos/corpo-humano/por-que-temos-impressoes-digitais.html",
      resumo: "Os dermatoglifos aumentam a aderência ao segurar objetos e amplificam a percepção tátil de vibrações.",
      data: "28/09/2026",
      leitura: "4 min"
    },
    {
      titulo: "Como surgiu o primeiro telefone?",
      categoria: "Invenções",
      catSlug: "invencoes",
      url: "artigos/invencoes/como-surgiu-o-primeiro-telefone.html",
      resumo: "A disputa histórica entre Alexander Graham Bell, Elisha Gray e o italiano Antonio Meucci no século XIX.",
      data: "01/10/2026",
      leitura: "5 min"
    },
    {
      titulo: "10 invenções que mudaram a vida cotidiana",
      categoria: "Invenções",
      catSlug: "invencoes",
      url: "artigos/invencoes/10-invencoes-que-mudaram-o-mundo.html",
      resumo: "Da prensa móvel de Gutenberg à refrigeração doméstica e o sabão: invenções que transformaram a sociedade.",
      data: "27/09/2026",
      leitura: "6 min"
    },
    {
      titulo: "Curiosidades sobre o Japão que talvez você não conheça",
      categoria: "Países",
      catSlug: "paises",
      url: "artigos/paises/curiosidades-sobre-o-japao-que-talvez-voce-nao-conheca.html",
      resumo: "Pontualidade milimétrica nos trens-bala, mais de 5 milhões de máquinas de venda e ilhas com mais gatos que humanos.",
      data: "02/10/2026",
      leitura: "5 min"
    },
    {
      titulo: "Fatos interessantes sobre Moçambique",
      categoria: "Países",
      catSlug: "paises",
      url: "artigos/paises/fatos-interessantes-sobre-mocambique.html",
      resumo: "Mais de 2.500 km de litoral no Índico, o lendário Parque Nacional da Gorongosa e uma riqueza cultural sem igual.",
      data: "01/10/2026",
      leitura: "5 min"
    },
    {
      titulo: "Por que sentimos arrepios?",
      categoria: "Por que isso acontece?",
      catSlug: "por-que",
      url: "artigos/por-que/por-que-sentimos-arrepios.html",
      resumo: "O reflexo vestigial da piloereção: por que os pequenos músculos eretores dos pelos se contraem com frio ou emoção.",
      data: "03/10/2026",
      leitura: "4 min"
    },
    {
      titulo: "Por que o gelo flutua na água?",
      categoria: "Por que isso acontece?",
      catSlug: "por-que",
      url: "artigos/por-que/por-que-o-gelo-flutua-na-agua.html",
      resumo: "A anomalia térmica da água: por que a estrutura cristalina hexagonal do gelo o torna menos denso que o líquido.",
      data: "29/09/2026",
      leitura: "4 min"
    }
  ];

  // Curiosidades rápidas para o componente "Você Sabia? / Curiosidade do Dia"
  const CURIOSIDADES_RAPIDAS = [
    {
      fato: "Os polvos possuem três corações e o seu sangue é azul por utilizar hemocianina rica em cobre para transportar oxigênio.",
      artigoUrl: "artigos/animais/10-curiosidades-surpreendentes-sobre-os-polvos.html"
    },
    {
      fato: "A água é uma das raras substâncias que se expande ao congelar, fazendo com que o gelo flutue e preserve a vida nos lagos.",
      artigoUrl: "artigos/por-que/por-que-o-gelo-flutua-na-agua.html"
    },
    {
      fato: "O arrepio é um reflexo evolutivo herdado de ancestrais que inflavam os pelos para parecer maiores e reter calor.",
      artigoUrl: "artigos/por-que/por-que-sentimos-arrepios.html"
    },
    {
      fato: "O céu parece azul devido ao Espalhamento de Rayleigh: os comprimentos de onda azuis se espalham 10 vezes mais que os vermelhos.",
      artigoUrl: "artigos/ciencia/por-que-o-ceu-e-azul.html"
    },
    {
      fato: "As impressões digitais começam a se formar ainda no útero, entre a 10ª e a 24ª semana de gestação, e nunca mudam.",
      artigoUrl: "artigos/corpo-humano/por-que-temos-impressoes-digitais.html"
    },
    {
      fato: "Os tardígrados conseguem sobreviver ao vácuo do espaço, temperaturas de -272°C e pressões seis vezes maiores que o fundo do oceano.",
      artigoUrl: "artigos/animais/como-alguns-animais-conseguem-sobreviver-em-ambientes-extremos.html"
    },
    {
      fato: "Em partes do Deserto do Atacama, no Chile, estações meteorológicas registraram períodos de mais de 40 anos sem uma gota de chuva.",
      artigoUrl: "artigos/geografia/os-lugares-mais-extremos-do-planeta.html"
    },
    {
      fato: "O bocejo serve como um radiador biológico, ajudando a regular a temperatura do cérebro através de um influxo de ar frio.",
      artigoUrl: "artigos/corpo-humano/por-que-bocejamos.html"
    }
  ];

  // Determinar o prefixo relativo para links baseado no nível do diretório atual
  function obterPrefixoCaminho() {
    const path = window.location.pathname;
    if (path.includes('/artigos/')) {
      return '../../';
    } else if (path.includes('/admin/')) {
      return '../';
    }
    return '';
  }

  // 1. Inicializar Menu Mobile
  function initMenu() {
    const toggleBtn = document.getElementById('navToggleBtn');
    const siteNav = document.getElementById('siteNav');

    if (!toggleBtn || !siteNav) return;

    toggleBtn.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('is-open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fechar menu se clicar fora
    document.addEventListener('click', function (e) {
      if (!siteNav.contains(e.target) && !toggleBtn.contains(e.target) && siteNav.classList.contains('is-open')) {
        siteNav.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Curiosidade do Dia / Você sabia interativo
  function initCuriosidadeDoDia() {
    const fatoEl = document.getElementById('dailyCuriosityText');
    const linkEl = document.getElementById('dailyCuriosityLink');
    const btnShuffle = document.getElementById('btnShuffleCuriosity');

    if (!fatoEl) return;

    const prefix = obterPrefixoCaminho();
    let indexAtual = Math.floor(Math.random() * CURIOSIDADES_RAPIDAS.length);

    function exibirCuriosidade(i) {
      const item = CURIOSIDADES_RAPIDAS[i];
      fatoEl.textContent = `"${item.fato}"`;
      if (linkEl && item.artigoUrl) {
        linkEl.href = prefix + item.artigoUrl;
        linkEl.style.display = 'inline-flex';
      }
    }

    exibirCuriosidade(indexAtual);

    if (btnShuffle) {
      btnShuffle.addEventListener('click', function () {
        let proximo = Math.floor(Math.random() * CURIOSIDADES_RAPIDAS.length);
        if (proximo === indexAtual) {
          proximo = (proximo + 1) % CURIOSIDADES_RAPIDAS.length;
        }
        indexAtual = proximo;
        exibirCuriosidade(indexAtual);
      });
    }
  }

  // 3. Sistema de Pesquisa no Navegador (Search Modal)
  function initPesquisa() {
    const openBtns = document.querySelectorAll('.js-open-search');
    const modal = document.getElementById('searchModal');
    const closeBtn = document.getElementById('searchCloseBtn');
    const input = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');

    if (!modal || !input || !resultsContainer) return;

    const prefix = obterPrefixoCaminho();

    function abrirModal() {
      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
      input.value = '';
      filtrarArtigos('');
      setTimeout(() => input.focus(), 50);
    }

    function fecharModal() {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
    }

    openBtns.forEach(btn => btn.addEventListener('click', abrirModal));
    if (closeBtn) closeBtn.addEventListener('click', fecharModal);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) fecharModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        fecharModal();
      }
    });

    function filtrarArtigos(termo) {
      const q = termo.trim().toLowerCase();
      resultsContainer.innerHTML = '';

      const filtrados = BANCO_ARTIGOS.filter(art => {
        if (!q) return true;
        return (
          art.titulo.toLowerCase().includes(q) ||
          art.categoria.toLowerCase().includes(q) ||
          art.resumo.toLowerCase().includes(q)
        );
      });

      if (filtrados.length === 0) {
        resultsContainer.innerHTML = `
          <div class="search-empty">
            <p>Nenhuma curiosidade encontrada para <strong>"${termo}"</strong>.</p>
            <p style="margin-top: 0.5rem; font-size: 0.85rem;">Tente pesquisar por palavras como: <em>polvo</em>, <em>espaço</em>, <em>céu</em>, <em>gelo</em> ou <em>história</em>.</p>
          </div>
        `;
        return;
      }

      const lista = document.createElement('div');
      filtrados.forEach(art => {
        const item = document.createElement('a');
        item.className = 'search-result-item';
        item.href = prefix + art.url;
        item.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.2rem;">
            <span class="badge badge-${art.catSlug}" style="font-size: 0.7rem; padding: 0.15rem 0.5rem;">${art.categoria}</span>
            <span style="font-size: 0.75rem; color: #64748b;">${art.leitura}</span>
          </div>
          <div class="search-result-title">${art.titulo}</div>
          <div class="search-result-desc">${art.resumo}</div>
        `;
        lista.appendChild(item);
      });

      resultsContainer.appendChild(lista);
    }

    input.addEventListener('input', function (e) {
      filtrarArtigos(e.target.value);
    });
  }

  // 4. Botão de Atualização Rápida da Página ("hoje.", "MUNDO" e topo)
  function initBotaoAtualizarHoje() {
    const refreshTriggers = document.querySelectorAll('#btnRefreshWord, #btnRefreshMundo, .brand-mundo-btn, .js-trigger-refresh');
    if (!refreshTriggers.length) return;

    refreshTriggers.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        btn.classList.add('is-refreshing');
        
        // Micro-vibração háptica se suportada no celular
        try {
          if (window.navigator && typeof window.navigator.vibrate === 'function') {
            window.navigator.vibrate(12);
          }
        } catch (_) {}

        // Feedback visual imediato e recarregamento instantâneo
        setTimeout(function () {
          window.location.reload();
        }, 80);
      });
    });
  }

  // 5. Atualização da Data Atual da Edição
  function initDataAtual() {
    const dateEl = document.getElementById('currentDateDisplay');
    if (!dateEl) return;

    try {
      const agora = new Date();
      const formatador = new Intl.DateTimeFormat('pt-PT', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      const dataFormatada = formatador.format(agora);
      // Capitalizar primeira letra
      dateEl.textContent = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
    } catch (_) {
      // Fallback seguro silencioso
    }
  }

  // 6. Utilitário de Geração de Slug (usado no Admin)
  window.CurioMundo = {
    bancoArtigos: BANCO_ARTIGOS,
    slugify: function (texto) {
      return texto
        .toString()
        .normalize('NFD') // divide acentos
        .replace(/[\u0300-\u036f]/g, '') // remove acentos
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '') // remove pontuação estranha
        .replace(/\s+/g, '-') // espaços para traços
        .replace(/-+/g, '-'); // traços múltiplos
    }
  };

  // Inicialização quando o DOM estiver pronto
  function boot() {
    initMenu();
    initCuriosidadeDoDia();
    initPesquisa();
    initBotaoAtualizarHoje();
    initDataAtual();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
