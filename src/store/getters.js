export default {
    //当前工作区内容
    getworkArea() {
        return this.workAreaDocker
    },
    //当前工作区选中
    getcontentIndex() {
        return this.contentIndex
    },
    getCurrent() {
        return this.workAreaDocker.workArea[this.contentIndex]
    }
}