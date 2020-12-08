<template>
  <div class="battle">
      <div class="p1-container">
      <button class="p1-stuff" v-if="!pokemon1Defeated && !pokemon2Defeated" :pokemonDetails1="pokemonDetails1" :pokemonDetails2="pokemonDetails2" v-on:click="attackByFirstPokemon">{{pokemonDetails1.moves[0].move.name}}</button>
      <p class="pokemon-detail">Remaining HP: {{pokemonDetails1.stats[0].base_stat}}</p>
      </div>
      <div class="p2-container">
      <button class="p2stuff" v-if="!pokemon2Defeated && !pokemon1Defeated" :pokemonDetails1="pokemonDetails1" :pokemonDetails2="pokemonDetails2" v-on:click="attackBySecondPokemon">{{pokemonDetails2.moves[0].move.name}}</button>
      <p class="pokemon-detail">Remaining HP: {{pokemonDetails2.stats[0].base_stat}}</p>
      </div>
      <div class="result">
      <p v-if="pokemon1Defeated">{{pokemonDetails1.name}} is defeated</p>
      <p v-if="pokemon2Defeated">{{pokemonDetails2.name}} is defeated</p>
      </div>
  </div>
</template>

<script>

import { eventBus } from '@/main'

export default {
  name: 'battle-result',
  props:['pokemonDetails1', 'pokemonDetails2', 'pokemonMoves1', 'pokemonMoves2', 'pokemon1Defeated', 'pokemon2Defeated'],
	methods: {
		attackByFirstPokemon(){
        if (this.pokemonDetails2.stats[0].base_stat < this.pokemonMoves1.pp) {
        eventBus.$emit('set-health-p2', this.pokemonDetails2.stats[0].base_stat)
        eventBus.$emit('pokemon-defeated-2', this.pokemonDetails2.isDefeated = true)
        eventBus.$emit('pokemon-1-win', (this.pokemonDetails1, this.pokemonDetails2))
      }else{
        eventBus.$emit('set-health-p2', this.pokemonMoves1.pp)
      }},
    attackBySecondPokemon(){
      if (this.pokemonDetails1.stats[0].base_stat < this.pokemonMoves2.pp) {
        eventBus.$emit('set-health-p1', this.pokemonDetails1.stats[0].base_stat)
        eventBus.$emit('pokemon-defeated-1', this.pokemonDetails1.isDefeated = true);
      }else{
        eventBus.$emit('set-health-p1', this.pokemonMoves2.pp)
      
      }}
      
  } 
}

</script>

<style>

.battle {
  display: flex;
  flex-direction: row;
}

.p1-container > button{
  width: 190px;
  min-height: 50px;
  margin-top: 10px;
  text-justify: center;
  text-align: center;
  border: solid 10px rgb(255, 217, 0);
  border-radius: 5px;
}
.p1-stuff {
  display: flex;
  flex-direction: column;
}

.p2-container > button{
  width: 190px;
  min-height: 50px;
  margin-top: 10px;
  text-justify: center;
  text-align: center;
  border: solid 10px rgb(255, 217, 0);
  border-radius: 5px;
}
.p2-stuff {
  display: flex;
  flex-direction: column;
}


/* border: solid 10px rgb(255, 217, 0);
        border-radius: 5px;
        width: 150px;
        background-color: lightgoldenrodyellow;
        padding: 10px;
        margin-right: 300px;
        margin-top: 50px;
        font-family: 'Fira Sans', sans-serif;
        background-image: url("https://cutewallpaper.org/21/pokemon-card-backgrounds/Backround-Pokemon-Card-Related-Keywords-and-Suggestions-.png"); */
</style>