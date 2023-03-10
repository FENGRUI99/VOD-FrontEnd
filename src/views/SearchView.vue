<template>
  <div class="common-layout">
    <el-container>
      <el-header style="position: fixed; z-index: 2023; left: 10%; right: 10%; position: fixed; top: 0">
        <div style="background-color: white; top: 0; right: 0; left: 0; z-index: 2022; border: 200px; width: 100%; display: flex; align-items: center">
          <logo></logo>
          <searchBar></searchBar>
        </div>
      </el-header>
      <el-container style="display: flex; padding-top: 10px; top: 10px; z-index: 1; margin-top: 300px">
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
  name: "SearchView",
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
    removePrefix(item){
      var ans = item;
      if (item.startsWith("content/")){
        ans = item.substring(8);
      }
      return ans;
    },
    initOptions(){
      this.items = this.$store.getters.getItems
    }
  },
  mounted() {
    this.items = this.$store.getters.getItems;
  },
  computed: {
    storeItems() {
      return this.$store.getters.getItems;
    }
  },
  watch: {
    storeItems(newItems){
      this.items = newItems;
    }
  }
}
</script>

<style scoped>
/*.el-container{*/
/*  min-width: fit-content;*/
/*  !*position: fixed; z-index: 2023; top: 10px; left: 10%; right: 10%*!*/
/*}*/

.card-group {
  display: flex;
  flex-wrap: wrap;
}

.card-row {
  width: 25%;
  box-sizing: border-box;
  padding: 10px;
}


</style>