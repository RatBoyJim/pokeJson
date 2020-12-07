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
    <pokemon-detail :selectedPokemon1='selectedPokemon1' :selectedPokemon2='selectedPokemon2' :pokemonDetails1='pokemonDetails1' :pokemonDetails2='pokemonDetails2'></pokemon-detail>
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
            selectedPokemon1: null,
            selectedPokemon2: null,
            pokemonDetails1: null,
            pokemonDetails2: null
            
        };
    },
    mounted(){
        this.fetchPokemon();

        eventBus.$on('pokemon-selected-1', (pokemon) => {
            this.selectedPokemon1 = {name: pokemon.name, url: pokemon.url};
            this.fetchPokemonDetails1()
        }),
        eventBus.$on('pokemon-selected-2', (pokemon) => {
            this.selectedPokemon2 = {name: pokemon.name, url: pokemon.url};
            this.fetchPokemonDetails2()
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
    },
    fetchPokemonDetails2(){
    const pokemonName = this.selectedPokemon2.url
    return fetch(pokemonName).then(res => res.json()).then(data => this.pokemonDetails2 = data)

    }
    }

}
</script>

<style>

</style>