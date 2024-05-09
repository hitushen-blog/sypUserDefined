<template>
    <el-form>
        <el-tabs v-model="activeName" v-if="store.getCurrent">
            <el-tab-pane label="组件属性" name="formItem">
                <!-- 组件属性 -->
                <el-form-item label="组件标识">
                    <el-input v-model="store.getCurrent.formItemId"></el-input>
                </el-form-item>
                <el-form-item label="组件名称">
                    <el-input v-model="store.getCurrent.label"></el-input>
                </el-form-item>
                <el-form-item label="默认值">
                    <el-input v-model="store.getCurrent.default"></el-input>
                </el-form-item>
                <el-form-item label="占位符">
                    <el-input v-model="store.getCurrent.forItemList.placeholder"></el-input>
                </el-form-item>
                <el-form-item label="表单栅格">
                    <el-slider v-model="store.getCurrent.forItemList.formItemLabelWidth" :min="2" :max="24" />
                </el-form-item>
                <el-form-item label="最多输入">
                    <el-input v-model="store.getCurrent.forItemList.maxlength">
                        <template #append>个字符</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="能否清空">
                    <el-switch v-model="store.getCurrent.forItemList.clearable" />
                </el-form-item>

                <el-form-item label="是否只读">
                    <el-switch v-model="store.getCurrent.forItemList.readonly" />
                </el-form-item>

                <el-form-item label="是否禁用">
                    <el-switch v-model="store.getCurrent.forItemList.disabled" />
                </el-form-item>
            </el-tab-pane>
            <!-- 表单属性 -->
            <el-tab-pane label="表单属性" name="formInfo">
                <el-form-item label="表单组件尺寸">
                    <el-select v-model="store.getworkArea.formSize" placeholder="请选择">
                        <el-option v-for="item in formSizeOptions" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>


     


            </el-tab-pane>
        </el-tabs>
        <el-empty v-else description="请选择组件"></el-empty>
    </el-form>
</template>

<script setup>
import { ref, reactive, toRefs, computed, inject, watch } from "vue";
import { meDoker } from "@/store/meDoker.js";
const store = meDoker()
const activeName = ref('formItem')
let formSizeOptions = ref([
    // 表单尺寸
    { label: "默认", value: "default" },
    { label: "小", value: "small" },
    { label: "大", value: "large" },
]);
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
    font-size: 12px;
    color: #606266;
    font-weight: 700;
}
</style>
