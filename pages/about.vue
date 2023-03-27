<template>
    <h1>About Page</h1>
    <div>
      <img src="~/assets/vue.png" alt="Nuxt3 Icon" />
      <img src="/vue.png" alt="Nuxt3 Icon" />
    </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: 'auth',
});
</script>