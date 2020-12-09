<template>
<div id="piechart-container">
    
    <div class="wins" id="wins">
        <h2>Pokemon Wins</h2>
    <GChart type="PieChart" :data="chartDataWins" />
    </div>
    <div class="losses" id="losses">
        <h2>Pokemon Losses</h2>
    <GChart type="PieChart" :data="chartDataLosses" />
    </div>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
    name: "pokemon-chart",
    props: ["chartDataWins", "chartDataLosses"],
    data () {
        return{
            
        }
    },
    
    components: {
        GChart
    },
    mounted(){
        
    },
    methods: {
        
    },
}

</script>

<style>

#piechart-container{
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    /* width: 300px; */
    font-family: Pokemon;
    text-align: center;
}
</style>