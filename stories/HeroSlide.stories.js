export default {
  title: 'Design System/Hero/HeroSlide',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    viewport: {
      control: 'radio',
      options: ['desktop', 'mobile'],
      description: 'Variante de dispositivo correspondente ao Component Set no Figma (node 2875:50)',
    },
  },
};

const renderHero = ({ viewport = 'desktop' }) => {
  const isMobile = viewport === 'mobile';
  const container = document.createElement('div');
  container.style.backgroundColor = 'var(--oceanoprofundo-900)';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.minHeight = '100vh';
  container.style.padding = isMobile ? '2rem 1rem' : '0';

  container.innerHTML = `
    <section class="hero ${isMobile ? 'hero--mobile' : 'hero--desktop'}" data-name="hero-slide" data-viewport="${viewport}">
      <div class="hero__bg-container" style="background-image: url('img/conceito1.jpg');"></div>
      
      <div class="hero__container">
        <!-- Headline -->
        <div class="hero__headline-box">
          <h1 class="hero__title">
            Estratégias<br>
            participativas para<br>
            a conservação da<br>
            natureza.
          </h1>
        </div>

        <!-- Brand Logotype & Tagline -->
        <div class="hero__brand-box">
          <img src="img/logoBranca.svg" alt="INGA Logo" class="hero__logo-img">
          <p class="hero__tagline">inovação e gestão ambiental</p>
        </div>
      </div>
    </section>
  `;

  return container;
};

export const Desktop = {
  args: {
    viewport: 'desktop',
  },
  render: (args) => renderHero(args),
};

export const Mobile = {
  args: {
    viewport: 'mobile',
  },
  render: (args) => renderHero(args),
};
