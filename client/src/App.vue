<template>
<div id="app">
    <pokemon-list :pokemon="pokemon" :selectedPokemon="selectedPokemon"></pokemon-list>
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
        this.fetchPokemon();
    },
    components: {
        'pokemon-detail': PokemonDetails,
        'pokemon-list': PokemonList
    },
    methods: {
        fetchPokemon(){
            PokemonService.getPokemon()
                .then(pokemon => this.pokemon = pokemon.results)
    },
    }
    

}
</script>

<style>

</style>