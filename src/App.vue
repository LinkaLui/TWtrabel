<script setup>
import { computed, reactive, readonly, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const router = useRouter()
const store = useStore()

const isMobile = document.body.clientWidth <= 640 ? true : false
const path = computed(()=>{
  return router.currentRoute.value.path.replace('/','')
})

watchEffect(()=> {
  store.commit('setIsMobile',isMobile)
})

watch(path,()=>{
  store.commit('setPath',path)
})

</script>

<template>
  <div class="w-auto mx-auto max-w-screen-xl font-moto" :class="{'max-w-screen-sm': isMobile}">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<style>

</style>