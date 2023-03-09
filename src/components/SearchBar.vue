<script setup>
import {Search} from '@element-plus/icons-vue'
</script>

<template>
  <el-input v-model="input" placeholder="Please input" :suffix-icon="Search" @keyup.enter.native="toDetailView" :style="{ width: '100%'}" size = 'large'></el-input>
</template>

<script>

export default {
  name: "SearchBar",
  data () {
    return {
      input: ''
    }
  },
  methods: {
    sendRequest(){
      this.axios.get('http://localhost:18343/' + this.input).then((response) => {
        // console.log(this.$store.getters.getItems)
        console.log(response.data)
        this.toDetailView()
      }).catch((response) => {
        console.log(response)
      })
    },
    toDetailView () {
      let id = this.input;
      this.$router.push({
        path: `/detailView/${id}`,
      })
    },
  }
}
</script>

<style scoped>

</style>