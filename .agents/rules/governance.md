# Governança de Design System & Código

Consulte o arquivo oficial de regras em [.antigravity/rules.md](file:///d:/_JOBS/INGA/WEB/.antigravity/rules.md).

### Regras Principais:
1. **Sem Valores Hardcoded**: Cores, espaçamentos, tipografia e border-radius devem utilizar exclusivamente variáveis/tokens.
2. **Tokens Primitivos -> Semânticos**: Componentes devem consumir tokens semânticos que apontam para os primitivos.
3. **Equivalência Auto Layout (Figma) <-> Flexbox / Grid**: Proibidos hacks de layout; utilizar flex/grid com gap, alinhamentos e fill/hug fiéis ao Figma.
4. **Spec-Driven Development**: Ler e validar sempre as tarefas prioritárias a partir do diretório `specs/`.
