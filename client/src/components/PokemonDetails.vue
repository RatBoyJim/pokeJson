<template>
<div class="pokemon-detail">
    <h3>{{ pokemon.results.name }}</h3>
    <img class="lrg-pokemon" :src="pokemon.sprites.front_default " />
</div>
</template>

<script>


export default {
    name: 'pokemon-detail',
    props:['pokemon']
}
</script>

<style>
    .lrg-pokemon {
        height: 100px;
    }
</style>