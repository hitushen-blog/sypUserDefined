<template>
  <el-input-number
    v-model="item.default"
    type="text"
    :min="0"
    :placeholder="item.forItemList.placeholder"
    :maxlength="item.forItemList.maxlength"
    :clearable="item.forItemList.clearable"
    :readonly="item.forItemList.readonly"
    :disabled="item.forItemList.disabled"
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
