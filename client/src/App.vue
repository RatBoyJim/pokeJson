<template>
<div>
    
</div>

</template>

<script>
import PokemonService from './services/PokemonService';

export default {
    name: 'app',
    components: {

    },
    data (){
        return {
            pokemon: []
        };
    },
    mounted(){
        this.getPokemon();
    }
    

}
</script>

<style>

</style>