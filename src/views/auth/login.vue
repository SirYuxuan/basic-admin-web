<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" label-position="left" label-width="0px"
             class="login-form">
      <h3 class="title">
        欢迎进入雨轩后台管理系统
      </h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
          <template #prefix>
            <svg-icon icon-class="user" class="el-input__icon input-icon"/>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码">
          <template #prefix>
            <svg-icon icon-class="password" class="el-input__icon input-icon"/>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="code" v-if="false">
        <el-input v-model="loginForm.code" auto-complete="off" placeholder="验证码" style="width: 63%">
          <template #prefix>
            <svg-icon icon-class="validCode" class="el-input__icon input-icon"/>
          </template>
        </el-input>
        <div class="login-code">
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin:0 0 25px 0;">
        记住我
      </el-checkbox>
      <el-form-item style="width:100%;">
        <el-button @click="doLogin" size="medium" :loading="loading" type="primary" style="width:100%;">
          <span>登 录</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '@/api/system/user'
export default {
  name: "login",
  data() {
    return {
      redirect: undefined,
      loading: false,
      loginForm: {
        rememberMe: false,
        username: 'yuxuan',
        password: 'yuxuan2012',
      },
    }
  },
  watch: {
    $route: {
      handler(route) {
        this.redirect = (route.query && route.query.redirect) || '/'
      },
      immediate: true
    },
  },methods:{
    doLogin(){
      this.loading = true
      this.$store.dispatch('user/login', this.form).then(()=>{
        const routerPath = this.redirect === '/404' || this.redirect === '/401'? '/' : this.redirect
        this.$router.push(routerPath).catch(() => {})
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  background: url('http://api.yuxuan66.com/images/bing/getWallpaper') center center fixed no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  margin: 0 auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 385px;
  padding: 25px 25px 5px 25px;

  .el-input {
    height: 38px;

    input {
      height: 38px;
    }
  }

  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}

.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}

.login-code {
  width: 33%;
  display: inline-block;
  height: 38px;
  float: right;

  img {
    cursor: pointer;
    vertical-align: middle
  }
}
</style>