<template>
    <div>
        <apexchart type=pie width=350 :options="chartOptions" :series="series" />
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        series: [44, 55, 13, 43, 12, 12, 43, 11, 31],
        chartOptions: {
          labels: ['Antonia', 'Gabriel', 'Gustavo', 'Marcos', 'Henrique', 'Flavio','Xavier','Jonas','Vinicios'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
        }
    }
}
</script>

<style>

</style>
