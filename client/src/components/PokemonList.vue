<template>
  <div id="pokemonsList">
    <div class="pokemon1_container">
    <label id="pokemon1_label">Select Player 1's Pokemon</label>
    <multiselect class="multiselect" v-model="p1PokemonList" v-on:close="sendP1PokemonList" :options="pokemon" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="false">
    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
    </multiselect>
  <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
    </div>
    <div class="pokemon2_container">
    <label id="pokemon2_label">Select Player 2's Pokemon</label>
    <multiselect class="multiselect" v-model="p2PokemonList" v-on:close="sendP2PokemonList" :options="pokemon" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="false">
    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
    </multiselect>
  <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
import Multiselect from 'vue-multiselect'

export default {
    name: "pokemon-list",
    props: ["pokemon"],
    data() {
        return {
            selectedPokemon1: {},
            selectedPokemon2: {},
            p1PokemonList: [],
            p2PokemonList: []
        };
    },
    mounted(){
      eventBus.$on('battle-again', () => {
          this.selectedPokemon1 = {},
          this.selectedPokemon2 = {}
      })
    },
    methods: {
      fetchPokemonDetails1(){
        eventBus.$emit('pokemon-selected-1', this.selectedPokemon1)
      },
      fetchPokemonDetails2(){
        eventBus.$emit('pokemon-selected-2', this.selectedPokemon2)
      },
      sendP1PokemonList(){
        eventBus.$emit('p1-pokemon-list', this.p1PokemonList)
      },
      sendP2PokemonList(){
        eventBus.$emit('p2-pokemon-list', this.p2PokemonList)
      }
    
    },
    components: {
      Multiselect
    }
}
</script>

<style>

    #pokemonsList {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .pokemon1_container {
      display: flex;
      flex-direction: column;
      border: solid 10px blue;
      border-radius: 5px;
      min-width: 150px;
      background-color: lightgoldenrodyellow;
      padding: 10px;
      margin-top: 50px;
    }

    #pokemon1_label{
      font-family: Pokemon;
    }

    .pokemon2_container {
      display: flex;
      flex-direction: column;
      border: solid 10px blue;
      border-radius: 5px;
      min-width: 150px;
      background-color: lightgoldenrodyellow;
      padding: 10px;
      margin-top: 50px;
    }

    #pokemon2_label{
      font-family: Pokemon;
    }

  .multiselect {
    padding:10px;
    margin: 10px;
    border-radius:10px;
    border: 0;
    box-shadow: 5px 5px 5px 5px rgba(68, 2, 107, 0.06);
    border-color: blueviolet;
    font-family: "Fira Sans";
}

  .multiselect:hover {
    box-shadow: 15px 15px 15px 15px rgba(68, 2, 107, 0.06);
    border-color: black;
}

    
</style>