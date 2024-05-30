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
                icon: 'Document',
                componentmp: 'sInput',
                type: "setInput",
                label: "单行文本",
                default: null,
            },
            {
                icon: 'Lock',
                componentmp: 'sTextarea',
                type: "setInput",
                label: "多行文本",
                default: null,
            },
            {
                icon: 'Lock',
                componentmp: 'sInputPassword',
                type: "setInput",
                label: "密码",
                default: null,
            },
            {
                icon: 'Lock',
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
                icon: 'Calendar',
                componentmp: 'sRadio',
                type: "setRadio",
                label: "单选框",
                default: '1'
            },
            {
                icon: 'Calendar',
                componentmp: 'sCheckbox',
                type: "setCheckbox",
                label: "多选框",
                default: ['1']
            },
            {
                icon: 'CircleCheck',
                componentmp: 'sSelect',
                type: "setSelect",
                label: "下拉选择",
                default: null,
                defaultArray: []
            },
            {
                icon: 'Star',
                componentmp: 'sRate',
                type: "setRate",
                label: "评分",
                default: 0
            },
            {
                icon: 'Star',
                componentmp: 'sColorPicker',
                type: "setColorPicker",
                label: "颜色选择",
                default: null
            },
            {
                icon: 'Calendar',
                componentmp: 'sDatePicker',
                type: "setDatePicker",
                label: "日期选择",
                default: null,
                defaultArray: []
            }, {
                icon: 'SemiSelect',
                componentmp: 'sSlider',
                type: "setSlider",
                label: "滑块",
                default: 0
            },
            {
                icon: 'Open',
                componentmp: 'sSwitch',
                type: "setSwitch",
                label: "开关",
                default: "false"
            },
            {
                icon: 'UploadFilled',
                componentmp: 'sUpload',
                type: "setUpload",
                label: "上传",
                default: []
            }
        ],
    },
    {
        title: "基础组件",
        list: [
            {
                icon: 'SemiSelect',
                componentmp: 'sDivider',
                type: "setDivider",
                label: "分割线",
                default: ''
            },
            {
                icon: 'Connection',
                componentmp: 'sContainer',
                type: "setsContainer",
                label: "布局容器",
                default: [],
            },
        ],
    },
];
