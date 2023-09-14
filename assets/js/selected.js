const targetPokemon = document.querySelector('.content-target')
//Carregamento dos status do pokemon
window.addEventListener('load', () => {
    pokeApi.getPokemons().then((pokemonInfo) => {
console.log(pokemonInfo)
        // const newInfo = `
        //     <div class="ordem">
        //         <span class="nome">${pokemon.name}</span>
        //         <span class="numero">${pokemon.num}</span>
        //     </div>
        //     <div class="detalhe">
        //         ${pokemon.types.map((type) => `<span class="tipo ${type}">${type}</span>`).join('')}
        //     </div>
        //     <img src="${pokemon.photo}"
        //         alt="${pokemon.name}">

        //     <article class="detail-target">
        //         <p>Base Status</p>

        //         <div class="status">
        //             <h6>HP</h6>
        //             <div>
        //                 <span>${}</span>
        //                 <div class="barrinha"><span class="hp"></span></div>
        //             </div>
        //             <h6>ATTACK</h6>
        //             <div>
        //                 <span>${}</span>
        //                 <div class="barrinha"><span class="atak"></span></div>
        //             </div>
        //             <h6>DEFENSE</h6>
        //             <div>
        //                 <span>${}</span>
        //                 <div class="barrinha"><span class="def"></span></div>
        //             </div>
        //             <h6>SP.ATTACK</h6>
        //             <div>
        //                 <span>${}</span>
        //                 <div class="barrinha"><span class="sp-atak"></span></div>
        //             </div>
        //             <h6>SP.DEFENSE</h6>
        //             <div>
        //                 <span>${}</span>
        //                 <div class="barrinha"><span class="sp-def"></span></div>
        //             </div>
        //             <h6>SPEED</h6>
        //             <div>
        //                 <span>${}</span>
        //                 <div class="barrinha"><span class="speed"></span></div>
        //             </div>
        //         </div>
        //     </article>
        // `

        // targetPokemon.innerHTML = newInfo
    })
        .catch((error) => console.error(error))

})