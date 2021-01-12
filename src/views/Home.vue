<template>
 <v-container>

   <v-row justify="center">
     <v-col cols="12">
       <profile-box :message="mydata.message"></profile-box>
     </v-col>
   </v-row>
   
   <v-row justify="center">
     <v-col cols='10' sm='5' md='4' lg='3'
      v-for="item in contentItems" :key="item.link">
       <home-box :link=item.link :title=item.title :src=item.src :icon=item.icon></home-box>
     </v-col>
   </v-row>

 </v-container>
</template>

<script>
import HomeBox from '../components/HomeBox.vue'
import ProfileBox from '../components/ProfileBox.vue'

export default {
  name: 'Home',
  data() {
    return {
      mydata: '',
      contentItems: [
        {
          link: "/product",
          title: '制作物',
          src: require('../assets/home/img/product.jpg'),
          icon: 'mdi-laptop-chromebook'
        },
        {
          link: '/skill',
          title: '学んだ技術',
          src: require('../assets/home/img/books.jpg'),
          icon: 'mdi-hand-heart-outline'
        },
        {
          link: '/learned',
          title: '学んだ書籍/動画',
          src: require('../assets/home/img/learned.jpg'),
          icon: 'mdi-book-open-page-variant-outline'
        },
        {
          link: '/contact',
          title: 'コンタクト',
          src: require('../assets/home/img/contact.jpg'),
          icon: 'mdi-card-account-mail-outline'
        }
      ]
    }
  },
  methods: {
     urlCheck: () => {
      if (location.hostname === 'localhost') {
        return "/api/home";
      } else {
        return "https://my-page-3939.herokuapp.com/api/home";
      }
    }
  },
  mounted: function() {
    
  },
  created: function() {
    // const URL = this.urlCheck();
    this.$axios.get('/api/home').then((res) => this.mydata = res.data[0])
  },
  components: {
    HomeBox,
    ProfileBox
  }
}
</script>
