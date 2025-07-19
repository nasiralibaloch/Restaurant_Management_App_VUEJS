<script setup>
import axios from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";

// Reactive form fields
const email = ref("");
const password = ref("");

// Login handler
const login = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/users?email=${email.value}&password=${password.value}`
    );

    console.log("API Response:", response.data);

    if (response.data.length > 0) {
      alert("Login successful");
      // Example: Save user info to localStorage
      localStorage.setItem("user-info", JSON.stringify(response.data[0]));
      // You can redirect using router if needed
    } else {
      alert("Invalid email or password");
    }
  } catch (error) {
    console.error("Login failed:", error);
    alert("Something went wrong. Please try again.");
  }

  console.log("Email:", email.value);
  console.log("Password:", password.value);
};
</script>

<template>
  <div class="container text-center mt-5">
    <img class="logo mb-3" src="../assets/logo.jpeg" alt="Logo" />
    <h1 class="mb-4">Login</h1>

    <div class="register card p-4 shadow mx-auto" style="max-width: 500px">
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
      <button @click="login" class="btn btn-primary w-100">Log In</button>
      <RouterLink to="/signup">Sign Up</RouterLink>
    </div>
  </div>
</template>
