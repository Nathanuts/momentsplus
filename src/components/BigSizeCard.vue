<template>
  <v-card class="mx-3 rounded-xl" max-width="374" height="100%" :href="this.news_url" target="_blank">
    <v-img
      v-if="this.randomPictureOrCloudPicture"
      height="250"
      :src="getRandomPictureOrCloudPictureURL(this.picture_url)" 
    ></v-img>
    <v-img
      v-else
      height="250"
      :src="require('@/assets/' + this.picture_url + '')"
    ></v-img>

    <v-card-title v-if="this.news_url !== '' && this.news_url !== null && this.news_url !== undefined " class="subtitle-1 font-weight-black">{{title}}</v-card-title>
    <v-card-title v-else class="subtitle-1 font-weight-black">{{title}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">{{rating}}</div>
      </v-row>

      <div class="my-4 subtitle-1">{{subtitle}}</div>

      <div>
        {{text}}
      </div>
    </v-card-text>
  </v-card>
</template>
      
<script>

export default {
  name: "BigSizeCard",
  props: {
    picture_url: String,
    title: String,
    rating: String,
    subtitle: String,
    text: String,
    randomPictureOrCloudPicture: Boolean,
    news_url: String,
  },
  methods: {
    getRandomPictureOrCloudPictureURL(pic_url){
      //https://picsum.photos/200/300
      //https://source.unsplash.com/featured/?{KEYWORD},{KEYWORD}
      //https://loremflickr.com/320/240/finance?random=
      if(pic_url != '' && pic_url != null && pic_url != undefined){
        return pic_url
      }else{
        return "https://source.unsplash.com/featured/?finance,business," + Math.floor(Math.random()*101)
      }
    }
  },

  mounted(){
    
},
};
</script>