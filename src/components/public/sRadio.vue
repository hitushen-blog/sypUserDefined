<template>
  <el-radio-group v-model="item.default" :disabled="item.forItemList.disabled">
    <template v-for="radioItem in item.forItemList.option" :key="radioItem">
      <el-radio
        :label="radioItem.value"
        :size="item.forItemList.formSize"
        :border="item.forItemList.border"
        v-if="item.forItemList.style == 'default'"
        >{{ radioItem.label }}
      </el-radio>

      <el-radio-button
        :label="radioItem.value"
        :size="item.forItemList.formSize"
        :border="item.forItemList.border"
        v-else
      >
        {{ radioItem.label }}
      </el-radio-button>
    </template>
  </el-radio-group>
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
