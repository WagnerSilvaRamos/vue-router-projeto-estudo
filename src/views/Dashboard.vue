/* eslint-disable */
<template>
  <section>
    <div id="vue-root">
      <div class="container">
        <div class="row">
          <h1>Dashboard</h1>
            <Table/>
            <Pie/>
          <Columns/>
          <Polar/>
          <Lines/>
    </div>
    </div>
    </div>
  </section>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import  Table from '@/components/Table'
import  Pie from '@/components/Charts/Pie'
import  Columns from '@/components/Charts/Columns'
import  Polar from '@/components/Charts/Polar'
import  Lines from '@/components/Charts/Lines'

export default {
  components: {
    apexchart: VueApexCharts,
    Pie,
    Columns,
    Polar,
    Lines,
    Table
  }
};
</script>

