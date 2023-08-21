
# Rastreie seu pedido

O objetivo deste projeto é criar uma aplicação web que permite aos usuários rastrear encomendas, exibir os detalhes das encomendas e lidar com diferentes cenários, como encomendas não encontradas.

## Funcionalidades

- Consulta de encomendas através de um número de pedido.
- Exibição dos detalhes da encomenda, incluindo número de ordem, nome do cliente, data do pedido, valor do pedido e status de entrega.
- Tratamento de encomendas não encontradas.
- Layout responsivo e amigável.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces. Usada para criar componentes reutilizáveis e facilitar a construção da interface do aplicativo.
- **Webpack**: Ferramenta para empacotamento e automação. Utilizada para compilar, empacotar e otimizar arquivos JavaScript, CSS e outros recursos.
- **Babel**: Transpilador JavaScript. Converte código JavaScript moderno (ES6+) em uma versão compatível com navegadores mais antigos.
- **Sass**: Pré-processador CSS para estilização. Facilita a escrita e organização de estilos com recursos como variáveis e aninhamento.
- **TerserPlugin**: Plugin para o Webpack que minifica o JavaScript, removendo espaços em branco e comentários.
- **MiniCssExtractPlugin**: Plugin para extrair CSS em um arquivo separado durante o processo de build.
- **HtmlWebpackPlugin**: Plugin para o Webpack que gera o arquivo HTML final com as dependências injetadas.
- **HtmlMinimizerPlugin**: Plugin para otimização do HTML gerado.

## Desenvolvimento

Para executar o projeto em ambiente de desenvolvimento, siga os passos abaixo:

1. Instale as dependências usando `npm install`.
2. Execute o servidor de desenvolvimento usando `npm run dev`.
3. Acesse a aplicação em `http://localhost:3000`.

Durante o desenvolvimento, você pode editar os arquivos na pasta `src` e o Webpack realizará a compilação e recarregamento automático da página.

## Produção

Para criar uma versão otimizada do projeto para produção, siga os passos abaixo:

1. Execute o comando de build usando `npm run build`.
2. Os arquivos otimizados serão gerados na pasta `dist`.

A pasta `dist` contém os arquivos otimizados prontos para serem implantados em um ambiente de produção. Esses arquivos incluem HTML, CSS e JavaScript minificados.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

