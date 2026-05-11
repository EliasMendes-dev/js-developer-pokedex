const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const moreInfoDiv = document.querySelector('.moreinfo')
const moreInfoContent = document.querySelector('.moreinfo-content')
const closeButton = document.getElementById('closeMoreInfo')

const maxRecords = 151
const limit = 10
let offset = 0;

// Função para converter os dados do Pokémon em um elemento HTML
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

// Função para carregar os itens dos Pokémon e adicioná-los à lista
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

// Função para carregar os itens dos Pokémon e adicioná-los à lista
function loadPokemonAdditionalItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        moreInfoContent.innerHTML = newHtml
    })
}

// Carregar os primeiros itens dos Pokémon ao iniciar a página
loadPokemonItens(offset, limit)

// Event listener para o botão "Load More"
loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

// Event listener para abrir o modal ao clicar em um Pokémon
pokemonList.addEventListener('click', (event) => {
    if (event.target.closest('.pokemon')) {
        moreInfoDiv.style.visibility = 'visible';
    }
});

// Event listener para fechar o modal
closeButton.addEventListener('click', () => {
    moreInfoDiv.style.visibility = 'hidden';
});