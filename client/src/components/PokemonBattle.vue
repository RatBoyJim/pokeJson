<template>
  <div class="battle">
      <button :pokemonDetails1="pokemonDetails1" :pokemonDetails2="pokemonDetails2" v-on:click="attackByFirstPokemon">{{pokemonDetails1.moves[0].move.name}}</button>
      <p class="pokemon-detail">Remaining HP: {{pokemonDetails1.stats[0].base_stat}}</p>
      <button :pokemonDetails1="pokemonDetails1" :pokemonDetails2="pokemonDetails2" v-on:click="attackBySecondPokemon">{{pokemonDetails2.moves[0].move.name}}</button>
      <p class="pokemon-detail">Remaining HP: {{pokemonDetails2.stats[0].base_stat}}</p>
      <p v-if="pokemonDetails1.isDefeated">{{pokemonDetails1.name}} is defeated</p>
      <p v-if="pokemonDetails2.isDefeated">{{pokemonDetails2.name}} is defeated</p>
  </div>
</template>

<script>

import { eventBus } from '@/main'

export default {
  name: 'battle-result',
  props:['pokemonDetails1', 'pokemonDetails2', 'pokemonMoves1', 'pokemonMoves2'],
	methods: {
		attackByFirstPokemon(){
      if (this.pokemonDetails2.stats[0].base_stat <= 0) {
        eventBus.$emit('pokemon-defeated-2', this.pokemonDetails2.isDefeated = true);
      }
      return this.pokemonDetails2.stats[0].base_stat = this.pokemonDetails2.stats[0].base_stat - this.pokemonMoves1.pp
      },
    attackBySecondPokemon(){
      if (this.pokemonDetails1.stats[0].base_stat <= 0) {
        eventBus.$emit('pokemon-defeated-1', this.pokemonDetails1.isDefeated = true);
      }
      return this.pokemonDetails1.stats[0].base_stat = this.pokemonDetails1.stats[0].base_stat - this.pokemonMoves2.pp
      
      }
      
	}
    
}

</script>

<style>

.battle {
        display: flex;
        flex-direction: row;
        }

</style>