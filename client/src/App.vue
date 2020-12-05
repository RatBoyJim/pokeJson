<template>
<div id="app">

    <pokemon-detail v-if="selectedPokemon" :selectedPokemon="selectedPokemon"></pokemon-detail>
</div>
</template>

<script>
import PokemonService from './services/PokemonService';
import PokemonDetails from './components/PokemonDetails.vue';

export default {
    name: 'app',
    data (){
        return {
            pokemon: [],
            selectedPokemon: null
        };
    },
    mounted(){
        this.getPokemon();
    },
    components: {
        'pokemon-detail': PokemonDetails
    }
    

}
</script>

<style>

</style>