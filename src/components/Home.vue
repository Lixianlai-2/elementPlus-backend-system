<template>
  <h1>这是Home页面</h1>
  <el-button @click='goLogin'>
    跳转到登录页面
  </el-button>
  <router-view></router-view>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
const goLogin = function () {
  router.push('/login')
}
</script>
