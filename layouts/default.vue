<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" color="white" flat density="compact">
      <v-spacer></v-spacer>

      <v-tabs centered color="grey-darken-2">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
        <v-tab to="/sample">Sample</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <slot />
    </v-main>
  </v-app>
</template>
<script setup>

</script>

<style scoped>
</style>
