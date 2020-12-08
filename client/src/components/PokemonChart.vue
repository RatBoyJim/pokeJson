<template>
    <GChart type="PieChart" :data="chartData" />
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
    data () {
        return{
            chartData:[
                ['Pokemon', 'wins'],
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

</style>