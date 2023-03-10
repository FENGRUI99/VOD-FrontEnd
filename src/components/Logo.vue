<template>
  <img id="logo" src="../assets/logo.png" style="margin-right: 10px; width: 20%; object-fit: contain" @click="toHomeView">
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
  #logo:hover {
    cursor: pointer;
    opacity: 0.8;
  }
</style>