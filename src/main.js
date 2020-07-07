import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

console.log(app)
app.mount('#app')
// const app = createApp(App)
// 3.0 去掉了filter使用，推荐使用计算属性和方法实现
// app.config.isCustomElement = (tag) => tag.startsWith('app-')
// app.use(/* ... */)
// app.mixin(/* ... */)
// app.component(/* ... */)
// app.directive(/* ... */)

// app.config.globalProperties.customProperty = () => {}

// app.mount(App, '#app')
