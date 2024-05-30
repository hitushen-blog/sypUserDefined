export default {
    //当前工作区内容
    getWorkArea() {
        return this.workAreaDocker
    },
    //获取当前选中的组件
    getCurrent() {
        return this.getCurrentNext(this.workAreaDocker.workArea) || {}
    },
    //是否拖动
    getMover() {
        return this.mover
    },
}