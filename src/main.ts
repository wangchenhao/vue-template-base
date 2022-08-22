import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'uno.css'
import './style.css'
import 'virtual:svg-icons-register'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { createHead } from "@vueuse/head"
import {router} from './routes'

const app = createApp(App)
const pinia  = createPinia()
const head = createHead()
const i18n = createI18n({
  locale: 'en',
  messages
})

app.use(router)
app.use(pinia)
app.use(head)
app.use(i18n)
app.mount('#app')
