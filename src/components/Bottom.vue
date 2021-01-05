<!--
 * @Author: Jecosine
 * @Date: 2021-01-05 07:52:23
 * @LastEditTime: 2021-01-05 08:06:34
 * @LastEditors: Jecosine
 * @Description: Bottom navigation
-->
<template>
  <div id="bottom-navigation">
      
  </div>
</template>

<script>
export default {
    name: "bottom",
    props: {
        config: Object
    },
    data() {
        return {
            defaltConfig: [
                {
                    "name": "Home",
                    "icon": "el-icon-s-home"
                },
                {
                    "name": "Files",
                    "icon": "el-icon-s-management"
                },
                {
                    "name": "Me",
                    "icon": "el-icon-s-custom"
                }
            ]
        }
    }
}
</script>

<style scoped>
#bottom-navigation {
    position: fixed;
    width: 100%;
    height: 60px;
    bottom: 0;
    left: 0;
    background: violet;
}
</style>