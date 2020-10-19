<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  }
};
</script>

<style>
#app {
  background: linear-gradient(to right, rgba(226,226,226,1) 0%, rgba(254,254,254,1) 80%);
}
</style>