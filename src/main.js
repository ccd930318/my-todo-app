// 基本引入
import { createApp } from 'vue';
import './style.css'; 
import App from './App.vue';
import router from './router';
import './assets/main.css';

// Font Awesome 所需
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'; // ← 你要用的 icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faPlus); // ✅ 加入 plus 圖示
library.add(faTrash); // ← 註冊 icon
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // ← 註冊全域元件
app.use(router); // ← 使用路由
app.mount('#app');
