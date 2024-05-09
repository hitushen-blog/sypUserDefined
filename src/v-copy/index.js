const copy = {
    mounted(el, { value }) {
        // console.log(arguments);
        el.$value = value
        el.onclick = () => {
            if (!el.$value) {
                // 值为空的时候，给出提示。可根据项目UI仔细设计
                console.log('无复制内容')
                return
            }
            // 动态创建textarea标签
            const textarea = document.createElement('textarea')
            // 将改textarea设置readonly防止ios唤醒键盘
            textarea.readOnly = 'readonly'
            textarea.style.position = 'absolute'
            textarea.style.left = '-99999px'
            textarea.value = el.$value || '无有效内容'
            document.body.appendChild(textarea)
            textarea.select()
            const result = document.execCommand('Copy')
            if (result) {
                console.log('复制成功');
            }
            document.body.removeChild(textarea)
        }
        // 绑定点击事件,就是所谓的一件copy
        el.addEventListener('click', el.handler)
    },
    // 当传进来的值更新的时候触发
    beforeUpdate(el, { value }) {
        el.$value = value
    },
    // 指令与元素解绑的时候,移除事件绑定
    unmounted(el) {
        el.removeEventListener('click', el.handler)
    },

}
export default copy