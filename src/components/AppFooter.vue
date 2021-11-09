<script setup>
const props = defineProps({
  isMobile: Boolean,
  path: String
})

</script>

<template>
    <div
        class=""
        :class="[
            `bg-${props.path ? props.path : 'home' }`,
            {'flex justify-start items-center h-76px' : !props.isMobile},
            {'block min-h-200px px-12' : props.isMobile}
        ]"
    >
        <img 
        class="py-2" 
        :class="[
            {'mx-7 w-[calc(4%)]' : !props.isMobile},
            {'mx-auto w-[calc(35%)]' : props.isMobile}
        ]"
        :src="`/src/assets/logo.png`"
        >
        <div 
            class="text-white_text font-bold mt-2"
            :class="[
                {'text-md' : !props.isMobile},
                {'text-sm leading-7' : props.isMobile}
            ]"
        >
            24小時免付費旅遊諮詢熱線：0800-011765 <br/>
            免付費國旅券專線：0800-211734（服務時間：週一至週日8:30~18:30）
        </div>
    </div>
</template>