import '@css/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Vue相关
app.use(createPinia()).use(router)

// 第三方相关
import { globalComponents } from '@/components/globalComponents'
app.use(globalComponents)

app.mount('#app')
