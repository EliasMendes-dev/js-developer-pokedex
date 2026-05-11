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
- **Modal de Detalhes**: Clique em um card para ver informações completas do Pokémon *(NOVO)*
- **Informações Expandidas**: Exibe Species, Height, Weight, Abilities, Gender Rate e Egg Information *(NOVO)*

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
    │   ├── pokedex.css
    │   └── moreinfo.css        (NOVO)
    └── js/
        ├── main.js
        ├── poke-api.js
        └── pokemon-model.js
```

## 🔄 Mudanças Implementadas

### 1. **Modal de Detalhes do Pokémon** (NOVO)
   - Adicionado arquivo `moreinfo.css` com estilos para o modal
   - Criado HTML estruturado semanticamente no `index.html`
   - Implementado sistema de abertura ao clicar em cards

### 2. **Informações Expandidas** (NOVO)
   - **Seção About**: Exibe Species, Height, Weight e Abilities
   - **Seção Breeding**: Mostra Gender Rate (com conversão para porcentagem), Egg Groups e Egg Cycles
   - Busca dados em dois endpoints da PokéAPI:
     - `/pokemon/{id}` - dados básicos e imagem
     - `/pokemon-species/{id}` - informações de reprodução e gênero

### 3. **Melhorias no CSS**
   - **Classes Semânticas**: Substituição de nomes genéricos por BEM methodology
     - `.moreinfo__content`, `.pokemon-details__header`, `.pokemon-details__panel`, etc.
   - **Correção de Layout**: Alterado `width: 100vw` para `width: 100%` em `.content` para evitar barra horizontal ao carregar mais itens
   - **Organização**: CSS alinhado com a estrutura HTML para melhor manutenção

### 4. **Melhorias no JavaScript**
   - Array `pokemonsData` para armazenar dados dos Pokémons carregados
   - Função `convertPokemonToMoreInfo()` para renderizar modal com dados dinâmicos
   - Event listener aprimorado que identifica o Pokémon clicado e popula o modal
   - Busca de segundo endpoint para dados completos de reprodução

### 5. **Sistema de Gênero** (PREPARADO)
   - Mapeamento de `gender_rate` para porcentagens
   - Valores da API convertidos em formato legível (ex: `gender_rate: 4` → "🚹50% 🚺50%")

## 📖 Como Funciona

1. **pokemon-model.js**: Define a classe Pokemon com suas propriedades (incluindo dados expandidos como species, height, weight, abilities, genderprobability, egggroups, eggcycle)
2. **poke-api.js**: 
   - Realiza requisições à PokéAPI em dois endpoints
   - `/pokemon/{id}` - obtém dados básicos, tipos, habilidades e foto
   - `/pokemon-species/{id}` - obtém informações de reprodução (gender_rate, egg_groups, hatch_counter)
3. **main.js**: 
   - Controla a renderização e paginação
   - Armazena Pokémons em array para referência posterior
   - Gerencia abertura/fechamento do modal
   - Renderiza informações dinâmicas no modal ao clicar em um card
4. **index.html**: Estrutura HTML com lista principal e modal de detalhes
5. **Estilos CSS**: 
   - `global.css` - estilos gerais
   - `pokedex.css` - estilos da listagem
   - `moreinfo.css` - estilos do modal com classes semânticas

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. A página carregará automaticamente os 10 primeiros Pokémons
3. **Clique em qualquer card de Pokémon** para abrir o modal com informações detalhadas *(NOVO)*
4. No modal, você verá:
   - Imagem do Pokémon
   - Nome, número e tipos
   - Informações da seção "About" (Species, Height, Weight, Abilities)
   - Informações da seção "Breeding" (Gender Rate, Egg Groups, Egg Cycles)
   - Clique no "X" para fechar o modal
5. Clique no botão "Load More" para carregar mais Pokémons
6. O botão desaparecerá quando todos os 151 Pokémons forem carregados

## 📚 Aprendizados

Este projeto permitiu praticar:
- Consumo de APIs REST com Fetch API
- Manipulação do DOM
- Promises e async/await
- CSS Grid para layouts responsivos
- Programação Orientada a Objetos
- Eventos de clique em JavaScript
- **Requisições a múltiplos endpoints** (NOVO)
- **BEM Methodology para nomenclatura de classes CSS** (NOVO)
- **Armazenamento de dados para uso posterior** (NOVO)
- **Renderização dinâmica de componentes** (NOVO)
- **Tratamento de modais interativos** (NOVO)

## 👨‍💻 Autor

Desenvolvido durante o bootcamp DIO