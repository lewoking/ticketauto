import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app.vue';
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App)
});