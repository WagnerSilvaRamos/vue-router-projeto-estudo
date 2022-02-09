<template>
  <div id="app">
    <TheNavigation />
    <section class="container" id="main">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </section>
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation";

export default {
  components: {
    TheNavigation
  }
};
</script>

<style>
body,
html {
  font-family: "Helvetica Neue", Arial, sans-serif;
}

ul.pagination li{ padding: 0.5rem 0.8rem; background: #686eee; text-align: center;font-family: 'Helvetica Neue', sans-serif; margin: 0 0.2rem; border-radius: 0.3rem; color: #ff}
.pagination li.active{ padding: 0.5rem 0.8rem; background: #222cf0; text-align: center;font-family: 'Helvetica Neue', sans-serif;font-weight: bold;color: #fff}
#app {
}
.navbar {
  background: #f6f7f7;
  box-shadow: 0 4px 2px -2px #f5f5f5;
}
.navbar a {
  text-decoration: none;
  color: #0ead2f;
}
.navbar a:hover {
  text-decoration: none !important;
  color: #72c6e9;
  transition: all 0.3s linear;
}
.navbar-light .navbar-brand {
  color: #0ead2f !important;
}
a.navbar-brand img {
  padding-right: 1rem;
}
#main {
  margin: 8rem auto 0 auto;
  width: 100%;
}
.router-link-active,
a:active {
  color: #72c6e9 !important;
}

img {
  max-width: 100%;
  border-radius: 0.3rem;
  border: none;
}
.card {
  border: none !important;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
h1 {
  padding-left: 1.2rem;
  color: #e76a38;
  display: block !important;
  width: 100%;
}
h2 {
  display: flex;
  justify-content: center;
  color: #4bb6ee;
  text-decoration: none;
}
#experience {
  margin-top: 2rem;
}
.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.input {
  border: 1px solid green;
  padding: 10px;
  margin-bottom: 20px;
}
.btn {
  background-color: green;
  color: white;
  padding: 10px;
}

p {
  font-size: 1.2rem;
  color: #999;
  font-weight: 300;
}

@media (max-width: 500px) {
  a.navbar-brand img {
    padding-right: 1rem;
    max-width: 3rem;
  }
  .navbar-light .navbar-brand {
    font-size: 1rem;
  }
  .navbar-light .navbar-toggler {
    background: #49ce3b;
    padding: 0.25rem 0.5rem;
  }
}
</style>
