<template>
<div id="app">
    <pokemon-list :pokemon="pokemon"></pokemon-list>
    <pokemon-detail v-if="selectedPokemon" :selectedPokemon="selectedPokemon"></pokemon-detail>
</div>
</template>

<script>
import PokemonService from './services/PokemonService';
import PokemonList from './components/PokemonList.vue';
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
        'pokemon-detail': PokemonDetails,
        'pokemon-list': PokemonList
    }
    

}
</script>

<style>

</style>