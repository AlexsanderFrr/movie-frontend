- Este é o projeto Movie Frontend, desenvolvido em React, que consome uma API para exibir informações sobre filmes. A aplicação permite visualizar e pesquisar filmes, além de cadastrar novos filmes.

  ![Status](https://img.shields.io/badge/Status-Completed-brightgreen.svg)

  ## Como usar

  Siga as instruções abaixo para utilizar o Movie Frontend:

  ### Pré-requisitos

  - ReactNative instalado (versão X.X.X)


  ### Passo a passo

  1. Faça o clone do repositório Movie Frontend:

     ```
     shellCopy code
     git clone https://github.com/seu-usuario/movie-frontend.git
     ```

  2. Acesse a pasta do projeto:

     ```
     shellCopy code
     cd movie-frontend
     ```

  3. Instale as dependências do projeto:

     ```
     shellCopy codenpm install
     # ou
     yarn install
     ```

  4. Abra o arquivo `src/config.js` e verifique se a URL da API está correta. Caso necessário, atualize-a para `http://localhost:8081` ou a URL da sua API.

  5. Inicie o servidor de desenvolvimento:

     ```
     shellCopy codenpm run start
     # ou
     yarn start
     ```

  6. Aguarde até que o servidor seja iniciado e a aplicação seja aberta em seu navegador padrão.

  7. Agora você pode navegar pela aplicação, pesquisar e visualizar informações sobre os filmes disponíveis.

  ## Funcionalidades

  - Visualizar lista de filmes
  - Pesquisar filmes por título
  - Exibir detalhes de um filme
  - Cadastrar novo filme
