<template>
  <div class="battle">
      <button :pokemon1="pokemon[0]" :pokemon2="pokemon[1]" v-on:click="attackByFirstPokemon">{{pokemon1.moves[0].move.name}}</button>
  </div>
</template>

<script>

import Pokemon from './PokemonList'

export default {
	name: 'battle-result',
	data() {
		return {
            pokemon1Moves: [],
            pokemon2Moves: []
		}
    },
    mounted() {
    this.fetchMovesP1();
    this.fetchMovesP2();
    },
	methods: {
        fetchMovesP1() {
            let movesURL = pokemon1.moves[0].move.url
            fetch('movesURL')
            .then(response => response.json())
            .then(data => this.pokemon1Moves = data)
    },
        fetchMovesP2() {
            let movesURL = pokemon2.moves[0].move.url
            fetch('movesURL')
            .then(response => response.json())
            .then(data => this.pokemon2Moves = data)
    },
		attackByFirstPokemon(pokemon1, pokemon2){
			return pokemon2.stats[0].base_stat = pokemon2.stats[0].base_stat - pokemon1Moves.moves[0].pp
			}
	}
    
}

</script>

<style>

</style>