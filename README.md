# VTPDWE1-2026-Eder

Repositório de atividades da disciplina **Desenvolvimento Web 1 (DWE1)** do curso de Bacharelado em
Sistemas de Informação — IFSP Câmpus Votuporanga (Prof. Dr. Eder Pansani).

Autor: **Matheus Pavam Contin**

---

## 🔗 Site publicado

O projeto principal do repositório, o **Meu Site Pessoal**, está publicado via GitHub Pages:

**https://matheuspvncontin.github.io/Aulas-DevWEB-/**

---

## 📁 Estrutura do repositório

```
.
├── index.html              # Meu Site Pessoal — Sobre mim
├── cidade.html              # Meu Site Pessoal — Minha cidade
├── sonho.html                # Meu Site Pessoal — Um sonho
├── inspira.html              # Meu Site Pessoal — Quem me inspira
├── filmes.html                # Meu Site Pessoal — página temática (filmes)
├── geral.css                  # Folha de estilo compartilhada do site pessoal
├── index.css, cidade.css,     # Folhas de estilo específicas de cada página
│   sonho.css, inspira.css,
│   filmes.css
├── paginasValidadas.html      # Prints de validação (W3C) das 5 páginas do site
├── Imagens/                   # Imagens usadas no site pessoal
│
├── Material_Aula6_Bloco1/     # Exercícios "Praticando" de CSS (aula 6, bloco 1)
├── Aulas-CSS/
│   ├── Hello_CSS.html         # Primeiro contato com CSS
│   ├── Hello-CSS-tabela.html
│   ├── AulaCSS=II/            # Seções, containers, bordas, outline e hover
│   └── AulaCSS-III/
│       └── Material_Aula6_Bloco2/   # Praticando 3, 4 e 5: planos de fundo e opacidade
│
└── AtvPraticando_TABELAS/     # Atividade prática de tabelas HTML (listas, rowspan/colspan)
```

---

## 🖥️ Meu Site Pessoal

Projeto contínuo do curso, construído em duas etapas: primeiro a estrutura em HTML semântico, depois
a estilização com CSS.

O site é composto por 5 páginas interligadas por um menu de navegação comum:

- **Sobre mim** (`index.html`) — apresentação pessoal, hobbies e área de estudo
- **Minha cidade** (`cidade.html`) — Fernandópolis (SP), com mapa incorporado via Google Maps
- **Um sonho** (`sonho.html`) — objetivos pessoais de viagem e aprendizado
- **Quem me inspira** (`inspira.html`) — Margaret Hamilton, com citações reais e fontes
- **Filmes favoritos** (`filmes.html`) — página temática com navegação por âncoras internas

### Conceitos de HTML praticados
- Estrutura semântica: `header`, `nav`, `main`, `footer`, `section`, `article`, `figure`/`figcaption`
- Formatação de texto com significado: `strong`, `em`, `mark`, `abbr`, `blockquote`, `cite`, `sup`
- Links internos, externos e âncoras (`href="#id"`)
- Imagens com `alt` descritivo e mapa incorporado via `iframe`

### Conceitos de CSS praticados
- **CSS externo** em todas as páginas, sem nenhum estilo `inline` e sem uso de `!important`
- **6 folhas de estilo**: `geral.css` (compartilhada) + 5 específicas, uma por página
- **Identidade visual consistente**: paleta "espacial escura" (azul-marinho, ciano e laranja de
  destaque) e fonte Poppins (Google Fonts, com fallback), definidas em variáveis CSS (`:root`)
- **Especificidade**: uso combinado de seletores de elemento, classe e id na folha compartilhada
- Menu de navegação e botão "voltar ao topo" com efeito `:hover` funcional em todas as páginas
- Plano de fundo, bordas, transparência (`rgba`, `opacity`) e espaçamento (`margin`/`padding`)
  intencional em seções e galerias
- Layout com `flexbox`/`grid` para organizar cards (ex.: pilha de filmes em `filmes.html`)

---

## 📚 Exercícios e materiais de aula

Além do projeto principal, o repositório reúne os exercícios práticos ("Praticando") feitos ao longo
das aulas:

- **`AtvPraticando_TABELAS/`** — construção de tabelas HTML (listas, `rowspan`/`colspan`, tabelas reais)
- **`Aulas-CSS/`** — primeiros contatos com CSS, seções e containers, bordas/outline/hover
- **`Material_Aula6_Bloco1/`** e **`Aulas-CSS/AulaCSS-III/Material_Aula6_Bloco2/`** — planos de fundo
  com cores e imagens, tabela de cores, e opacidade (`opacity` vs `background-color` em `rgba`)

---

## 🛠️ Tecnologias

HTML5 e CSS3 — sem uso de frameworks ou JavaScript até o momento na disciplina.

---
Desenvolvido por **Matheus Pavam Contin** © 2026