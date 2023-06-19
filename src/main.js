import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import { registerMicroApps, start, initGlobalState } from "qiankun";
let propsData = {};
const actions = initGlobalState(propsData);
// 主项目项目监听和修改(在项目中任何需要监听的地方进行监听)
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("改变前的值 ", prev);
  console.log("改变后的值 ", state);
});
// 将actions对象绑到Vue原型上，为了项目中其他地方使用方便
Vue.prototype.$actions = actions;

Vue.config.productionTip = false;

registerMicroApps([
  {
    name: 'admin_broker',
    entry: 'https://localhost:8080',
    container: '#container',
    activeRule: '/app/vue',
  },
  {
    name: 'octopus-project',
    entry: 'http://localhost:7070',
    container: '#container',
    activeRule: '/app/react',
  }
]);

start();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

/**
 *
 *  qiankun-box: id = app (container: id = container)
 *  admin_broker: id = vueApp
 *  octopus-project: id = reactApp
 *
 * */






