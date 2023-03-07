<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <searchBar></searchBar>
        </el-header>
        <el-main>
          <div v-for="(item,index) in items" v-bind:key="index">
            <card :title = "item" @click="toDetailView"></card>
          </div>
        </el-main>
      </el-container>
    </div>


</template>

<script>
import Card from '../components/Card.vue'
import SearchBar from "../components/SearchBar.vue";
export default {
  name: "HomeView",
  components:{
    'searchBar': SearchBar,
    'card': Card,
  },
  data () {
    return {
      items: []
    }
  },
  methods:{
    toDetailView () {
      this.$router.push({
        path: '/detailView',
        name: 'DetailView',
      })
    },
    requetItems(){
      this.axios.get('http://localhost:18343/').then((response) => {
        this.$store.commit('setItems', response.data)
        this.items = this.$store.getters.getItems
        // console.log(this.$store.getters.getItems)
        // console.log(response.data)
      }).catch((response) => {
        console.log(response)
      })
    }
  },
  created() {
    this.requetItems()
    this.intervalId = setInterval(this.requetItems, 5000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
}
</script>

<style scoped>

</style>