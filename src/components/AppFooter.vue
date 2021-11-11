<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore()
const device = reactive({
    path: computed(() => { return store.state.path }),
    isMobile: computed(() => { return store.state.isMobile })
})

</script>

<template>
    <div
        class=""
        :class="[
            `bg-${device.path ? device.path : 'home' }`,
            {'flex justify-start items-center h-76px' : !device.isMobile},
            {'block min-h-200px px-12' : device.isMobile}
        ]"
    >
        <img 
        class="py-2" 
        :class="[
            {'mx-7 w-[calc(4%)]' : !device.isMobile},
            {'mx-auto w-[calc(35%)]' : device.isMobile}
        ]"
        :src="`/src/assets/logo.png`"
        >
        <div 
            class="text-white_text font-bold mt-2"
            :class="[
                {'text-md' : !device.isMobile},
                {'text-sm leading-7' : device.isMobile}
            ]"
        >
            24小時免付費旅遊諮詢熱線：0800-011765 <br/>
            免付費國旅券專線：0800-211734（服務時間：週一至週日8:30~18:30）
        </div>
    </div>
</template>