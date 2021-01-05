<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <bottom />
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Bottom from '../components/Bottom.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Bottom
  }
}
</script>
