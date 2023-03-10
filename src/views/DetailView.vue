<template>
    <el-container>
      <el-header style="position: fixed; z-index: 2023; left: 10%; right: 10%; position: fixed; top: 0">
        <div style="background-color: white; top: 0; right: 0; left: 0; z-index: 2022; border: 200px; width: 100%; display: flex; align-items: center">
        <logo></logo>
        <search-bar></search-bar>
        </div>
      </el-header>
      <el-container style="display: flex; padding-top: 10px; top: 10px; z-index: 1">
        <el-main style = "overflow: clip;">
          <video-player w="100%" h="100%" v-model:file-name= this.$route.params.id></video-player>
        </el-main>
        <el-aside style="margin-right: 5%; margin-top: 5%; overflow: hidden">
          <div v-for="(item,index) in items" v-bind:key="index">
<!--            <div v-if="!item.startsWith('.')">-->
              <card :title = "removePrefix(item)" @click="toDetailView(removePrefix(item))" v-if="index < 3"></card>
<!--            </div>-->
          </div>
        </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import Card from '@/components/Card.vue'
import SearchBar from "@/components/SearchBar.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import Logo from "@/components/Logo.vue";
export default {
  name: "HomeView",
  components:{
    'searchBar': SearchBar,
    'card': Card,
    'videoPlayer': VideoPlayer,
    'logo': Logo,
  },
  data () {
    return {
      items: this.$store.getters.getItems,
      id: this.$route.params.id
    }
  },
  methods:{
    toDetailView (id) {
      this.$router.push({
        path: `/detailView/${id}`,
      })
      // location.reload()
    },
    removePrefix(item){
      var ans = item;
      if (item.startsWith("content/")){
        ans = item.substring(8);
      }
      return ans;
    }
  },
  isValidName(item){
    return !item.startsWith('.')
  }
}
</script>

<style scoped>
.el-container{
  min-width: fit-content;
}

</style>