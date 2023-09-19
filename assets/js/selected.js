const pokeID = location.search.split('=')[1]
const targetPokemon = document.querySelector('.content-target')
const barrinha = document.querySelector('.barrinha span')

async function getDetail() {
    const url1 = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`
    return fetch(url1)
    .then((response) => response.json())
    .then(filterInfoPokemon)
    .then((pokemonInfor) => pokemonInfor)
    .catch((error) => console.error(error))
}

function filterInfoPokemon(pokeDetail) {
    const poke = new Pokemon()
    poke.num = pokeDetail.id
    poke.name = pokeDetail.name

    poke.hp = pokeDetail.stats[0].base_stat
    poke.atack = pokeDetail.stats[1].base_stat
    poke.defense = pokeDetail.stats[2].base_stat
    poke.atackSp = pokeDetail.stats[3].base_stat
    poke.defenseSp = pokeDetail.stats[4].base_stat
    poke.speed = pokeDetail.stats[5].base_stat

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    poke.types = types
    poke.type = type
    poke.photo = pokeDetail.sprites.other.dream_world.front_default

    return poke
}

async function newInfo() {
    const pokemon = await getDetail()
    document.body.classList = `${pokemon.type}`
    targetPokemon.innerHTML = `
        <a href="index.html">←</a>
        <div class="ordem">
            <span class="nome">${pokemon.name}</span>
            <span class="numero">#00${pokemon.num}</span>
        </div>
        <div class="detalhe">
            ${pokemon.types.map((type) => `<span class="tipo ${type}">${type}</span>`).join('')}
        </div>
        <img src="${pokemon.photo}"
            alt="${pokemon.name}">

        <article class="detail-target">
            <p>Base Status</p>

            <div class="status">
                <h6>HP</h6>
                <div>
                    <span>${pokemon.hp}</span>
                    <div class="barrinha"><span style="width:${pokemon.hp + 10}px;"></span></div>
                </div>
                <h6>ATTACK</h6>
                <div>
                    <span>${pokemon.atack}</span>
                    <div class="barrinha"><span style="width:${pokemon.atack + 10}px;"></span></div>
                </div>
                <h6>DEFENSE</h6>
                <div>
                    <span>${pokemon.defense}</span>
                    <div class="barrinha"><span style="width:${pokemon.defense + 10}px;"></span></div>
                </div>
                <h6>SP.ATTACK</h6>
                <div>
                    <span>${pokemon.atackSp}</span>
                    <div class="barrinha"><span style="width:${pokemon.atackSp + 10}px;"></span></div>
                </div>
                <h6>SP.DEFENSE</h6>
                <div>
                    <span>${pokemon.defenseSp}</span>
                    <div class="barrinha"><span style="width:${pokemon.defenseSp + 10}px;"></span></div>
                </div>
                <h6>SPEED</h6>
                <div>
                    <span>${pokemon.speed}</span>
                    <div class="barrinha"><span style="width:${pokemon.speed + 10}px;"></span></div>
                </div>
            </div>
        </article>
        `
}

newInfo()