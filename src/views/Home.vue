<template>
  <div class="home">
    <h1 class="initial">All Destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
        >
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug }
            }"
          >
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import store from "@/store.js";
export default {
  name: "home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
<style>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 300px;
}
.destinations {
  display: flex;
  justify-content: space-evenly;
}
.destinations a {
  color: lightseagreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: none;
}

.destinations a h2 {
  text-decoration: none;
  margin-bottom: 1rem;
}
h1.initial {
  margin: 0 auto 3rem auto;
  display: block;
  text-align: center;
}
</style>
