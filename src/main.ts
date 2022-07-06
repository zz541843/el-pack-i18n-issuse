import { createApp } from 'vue'
import App from './App.vue'

import xx from "../dist/el-test-dist.es"
import "../dist/style.css"

let app = createApp(App)

app.use(xx)

app.mount('#app')
