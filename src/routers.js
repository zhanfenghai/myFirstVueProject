'use strict'
var list = require('./views/list.vue');
module.exports=function(router){
    router.map({
        '/':{				//首页
            name:'list',
            component:list
        },
        '/list':{
            name:'list',
            component:list
        }
    })
}
