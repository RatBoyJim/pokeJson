<template>
  <div id="pokemonsList">

    <label for="pokemon_select">Select a Pokemon:</label>
    <select v-on:select="handleSelect" id="pokemon_select" v-model="selectedPokemon">
      <option disabled value="">Select a Pokemon</option>
      <option v-for="(character, index) in pokemon" :pokemon="pokemon" :value="character" :key="index">{{pokemon[index].name}}</option>
    </select>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: "pokemon-list",
    props: ["pokemon", "selectedPokemon"],
    components: {
       
    },
    methods:{
      handleSelect(){
        eventBus.$emit('pokemon-selected', this.pokemon)
      }
    }
}
</script>

<style>

</style>
