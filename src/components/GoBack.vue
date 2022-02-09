<template>
  <span class="go-back">
    <button @click="goBack">Go Back</button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
button {
  border: 0;
  background: #1aa7f0;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 0.3rem;
  color: #fff;
  font-family: inherit;
  padding: 0.5rem 0.7rem;
}

@media (max-width: 500px) {
  .go-back {
    position: fixed;
    bottom: 0.5rem;
    right: 1rem;
  }
  button {
    font-size: 0.8rem;
    padding: 0.5rem 0.7rem;
  }
}
</style>
