import { createApp } from 'vue'
import App from './App.vue'
import 'boxicons'
import './assets/css/style.css'

import router from './router/index'

createApp(App).use(router).mount('#app')
