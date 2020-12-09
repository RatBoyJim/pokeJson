<template>
<div class="details-container">
<div class="pokemon-detail" v-if="pokemonDetails1">
    <br>
    <img class="lrg-pokemon" :src="pokemonDetails1.sprites.front_default " />
    <h3>Name: {{ pokemonDetails1.name }}</h3>
    <h4>Height: {{ pokemonDetails1.height}}</h4>
    <h4>{{pokemonDetails1.moves[0].move.name}}</h4>
    <h4>{{pokemonDetails1.moves[1].move.name}}</h4>    
</div>
<div class="spacer-container">
    <div class="spacer-details">

    </div>
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
        justify-content: space-around;
    }

    .pokemon-detail {
        border: solid 10px rgb(255, 217, 0);
        border-radius: 5px;
        width: 150px;
        background-color: lightgoldenrodyellow;
        padding: 10px;
        margin-top: 50px;
        font-family: "Fira sans";
        font-size: 95%;
        background-image: url("https://cutewallpaper.org/21/pokemon-card-backgrounds/Backround-Pokemon-Card-Related-Keywords-and-Suggestions-.png");
    }
    .lrg-pokemon {
        height: 100px;
    }
    .spacer-container {
  display: flex;
  flex-direction: row;
}

.spacer-contents {
  border: solid 10px rgb(255, 217, 0);
  border-radius: 5px;
  width: 100px;
  height: 140px;
  background-color: rgb(#888);
  padding: 10px;
  justify-content: center;
  /* margin-left: 300px; */
  /* margin-top: 50px; */
  font-family: Pokemon;
  background-image: url("https://cdn140.picsart.com/297375860189201.gif?to=min&r=640");
  background-repeat: no-repeat;
  background-size: contain;
  background-position:bottom;
  }
</style>