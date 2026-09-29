# SPEC-002: Componentes do Redesenho V2 (Quem Somos, PillarsAccordion, Soluções)

## 1. Contexto e Objetivo
- **Contexto**: O projeto INGA passou por uma revisão de design no Figma (Node `0:1` / Frame `1:2`), introduzindo dinâmicas de interação mais sofisticadas, orgânicas e fluidas para as seções "Quem Somos", "Nossa Abordagem" e "Soluções".
- **Objetivo**: Implementar com fidelidade ao Design System e aos tokens CSS:
  1. O gatilho inline `.about__trigger--lead` no parágrafo de "Quem Somos" para abrir o modal do perfil executivo (`QuemLideraModal`).
  2. O componente `PillarsAccordion` na seção "Nossa Abordagem", com grade 2x2, cantos assimétricos dinâmicos, sobreposição expandida e transições fluidas com delay de conteúdo.
  3. O componente `SolucoesShowcase` na seção "Soluções", com 3 botões circulares interativos que aglutinam e revelam o conteúdo temático detalhado com máscara orgânica e lista de atuação.
- **Storybook & Chromatic**: Criar histórias dedicadas para cada componente no Storybook e publicar no Chromatic.

---

## 2. Tokens do Design System Envolvidos

### 2.1. Tokens Primitivos de Cor
| Token | Valor Hex | Descrição |
| :--- | :--- | :--- |
| `--color-petroleo-900` | `#000808` | Fundo do pilar Estratégia |
| `--color-petroleo-200` | `#99aaab` | Texto e ícone do pilar Estratégia |
| `--color-verde-800` | `#012319` | Tom escuro auxiliar de verde |
| `--color-verde-700` | `#033627` | Fundo do pilar Construção e Solução Fortalecer |
| `--color-verde-300` | `#699c8d` | Texto e ícone do pilar Construção e Fortalecer |
| `--color-oceano-600` | `#247d7b` | Fundo do pilar Ciência e Solução Engajar |
| `--color-oceano-900` | `#091f1e` | Texto e ícone do pilar Ciência |
| `--color-amarelo-500` | `#dcaa1d` | Fundo do pilar Resultados e Solução Planejar |
| `--color-amarelo-900` | `#2b2105` | Texto e ícone do pilar Resultados |
| `--color-solucoes-bg` | `#cbd8ce` | Fundo neutro suave dos painéis de soluções |

### 2.2. Tokens de Tipografia e Raios
| Token | Valor em `rem` / `px` | Uso |
| :--- | :--- | :--- |
| `--font-size-pillar-title` | `2rem` (32px) | Título dos pilares (Light 300) |
| `--line-height-pillar-title`| `2.625rem` (42px) | Altura de linha do título dos pilares |
| `--font-size-pillar-desc` | `1.25rem` (20px) | Descrição dos pilares (Light 300) |
| `--line-height-pillar-desc`| `1.75rem` (28px) | Altura de linha da descrição dos pilares |
| `--font-size-solucao-circle`| `1.75rem` (28px) | Texto dos 3 círculos de soluções |
| `--radius-full` | `999px` | Raio orgânico curvo |
| `--radius-expanded-corner` | `127px` | Raio do canto arredondado no estado expandido |

---

## 3. Especificação dos Componentes

### 3.1. Quem Somos: Inline Trigger (`.about__trigger--lead`)
- **Elemento HTML**: `<button type="button" class="about__trigger--lead" id="trigger-trajetoria" aria-haspopup="dialog" aria-controls="modal-lidera">TRAJETÓRIA PROFISSIONAL</button>`
- **Regras de CSS**:
  - `white-space: nowrap;` para manter o termo em bloco coeso.
  - Tipografia: Herda família e tamanho do parágrafo, peso `--font-weight-semibold`.
  - Cor: Destaque da marca com transição sutil no hover (`color`, `text-decoration` / `border-bottom`).
  - Acessibilidade: `aria-haspopup="dialog"`, gerenciamento de foco na abertura e retorno ao gatilho após fechamento.

### 3.2. Nossa Abordagem: `PillarsAccordion`
- **Estrutura BEM**:
  - `.pillars`: Container de seção.
  - `.pillars__grid`: Container relativo com altura fixa/mínima (ex: 512px).
  - `.pillars__item`: Card interativo (`button` semântico ou container clicável acessível).
    - Modificadores de tema: `.pillars__item--petroleo`, `.pillars__item--verde`, `.pillars__item--oceano`, `.pillars__item--ambar`.
    - Modificador de estado: `.pillars__item--is-expanded`.
  - `.pillars__header`: Contém o `.pillars__title`.
  - `.pillars__body`: Contém o `.pillars__icon` e `.pillars__desc`.
  - `.pillars__close-btn`: Botão com SVG `IconeClose` e `aria-label="Fechar detalhes do pilar"`.
- **Cantos Assimétricos Iniciais (Colapsado)**:
  - Petróleo (sup. esquerdo): `border-radius: 0 var(--radius-full) var(--radius-full) 0;` (com sobreposição sutil à direita).
  - Verde (sup. direito): cantos retos (`0`).
  - Oceano (inf. esquerdo): cantos retos (`0`).
  - Âmbar (inf. direito): `border-radius: var(--radius-full) 0 0 var(--radius-full);` (com sobreposição sutil à esquerda).
- **Estado Expandido**:
  - `position: absolute; inset: 0; width: 100%; height: 100%; z-index: 10;`
  - Transição de raio: apenas 1 canto mantém raio arredondado (`127px`), 3 cantos retos (`0`).
  - Transições CSS: `transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);`
  - Entrada de conteúdo: `transition: opacity 250ms ease 150ms, visibility 250ms ease 150ms;`
- **Acessibilidade**:
  - `tabindex="0"`, ativação via `Enter` e `Space`.
  - `aria-expanded="false|true"`.
  - Fechamento via botão ou tecla `Escape` com retorno de foco.

### 3.3. Soluções: `SolucoesShowcase`
- **Estrutura BEM**:
  - `.solutions`: Container da seção.
  - `.solutions__intro`: Título e texto introdutório.
  - `.solutions__selector`: Container dos 3 círculos no estado de repouso:
    - `.solutions__circle-btn`: Botões circulares (Planejar, Fortalecer, Engajar).
  - `.solutions__stage`: Container do palco ativo.
    - Modificadores de estado: `.solutions__stage--planejar`, `.solutions__stage--fortalecer`, `.solutions__stage--engajar`.
  - Painéis detalhados com layout orgânico do Figma:
    - Círculo ativo em destaque.
    - Máscara circular com foto principal.
    - Descrição de impacto.
    - Painel inferior colorido com foto de apoio e lista "ATUAMOS EM:".
    - Botão de retorno/fechar para restaurar os 3 botões circulares.
- **Animação**:
  - Ao selecionar um círculo, os outros dois realizam fade-out e scale-down.
  - O painel correspondente expande-se suavemente em torno do círculo.

---

## 4. Critérios de Aceite
- [x] O gatilho "TRAJETÓRIA PROFISSIONAL" possui `white-space: nowrap`, estilo de destaque e abre o modal acessivelmente.
- [x] O componente `PillarsAccordion` transiciona de 2x2 para card expandido com cantos assimétricos fiéis ao Figma.
- [x] As animações de expansão e delay de fade-in no `PillarsAccordion` respeitam as curvas cúbicas especificadas.
- [x] Os 3 botões de Soluções exibem o comportamento animado de aglutinação e revelação de conteúdo.
- [x] Storybook documenta e permite interagir com todas as variações.
- [x] Build do Storybook passa no Chromatic.
- [x] Código comitado e publicado na branch `feat/redesign-figma-v2`.
