<template>
  <div id="pokemonsList">
    <br>
    <br>
    <label id="pokemon1_label" for="pokemon_select">Select Pokemon 1:</label>
    <select id="pokemon_select1" v-model="selectedPokemon1" v-on:change="fetchPokemonDetails1">
      <option disabled value="">Select a Pokemon</option>
      <option v-for="(character, index) in pokemon" :pokemon="pokemon" :value="character" :key="index">{{pokemon[index].name}}</option>
    </select>
    <label id="pokemon2_label" for="pokemon_select">Select Pokemon 2:</label>
    <select id="pokemon_select2" v-model="selectedPokemon2" v-on:change="fetchPokemonDetails2">
      <option disabled value="">Select a Pokemon</option>
      <option v-for="(character, index) in pokemon" :pokemon="pokemon" :value="character" :key="index">{{pokemon[index].name}}</option>
    </select>

    <!-- <span class="battle-detail">
    <button @click="startBattle()" class="btn btn-primary">
    <img class="battling" :src="'https://cdn140.picsart.com/297375860189201.gif?to=min&r=640'"/>
    <span v-if="battle" class="px-1">
        Battling</span> 
    <span v-else ></span> 
    </button>
    </span> -->

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
            // battle:false,
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
      },
    //   startBattle(){
    //     this.battle=!false
    //       setTimeout(() => {
    //           this.battle=!true
    //             }, 2000)
    // },
  }
}
</script>

<style>
    #pokemon1_label{
      font-family: Pokemon;
    }

    #pokemon2_label{
      margin-left: 250px; 
      font-family: Pokemon;
    }
    /* .battle-detail{
        margin: 300px;
    }
    .battling{
    width: 100px;
    height: 100px;
    background-color: white;
    border: hidden;
    } */
</style>

<!--<section class="film-select-container">
   <label for="film-select">Select a Film:</label>
    <select id="film-select" v-model="selectedFilm">
      <option disabled value="">Select a Film</option>
      <option v-for="(film, index) in films" :key="index" :value="film">{{film.title}}</option>
    </select>
  </section>