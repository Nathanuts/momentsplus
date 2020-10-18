<template>
  <v-row justify="space-around">
    <v-container>
      <v-row>
        <v-col xs="12" sm="9" md="5">
          <v-card class="rounded-xl" outlined height="100%">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Welcome to Moments+</div>
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
                <span class="caption"
                  >Last Logged On: {{ this.lastLoggedIn }}</span
                >
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
          <v-card class="rounded-xl" outlined height="100%" href="/home">
            <v-card-title>
              <v-icon color="green lighten-2" class="mr-6" size="50">
                mdi-rocket
              </v-icon>
              <v-row align="start">
                <div class="overline">Your CPF @ a Glance</div>
              </v-row>
              <v-spacer></v-spacer>
              <v-btn icon class="align-self-start" size="28">
                <v-icon>mdi-arrow-right-thick</v-icon>
              </v-btn>
            </v-card-title>

            <v-sparkline
              :gradient="gradient"
              :line-width="width"
              :fill="true"
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
      <div class="text-h4 font-weight-bold">My Home</div>
      <v-row>
        <v-col xs="12" sm="5" md="5" fluid>
          <v-card class="rounded-xl">
        <v-card-title>
          <div class="px-2 py-1 overline">
            <span style="font-size: 150%"
              ><v-icon color="blue-grey lighten-1">mdi-home-city</v-icon>
              Upcoming BTO Exercises
            </span>
          </div>
        </v-card-title>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-card
              class="rounded-xl"
            color="#952175"
            dark
            max-height="75px"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="'Bishan'"
                ></v-card-title>
                <v-card-subtitle class="caption">2-Room Flexi, 3-Room, 4-Room</v-card-subtitle>
              </div>
              <v-avatar
                class="ma-3"
                size="55px"
                tile
              >
              <v-img :src="this.getRandomPictureURL()"></v-img>
              </v-avatar>
            </div>
          </v-card>
            </v-col>
            <v-col cols="12">
              <v-card
              class="rounded-xl"
            color="#157087"
            dark
            max-height="75px"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="'Toa Payoh'"
                ></v-card-title>
                <v-card-subtitle class="caption">4-Room, 5-Room</v-card-subtitle>
              </div>
              <v-avatar
                class="ma-3"
                size="55px"
                tile
              >
              <v-img :src="this.getRandomPictureURL()"></v-img>
              </v-avatar>
            </div>
          </v-card>
            </v-col>
            <v-col cols="12">
              <v-card
              class="rounded-xl"
            color="#33691E"
            dark
            max-height="75px"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="'Punggol'"
                ></v-card-title>
                <v-card-subtitle class="caption">3-Room, 4-Room, 5-Room</v-card-subtitle>
              </div>
              <v-avatar
                class="ma-3"
                size="55px"
                tile
              >
              <v-img :src="this.getRandomPictureURL()"></v-img>
              </v-avatar>
            </div>
          </v-card>
            </v-col>
          </v-row>
          
        </v-card-text>
      </v-card>
        </v-col>
<v-col xs="12" sm="7" md="7" fluid>
          <v-card class="rounded-xl">
            <v-card-title>
              <div class="px-2 py-1 overline">
                <span style="font-size: 150%"
                  ><v-icon color="brown lighten-2">mdi-home</v-icon>
                  CPF Home Expenditure
                </span>
              </div>
            </v-card-title>
            <v-card-text>
              <MultiLineChart
                style="height: 250px"
                :chartData="multiLineData"
                :options="chartOptions"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
    <v-container>
      <v-row>
        <v-col xs="12" sm="6" md="6" fluid>
          <v-card class="rounded-xl" height="100%">
            <v-card-title>
              <div class="px-2 py-1 overline">
                <span style="font-size: 150%"
                  ><v-icon color="green darken-2">mdi-newspaper</v-icon> Curated
                  Home News For You</span
                >
              </div>
            </v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <v-card height="100%" class="rounded-xl" :href="this.curatedHomeNews[0].Url" target="_blank">
                    <v-img
                      :src="this.getRandomPictureURL()"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="150px"
                    >
                      <v-card-title class="subtitle-2">{{this.curatedHomeNews[0].Title}}</v-card-title>
                    </v-img>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card class="rounded-xl" :href="this.curatedHomeNews[1].Url" target="_blank">
                    <v-img
                      :src="this.getRandomPictureURL()"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="120px"
                    >
                      <v-card-title class="subtitle-2">{{this.curatedHomeNews[1].Title.slice(0,60)}}...</v-card-title>
                    </v-img>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card class="rounded-xl" :href="this.curatedHomeNews[2].Url" target="_blank">
                    <v-img
                      :src="this.getRandomPictureURL()"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="120px"
                    >
                      <v-card-title class="subtitle-2">{{this.curatedHomeNews[2].Title.slice(0,60)}}...</v-card-title>
                    </v-img>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xs="12" sm="6" md="6" fluid>
          <v-card class="rounded-xl" height="100%">
            <v-card-title>
              <div class="px-2 py-1 overline">
                <span style="font-size: 150%"
                  ><v-icon color="orange darken-2"
                    >mdi-frequently-asked-questions</v-icon
                  >
                  Customized Home FAQs For You</span
                >
              </div>
            </v-card-title>
            <br>
            <v-card-text>
              <v-expansion-panels focusable>
                <v-expansion-panel v-for="(item, i) in this.curatedMedicalQuestions.slice(0,6)" :key="i">
                  <v-expansion-panel-header class="font-weight-bold">{{item.Questions}}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{item.Information}}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
  </v-row>
</template>

<script>
import MultiLineChart from "@/components/MultiLineChart";

const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  name: "MyHomePage",
  components: {
    MultiLineChart,
  },

  mounted() {
    this.$http
      .get(`/home_questions/${this.user.categories}`)
      .then((response) => {
        let temp = response.data.result;
        this.curatedMedicalQuestions = temp
          .map((x) => ({sort: Math.random(), val: x}))
          .sort((x, y) => x.sort - y.sort)
          .map((x) => x.val)
      })
      .catch((error) => {
        console.log(error);
      });

    this.$http
      .get(`/homenewsfeeds/homenewsfeeds_categories/${this.user.categories}`)
      .then((response) => {
        this.curatedHomeNews = response.data.result;
      })
      .catch((error) => {
        console.log(error);
      });
      this.year = this.getYear();
      this.multiLineData.datasets = this.updateChartData(this.year);
  },

  data: () => ({
    curatedHomeNews: [],
    curatedMedicalQuestions: [],
    dropdown: false,
    selectedYear: null,
    year: 0,
    balanceHistory: {},
    multiLineData: null,
    lastLoggedIn: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)
      .toUTCString()
      .slice(0, 16),
    user: JSON.parse(localStorage.getItem("user")),
    gradient: gradients[5],
    gradients,
    padding: 18,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2,
    chartOptions: {
      legend: {
        display: false,
      },
      responsive: true,
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
      maintainAspectRatio: false,
    },
  }),

  methods: {
    getRandomDate(num) {
      return new Date(new Date().getTime() + num * 24 * 60 * 60 * 1000)
        .toUTCString()
        .slice(0, 16);
    },
    updateChartData(year) {
      let chartData = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [],
      };

      let yearData = this.user.transactions.filter((item)=>{
        return item.date.substring(0,4) === year.toString();
      })
      
      let yearDataGroupByMonth = [0,0,0,0,0,0,0,0,0,0,0,0]
      yearData.map((target) => {
        let date_array = target.date.split('-')
        let month = parseInt(date_array[1],10)
        if(target.type === 'others'){
          yearDataGroupByMonth[month-1] += target.amount
        }
      })

      let oaData = {
        backgroundColor: "#a1887f",
        borderColor: "#a1887f",
        fill: false,
        data: [],
      };
      
      oaData.data = yearDataGroupByMonth;
      chartData.datasets.push(oaData);
      this.multiLineData = chartData;
    },

    getYear() {
      let latestDate = new Date(Math.max(...this.user.transactions
        .map(element => new Date(element.date))));
      return latestDate.getFullYear()
    },

    getRandomOldManPictureURL() {
      return (
        "https://source.unsplash.com/featured/?elderly,man,old" +
        Math.floor(Math.random() * 101)
      );
    },

    getRandomPictureURL() {
      return (
        "https://source.unsplash.com/featured/?bungalow,home,house," +
        Math.floor(Math.random() * 101)
      );
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
