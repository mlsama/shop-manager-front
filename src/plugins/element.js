/* 用于导入element-ui的组件 */
import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Message
    } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
/* 固定写法,将组件挂载到vue实例上 */
Vue.prototype.$message = Message
