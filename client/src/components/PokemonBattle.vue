<template>
  <div class="battle">
      <!-- <button :pokemonDetails1="pokemonDetails1" v-on:click="fetchMovesP1">Load player moves</button> -->
      <button :pokemonDetails1="pokemonDetails1" :pokemonDetails2="pokemonDetails2" v-on:click="attackByFirstPokemon"><!--{{pokemonDetails1.moves[0].move.name}}--></button>
      <!-- <p>{{pokemonDetails1.stats[0].base_stat}}</p>
      <button :pokemonDetails2="pokemonDetails2" v-on:click="fetchMovesP2">Load player moves</button>
      <button :pokemonDetails1="pokemonDetails1" :pokemonDetails2="pokemonDetails2" v-on:click="attackBySecondPokemon">{{pokemonDetails2.moves[0].move.name}}</button>
      <p>{{pokemonDetails2.stats[0].base_stat}}</p>
      <p v-if="pokemonDetails1.isDefeated">{{pokemonDetails1.name}} is defeated</p>
      <p v-if="pokemonDetails2.isDefeated">{{pokemonDetails2.name}} is defeated</p> -->
  </div>
</template>

<script>


export default {
  name: 'battle-result',
  props:['pokemonDetails1', 'pokemonDetails2', 'pokemon1Moves'],
	data() {
		return {
            pokemon1Moves: [],
            pokemon2Moves: []
		}
    },
    mounted() {
    // this.fetchMovesP1();
    // this.fetchMovesP2();
    },
	methods: {
  
    //     fetchMovesP1() {
    //         const movesURL = this.pokemonDetails1.moves[0].move.url
    //         console.log(movesURL);
    //         fetch('movesURL')
    //         .then(response => response.json())
    //         .then(data => this.pokemon1Moves = data)
    // },
    //     fetchMovesP2() {
    //         const movesURL = this.pokemonDetails2.moves[0].move.url
    //         fetch('movesURL')
    //         .then(response => response.json())
    //         .then(data => this.pokemon2Moves = data)
    // }
		attackByFirstPokemon(pokemon1, pokemon2){
      return pokemonDetails2.stats[0].base_stat = pokemonDetails2.stats[0].base_stat - pokemon1Moves.moves[0].pp
      if (pokemonDetails2.stats[0].base_stat == 0) {
        pokemonDetails2.isDefeated = true;
      }
      },
    // attackBySecondPokemon(pokemon1, pokemon2){
    //   return pokemonDetails1.stats[0].base_stat = pokemonDetails1.stats[0].base_stat - pokemon2Moves.moves[0].pp
    //   if (pokemonDetails1.stats[0].base_stat == 0) {
    //     pokemonDetails1.isDefeated = true;
    //   }
    //   }
      
	}
    
}

</script>

<style>

</style>