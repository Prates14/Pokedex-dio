const pokeID = window.location.search.split('=')[1];
const targetPokemon = document.querySelector('.content-target')

async function getDetail() {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function newInfo() {
    const pokemonInfo = await getDetail()
    const newInfo = `
        <div class="ordem">
            <span class="nome">${pokemonInfo.name}</span>
            <span class="numero">${pokemonInfo.num}</span>
        </div>
        <div class="detalhe">
            ${pokemonInfo.types.map((type) => `<span class="tipo ${type}">${type}</span>`).join('')}
        </div>
        <img src="${pokemonInfo.photo}"
            alt="${pokemonInfo.name}">

        <article class="detail-target">
            <p>Base Status</p>

            <div class="status">
                <h6>HP</h6>
                <div>
                    <span>${pokemonInfo.stats[0].base_stat}</span>
                    <div class="barrinha"><span class="hp"></span></div>
                </div>
                <h6>ATTACK</h6>
                <div>
                    <span>${pokemonInfo.stats[1].base_stat}</span>
                    <div class="barrinha"><span class="atak"></span></div>
                </div>
                <h6>DEFENSE</h6>
                <div>
                    <span>${pokemonInfo.stats[2].base_stat}</span>
                    <div class="barrinha"><span class="def"></span></div>
                </div>
                <h6>SP.ATTACK</h6>
                <div>
                    <span>${pokemonInfo.stats[3].base_stat}</span>
                    <div class="barrinha"><span class="sp-atak"></span></div>
                </div>
                <h6>SP.DEFENSE</h6>
                <div>
                    <span>${pokemonInfo.stats[4].base_stat}</span>
                    <div class="barrinha"><span class="sp-def"></span></div>
                </div>
                <h6>SPEED</h6>
                <div>
                    <span>${pokemonInfo.stats[5].base_stat}</span>
                    <div class="barrinha"><span class="speed"></span></div>
                </div>
            </div>
        </article>
        `

        targetPokemon.innerHTML = newInfo
}