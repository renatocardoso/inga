export default {
  title: 'Design System/Navigation/HeaderNav',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const FloatingHeader = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.minHeight = '280px';
    wrapper.style.background = 'url("img/conceito1.jpg") center/cover no-repeat';
    wrapper.style.position = 'relative';
    wrapper.style.padding = '2.5rem 1rem';

    wrapper.innerHTML = `
      <header class="header-nav" style="position: relative; top: 0;">
        <div class="header-nav__container">
          <a href="#hero" class="header-nav__brand-btn" aria-label="Ir para o topo" data-name="brand-dot">
            <span class="header-nav__brand-dot"></span>
          </a>

          <button id="story-menu-toggle" class="header-nav__toggle" aria-label="Abrir menu">
            <span class="header-nav__toggle-line"></span>
            <span class="header-nav__toggle-line"></span>
            <span class="header-nav__toggle-line"></span>
          </button>

          <nav id="story-main-nav" class="header-nav__list" role="navigation" aria-label="Navegação Principal" data-name="header-nav__list">
            <a href="#quem-somos" class="header-nav__link" data-name="nav-btn">QUEM SOMOS</a>
            <a href="#nossa-abordagem" class="header-nav__link" data-name="nav-btn">NOSSA ABORDAGEM</a>
            <a href="#solucoes" class="header-nav__link" data-name="nav-btn">SOLUÇÕES</a>
            <button type="button" class="header-nav__link header-nav__link--btn" data-name="nav-btn">CONTATO</button>
          </nav>
        </div>
      </header>
    `;

    return wrapper;
  },
};

export const NavButtonStates = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = '3rem 2rem';
    wrapper.style.backgroundColor = 'var(--oceanoprofundo-900)';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '2rem';
    wrapper.style.alignItems = 'center';

    wrapper.innerHTML = `
      <div style="color: var(--verdemata-300); font-family: var(--font-primary); font-size: 0.875rem; letter-spacing: 0.05em; text-transform: uppercase;">
        Estados do Componente nav-btn (Figma node 2055:234)
      </div>
      <div style="display: flex; gap: 3rem; align-items: center; background: rgba(9, 31, 30, 0.5); padding: 1.5rem 3rem; border-radius: var(--radius-pill); border: 1px solid rgba(255, 255, 255, 0.08);">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.75rem; color: var(--color-ocean-400);">state=default</span>
          <button type="button" class="header-nav__link" style="color: var(--color-ocean-100);">QUEM SOMOS</button>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.75rem; color: var(--color-ocean-400);">state=hover / active</span>
          <button type="button" class="header-nav__link active" style="color: var(--color-ocean-400);">QUEM SOMOS</button>
        </div>
      </div>
    `;

    return wrapper;
  },
};

export const BrandDotStates = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = '3rem 2rem';
    wrapper.style.backgroundColor = 'var(--oceanoprofundo-900)';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '2rem';
    wrapper.style.alignItems = 'center';

    wrapper.innerHTML = `
      <div style="color: var(--verdemata-300); font-family: var(--font-primary); font-size: 0.875rem; letter-spacing: 0.05em; text-transform: uppercase;">
        Estados do Componente brand-dot (Figma node 2058:287)
      </div>
      <div style="display: flex; gap: 3rem; align-items: center; background: rgba(9, 31, 30, 0.5); padding: 1.5rem 3rem; border-radius: var(--radius-pill); border: 1px solid rgba(255, 255, 255, 0.08);">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
          <span style="font-size: 0.75rem; color: var(--color-ocean-400);">state=default</span>
          <span class="header-nav__brand-dot" style="display: block; width: 30px; height: 30px; border-radius: 50%; background-color: var(--color-ocean-500);"></span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
          <span style="font-size: 0.75rem; color: var(--color-ocean-400);">state=hover</span>
          <span class="header-nav__brand-dot" style="display: block; width: 30px; height: 30px; border-radius: 50%; background-color: var(--color-ocean-100); transform: scale(1.15);"></span>
        </div>
      </div>
    `;

    return wrapper;
  },
};
