<template>
  <img src="../assets/logo.png" style="margin-right: 10px" @click="toHomeView">
</template>

<script>
export default {
  name: "Logo",
  methods:{
    toHomeView(){
      this.$router.push({
        path: `/homeView`,
      })
    }
  }
}
</script>

<style scoped>

</style>