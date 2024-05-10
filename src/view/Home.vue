<template>
  <el-row>
    <el-col :span="24" class="h30 bdr_1">
      头部
      <el-switch v-model="theme" @change="cutTheme" />
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

    <el-col :span="16" class="p10">
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
</template>

<script setup>
import { ref, onMounted } from "vue";
//左侧初始组件
import { utilsCut } from "@/components/scattered";
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

onMounted(() => {});
//切换主题
function cutTheme(e) {
  let html = document.getElementsByTagName("html")[0];
  let theme = e ? "theme2" : "theme1";

  html.setAttribute("theme", theme);
}
</script>
<style lang="scss" scoped></style>
