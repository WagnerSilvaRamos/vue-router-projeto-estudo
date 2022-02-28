<template>
  <div class="col-md-6  col-sm-12">
  <div id="chart_polar">
    <apexchart type="polarArea" :options="chartOptions" :series="series"></apexchart>
  </div>
  </div>
</template>

<script>
export  default {


data() {
return {
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  chartOptions: {
    chart: {
      type: 'polarArea',
    },
    stroke: {
      colors: ['#fff']
    },
    fill: {
      opacity: 0.8
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
}
}
}

</script>


