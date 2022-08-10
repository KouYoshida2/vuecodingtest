<template>
  <div>
    <label>{{prefectureName}}:{{prefectureCode}}</label>
    <input type="checkbox"  v-model="flag" @click="getPopulation(prefCode)">
    {{flag}}
  </div>
</template>

<script lang="ts" setup>
import  { ref } from 'vue';
import getPopulationData from '../repositories/PopulationRepository'


// emit定義
const emit = defineEmits<{
  (e:'population',value:Object[]):void;
}>();

// props定義
const props = defineProps<{
  prefectureName:string;
  prefectureCode:number;
}>();

// 取得してきたコード　モック
const prefCode = props.prefectureCode;

// チェックボックス判定用フラッグ
const flag = ref<boolean>();

// チェックボックスがついたら動作
const getPopulation = async (id:number) => {
  if(!flag.value){
    // リポジトリーからデータ取得　配列オブジェクト
    const PopulationData = new getPopulationData(id);

    const _PopulationData = await Promise.all([PopulationData.getPopulation()]);
    emit('population' , _PopulationData[0]);

  }
}

</script>

<style scoped lang="scss">
</style>