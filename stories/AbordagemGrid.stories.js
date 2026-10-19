export default {
  title: 'Design System/Nossa Abordagem/AbordagemGrid',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'proposito', 'construcao', 'ciencia', 'implementacao'],
      description: 'Estado da grade de abordagem correspondente ao Component Set no Figma (node 3238:1020)',
    },
  },
};

const renderAbordagemGrid = ({ state = 'default', isInteractive = false }) => {
  const container = document.createElement('div');
  container.style.backgroundColor = 'var(--verdemata-200)';
  container.style.padding = '3rem 0';
  container.style.minHeight = '650px';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';

  const activePillar = state === 'default' ? null : (state === 'implementacao' ? 'resultados' : state);

  container.innerHTML = `
    <div style="width: 100%; max-width: 1440px; margin: 0 auto;">
      <div class="approach-container" style="margin-bottom: 2.5rem;">
        <p class="approach-subtitle">
          Cada projeto é único, mas nossa atuação é orientada por princípios comuns:
        </p>
      </div>

      <div class="pillars" data-name="abordagem-grid" data-state="${state}">
        <div class="pillars__grid ${activePillar ? 'has-expanded' : ''}" role="region" aria-label="Princípios da nossa abordagem">
          
          <!-- 1. Propósito (Petróleo, Top-Left) -->
          <div class="pillars__item pillars__item--petroleo ${activePillar === 'proposito' ? 'pillars__item--is-expanded' : ''}" 
               tabindex="0" 
               role="button" 
               aria-expanded="${activePillar === 'proposito' ? 'true' : 'false'}" 
               aria-controls="story-grid-proposito"
               data-pillar="proposito">
              <div class="pillars__initial-box">
                  <h3 class="pillars__initial-title">PROPÓSITO</h3>
              </div>
              <div class="pillars__expanded-content" id="story-grid-proposito">
                  <div class="pillars__col-left">
                      <h3 class="pillars__title">PROPÓSITO</h3>
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

          <!-- 2. Construção Participativa (Verde, Top-Right) -->
          <div class="pillars__item pillars__item--verde ${activePillar === 'construcao' ? 'pillars__item--is-expanded' : ''}" 
               tabindex="0" 
               role="button" 
               aria-expanded="${activePillar === 'construcao' ? 'true' : 'false'}" 
               aria-controls="story-grid-construcao"
               data-pillar="construcao">
              <div class="pillars__initial-box">
                  <h3 class="pillars__initial-title">CONSTRUÇÃO<br>PARTICIPATIVA</h3>
              </div>
              <div class="pillars__expanded-content" id="story-grid-construcao">
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

          <!-- 3. Ciência Aplicada a Decisão (Oceano, Bottom-Left) -->
          <div class="pillars__item pillars__item--oceano ${activePillar === 'ciencia' ? 'pillars__item--is-expanded' : ''}" 
               tabindex="0" 
               role="button" 
               aria-expanded="${activePillar === 'ciencia' ? 'true' : 'false'}" 
               aria-controls="story-grid-ciencia"
               data-pillar="ciencia">
              <div class="pillars__initial-box">
                  <h3 class="pillars__initial-title">CIÊNCIA APLICADA<br>A DECISÃO</h3>
              </div>
              <div class="pillars__expanded-content" id="story-grid-ciencia">
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

          <!-- 4. Implementação e Resultados (Âmbar, Bottom-Right) -->
          <div class="pillars__item pillars__item--ambar ${activePillar === 'resultados' ? 'pillars__item--is-expanded' : ''}" 
               tabindex="0" 
               role="button" 
               aria-expanded="${activePillar === 'resultados' ? 'true' : 'false'}" 
               aria-controls="story-grid-resultados"
               data-pillar="resultados">
              <div class="pillars__initial-box">
                  <h3 class="pillars__initial-title">IMPLEMENTAÇÃO<br>E RESULTADOS</h3>
              </div>
              <div class="pillars__expanded-content" id="story-grid-resultados">
                  <div class="pillars__col-left">
                      <p class="pillars__desc">Buscamos fortalecer capacidades e criar condições para que estratégias se transformem em resultados concretos.</p>
                  </div>
                  <div class="pillars__col-right">
                      <div class="pillars__icon">
                          <svg class="pillars__svg" viewBox="0 0 170 170" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
                              <circle cx="85" cy="85" r="75" />
                              <polyline points="45,105 75,75 105,95 130,55" />
                              <polyline points="105,55 130,55 130,80" />
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

  if (isInteractive) {
    const grid = container.querySelector('.pillars__grid');
    const items = container.querySelectorAll('.pillars__item');

    const resetAll = () => {
      items.forEach(item => {
        item.classList.remove('pillars__item--is-expanded');
        item.setAttribute('aria-expanded', 'false');
      });
      grid.classList.remove('has-expanded');
    };

    items.forEach(item => {
      item.addEventListener('click', () => {
        const isExp = item.classList.contains('pillars__item--is-expanded');
        resetAll();
        if (!isExp) {
          item.classList.add('pillars__item--is-expanded');
          item.setAttribute('aria-expanded', 'true');
          grid.classList.add('has-expanded');
        }
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          resetAll();
        }
      });
    });
  }

  return container;
};

export const Default = {
  args: {
    state: 'default',
  },
  render: (args) => renderAbordagemGrid({ ...args, isInteractive: false }),
};

export const Proposito = {
  args: {
    state: 'proposito',
  },
  render: (args) => renderAbordagemGrid({ ...args, isInteractive: false }),
};

export const Construcao = {
  args: {
    state: 'construcao',
  },
  render: (args) => renderAbordagemGrid({ ...args, isInteractive: false }),
};

export const Ciencia = {
  args: {
    state: 'ciencia',
  },
  render: (args) => renderAbordagemGrid({ ...args, isInteractive: false }),
};

export const Implementacao = {
  args: {
    state: 'implementacao',
  },
  render: (args) => renderAbordagemGrid({ ...args, isInteractive: false }),
};

export const Interactive = {
  args: {
    state: 'default',
  },
  render: (args) => renderAbordagemGrid({ ...args, isInteractive: true }),
};
