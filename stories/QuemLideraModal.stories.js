export default {
  title: 'Components/QuemLideraModal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: 'rgba(10, 10, 10, 0.85)' },
        { name: 'white', value: '#f5f5f5' },
      ],
    },
  },
};

export const Default = {
  render: () => {
    const card = document.createElement('div');
    card.className = 'modal-card modal-lidera-card';
    card.setAttribute('data-name', 'Quem Lidera');
    card.style.transform = 'scale(1)';

    card.innerHTML = `
      <button class="modal-close modal-lidera-close-btn" aria-label="Fechar modal">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M13 1L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
      </button>
      <div class="modal-lidera__layout">
          <!-- Vertical Teal Block on Left -->
          <div class="modal-lidera__teal-column"></div>
          <!-- Large Overlapping Circle Photo -->
          <div class="modal-lidera__circle-wrap">
              <img src="img/eduardo_palestra.png" alt="Eduardo Hermes Silva palestrando" class="modal-lidera__circle-img">
          </div>
          <!-- Right Side Content -->
          <div class="modal-lidera__content-column">
              <div class="modal-lidera__text-box">
                  <p>A INGA é liderada por Eduardo Hermes Silva, biólogo, mestre em Geografia e consultor com mais de vinte cinco anos de experiência em planejamento estratégico para conservação da biodiversidade, governança de áreas protegidas e facilitação de processos participativos.</p>
                  <p>Ele responde pela coordenação técnica, pelo relacionamento com os clientes e pela qualidade das entregas. Conforme a complexidade, a INGA reúne e coordena uma rede de consultores e parceiros, formando equipes multidisciplinares capazes de integrar diferentes conhecimentos e experiências.</p>
                  <p>Esse modelo combina atendimento próximo, flexibilidade e excelência técnica, permitindo que cada projeto conte com as competências mais adequadas aos seus desafios, sem abrir mão da consistência metodológica e da condução direta de um consultor sênior.</p>
              </div>
          </div>
      </div>
    `;

    return card;
  },
};
