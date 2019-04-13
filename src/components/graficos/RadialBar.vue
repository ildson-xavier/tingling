<template>
    <div>
        <apexchart type=radialBar height=280 :options="chartOptions" :series="series" />
    </div>
</template>

<script>
export default {
    data: function() {
      return {
        series: [67],
        chartOptions: {
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 1,
                size: '70%',
                image: '/static/grupo.png',
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false
              },
              dataLabels: {
                name: {
                  show: false,
                  color: '#fff'
                },
                value: {
                  show: true,
                  color: '#333',
                  offsetY: 50,
                  fontSize: '18px'

                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Volatility'],
        }
      }
    }
}
</script>

<style>

</style>
