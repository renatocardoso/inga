export default {
  title: 'Design System/Soluções/SolucoesShowcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

const renderSolucoes = (initialActiveSolution = null) => {
  const container = document.createElement('div');
  container.className = 'solutions-section';
  container.style.padding = '3rem 0 0 0';

  container.innerHTML = `
    <div>
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
        <p class="solutions-lead-intro">
            A atuação da INGA está organizada em três etapas complementares, que podem ser desenvolvidas de forma integrada ou adaptadas às necessidades de cada projeto.
        </p>

        <!-- 1. Três Botões Circulares -->
        <div class="solutions__buttons ${initialActiveSolution ? 'is-hidden' : ''}" id="story-solutions-buttons">
            <button type="button" class="solutions__circle-btn solutions__circle-btn--planejar" data-target="planejar">
                <span class="solutions__circle-label">PLANEJAR</span>
            </button>
            <button type="button" class="solutions__circle-btn solutions__circle-btn--fortalecer" data-target="fortalecer">
                <span class="solutions__circle-label">FORTALECER</span>
            </button>
            <button type="button" class="solutions__circle-btn solutions__circle-btn--engajar" data-target="engajar">
                <span class="solutions__circle-label">ENGAJAR</span>
            </button>
        </div>
      </div>

      <!-- 2. Painéis Detalhados Aglutinados (Full bleed) -->
      <div class="solutions__panels-container" id="story-solutions-showcase">
          
          <!-- Painel 1: Planejar (Figma node 1027:95) -->
          <div class="solutions__panel solutions__panel--planejar ${initialActiveSolution === 'planejar' ? 'is-active' : ''}" id="story-panel-planejar">
              <button type="button" class="solutions__close-btn" aria-label="Fechar detalhes da solução" data-close="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
              </button>
              <div class="solutions__main-content">
                  <div class="solutions__composition">
                      <div class="solutions__badge-circle solutions__badge-circle--planejar">
                          PLANEJAR
                      </div>
                      <img src="img/onca_planejar.png" alt="Planejar - Olhar da onça" class="solutions__hero-img">
                  </div>
                  <div class="solutions__desc-text">
                      <p>Construímos estratégias para orientar decisões e gerar impacto. Apoiamos a definição de propósitos, prioridades e caminhos para orientar decisões e transformar objetivos em planos consistentes e viáveis.</p>
                  </div>
              </div>
              <div class="solutions__bottom-panel solutions__bottom-panel--planejar">
                  <div class="solutions__bottom-grid">
                      <div class="solutions__sub-img-wrap">
                          <img src="img/cactos_planejar.png" alt="Caatinga e mandacarus" class="solutions__sub-img">
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

          <!-- Painel 2: Fortalecer (Figma node 2087:439) -->
          <div class="solutions__panel solutions__panel--fortalecer ${initialActiveSolution === 'fortalecer' ? 'is-active' : ''}" id="story-panel-fortalecer">
              <button type="button" class="solutions__close-btn" aria-label="Fechar detalhes da solução" data-close="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
              </button>
              <div class="solutions__main-content">
                  <div class="solutions__composition">
                      <div class="solutions__badge-circle solutions__badge-circle--fortalecer">
                          FORTALECER
                      </div>
                      <img src="img/pantanal_fortalecer.png" alt="Pantanal vista aérea" class="solutions__hero-img">
                  </div>
                  <div class="solutions__desc-text">
                      <p>Transformamos estratégias em capacidade de implementação</p>
                      <p>Uma boa estratégia só gera impacto quando as organizações estão preparadas para colocá-la em prática.</p>
                      <p>Apoiamos organizações e iniciativas no fortalecimento de sua gestão, no desenvolvimento de capacidades e na estruturação de processos que tornem a implementação mais consistente e duradoura</p>
                  </div>
              </div>
              <div class="solutions__bottom-panel solutions__bottom-panel--fortalecer">
                  <div class="solutions__bottom-grid">
                      <div class="solutions__sub-img-wrap">
                          <img src="img/flores_fortalecer.png" alt="Flores do cerrado sempre-viva" class="solutions__sub-img">
                      </div>
                      <div class="solutions__atuamos-content">
                          <h4 class="solutions__atuamos-title">ATUAMOS EM:</h4>
                          <ul class="solutions__atuamos-list">
                              <li>Fortalecimento institucional</li>
                              <li>Desenvolvimento organizacional</li>
                              <li>Gestão do conhecimento</li>
                              <li>Capacitação e formação de equipe</li>
                              <li>Estruturação de programas e projetos</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Painel 3: Engajar (Figma node 2093:458) -->
          <div class="solutions__panel solutions__panel--engajar ${initialActiveSolution === 'engajar' ? 'is-active' : ''}" id="story-panel-engajar">
              <button type="button" class="solutions__close-btn" aria-label="Fechar detalhes da solução" data-close="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
              </button>
              <div class="solutions__main-content">
                  <div class="solutions__composition">
                      <div class="solutions__badge-circle solutions__badge-circle--engajar">
                          ENGAJAR
                      </div>
                      <img src="img/araucarias_engajar.png" alt="Araucárias ao pôr do sol" class="solutions__hero-img">
                  </div>
                  <div class="solutions__desc-text">
                      <p>Conectamos pessoas para construir soluções compartilhadas</p>
                      <p>A conservação da natureza é um esforço coletivo. Promovemos processos participativos que conectam diferentes conhecimentos, interesses e perspectivas em torno de objetivos comuns, fortalecem a governança, promovem o diálogo e ampliam a legitimidade das decisões.</p>
                  </div>
              </div>
              <div class="solutions__bottom-panel solutions__bottom-panel--engajar">
                  <div class="solutions__bottom-grid">
                      <div class="solutions__sub-img-wrap">
                          <img src="img/mata_engajar.png" alt="Mata Atlântica" class="solutions__sub-img">
                      </div>
                      <div class="solutions__atuamos-content">
                          <h4 class="solutions__atuamos-title">ATUAMOS EM:</h4>
                          <ul class="solutions__atuamos-list">
                              <li>Facilitação de oficinas e encontros</li>
                              <li>Diagnósticos e planejamentos participativos</li>
                              <li>Governança colaborativa</li>
                              <li>Mapeamento de atores</li>
                              <li>Mediação e articulação institucional</li>
                              <li>Conselhos gestores e redes colaborativas</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    </div>
  `;

  // Story interactive event listeners
  const btnGroup = container.querySelector('#story-solutions-buttons');
  const circleBtns = container.querySelectorAll('.solutions__circle-btn');
  const panels = container.querySelectorAll('.solutions__panel');
  const closeBtns = container.querySelectorAll('.solutions__close-btn');

  circleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      btnGroup.classList.add('is-hidden');
      panels.forEach(p => p.classList.remove('is-active'));
      const activePanel = container.querySelector(`#story-panel-${target}`);
      if (activePanel) activePanel.classList.add('is-active');
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      panels.forEach(p => p.classList.remove('is-active'));
      btnGroup.classList.remove('is-hidden');
    });
  });

  return container;
};

export const RestState = {
  render: () => renderSolucoes(null),
};

export const PanelPlanejar = {
  render: () => renderSolucoes('planejar'),
};

export const PanelFortalecer = {
  render: () => renderSolucoes('fortalecer'),
};

export const PanelEngajar = {
  render: () => renderSolucoes('engajar'),
};
