# SPEC-003: Alinhamento Design Engineering (Figma Parity, Motion & Mobile Native)

## 1. Contexto e Objetivo
- **Contexto**: O projeto INGA passou por estruturação no Figma para criar paridade bidirecional (Figma ↔ Antigravity ↔ Código). Paralelamente, foram incorporadas diretrizes avançadas de Design Engineering baseadas nas skills instaladas (`emil-design-eng`, `animate`, `apple-design`, `mobile-native`, `break-ui`).
- **Objetivo**:
  1. Estabelecer as fundações de Design Engineering no CSS global (eliminar sticky hover, eliminar tap flashes, adicionar feedback táctil `:active`, remover `transition: all`, suporte a `prefers-reduced-motion`).
  2. Implementar os primeiros componentes atômicos com paridade total ao Figma:
     - `HeroSlide` (variantes de `viewport: 'desktop' | 'mobile'`).
     - `NavBtn` e `BrandDot` (estados de `state: 'default' | 'hover' | 'active'`).
     - Mapear a migração do accordion para `AbordagemGrid` (`state: 'default' | 'proposito' | 'construcao' | 'ciencia' | 'implementacao'`).
- **Link do Figma**: Component Sets `hero-slide` (`2875:50`), `header-nav` (`2242:525`), `nav-btn` (`2055:234`), `brand-dot` (`2058:287`).

---

## 2. Tokens Envolvidos (Primitivos e Semânticos)

### 2.1. Tokens Primitivos & Aliases de Cor
| Token | Valor Hex | Descrição |
| :--- | :--- | :--- |
| `--color-ocean-900` / `--oceanoprofundo-900` | `#091f1e` / `#000808` | Fundo principal escuro e pilar Propósito |
| `--color-ocean-500` | `#2e9d9a` | Acento principal da marca |
| `--color-ocean-400` | `#57b0ae` | Estado hover/active de navegação |
| `--color-ocean-100` | `#d5ebea` | Texto de navegação padrão e contrastes claros |
| `--verdemata-700` | `#033627` | Fundo pilar Construção Participativa |
| `--verdemata-300` | `#699c8d` | Texto pilar Construção Participativa |
| `--color-amareloouro-500` | `#dcaa1d` | Fundo pilar Implementação e Resultados |
| `--color-amareloouro-900` | `#2b2105` | Texto pilar Implementação e Resultados |

### 2.2. Tokens de Motion e Feedback Táctil
| Token Semântico | Valor | Finalidade |
| :--- | :--- | :--- |
| `--ease-out-smooth` | `cubic-bezier(0.16, 1, 0.3, 1)` | Curva de entrada natural e rápida |
| `--duration-fast` | `150ms` | Microinterações de clique e hover |
| `--duration-normal` | `250ms` | Transições de estado |
| `--press-scale` | `scale(0.97)` | Feedback tátil em `:active` para botões |

---

## 3. Componentes e Arquivos Afetados

- **`style.css`**:
  - Inserir reset global para Mobile Native (`-webkit-tap-highlight-color: transparent`, `touch-action: manipulation`).
  - Encapsular todos os `:hover` dentro de `@media (hover: hover) and (pointer: fine)`.
  - Substituir declarações de `transition: all` por propriedades explícitas (`transform`, `opacity`, `background-color`, `color`).
  - Adicionar suporte a `@media (prefers-reduced-motion: reduce)`.
- **`stories/`**:
  - Criar `stories/HeroSlide.stories.js` suportando `viewport: 'desktop' | 'mobile'`.
  - Atualizar `stories/HeaderNav.stories.js` para consumir o átomo `NavBtn` com estados explícitos (`default`, `hover`, `active`).
  - Preparar migração de `stories/PillarsAccordion.stories.js` para `stories/AbordagemGrid.stories.js`.
- **`index.html`**:
  - Ajustar classes do Header e Hero para refletir a semântica atualizada.

---

## 4. Critérios de Aceite
- [ ] Nenhum estado `:hover` fica "preso" (sticky hover) após o toque em dispositivos móveis.
- [ ] Eliminação de flashes cinza ao tocar em botões no mobile (`-webkit-tap-highlight-color`).
- [ ] Botões e links possuem feedback táctil imediato no `:active` (`scale(0.97)` com transição ultra-rápida).
- [ ] Nenhuma transição no código utiliza `transition: all`.
- [ ] A área de toque de botões menores (ex: `button-close`) atinge o mínimo recomendado de 44x44px.
- [ ] `HeroSlide` renderiza corretamente no Storybook nas variantes `desktop` e `mobile`.
- [ ] Obediência estrita a `.antigravity/rules.md` (sem valores hardcoded, uso de tokens semânticos).

---

## 5. Checklist de Validação
- [ ] Auditoria de CSS validando ausência de `all` em `transition`.
- [ ] Teste em resolução mobile (390px) e desktop (1440px).
- [ ] Teste de toque e active states.
- [ ] Verificação de contraste e legibilidade com base nos tokens semânticos.
- [ ] Validação no Storybook (`npm run test:storybook` ou build).
