<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  const user = localStorage.getItem('user-info');
  if (!user) {
    router.push({ name: 'signup' });
  }
});
</script>

<template>
  <h1>Hello! Welcome to Home Page</h1>
</template>
