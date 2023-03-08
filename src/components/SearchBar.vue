<script setup>
import { Calendar, Search } from '@element-plus/icons-vue'
</script>

<template>
  <el-input v-model="input" placeholder="Please input" :suffix-icon="Search" @keyup.enter.native="sendRequest" :style="{ width: '640px' }" ></el-input>
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
      }).catch((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>