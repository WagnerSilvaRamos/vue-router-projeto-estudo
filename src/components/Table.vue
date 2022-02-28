<template>
  <div>
    <div class="col-xs-12 col-md-12">

  <div class="form-group">
    <label for="filter">&nbsp;</label>
    <input type="text" class="form-control" v-model="filter" placeholder="Filter" @keydown="$event.stopImmediatePropagation()" id="filter">
  </div>
    </div>

  <div class="col-xs-12 table-responsive">
    <bootstrap-3-datatable  :columns="columns" :data="rows" :filter="filter" :per-page="10"></bootstrap-3-datatable>
    <datatable-pager v-model="page" type="short"></datatable-pager>
  </div>

  </div>
</template>

<script>

export  default {
  data() {
    return{
      page:1,
      filter:'',
      columns: [
        {label: 'id', field: 'id'},
        {label: 'Username', field: 'user.username', headerClass: 'class-in-header second-class'},
        {label: 'First Name', field: 'user.firstName'},
        {label: 'Last Name', field: 'user.lastName'},
        {label: 'Email', field: 'user.email'},
        {label: 'Address', representedAs: ({address, city, state}) => `${address}<br />${city}, ${state}`, interpolate: true}
      ],
      rows: [

        {
          id: 1,
          user: {
            username: "dprice0",
            firstName: "Daniel",
            lastName: "Price",
            email: "dprice0@blogs.com"
          },
          address: "3 Toban Park",
          city: "Pocatello",
          state: "Idaho"
        },{
          id: 2,
          user: {
            username: "Wagner",
            firstName: "Wagner",
            lastName: "Ramos",
            email: "wramos0@blogs.com"
          },
          address: "3 Toban Park",
          city: "Pocatello",
          state: "Hannover"
        },
        {
          id: 3,
          user: {
            username: "Svetlana",
            firstName: "Svetlana",
            lastName: "Kurkov",
            email: "svet@gmail.com"
          },
          address: "3 Toban Park",
          city: "Moscow",
          state: "Moscow"
        },
        {
          id: 4,
          user: {
            username: "Mary",
            firstName: "Dayse",
            lastName: "Hudson",
            email: "mary@gmail.com"
          },
          address: "3 Toban Park",
          city: "Oregon",
          state: "Texas"
        },
        {
          id: 5,
          user: {
            username: "Jose",
            firstName: "Jose",
            lastName: "Ramos",
            email: "jramos@gmail.com"
          },
          address: "50 hassenhof",
          city: "Dortmund",
          state: "North Rhine – Westphalia"
        }
        //...
      ],

    }
  }
}
</script>


<style>

nav{ text-align: center; display: flex;justify-content: center; margin-bottom: 3rem}
table.table{ text-align: center !important}
table{ margin: 0 auto 3rem auto;max-width: 70rem; font-family: 'Helvetica Neue', sans-serif; text-align: center}
table thead, tbody, tfoot, tr, td, th span{ padding: 0.5rem; color: green}
table tbody tr td{ text-align: center!important; padding: 0.5rem;border: #f5f5f5 1px solid}
table tr td{ text-align: center!important;}
.form-group{ margin: 3rem 0}
input.form-control{margin: 0 0 0 5rem}



.apexcharts-canvas{display: flex; justify-content: center; margin: 5rem}
.content_pie{border-radius: 0.3rem; border: #f5f5f5 1px solid;display: flex; justify-content: center;width: 30rem; max-width: 100%; margin:  0 5rem; box-shadow: 1px 1px 1px #f5f5f5}

ul.pagination li span i{ display: none}

@media screen and (max-width: 500px){
  .form-group{ margin: 1rem 0}
  input.form-control{margin: 0 auto}

}
</style>