<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-luciadmap ></v-luciadmap>
    <router-view/>
  </div>
</template>

<script>
import VLuciadMap from './components/VLuciadMap'

export default {
  name: 'App',
  components: {
    'v-luciadmap': VLuciadMap
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
