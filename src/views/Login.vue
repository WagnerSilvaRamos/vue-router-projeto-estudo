<template>
  <div class="login">
    <h1 class="initial">Login</h1>
    <form id="app" @click="checkForm">
      <div class="form">
        <label for="username">Username</label>
        <input
          v-model="newUser.username"
          type="text"
          name="username"
          class="input"
        />
        <label for="password">Password</label>
        <input v-model="newUser.password" type="password" class="input" />
        <input type="submit" class="btn" value="Login" @click="postData" />
        <div class="errors">
          <div v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import store from "@/store";
export default {
  data() {
    return {
      errors: [],
      newUser: {
        username: null,
        password: null
      }
    };
  },

  mounted() {
    if (localStorage.username) {
      this.username = localStorage.username;
    }
    if (localStorage.password) {
      this.password = localStorage.password;
    }
  },

  methods: {
    //localsotrage save use this function persist
    /*persist() {
        localStorage.username = this.newUser.username;
        localStorage.password = this.newUser.password;
      },*/

    /*login() {
      store.user = this.newUser.username;
      const redirectPath = this.$route.query.redirect || "/";
      this.$router.push("/dashboard");
  },*/

    checkForm: function(e) {
      if (this.newUser.username && this.newUser.password) {
        return true;
         this.$router.push({path: '/dashboard'});

      }

      this.errors = [];

      if (!this.newUser.username) {
        this.errors.push("Name is required.");
      }
      if (!this.newUser.password) {
        this.errors.push("Password is  required.");
      }

      e.preventDefault();




      //(this.newUser.username = ""), (this.newUser.password = "");
    },

    //get data json
    postData() {
      const data = this.newUser;
      //alert(JSON.stringify(data));
      store.user = this.newUser.username;
      const redirectPath = this.$route.query.redirect || "/";
      this.$router.push(redirectPath);


    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
input {
  border-radius: 0.3rem;
  border: #999 1px solid;
  color: #999;
}
label {
  color: #72c6e9;
  font-size: 1.1rem;
}
.form input[type="submit"] {
  background: #0ead2f;
  color: #fff;
  text-align: center;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 18rem;
  font-size: 1.1rem;
  padding: 0.5rem 1.2rem;
}
.errors {
  display: flex;
  justify-content: center;
  margin: 3rem auto 0 auto;
  text-align: center;
}
.errors ul {
  margin: 0;
  padding: 0;
  list-style: none;
  color: #cc1f1f;
  font-weight: 400;
}
</style>
