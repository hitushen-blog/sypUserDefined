<template>
    <el-row class="w100p h100p">
        <VueDraggable class="w100p h100p" v-model="workAreaDocker.workArea" animation="150" :group="{name:'people'}"
            ghostClass="ghost" @update="onUpdate" @add="onAdd" @remove="remove">
            <el-col :span="item.forItemList.formItemLabelWidth"   v-for="item in workAreaDocker.workArea" :key="item.formItemId">

                <el-form :model="workAreaDocker" :size="workAreaDocker.formSize"
                    :label-position="workAreaDocker.labelPosition"   class="el-form">
                        <component :is='getComponent(item.type)' :item="item"    >
                        </component>
                </el-form>

            </el-col>
        </VueDraggable>
    </el-row>
</template>

<script setup>
import { ref, onMounted } from "vue"
//组件
import { sInput,sTextarea } from "@/components/public/index.js";
//常用表单数据
import setTool from "@/config/setTool.js";
//拖拽组件
import { VueDraggable } from 'vue-draggable-plus'
//仓库
import { meDoker } from "@/store/meDoker.js";
const store = meDoker()
//工作区域 // 表单的属性
const workAreaDocker = store.getworkArea


// 创建一个映射，将类型映射到组件  
const componentMap = {
    'sInput': sInput,
    'sTextarea': sTextarea,
    // ... 其他组件  
};
//获取组件
function getComponent(params) {
    return componentMap[params]
}

onMounted(() => {
})

function onUpdate() {
    console.log('update')
}


function onAdd(e) {
    console.log(e);
    const newIndex = e.newIndex; // 获取darggable组件列表新增项的下标
    store.setcontentIndex(newIndex)
    console.log(workAreaDocker.workArea);
    const formCmp = workAreaDocker.workArea[newIndex]
    if (!formCmp.formItemId) {
        formCmp.formItemId = // 生成唯一id
            formCmp.type +
            "_" +
            Date.now() +
            "_" +
            Math.ceil(Math.random() * 99999);
    }
    formCmp.forItemList = {}
    Object.entries(setTool).forEach(([key, value]) => {
        formCmp.forItemList[key] = value;
    });
}
function remove() {
    console.log('remove')
}
</script>

<style lang="scss" scoped>

</style>