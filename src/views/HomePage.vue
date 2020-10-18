<template>
  <v-row justify="space-around">
    <v-container>
      <v-row>
        <v-col xs="12" sm="9" md="5">
          <v-card class="rounded-xl" outlined height="100%">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline">Welcome to Moments+</div>
                <v-list-item-title class="headline mb-1">
                  <v-row>
                    <v-col cols="6">
                  <v-avatar>
                    <img v-if="user.user_id !== '2'" src="../assets/2a.jpg" alt="Main Profile" />
                    <img v-else src="../assets/2g.jpg" alt="Main Profile" />
                  </v-avatar>
                  {{ this.user.name }}
                  
                    </v-col>
                    <v-col cols="3"></v-col>
                    <v-col cols="3">
                  <v-img class="mr-2" max-height="65" max-width="65" src="../assets/qr.png"></v-img>
                    </v-col>
                  </v-row>
                </v-list-item-title>
                <span class="caption">Last Logged On: {{ this.lastLoggedIn }}</span>
                <br />
                <v-spacer></v-spacer>
                <span class="caption">Your Family Members:</span>
                <v-row>
                  <v-col xs="3" sm="2" md="1" class="mr-1">
                    <v-avatar size="36">
                      <img src="../assets/2b.jpg" alt="Family #1" />
                    </v-avatar>
                  </v-col>
                  <v-col xs="3" sm="2" md="1" class="mr-1">
                    <v-avatar size="36">
                      <img src="../assets/2c.jpg" alt="Family #2" />
                    </v-avatar>
                  </v-col>
                  <v-col xs="3" sm="2" md="1" class="mr-1">
                    <v-avatar size="36">
                      <img src="../assets/2d.jpg" alt="Family #3" />
                    </v-avatar>
                  </v-col>
                  <v-col xs="3" sm="2" md="1" class="mr-1">
                    <v-avatar size="36">
                      <img src="../assets/2e.jpg" alt="Family #4" />
                    </v-avatar>
                  </v-col>
                  <v-col xs="12" sm="2" md="1" class="mr-2">
                    <v-avatar size="36">
                      <img src="../assets/2f.jpg" alt="Family #5" />
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-list-item-content>
              
            </v-list-item>
          </v-card>
        </v-col>
        <v-col xs="12" sm="9" md="6">
          <v-card class="rounded-xl" outlined height="100%" href="/dashboard">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-card-title v-bind="attrs" v-on="on">
                  <v-icon color="purple lighten-2" class="mr-6" size="50">
                    mdi-monitor-dashboard
                  </v-icon>
                  <v-row align="start">
                    <div class="overline">Dashboard @ a Glance</div>
                  </v-row>
                  <v-spacer></v-spacer>
                  <v-btn icon class="align-self-start" size="28">
                    <v-icon>mdi-arrow-right-thick</v-icon>
                  </v-btn>
                </v-card-title>
              </template>
              <span>Find out more about your CPF health!</span>
            </v-tooltip>
            <v-row class="ml-8"
              ><div class="text-h6 font-weight-black">
                <span>CPF HEALTH OVERVIEW</span>
              </div></v-row
            >
            <v-sparkline
              :gradient="gradient"
              :line-width="width"
              :padding="padding"
              :smooth="true"
              :value="value"
              auto-draw
            ></v-sparkline>
          </v-card>
        </v-col>
        <v-col xs="12" sm="9" md="1">
          <v-card class="rounded-xl" outlined height="100%">
            <v-card-text>
              <v-row>
                <v-icon color="blue darken-2">mdi-cog-outline</v-icon>

                <v-spacer></v-spacer>

                <v-icon color="purple darken-2"> mdi-account </v-icon>
              </v-row>
              <br />
              <v-row>
                <v-icon color="teal darken-2"> mdi-email </v-icon>
                <v-spacer></v-spacer>

                <v-icon color="pink darken-2"> mdi-phone </v-icon>
              </v-row>
              <br />
              <v-row>
                <v-icon color="orange darken-2"> mdi-message-text </v-icon>
                <v-spacer></v-spacer>

                <v-icon color="cyan darken-2">mdi-calendar</v-icon>
              </v-row>
              <br />
              <v-row>
                <v-icon color="pink darken-2"> mdi-heart-pulse </v-icon>

                <v-spacer></v-spacer>
                <v-icon color="lime darken-2">mdi-compass</v-icon>
              </v-row>
              <br />
              <v-row>
                <v-icon color="green darken-2"> mdi-call-split </v-icon>

                <v-spacer></v-spacer>
                <v-icon color="grey darken-2">mdi-logout</v-icon>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
      <v-card class="rounded-xl">
        <v-card-title>
          <v-row>
            <div class="px-2 py-1 overline">
              <span style="font-size: 150%"
                ><v-icon color="primary">mdi-rocket</v-icon> Your Most
                Frequently Used Services</span
              >
            </div>
          </v-row>
          <v-spacer></v-spacer>
          <v-btn icon class="align-self-start" size="28">
            <v-icon>mdi-arrow-right-thick</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              v-for="(service, index) in this.frequentlyUsedServices"
              :key="(service, index)"
              xs="12"
              sm="6"
              md="3"
            >
              <MidSizeCard
                :title="service.name"
                :icon="service.icon"
                :color="service.color"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      </v-col>
      </v-row>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
      <v-card class="rounded-xl">
        <v-card-title>
          <v-row>
            <div class="px-2 py-1 overline">
              <span style="font-size: 150%"
                ><v-icon color="teal">mdi-glasses</v-icon> What Others Are
                Looking At</span
              >
            </div>
          </v-row>
          <v-spacer></v-spacer>
          <v-btn icon class="align-self-start" size="28">
            <v-icon>mdi-arrow-right-thick</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              v-for="(service, index) in this.serviceRecommendations"
              :key="(service, index)"
              xs="12"
              sm="6"
              md="3"
            >
              <MidSizeCard
                :title="service.name"
                :icon="service.icon"
                :color="service.color"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
      <v-card class="rounded-xl">
        <v-card-title>
          <v-row align="start">
            <div class="px-2 py-1 overline">
              <span style="font-size: 150%"
                ><v-icon color="red">mdi-heart</v-icon> Newsfeed Just For
                You</span
              >
            </div>
          </v-row>
          <v-spacer></v-spacer>
          <v-btn icon class="align-self-start" size="28">
            <v-icon>mdi-arrow-right-thick</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              xs="12"
              sm="6"
              md="3"
              v-for="(news, index) in this.curatedNews"
              :key="(news, index)"
            >
              <BigSizeCard
                :title="news.Title.slice(0, 45) + '...'"
                :text="news.Title"
                :news_url="news.Url"
                :randomPictureOrCloudPicture="true"
                :rating="'4.5 stars (' + Math.floor(Math.random() * 1000) + ')'"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
      <v-card class="rounded-xl">
        <v-card-title>
          <v-row>
            <div class="px-2 py-1 overline">
              <span style="font-size: 150%"
                ><v-icon color="purple">mdi-compass</v-icon> Explore Workshops,
                Courses, Enrichment Classes on SkillsFuture</span
              >
            </div>
          </v-row>
          <v-spacer></v-spacer>
          <v-btn icon class="align-self-start" size="28">
            <v-icon>mdi-arrow-right-thick</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col xs="12" sm="6" md="3" 
              v-for="(course, index) in this.curatedCourses"
              :key="(course, index)">
              <BigSizeCard
                :title="course.Course.slice(0, 45) + '...'"
                :rating="'4.5 stars (' + Math.floor(Math.random() * 1000) + ')'"
                :text="course.Course"
                :news_url="course.URL"
                :randomPictureOrCloudPicture="true"
                :picture_url="course.ImageURL"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
  </v-row>
</template>

<script>
import MidSizeCard from "@/components/MidSizeCard";
import BigSizeCard from "@/components/BigSizeCard";

const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  name: "HomePage",
  components: {
    MidSizeCard,
    BigSizeCard,
  },

  mounted() {
    this.$http
      .get(`/newsfeeds/newsfeeds_categories/${this.user.categories}`)
      .then((response) => {
        let news = response.data.result;
        this.curatedNews = this.getCuratedNewsOrCourses(news);
      })
      .catch((error) => {
        console.log(error);
      });

    this.$http
      .get(`/courses/category/${this.user.categories}/industry/${this.user.industry}`)
      .then((response) => {
        let courses = response.data.result;
        this.curatedCourses = this.getCuratedNewsOrCourses(courses);
      })
      .catch((error) => {
        console.log(error);
      });

    this.$http
      .get(`/svcrec/${this.user.user_id}`)
      .then((response) => {
        let frequentlyUsedServicesArr = response.data.frequently_used_services.slice(
          0,
          4
        );
        let serviceRecommendationsArr = response.data.service_recommendations.slice(
          0,
          4
        );
        this.$http.get("/services").then((res) => {
          let services = res.data.result;
          let indexA = 0;
          let indexB = 0;
          services.map((service) => {
            if (frequentlyUsedServicesArr.includes(service.service_id)) {
              this.frequentlyUsedServices.push({
                name: service.serviceName,
                icon: this.serviceIcons[service.service_id - 1],
                color: this.colorsA[indexA],
              });
              indexA += 1;
            }
            if (serviceRecommendationsArr.includes(service.service_id)) {
              this.serviceRecommendations.push({
                name: service.serviceName,
                icon: this.serviceIcons[service.service_id - 1],
                color: this.colorsB[indexB],
              });
              indexB += 1;
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data: () => ({
    curatedNews: [],
    curatedCourses: [],
    colorsA: [
      "orange lighten-2",
      "purple lighten-2",
      "green lighten-2",
      "blue lighten-2",
    ],
    colorsB: [
      "teal lighten-2",
      "blue-grey lighten-2",
      "red lighten-2",
      "pink lighten-2",
    ],
    serviceIcons: [
      "mdi-calculator",
      "mdi-history",
      "mdi-calculator-variant",
      "mdi-folder-star",
      "mdi-folder-plus",
      "mdi-medical-bag",
      "mdi-monitor-dashboard",
      "mdi-lifebuoy",
      "mdi-folder-plus",
      "mdi-currency-usd",
      "mdi-betamax",
      "mdi-face-agent",
      "mdi-chart-donut",
      "mdi-currency-usd",
      "mdi-home",
      "mdi-newspaper-variant",
      "mdi-gold",
      "mdi-calculator",
      "mdi-currency-usd",
      "mdi-shield-car",
      "mdi-frequently-asked-questions",
      "mdi-cube-scan",
      "mdi-account-clock",
      "mdi-form-select",
      "mdi-toolbox-outline",
      "mdi-history",
      "mdi-card-account-mail",
      "mdi-cube-scan",
      "mdi-cube-scan",
      "mdi-cube-scan",
    ],
    lastLoggedIn: new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000)
      .toUTCString()
      .slice(0, 16),
    frequentlyUsedServices: [],
    serviceRecommendations: [],
    user: JSON.parse(localStorage.getItem("user")),
    gradient: gradients[4],
    gradients,
    padding: 18,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2,
  }),

  methods: {
    getRandomPictureURL() {
      return (
        "https://source.unsplash.com/featured/?elderly,man,old" +
        Math.floor(Math.random() * 101)
      );
    },
    getCuratedNewsOrCourses(items) {
      let randomItems = [];
      let indexTracker = [];
      let index = null;
      for (let i = 0; i < 4; i++) {
        do {
          index = Math.floor(Math.random() * 4);
        } while (indexTracker.includes(index));
        indexTracker.push(index);
        let item = items[index];
        randomItems.push(item);
      }
      return randomItems;
    },
  },
};
</script>


<style scoped>
.card-actions {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
