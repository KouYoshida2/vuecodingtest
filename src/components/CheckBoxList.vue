<template>
  <div class="prefectures">

    <CheckBox
      v-for="prefectureData in PrefecturesData"
      :prefectureName="prefectureData.prefName"
      :prefectureCode="prefectureData.prefCode" 
      @population="Population">
    </CheckBox>


  </div>
</template>

<script lang="ts" setup>
import CheckBox from './CheckBox.vue';
import { getPrefectures } from '../repositories/PrefectureRepository'
import { onMounted,ref } from 'vue';


let PrefecturesData = ref();

onMounted( async() => {
  PrefecturesData.value = await getPrefectures();
})


// emitしてきたデータ　再度appまで受けわたす
const Population = (value:Array<object>) => {
  console.log(value);
}


</script>



<style lang="scss" scoped>
.prefectures{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1em;
}
</style>