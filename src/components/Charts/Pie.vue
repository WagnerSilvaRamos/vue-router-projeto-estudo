<template>

<div id="chart" class="col-md-6  col-sm-12 ">
<apexchart type="pie"  :options="chartOptions" :series="series"></apexchart>
</div>

</template>

<script>
export default {

  data() {
    return {

//chart donut
      series: [44, 55, 13, 43, 22],
      chartOptions:
          {
            chart: {
            type  :
    'pie',
  }
  ,
    labels: ['Daniel', 'Wagner', 'Svetlana', 'Dayse', 'Ramos'],
        responsive:
    [{
      breakpoint: 480,
      options: {
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
@media screen and (max-width: 500px){
#chart{ margin: 0 auto}
}
</style>