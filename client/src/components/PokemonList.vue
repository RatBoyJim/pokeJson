<template>
  <div id="pokemonsList">

    <label for="pokemon_select">Select Pokemon 1:</label>
    <select id="pokemon_select1" v-model="selectedPokemon1" v-on:change="fetchPokemonDetails1">
      <option disabled value="">Select a Pokemon</option>
      <option v-for="(character, index) in pokemon" :pokemon="pokemon" :value="character" :key="index">{{pokemon[index].name}}</option>
    </select>
    <label id="pokemon2_label" for="pokemon_select">Select Pokemon 2:</label>
    <select id="pokemon_select2" v-model="selectedPokemon2" v-on:change="fetchPokemonDetails2">
      <option disabled value="">Select a Pokemon</option>
      <option v-for="(character, index) in pokemon" :pokemon="pokemon" :value="character" :key="index">{{pokemon[index].name}}</option>
    </select>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: "pokemon-list",
    props: ["pokemon"],
    data() {
        return {
            selectedPokemon1: {},
            selectedPokemon2: {},
        };
    },
    components: {
    //    'pokemon': Pokemon
    },
    methods:{
      fetchPokemonDetails1(){
        eventBus.$emit('pokemon-selected-1', this.selectedPokemon1)
      },
      fetchPokemonDetails2(){
        eventBus.$emit('pokemon-selected-2', this.selectedPokemon2)
      }
    }
}
</script>

<style>
#pokemon2_label {
  margin-left: 250px; 
}

</style>

<!--<section class="film-select-container">
   <label for="film-select">Select a Film:</label>
    <select id="film-select" v-model="selectedFilm">
      <option disabled value="">Select a Film</option>
      <option v-for="(film, index) in films" :key="index" :value="film">{{film.title}}</option>
    </select>
  </section>