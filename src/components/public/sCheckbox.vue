<template>
  <el-checkbox-group
    v-model="item.default"
    :disabled="item.forItemList.disabled"
    :min="item.forItemList.min"
    :max="item.forItemList.max"
  >
    <template v-for="radioItem in item.forItemList.option" :key="radioItem">
      <el-checkbox
        :label="radioItem.value"
        :size="item.forItemList.formSize"
        :border="item.forItemList.border"
        v-if="item.forItemList.style == 'default'"
      >
        {{ radioItem.label }}
      </el-checkbox>

      <el-checkbox-button
        :label="radioItem.value"
        :size="item.forItemList.formSize"
        :border="item.forItemList.border"
        v-else
      >
        {{ radioItem.label }}
      </el-checkbox-button>
    </template>
  </el-checkbox-group>
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
