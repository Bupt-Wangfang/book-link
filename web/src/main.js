import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
import { InfiniteScroll, Loading } from 'element-ui'

Vue.config.productionTip = false
Vue.use(InfiniteScroll)
Vue.use(Loading)

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
