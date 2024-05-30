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
                'label-width': 100,//标签宽度
                formSize: "default",//组件大小
                labelPosition: 'right',//位置位置
                disabled: false,//是否禁用全部
                workArea: []
            },
            contentIndex: "",//当前工作区选中的组件id
            mover: false,//是否正在拖动组件

        }
    },
    getters,
    actions,
    plugins,
    persist
});