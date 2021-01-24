<!--
 * @Author: Jecosine
 * @Date: 2021-01-05 07:05:41
 * @LastEditTime: 2021-01-07 01:41:20
 * @LastEditors: Jecosine
 * @Description: Login page
-->
<template>
  <div class="login-page">
    <!-- <navigation :user="user" /> -->
    <div class="title">
      Online Book Management
    </div>
    <div class="login-panel-container">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="Username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="login-button">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">
        <a href="#">Policy</a> | 
        <a href="#">About</a>
    </div>
  </div>
</template>

<script>
// import Navigation from "../components/Navigation.vue";
export default {
//   components: { Navigation },
  data() {
    return {
      user: {
        id: "123",
        name: "jecosine",
      },
      form: {
          username: '',
          password: ''
      }
    };
  },
};
</script>

<style scoped>
a {
    text-decoration: none;
    color: teal;
}
.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
}
.title {
    width: calc(100% - 40px);
    color: teal;
    margin-left: 20px;
    font-size: 40px;
    font-weight: bolder;
    text-align: center;
    margin-top: 30%;
}
.login-button {
    width: 100%;
}
.login-page { 
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 98, 128, 0.055);
    background: url(../assets/email-pattern.png);
}
.login-panel-container {
    position: relative;
    width: calc(100% - 40px);
    margin-top: 20%; 
    margin-left: 20px;  
}
</style>
