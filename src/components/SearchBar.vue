<script setup>
import {Search} from '@element-plus/icons-vue'
</script>

<template>
  <el-input v-model="input" placeholder="Please input" :suffix-icon="Search" @keyup.enter.native="sendRequest" :style="{ width: '100%'}" size = 'large' ref="myInput"></el-input>
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
      if (this.input == ''){
        this.axios.get('http://localhost:18343/' + this.input).then((response) => {
          this.$store.commit('setItems', response.data)
        }).catch((response) => {
          console.log(response)
        })
      }
      else {
        this.axios.get('http://localhost:18343/peer/search/content/' + this.input).then((response) => {
          this.$store.commit('setItemsWithSearch', response.data)
        }).catch((response) => {
          console.log(response)
        })
      }
      sessionStorage.setItem('searchName', this.input)
      this.toSearchView()
    },
    toSearchView () {
      this.$router.push({
        path: `/searchView`,
      })
    },
  },
  mounted(){
    const element = this.$refs.myInput.$el.querySelector('.el-input__wrapper');
    element.style.borderRadius = '40px'
    const savedUsername = sessionStorage.getItem('searchName');
    if (savedUsername) {
      this.input = savedUsername;
    }
  }
}
</script>

<style scoped>
</style>