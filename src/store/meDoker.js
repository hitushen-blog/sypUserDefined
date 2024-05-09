import { defineStore } from "pinia";
import getters from "./getters.js";
import actions from "./actions.js";
import plugins from "./plugins.js";
import persist from "./persist.js";
export const meDoker = defineStore("main", {
    state: () => {
        return {
            //当前工作区内容
            workAreaDocker: {
                //表单属性
                formSize: "default",//组件大小
                labelPosition: 'left',//位置位置
                workArea: []
            },
            //当前工作区选中
            contentIndex: null
        }
    },
    getters,
    actions,
    plugins,
    persist
});