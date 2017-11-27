// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import api from './api/getData'
import 'iview/dist/styles/iview.css';
import backTopBar from '@/components/backTop';
import vueg from 'vueg'
import 'vueg/css/transition-min.css';


const options={
  duration: '0.3',              //转场动画时长，默认为0.3，单位秒
  firstEntryDisable: false,     //值为true时禁用首次进入应用时的渐现动画，默认为false
  firstEntryDuration: '0',     //首次进入应用时的渐现动画时长，默认为.6
  forwardAnim: 'fadeInRight',   //前进动画，默认为fadeInRight
  backAnim: 'fadeInLeft',       //后退动画，默认为fedeInLeft
  sameDepthDisable: false,      //url深度相同时禁用动画，默认为false
  shadow:true,                  //值为false，转场时没有阴影的层次效果
  disable: false,               //禁用转场动画，默认为false，嵌套路由默认为true
}
Vue.use(vueg, router,options);

Vue.config.productionTip = false
Vue.use(iView);
Vue.prototype.api = api;



/* eslint-disable no-new */
// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start();
//   next();
// });
//
// router.afterEach(route => {
//   iView.LoadingBar.finish();
// });



Vue.filter('datePipe', function (value) {
    let mon = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sept.','Oct.','Nov.','Dec.']
    return value.slice(0,4)+' '+mon[parseInt(value.slice(5,7))-1];
})
Vue.filter('dayPipe', function (value) {
    return value.toString().slice(8,10);
})
Vue.component('backTopBar', backTopBar);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

