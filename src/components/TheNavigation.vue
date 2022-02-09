<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img :src="logo" alt="The Vue School Travel App" />The Vue Travel App</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flexl">
          <li class="links">
            <router-link to="/"> Home </router-link>
          </li>
          <li
            v-for="destination in destinations"
            :key="destination.name"
            class="links"
          >
            <router-link
              :to="{
                name: 'DestinationDetails',
                params: { slug: destination.slug }
              }"
            >
              {{ destination.name }}
            </router-link>
          </li>
          <li class="links">
            <router-link to="/user">Dashboard</router-link>
          </li>
        </ul>
      </div>
      <!--end .collapse-->
    </div>
    <!--end .container-->
  </nav>
</template>
<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: store.destinations,
      logo: require("@/assets/airplane.png")
    };
  }
};
</script>
<style scoped>
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: none;
}
</style>
