<template>
  <v-row justify="space-around">
    <v-container>
      <v-row>
        <v-col xs="12" sm="9" md="5">
          <v-card class="rounded-xl" outlined height="100%">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Welcome to asdas+</div>
                <v-list-item-title class="headline mb-1">
                  <v-avatar>
                    <img src="../assets/2a.jpg" alt="Main Profile" />
                  </v-avatar>
                  {{ this.user.name }}
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
      <div class="text-h4 font-weight-bold">My Health</div>
      <v-row>
        <v-col xs="12" sm="5" md="5" fluid>
          <v-card class="rounded-xl">
            <v-card-title>
              <div class="px-2 py-1 overline">
                <span style="font-size: 150%"
                  ><v-icon color="red lighten-2">mdi-medical-bag</v-icon>
                  Upcoming Medical Appointments
                </span>
              </div>
            </v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <v-card
                    class="rounded-xl"
                    color="white darken-2"
                    max-height="75px"
                  >
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title
                          class="headline"
                          v-text="'Routine Checkup'"
                        ></v-card-title>
                        <v-card-subtitle class="caption"
                          >{{ this.getRandomDate(30) }} @ Ng Teng Fong
                          Hospital</v-card-subtitle
                        >
                      </div>
                      <v-avatar class="ma-3" size="55px">
                        <v-img :src="this.getRandomPictureURL()"></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card
                    class="rounded-xl"
                    color="white darken-2"
                    max-height="75px"
                  >
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title
                          class="headline"
                          v-text="'ENT Specialist Appointment'"
                        ></v-card-title>
                        <v-card-subtitle class="caption"
                          >{{ this.getRandomDate(60) }} @ Sengkang General
                          Hospital</v-card-subtitle
                        >
                      </div>
                      <v-avatar class="ma-3" size="55px">
                        <v-img :src="this.getRandomPictureURL()"></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card
                    class="rounded-xl"
                    color="white darken-2"
                    max-height="75px"
                  >
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title
                          class="headline"
                          v-text="'Full Body Examination'"
                        ></v-card-title>
                        <v-card-subtitle class="caption"
                          >{{ this.getRandomDate(90) }} @ Tan Tock Seng
                          Hospital</v-card-subtitle
                        >
                      </div>
                      <v-avatar class="ma-3" size="55px">
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
                  ><v-icon color="green lighten-2">mdi-cash-multiple</v-icon>
                  CPF Medical Expenditure
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
                  Medical News For You</span
                >
              </div>
            </v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <v-card height="100%" class="rounded-xl" :href="this.curatedMedicalNews[0].Url" target="_blank">
                    <v-img
                      :src="this.getRandomPictureURL()"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="150px"
                    >
                      <v-card-title class="subtitle-2">{{this.curatedMedicalNews[0].Title}}</v-card-title>
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
                  <v-card class="rounded-xl" :href="this.curatedMedicalNews[1].Url" target="_blank">
                    <v-img
                      :src="this.getRandomPictureURL()"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="120px"
                    >
                      <v-card-title class="subtitle-2">{{this.curatedMedicalNews[1].Title.slice(0,60)}}...</v-card-title>
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
                  <v-card class="rounded-xl" :href="this.curatedMedicalNews[2].Url" target="_blank">
                    <v-img
                      :src="this.getRandomPictureURL()"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="120px"
                    >
                      <v-card-title class="subtitle-2">{{this.curatedMedicalNews[2].Title.slice(0,60)}}...</v-card-title>
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
  name: "MyHealthPage",
  components: {
    MultiLineChart,
  },

  mounted() {
    this.$http
      .get(`/medical_questions/${this.user.categories}`)
      .then((response) => {
        let temp = response.data.result;
        this.curatedMedicalQuestions = temp
          .map((x) => ({sort: Math.random(), val: x}))
          .sort((x, y) => x.sort - y.sort)
          .map((x) => x.val)
        
    //     let whyQuestions = [];
    //     let whoQuestions = [];
    //     let whatQuestions = [];
    //     let whereQuestions = [];
    //     let whenQuestions = [];
    //     let howQuestions = [];
    //     for(let i = 0; i < questionsArr.length; i++){
    //       let question = questionsArr[i]
    //       switch(question.Category){
    //         case 'Why':
    //           whyQuestions.push(question)
    //           break;
    //         case 'When':
    //           whenQuestions.push(question)
    //           break;
    //         case 'Who':
    //           whoQuestions.push(question)
    //           break;
    //         case 'What':
    //           whatQuestions.push(question)
    //           break;
    //         case 'Where':
    //           whereQuestions.push(question)
    //           break;
    //         case 'How':
    //           howQuestions.push(question)
    //           break;
    //         default:
    //           break;
    //       } 
    //     }
    //     this.curatedMedicalQuestions.push(whatQuestions[Math.floor(Math.random()*whatQuestions.length)])
    //     this.curatedMedicalQuestions.push(whenQuestions[Math.floor(Math.random()*whatQuestions.length)])
    //     this.curatedMedicalQuestions.push(whereQuestions[Math.floor(Math.random()*whatQuestions.length)]) 
    //     this.curatedMedicalQuestions.push(whyQuestions[Math.floor(Math.random()*whatQuestions.length)])
    //     this.curatedMedicalQuestions.push(whoQuestions[Math.floor(Math.random()*whatQuestions.length)])
    //     this.curatedMedicalQuestions.push(howQuestions[Math.floor(Math.random()*whatQuestions.length)])
      })
      .catch((error) => {
        console.log(error);
      });

    this.$http
      .get(`/medical_newsfeeds/newsfeeds_categories/${this.user.categories}`)
      .then((response) => {
        this.curatedMedicalNews = response.data.result;
      })
      .catch((error) => {
        console.log(error);
      });

    this.$http
      .get(`/users/balance_history/${this.user.user_id}`)
      .then((response) => {
        this.balanceHistory = response.data.result;
        this.years = this.getYears();
        this.selectedYear = this.years[this.years.length - 1];
        this.multiLineData.datasets = this.updateChartData(this.selectedYear);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data: () => ({
    curatedMedicalNews: [],
    curatedMedicalQuestions: [],
    dropdown: false,
    selectedYear: null,
    years: [],
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
      let years = this.balanceHistory.year.reduce(function (
        accum,
        check,
        index
      ) {
        if (check === year) {
          accum.push(index);
        }
        return accum;
      },
      []);

      let healthData = {
        backgroundColor: "#66bb6a",
        borderColor: "#66bb6a",
        fill: false,
        data: [],
      };

      for (let i = 0; i < years.length; i++) {
        let index = years[i];
        healthData.data.push(this.balanceHistory.medisave_ac[index]);
      }

      chartData.datasets.push(healthData);
      this.multiLineData = chartData;
    },

    getYears() {
      return [...new Set(this.balanceHistory.year)];
    },

    getRandomPictureURL() {
      return (
        "https://source.unsplash.com/featured/?doctor,medicine,medical," +
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
