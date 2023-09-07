
const listPoke = document.getElementById('pokemons-list')

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon">
                <span class="number">#00${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}"
                        alt="${pokemon.name}">
                </div>

            </li>`
}

pokeApi.getPokemons().then((pokemonList = []) => {
    listPoke.innerHTML += pokemonList.map(convertPokemonToLi).join('')
})
.catch((error) => console.error(error))