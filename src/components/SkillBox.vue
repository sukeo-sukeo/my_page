<template>
  <v-container>
     <v-row>
      <v-col>
        <v-card>
          <v-card-title class="grey--text pa-2"
          style="background-color: ghostwhite;">
          <v-icon class="mr-2">mdi-laptop-chromebook</v-icon>
            {{  uppercase(category) }}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text  v-for="d in data" :key="d[0]">
            <v-row align="center">
              <i :class=d[0]
               v-show="d[0].split('-')[0] === 'devicon'"
               style="font-size: 2.5rem; margin-left: 10px;">
               </i>
              <v-icon v-show="d[0].split('-')[0] === 'mdi'" x-large>{{ d[0] }}</v-icon>
              <v-rating
              class="ml-3"
              readonly
              empty-icon=""
              color="red"
              length="5"
              size="16"
              :value=d[1]
              ></v-rating>
            </v-row>
            <v-divider></v-divider>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'SkillBox',
  data: function() {
    return {
      
    }
  },
  props: {
    category : String,
    data : Array,
  },
  methods: {
    uppercase: function(val) {
      return val.toUpperCase()
    }
  },
  mounted: function() {
    setTimeout(() => console.log(this.data), 500)
  }
}
</script>