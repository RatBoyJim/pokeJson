<template>
<div id="piechart-container">
    <span class="wins">
    <GChart type="PieChart" :data="chartDataWins" />
    </span>
    <span class="losses">
    <GChart type="PieChart" :data="chartDataLosses" />
    </span>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
    data () {
        return{
            chartDataWins:[
                ['Pokemon', 'Wins'],
                ['Pikachu', 5],
                ['Charmander', 2],
                ['Bulbasaur', 4],
                ['Weedle', 6]
            ],
            chartDataLosses:[
                ['Pokemon', 'Losses'],
                ['Pikachu', 5],
                ['Charmander', 2],
                ['Bulbasaur', 4],
                ['Weedle', 6]
            ]
        }
    },
    components: {
        GChart
    }
}
</script>

<style>

#piechart-container{
    display: flex;
    flex-direction: row;
}

.wins{

}
</style>