<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore()
const device = reactive({
    path: computed(() => { return store.state.path }),
    isMobile: computed(() => { return store.state.isMobile })
})

const options =[
  { text: '活動新訊', link: '' },
  { text: '景點', link: 'attraction' },
  { text: '美食', link: 'food' },
  { text: '住宿', link: 'hotel' },
  { text: '交通', link: 'travel' }
]

</script>

<template>
  <div class="absolute max-w-screen-xl w-full z-10 text-right pt-6 pr-6">
    <ul class="inline-block align-middle divide-black divide-x-2 divide-opacity-30 divide-solid font-bold opacity-50">
      <router-link class="inline-block px-1" v-for="option in options" :to="`/${option.link}`">
        <li>{{option.text}}</li>
      </router-link>
    </ul>
    <div class="inline-block align-middle px-1 opacity-50"><icon-ion-search class="mt-1"/></div>
    <div class="inline-block align-middle rounded-1/2 w-1.875rem h-1.875rem bg-white opacity-100 text-center py-1 mx-2"><icon-line-md-account /></div>
  </div>
  <div class="relative">
    <img 
      class="absolute left-1/2 transform -translate-x-1/2 z-1" 
      :class="[
        {'top-4/100 w-[calc(12%)]' : !device.isMobile && device.path},
        {'top-6/100 w-[calc(22%)]' : !device.isMobile && !device.path},
        {'top-8/100 w-[calc(24%)]' : device.isMobile}
      ]"
      :src="`/src/assets/logo${(device.isMobile || device.path) ? '-small' : ''}.png`"
    >
    <img class="w-full" :src="`/src/assets/background-${device.path !== '' ? device.path : 'home'}${device.isMobile ? '-m' : ''}.png`">
  </div>
</template>