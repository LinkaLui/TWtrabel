<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore()
const device = reactive({
    isMobile: computed(() => { return store.state.isMobile })
})

const props = defineProps({
  list: Array,
})

</script>

// Address:"宜蘭縣260宜蘭市環河路"
// City:"宜蘭縣"
// Class1:"遊憩類"
// Class2:"都會公園類"
// Description:"在日治時期，宜蘭廳長看到宜蘭河時常氾濫，於是開始修建堤防整治河道，因當時的宜蘭河的水量豐沛，在站在堤防上看景，發現水面映照山巒的倒影，就像畫屏，而被選為蘭陽十八勝之一。 而現在的宜蘭河在規劃後，開始修建田徑場、籃球場、棒球場等設施，也綠化了附近的河岸與景觀，並成為河濱公園，是有節日慶典活動、平時或假日放鬆休閒騎自行車的好去處。 沿著河堤規劃的宜蘭河線自行車道全長約15公里，由河濱公園作為出發點，一路上可欣賞宜蘭河的風光美景，再經過西鄉廳憲德政碑等景點後抵達終點站員山公園，享受悠閒自在的時光。 擁有無邊無際的青青草原的河濱公園，不僅是當地人很熱門的運動場所，也是遊客所喜愛的地方，能夠一掃心中所有的煩惱與疲倦。"
// DescriptionDetail:"在日治時期，宜蘭廳長看到宜蘭河時常氾濫，於是開始修建堤防整治河道，因當時的宜蘭河的水量豐沛，在站在堤防上看景，發現水面映照山巒的倒影，就像畫屏，而被選為蘭陽十八勝之一。 而現在的宜蘭河在規劃後，開始修建田徑場、籃球場、棒球場等設施，也綠化了附近的河岸與景觀，並成為河濱公園，是有節日慶典活動、平時或假日放鬆休閒騎自行車的好去處。 沿著河堤規劃的宜蘭河線自行車道全長約15公里，由河濱公園作為出發點，一路上可欣賞宜蘭河的風光美景，再經過西鄉廳憲德政碑等景點後抵達終點站員山公園，享受悠閒自在的時光。 擁有無邊無際的青青草原的河濱公園，不僅是當地人很熱門的運動場所，也是遊客所喜愛的地方，能夠一掃心中所有的煩惱與疲倦。"
// ID:"C1_376420000A_000248"
// Name:"宜蘭河濱公園"
// OpenTime:"全天候"
// ParkingPosition:Object (empty)
// Phone:"886-3-9505544"
// Picture:Object (empty)
// Position:Object
// SrcUpdateTime:"2021-11-11T01:11:52+08:00"
// UpdateTime:"2021-11-11T02:10:14+08:00"
// ZipCode:"260"

<template>
  <!-- <div 
    class="flex justify-between items-center text-white_text"
    :class="[
      `bg-${props.color}`,
      {'h-70px px-10' : !device.isMobile},
      {'h-52px pl-6 pr-4 pt-1' : device.isMobile}
    ]"
  > -->
  <div
    :class="[
      {'space-x-35px text-center' : !device.isMobile},
      {'space-y-1.125rem' : device.isMobile}
    ]"
  >
    <div v-for="item in props.list"
      class="mx-auto overflow-hidden text-center"
      :class="[
        {'w-96 h-md rounded-1.875rem inline-block' : !device.isMobile},
        {'w-64 h-72 rounded-1.25rem' : device.isMobile}
      ]"
    >
      <img
        class="inline-block bg-white_text object-cover object-center" 
        :class="[
          {'w-96 h-md' : !device.isMobile},
          {'w-64 h-72' : device.isMobile}
        ]"
        :src="item.Picture.PictureUrl1"
        :alt="item.Picture.PictureDescription1"
      />
    </div>
    <div></div>
    
  </div>
</template>