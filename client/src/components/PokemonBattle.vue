<template>
  <div class="battle">
      <div class="p1-container">
      <button class="p1stuff" v-if="!pokemon1Defeated && !pokemon2Defeated" :pokemonDetails1="pokemonDetails1" :pokemonDetails2="pokemonDetails2" v-on:click="attackByFirstPokemon">{{pokemonDetails1.moves[0].move.name}}</button>
      <button class="p1stuff" v-if="!pokemon1Defeated && !pokemon2Defeated" :pokemonDetails1="pokemonDetails1" :pokemonDetails2="pokemonDetails2" v-on:click="attackByFirstPokemonExtra">{{pokemonDetails1.moves[1].move.name}}</button>
      <button class="p1stuff" v-if="pokemonPotions1 && !pokemon1Defeated && !pokemon2Defeated" :pokemonPotions1="pokemonPotions1" v-on:click="potionByFirstPokemon">Use a potion ({{pokemonPotions1}})</button>
      <p class="hp">Remaining HP: <b><i>{{pokemonDetails1.stats[0].base_stat}}</i></b></p>
      </div>
      <section class="result-container">
      <div class="result-contents" v-if="pokemon1Defeated || pokemon2Defeated">
        <p v-if="pokemon1Defeated">{{pokemonDetails1.name}} is defeated</p>
        <p v-if="pokemon2Defeated">{{pokemonDetails2.name}} is defeated</p>
      </div>
      </section>
      <div class="p2-container">
      <button class="p2stuff" v-if="!pokemon2Defeated && !pokemon1Defeated" :pokemonDetails1="pokemonDetails1" :pokemonDetails2="pokemonDetails2" v-on:click="attackBySecondPokemon">{{pokemonDetails2.moves[0].move.name}}</button>
      <button class="p2stuff" v-if="!pokemon2Defeated && !pokemon1Defeated" :pokemonDetails1="pokemonDetails1" :pokemonDetails2="pokemonDetails2" v-on:click="attackBySecondPokemonExtra">{{pokemonDetails2.moves[1].move.name}}</button>
      <button class="p2stuff" v-if="pokemonPotions2 && !pokemon2Defeated && !pokemon1Defeated" :pokemonPotions2="pokemonPotions2" v-on:click="potionBySecondPokemon">Use a potion ({{pokemonPotions2}})</button>
      <p class="hp">Remaining HP: <b><i>{{pokemonDetails2.stats[0].base_stat}}</i></b></p>
      </div>
  </div>
</template>

<script>

import { eventBus } from '@/main'

export default {
  name: 'battle-result',
  props:['pokemonDetails1', 'pokemonDetails2', 'pokemonMoves1', 'pokemonMoves1Extra','pokemonMoves2', 'pokemonMoves2Extra', 
  'pokemon1Defeated', 'pokemon2Defeated', 'pokemonPotions1', 'pokemonPotions2'],
	methods: {
		attackByFirstPokemon(){
        if (this.pokemonDetails2.stats[0].base_stat < this.pokemonMoves1.pp) {
        eventBus.$emit('set-health-p2', this.pokemonDetails2.stats[0].base_stat)
        eventBus.$emit('pokemon-defeated-2', this.pokemonDetails2.isDefeated = true)
        const payload = {'pokemonDetails1':this.pokemonDetails1, 'pokemonDetails2':this.pokemonDetails2}
        eventBus.$emit('pokemon-1-win', payload); 
      }else{
        eventBus.$emit('set-health-p2', this.pokemonMoves1.pp)
      }},
      attackByFirstPokemonExtra(){
        if (this.pokemonDetails2.stats[0].base_stat < this.pokemonMoves1Extra.pp) {
        eventBus.$emit('set-health-p2', this.pokemonDetails2.stats[0].base_stat)
        eventBus.$emit('pokemon-defeated-2', this.pokemonDetails2.isDefeated = true)
        eventBus.$emit('pokemon-1-win', this.pokemonDetails1)
      }else{
        eventBus.$emit('set-health-p2', this.pokemonMoves1Extra.pp)
      }},
      potionByFirstPokemon(){
        eventBus.$emit('increase-health-p1', 15)
      },
    attackBySecondPokemon(){
      if (this.pokemonDetails1.stats[0].base_stat < this.pokemonMoves2.pp) {
        eventBus.$emit('set-health-p1', this.pokemonDetails1.stats[0].base_stat)
        eventBus.$emit('pokemon-defeated-1', this.pokemonDetails1.isDefeated = true)
        const payload = {'pokemonDetails1':this.pokemonDetails1, 'pokemonDetails2':this.pokemonDetails2}
        eventBus.$emit('pokemon-2-win', payload);
      }else{
        eventBus.$emit('set-health-p1', this.pokemonMoves2.pp)
      
      }},
    attackBySecondPokemonExtra(){
      if (this.pokemonDetails1.stats[0].base_stat < this.pokemonMoves2Extra.pp) {
        eventBus.$emit('set-health-p1', this.pokemonDetails1.stats[0].base_stat)
        eventBus.$emit('pokemon-defeated-1', this.pokemonDetails1.isDefeated = true);
      }else{
        eventBus.$emit('set-health-p1', this.pokemonMoves2Extra.pp)
      
      }},
    potionBySecondPokemon(){
      eventBus.$emit('increase-health-p2', 15)
    }
    
      
  } 
}


</script>

<style>

.battle {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.p1-container > button {
  min-height: 50px;
  width: 190px;
  margin-top: 10px;
  text-justify: center;
  text-align: center;
  font-family: "Fira Sans";
  font-size: 16pt;
  color: white;
  background-color: red;
  border: solid 10px rgb(255, 217, 0);
  border-color: black;
  border-radius: 5px;
}
.p1stuff {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.p2-container > button {
  min-height: 50px;
  width: 190px;
  margin-top: 10px;
  text-justify: center;
  text-align: center;
  font-family: "Fira Sans";
  font-size: 16pt;
  color: white;
  background-color: red;
  border: solid 10px rgb(255, 217, 0);
  border-color: black;
  border-radius: 5px;
}
.p2stuff {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hp {
  border: solid 10px blue;
  border-radius: 5px;
  width: 150px;
  background-color: gold;
  padding: 10px;
  font-family: "Fira sans";
  font-size: 22pt;
  color: black;
}

.result-container {
  display: flex;
  flex-direction: row;
}

.result-contents {
  border: solid 10px rgb(255, 217, 0);
  border-radius: 5px;
  width: 100px;
  height: 140px;
  background-color: rgb(#888);
  padding: 10px;
  justify-content: center;
  font-family: Pokemon;
  background-image: url("https://cdn140.picsart.com/297375860189201.gif?to=min&r=640");
  background-repeat: no-repeat;
  background-size: contain;
  background-position:bottom;
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