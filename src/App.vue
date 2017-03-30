<template>
  <div id="app">
    <picker></picker>
    <posts></posts>
  </div>
</template>

<script>
import Picker from './components/Picker'
import Posts from './components/Posts'

export default {
  name: 'app',
  components: {
    Picker,
    Posts
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
