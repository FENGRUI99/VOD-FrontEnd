<template>
    <div class="common-layout">
      <el-container>
        <el-header style="position: fixed; z-index: 2023; left: 10%; right: 10%; position: fixed; top: 0">
          <div style="background-color: white; top: 0; right: 0; left: 0; z-index: 2022; border: 200px; width: 100%; display: flex; align-items: center">
            <logo></logo>
            <searchBar></searchBar>
          </div>
        </el-header>
        <el-container style="display: flex; z-index: 1; flex-direction: column-reverse">
        <el-main style = "overflow: clip">
          <div class="card-group">
            <div class="card-row" v-for="(item,index) in items" v-bind:key="index">
<!--              <div v-if="!removePrefix(item).startsWith('.')">-->
                <card class="card" :title = "removePrefix(item)" @click="toDetailView(removePrefix(item))"></card>
<!--              </div>-->
            </div>
          </div>

        </el-main>
        </el-container>
      </el-container>
    </div>


</template>

<script>
import Card from '../components/Card.vue'
import SearchBar from "../components/SearchBar.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "HomeView",
  components:{
    'searchBar': SearchBar,
    'card': Card,
    'logo': Logo
  },
  data () {
    return {
      items: []
    }
  },
  methods:{
    toDetailView (item) {
      let id = item;
      this.$router.push({
        path: `/detailView/${id}`,
      })
    },
    requetItems(){
      this.axios.get('http://localhost:18343/').then((response) => {
        this.$store.commit('setItems', response.data)
        this.items = this.$store.getters.getItems
      }).catch((response) => {
        console.log(response)
      })
    },
    removePrefix(item){
      var ans = item;
      if (item.startsWith("content/")){
        ans = item.substring(8);
      }
      return ans;
    }
  },
  created() {
    this.requetItems()
    this.intervalId = setInterval(this.requetItems, 5000)
  },
  beforeRouteLeave(to, from, next) {
    clearInterval(this.intervalId)
    next()
  },

}
</script>

<style scoped>
   .el-container{
     min-width: fit-content;
     /*position: fixed; z-index: 2023; top: 10px; left: 10%; right: 10%*/
   }

   .card-group {
     display: flex;
     flex-wrap: wrap;
     /*max-height: 600px;*/
   }

   .card-row {
     width: 25%;
     box-sizing: border-box;
     padding: 10px;
   }

   /*@media (max-width: 768px) {*/
   /*  .card-row {*/
   /*    width: 50%;*/
   /*    padding: 5px;*/
   /*  }*/
   /*}*/

   /*@media (max-width: 480px) {*/
   /*  .card-row {*/
   /*    width: 100%;*/
   /*    padding: 5px;*/
   /*  }*/
   /*}*/


</style>