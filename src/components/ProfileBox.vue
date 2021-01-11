<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h1 style="line-height: initial;" id="title">
              Welcome to 
              <br class="d-flex d-sm-none">
              <span style="font-size:50px;">YUSUKE's</span>
               portfolio!
            </h1>
          </v-card-title>
          <v-card-text>
            <v-row justify="space-between">
              <v-col cols="10" sm="3">
                <v-avatar size="150">
                  <img src="../assets/profile/img/faceIR.jpg" alt="yusuke">
                </v-avatar>
              </v-col>
              <v-col cols="10" sm="9">
                <v-card-text>
                  {{ message }}
                </v-card-text>
              </v-col>
               <v-col cols="12">
                <v-card-text class="pa-0">
                  <span class="green--text title">学習開始から...</span>
                  <clock-box class="black--text"></clock-box>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ClockBox from './ClockBox.vue'
import ShuffleText from "shuffle-text"

export default {
  components: { ClockBox },
  name: 'ProfileBox',
  props: {
    message: String
  },
  data: function() {
    return {
     
    }
  },
  methods: {
    
  },
  mounted: function() {
    const title = document.getElementById('title')
    const shuffle =  new ShuffleText(title)
    shuffle.start()
  }
}
</script>

