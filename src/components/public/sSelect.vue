<template>
  <el-select
    v-model="item.default"
    :disabled="item.forItemList.disabled"
    :multiple="item.forItemList.multiple"
    :filterable="item.forItemList.filterable"
    v-if="!item.forItemList.multiple"
  >
    <el-option
      v-for="item in item.forItemList.option"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

  <el-select
    v-model="item.defaultArray"
    :disabled="item.forItemList.disabled"
    :multiple="item.forItemList.multiple"
    :filterable="item.forItemList.filterable"
    v-else
  >
    <el-option
      v-for="item in item.forItemList.option"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped></style>
