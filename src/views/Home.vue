<script setup>
import { reactive, watch, watchEffect } from 'vue';
import { fetchData } from '../js/api';
import { getRandomData } from '../js/utinity';
import AppSection from '../components/AppSection.vue'
import Card from '../components/Card.vue'


const listData = reactive({
    attraction: [],
    food: [],
    hotel: [],
})
fetchData({ api: 'getAttractionList', param: { topic:['hot'] }}, (data) => {
    console.log(data)
    listData.attraction = getRandomData(data,3);
});
fetchData({ api: 'getFoodList', param: { topic:['hot'] }}, (data) => {
    listData.food = getRandomData(data,3);
});
fetchData({ api: 'getHotelList', param: { topic:['recommend'] }}, (data) => {
    listData.hotel = getRandomData(data,3);
});

</script>
<template>
    <div>
        <div>台灣許多美景媲美國外，值此五倍券、國旅券及觀光業者加碼優惠盡出之際，旅行台灣就是現在！ 到哪裡旅遊還沒有想法的民眾，歡迎到台灣觀光，體驗「台灣之美」!</div>
    </div>
    <app-section color="attraction" has-more=true text="熱門景點">
        <card :list="listData.attraction"></card>
    </app-section>
    <app-section color="food" has-more=true text="熱門美食">
        <card :list="listData.food"></card>
    </app-section>
    <app-section color="hotel" has-more=true text="住宿推薦">
        <card :list="listData.hotel"></card>
    </app-section>
</template>
