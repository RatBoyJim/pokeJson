<template>
<div class="details-container" v-if="p1PokemonListDetails">
<div class="pokemon-detail" v-for="(pokemon, index) in p1PokemonListDetails" :key="index" :p1PokemonListDetails="p1PokemonListDetails" v-on:click="selectPokemon1(pokemon)" >
    <img class="lrg-pokemon" :src="pokemon.sprites.front_default"/>
    <h3>Name: {{ pokemon.name }}</h3>
    <h4>Height: {{ pokemon.height}}</h4>
    <h4>{{pokemon.moves[0].move.name}}</h4>
    <h4>{{pokemon.moves[1].move.name}}</h4>    
</div>
<div class="spacer-container">
    <div class="spacer-details">
        <img class="small-button" src="@/assets/pokeball.png" v-on:click="handleClick" v-if="pokemon2Defeated || pokemon1Defeated">  
        <h4 v-if="pokemon2Defeated || pokemon1Defeated">Battle Again!</h4>
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
    props:['character', 'pokemonDetails1', 'selectedPokemon2', 'pokemonDetails2', 'pokemon1Defeated', 'pokemon2Defeated', 'p1PokemonListDetails'],
    data() {
    return {
    
    }
  },
    methods: {
        handleClick(){
        eventBus.$emit('battle-again')
    },
    selectPokemon1(pokemon){
        eventBus.$emit('pokemon-selected-1-from-list', pokemon)
      }
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
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-items: center;
}

.spacer-details {
  display: flex;
  width: 0px;
  height: 140px;
  background-color: rgb(#888);
  /* padding: 10px; */
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  font-family: Pokemon;
  background-repeat: no-repeat;
  background-size: contain;
  background-position:bottom;
  height: 50px;
  }

.small-button{
    height: 50px;
  }
</style>
