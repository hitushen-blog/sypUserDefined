<template>
  <VueDraggable
    class="sContainer"
    v-model="item.default"
    animation="150"
    ghostClass="ghost"
    :group="{ name: 'people' }"
    @update="onUpdate"
    @add="onAdd"
    @remove="remove"
    @dragstart.stop
    :style="{ display: item.forItemList.display }"
  >
    <el-col
      :span="item.forItemList.formItemLabelWidth"
      v-for="(item, index) in item.default"
      :key="item.formItemId"
      @dragstart="selectIndex(index, 'mover', item)"
      @dragend="selectEnter()"
      @click.stop="selectIndex(index, '', item)"
      :class="{
        'el-color': getMover && item.formItemId == contentIndex,
      }"
    >
      <el-form-item
        class="el-col-list"
        :class="{
          bg_1: !getMover && item.formItemId == contentIndex,
          containernot: item.componentmp == 'sContainer',
          container:
            !getMover &&
            item.formItemId == contentIndex &&
            item.componentmp == 'sContainer',
        }"
        :label-width="!item['label-width'] ? 0 : getWorkArea['label-width']"
        :label="typeof item.forItemList.rules == 'undefined' ? '' : item.label"
        :prop="'workArea[' + index + '].default'"
        :rules="
          typeof item.forItemList.rules == 'undefined'
            ? []
            : rules.getVerify(item.forItemList.rules)[item.forItemList.rules]
        "
        :required="item.forItemList.required"
      >
        <div class="el-col-list-btn" v-if="item.formItemId == contentIndex">
          <el-button
            :icon="DocumentCopy"
            size="small"
            circle
            @click.stop="copyComponent(item)"
          />
          <el-button
            :icon="Delete"
            size="small"
            circle
            @click.stop="deleteComponent(item)"
          />
        </div>

        <component
          :is="getComponent(item.componentmp)"
          :item="item"
          :dataIndex="index"
        >
        </component>
      </el-form-item>
    </el-col>
  </VueDraggable>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from "vue";
//导入图标
import { Delete, DocumentCopy } from "@element-plus/icons-vue";

//拖拽组件
import { VueDraggable } from "vue-draggable-plus";

//组件
import sComponents from "@/components/public/index.js";

//常用表单数据
import tool from "@/config/tool.js";

// 表单验证规则
import formVerify from "@/config/formVerify.js";
let rules = new formVerify();

//仓库
import { storeToRefs } from "pinia";
import { meDoker } from "@/store/meDoker.js";
const store = meDoker();
//工作区域 // 表单的属性
const { getMover, getWorkArea, contentIndex } = storeToRefs(store);

//接收参数
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
  dataIndex: {
    type: Number,
  },
});

//获取组件函数
function getComponent(params) {
  return componentMap[params];
}
//组件和组件属性的映射对象
const componentMap = {};
onMounted(() => {
  //组件集合进行映射
  Object.entries(sComponents).forEach(([key, value]) => {
    componentMap[key] = value;
  });
  //将组件独有属性进行映射
  Object.entries(tool).forEach(([key, value]) => {
    componentMap[key] = value;
  });
});

//拖动添加时处理内容的方法
function onAdd(e) {
  console.log(e, "Add");
  const newIndex = e.newIndex; // 获取darggable组件列表新增项的下标
  const formCmp = props.item.default[newIndex];
  if (!formCmp.formItemId) {
    formCmp.formItemId = formCmp.type + store.getNewId(); // 生成唯一id
  }
  formCmp.forItemList = {};
  //单独需要处理的方法
  Object.entries(componentMap[formCmp.type]).forEach(([key, value]) => {
    formCmp.forItemList[key] = value;
  });
  if (formCmp.forItemList.setTool) {
    Object.entries(formCmp.forItemList.setTool).forEach(([key, value]) => {
      formCmp.forItemList[key] = value;
    });
  }
  store.setContentIndex(formCmp.formItemId);
}
//更新
function onUpdate(e) {
  console.log(e, "update");
  store.setContentIndex(props.item.default[e.newIndex].formItemId);
}
//移除
function remove(e) {
  console.log(e, "remove");
}
//拖动开始
function selectIndex(newIndex, pop, params) {
  if (pop == "mover") {
    setTimeout(() => {
      store.setGeneral({
        key: "mover",
        value: true,
      });
    }, 0);
  }
  store.setContentIndex(params.formItemId);
}
//拖动结束
function selectEnter(params) {
  store.setGeneral({
    key: "mover",
    value: false,
  });
  console.log("拖拽结束");
}

function copyComponent(params) {
  store.setComponents(getWorkArea.value.workArea, params);
}
function deleteComponent(params) {
  store.deleteworkAreaDocker(getWorkArea.value.workArea, params);
}
</script>

<style lang="scss" scoped>
.sContainer {
  width: 100%;
  min-height: 100px;
  .el-form-item {
    padding: 12px 10px;
  }
  .el-col-list {
    position: relative;
    .el-col-list-btn {
      position: absolute;
      top: -20px;
      right: 20px;
      z-index: 99;
    }
  }

  .containernot {
    color: #bbb;
    border: 1px dashed #bbb;
  }
  .container {
    color: #409eff;
    border: 1px dashed #409eff;
    background-color: transparent;
  }
  .el-color {
    background-color: #67c23a;
    border-top: 3px solid #409eff;
  }
}
</style>
