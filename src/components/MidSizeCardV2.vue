<template>
  <v-card class="mx-3 rounded-xl" height="100%" :href="url">
    <v-img
      height="150"
      :src="require('@/assets/' + this.picture_url + '')"
    ></v-img>
    <!-- <v-card-title class="subtitle-2 font-weight-bold text-capitalize">{{title}}</v-card-title> -->
    <v-card-subtitle class="caption">{{text}}</v-card-subtitle>
    <!-- <v-card-actions>
      <v-btn color="grey darken-2" text :href="url">Explore</v-btn>
    </v-card-actions> -->
  </v-card>
</template>
      
<script>

export default {
  name: "MidSizeCardV2",
  props: {
    picture_url: String,
    url: String,
    text: String,
    title: String,
  },
};
</script>