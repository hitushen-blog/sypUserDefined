<template>
  <el-upload
    v-model:item.default="item.default"
    class="upload"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :multiple="item.forItemList.multiple"
    :limit="item.forItemList.limit"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-exceed="handleExceed"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">将文件拖放到这里或 <em>点击上传</em></div>
    <template #tip>
      <div class="el-upload__tip">jpg/png 文件大小小于 100M</div>
    </template>
  </el-upload>
</template>

<script setup>
import { ref } from "vue";
import { UploadFilled } from "@element-plus/icons-vue";
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
function handlePreview(params) {
  console.log(params, 1);
}
function handleRemove(params) {
  console.log(params, 2);
}
function beforeRemove(params) {
  console.log(params, 3);
}
function handleExceed(params) {
  console.log(params, 4);
}
</script>

<style lang="scss" scoped>
.upload {
  width: 100%;
}
</style>
