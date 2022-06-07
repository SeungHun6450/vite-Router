import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes'
import App from './App.vue'
import '~/routes/guards'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
