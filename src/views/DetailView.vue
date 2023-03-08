<template>
    <el-container>
      <el-header>
        <search-bar></search-bar>
      </el-header>
      <el-container style="display: flex" >
        <el-main style = "overflow: clip;">
          <video-player w="100%" h="100%"></video-player>
        </el-main>
        <el-aside style="margin-right: 5%; margin-top: 5%; overflow: hidden">
          <div v-for="(item,index) in items" v-bind:key="index">
            <card :title = "item" @click="toDetailView"></card>
          </div>
        </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import Card from '@/components/Card.vue'
import SearchBar from "@/components/SearchBar.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  name: "HomeView",
  components:{
    'searchBar': SearchBar,
    'card': Card,
    'videoPlayer': VideoPlayer,
  },
  data () {
    return {
      items: this.$store.getters.getItems
    }
  },
  methods:{
    toDetailView () {
      this.$router.push({
        path: '/',
        name: 'HomeView',
      })
    },
  },
}
</script>

<style scoped>
.el-container{
  min-width: fit-content;
}

</style>