/*
 * @Author: 申云鹏
 * @Date: 2024-5-07 10:27:28
 * @LastEditTime: ***
 * @LastEditors: 申云鹏
 * @FilePath: \zhiyu-form-design-vue3\src\config\formCmpConfig.js
 * @Description: 组件配置项
 */
export default [
    {
        title: "输入组件",
        list: [
            {
                type: "sInput",
                label: "单行文本",
                default: null,
            },
            {
                type: "sTextarea",
                label: "多行文本",
                default: null,
            },
        ],
    },
    {
        title: "选择组件",
        list: [
            {
                type: "radio",
                label: "单选框",
            },
            {
                type: "checkbox",
                label: "多选框",
            },
        ],
    },
    {
        title: "基础组件",
        list: [
            {
                type: "button",
                label: "按钮",
            },
        ],
    },
];
