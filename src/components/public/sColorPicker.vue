<template>
  <el-color-picker
    v-model="item.default"
    :disabled="item.forItemList.disabled"
    :color-format="item.forItemList['color-format']"
    :size="item.forItemList.formSize"
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
