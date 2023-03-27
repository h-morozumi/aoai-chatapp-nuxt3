<template>
    <h1>About Page</h1>
    <p>Count:{{ counter }}</p>
    <div>
      <img src="~/assets/vue.png" alt="Nuxt3 Icon" />
      <img src="/vue.png" alt="Nuxt3 Icon" />
    </div>
</template>

<script setup>
const counter = useCounter();
definePageMeta({
  layout: false,
  middleware: 'auth',
});
</script>