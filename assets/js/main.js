
const listPoke = document.getElementById('pokemons-list')

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">#00${pokemon.num}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>

            </li>`
}

pokeApi.getPokemons().then((pokemonList = []) => {
    const newHtml = pokemonList.map(convertPokemonToLi).join('')
    listPoke.innerHTML = newHtml
})
.catch((error) => console.error(error))