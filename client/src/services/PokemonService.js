const apiURL = 'https://pokeapi.co/api/v2/pokemon'

export default {
    getPokemon(){
        return fetch(apiURL)
        .then(res => res.json()) 
    },
}