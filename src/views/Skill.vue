<template>
  <v-container>
    <title-box title="学んだ技術"></title-box>
      <v-row justify="center" class="mb-5">
        <v-col cols="9" sm="5" md="4"
        v-for="data of mydata" :key="data.category"
        >
          <skill-box
          :category="data.category"
          :data="data.data"
          ></skill-box>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SkillBox from '../components/SkillBox.vue';
import TitleBox from '../components/TitleBox.vue';

export default {
  name: 'Skill',
  components: { TitleBox, SkillBox },
  data: function() {
    return {
      skillItems: require('../assets/skill/skillData.js'),
      mydata: []
    }
  },
  methods: {
    formatFetchData: (data) => {
      const setObj = data.reduce((acc, {category, path, rating}) => {
        //acc[category]がtrueだったらnew Set()
          acc[category] = acc[category] || new Set();
        //pathとratingを加える
          acc[category].add([path, rating]);
          return acc;
        }, {});

      return Object.entries(setObj)
      .map(([category, items]) => ({category, data: [...items]}));
    },
    urlCheck: () => {
      if (location.hostname === 'localhost') {
        return "/api/skills";
      } else {
        return "https://my-page-3939.herokuapp.com/api/skills";
      }
    }
  },
  created: function() {
    // const URL = this.urlCheck();
    this.$axios.get('/api/skills')
      .then((res) => this.formatFetchData(res.data))
      .then((data) => this.mydata = data)
  }
}

</script>
