<template>
    <metainfo></metainfo>
    <router-view></router-view>
</template>

<script setup>
import { onMounted, reactive, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
import routers from "./router";
import { useMeta } from "vue-meta";
let { proxy } = getCurrentInstance();
const router = useRoute();
const state = reactive({
    ip: ""
});
onMounted(() => {
    let html = document.getElementsByTagName("html")[0]
    html.setAttribute("theme", "theme1")
    console.log(import.meta.env, "查看环境变量");
    useMeta({
        title: "自定义表单",
        titleTemplate: "自定义表单、简洁、高效、免费",
        htmlAttrs: {
            lang: "en",
            amp: true
        },
        meta: [
            {
                name: "keywords",
                content: "自定义表单,自定义表单,自定义表单"
            },
            {
                name: "description",
                content: "申云鹏,前端,自定义表单"
            }
        ]
    });
});
</script>

<style lang="scss">
// @import "./src/assets/reset.scss";
// @import "./src/assets/minxin.scss";
@include bg_color();
</style>
