<script setup>
import { ref,onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");

const signup = async () => {
  console.warn("signup", name.value, email.value, password.value);

  try {
    const result = await axios.post("http://localhost:3000/users", {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    console.warn(result);
    if (result.status === 201) {
      localStorage.setItem("user-info", JSON.stringify(result.data));
      router.push({ name: 'home' });
    }
  } 
  catch (error) {
    console.error("Signup failed:", error);
  }
}
onMounted (() =>{
let user=localStorage.getItem('user-info');
if (user) {
  router.push({name:'home'}); 
}
});
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
      <button @click="signup" class="btn btn-primary w-100">Sign Up</button>
      <p>
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 100px;
}
</style>
