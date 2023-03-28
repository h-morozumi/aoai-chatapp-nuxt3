<template>
    <!-- User Template -->
    <div class="py-8 flex flex-wrap md:flex-nowrap bg-white">
    <div class="md:w-40 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span class="font-semibold title-font text-gray-700">You</span>
    </div>
    <div class="md:flex-grow">
        <p class="leading-relaxed">
            {{ userMessage }}
        </p>
    </div>
    </div>
</template>

<script setup>
const props = defineProps({
    userMessage: String,
});
</script>