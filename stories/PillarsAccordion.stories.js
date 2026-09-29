export default {
  title: 'Design System/Nossa Abordagem/PillarsAccordion',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

const renderPillars = (initialActivePillar = null) => {
  const wrapper = document.createElement('div');
  wrapper.style.backgroundColor = 'var(--verdemata-100)';
  wrapper.style.padding = '3rem 2rem';
  wrapper.style.minHeight = '650px';

  wrapper.innerHTML = `
    <div style="max-width: 1440px; margin: 0 auto;">
      <div class="pillars" id="story-pillars">
        <div class="pillars__grid ${initialActivePillar ? 'has-expanded' : ''}" role="region" aria-label="Princípios da nossa abordagem">
          
          <!-- Pilar 1: Estratégia (Petróleo) -->
          <div class="pillars__item pillars__item--petroleo ${initialActivePillar === 'estrategia' ? 'pillars__item--is-expanded' : ''}" 
               tabindex="0" 
               role="button" 
               aria-expanded="${initialActivePillar === 'estrategia' ? 'true' : 'false'}" 
               data-pillar="estrategia">
              <button type="button" class="pillars__close-btn" aria-label="Fechar detalhes do pilar">
                  <svg class="pillars__close-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
              </button>
              <div class="pillars__initial-box">
                  <h3 class="pillars__initial-title">ESTRATÉGIA ORIENTADA<br>POR PROPÓSITO</h3>
              </div>
              <div class="pillars__expanded-content" id="story-body-estrategia">
                  <div class="pillars__col-left">
                      <h3 class="pillars__title">ESTRATÉGIA ORIENTADA<br>POR PROPÓSITO</h3>
                      <div class="pillars__icon">
                          <svg class="pillars__svg" viewBox="0 0 181 181" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round">
                              <circle cx="90.5" cy="90.5" r="76" />
                              <circle cx="90.5" cy="90.5" r="48" />
                              <circle cx="90.5" cy="90.5" r="20" />
                          </svg>
                      </div>
                  </div>
                  <div class="pillars__col-right">
                      <p class="pillars__desc">Partimos do propósito da organização ou iniciativa e dos resultados que se pretende alcançar para desenvolver caminhos alinhados aos seus desafios e oportunidades.</p>
                  </div>
              </div>
          </div>

          <!-- Pilar 2: Construção (Verde) -->
          <div class="pillars__item pillars__item--verde ${initialActivePillar === 'construcao' ? 'pillars__item--is-expanded' : ''}" 
               tabindex="0" 
               role="button" 
               aria-expanded="${initialActivePillar === 'construcao' ? 'true' : 'false'}" 
               data-pillar="construcao">
              <button type="button" class="pillars__close-btn" aria-label="Fechar detalhes do pilar">
                  <svg class="pillars__close-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
              </button>
              <div class="pillars__initial-box">
                  <h3 class="pillars__initial-title">CONSTRUÇÃO<br>PARTICIPATIVA</h3>
              </div>
              <div class="pillars__expanded-content" id="story-body-construcao">
                  <div class="pillars__col-left">
                      <p class="pillars__desc">Acreditamos que as melhores soluções surgem do encontro entre diferentes conhecimentos, experiências e perspectivas.</p>
                  </div>
                  <div class="pillars__col-right">
                      <h3 class="pillars__title">CONSTRUÇÃO<br>PARTICIPATIVA</h3>
                      <div class="pillars__icon">
                          <svg class="pillars__svg" viewBox="0 0 192 192" fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round">
                              <polygon points="96,16 48,92 144,92" />
                              <circle cx="62" cy="144" r="32" />
                              <rect x="114" y="112" width="64" height="64" />
                          </svg>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Pilar 3: Ciência (Oceano) -->
          <div class="pillars__item pillars__item--oceano ${initialActivePillar === 'ciencia' ? 'pillars__item--is-expanded' : ''}" 
               tabindex="0" 
               role="button" 
               aria-expanded="${initialActivePillar === 'ciencia' ? 'true' : 'false'}" 
               data-pillar="ciencia">
              <button type="button" class="pillars__close-btn" aria-label="Fechar detalhes do pilar">
                  <svg class="pillars__close-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
              </button>
              <div class="pillars__initial-box">
                  <h3 class="pillars__initial-title">CIÊNCIA APLICADA<br>A DECISÃO</h3>
              </div>
              <div class="pillars__expanded-content" id="story-body-ciencia">
                  <div class="pillars__col-left">
                      <div class="pillars__icon">
                          <svg class="pillars__svg" viewBox="0 0 187 187" fill="currentColor">
                              <rect x="25" y="98" width="35" height="64" rx="4" />
                              <rect x="76" y="52" width="35" height="110" rx="4" />
                              <rect x="127" y="24" width="35" height="138" rx="4" />
                          </svg>
                      </div>
                      <h3 class="pillars__title">CIÊNCIA APLICADA<br>A DECISÃO</h3>
                  </div>
                  <div class="pillars__col-right">
                      <p class="pillars__desc">Aliamos conhecimento técnico e empírico, experiência prática e metodologias versáteis para apoiar decisões qualificadas.</p>
                  </div>
              </div>
          </div>

          <!-- Pilar 4: Resultados (Âmbar) -->
          <div class="pillars__item pillars__item--ambar ${initialActivePillar === 'resultados' ? 'pillars__item--is-expanded' : ''}" 
               tabindex="0" 
               role="button" 
               aria-expanded="${initialActivePillar === 'resultados' ? 'true' : 'false'}" 
               data-pillar="resultados">
              <button type="button" class="pillars__close-btn" aria-label="Fechar detalhes do pilar">
                  <svg class="pillars__close-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
              </button>
              <div class="pillars__initial-box">
                  <h3 class="pillars__initial-title">IMPLEMENTAÇÃO<br>E RESULTADOS</h3>
              </div>
              <div class="pillars__expanded-content" id="story-body-resultados">
                  <div class="pillars__col-left">
                      <p class="pillars__desc">Buscamos fortalecer capacidades e criar condições para que estratégias se transformem em resultados concretos.</p>
                  </div>
                  <div class="pillars__col-right">
                      <div class="pillars__icon">
                          <svg class="pillars__svg" viewBox="0 0 170 170" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M48 116 C30 96 34 62 56 42 C80 20 118 22 138 46 C158 70 152 108 126 128 C104 146 72 144 54 126" />
                              <path d="M52 106 L82 76 L108 96 L134 66" />
                              <path d="M116 64 H136 V84" />
                          </svg>
                      </div>
                      <h3 class="pillars__title">IMPLEMENTAÇÃO<br>E RESULTADOS</h3>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  `;

  // Story interactive event listeners
  const grid = wrapper.querySelector('#story-pillars .pillars__grid');
  const items = wrapper.querySelectorAll('.pillars__item');

  const closeAll = () => {
    items.forEach(it => {
      it.classList.remove('pillars__item--is-expanded');
      it.setAttribute('aria-expanded', 'false');
    });
    grid.classList.remove('has-expanded');
  };

  items.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.pillars__close-btn')) return;
      const isExp = item.classList.contains('pillars__item--is-expanded');
      closeAll();
      if (!isExp) {
        item.classList.add('pillars__item--is-expanded');
        item.setAttribute('aria-expanded', 'true');
        grid.classList.add('has-expanded');
      }
    });

    const closeBtn = item.querySelector('.pillars__close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAll();
      });
    }
  });

  return wrapper;
};

export const Collapsed2x2 = {
  render: () => renderPillars(null),
};

export const ExpandedEstrategia = {
  render: () => renderPillars('estrategia'),
};

export const ExpandedConstrucao = {
  render: () => renderPillars('construcao'),
};

export const ExpandedCiencia = {
  render: () => renderPillars('ciencia'),
};

export const ExpandedResultados = {
  render: () => renderPillars('resultados'),
};
