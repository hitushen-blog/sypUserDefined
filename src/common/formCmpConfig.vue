<template>
  <el-form>
    <el-tabs v-model="activeName" v-if="store.getCurrent">
      <el-tab-pane label="组件属性" name="formItem">
        <!-- 组件属性 -->
        <el-form-item
          label="组件标识"
          v-show="typeIf(store.getCurrent.formItemId)"
        >
          <el-input v-model="store.getCurrent.formItemId"></el-input>
        </el-form-item>
        <el-form-item label="组件名称" v-show="typeIf(store.getCurrent.label)">
          <el-input v-model="store.getCurrent.label"></el-input>
        </el-form-item>
        <el-form-item label="默认值" v-show="typeIf(store.getCurrent.default)">
          <el-input v-model="store.getCurrent.default"></el-input>
        </el-form-item>

        <el-form-item
          label="占位符"
          v-show="typeIf(store.getCurrent.forItemList.placeholder)"
        >
          <el-input
            v-model="store.getCurrent.forItemList.placeholder"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="表单栅格"
          v-show="typeIf(store.getCurrent.forItemList.formItemLabelWidth)"
        >
          <el-slider
            v-model="store.getCurrent.forItemList.formItemLabelWidth"
            :min="2"
            :max="24"
          />
        </el-form-item>
        <el-form-item
          label="最多输入"
          v-show="typeIf(store.getCurrent.forItemList.maxlength)"
        >
          <el-input v-model="store.getCurrent.forItemList.maxlength">
            <template #append>个字符</template>
          </el-input>
        </el-form-item>
        <el-form-item
          label="能否清空"
          v-show="typeIf(store.getCurrent.forItemList.clearable)"
        >
          <el-switch v-model="store.getCurrent.forItemList.clearable" />
        </el-form-item>
        <el-form-item
          label="是否只读"
          v-show="typeIf(store.getCurrent.forItemList.readonly)"
        >
          <el-switch v-model="store.getCurrent.forItemList.readonly" />
        </el-form-item>

        <el-form-item
          label="是否禁用"
          v-show="typeIf(store.getCurrent.forItemList.disabled)"
        >
          <el-switch v-model="store.getCurrent.forItemList.disabled" />
        </el-form-item>

        <el-form-item
          label="是否必填"
          v-show="typeIf(store.getCurrent.forItemList.required)"
        >
          <el-switch v-model="store.getCurrent.forItemList.required" />
        </el-form-item>

        <el-form-item
          label="验证方式"
          v-show="typeIf(store.getCurrent.forItemList.rules)"
        >
          <el-select
            v-model="store.getCurrent.forItemList.rules"
            placeholder="默认"
          >
            <el-option
              v-for="item in formrulesOptions"
              :key="item.value"
              :label="item.title"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-divider v-show="typeIf(store.getCurrent.forItemList.name)">
          {{ store.getCurrent.forItemList.name }}
        </el-divider>
      </el-tab-pane>
      <!-- 表单属性 -->
      <el-tab-pane label="表单属性" name="formInfo">
        <el-form-item label="表单组件尺寸">
          <el-select v-model="store.getworkArea.formSize" placeholder="请选择">
            <el-option
              v-for="item in formSizeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="标签对齐">
          <el-radio-group v-model="store.getworkArea.labelPosition">
            <el-radio-button label="left" value="left" />
            <el-radio-button label="right" value="right" />
            <el-radio-button label="top" value="top" />
          </el-radio-group>
        </el-form-item>

        <el-form-item label="是否禁用">
          <el-switch v-model="store.getworkArea.disabled" />
        </el-form-item>
      </el-tab-pane>
    </el-tabs>
    <el-empty v-else description="请选择组件"></el-empty>
  </el-form>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { meDoker } from "@/store/meDoker.js";
// 表单验证规则
import formVerify from "@/config/formVerify.js";
let rules = new formVerify();
const store = meDoker();
const activeName = ref("formItem");
// 表单尺寸
let formSizeOptions = ref([
  { label: "默认", value: "default" },
  { label: "小", value: "small" },
  { label: "大", value: "large" },
]);
//表单验证方式
let formrulesOptions = ref([]);

onMounted(() => {
  Object.entries(rules).forEach(([sInput, sTextarea]) => {
    // console.log(sInput, sTextarea);
    formrulesOptions.value.push({
      title: sTextarea.title,
      value: sInput,
    });
  });
});
const typeIf = computed((params) => {
  return function (params) {
    return (typeof params == "undefined") == false ? true : false;
  };
});
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
  font-size: 12px;
  color: #606266;
  font-weight: 700;
}
</style>
