<template>
  <el-date-picker
    v-if="
      !item.forItemList.type.includes('datetimerange') &&
      !item.forItemList.type.includes('daterange')
    "
    v-model="item.default"
    :disabled="item.forItemList.disabled"
    :placeholder="item.forItemList.placeholder"
    :type="item.forItemList.type"
  />
  <el-date-picker
    v-else
    v-model="item.defaultArray"
    :disabled="item.forItemList.disabled"
    :placeholder="item.forItemList.placeholder"
    :type="item.forItemList.type"
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
