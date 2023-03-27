<template>
    <div>
      <h1>Posts一覧</h1>
    </div>
    <div>
    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading...</p>
    <button @click="refresh()">再取得</button>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const {
  data: posts,
  error,
  pending,
  refresh,
} = await useLazyAsyncData('posts', () =>
  $fetch('https://jsonplaceholder.typicode.com/posts/')
);
</script>

