<template>
  <div id="pokemonsList">

    <label for="pokemon_select">Select a Pokemon:</label>
    <select id="pokemon_select" v-model="selectedPokemon">
      <option disabled value="">Select a Pokemon</option>
      <option v-for="(pokeman, index) in pokemon" :value="pokemon" :key="index">{{pokemon[index].name}}</option>
    </select>
  </div>
</template>

<script>

export default {
    name: "pokemon-list",
    props: ["pokemon", "selectedPokemon"],
    components: {
       
    },
}
</script>

<style>

</style>
