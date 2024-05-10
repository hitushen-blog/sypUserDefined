<template>
  <el-radio-group v-model="item.default" :disabled="item.forItemList.disabled">
    <el-radio
      :label="radioItem.value"
      v-for="radioItem in item.forItemList.option"
      :key="radioItem"
      >{{ radioItem.label }}
    </el-radio>
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
