<template>
  <v-card class="mx-3 rounded-xl" max-width="345" align="center" justify="center" height="100%">
    <v-avatar class="rounded-lg mt-8" tile size="100" :color= "this.color"
      ><v-icon x-large style="color: white">{{icon}}</v-icon></v-avatar
    >
    <v-card-title></v-card-title>
    <div class="subtitle-2 ma-1"><span> {{title}} </span></div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-icon :color= "this.color">mdi-arrow-right</v-icon>
    </v-card-actions>
  </v-card>
</template>
      
<script>
export default {
  name: "MidSizeCard",
  props: {
    title: String,
    icon: String,
    color: String,
  },
  data() {
    return {};
  }
};
</script>