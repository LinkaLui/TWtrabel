<script setup>

import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const isMobile = document.body.clientWidth <= 640 ? true : false
const router = useRouter()
const path = computed(()=>{
  return router.currentRoute.value.path.replace('/','')
})

</script>

<template>
  <div class="w-auto mx-auto max-w-screen-xl font-moto" :class="{'max-w-screen-sm': isMobile}">
    <app-header :path="path" :is-mobile="isMobile"></app-header>
    <router-view></router-view>
    <app-footer :path="path" :is-mobile="isMobile"></app-footer>
  </div>
</template>

<style>

</style>