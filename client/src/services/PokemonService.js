const apiURL = 'https://pokeapi.co/api/v2/pokemon'
// const selectedPokemonURL = this.pokemon.results.url

export default {
    getPokemon(){
        return fetch(apiURL)
        .then(res => res.json()) 
    },
    // getSelectedPokemon(){
    //     return fetch(selectedPokemonURL)
    //     .then(res => res.json())
    // }
}