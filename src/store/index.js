import { createPinia } from 'pinia'
import piniaPersist from "pinia-plugin-persist";
//创建store实列
const store = createPinia()
store.use(piniaPersist)
export default store