<template>
<div class="pokemon-detail">
    <h3>{{ selectedPokemon.name }}</h3>
    <img class="lrg-pokemon" :src="pokemon.sprites.front_default " />
</div>
</template>

<script>
import { eventBus } from '@/main'


export default {
    name: 'pokemon-detail',
    props:['character', 'selectedPokemon'],
    mounted(){
        eventBus.$on('pokemon-selected', pokemon => (this.selectedPokemon = pokemon));
    }
}
</script>

<style>
    .lrg-pokemon {
        height: 100px;
    }
</style>