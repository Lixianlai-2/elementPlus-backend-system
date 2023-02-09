<template>
  <h1>欢迎来到子路由的登录页面</h1>
  <Welcome msg='Li'></Welcome>
  <el-button @click='goHomePage'>
    回到首页
  </el-button>
</template>

<script setup>
import {useRouter} from 'vue-router'
import Welcome from './Welcome.vue'

const router = useRouter()
const goHomePage = function () {
  router.push('/')
}
</script>
