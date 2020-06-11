// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'


// import './lib/css/style.css'
import  './lib/mui/mui.min.css'
import  './lib/css/app.css'
import './lib/mui/mui.min.js'
//import  './lib/mui/mui.js'

import './lib/font-awesome-4.7.0/css/font-awesome.min.css'

import ViewUI from 'view-design';//引入iview
import 'view-design/dist/styles/iview.css';

import showdown from 'showdown';//引入md文件
import VueResource from 'vue-resource'


Vue.use(VueResource)
//使用md文件
Vue.prototype.md2html = (md)=> {
  let converter = new showdown.Converter();
  let text = md.toString();
  let html = converter.makeHtml(text);
  return html
};


 // import './lib/mmenu/css/demo.css'
 //  import './lib/mmenu/css/mmenu.css'
 //  import './lib/mmenu/js/mmenu.polyfills.js'
 //  import './lib/mmenu/js/mmenu.js'
Vue.use(ViewUI);

Vue.config.productionTip = false

/* eslint-disable no-new */

//全局时间过滤器
Vue.filter('dataFormat',datastr=>{
var dt=new Date(datastr);
var y=dt.getFullYear();
var m=dt.getMonth()+1;
var d=dt.getDate();
var h=dt.getHours();
var mi=dt.getMinutes();

return `${y}-${m}-${d} ${h}:${mi}`
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
