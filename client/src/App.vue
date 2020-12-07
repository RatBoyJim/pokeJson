<template>
<div id="app">
    <!-- <div>
    <label for="pokemon_select">Select a Pokemon:</label>
    <select id="pokemon_select" v-model="selectedPokemon" v-on:change="fetchPokemonDetails">
      <option disabled value="">Select a Pokemon</option>
      <option v-for="(character, index) in pokemon" :pokemon="pokemon" :value="character" :key="index">{{pokemon[index].name}}</option>
    </select>
  </div> -->
    <pokemon-list :pokemon='pokemon'></pokemon-list>
    <pokemon-detail :selectedPokemon='selectedPokemon1' :pokemonDetails='pokemonDetails1'></pokemon-detail>
    <!-- <battle-result :pokemon="pokemon"></battle-result> -->
</div>
</template>

<script>
import { eventBus } from './main.js';
import PokemonService from './services/PokemonService';
import PokemonList from './components/PokemonList.vue';
import PokemonDetails from './components/PokemonDetails.vue';
import PokemonBattle from './components/PokemonBattle.vue';

export default {
    name: 'app',
    data (){
        return {
            pokemon: [],
<<<<<<< HEAD
            selectedPokemon: null,
            pokemonDetails: null,

=======
            selectedPokemon1: null,
            selectedPokemon2: null,
            pokemonDetails1: null
>>>>>>> develop
            
        };
    },
    mounted(){
        this.fetchPokemon();
        // this.fetchPokemonDetails();
        // this.fetchSelectedPokemon();

        eventBus.$on('pokemon-selected-1', (pokemon) => {
            this.selectedPokemon1 = {name: pokemon.name, url: pokemon.url};
            this.fetchPokemonDetails1()
        })
        
    },
    components: {
        'pokemon-detail': PokemonDetails,
        'pokemon-list': PokemonList,
        'battle-result': PokemonBattle
    },
    methods: {
        fetchPokemon(){
            PokemonService.getPokemon()
                .then(pokemon => this.pokemon = pokemon.results)
    },
    fetchPokemonDetails1(){
    const pokemonName = this.selectedPokemon1.url
    return fetch(pokemonName).then(res => res.json()).then(data => this.pokemonDetails1 = data)
    
//     Promise.all(detailsPromises)
//   .then((data) => {
//     this.pokemonDetails = data;
//   })
}
        // fetchSelectedPokemon(){
        //     PokemonService.getSelectedPokemon()
        //         .then(selectedPokemon => this.selectedPokemon = selectedPokemon)
        // }
    }
    

}
</script>

<style>

</style>