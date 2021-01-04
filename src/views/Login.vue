<!--
 * @Author: Jecosine
 * @Date: 2021-01-05 07:05:41
 * @LastEditTime: 2021-01-05 07:28:15
 * @LastEditors: Jecosine
 * @Description: Login page
-->
<template>
  <div>
      <navigation :user="user" />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
export default {
    components: { Navigation },
    data() {
        return {
            user: {
                "id": "123",
                "name": "jecosine"
            }
        }
    }
};
</script>

<style scoped>

</style>
