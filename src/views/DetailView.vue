<template>
    <el-container>
      <el-header>
        <search-bar></search-bar>
      </el-header>
      <el-container style="display: flex" >
        <el-main style = "overflow: clip;">
          <video-player w="100%" h="100%" :file-name= this.$route.params.id></video-player>
        </el-main>
        <el-aside style="margin-right: 5%; margin-top: 5%; overflow: hidden">
          <div v-for="(item,index) in items" v-bind:key="index">
            <div v-if="!item.startsWith('.')">
              <card :title = "removePrefix(item)" @click="toDetailView(removePrefix(item))" v-if="index < 3"></card>
            </div>
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
      items: this.$store.getters.getItems,
    }
  },
  methods:{
    toDetailView (id) {
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