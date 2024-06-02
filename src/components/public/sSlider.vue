<template>
  <el-slider
    v-model="item.default"
    :disabled="item.forItemList.disabled"
    :step="item.forItemList.step"
    :min="item.forItemList.min"
    :max="item.forItemList.max"
    :show-stops="item.forItemList['show-stops']"
    :range="item.forItemList.range"
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
