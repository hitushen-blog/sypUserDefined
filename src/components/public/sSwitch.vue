<template>
  <el-switch
    v-model="item.default"
    :disabled="item.forItemList.disabled"
    :active-text="item.forItemList['active-text']"
    :inactive-text="item.forItemList['inactive-text']"
    :active-value="item.forItemList['item.forItemList']"
    :inactive-value="item.forItemList['inactive-value']"
    :active-color="item.forItemList['active-color']"
    :inactive-color="item.forItemList['inactive-color']"
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
