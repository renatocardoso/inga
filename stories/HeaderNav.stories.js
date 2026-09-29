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
          <a href="#hero" class="header-nav__brand-btn" aria-label="Ir para o topo">
            <span class="header-nav__brand-dot"></span>
          </a>

          <button id="story-menu-toggle" class="header-nav__toggle" aria-label="Abrir menu">
            <span class="header-nav__toggle-line"></span>
            <span class="header-nav__toggle-line"></span>
            <span class="header-nav__toggle-line"></span>
          </button>

          <nav id="story-main-nav" class="header-nav__list" role="navigation" aria-label="Navegação Principal">
            <a href="#quem-somos" class="header-nav__link">QUEM SOMOS</a>
            <a href="#nossa-abordagem" class="header-nav__link">NOSSA ABORDAGEM</a>
            <a href="#solucoes" class="header-nav__link">SOLUÇÕES</a>
            <button type="button" class="header-nav__link header-nav__link--btn">CONTATO</button>
          </nav>
        </div>
      </header>
    `;

    return wrapper;
  },
};
