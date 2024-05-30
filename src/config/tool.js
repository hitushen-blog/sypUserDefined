//公共方法
const setTool = {
    formItemLabelWidth: 24,//栅格宽度
    disabled: false,//是否禁用	
    required: true,//是否必填
    'label-width': true,//取消默认label
}
//输入类型适用方法
const setInput = {
    placeholder: '',//占位符
    maxlength: 30,//最大输入长度 
    clearable: true,//一键清空
    readonly: false,//是否只读	
    rules: 'default',//表单验证方式
    setTool//公共方法
}
//单选类型适用方法
const setRadio = {
    rules: 'default',//表单验证方式
    name: '选项',//分割线名字
    option: [//可选内容
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' }
    ],
    style: 'default',//按钮样式
    border: false,//边框
    formSize: "default",//组件大小
    setTool//公共方法
}
//多选类型适用方法
const setCheckbox = {
    rules: 'default',//表单验证方式
    name: '选项',//分割线名字
    option: [//可选内容
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' }
    ],
    style: 'default',//按钮样式
    border: false,//边框
    formSize: "default",//组件大小
    min: 0,//最少勾选
    max: 10,//最大勾选的数量 
    setTool//公共方法
}
//评分类型适用方法
const setRate = {
    rules: 'default',//表单验证方式
    max: 5,//最大评分
    'allow-half': false,//允许半选
    'show-score': false,//是否显示当前分数
    'show-text': false,//是否显示辅助文字
    texts: ['极差', '失望', '一般', '满意', '惊喜'],//辅助文字
    setTool//公共方法
}

//时间选择类型适用方法
const setDatePicker = {
    rules: 'default',//表单验证方式
    placeholder: '请选择日期',//占位符
    type: 'datetime',//显示类型
    setTool//公共方法
}
//颜色选择类型适用方法
const setColorPicker = {
    rules: 'default',//表单验证方式
    formSize: "default",//组件大小
    style: 'button',//按钮样式必须设置不然不显示组件大小
    'color-format': 'hex',//写入 v-model 的颜色的格式
    setTool//公共方法
}

//滑块类型适用方法
const setSlider = {
    rules: 'default',//表单验证方式
    step: 1,//组件大小
    min: 0,//最小值
    max: 100,//最大值
    'show-stops': false,//显示间断点
    range: false,//范围选择
    setTool//公共方法
}

//下拉选择适用方法
const setSelect = {
    rules: 'default',//表单验证方式
    name: '选项',//分割线名字
    multiple: false,//是否多选
    filterable: false,//启用搜索功能
    option: [//可选内容
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' }
    ],
    setTool//公共方法
}
//开关适用方法
const setSwitch = {
    rules: 'default',//表单验证方式
    'active-text': '',//开启时的文字
    'inactive-text': '',//关闭时的文字
    'active-value': "true",//开启值
    'inactive-value': "false",//关闭值
    'active-color': '',//开启颜色
    'inactive-color': '',//关闭颜色
    setTool//公共方法
}
//分割线类型适用方法
const setDivider = {
    'content-position': 'center',//内容位置
    formItemLabelWidth: 24,//栅格宽度

}
//布局适用方法
const setsContainer = {
    formItemLabelWidth: 24,//栅格宽度
    display: 'block',//布局方式
    'label-width': false,//取消默认label
}
//上传文件适用方法
const setUpload = {
    multiple: true,//支持多选
    limit: 9,//上传数量
    setTool,//公共方法
    'label-width': false,//取消默认label
}
export default {
    setInput, setRadio, setCheckbox, setRate, setDatePicker, setColorPicker, setSlider, setSelect, setSwitch, setDivider, setsContainer, setUpload
}