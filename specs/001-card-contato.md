# SPEC-001: CardContato - Refatoração Fiel ao Figma e Design System

## 1. Contexto e Objetivo
- **Contexto**: O modal de contato atual no código possui layout legado com elementos arbitrários (círculo outline, múltiplos textos empilhados, caixas com borda rígida e caracteres unicode improvisados). No Figma, o componente **CardContato** (Node `527:740`) possui um design minimalista, elegante, com fundo no tom Oceano profundo, texto direto com tipografia em `rem` e dois ícones com revelação interativa suave das informações de contato no hover.
- **Objetivo**: Refatorar o componente CardContato para aderir 100% ao design do Figma, adotar tokens semânticos/primitivos no CSS, tipografia padronizada em `rem` e implementar o efeito de revelação das informações de contato no hover dos ícones.
- **Link do Figma**: [CardContato no Figma (Node 527:740)](https://www.figma.com/design/XR5chCyhA4Cipe4JwDuF2I/Inga?node-id=527-740)

---

## 2. Tokens Envolvidos (Primitivos e Semânticos)

### 2.1. Tokens Primitivos de Cor
| Token | Valor Hex | Descrição |
| :--- | :--- | :--- |
| `--color-ocean-900` | `#091f1e` | Fundo principal do card (Oceano ultra escuro) |
| `--color-ocean-700` | `#1b5e5c` | Tom de apoio e traço do botão fechar |
| `--color-ocean-500` | `#2e9d9a` | Tom dos ícones e textos de contato |
| `--color-ocean-100` | `#d5ebea` | Tom claro do texto principal |

### 2.2. Tokens de Tipografia (em `rem`, base 16px)
| Token | Valor em `rem` | Equivalente px | Uso |
| :--- | :--- | :--- | :--- |
| `--font-size-body-xl` | `1.5rem` | 24px | Texto principal do card |
| `--line-height-body-xl`| `1.75rem` / `2rem` | 28px / 32px | Altura de linha do texto principal |
| `--font-size-contact` | `1.25rem` | 20px | E-mail e telefone no hover |
| `--font-weight-light` | `300` | Light | Peso das fontes do card |

### 2.3. Tokens Semânticos do Componente
| Token Semântico | Mapeado Para | Contexto de Uso |
| :--- | :--- | :--- |
| `--card-contact-bg` | `var(--color-ocean-900)` | Fundo do card de contato |
| `--card-contact-text` | `var(--color-ocean-100)` | Cor do texto principal |
| `--card-contact-action` | `var(--color-ocean-500)` | Cor padrão dos ícones e textos revelados |
| `--card-contact-action-hover`| `var(--color-ocean-100)` | Cor de destaque no hover dos ícones |
| `--card-contact-close` | `var(--color-ocean-700)` | Cor do botão de fechar |
| `--card-contact-close-hover` | `var(--color-ocean-100)` | Cor do botão fechar no hover |

---

## 3. Componentes e Arquivos Afetados
- **Arquivos**:
  - `style.css`:
    - Adição dos tokens primitivos e semânticos no `:root`.
    - Substituição das regras antigas `.modal-contato-card`, `.modal-contact-wrapper`, etc. pela nova estrutura baseada em Flexbox do Figma (374px x 412px aprox, padding harmônico, transições de hover).
  - `index.html`:
    - Atualização da estrutura do `#modal-contato` contendo o novo card, texto principal atualizado, botão fechar com SVG limpo e os dois links/ícones interativos (E-mail e WhatsApp) com seus respectivos dados.
  - `script.js`:
    - Manutenção dos gatilhos de abertura/fechamento do modal (sem quebras de funcionalidade).

---

## 4. Critérios de Aceite
- [x] O visual do card reflete fielmente o Figma (fundo `#091f1e`, formato compacto ~374x412px, cantos arredondados sutis ou retos conforme design).
- [x] O texto principal está em `1.5rem` (24px) com `Inter Light` na cor `#d5ebea`.
- [x] Os ícones utilizam vetores SVG limpos e fieis aos extraídos do Figma.
- [x] Ao passar o mouse sobre o ícone do e-mail, revela-se suavemente `eduardo@inga.eco.br` em `1.25rem` (20px) na cor `--color-ocean-500`.
- [x] Ao passar o mouse sobre o ícone do WhatsApp, revela-se suavemente `(48) 99616-2725` em `1.25rem` (20px) na cor `--color-ocean-500`.
- [x] O clique no e-mail executa `mailto:eduardo@inga.eco.br` e o clique no WhatsApp abre o link `https://wa.me/5548996162725` em nova aba.
- [x] O botão fechar (X) fecha o modal, assim como o clique fora e a tecla `Esc`.
- [x] Nenhuma cor ou medida do card está hardcoded no bloco de estilo; todos os valores vêm dos tokens declarados.

---

## 5. Checklist de Validação
- [x] Tokens adicionados a `:root` em `style.css`.
- [x] Marcação HTML em `index.html` atualizada.
- [x] Efeitos de transição e hover verificados no navegador.
- [x] Teste de acessibilidade (foco por teclado e leitor de tela nos links).
- [x] Responsividade testada em viewport mobile (<400px).
