<template>
  <div id="pokemonsList">
          <pokemon v-for="(pokemon, index) in pokemons" :pokemon="pokemon" :key="index"></pokemon-list>
  </div>
</template>

<script>


export default {
    name: "pokemon-list",
    components: {
        'pokemon': Pokemon
    },
}
</script>

<style>

</style>
