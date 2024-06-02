<template>
  <div>
    <VueDraggable
      v-model="store.getCurrent.forItemList.option"
      :animation="150"
      handle=".handle"
    >
      <li
        v-for="(item, index) in store.getCurrent.forItemList.option"
        :key="item.label + index"
        class="flex"
      >
        <el-icon :size="20" color="#777" class="pl5 pr5 move handle"
          ><Operation
        /></el-icon>
        <el-input v-model="item.label" placeholder="选项名" />
        <el-input v-model="item.value" placeholder="选项值" />

        <el-icon
          @click="remove(index)"
          :size="20"
          color="#f56c6c"
          class="pl5 pr5 point"
          ><CircleClose
        /></el-icon>
      </li>
    </VueDraggable>
    <!-- <preview-list :list="store.getCurrent.forItemList.option" /> -->
    <div class="el-button--text zhong mt10" @click.prevent="handleAdd">
      <el-icon><CirclePlus /></el-icon>
      <span> 添加选项 </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VueDraggable } from "vue-draggable-plus";
//仓库
import { meDoker } from "@/store/meDoker.js";
const store = meDoker();

function handleAdd() {
  store.getCurrent.forItemList.option.push({
    label: ``,
    value: ``,
  });
}

function remove(index) {
  store.getCurrent.forItemList.option.splice(index, 1);
}
</script>

<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
.el-button--text {
  color: #1890ff;
  font-size: 14px;
}
</style>
