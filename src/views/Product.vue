<template>
  <v-container>
    <title-box title="制作物"></title-box>
    <v-row justify="center">
      <v-col cols="10" sm="5" md="4"
       v-for="item in reverseItems" :key="item.id">
        <product-box
        :link=item.link
        :title=item.title 
        :descript=item.descript
        :src="require(`../assets/product/img/${item.src}`)"
        :usedSkills=item.used_skill
        >
        </product-box>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductBox from '../components/ProductBox.vue'
import TitleBox from '../components/TitleBox.vue';

export default {
  name: 'Product',
  components: {
    ProductBox,
    TitleBox
  },
  data: function() {
    return {
      mydata: []
      }
    },
  computed: {
    reverseItems: function() {
        return this.mydata.slice().reverse();
    },
  },
  methods: {
     urlCheck: () => {
      if (location.hostname === 'localhost') {
        return "/api/product";
      } else {
        return "https://my-page-3939.herokuapp.com/api/product";
      }
    }
  },
  created: function() {
    const URL = this.urlCheck();
    this.$axios.get(URL)
    .then((res) => this.mydata = res.data)
    .then((data) => {
      data.forEach((d, i)=> {
        const obj = {};
        obj.id = i;
        obj.skillName = d.used_skill.split(',');
        d.used_skill = obj;
      });
    })
  }
}

</script>