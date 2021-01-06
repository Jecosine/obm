<!--
 * @Author: Jecosine
 * @Date: 2021-01-06 22:46:16
 * @LastEditTime: 2021-01-06 22:48:25
 * @LastEditors: Jecosine
 * @Description: Me
-->
<template>
  <div>
      <navigation />
      <div id="content-container">
          <div class="avatar-container"></div>
          <div class="statistic"></div>
          <div class="option-container"></div>
      </div>
      <bottom />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
export default {
    components: { Navigation },

}
</script>

<style>

</style>