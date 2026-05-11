const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const moreInfoDiv = document.querySelector('.moreinfo')
const pokemonDetailsContainer = document.getElementById('pokemonDetails-all')
const closeButton = document.getElementById('closeMoreInfo')
const genderRateMap = {
    '-1': { male: 0, female: 0, label: 'Sem Gênero' },
    '0': { male: 100, female: 0 },
    '1': { male: 87.5, female: 12.5 },
    '2': { male: 75, female: 25 },
    '4': { male: 50, female: 50 },
    '6': { male: 25, female: 75 },
    '7': { male: 12.5, female: 87.5 },
    '8': { male: 0, female: 100 }
};

const maxRecords = 151
const limit = 10
let offset = 0;
let pokemonsData = [];  // Array para armazenar os dados dos Pokémons

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
        pokemonsData = pokemonsData.concat(pokemons);  // Armazenar os dados
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}
// Carregar os primeiros itens dos Pokémon ao iniciar a página
loadPokemonItens(offset, limit)

// Função para converter os dados do Pokémon em um elemento HTML para o modal de detalhes
function convertPokemonToMoreInfo(pokemon) {
    return `    <div class="pokemon-details ${pokemon.type}" id="pokemonDetails">
                    <header class="pokemon-details__header">
                        <div class="pokemon-details__title-group">
                            <div class="pokemon-details__title">
                                <h1>${pokemon.name}</h1>
                                <ul class="pokemon-details__types">
                                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="pokemon-details__number">
                                <h2>#${pokemon.number.toString().padStart(3, '0')}</h2>
                            </div>
                        </div>
                        <div class="pokemon-details__image-wrap">
                            <img class="pokemon-details__image"
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.number}.svg"
                                alt="${pokemon.name}">
                        </div>
                    </header>

                    <section class="pokemon-details__panel">
                        <nav class="pokemon-details__tabs">
                            <ul class="pokemon-details__tabs-list">
                                <li class="pokemon-tab pokemon-tab--active">About</li>
                                <li class="pokemon-tab">Base Stats</li>
                                <li class="pokemon-tab">Evolution</li>
                                <li class="pokemon-tab">Moves</li>
                            </ul>
                        </nav>

                        <div class="pokemon-details__content">
                            <article class="pokemon-details__section">
                                <h2>About</h2>
                                <ul class="pokemon-details__list">
                                    <li><span class="pokemon-details__label">Species:</span> ${pokemon.species}</li>
                                    <li><span class="pokemon-details__label">Height:</span> ${pokemon.height} m</li>
                                    <li><span class="pokemon-details__label">Weight:</span> ${pokemon.weight} kg</li>
                                    <li><span class="pokemon-details__label">Abilities:</span> ${pokemon.abilities.join(', ')}</li>
                                </ul>
                            </article>

                            <article class="pokemon-details__section">
                                <h2>Breeding</h2>
                                <ul class="pokemon-details__list">
                                    <li><span class="pokemon-details__label">Gender:</span> ${formatGenderRate(pokemon.genderprobability)}</li>
                                    <li><span class="pokemon-details__label">Egg Groups:</span> ${pokemon.egggroups.join(', ')}</li>
                                    <li><span class="pokemon-details__label">Egg Cycles:</span> ${pokemon.eggcycle}</li>
                                </ul>
                            </article>
                        </div>
                    </section>
                </div>
        `
}

// Função para formatar a taxa de gênero em uma string legível
function formatGenderRate(genderRate) {
    const rates = genderRateMap[genderRate];
    
    if (genderRate === '-1') {
        return 'Sem Gênero';
    }
    
    return `<span class="male">♂</span> ${rates.male}% <span class="female">♀</span> ${rates.female}%`;
}


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
    const pokemonCard = event.target.closest('.pokemon');
    if (pokemonCard) {
        // Pegar o número do Pokémon a partir do card
        const pokemonNumber = parseInt(pokemonCard.querySelector('.number').textContent.replace('#', ''));
        
        // Encontrar o Pokémon no array
        const pokemon = pokemonsData.find(p => p.number === pokemonNumber);
        
        if (pokemon) {
            // Renderizar as informações no modal
            pokemonDetailsContainer.innerHTML = convertPokemonToMoreInfo(pokemon);
            moreInfoDiv.style.visibility = 'visible';
        }
    }
});

// Event listener para fechar o modal
closeButton.addEventListener('click', () => {
    moreInfoDiv.style.visibility = 'hidden';
});