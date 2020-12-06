<template>
<div class="pokemon-detail">
    <h3>Name: {{ pokemonDetails.name }}</h3>
    <h4>Height: {{ pokemonDetails.height}}</h4>
    <!-- <img class="lrg-pokemon" :src="pokemon.sprites.front_default " /> -->
</div>
</template>

<script>
import { eventBus } from '@/main'


export default {
    name: 'pokemon-detail',
    props:['character', 'selectedPokemon', 'pokemonDetails'],
    data() {
    return {
      
    }
  },
    mounted(){
        // eventBus.$on('pokemon-selected', pokemon => (this.selectedPokemon = pokemon));
        
    },
    methods: {

}
}
</script>

<style>
    .lrg-pokemon {
        height: 100px;
    }
</style>