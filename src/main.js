import './assets/main.css'

import { createApp } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'
import { defaultLocale, languages } from "./i18n/index.js"

import App from './App.vue'
import router from './router'

const localStorageLang = localStorage.getItem('lang')

let messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: localStorageLang || defaultLocale,
    fallbackLocale: "uz",
    messages
})

const app = createApp(App, {
    setup() {
        const { t } = useI18n()
        return { t }
    }
})

app.use(router)
app.use(i18n)
app.mount('#app')
