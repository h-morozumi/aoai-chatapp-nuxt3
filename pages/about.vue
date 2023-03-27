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

const runtimeConfig = useRuntimeConfig();
const env = process.server ? 'Server' : 'Client';
console.log(`[${env}] public.foo: ${runtimeConfig.public.foo}`);
console.log(`[${env}] secret: ${runtimeConfig.secret}`);
console.log(`[${env}] db.user: ${runtimeConfig.db?.user}`);
console.log(`[${env}] db.password: ${runtimeConfig.db?.password}`);
const { data } = useFetch('/api/chatgpt',{
  method:'POST',
  body:{
    'message': 'ほげほげ'
  }
});
console.log(data)
</script>