<template>
  <el-input
    v-model="item.default"
    type="password"
    :placeholder="item.forItemList.placeholder"
    :maxlength="item.forItemList.maxlength"
    :clearable="item.forItemList.clearable"
    :readonly="item.forItemList.readonly"
    :disabled="item.forItemList.disabled"
    show-password
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
