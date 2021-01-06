<!--
 * @Author: Jecosine
 * @Date: 2021-01-06 20:24:35
 * @LastEditTime: 2021-01-06 23:14:16
 * @LastEditors: Jecosine
 * @Description: Epub reader
-->
<template>
  <div>
    <div class="title">
      <div class="back" @click="$router.push({ path: '/' })">
        <i class="fa fa-chevron-left"></i>
      </div>
      <div class="right-container">
        <div class="user">
          <i class="fa fa-user"></i>
        </div>
        <div class="more">
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div id="reader"></div>
    <div class="mask">
      <div class="left" @click="prevPage"></div>
      <div class="center" @click="openMenu"></div>
      <div class="right" @click="nextPage"></div>
    </div>
    <div class="bottom-container">
      <div class="menu">
          <i class="fa fa-bars"></i>
      </div>
      <div class="bright">
          <i class="fa fa-bars"></i>
      </div>
      <div class="progress">
          <i class="fa fa-bars"></i>

      </div>
      <div class="font">
          <i class="fa fa-bars"></i>

      </div>
    </div>
  </div>
</template>

<script>
import "jszip";
import Epub from "epubjs";
const BOOK_URL = "http://127.0.0.1:8888/test2/";
global.ePub = Epub;
export default {
  data() {
    return {
      book: null,
    };
  },
  created() {},
  mounted() {
    this.book = new Epub(BOOK_URL);
    this.rendition = this.book.renderTo("reader", {
      width: false,
      height: false,
      method: "default",
    });
    this.rendition.display();
  },
  methods: {
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
      }
    },
    openMenu() {},
  },
};
</script>

<style lang="scss" scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 100;
  .left {
    flex: 0 0 100px;
    // background: red;
  }
  .center {
    flex: 1;
    // background-color: antiquewhite;
  }
  .right {
    flex: 0 0 100px;
    // background: blue;
  }
}
.title {
  position: fixed;
  width: calc(100% - 40px);
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  color: #686868;
  display: flex;
  flex-direction: row;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);
  background-color: white;
  z-index: 1000;
  .back {
    flex: 0 0 60px;
  }
  .right-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .user {
      flex: 0 0 40px;
      float: right;
    }
  }
}
.bottom-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 60px;
  z-index: 1000;
  box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
  div {
      height: 60px;
      line-height: 60px;
      flex: 1;
      text-align: center;
  }
}
</style>
