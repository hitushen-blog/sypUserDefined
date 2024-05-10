export default function Verify() {
    this.default = {
        title: '默认',
        default: [
            { required: false, message: '必填填写内容' }
        ]
    }
    this.number = {
        title: '姓名验证',
        number: [
            { required: false, message: '必填填写内容', trigger: 'blur' },
            { min: 3, max: 5, message: '最少三个字符最多五个', trigger: 'blur' },
        ]
    }

}
Verify.prototype = {
    getVerify(name) {
        return this[name]
    }
}