<template>
  <el-dialog v-model="dialogVisible" :title="title" width="80%">
    <slot></slot>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="change(0)">关闭</el-button>
        <el-button type="primary" @click="change(1)"> 下载JSON </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
const dialogVisible = defineModel({
  type: Boolean,
  default: false,
});
const props = defineProps({
  title: {
    type: String,
    default: "标题",
  },
});
const emit = defineEmits(["change"]);
function change(params) {
  emit("change", params);
}
</script>
