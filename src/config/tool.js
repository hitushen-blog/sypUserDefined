//公共方法
export const setTool = {
    formItemLabelWidth: 12,//栅格宽度
    disabled: false,//是否禁用	
    required: true,//是否必填
}
//输入类型适用方法
export const setInput = {
    placeholder: '',//占位符
    maxlength: 30,//最大输入长度 
    clearable: true,//一键清空
    readonly: false,//是否只读	
    rules: 'default',//表单验证方式
}
//选择类型适用方法
export const setRadio = {
    rules: 'default',//表单验证方式
    name: '选项',
    option: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' }
    ]
}