const listPoke = document.getElementById('pokemons-list')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10
let offset = 0
const maxRecords = 151

// Carregamento da lista de pokemons
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        const newHtml = pokemonList.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#00${pokemon.num}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>

            </li>
        `).join('')

        listPoke.innerHTML += newHtml
    })
        .catch((error) => console.error(error))

}

loadPokemonItens(offset, limit)

// evento clique do botão para carregamento de mais itens da lista
window.addEventListener('click', (e) => {
    const target = e.target

    if (target.id === 'loadMoreButton') {
        offset += limit
        const qtdRecordNextPage = offset + limit

        if (qtdRecordNextPage >= maxRecords) {
            const newLimit = maxRecords - offset
            loadPokemonItens(offset, newLimit)
            loadMoreButton.parentElement.removeChild(loadMoreButton)

        } else {
            loadPokemonItens(offset, limit)

        }
    }

    if (target.parentElement.classList.contains('pokemon')) {
        window.location.href = 'info-pokemon.html'
    }


})