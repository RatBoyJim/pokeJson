<template>
<div class="pokemon-detail" v-if="pokemonDetails">
    <img class="lrg-pokemon" :src="pokemonDetails.sprites.front_default " />
    <h3>Name: {{ pokemonDetails.name }}</h3>
    <h4>Height: {{ pokemonDetails.height}}</h4>
    <h4>{{pokemonDetails.moves[0].move.name}}</h4>
    <h4>{{pokemonDetails.moves[1].move.name}}</h4>
    
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
    .pokemon-detail {
        border: solid 10px rgb(255, 217, 0);
        border-radius: 5px;
        width: 150px;
        background-color: lightgoldenrodyellow;
        padding: 10px;
        font-family: 'Fira Sans', sans-serif;
        background-image: url("https://cutewallpaper.org/21/pokemon-card-backgrounds/Backround-Pokemon-Card-Related-Keywords-and-Suggestions-.png");
    }
    .lrg-pokemon {
        height: 100px;
    }
</style>