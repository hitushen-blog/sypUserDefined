<template>
  <el-rate
    v-model="item.default"
    :allow-half="item.forItemList['allow-half']"
    :show-score="item.forItemList['show-score']"
    :show-text="item.forItemList['show-text']"
    :texts="item.forItemList.texts"
    :max="item.forItemList.max"
  />
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped></style>
