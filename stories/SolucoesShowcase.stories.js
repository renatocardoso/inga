export default {
  title: 'Design System/Soluções/SolucoesShowcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

const renderSolucoes = (initialActiveSolution = null) => {
  const container = document.createElement('div');
  container.className = 'solucoes-section';
  container.style.padding = '3rem 0 0 0';

  container.innerHTML = `
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
      <div class="solutions__arena" id="story-solutions-arena">
          
          <!-- 1. Três Botões Circulares -->
          <div class="solutions__buttons ${initialActiveSolution ? 'is-hidden' : ''}" id="story-solutions-buttons">
              <button type="button" class="solutions__circle-btn solutions__circle-btn--planejar" data-target="planejar">
                  PLANEJAR
              </button>
              <button type="button" class="solutions__circle-btn solutions__circle-btn--fortalecer" data-target="fortalecer">
                  FORTALECER
              </button>
              <button type="button" class="solutions__circle-btn solutions__circle-btn--engajar" data-target="engajar">
                  ENGAJAR
              </button>
          </div>

          <!-- 2. Painéis Detalhados Aglutinados -->
          <div class="solutions__showcase" id="story-solutions-showcase">
              
              <!-- Painel 1: Planejar -->
              <div class="solutions__panel solutions__panel--planejar ${initialActiveSolution === 'planejar' ? 'is-active' : ''}" id="story-panel-planejar">
                  <div class="solutions__top-stage">
                      <button type="button" class="solutions__back-btn" data-back="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                              <line x1="19" y1="12" x2="5" y2="12"></line>
                              <polyline points="12 19 5 12 12 5"></polyline>
                          </svg>
                          <span>Voltar</span>
                      </button>
                      <div class="solutions__composition">
                          <div class="solutions__badge-circle solutions__badge-circle--planejar">
                              PLANEJAR
                          </div>
                          <img src="img/etapa_planejar.jpg" alt="Planejar - Olhar da onça" class="solutions__hero-img">
                      </div>
                      <p class="solutions__desc-text">
                          Construímos estratégias para orientar decisões e gerar impacto. Apoiamos a definição de propósitos, prioridades e caminhos para orientar decisões e transformar objetivos em planos consistentes e viáveis.
                      </p>
                  </div>
                  <div class="solutions__bottom-panel solutions__bottom-panel--planejar">
                      <div class="solutions__bottom-grid">
                          <div class="solutions__sub-img-wrap">
                              <img src="img/solucao_planejar_sub.jpg" alt="Caatinga e vegetação semiárida" class="solutions__sub-img">
                          </div>
                          <div class="solutions__atuamos-content">
                              <h4 class="solutions__atuamos-title">ATUAMOS EM:</h4>
                              <ul class="solutions__atuamos-list">
                                  <li>Planejamento estratégico institucional;</li>
                                  <li>Planos de Manejo de Áreas Protegidas;</li>
                                  <li>Planejamento territorial para conservação;</li>
                                  <li>Estratégias e programas de uso e conservação da biodiversidade;</li>
                                  <li>Planos de ação para ecossistemas e espécies ameaçadas;</li>
                                  <li>Desenvolvimento de metodologias e instrumentos de planejamento.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

              <!-- Painel 2: Fortalecer -->
              <div class="solutions__panel solutions__panel--fortalecer ${initialActiveSolution === 'fortalecer' ? 'is-active' : ''}" id="story-panel-fortalecer">
                  <div class="solutions__top-stage">
                      <button type="button" class="solutions__back-btn" data-back="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                              <line x1="19" y1="12" x2="5" y2="12"></line>
                              <polyline points="12 19 5 12 12 5"></polyline>
                          </svg>
                          <span>Voltar</span>
                      </button>
                      <div class="solutions__composition">
                          <div class="solutions__badge-circle solutions__badge-circle--fortalecer">
                              FORTALECER
                          </div>
                          <img src="img/etapa_fortalecer.jpg" alt="Fortalecer - Paisagem aquática e áreas alagadas" class="solutions__hero-img">
                      </div>
                      <p class="solutions__desc-text">
                          Transformamos estratégias em capacidade de implementação. Uma boa estratégia só gera impacto quando as organizações estão preparadas para colocá-la em prática. Apoiamos organizações e iniciativas no fortalecimento de sua gestão, no desenvolvimento de capacidades e na estruturação de processos que tornem a implementação mais consistente e duradoura.
                      </p>
                  </div>
                  <div class="solutions__bottom-panel solutions__bottom-panel--fortalecer">
                      <div class="solutions__bottom-grid">
                          <div class="solutions__sub-img-wrap">
                              <img src="img/solucao_fortalecer_sub.jpg" alt="Flores do cerrado sempre-viva" class="solutions__sub-img">
                          </div>
                          <div class="solutions__atuamos-content">
                              <h4 class="solutions__atuamos-title">ATUAMOS EM:</h4>
                              <ul class="solutions__atuamos-list">
                                  <li>Fortalecimento institucional;</li>
                                  <li>Desenvolvimento organizacional;</li>
                                  <li>Gestão do conhecimento;</li>
                                  <li>Capacitação e formação de equipe;</li>
                                  <li>Estruturação de programas e projetos.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

              <!-- Painel 3: Engajar -->
              <div class="solutions__panel solutions__panel--engajar ${initialActiveSolution === 'engajar' ? 'is-active' : ''}" id="story-panel-engajar">
                  <div class="solutions__top-stage">
                      <button type="button" class="solutions__back-btn" data-back="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                              <line x1="19" y1="12" x2="5" y2="12"></line>
                              <polyline points="12 19 5 12 12 5"></polyline>
                          </svg>
                          <span>Voltar</span>
                      </button>
                      <div class="solutions__composition">
                          <div class="solutions__badge-circle solutions__badge-circle--engajar">
                              ENGAJAR
                          </div>
                          <img src="img/etapa_engajar.jpg" alt="Engajar - Araucárias ao entardecer" class="solutions__hero-img">
                      </div>
                      <p class="solutions__desc-text">
                          Conectamos pessoas para construir soluções compartilhadas. A conservação da natureza é um esforço coletivo. Promovemos processos participativos que conectam diferentes conhecimentos, interesses e perspectivas em torno de objetivos comuns, fortalecem a governança, promovem o diálogo e ampliam a legitimidade das decisões.
                      </p>
                  </div>
                  <div class="solutions__bottom-panel solutions__bottom-panel--engajar">
                      <div class="solutions__bottom-grid">
                          <div class="solutions__sub-img-wrap">
                              <img src="img/solucao_engajar_sub.jpg" alt="Mata Atlântica e encostas verdes" class="solutions__sub-img">
                          </div>
                          <div class="solutions__atuamos-content">
                              <h4 class="solutions__atuamos-title">ATUAMOS EM:</h4>
                              <ul class="solutions__atuamos-list">
                                  <li>Facilitação de oficinas e encontros;</li>
                                  <li>Diagnósticos e planejamentos participativos;</li>
                                  <li>Governança colaborativa;</li>
                                  <li>Mapeamento de atores;</li>
                                  <li>Mediação e articulação institucional;</li>
                                  <li>Conselhos gestores e redes colaborativas.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
    </div>
  `;

  // Attach interactive behavior
  const btnsContainer = container.querySelector('#story-solutions-buttons');
  const circleBtns = container.querySelectorAll('.solutions__circle-btn');
  const panels = container.querySelectorAll('.solutions__panel');
  const backBtns = container.querySelectorAll('.solutions__back-btn');

  circleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      btnsContainer.classList.add('is-hidden');
      panels.forEach(p => {
        if (p.id === `story-panel-${target}`) {
          p.classList.add('is-active');
        } else {
          p.classList.remove('is-active');
        }
      });
    });
  });

  backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      panels.forEach(p => p.classList.remove('is-active'));
      btnsContainer.classList.remove('is-hidden');
    });
  });

  return container;
};

export const RestState3Buttons = {
  render: () => renderSolucoes(null),
};

export const ActivePlanejar = {
  render: () => renderSolucoes('planejar'),
};

export const ActiveFortalecer = {
  render: () => renderSolucoes('fortalecer'),
};

export const ActiveEngajar = {
  render: () => renderSolucoes('engajar'),
};
