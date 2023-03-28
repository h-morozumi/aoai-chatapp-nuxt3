<template>
    <h1>Hello Page</h1>
    <div>
        <button @click="enableCustomLayout">Update layout</button>
    </div>
    <!-- <div>
        <div>Count:{{ count }}</div>
        <div>
            <button @click="() => inc()">increase</button>
            <button @click="() => dec()">decrease</button>
        </div>
    </div> -->
    <div>
        <h2>{{ $hello('World2') }}</h2>
    </div>
    <div>
        <p>Count: {{ counter }}</p>
        <div><button @click="counter++">+</button></div>
    </div>
    <div>
        でーた
        <h2>{{ data }}</h2>
    </div>
    <div>
        <Hello message1="hoge" message2="fuge" message3="hage" />
    </div>
</template>

<script setup>
const { count, inc, dec } = useCounter(100);
const { $hello } = useNuxtApp();
const counter = useCounter();
const { data } = useFetch('/api/hello');

function enableCustomLayout() {
  setPageLayout('custom');
}


</script>