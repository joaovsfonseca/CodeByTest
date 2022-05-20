# Teste CodeBy (Front-End)

## About project

Foi desenvolvido todo o solicitado com alguns extras. Clean code, boas práticas e  boa gestão do estado do app foram os principais focos quando se fala de codificação, já em relação a
Desing UI foi priorizado a praticidade de ultilizar a ferramenta.

## Ultilizei as seguintes tecnologias:

### Framework Quasar.dev (https://quasar.dev/)
```bash
  📚 Material UI
  🌐 Google Icons
```

### Framework Vue.js (https://vuejs.org/)
```bash
  📂 Vuex
  📂 Router
  📂 ESlint (linters)
 ```
 
🌐 Realizado todos os requisito mínimos:
```bash
 > Fornece uma forma de adicionar e remover itens do carrinho de compras
 > Notificação para as principais ações
 > Responsivo e clean
 > Listar os produtos provenientes da API.
 > Os produtos devem ter imagem, nome e preço.
 > Exibir ao fim da lista o valor total de todos os produtos.
 > Exibir o texto de frete grátis dependendo do valor do carrinho.
 > O texto de frete grátis deverá aparecer apenas se o valor for acima de **R$ 10,00.**
 > Seguir o layout.
 > Usar Flex-Box CSS.
 > Você poderá usar Vanilla JS, React, Vue ou outro framework. Sinta-se a vontade para usar a ferramenta que preferir.
 > Enviar o link do teste no github.
 > Usada a fonte Poppins
```
🌐 Como desenvolvimento extra foi desenvolvido: 
```bash
 > Fornece uma forma de adicionar e remover itens do carrinho de compras
 > Notificação para as principais ações
 > Responsivo e clean
 > Visual dos produtos
```
### Documentação do framework Quasar
Clique para visualizar em [Quasar.dev](https://quasar.dev/start/quasar-cli).
 
### Dependencias para instalar a framework
```bash
yarn
```

### Como iniciar o projeto
```bash
quasar dev
```

### Como realizar o build do projeto
Irá gerar um site em SPA (Single Page Aplication)

```bash
quasar build
```

### Estrutura de Arquivos
A estrutura de arquivos está da seguinte maneira:

```bash
desafio-frontend
├── public/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   ├── layouts/
│   │   ├── MainLayout/
│   ├── pages/
│   │   ├── ErrorNotFound.vue/
│   │   ├── IndexPage.vue/
│   ├── store/
│   │   ├── candy/
│   │   ├── shopping-cart/
├── index.template.html
└── App.vue
```