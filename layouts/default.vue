<template>
  <v-app id="inspire">

    <v-app-bar :elevation="1" class="px-3" color="white">
      <v-app-bar-title>Azure OpenAI Demo</v-app-bar-title>
      <v-tabs centered color="grey-darken-2">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
        <v-tab to="/sample">Sample</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn variant="text" icon="mdi-wrench" @click.stop="config_onClick"></v-btn>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
 const drawer = useState('gptResponse',() => false);
 const config_onClick = () => {
   drawer.value = !drawer.value;
 }
</script>

<style scoped>
</style>
