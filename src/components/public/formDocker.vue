<template>
  <el-form
    class="w100p h90p"
    ref="formRef"
    :model="workAreaDocker"
    :size="workAreaDocker.formSize"
    :label-position="workAreaDocker.labelPosition"
    :disabled="workAreaDocker.disabled"
  >
    <el-row class="w100p h100p">
      <VueDraggable
        class="w100p h100p"
        v-model="workAreaDocker.workArea"
        animation="150"
        :group="{ name: 'people' }"
        ghostClass="ghost"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <el-col
          :span="item.forItemList.formItemLabelWidth"
          v-for="(item, index) in workAreaDocker.workArea"
          :key="item.formItemId"
          @dragstart="selectIndex(index, 'mover')"
          @dragend="selectEnter()"
          @click="selectIndex(index)"
          :class="{
            bg_1: item.formItemId == store.getCurrent.formItemId,
            'el-color': mover && item.formItemId == store.getCurrent.formItemId,
          }"
        >
          <el-form-item
            :label="item.label"
            :prop="'workArea[' + index + '].default'"
            :rules="
              rules.getVerify(item.forItemList.rules)[item.forItemList.rules]
            "
            :required="item.forItemList.required"
          >
            <component :is="getComponent(item.componentmp)" :item="item">
            </component>
          </el-form-item>
        </el-col>
      </VueDraggable>
    </el-row>

    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
      <el-button @click="resetForm(formRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
//组件
import {
  sInput,
  sTextarea,
  sInputPassword,
  sInputNumber,
  sRadio,
} from "@/components/public/index.js";
//常用表单数据
import { setTool, setInput, setRadio } from "@/config/tool.js";
//拖拽组件
import { VueDraggable } from "vue-draggable-plus";
// ref获取dom
const formRef = ref(null);
// 表单验证规则
import formVerify from "@/config/formVerify.js";
let rules = new formVerify();
//仓库
import { meDoker } from "@/store/meDoker.js";
const store = meDoker();
//工作区域 // 表单的属性
const workAreaDocker = store.getworkArea;
const mover = ref(false);

const componentMap = {
  // 创建一个映射，将类型映射到组件
  sInput: sInput,
  sTextarea: sTextarea,
  sInputPassword: sInputPassword,
  sInputNumber: sInputNumber,
  sRadio: sRadio,
  // ... 其他方法 将类型映射到JSON
  setInput: setInput,
  setRadio: setRadio,
};
//获取组件函数
function getComponent(params) {
  return componentMap[params];
}

onMounted(() => {
  //   console.log(rules);
  //   Object.entries(rules).forEach(([sInput, sTextarea]) => {
  //     console.log(sInput, sTextarea);
  //   });
  console.log();
});

function onUpdate() {
  console.log("update");
}
//拖动添加时处理内容的方法
function onAdd(e) {
  console.log("Add");
  const newIndex = e.newIndex; // 获取darggable组件列表新增项的下标
  store.setcontentIndex(newIndex);
  const formCmp = workAreaDocker.workArea[newIndex];
  if (!formCmp.formItemId) {
    formCmp.formItemId = // 生成唯一id
      formCmp.type + "_" + Date.now() + "_" + Math.ceil(Math.random() * 99999);
  }
  console.log(formCmp.type);
  formCmp.forItemList = {};
  Object.entries(setTool).forEach(([key, value]) => {
    formCmp.forItemList[key] = value;
  });
  //单独需要处理的方法
  Object.entries(componentMap[formCmp.type]).forEach(([key, value]) => {
    formCmp.forItemList[key] = value;
  });
}
function remove() {
  console.log("remove");
}
function selectIndex(newIndex, pop) {
  if (pop == "mover") {
    setTimeout(() => {
      mover.value = true;
    }, 0);
  }
  store.setcontentIndex(newIndex);
}
function selectEnter(params) {
  mover.value = false;
  console.log("拖拽结束");
}
function submitForm(formEl) {
  console.log(formEl);
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
}
function resetForm(formEl) {
  console.log("清空表单");
  formEl.resetFields();
}
</script>

<style lang="scss" scoped>
.el-form-item {
  padding: 12px 10px;
}
.el-color {
  background-color: #67c23a;
  border-radius: 6px;
}
</style>
