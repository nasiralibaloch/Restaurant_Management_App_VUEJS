<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      console.warn("signup", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status==201) {
        alert('sign up is done');
      }
      
    },
  },
};
</script>
<template>
  <div class="container text-center mt-5">
    <img class="logo mb-3" src="../assets/logo.jpeg" alt="Logo" />
    <h1 class="mb-4">Sign Up</h1>

    <div class="register card p-4 shadow mx-auto" style="max-width: 500px">
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter name"
          v-model="name"
        />
      </div>
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
          v-model="password"
        />
      </div>
      <button v-on:click="signup" class="btn btn-primary w-100">Sign Up</button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 100px;
}
</style>
