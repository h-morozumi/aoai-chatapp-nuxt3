<template>
    <h1>Hello Page</h1>
    <div>
        <button @click="enableCustomLayout">Update layout</button>
    </div>
    <div>
        <div>Count:{{ count }}</div>
        <div>
            <button @click="() => inc()">increase</button>
            <button @click="() => dec()">decrease</button>
        </div>
    </div>
    <div>
        <h2>{{ $hello('World2') }}</h2>
    </div>
</template>

<script setup>
const { count, inc, dec } = useCounter(100);
const { $hello } = useNuxtApp();

function enableCustomLayout() {
  setPageLayout('custom');
}

definePageMeta({
  layout: false,
});
</script>