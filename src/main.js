import { createApp } from 'vue';
import 'bootstrap';
import './scss/styles.scss';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'datatables.net-bs5';

import axios from 'axios';
import Swal from 'sweetalert2';

import App from './App.vue';
import router from './router/index.js';
const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$router = router;
app.config.globalProperties.$Swal = Swal;

app.use(router);
app.mount('#app');
