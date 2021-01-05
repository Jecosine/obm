<!--
 * @Author: Jecosine
 * @Date: 2021-01-05 07:52:23
 * @LastEditTime: 2021-01-05 08:36:55
 * @LastEditors: Jecosine
 * @Description: Bottom navigation
-->
<template>
  <div id="bottom-navigation">
      <el-row>
          <el-col class="button-container" v-for="(item, i) in defaltConfig" :span="8" :key="i">
              <div class="icon-container">
                  <i :class="item.icon"></i>
              </div>
              <div class="text-container">
                  {{item.name}}
              </div>
          </el-col>
      </el-row>
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
    background: white;
    box-shadow: 0 -1px 3px 3px rgba(0,0,0,0.15);
    color: #909399;
}
.button-container {
    position: relative;
    text-align: center;
    height: 60px;
}
.icon-container {
    position: relative;
    margin-top: 10px;
    height: 30px;
    line-height: 30px;
    font-size: 1.5em;
}
.text-container {
    font-size: 0.6em;
}

</style>