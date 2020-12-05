<template>
  <div id="pokemonsList">
          <pokemon-list v-for="(character, index) in pokemon" :pokemon="pokemon" :key="index"></pokemon-list>
  </div>
</template>

<script>
 
import PokemonDetails from './PokemonDetails.vue'

export default {
    name: "pokemon-list",
    props: ["pokemon"],
    components: {
        'pokemon-detail': PokemonDetails
    },
}
</script>

<style>

</style>
