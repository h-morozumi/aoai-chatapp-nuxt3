<template>
  <div>
    <h1>Markdown test</h1>
    <Markdown :source="content" />
  </div>
</template>

<script setup>
import Markdown from 'vue3-markdown-it';
import 'highlight.js/styles/monokai.css';

const props = defineProps({
  content: String
});

const content = '# hello \n - one \n - two';
</script>