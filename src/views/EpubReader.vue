<!--
 * @Author: Jecosine
 * @Date: 2021-01-06 20:24:35
 * @LastEditTime: 2021-01-07 01:50:45
 * @LastEditors: Jecosine
 * @Description: Epub reader
-->
<template>
  <div>
    <div class="title" v-show="showTitle">
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
    <div class="bottom-container" v-show="showTitle">
      <div class="menu">
        <i class="fa fa-bars"></i>
      </div>
      <div class="bright">
        <i class="fa fa-sun-o" aria-hidden="true"></i>
      </div>
      <div class="progress">
        <i class="fa fa-forward" aria-hidden="true"></i>
      </div>
      <div class="font">
        <i class="fa fa-font" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
// import jszip from  "jszip";
import Epub from "epubjs";
const BOOK_URL = "http://127.0.0.1:8888/test2/";
global.ePub = Epub;
export default {
  data() {
    return {
      showTitle: false,
      book: null,
      fontSize: 16,
      customTheme: [
        {
          name: "default",
          style: {
            body: {
              color: '#000000',
              background: '#ffffff'
            }
          }
        },
        {
          name: "dark",
          style: {
            body: {
              color: '#ffffff',
              background: '#000000'
            }
          }
        },
        {
          name: "smooth",
          style: {
            body: {
              color: '#666066',
              background: '#999099'
            }
          }
        }
      ]
    };
  },
  created() {},
  mounted() {
    // get param
    this.bookId = this.$route.params.id;
    // get real file address
    this.$axios.get("/api/book/get/" + this.bookId).then((res) => {
      console.log(res);
      if (res.data && res.data.status === 200) {
        this.realUrl = res.data.data.url;
      } else {
        this.$message.error("get book failed");
      }
    });
    this.book = new Epub(BOOK_URL);
    this.rendition = this.book.renderTo("reader", {
      width: false,
      height: false,
      method: "default",
    });
    this.rendition.display();
    // get theme
    this.themes = this.rendition.themes;
    this.registerTheme();
    this.themes.select("default");
  },
  methods: {
    registerTheme() {
      this.customTheme.forEach(theme => {
        this.themes.register(theme.name, theme.style)
      });
    },
    setFontSize() {
      if(this.themes) {
        this.themes.setFontSize(this.fontSize + 'px');
      }
    },
    setBrightness() {

    },
    openMenu() {
      this.showTitle = !this.showTitle;
    },
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
      }
    }
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
  background: white;
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
