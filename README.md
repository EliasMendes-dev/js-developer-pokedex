# Trilha JS Developer - Pokedex

# Pokedex

Uma aplicação web interativa desenvolvida durante o bootcamp da DIO que exibe uma lista de Pokémons da primeira geração.

## 📋 Descrição

Este projeto é uma Pokedex que consome dados da [PokéAPI](https://pokeapi.co/) para exibir informações sobre Pokémons. A aplicação carrega os Pokémons de forma paginada, mostrando 10 Pokémons por vez com a opção de carregar mais.

## ✨ Funcionalidades

- **Listagem Paginada**: Carrega 10 Pokémons por vez, com limite de 151 (primeira geração)
- **Cores Dinâmicas**: Cada Pokémon é colorido de acordo com seu tipo principal
- **Tipos de Pokémon**: Exibe todos os tipos de cada Pokémon
- **Imagens**: Mostra a imagem oficial de cada Pokémon
- **Design Responsivo**: Adapta-se para diferentes tamanhos de tela
- **Botão "Load More"**: Carrega mais Pokémons ou desaparece quando todos forem carregados

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e layout responsivo
- **JavaScript**: Lógica da aplicação e consumo de API
- **PokéAPI**: Fonte de dados dos Pokémons
- **Normalize.css**: Normalização de estilos padrão dos navegadores
- **Google Fonts**: Font Roboto

## 📂 Estrutura do Projeto

```
Pokedex/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── global.css
    │   └── pokedex.css
    └── js/
        ├── main.js
        ├── poke-api.js
        └── pokemon-model.js
```

## 📖 Como Funciona

1. **pokemon-model.js**: Define a classe Pokemon com suas propriedades
2. **poke-api.js**: Realiza requisições à PokéAPI e converte os dados
3. **main.js**: Controla a renderização e paginação
4. **index.html**: Estrutura HTML da página
5. **Estilos CSS**: Define cores por tipo e layout responsivo

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. A página carregará automaticamente os 10 primeiros Pokémons
3. Clique no botão "Load More" para carregar mais Pokémons
4. O botão desaparecerá quando todos os 151 Pokémons forem carregados

## 📚 Aprendizados

Este projeto permitiu praticar:
- Consumo de APIs REST com Fetch API
- Manipulação do DOM
- Promises e async/await
- CSS Grid para layouts responsivos
- Programação Orientada a Objetos
- Eventos de clique em JavaScript

## 👨‍💻 Autor

Desenvolvido durante o bootcamp DIO