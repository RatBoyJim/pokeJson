<template>
<div class="details-container">
<div class="pokemon-detail" v-if="pokemonDetails1">
    <img class="lrg-pokemon" :src="pokemonDetails1.sprites.front_default " />
    <h3>Name: {{ pokemonDetails1.name }}</h3>
    <h4>Height: {{ pokemonDetails1.height}}</h4>
    <h4>{{pokemonDetails1.moves[0].move.name}}</h4>
    <h4>{{pokemonDetails1.moves[1].move.name}}</h4>    
</div>
<div class="pokemon-detail" v-if="pokemonDetails2">
<img class="lrg-pokemon" :src="pokemonDetails2.sprites.front_default " />
    <h3>Name: {{ pokemonDetails2.name }}</h3>
    <h4>Height: {{ pokemonDetails2.height}}</h4>
    <h4>{{pokemonDetails2.moves[0].move.name}}</h4>
    <h4>{{pokemonDetails2.moves[1].move.name}}</h4>  
</div>
</div>
</template>

<script>
import { eventBus } from '@/main'


export default {
    name: 'pokemon-detail',
    props:['character', 'selectedPokemon1', 'pokemonDetails1', 'selectedPokemon2', 'pokemonDetails2'],
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

    .details-container {
        display: flex;
        flex-direction: row;
    }

    .pokemon-detail {
        border: solid 10px rgb(255, 217, 0);
        border-radius: 5px;
        width: 150px;
        background-color: lightgoldenrodyellow;
        padding: 10px;
        margin-right: 300px;
        font-family: 'Fira Sans', sans-serif;
        background-image: url("https://cutewallpaper.org/21/pokemon-card-backgrounds/Backround-Pokemon-Card-Related-Keywords-and-Suggestions-.png");
    }
    .lrg-pokemon {
        height: 100px;
    }
</style>