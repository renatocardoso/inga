export default {
  title: 'Design System/Quem Somos/LeadTrigger',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    text: { control: 'text', description: 'Texto do botão gatilho' },
  },
};

export const Default = {
  args: {
    text: 'TRAJETÓRIA PROFISSIONAL',
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.maxWidth = '750px';
    container.style.padding = '2rem';
    container.style.background = '#ffffff';
    container.style.color = '#333333';
    container.style.borderRadius = '8px';
    container.style.fontFamily = "'Inter', sans-serif";

    container.innerHTML = `
      <div class="text-block main-paragraph inter-light" style="font-size: 1.1rem; line-height: 1.75;">
        <p style="margin-bottom: 1.5rem;">
          A INGA – Inovação e Gestão Ambiental nasceu da convicção de que os grandes desafios da conservação da natureza exigem mais do que conhecimento: exigem estratégia, participação e a capacidade de transformar diferentes perspectivas em decisões consistentes e ações efetivas.
        </p>
        <p style="margin-bottom: 1.5rem;">
          Criada em 2024, a INGA representa a consolidação de uma 
          <button type="button" class="about__trigger--lead" id="story-trigger-lead" aria-haspopup="dialog">
            ${args.text}
          </button> 
          construída ao longo de mais de duas décadas de atuação em projetos de conservação da natureza em diferentes regiões do Brasil.
        </p>
      </div>
      <div id="story-trigger-feedback" style="margin-top: 1rem; font-size: 0.9rem; color: var(--color-ocean-700); font-weight: 500; min-height: 1.5rem;"></div>
    `;

    const btn = container.querySelector('#story-trigger-lead');
    const feedback = container.querySelector('#story-trigger-feedback');
    btn.addEventListener('click', () => {
      feedback.textContent = 'Gatilho clicado! Abriria o modal QuemLideraModal.';
      setTimeout(() => { feedback.textContent = ''; }, 3000);
    });

    return container;
  },
};
