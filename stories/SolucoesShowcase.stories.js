export default {
  title: 'Design System/Soluções/SolucoesShowcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

const renderSolucoes = (initialActiveSolution = null, initialExpandedMedia = null) => {
  const container = document.createElement('div');
  container.className = 'solutions-section';
  container.style.padding = '3rem 0 0 0';

  container.innerHTML = `
    <div>
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
        <p class="solutions-lead-intro">
            A atuação da INGA articula três dimensões, que podem ser desenvolvidas de forma integrada ou adaptadas às necessidades de cada projeto.
        </p>

        <!-- 1. Três Botões Circulares Iniciais (Figma nodes 3376:497) -->
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
          
          <!-- Painel 1: Planejar (Figma nodes 1027:95, 3382:520) -->
          <div class="solutions__panel solutions__panel--planejar ${initialActiveSolution === 'planejar' ? 'is-active' : ''}" id="story-panel-planejar">
              <button type="button" class="solutions__close-btn" aria-label="Fechar detalhes da solução" data-close="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
              </button>
              
              <div class="solutions__showcase-layout">
                  <div class="solutions__visual-col" data-name="planejar__media--nav">
                      <div class="solutions__badge-circle solutions__badge-circle--planejar">
                          PLANEJAR
                      </div>

                      <!-- Círculo de Mídia Menor Interativo (solucoes__media--btn-sm - Figma node 3460:1834) -->
                      <div class="solucoes__media--btn-sm planejar__media--btn-sm solucoes__media--btn-top ${initialExpandedMedia === 'planejar-sm' ? 'is-expanded' : ''}" 
                           tabindex="0" 
                           role="button" 
                           aria-expanded="${initialExpandedMedia === 'planejar-sm' ? 'true' : 'false'}" 
                           aria-label="Ver case Plano de Manejo da RPPN Howard Quigley">
                          <!-- Popover (surge por trás da imagem, deslocado abaixo: top 400px, left -151px) -->
                          <div class="solucoes__media--popover planejar__media--popover">
                              <div class="solucoes__media--logo planejar__media--logo">
                                  <img src="img/case_panthera.svg" alt="Panthera" class="solucoes__media--logo-img">
                              </div>
                              <h5 class="solucoes__media--title">Plano de Manejo da RPPN Howard Quigley (Pantanal)</h5>
                              <p class="solucoes__media--desc">
                                  Breve descritivo do case de aplicação da dimensão Planejar. Case de portfólio.
                                  <br>
                                  <a href="#contato" class="solucoes__media--link">Saiba Mais...</a>
                              </p>
                          </div>
                          <!-- Trigger em primeiro plano -->
                          <div class="solucoes__media--trigger planejar__media--trigger">
                              <img src="img/onca_planejar.png" alt="Olhar da onça pintada" class="solucoes__media--img">
                          </div>
                      </div>

                      <!-- Círculo de Mídia Maior Interativo (solucoes__media--btn-lg - Figma node 3463:1912) -->
                      <div class="solucoes__media--btn-lg planejar__media--btn-lg solucoes__media--btn-bottom ${initialExpandedMedia === 'planejar-lg' ? 'is-expanded' : ''}" 
                           tabindex="0" 
                           role="button" 
                           aria-expanded="${initialExpandedMedia === 'planejar-lg' ? 'true' : 'false'}" 
                           aria-label="Ver case Plano de Ação para Conservação de Alvos do Complexo Campo Largo">
                          <!-- Popover (surge por trás da imagem, deslocado abaixo: top 460px, left 340px) -->
                          <div class="solucoes__media--popover planejar__media--popover">
                              <div class="solucoes__media--logo planejar__media--logo">
                                  <img src="img/case_engie.svg" alt="ENGIE" class="solucoes__media--logo-img">
                              </div>
                              <h5 class="solucoes__media--title">Plano de Ação para Conservação de Alvos do Complexo Campo Largo (Caatinga)</h5>
                              <p class="solucoes__media--desc">
                                  Breve descritivo do case de aplicação da dimensão Planejar. Case de portfólio.
                                  <br>
                                  <a href="#contato" class="solucoes__media--link">Saiba Mais...</a>
                              </p>
                          </div>
                          <!-- Trigger em primeiro plano -->
                          <div class="solucoes__media--trigger planejar__media--trigger">
                              <img src="img/cactos_planejar.png" alt="Vegetação de Caatinga e mandacarus" class="solucoes__media--img">
                          </div>
                      </div>
                  </div>

                  <div class="solutions__content-col" data-name="planejar__content">
                      <div class="solutions__mini-circles" role="toolbar" aria-label="Navegar para outras soluções">
                          <button type="button" class="solutions__mini-circle solutions__mini-circle--fortalecer" data-target="fortalecer" aria-label="Navegar para Fortalecer">
                              FORTALECER
                          </button>
                          <button type="button" class="solutions__mini-circle solutions__mini-circle--engajar" data-target="engajar" aria-label="Navegar para Engajar">
                              ENGAJAR
                          </button>
                      </div>

                      <div class="solutions__desc-text">
                          <p>Construímos estratégias para orientar decisões e gerar impacto. Apoiamos a definição de propósitos, prioridades e caminhos para orientar decisões e transformar objetivos em planos consistentes e viáveis.</p>
                      </div>

                      <div class="solutions__atuamos-box">
                          <h4 class="solutions__section-title">ATUAÇÃO</h4>
                          <ul class="solutions__bullets-list">
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

          <!-- Painel 2: Fortalecer (Figma nodes 3469:1937, 3409:594) -->
          <div class="solutions__panel solutions__panel--fortalecer ${initialActiveSolution === 'fortalecer' ? 'is-active' : ''}" id="story-panel-fortalecer">
              <button type="button" class="solutions__close-btn" aria-label="Fechar detalhes da solução" data-close="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
              </button>

              <div class="solutions__showcase-layout">
                  <div class="solutions__visual-col" data-name="fortalecer__media--nav">
                      <div class="solutions__badge-circle solutions__badge-circle--fortalecer">
                          FORTALECER
                      </div>

                      <!-- Círculo de Mídia Menor Interativo (solucoes__media--btn-sm) -->
                      <div class="solucoes__media--btn-sm fortalecer__media--btn-sm solucoes__media--btn-top ${initialExpandedMedia === 'fortalecer-sm' ? 'is-expanded' : ''}" 
                           tabindex="0" 
                           role="button" 
                           aria-expanded="${initialExpandedMedia === 'fortalecer-sm' ? 'true' : 'false'}" 
                           aria-label="Ver case Assessoria para fortalecimento da Rede Sul de Restauração Ecológica">
                          <div class="solucoes__media--popover fortalecer__media--popover">
                              <div class="solucoes__media--logo fortalecer__media--logo">
                                  <img src="img/case_wwf.svg" alt="WWF Brasil" class="solucoes__media--logo-img">
                              </div>
                              <h5 class="solucoes__media--title">Assessoria para fortalecimento da Rede Sul de Restauração Ecológica (Pampa e Mata Atlântica)</h5>
                              <p class="solucoes__media--desc">
                                  Breve descritivo do case de aplicação da dimensão Fortalecer. Case de portfólio.
                                  <br>
                                  <a href="#contato" class="solucoes__media--link">Saiba Mais...</a>
                              </p>
                          </div>
                          <div class="solucoes__media--trigger fortalecer__media--trigger">
                              <img src="img/fortalecer_araucarias.png" alt="Paisagem de araucárias no entardecer" class="solucoes__media--img">
                          </div>
                      </div>

                      <!-- Círculo de Mídia Maior Interativo (solucoes__media--btn-lg) -->
                      <div class="solucoes__media--btn-lg fortalecer__media--btn-lg solucoes__media--btn-bottom ${initialExpandedMedia === 'fortalecer-lg' ? 'is-expanded' : ''}" 
                           tabindex="0" 
                           role="button" 
                           aria-expanded="${initialExpandedMedia === 'fortalecer-lg' ? 'true' : 'false'}" 
                           aria-label="Ver case Oficina de Monitoria do PAT Campanha Sul e Serra do Sudeste">
                          <div class="solucoes__media--popover fortalecer__media--popover">
                              <div class="solucoes__media--logo fortalecer__media--logo">
                                  <img src="img/case_redesul.png" alt="Rede Sul" class="solucoes__media--logo-img">
                              </div>
                              <h5 class="solucoes__media--title">Oficina de Monitoria do PAT Campanha Sul e Serra do Sudeste (Pampa)</h5>
                              <p class="solucoes__media--desc">
                                  Breve descritivo do case de aplicação da dimensão Fortalecer. Case de portfólio.
                                  <br>
                                  <a href="#contato" class="solucoes__media--link">Saiba Mais...</a>
                              </p>
                          </div>
                          <div class="solucoes__media--trigger fortalecer__media--trigger">
                              <img src="img/fortalecer_workshop.png" alt="Capacitação e formação institucional" class="solucoes__media--img">
                          </div>
                      </div>
                  </div>

                  <div class="solutions__content-col" data-name="fortalecer__content">
                      <div class="solutions__mini-circles" role="toolbar" aria-label="Navegar para outras soluções">
                          <button type="button" class="solutions__mini-circle solutions__mini-circle--planejar" data-target="planejar" aria-label="Navegar para Planejar">
                              PLANEJAR
                          </button>
                          <button type="button" class="solutions__mini-circle solutions__mini-circle--engajar" data-target="engajar" aria-label="Navegar para Engajar">
                              ENGAJAR
                          </button>
                      </div>

                      <div class="solutions__desc-text">
                          <p>Transformamos estratégias em capacidade de implementação.</p>
                          <p>Uma boa estratégia só gera impacto quando as organizações estão preparadas para colocá-la em prática.</p>
                          <p>Apoiamos organizações e iniciativas no fortalecimento de sua gestão, no desenvolvimento de capacidades e na estruturação de processos que tornem a implementação mais consistente e duradoura.</p>
                      </div>

                      <div class="solutions__atuamos-box">
                          <h4 class="solutions__section-title">ATUAÇÃO</h4>
                          <ul class="solutions__bullets-list">
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

          <!-- Painel 3: Engajar (Figma nodes 3469:1965, 3409:618) -->
          <div class="solutions__panel solutions__panel--engajar ${initialActiveSolution === 'engajar' ? 'is-active' : ''}" id="story-panel-engajar">
              <button type="button" class="solutions__close-btn" aria-label="Fechar detalhes da solução" data-close="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
              </button>

              <div class="solutions__showcase-layout">
                  <div class="solutions__visual-col" data-name="engajar__media--nav">
                      <div class="solutions__badge-circle solutions__badge-circle--engajar">
                          ENGAJAR
                      </div>

                      <!-- Círculo de Mídia Menor Interativo (solucoes__media--btn-sm) -->
                      <div class="solucoes__media--btn-sm engajar__media--btn-sm solucoes__media--btn-top ${initialExpandedMedia === 'engajar-sm' ? 'is-expanded' : ''}" 
                           tabindex="0" 
                           role="button" 
                           aria-expanded="${initialExpandedMedia === 'engajar-sm' ? 'true' : 'false'}" 
                           aria-label="Ver case Oficina Participativa da REBIO do Mato Grande">
                          <div class="solucoes__media--popover engajar__media--popover">
                              <div class="solucoes__media--logo engajar__media--logo">
                                  <img src="img/case_governo_rs.svg" alt="Governo do Rio Grande do Sul - SEMA" class="solucoes__media--logo-img">
                              </div>
                              <h5 class="solucoes__media--title">Oficina Participativa de Elaboração do Plano de Manejo da REBIO do Mato Grande (Pampa e Sistema Costeiro Marinho)</h5>
                              <p class="solucoes__media--desc">
                                  Breve descritivo do case de aplicação da dimensão Engajar. Case de portfólio.
                                  <br>
                                  <a href="#contato" class="solucoes__media--link">Saiba Mais...</a>
                              </p>
                          </div>
                          <div class="solucoes__media--trigger engajar__media--trigger">
                              <img src="img/engajar_pantanal.png" alt="Pantanal vista aérea com meandros de água" class="solucoes__media--img">
                          </div>
                      </div>

                      <!-- Círculo de Mídia Maior Interativo (solucoes__media--btn-lg) -->
                      <div class="solucoes__media--btn-lg engajar__media--btn-lg solucoes__media--btn-bottom ${initialExpandedMedia === 'engajar-lg' ? 'is-expanded' : ''}" 
                           tabindex="0" 
                           role="button" 
                           aria-expanded="${initialExpandedMedia === 'engajar-lg' ? 'true' : 'false'}" 
                           aria-label="Ver case Oficina de Monitoria do PAT Campanha Sul">
                          <div class="solucoes__media--popover engajar__media--popover">
                              <div class="solucoes__media--logo engajar__media--logo">
                                  <img src="img/case_pat_campanha.svg" alt="PAT Campanha Sul e Serra do Sudeste" class="solucoes__media--logo-img">
                              </div>
                              <h5 class="solucoes__media--title">Oficina de Monitoria do PAT Campanha Sul e Serra do Sudeste (Pampa)</h5>
                              <p class="solucoes__media--desc">
                                  Breve descritivo do case de aplicação da dimensão Engajar. Case de portfólio.
                                  <br>
                                  <a href="#contato" class="solucoes__media--link">Saiba Mais...</a>
                              </p>
                          </div>
                          <div class="solucoes__media--trigger engajar__media--trigger">
                              <img src="img/engajar_oficina.png" alt="Oficina participativa com facilitação e cartazes coletivos" class="solucoes__media--img">
                          </div>
                      </div>
                  </div>

                  <div class="solutions__content-col" data-name="engajar__content">
                      <div class="solutions__mini-circles" role="toolbar" aria-label="Navegar para outras soluções">
                          <button type="button" class="solutions__mini-circle solutions__mini-circle--planejar" data-target="planejar" aria-label="Navegar para Planejar">
                              PLANEJAR
                          </button>
                          <button type="button" class="solutions__mini-circle solutions__mini-circle--fortalecer" data-target="fortalecer" aria-label="Navegar para Fortalecer">
                              FORTALECER
                          </button>
                      </div>

                      <div class="solutions__desc-text">
                          <p>Conectamos pessoas para construir soluções compartilhadas.</p>
                          <p>A conservação da natureza é um esforço coletivo. Promovemos processos participativos que conectam diferentes conhecimentos, interesses e perspectivas em torno de objetivos comuns, fortalecem a governança, promovem o diálogo e ampliam a legitimidade das decisões.</p>
                      </div>

                      <div class="solutions__atuamos-box">
                          <h4 class="solutions__section-title">ATUAÇÃO</h4>
                          <ul class="solutions__bullets-list">
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
  `;

  // Story interactive event listeners
  const btnGroup = container.querySelector('#story-solutions-buttons');
  const circleBtns = container.querySelectorAll('.solutions__circle-btn');
  const miniCircleBtns = container.querySelectorAll('.solutions__mini-circle');
  const panels = container.querySelectorAll('.solutions__panel');
  const closeBtns = container.querySelectorAll('.solutions__close-btn');
  const mediaBtns = container.querySelectorAll('.solucoes__media--btn-sm, .solucoes__media--btn-lg, .solucoes-media-btn');

  const closeMedia = () => {
    mediaBtns.forEach(btn => {
      btn.classList.remove('is-expanded');
      btn.setAttribute('aria-expanded', 'false');
    });
  };

  const openStorySolution = (target) => {
    closeMedia();
    btnGroup.classList.add('is-hidden');
    panels.forEach(p => p.classList.remove('is-active'));
    const activePanel = container.querySelector(`#story-panel-${target}`);
    if (activePanel) activePanel.classList.add('is-active');
  };

  circleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      openStorySolution(target);
    });
  });

  miniCircleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      openStorySolution(target);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeMedia();
      panels.forEach(p => p.classList.remove('is-active'));
      btnGroup.classList.remove('is-hidden');
    });
  });

  mediaBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target.closest('.solucoes__media--link, .solucoes-media-popover__link')) return;
      const isAlreadyExpanded = btn.classList.contains('is-expanded');
      closeMedia();
      if (!isAlreadyExpanded) {
        btn.classList.add('is-expanded');
        btn.setAttribute('aria-expanded', 'true');
      }
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

export const PanelPlanejarMediaExpandedSm = {
  render: () => renderSolucoes('planejar', 'planejar-sm'),
};

export const PanelPlanejarMediaExpandedLg = {
  render: () => renderSolucoes('planejar', 'planejar-lg'),
};

export const PanelFortalecer = {
  render: () => renderSolucoes('fortalecer'),
};

export const PanelEngajar = {
  render: () => renderSolucoes('engajar'),
};
