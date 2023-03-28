<template>
<div>
    {{ message1 }}
</div>
<div>
    {{ message2 }}
</div>
<div>
    {{ message3 }}
</div>
</template>

<script setup>
const props = defineProps({
    message1: String,
    message2: String,
    message3: String,
});
</script>