<template>
    <h1>User Listページ</h1>
    <div>
        <p>Count:{{ counter }}</p>
    </div>
</template>

<script setup>
const counter = useCounter();
</script>