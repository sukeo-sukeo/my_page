<template>
  <v-container>
    <title-box title="学んだ書籍/動画"></title-box>
    <v-row justify="center">
      <v-col cols="10" sm="4" md="3"
       v-for="data in reverseData" :key="data.id">
       
        <books-box
         :link=data.link
         :src=data.src
         :title=data.title
         :descript=data.descript
         :auther=data.auther
         :publisher=data.publisher
        ></books-box>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BooksBox from '../components/BooksBox.vue';
import TitleBox from '../components/TitleBox.vue';

export default {
  name: 'Learned',
  components: { 
    BooksBox,
    TitleBox 
    },
  data: () => {
    return {
      mydata: []
    }
  },
  methods: {
    // requireData: function() {
    //   return require('../assets/books/books.csv')
    // }
  },
  computed: {
    reverseData: function() {
      return this.mydata.slice().reverse();
    }
  },
  created: function() {
    this.$axios.get("/api/learned").then((res) => this.mydata = res.data).then(() => console.log(this.mydata))
  },
}
</script>
