# Diretrizes de Governança Técnica & Design System

Este documento estabelece as regras obrigatórias de arquitetura, estilos e fluxo de desenvolvimento para garantir a paridade absoluta entre o Design System (Figma) e o código do projeto.

---

## 1. Proibição Estrita de Valores Hardcoded
- É **terminantemente proibido** o uso de valores literais no CSS para:
  - **Cores**: nada de hexadecimais (`#ffffff`, `#121212`), `rgb()`, `hsl()` ou nomes de cores no corpo das classes. Todas devem vir de variáveis (`var(--...)`).
  - **Espaçamentos**: nada de valores arbitrários em `px`, `rem` ou `em` para `margin`, `padding`, `gap`. Devem usar a escala de espaçamento oficial.
  - **Tipografia**: nada de `font-size`, `line-height`, `font-weight` ou `font-family` soltos no CSS. Devem utilizar os tokens tipográficos definidos.
  - **Border-radius**: proíbem-se raios arbitrários. Devem obedecer aos tokens de raio (`--radius-...`).

---

## 2. Arquitetura de Tokens (Primitivos & Semânticos)
- Todo valor de estilo deve respeitar a hierarquia de tokens:
  1. **Tokens Primitivos (Base):** Representam os valores brutos da paleta e da escala (ex.: `--color-teal-500`, `--spacing-4`, `--radius-md`).
  2. **Tokens Semânticos (Uso/Finalidade):** Mapeiam os primitivos para um contexto de uso específico (ex.: `--color-surface-primary: var(--color-teal-500)`, `--color-text-body: var(--color-gray-100)`).
- Componentes e classes CSS devem consumir prioritariamente **tokens semânticos**.

---

## 3. Estrutura de Layout Fiel ao Auto Layout (Figma)
- Qualquer estrutura de layout deve ser construída exclusivamente com **CSS Flexbox** ou **CSS Grid**, espelhando as propriedades de **Auto Layout** do Figma:
  - Direção de fluxo (`flex-direction: row` ou `column`).
  - Espaçamentos e gaps (`gap: var(--spacing-...)`).
  - Alinhamento (`align-items`, `justify-content`).
  - Redimensionamento e preenchimento (`flex: 1` para "Fill container", `width: fit-content` para "Hug contents").
- Não utilizar posicionamento absoluto (`position: absolute`) nem margens manuais para estruturar o fluxo de elementos, exceto para elementos explicitamente sobrepostos ou flutuantes previstos no design.

---

## 4. Fluxo Spec-Driven (Diretório `specs/`)
- Toda nova tarefa, alteração de componente ou refatoração de layout deve ser iniciada e orientada por uma especificação técnica localizada no diretório `specs/`.
- O agente e os desenvolvedores devem sempre verificar e ler o arquivo de spec correspondente (ex.: `specs/001-nome-da-task.md`) antes de realizar modificações no código.
- Nenhuma alteração de escopo visual ou estrutural deve ser realizada sem aderência aos critérios de aceite definidos na spec.
