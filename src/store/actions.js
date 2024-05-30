export default {
    // -----------------------公共方法------------------------
    //id生成器
    getNewId() {
        return "_" + Date.now() + "_" + Math.ceil(Math.random() * 99999)
    },
    //获取当前选中的元素属性
    getCurrentNext(params) {
        for (let i = 0; i < params.length; i++) {
            const element = params[i];
            if (element.formItemId === this.contentIndex) {
                return element
            } else {
                if (element.default instanceof Array) {
                    let result = this.getCurrentNext(element.default)
                    if (result) { // 如果递归调用返回了元素，则立即返回  
                        return result;
                    }
                }
            }
        }
    },
    //通用设置普通参数
    setGeneral({
        key, value
    }) {
        this[key] = value
    },
    // -----------------------公共方法------------------------
    //选择当前组件
    setContentIndex(e) {
        this.contentIndex = e
    },
    //父组件复制
    setComponents(params, newParams) {
        const historyParams = newParams
        newParams = JSON.parse(JSON.stringify(newParams))
        newParams.formItemId = newParams.type + this.getNewId()

        if (newParams.default instanceof Array) {
            for (let i = 0; i < newParams.default.length; i++) {
                const element = newParams.default[i];
                element.formItemId = element.type + this.getNewId()
                if (!element.default instanceof Array) return
                if (!element.default.length) { return } {
                    this.setComponents(params, element)
                }
            }
        }
        this.setComponents_copy(params, newParams, historyParams)
    },
    setComponents_copy(params, newParams, historyParams) {
        let inactive = false
        for (let i = 0; i < params.length; i++) {
            const element = params[i];
            if (element.formItemId == historyParams.formItemId) {
                inactive = true
            }
            else {
                if (element.default instanceof Array) {
                    this.setComponents_copy(element.default
                        , newParams, historyParams)
                }
            }
        }
        if (inactive) {
            params.push(newParams)
            this.setContentIndex(params[params.length - 1].formItemId)
        }

    },
    //删除组件
    deleteworkAreaDocker(params, newParams) {
        for (let i = 0; i < params.length; i++) {
            const element = params[i];
            if (element.formItemId === newParams.formItemId) {
                params.splice(i, 1)

                if (!params.length) return
                params[i - 1] instanceof Object ?
                    this.setContentIndex(params[i - 1].formItemId) :
                    this.setContentIndex(params[i].formItemId)
            } else {
                if (element.default instanceof Array) {
                    this.deleteworkAreaDocker(element.default, newParams)
                }
            }
        }
    },

    /**
     * 下载Json工具
     * @param data
     * @param fileName
     */
    saveAsJson(str, fileName) {
        //指定类型文件类型application/json;charset=utf-8
        const blob = new Blob([str], { type: "application/json;charset=utf-8" });
        const href = URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.style.display = "none";
        alink.download = fileName; // 下载后文件名
        alink.href = href;
        document.body.appendChild(alink);
        alink.click();
        document.body.removeChild(alink); // 下载完成移除元素
        URL.revokeObjectURL(href); // 释放掉blob对象
    }
}