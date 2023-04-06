<template>
  <v-app id="inspire">

    <v-app-bar :elevation="1" class="px-3" color="white">
      <v-app-bar-title>Azure OpenAI Demo</v-app-bar-title>
      <v-tabs centered color="grey-darken-2">
        <v-tab to="/">AOAI Demo</v-tab>
        <v-tab to="/about">OpenID Demo</v-tab>
        <v-tab to="/sample">AOAI Demo2</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <!-- <v-btn variant="text" icon="mdi-wrench" @click.stop="config_onClick"></v-btn> -->
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
