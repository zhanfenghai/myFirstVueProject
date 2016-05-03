'use strict'

var Vue = require('vue');
var app = Vue.extend({
});
var VueRouter = require('vue-router');
Vue.use(VueRouter);
//Vue.use(require('vue-resource'));
    //实例化VueRouter
var router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

require('./routers')(router);

router.start(app, "#app");