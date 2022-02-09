import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "jquery";

//Vue datatable
 import 'vuejs-datatable/dist/themes/bootstrap-3.esm';
import { VuejsDatatableFactory } from "vuejs-datatable";
Vue.use( VuejsDatatableFactory );

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon);




VuejsDatatableFactory.useDefaultType( false )
    .registerTableType( 'datatable', tableType => tableType.mergeSettings( {
        table: {
            class:   'table table-hover table-striped',
            sorting: {
                sortAsc:  '<i class="fas fa-sort-amount-up" title="Sort ascending"></i>',
                sortDesc: '<i class="fas fa-sort-amount-down" title="Sort descending"></i>',
                sortNone: '<i class="fas fa-sort" title="Sort"></i>',
            },
        },
        pager: {
            classes: {
                pager:    'pagination text-center',
                selected: 'active',
            },
            icons: {
                next:     '<i class="fas fa-chevron-right" title="Next page"></i>',
                previous: '<i class="fas fa-chevron-left" title="Previous page"></i>',
            },
        },
    } ) );



//charts
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts);




Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
