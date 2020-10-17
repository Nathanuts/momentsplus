<template>
  <v-col xs="12" sm="6" md="3">
    <v-card class="pa-4 mr-2 rounded-xl" outlined>
      <div class="overline mb-2 font-weight-medium"><v-icon class="mr-2" :color="this.color" small >{{icon}}</v-icon><span style="vertical-align:middle">{{title}}</span></div>
      <div v-if="!this.simpleCard" class="subtitle-2 text-capitalize"><b>Date:</b> {{item.date}}</div>
      <div v-if="!this.simpleCard" class="subtitle-2 text-capitalize"><b>Category:</b> {{item.type}}</div>
      <div v-if="!this.simpleCard" class="subtitle-2 text-capitalize"><b>Amount:</b> $ {{item.amount}}</div>
      <div v-else class="subtitle-2 font-weight-bold text-capitalize">$ {{amount}}</div>
    </v-card>
  </v-col>
</template>
      
<script>
export default {
  name: "SmallSizeCard",
  props: {
    color: String,
    title: String,
    item: Object,
    amount: String,
    icon: String,
    simpleCard: Boolean,
  },
};
</script>