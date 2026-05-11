
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail, speciesDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    // Detalhes adicionais para o projeto
    
    pokemon.species = pokeDetail.species.name
    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight
    pokemon.abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    
    // Detalhes adicionais do endpoint de species
    pokemon.genderprobability = speciesDetail.gender_rate
    pokemon.egggroups = speciesDetail.egg_groups.map((eggGroup) => eggGroup.name)
    pokemon.eggcycle = speciesDetail.hatch_counter

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokeDetail) => {
            return fetch(pokeDetail.species.url)
                .then((response) => response.json())
                .then((speciesDetail) => convertPokeApiDetailToPokemon(pokeDetail, speciesDetail))
        })
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}
