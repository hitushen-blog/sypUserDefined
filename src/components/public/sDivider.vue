<template>
  <el-divider :content-position="item.forItemList['content-position']">
    {{ item.default }}
  </el-divider>
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
