/*
 * @Author: 申云鹏
 * @Date: 2024-5-07 10:27:28
 * @LastEditTime: ***
 * @LastEditors: 申云鹏
 * @FilePath: \zhiyu-form-design-vue3\src\config\formCmpConfig.js
 * @Description: 组件配置项
 */
/**
 * @Component 使用的组件components/public
 * @type 组件的独特方法config/tool
 * @label 标题
 * @default 参数
 */
export default [
    {
        title: "输入组件",
        list: [
            {
                componentmp: 'sInput',
                type: "setInput",
                label: "单行文本",
                default: null,
            },
            {
                componentmp: 'sTextarea',
                type: "setInput",
                label: "多行文本",
                default: null,
            },
            {
                componentmp: 'sInputPassword',
                type: "setInput",
                label: "密码",
                default: null,
            },
            {
                componentmp: 'sInputNumber',
                type: "setInput",
                label: "计数器",
                default: 0,
            },
        ],
    },
    {
        title: "选择组件",
        list: [
            {
                componentmp: 'sRadio',
                type: "setRadio",
                label: "单选框",
                default: '1'
            },
            {
                componentmp: 'sInputNumber',
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
