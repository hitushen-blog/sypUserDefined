<template>
  <el-form>
    <el-tabs
      v-model="activeName"
      v-if="Object.getOwnPropertyNames(computedList).length > 0"
    >
      <el-tab-pane label="组件属性" name="formItem">
        <!-- 组件属性 -->
        <el-form-item label="组件标识" v-show="typeIf(computedList.formItemId)">
          <el-input v-model="computedList.formItemId"></el-input>
        </el-form-item>
        <el-form-item label="组件名称" v-show="typeIf(computedList.label)">
          <el-input v-model="computedList.label"></el-input>
        </el-form-item>
        <el-form-item
          v-if="
            !computedList.forItemList.multiple &&
            !computedList.forItemList.type?.includes('datetimerange') &&
            !computedList.forItemList.type?.includes('daterange')
          "
          label="默认值"
          v-show="typeIf(computedList.default)"
        >
          <el-input v-model="computedList.default"></el-input>
        </el-form-item>

        <el-form-item
          v-else
          label="默认值"
          v-show="typeIf(computedList.defaultArray)"
        >
          <el-input v-model="computedList.defaultArray"></el-input>
        </el-form-item>

        <el-form-item
          label="占位符"
          v-show="typeIf(computedList.forItemList.placeholder)"
        >
          <el-input v-model="computedList.forItemList.placeholder"></el-input>
        </el-form-item>
        <el-form-item
          label="表单栅格"
          v-show="typeIf(computedList.forItemList.formItemLabelWidth)"
        >
          <el-slider
            v-model="computedList.forItemList.formItemLabelWidth"
            :min="2"
            :max="24"
          />
        </el-form-item>
        <el-form-item
          label="最多输入"
          v-show="typeIf(computedList.forItemList.maxlength)"
        >
          <el-input v-model="computedList.forItemList.maxlength">
            <template #append>个字符</template>
          </el-input>
        </el-form-item>
        <el-form-item
          label="能否清空"
          v-show="typeIf(computedList.forItemList.clearable)"
        >
          <el-switch v-model="computedList.forItemList.clearable" />
        </el-form-item>
        <el-form-item
          label="是否只读"
          v-show="typeIf(computedList.forItemList.readonly)"
        >
          <el-switch v-model="computedList.forItemList.readonly" />
        </el-form-item>

        <el-form-item
          label="是否禁用"
          v-show="typeIf(computedList.forItemList.disabled)"
        >
          <el-switch v-model="computedList.forItemList.disabled" />
        </el-form-item>

        <el-form-item
          label="是否必填"
          v-show="typeIf(computedList.forItemList.required)"
        >
          <el-switch v-model="computedList.forItemList.required" />
        </el-form-item>

        <el-form-item
          label="允许半选"
          v-show="typeIf(computedList.forItemList['allow-half'])"
        >
          <el-switch v-model="computedList.forItemList['allow-half']" />
        </el-form-item>
        <el-form-item
          label="显示分数"
          v-show="typeIf(computedList.forItemList['show-score'])"
        >
          <el-switch
            v-model="computedList.forItemList['show-score']"
            @change="
              (e) => {
                e ? (computedList.forItemList['show-text'] = false) : '';
              }
            "
          />
        </el-form-item>

        <el-form-item
          label="辅助文字"
          v-show="typeIf(computedList.forItemList['show-text'])"
        >
          <el-switch
            v-model="computedList.forItemList['show-text']"
            @change="
              (e) => {
                e ? (computedList.forItemList['show-score'] = false) : '';
              }
            "
          />
        </el-form-item>

        <el-form-item
          label="显示间断点
"
          v-show="typeIf(computedList.forItemList['show-stops'])"
        >
          <el-switch v-model="computedList.forItemList['show-stops']" />
        </el-form-item>

        <el-form-item
          label="范围选择"
          v-show="typeIf(computedList.forItemList.range)"
        >
          <el-switch v-model="computedList.forItemList.range" />
        </el-form-item>

        <el-form-item
          label="是否多选"
          v-show="typeIf(computedList.forItemList.multiple)"
        >
          <el-switch v-model="computedList.forItemList.multiple" />
        </el-form-item>

        <el-form-item
          label="启用搜索功能"
          v-show="typeIf(computedList.forItemList.filterable)"
        >
          <el-switch v-model="computedList.forItemList.filterable" />
        </el-form-item>

        <el-form-item
          label="验证方式"
          v-show="typeIf(computedList.forItemList.rules)"
        >
          <el-select
            v-model="computedList.forItemList.rules"
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
        <el-form-item
          label="选项样式"
          v-show="typeIf(computedList.forItemList.style)"
        >
          <el-radio-group v-model="computedList.forItemList.style">
            <el-radio-button label="default">默认</el-radio-button>
            <el-radio-button label="button">按钮</el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          label="边框"
          v-show="
            computedList.forItemList.style == 'default' &&
            typeIf(computedList.forItemList.border)
          "
        >
          <el-switch v-model="computedList.forItemList.border" />
        </el-form-item>

        <el-form-item
          label="选项尺寸"
          v-show="
            computedList.forItemList.style == 'button' &&
            typeIf(computedList.forItemList.formSize)
          "
        >
          <el-radio-group v-model="computedList.forItemList.formSize">
            <el-radio-button
              v-for="item in formSizeOptions"
              :key="item.value"
              :label="item.value"
              :value="item.value"
              >{{ item.label }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>

        <el-form-item
          label="布局方式"
          v-show="typeIf(computedList.forItemList.display)"
        >
          <el-radio-group v-model="computedList.forItemList.display">
            <el-radio-button
              v-for="item in display"
              :key="item.value"
              :label="item.value"
              :value="item.value"
              >{{ item.label }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="至少应选"
          v-show="typeIf(computedList.forItemList.min)"
        >
          <el-input-number v-model="computedList.forItemList.min" :min="0" />
        </el-form-item>
        <el-form-item
          label="最多可选"
          v-show="typeIf(computedList.forItemList.max)"
        >
          <el-input-number v-model="computedList.forItemList.max" :min="0" />
        </el-form-item>

        <el-form-item
          label="步长"
          v-show="typeIf(computedList.forItemList.step)"
        >
          <el-input-number v-model="computedList.forItemList.step" :min="1" />
        </el-form-item>

        <el-divider v-show="typeIf(computedList.forItemList.name)">
          {{ computedList.forItemList.name }}
        </el-divider>
        <!-- 自定义组件 -->
        <add-radio v-show="typeIf(computedList.forItemList.option)"></add-radio>

        <el-form-item
          label="颜色选择"
          v-show="typeIf(computedList.forItemList['color-format'])"
        >
          <el-select
            v-model="computedList.forItemList['color-format']"
            placeholder="颜色格式"
          >
            <el-option
              v-for="item in formColorFormat"
              :key="item.label"
              :label="item.label"
              :value="item.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="时间类型"
          v-show="typeIf(computedList.forItemList.type)"
        >
          <el-select
            v-model="computedList.forItemList.type"
            placeholder="请选择日期"
          >
            <el-option
              v-for="item in formDatePicker"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="开启时的文字"
          v-show="typeIf(computedList.forItemList['active-text'])"
        >
          <el-input
            v-model="computedList.forItemList['active-text']"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="关闭时的文字"
          v-show="typeIf(computedList.forItemList['inactive-text'])"
        >
          <el-input
            v-model="computedList.forItemList['inactive-text']"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="开启值"
          v-show="typeIf(computedList.forItemList['active-value'])"
        >
          <el-input
            v-model="computedList.forItemList['active-value']"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="关闭值"
          v-show="typeIf(computedList.forItemList['inactive-value'])"
        >
          <el-input
            v-model="computedList.forItemList['inactive-value']"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="开启颜色"
          v-show="typeIf(computedList.forItemList['active-color'])"
        >
          <el-color-picker v-model="computedList.forItemList['active-color']" />
        </el-form-item>

        <el-form-item
          label="关闭颜色"
          v-show="typeIf(computedList.forItemList['inactive-color'])"
        >
          <el-color-picker
            v-model="computedList.forItemList['inactive-color']"
          />
        </el-form-item>
      </el-tab-pane>

      <!-- 表单属性 -->
      <el-tab-pane label="表单属性" name="formInfo">
        <el-form-item label="组件尺寸">
          <el-radio-group v-model="store.getWorkArea.formSize">
            <el-radio-button
              v-for="item in formSizeOptions"
              :key="item.value"
              :label="item.value"
              :value="item.value"
              >{{ item.label }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>

        <el-form-item label="标签对齐">
          <el-radio-group v-model="store.getWorkArea.labelPosition">
            <el-radio-button label="left" value="left" />
            <el-radio-button label="right" value="right" />
            <el-radio-button label="top" value="top" />
          </el-radio-group>
        </el-form-item>

        <el-form-item label="标签宽度">
          <el-input-number v-model="store.getWorkArea['label-width']" />
        </el-form-item>

        <el-form-item label="是否禁用">
          <el-switch v-model="store.getWorkArea.disabled" />
        </el-form-item>
      </el-tab-pane>
    </el-tabs>
    <el-empty v-else description="请选择组件"></el-empty>
  </el-form>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { meDoker } from "@/store/meDoker.js";
// 表单验证规则
import formVerify from "@/config/formVerify.js";
let rules = new formVerify();
import { addRadio } from "@/components/scattered/index.js";
//仓库
const store = meDoker();
const { getCurrent } = storeToRefs(store);
//分类组件属性/表单属性
const activeName = ref("formItem");
// 表单尺寸
let formSizeOptions = ref([
  { label: "中等", value: "default" },
  { label: "较大", value: "large" },
  { label: "迷你", value: "small" },
]);
//颜色格式
let formColorFormat = ref([
  { label: "hex" },
  { label: "rgb" },
  { label: "rgba" },
  { label: "hsl" },
  { label: "hsv" },
]);
//时间格式
let formDatePicker = ref([
  { label: "年(year)", value: "year" },
  { label: "月(month)", value: "month" },
  { label: "日(date)", value: "date" },
  { label: "日期(datetime)", value: "datetime" },
  { label: "周(week)", value: "week" },
  { label: "日期范围(datetimerange)", value: "datetimerange" },
  { label: "范围(daterange)", value: "daterange" },
]);

//垂直布局
let display = ref([
  { label: "垂直", value: "block" },
  { label: "水平", value: "flex" },
]);
//表单验证方式
let formrulesOptions = ref([]);
const computedList = computed(() => {
  return getCurrent.value;
});
onMounted(() => {
  Object.entries(rules).forEach(([sInput, sTextarea]) => {
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
:v-deep(.el-form-item__label) {
  font-size: 12px;
  color: #606266;
  font-weight: 700;
}
</style>
