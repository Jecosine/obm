<!--
 * @Author: Jecosine
 * @Date: 2021-01-05 07:24:53
 * @LastEditTime: 2021-01-05 08:47:01
 * @LastEditors: Jecosine
 * @Description: Navigation bar
-->
<template>
  <div id="navigation-container">
    
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    user: Object,
  },
};
</script>

<style scoped>
#navigation-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: teal;
  box-shadow: 0 1px 3px 3px  rgba(0,0,0,0.15);
  z-index: 9999;
}
</style>
