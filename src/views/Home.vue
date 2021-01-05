<template>
  <div class="home">
    <navigation />
    <div class="tool-container">
      <div class="search-container inline-block">
        <el-input
          placeholder="Search what you want"
          suffix-icon="el-icon-search"
          v-model="searchText"
          class="search-bar"
          size="mini"
        >
        </el-input>
      </div>
      <div class="icon-container inline-block">
        <i class="fa fa-th-list" aria-hidden="true"></i>
      </div>
      <div class="icon-container inline-block">
        <i class="fa fa-th-large" aria-hidden="true"></i>
      </div>
      <div class="icon-container inline-block">
        <i class="fa fa-sort" aria-hidden="true"></i>
      </div>
    </div>
    <div id="content-container">
      <el-row :gutter="20">
        <el-col span="8" v-for="(item, i) in sourceData" class="item-container" :key="i">
          <div class="item-cover-container">
            <el-image class="item-cover" fit="cover" :src="item.cover || 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'">
              <div slot="error" class="image-slot">
                <i class="el-icon-notebook-1"></i>
              </div>
            </el-image>
          </div>
          <div class="item-title">{{item.name}}</div>
        </el-col>
      </el-row>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <bottom />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Bottom from "../components/Bottom.vue";
import Navigation from "../components/Navigation.vue";

export default {
  name: "Home",
  components: {
    Bottom,
    Navigation,
  },
  data() {
    return {
      sourceData: [
        {
          name: "Test Book 1",
          cover: "l",
        },
        {
          name: "Test Book 1",
          cover: "",
        },
        {
          name: "Test Book 1",
          cover: "",
        },
        {
          name: "Test Book 1",
          cover: "",
        },
      ],
      searchText: "",
    };
  },
};
</script>

<style scoped>
.home {
  position: absolute;
  top: 40px;
  width: calc(100% - 40px);
  /* height: calc(100% - 40px); */
  padding: 20px;
}
.tool-container {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: calc(100% - 40px);
}
.search-container {
  width: 70%;
  /* height: 40px; */
  margin-right: 10px;
}
.icon-container {
  /* width: 30px; */
  height: 50px;
  line-height: 50px;
  /* color: #606266; */
  color: #909399;
  font-size: 20px;
  margin: 10px;
}
.item-container {
  height: 200px;
  /* border: solid 1px rgb(221, 221, 221); */
}
.item-cover {
  width: 100%;
  height: 140px;
  background-color: #c9c9c9;
  font-size: 40px;
  text-align: center;
  line-height: 140px;
}
.item-title {
  text-align: center;
  font-size: 14px;
  color: #606366;
}
#content-container {
  position: relative;
  margin-top: 60px;
  left: 0;
  width: 100%;

}
.image-slot {
  font-size: 40px;
  text-align: center;
  color: #606366;
  
}
</style>
