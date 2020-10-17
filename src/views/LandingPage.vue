<template>
  <v-row>
    <v-card class="rounded-xl">
      <v-img height="330" src="../assets/landingpage.jpg">
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-toolbar-title>
            <v-img
              contain
              height="65"
              width="65"
              src="../assets/cpf_logo_icon.png"
            ></v-img>
          </v-toolbar-title>
          <span class="overline" style="color:white">CPFB X Moments+</span>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="400px">
            <template v-slot:activator="{ on }">
              <v-btn class="ma-2" outlined color="black" v-on="on">
                Login
              </v-btn>
            </template>
            <v-card class="rounded-l elevation-12">
              <v-toolbar dark short elevation="6">
                <v-toolbar-title>Sign In</v-toolbar-title>
              </v-toolbar>
              <br />
              <v-card-text>
                <v-form id="login-form">
                  <v-text-field
                    label="Username"
                    name="login"
                    prepend-icon="mdi-account"
                    color="#151c55"
                    v-model="username"
                  />
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  form="login-form"
                  type="submit"
                  dark
                  @click="login"
                  >Sign In</v-btn
                >
                <v-btn text x-small>Forgotten your password?</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-app-bar>

        <v-card-actions class="card-actions">
          <v-toolbar color="transparent" dense floating>
            <v-text-field
              dark
              color="white"
              hide-details
              solo
              label="Search"
              append-icon="mdi-magnify"
              single-line
            ></v-text-field>
          </v-toolbar>
        </v-card-actions>
      </v-img>
    </v-card>
    
    <v-container>
      <div class="px-2 py-1 overline">
        <span style="font-size: 150%"> Explore by Category </span>
      </div>
      <v-row>
        <v-col xs="12" sm="6" md="3">
          <MidSizeCard
            title="Schemes"
            icon="mdi-briefcase"
            color="orange lighten-2"
          />
        </v-col>
        <v-col xs="12" sm="6" md="3">
          <MidSizeCard
            title="Tools"
            icon="mdi-tools"
            color="purple lighten-2"
          />
        </v-col>
        <v-col xs="12" sm="6" md="3">
          <MidSizeCard
            title="Tools"
            icon="mdi-face-agent"
            color="green lighten-2"
          />
        </v-col>
        <v-col xs="12" sm="6" md="3">
          <MidSizeCard
            title="About Us"
            icon="mdi-information"
            color="blue lighten-2"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-divider></v-divider>
    </v-container>
    <v-container>
      <div class="px-2 py-1 overline">
        <span style="font-size: 150%"> View the latest scoop</span>
      </div>
      <v-row>
        <v-col xs="12" sm="6" md="3">
          <BigSizeCard
            title="COVID-19 Support"
            rating="4.9 stars (519)"
            subtitle="Covid-19 Support"
            text="The Government has introduced various support measures for Singaporeans through the Unity, Resilience, Solidarity and Fortitude..."
            picture_url="1a.jpg"
          />
        </v-col>
        <v-col xs="12" sm="6" md="3">
          <BigSizeCard
            title="Homeowner Support"
            rating="4.8 stars (321)"
            subtitle="Covid-19 Support"
            text="The Government has worked with HDB and banks to assist homeowners in their time of need. The measures, which include a deferment..."
            picture_url="1b.jpg"
          />
        </v-col>
        <v-col xs="12" sm="6" md="3">
          <BigSizeCard
            title="Retirement Planning"
            rating="4.5 stars (762)"
            subtitle="Retirement Sum Scheme"
            text="At 55, savings from your Special Account, followed by your Ordinary Account, will be used to set aside your Full Retirement Sum..."
            picture_url="1c.jpg"
          />
        </v-col>
        <v-col xs="12" sm="6" md="3">
          <BigSizeCard
            title="About CPF Life"
            rating="4.6 stars (443)"
            subtitle="CPF Life"
            text="With CPF LIFE, you have greater peace of mind in your retirement as you receive a steady stream of income every month for as long as you live."
            picture_url="1d.jpg"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
import MidSizeCard from "@/components/MidSizeCard";
import BigSizeCard from "@/components/BigSizeCard";

export default {
  name: "LandingPage",
  components: {
    MidSizeCard,
    BigSizeCard,
  },

  data: () => ({
    dialog: false,
    username: "",
    password: "",
  }),

  watch: {
    dialog: function (val) {
      val || this.close();
    },
  },

  methods: {
    close() {
      this.dialog = false;
    },

    login(e) {
      event.preventDefault(e);
      this.$http
        .post(`/users/username/${this.username}`)
        .then((response) => {
          const user = {
            investments: response.data.result.investments,
            transactions: response.data.result.transactions,
            user_id: response.data.result.user_id,
            name: response.data.result.name,
            categories: response.data.result.categories,
            special_ac: response.data.result.special_ac,
            ordinary_ac: response.data.result.ordinary_ac,
            medisave_ac: response.data.result.medisave_ac,
            user: response.data.result.user,
            indsutry: response.data.result.industry,
          };
          localStorage.setItem("user", JSON.stringify(user));
          this.$router.push("/home");
        })
        .catch((error) => {
          alert("Incorrect username/password");
          console.log(error);
        });
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
