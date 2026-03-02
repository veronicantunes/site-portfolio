---
name: Portfolio Verônica Antunes
description: Convenções, padrões e regras do projeto de portfólio pessoal. Leia este arquivo ANTES de qualquer alteração no código.
---

# Portfólio — Verônica Antunes | AI Product Owner

Este documento define as convenções obrigatórias do projeto. Toda alteração de código DEVE seguir estes padrões. Não introduza bibliotecas, padrões ou abordagens que contradigam o que está descrito aqui.

---

## Tech Stack (NÃO substituir)

| Camada        | Tecnologia                          | Versão   |
| ------------- | ----------------------------------- | -------- |
| Runtime       | Node.js (ESM)                       | 22+      |
| Framework     | React                               | 19       |
| Build         | Vite                                | 7        |
| Linguagem     | TypeScript                          | 5.6      |
| Roteamento    | wouter                              | 3.x      |
| Estilização   | Tailwind CSS                        | 4        |
| Componentes   | shadcn/ui (estilo new-york, Radix)  | —        |
| Animações     | Framer Motion                       | 12       |
| Ícones        | lucide-react                        | —        |
| Formulários   | React Hook Form + Zod               | —        |
| Pkg manager   | pnpm                                | 10       |

**Regra:** Não adicione novas dependências sem necessidade explícita. Nunca substitua wouter por react-router, next/navigation ou similares. Nunca substitua Tailwind por styled-components, CSS modules ou similares. Nunca substitua Framer Motion por outra lib de animação.

---

## Design System — Swiss Editorial Revival

O conceito visual é **Swiss Editorial Revival**: tipografia editorial forte, grid limpo, whitespace generoso e uso pontual de cor.

### Tipografia

| Uso              | Fonte            | Peso | CSS                                      |
| ---------------- | ---------------- | ---- | ---------------------------------------- |
| Títulos (h1–h6)  | Playfair Display | 900  | `font-family: 'Playfair Display', serif` |
| Corpo / UI       | Lato             | 300  | `font-family: 'Lato', sans-serif`        |

As fontes são carregadas via Google Fonts no `client/index.html`. Headings herdam a font-family via regra global no `index.css`. Não altere essas fontes.

### Paleta de Cores

| Token              | Valor              | Uso                                        |
| ------------------ | ------------------ | ------------------------------------------ |
| Accent (laranja)   | `#FF5722`          | Números de impacto, CTAs, geometria decorativa |
| Texto principal    | `#333333`          | Corpo de texto                             |
| Background claro   | `#FFFFFF`          | Seções pares                               |
| Background alt     | `#FAFAFA`          | Seções ímpares (alternância)               |
| Sucesso            | `#2D8A56`          | Tags de outcome/resultado                  |
| Atenção            | `#C4850C`          | Tags de tradeoff/atenção                   |

**Regra:** O laranja `#FF5722` é usado com parcimônia — apenas em métricas numéricas, botões CTA, linhas decorativas e `::selection`. Nunca use como background de seções inteiras ou em textos longos.

### CSS Variables (oklch)

As variáveis de tema estão definidas em `client/src/index.css` usando formato oklch. Exemplo:
- `--primary: oklch(0.55 0.2 30)` (equivale ao #FF5722)
- `--foreground: oklch(0.27 0.01 60)` (equivale ao #333333)
- `--radius: 0.25rem`

Não altere os valores oklch sem necessidade. Use as classes semânticas do Tailwind (`bg-primary`, `text-foreground`, etc.).

---

## Estrutura de Pastas

```
site-portfolio/
├── client/                   # Frontend (SPA)
│   ├── index.html            # HTML base (fontes, meta, analytics)
│   ├── public/               # Assets estáticos
│   └── src/
│       ├── App.tsx            # Roteamento e providers
│       ├── main.tsx           # Entry point (createRoot)
│       ├── index.css          # Tailwind + design tokens
│       ├── const.ts           # Constantes do client
│       ├── components/        # Componentes reutilizáveis
│       │   ├── ui/            # shadcn/ui (NÃO editar manualmente)
│       │   ├── Layout.tsx     # Header + Footer + scroll-to-top
│       │   ├── SectionReveal.tsx  # Wrapper de animação scroll
│       │   └── ErrorBoundary.tsx
│       ├── contexts/          # React contexts
│       │   └── ThemeContext.tsx
│       ├── hooks/             # Hooks customizados
│       │   ├── useScrollReveal.ts
│       │   ├── usePersistFn.ts
│       │   ├── useComposition.ts
│       │   └── useMobile.tsx
│       ├── lib/
│       │   └── utils.ts       # cn() = clsx + tailwind-merge
│       └── pages/             # Páginas (1 componente = 1 rota)
│           ├── Home.tsx
│           ├── CaseIA.tsx
│           ├── CasePlaceholder.tsx
│           └── NotFound.tsx
├── server/                    # Express (serve build em prod)
│   └── index.ts
├── shared/                    # Constantes compartilhadas
│   └── const.ts
└── dist/                      # Build output (não editar)
```

### Regras de organização

- Componentes de UI genéricos → `components/`
- Componentes shadcn/ui → `components/ui/` (gerados via CLI, não editar manualmente)
- Páginas → `pages/` (uma por rota)
- Hooks customizados → `hooks/`
- Contexts → `contexts/`
- Utilitários → `lib/`
- Arquivos de página NÃO devem exceder ~300 linhas. Se ultrapassar, extraia subcomponentes.

---

## Padrões de Código

### Imports — Path Aliases

Sempre use os aliases configurados no Vite e tsconfig:

- `@/` → `client/src/` (ex: `import Layout from "@/components/Layout"`)
- `@shared/` → `shared/` (ex: `import { COOKIE_NAME } from "@shared/const"`)

Nunca use caminhos relativos como `../../components/`.

### Componentes

- Sempre **funcionais** (nunca class components, exceto ErrorBoundary)
- Props tipadas com `interface` TypeScript
- Páginas usam **export default**
- Hooks, contexts e utils usam **named exports**
- Toda página é envolvida pelo componente `<Layout>` 
- Dados estáticos ficam como constantes no topo do arquivo da página (não em arquivos separados de dados)

### Animações

Padrão de animação ao scroll:

```tsx
import SectionReveal, { StaggerItem } from "@/components/SectionReveal";

<SectionReveal>
  <h2>Título</h2>
  {items.map((item, i) => (
    <StaggerItem key={i} index={i}>
      {/* conteúdo */}
    </StaggerItem>
  ))}
</SectionReveal>
```

Parâmetros de animação padrão:
- `opacity: 0 → 1`
- `y: 40 → 0` (SectionReveal) ou `y: 30 → 0` (StaggerItem)
- Easing: `[0.25, 0.1, 0.25, 1]`
- StaggerItem delay: `index * 0.1`

Para animações pontuais (hero, elementos específicos), use `motion` do Framer Motion diretamente.

### Estilização

- Tailwind via `className` (nunca CSS modules ou styled-components)
- `cn()` de `@/lib/utils` para classes condicionais
- Cores via classes semânticas do Tailwind (`text-primary`, `bg-muted`, etc.)
- Para cores que não são tokens (ex: `#FF5722` pontual), use `style={{ color: '#FF5722' }}`
- Seções alternam entre `bg-white` e `bg-[#FAFAFA]`

### Roteamento

- wouter (NÃO react-router)
- `<Router base={basePath}>` no App.tsx para suportar deploy em subpath
- `<Link>` e `useLocation` de wouter
- Novas rotas são adicionadas no `<Switch>` do `App.tsx`

### Formatação (Prettier)

- Aspas duplas
- Ponto e vírgula
- 80 colunas
- 2 espaços de indentação
- Trailing comma: es5
- Arrow parens: avoid
- End of line: LF

---

## Deploy — GitHub Pages

O deploy é feito via GitHub Actions (`.github/workflows/deploy-gh-pages.yml`):

1. Push em `main` → trigger
2. `pnpm install --frozen-lockfile`
3. `pnpm run build:gh-pages` (seta `GITHUB_PAGES=true` → `base: /site-portfolio/`)
4. Copia `index.html` → `404.html` (fallback SPA)
5. Cria `.nojekyll`
6. Deploy via `actions/deploy-pages`

**URL de produção:** https://veronicantunes.github.io/site-portfolio/

**Regras:**
- Não altere o workflow sem necessidade
- Não mude o `base` do Vite
- Sempre teste que links internos funcionam com o subpath `/site-portfolio/`
- Imagens do CDN Manus (`manuscdn.com`) têm URLs assinadas com expiração — ao substituir imagens, use URLs permanentes (ex: Cloudinary, GitHub raw)

---

## O que NÃO fazer

1. **Não troque bibliotecas core** (React, wouter, Tailwind, Framer Motion, shadcn/ui, pnpm)
2. **Não altere o design system** (fontes, paleta, espaçamentos) sem solicitação explícita
3. **Não edite componentes em `components/ui/`** manualmente — use o CLI do shadcn
4. **Não adicione dark mode** (o tema é fixo em `light`)
5. **Não crie arquivos de dados separados** — dados estáticos ficam como constantes na própria página
6. **Não use CSS modules, styled-components ou CSS-in-JS**
7. **Não use `import React from 'react'`** (React 19 não precisa)
8. **Não crie class components** (exceto ErrorBoundary)
9. **Não altere o `.env`** sem confirmação
10. **Não faça commit de arquivos em `.manus-logs/`**
11. **Não remova o `vite-plugin-manus-runtime`** do build de dev
12. **Não introduza padrões de server-side rendering** (o projeto é SPA estática)
13. **Não coloque comentários óbvios no código** — apenas documente lógica não-trivial

---

## Checklist para novas páginas

1. Criar arquivo em `client/src/pages/NomeDaPagina.tsx`
2. Envolver com `<Layout>`
3. Usar `SectionReveal` / `StaggerItem` para animações
4. Adicionar rota no `<Switch>` de `App.tsx`
5. Manter padrão de alternância de background entre seções
6. Usar Playfair Display para títulos, Lato para corpo
7. Accent `#FF5722` apenas em métricas, CTAs e detalhes decorativos
8. Export default

## Checklist para novos componentes

1. Criar em `client/src/components/NomeDoComponente.tsx`
2. Tipar props com `interface`
3. Usar `cn()` para classes condicionais
4. Usar Tailwind para estilização
5. Se for um componente de UI genérico (input, modal, etc.), verificar se já existe em `components/ui/`

---

## Idioma

- Todo o conteúdo visível ao usuário está em **português brasileiro (pt-BR)**
- Código (variáveis, funções, componentes) em **inglês**
- Comentários em código (quando necessários) em **inglês**
