export default {
    enabled: true,
    strategies: [
        {
            // key的名称
            key: "my_user",
            // 更改默认储存，我更改为LocaLStorage
            storage: localStorage,
            // 可以选择哪些进入local存储，这样就不用全部都进去存储了
            // 默认是全部进去存储。若path为[]，则表示不缓存任何数据
            // paths: []
            paths: []
        }
    ]
}