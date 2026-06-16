<div align="center">
  <img src="./public/logo.svg" alt="Casa Vieira Logo" width="120" />

  # Casa Vieira | Materiais de Construção

  **Plataforma Institucional e Catálogo Digital**
  
  [![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
</div>

---

## 📖 Sobre o Projeto

Este repositório contém o código-fonte do site oficial da **Casa Vieira**, uma loja de materiais de construção estrategicamente localizada no bairro Tenoné, em Belém - PA. O projeto foi desenvolvido com foco total na captação de clientes (*Lead Generation*) através da integração fluída com o WhatsApp, atuando como um catálogo online sem checkout de e-commerce.

Com um design limpo, moderno e com alta performance, o site apresenta os produtos da loja, horários de funcionamento dinâmicos e rotas diretas para a visitação presencial através da API do Google Maps.

## ✨ Funcionalidades Principais

- 🚀 **Catálogo de Produtos Dinâmico:** Listagem com filtro por categorias, com integração "One-Click" para orçamento de produtos diretamente no WhatsApp.
- 🕒 **Status de Funcionamento Inteligente:** O site calcula em tempo real se a loja está aberta ou fechada e exibe o horário exato do próximo expediente de forma autônoma.
- 📱 **Mobile-First & Responsivo:** Design cuidadosamente otimizado para celulares, garantindo usabilidade máxima nas pontas dos dedos.
- 🗺️ **Integração Google Maps:** Geolocalização exata renderizada nativamente via Iframe.
- 🎨 **Animações Fluidas:** Interface viva com micro-interações e efeitos construídos utilizando o Framer Motion.

## 🛠️ Tecnologias Utilizadas

A stack foi escolhida visando produtividade no desenvolvimento, fácil manutenção e extrema performance de entrega:

- **[React 18](https://react.dev/)**
- **[Vite](https://vitejs.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS v3](https://tailwindcss.com/)**
- **[Framer Motion](https://www.framer.com/motion/)**
- **[Lucide Icons](https://lucide.dev/)**

## ⚙️ Como Executar Localmente

Siga os passos abaixo para rodar a aplicação no seu ambiente de desenvolvimento local:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/kauecorrea/casa-vieira.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd casa-vieira
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesso:** O site estará disponível localmente em `http://localhost:5173`.

## 📁 Estrutura de Diretórios

O projeto segue uma arquitetura escalável baseada em funções e componentes:

```text
casa-vieira/
├── .github/workflows/   # CI/CD pipelines
├── public/              # Assets estáticos globais (logo, favicon)
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── layout/      # Navbar, Footer, MobileMenu
│   │   ├── sections/    # Blocos maiores de página (Hero, About, Location)
│   │   └── ui/          # Elementos granulares (Buttons, Cards, Badges)
│   ├── constants/       # Dados estáticos (informações da loja, produtos)
│   ├── hooks/           # Custom React Hooks (scroll, timers de horário)
│   ├── styles/          # Tailwind base e CSS global
│   ├── types/           # Tipagens globais do TypeScript
│   └── utils/           # Funções utilitárias (geração de links do WhatsApp)
└── tailwind.config.ts   # Configurações de design tokens e paleta de cores
```

## 🚀 Deploy Automático (CI/CD)

A aplicação está configurada com **GitHub Actions** no arquivo `.github/workflows/deploy.yml`. 
O deploy ocorre automaticamente para o ambiente do **GitHub Pages** sempre que houver um push ou merge na branch `main`.

1. O script instala as dependências via `npm ci`.
2. Ocorre o build otimizado de produção via `npm run build`.
3. O diretório estático `/dist` resultante é publicado.

---

<div align="center">
  <sub>Desenvolvido com 💚 para Casa Vieira Materiais de Construção</sub>
</div>
