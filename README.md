# Tarefas Next.js

Este projeto é uma aplicação de lista de tarefas construída com Next.js. Ele permite que os usuários criem, compartilhem e comentem em tarefas.

## Funcionalidades

- **Página Inicial**: Exibe uma visão geral das tarefas e comentários.
- **Painel de Controle**: Usuários autenticados podem gerenciar suas tarefas, tornando-as públicas ou privadas.
- **Detalhes da Tarefa**: Exibe detalhes de uma tarefa específica e permite que os usuários comentem nela.
- **Autenticação**: Usuários podem se registrar e fazer login para acessar funcionalidades adicionais.
- **API**: Endpoints para gerenciar tarefas e comentários.
- **Tarefas Privadas**: Usuários podem criar tarefas privadas que são visíveis apenas para eles ou para um grupo específico de usuários.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Firebase**: Banco de dados NoSQL para armazenamento de dados.

## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/tarefas-nextjs.git
    ```
2. Instale as dependências:
    ```bash
    cd tarefas-nextjs
    npm install
    ```
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
5. Acesse a aplicação em `http://localhost:3000`.

## Estrutura do Projeto

- **pages/**: Contém as páginas da aplicação.
- **components/**: Contém os componentes reutilizáveis.
- **api/**: Contém as rotas de API para gerenciar tarefas e comentários.
- **styles/**: Contém os arquivos de estilo.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


## Imagens do Projeto

1. **Tela Inicial**

![Alt text](/public/assets/home.jpg)


2. **Tela Após Login**

![Alt text](/public/assets/start.jpg)


3. **Tela de Tarefas** 

![Alt text](/public/assets/task.jpg)


4. **Tela de Tarefas Privadas**

![Alt text](/public/assets/taskPriv.jpg)