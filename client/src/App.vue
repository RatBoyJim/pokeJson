<template>
<div id="app">

    <pokemom-detail v-if="selectedPokemon" :selectedPokemon="selectedPokemon"></pokemom-detail>
</div>
</template>

<script>
import PokemonService from './services/PokemonService';

export default {
    data (){
        return {
            pokemon: [],
            selectedPokemon: null
        };
    },
    mounted(){
        this.getPokemon();
    }
    

}
</script>

<style>

</style>