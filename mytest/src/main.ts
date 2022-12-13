import { createApp } from 'vue'
import './style.css'
import 'vant/lib/index.css';

import App from './App.vue'
import { DropdownMenu, DropdownItem } from 'vant';


createApp(App).use(DropdownMenu).use(DropdownItem).mount('#app')
