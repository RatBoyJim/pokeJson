<template>
<div>
    test
</div>

</template>

<script>

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
        this.fetchPokemon();
    },
    methods: {
        fetchPokemon(){
            
        }
    }

}
</script>

<style>

</style>