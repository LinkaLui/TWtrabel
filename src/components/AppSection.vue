<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore()
const device = reactive({
    path: computed(() => { return store.state.path }),
    isMobile: computed(() => { return store.state.isMobile })
})

const props = defineProps({
  text: String,
  color: String,
  hasMore: Boolean
})

</script>



<template>
  <div 
    class="flex justify-between items-center text-white_text"
    :class="[
      `bg-${props.color}`,
      {'h-70px px-10' : !device.isMobile},
      {'h-52px pl-6 pr-4 pt-1' : device.isMobile}
    ]"
  >
    <div
      class="inline-block font-bold"
      :class="[
        {'text-5xl' : !device.isMobile},
        {'text-1.75rem' : device.isMobile}
      ]"
    >{{props.text}}</div>
    <a v-if="props.hasMore"
      class="inline-block border-white_text rounded-10px border-3.5px"
      :class="[
        {'text-lg px-8 leading-8' : !device.isMobile},
        {'text-12px px-6 leading-6 font-bold' : device.isMobile}
      ]"
    >查看更多</a>
  </div>
  <div 
    :class="[
      {'py-20' : !device.isMobile},
      {'py-4' : device.isMobile}
    ]"
  >
    <slot></slot>
  </div>
</template>