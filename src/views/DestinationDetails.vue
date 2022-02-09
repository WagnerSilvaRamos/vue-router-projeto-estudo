<template>
  <div>
    <GoBack />
    <h1>
      {{ destination.name }}
    </h1>
    <section class="destinations">
      <div class="destination-details">
        <div class="row">
          <div class="col-md-5 col-sm-1">
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </div>
          <div class="col-md-7 col-sm-1">
            <p>{{ destination.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards" id="experience">
        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'experienceDetails',
              params: { experienceSlug: experience.slug },
              hash: '#experience'
            }"
          >
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
            />
            <span class="card__text">
              {{ experience.name }}
            </span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>
<script>
import store from "@/store";
import GoBack from "@/components/GoBack";
export default {
  components: {
    GoBack
  },
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experiences {
  padding: 40px 0;
}
.destination-details {
  display: flex;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  font-weight: bold;
  text-shadow: #333 1px 1px 1px;
  text-decoration: none;
}

#experience {
  margin-bottom: 3rem;
}

@media (max-width: 500px) {
  .card {
    padding: 0 20px;
    position: relative;
    margin: 0 auto 1rem auto;
    justify-content: center;
    max-width: 100%;
  }
  .cards {
    display: flex;
    flex-direction: column;
  }

  .cards img {
    max-height: auto;
    max-width: 100%;
  }
}
</style>
