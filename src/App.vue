<script setup>
import {RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// select the div#app element
var appDiv = document.getElementById("app");

// change the display model to flex
appDiv.style.display = "flex";
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

@media (min-width: 0px) {
  body {
    display: flex;
    margin-top: 10%;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 0px) {
    header {
      display: flex;
      place-items: center;
      /*padding-right: calc(var(--section-gap) / 2);*/
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }

    #app {
      display: flex; /* or any other display value */
      margin-top: 10%;
    }
  }
}

</style>
