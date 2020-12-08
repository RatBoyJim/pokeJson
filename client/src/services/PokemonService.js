const apiURL = 'https://pokeapi.co/api/v2/pokemon'
const baseURL = 'http://localhost:3000/api/pokemon'

export default {
    getPokemon(){
        return fetch(apiURL)
        .then(res => res.json()) 
    },
    getWinsAndLosses(){
        return fetch(baseURL)
        .then(res => res.json());
    },
    updateWinsAndlosses(){
        return fetch(baseURL + pokemonDetails1.name,{
            method: 'PUT',
            body: JSON.stringify(pokemonDetails1),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
}
}