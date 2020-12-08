<template>
<div id="piechart-container">
    <h2>Pokemon Wins</h2>
    <span class="wins">
    <GChart type="PieChart" :data="chartDataWins" />
    </span>
    <h2>Pokemon Losses</h2>
    <span class="losses">
    <GChart type="PieChart" :data="chartDataLosses" />
    </span>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
    name: "pokemon-chart",
    props: ["winsAndLosses"],
    data () {
        return{
            chartDataWins:[
                ['Pokemon', 'Wins'],
            ],
            chartDataLosses:[
                ['Pokemon', 'Losses'],
            ]
        }
    },
    components: {
        GChart
    },
    mounted(){
        getArray(winsAndLosses)
    },
    methods: {
        getArray(winsAndLosses){
            for (item in winsAndLosses) {
                result = Object.values(obj).map((values) => [])
            }
        },
    },
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