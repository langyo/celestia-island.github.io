import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import i18n from './i18n'
import { provideSnapContainer } from './composables/useSnapContainer'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './assets/styles/global.scss'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
  ],
})

const app = createApp(App)
app.use(router)
app.use(i18n)
provideSnapContainer(app)
app.mount('#app')
