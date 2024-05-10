<template>
  <VueDraggable
    class="flex-warp space-between"
    v-model="data.list"
    animation="150"
    ghostClass="ghost"
    :group="{ name: 'people', pull: 'clone', put: false }"
    :sort="false"
    @update="onUpdate"
    @add="onAdd"
    @remove="remove"
  >
    <div
      class="w45p bg_1 bdr_2 h30 flex components-body mb10"
      v-for="item in data.list"
      :key="item"
    >
      <el-icon class="pl5 pr5">
        <Link />
      </el-icon>
      <span>{{ item.label }}</span>
    </div>
  </VueDraggable>
</template>

<script setup>
import { ref } from "vue";
import { VueDraggable } from "vue-draggable-plus";
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
function onUpdate() {
  console.log("update");
}
function onAdd() {
  console.log("add");
}
function remove() {
  console.log("remove");
}
</script>

<style lang="scss" scoped>
.components-body {
  border-radius: 3px;

  &:hover {
    border: 1px dashed #787be8;
    color: #787be8;
    cursor: move;
  }
}
</style>
