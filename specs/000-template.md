# SPEC-[NÚMERO]: [Título da Funcionalidade / Componente]

## 1. Contexto e Objetivo
- **Contexto**: Breve descrição do problema a ser resolvido ou da funcionalidade a ser implementada.
- **Objetivo**: O que se espera alcançar após a conclusão desta especificação.
- **Link do Figma (se aplicável)**: [Link para o frame/componente no Figma]

---

## 2. Tokens Envolvidos (Primitivos e Semânticos)

### 2.1. Tokens Primitivos
| Token | Valor Bruto | Descrição |
| :--- | :--- | :--- |
| `--color-brand-teal-500` | `#2c9f9a` | Cor principal da marca |
| `--spacing-4` | `1rem` (16px) | Espaçamento base |
| `--radius-sm` | `4px` | Raio de borda sutil |

### 2.2. Tokens Semânticos
| Token Semântico | Mapeado Para (Primitivo) | Contexto de Uso |
| :--- | :--- | :--- |
| `--color-action-primary` | `var(--color-brand-teal-500)` | Fundo de botões primários |
| `--card-padding` | `var(--spacing-4)` | Padding interno dos cards |
| `--card-radius` | `var(--radius-sm)` | Arredondamento do container do card |

---

## 3. Componentes e Arquivos Afetados
- **Arquivos**:
  - `style.css`: [Descrição das alterações/adições de regras]
  - `index.html`: [Marcação HTML e classes envolvidas]
  - `script.js` (se aplicável): [Comportamento ou manipulação de DOM]
- **Componentes**:
  - Nome do componente ou seção no design/código.

---

## 4. Critérios de Aceite
- [ ] O componente segue 100% o layout do Figma em Auto Layout (Flexbox/Grid).
- [ ] Nenhum valor de cor, espaçamento, tipografia ou border-radius está hardcoded no CSS do componente.
- [ ] O componente é responsivo e mantém a integridade visual em breakpoints desktop, tablet e mobile.
- [ ] Todas as interações (hover, focus, active) utilizam transições e tokens semânticos definidos.

---

## 5. Checklist de Validação
- [ ] Tokens primitivos e semânticos declarados em `:root` no `style.css`.
- [ ] Verificação de ausência de hexadecimais ou pixels arbitrários no bloco do componente.
- [ ] Teste visual de equivalência ao Figma (alinhamento, padding, gap).
- [ ] Validação semântica de tags HTML (`<header>`, `<nav>`, `<section>`, etc.).
- [ ] Teste em diferentes resoluções de tela.
