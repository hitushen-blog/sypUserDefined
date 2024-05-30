<template>
  <el-row>
    <el-col :span="24" class="h30 bdr_1 pl20 pr20 space-between">
      <div>LOGO</div>
      <div>
        <el-switch
          class="mr10"
          v-model="theme"
          @change="cutTheme"
          :active-action-icon="Moon"
          :inactive-action-icon="Sunny"
        />
        <el-button @click="dialogVisible = true" size="small" class="pl10 pr10">
          查看JSON
        </el-button>
        <el-button @click="importTxt" size="small" class="pl10 pr10">
          导入JSON
        </el-button>
      </div>
    </el-col>
  </el-row>

  <el-row style="height: calc(100vh - 30px)">
    <el-col :span="4" class="bdr_1 pl10 pr10">
      <div v-for="item in dataStream" :key="item.id" class="">
        <div class="pt10 pb10 text_1 fz14">
          {{ item.title }}
        </div>
        <utilsCut :data="item"></utilsCut>
      </div>
    </el-col>

    <el-col :span="16" class="p10 scroll">
      <form-docker> </form-docker>
    </el-col>

    <el-col :span="4" class="bdr_1 pl10 pr10">
      <form-cmp></form-cmp>
    </el-col>
  </el-row>
  <!-- 
    <div class="flex">
        <preview-list :list="dataStream" />
        <preview-list :list="list2" />
    </div> -->
  <dia-log v-model="dialogVisible" title="JSON" @change="change">
    <pre class="h50vh overflow-Y">
    <code>{{ jsonShow }}</code>
    </pre>
  </dia-log>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
//仓库
import { storeToRefs } from "pinia";
import { meDoker } from "@/store/meDoker.js";
const store = meDoker();
//左侧初始组件
import { utilsCut, diaLog } from "@/components/scattered";
//初始数据存储
import formCmpConfig from "@/config/formCmpConfig.js";
//右侧属性组件
import formCmp from "@/common/formCmpConfig.vue";
//内容区组件
import { formDocker } from "@/components/public/index.js";
//暗夜模式开关
const theme = ref(false);
//左侧工具栏
const dataStream = ref(formCmpConfig);
//展示JSON
const dialogVisible = ref(false);
//element图标
import { Sunny, Moon } from "@element-plus/icons-vue";
//工作区域 // 表单的属性
const { getWorkArea } = storeToRefs(store);
onMounted(() => {});
const jsonShow = computed(() => {
  return JSON.stringify(getWorkArea.value, null, 4);
});
//切换主题
function cutTheme(e) {
  let html = document.getElementsByTagName("html")[0];
  let theme = e ? "theme2" : "theme1";

  html.setAttribute("theme", theme);
}
function change(params) {
  params
    ? store.saveAsJson(
        JSON.stringify(getWorkArea.value, null, 4),
        "自定义表单.txt"
      )
    : (dialogVisible.value = false);
}
function importTxt() {
  let input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", ".txt");
  input.onchange = (event) => {
    let file = event.target.files[0];
    console.log(file);
    //创建FileReader
    let reader = new FileReader();
    reader.onload = (event) => {
      store.setGeneral({
        key: "workAreaDocker",
        value: JSON.parse(event.target.result),
      });
    };
    reader.readAsText(file);
  };
  input.click();
}
</script>
<style lang="scss" scoped>
.scroll {
  height: 100%;
  overflow-y: auto;
}

:deep(.el-switch__action) {
  color: #606266;
}
:deep(.el-switch.is-checked .el-switch__core .el-switch__action) {
  color: #262727;
}
</style>
