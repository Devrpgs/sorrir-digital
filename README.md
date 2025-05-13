# Sorrir Digital

<!-- Badges (adicione os seus aqui) -->
[![Status da Build](https://img.shields.io/badge/build-passing-brightgreen)](<!-- URL do seu status de build -->)
[![Licença](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![versão](https://img.shields.io/badge/version-0.0.0-blue)](package.json)

<!-- Descrição Curta -->
**Sorrir Digital** é uma aplicação web moderna projetada para apresentar uma clínica odontológica, seus serviços, equipe e informações de contato. O objetivo é fornecer uma presença online profissional e informativa para atrair e engajar pacientes.

<!-- Demo (opcional) -->
[Link para a Demo Ao Vivo](https://sorrir-digital.vercel.app/)

## ✨ Funcionalidades

*   **Página Inicial Atrativa:** Seção Hero com destaque visual.
*   **Sobre Nós:** Apresentação da clínica, missão e valores.
*   **Serviços Detalhados:** Descrição dos tratamentos odontológicos oferecidos.
*   **Depoimentos:** Exibição de feedback de pacientes satisfeitos.
*   **Galeria:** Mostruário visual de casos de sucesso ou da estrutura da clínica.
*   **Blog (Opcional):** Seção para artigos e notícias sobre saúde bucal.
*   **Contato:** Formulário de contato e informações de localização.
*   **Botão WhatsApp:** Acesso rápido para contato via WhatsApp.
*   **Design Responsivo:** Adaptável a diferentes tamanhos de tela.

## 🚀 Tecnologias Utilizadas

*   **Framework Front-end:** [React](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/)
*   **Roteamento:** [React Router DOM](https://reactrouter.com/)
*   **Gerenciamento de Estado (possivelmente):** [TanStack Query](https://tanstack.com/query/latest)
*   **Formulários:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
*   **Linting:** [ESLint](https://eslint.org/)

## 🏗️ Estrutura do Projeto

```
sorrir-digital/
├── public/             # Arquivos estáticos (favicon, etc.)
├── src/                # Código fonte da aplicação
│   ├── components/     # Componentes React reutilizáveis (Header, Footer, Seções da página, UI elements)
│   ├── hooks/          # Hooks React customizados (se houver)
│   ├── lib/            # Funções utilitárias, config (shadcn utils, etc.)
│   ├── pages/          # Componentes de página (Index, NotFound)
│   ├── App.tsx         # Componente raiz com roteamento e providers
│   ├── main.tsx        # Ponto de entrada da aplicação
│   └── index.css       # Estilos globais e configuração do Tailwind
├── .eslintrc.js        # Configuração do ESLint (verifique a extensão real do arquivo)
├── .gitignore          # Arquivos ignorados pelo Git
├── index.html          # Template HTML principal
├── package.json        # Dependências e scripts
├── postcss.config.js   # Configuração do PostCSS
├── README.md           # Este arquivo
├── tailwind.config.ts  # Configuração do Tailwind CSS
├── tsconfig.json       # Configuração base do TypeScript
├── tsconfig.node.json  # Configuração TS para ambiente Node (Vite, etc.)
└── vite.config.ts      # Configuração do Vite
```

## ⚙️ Como Começar

Siga estes passos para configurar e executar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_GIT>
    cd sorrir-digital
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    # ou
    bun install 
    ```

3.  **Configure as variáveis de ambiente:**
    *   Crie um arquivo `.env` na raiz do projeto.
    *   Copie o conteúdo de `.env.example` (se existir) para `.env`.
    *   Preencha as variáveis necessárias. _(**TODO:** Crie um `.env.example` se aplicável)_

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    # ou
    bun dev
    ```

5.  Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal) no seu navegador.

## 📸 Screenshots


| Screenshot 1      | Screenshot 2      |
| :---------------: | :---------------: |
| ![Parte 1](/public/screen01.png) | ![Parte 2](/public/screen02.png) |

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com o projeto, siga estas etapas:

1.  Faça um Fork do projeto.
2.  Crie uma Branch para sua Feature (`git checkout -b feature/MinhaFeature`).
3.  Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`).
4.  Push para a Branch (`git push origin feature/MinhaFeature`).
5.  Abra um Pull Request.


## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


## 📧 Contato

[Robson Porto](mailto:contato@devporto.dev)

Projeto Link: [https://github.com/devrpgs/sorrir-digital](https://github.com/devrpgs/sorrir-digital)

