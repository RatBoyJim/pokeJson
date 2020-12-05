<template>
<div id="app">

    <pokemom-detail v-if="selectedPokemon" :selectedPokemon="selectedPokemon"></pokemom-detail>
</div>
</template>

<script>
export default {
    name: 'App',
data() {
    return{
        pokemon: [],
        selectedPokemon: null
    }
}
}
</script>

<style>

</style>