import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faClipboard, faUser } from '@fortawesome/free-regular-svg-icons'
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

library.add(faUserSecret, faTwitter, faUser, faHouse, faClipboard)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueTelInput)
app.use(createPinia())
app.use(router)

app.mount('#app')
