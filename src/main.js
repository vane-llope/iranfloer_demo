import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import   '../node_modules/vue-horizontal';
import '../node_modules/vue3-horizontal-list'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(store).use(router).mount('#app')
