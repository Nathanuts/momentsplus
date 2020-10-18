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
      <v-row fluid class="ma-2">
        <SmallSizeCard
          color="cyan"
          :simpleCard="true"
          icon="mdi-cash-multiple"
          title="Ordinary Account:"
          :amount="this.user.ordinary_ac"
        />
        <SmallSizeCard
          color="orange"
          :simpleCard="true"
          icon="mdi-folder-star"
          title="Special Account:"
          :amount="this.user.special_ac"
        />
        <SmallSizeCard
          color="blue"
          :simpleCard="true"
          icon="mdi-medical-bag"
          title="Medisave Account:"
          :amount="this.user.medisave_ac"
        />
        <SmallSizeCard
          color="purple"
          :simpleCard="true"
          icon="mdi-gold"
          title="Total Investments:"
          :amount="getTotalInvestmentAmount()"
        />
      </v-row>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
      <v-card class="rounded-xl">
        <v-card-title>
          <div class="px-2 py-1 overline">
            <span style="font-size: 150%"
              ><v-icon color="primary lighten-2">mdi-monitor-dashboard</v-icon>
              Transaction History: A deep dive into your financial wellness
            </span>
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-select
              :items="years"
              label="Select Year"
              v-model="selectedYear"
              dense
            ></v-select>
          </div>
        </v-card-title>
        <v-card-text>
          <MultiLineChart
            style="height: 380px"
            :chartData="multiLineData"
            :options="chartOptions"
          />
        </v-card-text>
      </v-card>
        </v-col></v-row>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
    <v-container>
      <v-row fluid class="ma-2">
        <SmallSizeCard
          color="pink"
          :simpleCard="false"
          icon="mdi-file-document"
          title="Last Transaction:"
          :item="getLastTransaction('')"
        />
        <SmallSizeCard
          color="teal"
          :simpleCard="false"
          icon="mdi-folder-plus"
          title="Last Contribution:"
          :item="getLastTransaction('topup')"
        />
        <SmallSizeCard
          color="indigo"
          :simpleCard="false"
          icon="mdi-cash-multiple"
          title="Last Withdrawal:"
          :item="getLastTransaction('withdrawal')"
        />
        <SmallSizeCard
          color="light-green"
          :simpleCard="false"
          icon="mdi-file-document-multiple"
          title="Last Investment:"
          :item="getLastTransaction('investment')"
        />
      </v-row>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
      <v-card class="rounded-xl">
        <v-card-title>
          <div class="px-2 py-1 overline">
            <span style="font-size: 150%"
              ><v-icon color="green lighten-2">mdi-sprout</v-icon> Gain Insights
              on what matters</span
            >
          </div>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col xs="12" sm="6" md="3">
              <MidSizeCardV2
                title="My Family"
                url="/dashboard"
                picture_url="3a.png"
                text="View insights pertaining to family related matters."
              />
            </v-col>
            <v-col xs="12" sm="6" md="3">
              <MidSizeCardV2
                title="My Health"
                url="/myhealth"
                text="A bird's eye view of everything conerning your health."
                picture_url="3b.png"
              />
            </v-col>
            <v-col xs="12" sm="6" md="3">
              <MidSizeCardV2
                title="My Home"
                url="/myhome"
                picture_url="3c.png"
                text="An overview of matters concerning your property."
              />
            </v-col>
            <v-col xs="12" sm="6" md="3">
              <MidSizeCardV2
                title="My Investments"
                text="Take a look at your CPF related investments in one glance."
                url="/dashboard"
                picture_url="3d.png"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
        </v-col></v-row>
    </v-container>
    <v-container><v-divider></v-divider></v-container>
  </v-row>
</template>

<script>
import MidSizeCardV2 from "@/components/MidSizeCardV2";
import SmallSizeCard from "@/components/SmallSizeCard";
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
  name: "DashboardPage",
  components: {
    MidSizeCardV2,
    SmallSizeCard,
    MultiLineChart,
  },

  watch: {
    selectedYear: function () {
      this.updateChartData(this.selectedYear);
    },
  },

  mounted() {
    this.$http
      .get(`/users/balance_history/${this.user.user_id}`)
      .then((response) => {
        this.balanceHistory = response.data.result;
        this.years = this.getYears();
        this.selectedYear = this.years[this.years.length-1]
        this.multiLineData.datasets = this.updateChartData(this.selectedYear);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data: () => ({
    dropdown: false,
    selectedYear: null,
    years: [],
    balanceHistory: {},
    multiLineData: null,
    lastLoggedIn: new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000)
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
      legend:{
        labels:{
          fontStyle: "bold"
        }
      },
      scales: {
        xAxes: [{
          gridLines:{
            display: false
          },
          // ticks:{
          //   fontStyle: "bold"
          // }
        }],
        // yAxes: [{
        //   // ticks:{
        //   //   fontStyle: "bold"
        //   // }
        // }]
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
    getRandomPictureURL() {
      return (
        "https://source.unsplash.com/featured/?elderly,man,old" +
        Math.floor(Math.random() * 101)
      );
    },

    updateChartData(year){
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
      datasets: [
      ],
    }
      let years = this.balanceHistory.year.reduce(function(accum, check, index){
        if(check === year){
          accum.push(index)
        }
        return accum
      }, [])
      
      let oaData = {
        label: "Ordinary Account Balance", 
        backgroundColor: "#f72047",
        borderColor: "#f72047",
        fill: false,
        data: []
      }
       
      let maData = {
          label: "Medisave Account Balance",
          backgroundColor: "#42b3f4",
          borderColor: "#42b3f4",
          fill: false,
          data: [],
      }

      let saData = {
          label: "Special Account Balance",
          backgroundColor: "#ffd200",
          borderColor: "#ffd200",
          fill: false,
          data: [],
      }

      for(let i = 0; i < years.length; i++){
        let index = years[i]
        oaData.data.push(this.balanceHistory.ordinary_ac[index])
        maData.data.push(this.balanceHistory.medisave_ac[index])
        saData.data.push(this.balanceHistory.special_ac[index])
      }

      chartData.datasets.push(oaData)
      chartData.datasets.push(maData)
      chartData.datasets.push(saData)
      this.multiLineData = chartData
    },

    getYears() {
      return [...new Set(this.balanceHistory.year)]
    },

    getTotalInvestmentAmount() {
      let total = this.user.investments.reduce(function (accum, current) {
        return accum + current.amount;
      }, 0);
      return total.toString();
    },

    getLastTransaction(type) {
      if (type === "") {
        return this.balanceHistory.transactions[
          this.balanceHistory.transactions.length - 1
        ];
      }
      let transactions = this.balanceHistory.transactions;
      let length = transactions.length;
      for (let i = length - 1; i >= 0; i--) {
        let transaction = transactions[i];
        if (transaction.type === type) {
          return transaction;
        }
      }
      return { date: "N/A", type: "N/A", amount: "N/A" };
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
