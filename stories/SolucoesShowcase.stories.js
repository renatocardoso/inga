export default {
  title: 'Design System/Soluções/SolucoesShowcase',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

const renderSolucoes = (initialStage = 'default', initialRevealedCardIndex = null) => {
  const container = document.createElement('div');
  container.className = 'solutions-section';
  container.dataset.stage = initialStage;
  container.style.padding = '3rem 0 0 0';

  container.innerHTML = `
    <div class="solutions-container">
      <p class="solutions-lead-intro">
          A atuação da INGA articula três dimensões, que podem ser desenvolvidas de forma integrada ou adaptadas às necessidades de cada projeto.
      </p>

      <!-- Dynamic Navigation Bar (solucoes__nav - Figma node 4007:2762) -->
      <div class="solutions__nav-bar" id="story-solutions-nav" data-stage="${initialStage}" role="tablist" aria-label="Dimensões das Soluções">
          <!-- 1. Planejar -->
          <button type="button" 
                  class="solutions__nav-btn solutions__nav-btn--planejar" 
                  data-solution="planejar"
                  role="tab"
                  aria-selected="${initialStage === 'planejar' ? 'true' : 'false'}"
                  aria-controls="story-panel-planejar"
                  aria-label="Solução Planejar">
              <span class="solutions__nav-label">PLANEJAR</span>
          </button>

          <!-- 2. Engajar -->
          <button type="button" 
                  class="solutions__nav-btn solutions__nav-btn--engajar" 
                  data-solution="engajar"
                  role="tab"
                  aria-selected="${initialStage === 'engajar' ? 'true' : 'false'}"
                  aria-controls="story-panel-engajar"
                  aria-label="Solução Engajar">
              <span class="solutions__nav-label">ENGAJAR</span>
          </button>

          <!-- 3. Fortalecer -->
          <button type="button" 
                  class="solutions__nav-btn solutions__nav-btn--fortalecer" 
                  data-solution="fortalecer"
                  role="tab"
                  aria-selected="${initialStage === 'fortalecer' ? 'true' : 'false'}"
                  aria-controls="story-panel-fortalecer"
                  aria-label="Solução Fortalecer">
              <span class="solutions__nav-label">FORTALECER</span>
          </button>
      </div>
    </div>

    <!-- Content Panels (solucoes__content - Figma node 4020:2868) -->
    <div class="solutions__panels-container">
        <!-- PANEL 1: PLANEJAR -->
        <div class="solutions__panel solutions__panel--planejar ${initialStage === 'planejar' ? 'is-active' : ''}" 
             id="story-panel-planejar" 
             role="tabpanel" 
             ${initialStage === 'planejar' ? '' : 'hidden'}>
            <div class="solutions__split-layout">
                <!-- Left Column: Media Stack (663px) -->
                <div class="solutions__media-col">
                    <!-- Top Media Card (663x445px, rounded-tr 300px) -->
                    <div class="solutions__media-card solutions__media-card--round ${initialRevealedCardIndex === 0 ? 'is-revealed' : ''}" tabindex="0" role="region" aria-label="Case RPPN Howard Quigley">
                        <div class="solutions__media-photo-wrap">
                            <img src="img/solucoes_planejar_onca.jpg" alt="Olhar da onça pintada no Pantanal" class="solutions__media-photo">
                        </div>
                        <div class="solutions__media-popover">
                            <div class="solutions__media-logo-wrap">
                                <img src="img/case_panthera.svg" alt="Panthera" class="solutions__media-logo-img">
                            </div>
                            <div class="solutions__media-info">
                                <p class="solutions__media-project-title">Plano de Manejo e de Uso Público da RPPN Howard Quigley</p>
                                <p class="solutions__media-location">Pantanal</p>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Media Card (663x444px, straight) -->
                    <div class="solutions__media-card solutions__media-card--rect ${initialRevealedCardIndex === 1 ? 'is-revealed' : ''}" tabindex="0" role="region" aria-label="Case Complexo Eólico Campo Largo">
                        <div class="solutions__media-photo-wrap">
                            <img src="img/solucoes_planejar_cactos.jpg" alt="Vegetação de Caatinga e mandacarus" class="solutions__media-photo">
                        </div>
                        <div class="solutions__media-popover">
                            <div class="solutions__media-logo-wrap">
                                <img src="img/case_engie.svg" alt="ENGIE" class="solutions__media-logo-img">
                            </div>
                            <div class="solutions__media-info">
                                <p class="solutions__media-project-title">Plano de Ação para Conservação de Alvos de Biodiversidade do Complexo Eólico Campo Largo</p>
                                <p class="solutions__media-location">Caatinga</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Editorial Content (774px) -->
                <div class="solutions__editorial-col">
                    <h3 class="solutions__editorial-title">Construímos estratégias para orientar decisões e gerar impacto.</h3>
                    <p class="solutions__editorial-desc">Apoiamos a definição de propósitos, prioridades e caminhos para orientar decisões e transformar objetivos em planos consistentes e viáveis.</p>
                    
                    <div class="solutions__act-section">
                        <h4 class="solutions__act-label">ATUAÇÃO</h4>
                        <ul class="solutions__act-list">
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

        <!-- PANEL 2: ENGAJAR -->
        <div class="solutions__panel solutions__panel--engajar ${initialStage === 'engajar' ? 'is-active' : ''}" 
             id="story-panel-engajar" 
             role="tabpanel" 
             ${initialStage === 'engajar' ? '' : 'hidden'}>
            <div class="solutions__split-layout">
                <!-- Left Column: Media Stack (663px) -->
                <div class="solutions__media-col">
                    <!-- Top Media Card (663x445px, rounded-tr 300px) -->
                    <div class="solutions__media-card solutions__media-card--round" tabindex="0" role="region" aria-label="Case PAT Campanha">
                        <div class="solutions__media-photo-wrap">
                            <img src="img/solucoes_engajar_pampa.jpg" alt="Campo e gado ao entardecer no Pampa" class="solutions__media-photo">
                        </div>
                        <div class="solutions__media-popover">
                            <div class="solutions__media-logo-wrap">
                                <img src="img/case_pat_campanha.svg" alt="PAT Campanha Sul e Serra do Sudeste" class="solutions__media-logo-img">
                            </div>
                            <div class="solutions__media-info">
                                <p class="solutions__media-project-title">Oficina de Monitoria do PAT Campanha Sul e Serra do Sudeste</p>
                                <p class="solutions__media-location">Pampa</p>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Media Card (663x444px, straight) -->
                    <div class="solutions__media-card solutions__media-card--rect" tabindex="0" role="region" aria-label="Case REBIO do Mato Grande">
                        <div class="solutions__media-photo-wrap">
                            <img src="img/solucoes_engajar_oficina.jpg" alt="Facilitador conduzindo oficina participativa com post-its" class="solutions__media-photo">
                        </div>
                        <div class="solutions__media-popover">
                            <div class="solutions__media-logo-wrap">
                                <img src="img/case_governo_rs.svg" alt="Governo do RS - SEMA" class="solutions__media-logo-img">
                            </div>
                            <div class="solutions__media-info">
                                <p class="solutions__media-project-title">Oficina de Elaboração do Plano de Manejo da Reserva Biológica do Mato Grande</p>
                                <p class="solutions__media-location">Pampa e Sistema Costeiro Marinho</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Editorial Content (774px) -->
                <div class="solutions__editorial-col">
                    <h3 class="solutions__editorial-title">Conectamos pessoas para construir soluções compartilhadas.</h3>
                    <p class="solutions__editorial-desc">A conservação da natureza é um esforço coletivo. Promovemos processos participativos que conectam diferentes conhecimentos, interesses e perspectivas em torno de objetivos comuns, fortalecem a governança, promovem o diálogo e ampliam a legitimidade das decisões.</p>
                    
                    <div class="solutions__act-section">
                        <h4 class="solutions__act-label">ATUAÇÃO</h4>
                        <ul class="solutions__act-list">
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

        <!-- PANEL 3: FORTALECER -->
        <div class="solutions__panel solutions__panel--fortalecer ${initialStage === 'fortalecer' ? 'is-active' : ''}" 
             id="story-panel-fortalecer" 
             role="tabpanel" 
             ${initialStage === 'fortalecer' ? '' : 'hidden'}>
            <div class="solutions__split-layout">
                <!-- Left Column: Media Stack (663px) -->
                <div class="solutions__media-col">
                    <!-- Top Media Card (663x445px, rounded-tr 300px) -->
                    <div class="solutions__media-card solutions__media-card--round" tabindex="0" role="region" aria-label="Case Araucárias">
                        <div class="solutions__media-photo-wrap">
                            <img src="img/solucoes_fortalecer_araucarias.jpg" alt="Paisagem de araucárias ao entardecer" class="solutions__media-photo">
                        </div>
                        <div class="solutions__media-popover">
                            <div class="solutions__media-logo-wrap">
                                <img src="img/case_wwf.svg" alt="WWF Brasil" class="solutions__media-logo-img">
                            </div>
                            <div class="solutions__media-info">
                                <p class="solutions__media-project-title">Planejamento Estratégico e Conservação em Paisagens Silvestres</p>
                                <p class="solutions__media-location">Mata Atlântica</p>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Media Card (663x444px, straight) -->
                    <div class="solutions__media-card solutions__media-card--rect" tabindex="0" role="region" aria-label="Case Rede Sul">
                        <div class="solutions__media-photo-wrap">
                            <img src="img/solucoes_fortalecer_redesul.jpg" alt="Encontro institucional e equipe multidisciplinar" class="solutions__media-photo">
                        </div>
                        <div class="solutions__media-popover">
                            <div class="solutions__media-logo-wrap">
                                <img src="img/rede-sul__logo.png" alt="Rede Sul de Restauração Ecológica" class="solutions__media-logo-img">
                            </div>
                            <div class="solutions__media-info">
                                <p class="solutions__media-project-title">Assessoria para fortalecimento da Rede Sul de Restauração Ecológica</p>
                                <p class="solutions__media-location">Pampa e Mata Atlântica</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Editorial Content (774px) -->
                <div class="solutions__editorial-col">
                    <h3 class="solutions__editorial-title">Transformamos estratégias em capacidade de implementação.</h3>
                    <p class="solutions__editorial-desc">Uma boa estratégia só gera impacto quando as organizações estão preparadas para colocá-la em prática. Apoiamos organizações e iniciativas no fortalecimento de sua gestão, no desenvolvimento de capacidades e na estruturação de processos que tornem a implementação mais consistente e duradoura.</p>
                    
                    <div class="solutions__act-section">
                        <h4 class="solutions__act-label">ATUAÇÃO</h4>
                        <ul class="solutions__act-list">
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
    </div>
  `;

  // Interaction handlers
  const navBar = container.querySelector('#story-solutions-nav');
  const navBtns = container.querySelectorAll('.solutions__nav-btn');
  const panels = container.querySelectorAll('.solutions__panel');
  const cards = container.querySelectorAll('.solutions__media-card');

  const switchStage = (stage) => {
    if (navBar.dataset.stage === stage) {
      container.dataset.stage = 'default';
      navBar.dataset.stage = 'default';
      navBtns.forEach(btn => btn.setAttribute('aria-selected', 'false'));
      panels.forEach(p => {
        p.classList.remove('is-active');
        p.hidden = true;
      });
      return;
    }

    container.dataset.stage = stage;
    navBar.dataset.stage = stage;
    navBtns.forEach(btn => {
      btn.setAttribute('aria-selected', btn.dataset.solution === stage ? 'true' : 'false');
    });

    panels.forEach(p => {
      if (p.id === `story-panel-${stage}`) {
        p.hidden = false;
        p.classList.add('is-active');
      } else {
        p.classList.remove('is-active');
        p.hidden = true;
      }
    });
  };

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchStage(btn.dataset.solution);
    });
  });

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-revealed');
    });
  });

  return container;
};

export const RestState = {
  render: () => renderSolucoes('default'),
};

export const PanelPlanejar = {
  render: () => renderSolucoes('planejar'),
};

export const PanelPlanejarHoverCard = {
  render: () => renderSolucoes('planejar', 0),
};

export const PanelEngajar = {
  render: () => renderSolucoes('engajar'),
};

export const PanelFortalecer = {
  render: () => renderSolucoes('fortalecer'),
};
