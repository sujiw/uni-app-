(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bookshelf-bookshelf"],{"24f1":function(t,e,a){var i=a("4045");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("328ad9d0",i,!0,{sourceMap:!1,shadowMode:!1})},2752:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{book_list:[],modalName:null}},methods:{doBookInfo:function(t){var e=t.currentTarget.dataset.url,a=t.currentTarget.dataset.webid;uni.navigateTo({url:"/pages/bookshelf/bookinfo/bookinfo?url="+e+"&webid="+a})},doRead:function(t){var e=t.currentTarget.dataset.index;uni.setStorageSync("read",e),uni.navigateTo({url:"/pages/bookshelf/read/read"})},ListTouchStart:function(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove:function(t){this.listTouchDirection=t.touches[0].pageX-this.listTouchStart>0?"right":"left"},ListTouchEnd:function(t){"left"==this.listTouchDirection?this.modalName=t.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null},toSelected:function(){uni.switchTab({url:"/pages/selected/selected"})},doDelete:function(t){var e=this;uni.showActionSheet({itemList:["删除本书"],itemColor:"#e54d42",success:function(){e.book_list.splice(t.currentTarget.dataset.index,1),uni.setStorageSync("booklist",e.book_list)}})}},onShow:function(){this.book_list=uni.getStorageSync("booklist")},onLoad:function(){this.book_list=uni.getStorageSync("booklist"),console.log(this.book_list)},onPullDownRefresh:function(){var t=this;0==this.book_list.length&&uni.stopPullDownRefresh(),uni.showNavigationBarLoading();for(var e=this.book_list,a=[],i=0;i<e.length;i++){var o={};o.chapterlength=e[i].chapter.length,o.webid=e[i]._id,o.url=e[i].url,a.push(o)}uni.request({url:this.api_url["bookupdate"],method:"POST",data:a,success:function(a){for(var i=a.data,o=0;o<i.length;o++)if(i[o].update>0){e[o].update=i[o].update+(e[o].update?e[o].update:0);for(var n=0;n<i[o].chapter.length;n++)e[o].chapter.push(i[o].chapter[n])}t.book_list=e,uni.setStorageSync("booklist",e)},complete:function(){uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}})}};e.default=i},4045:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".cu-list.menu-avatar>.cu-item[data-v-2a2db54f]{height:auto;padding-right:%?20?%}.cu-list.menu-avatar>.cu-item:last-child .book_body .book_info[data-v-2a2db54f]{border-bottom:0}.cu-list.menu-avatar>.cu-item[data-v-2a2db54f]:active{background-color:#eee}.book_body[data-v-2a2db54f]:active{background-color:rgba(0,0,0,0)}.cu-list.menu-avatar>.cu-item[data-v-2a2db54f]:after,.cu-list.menu>.cu-item[data-v-2a2db54f]:after{border-bottom:0}.bg[data-v-2a2db54f]{width:100%;text-align:center}.bg uni-image[data-v-2a2db54f]{height:240px}.bg uni-text[data-v-2a2db54f]{border:%?1?% solid #f7595a;padding:%?10?% %?40?%;-webkit-border-radius:%?40?%;border-radius:%?40?%;color:#f7595a}.bg uni-text[data-v-2a2db54f]:active{opacity:.8}.cu-list>.cu-item[data-v-2a2db54f]{-webkit-transition:all .3s ease-in-out 0s;-o-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s;-webkit-transform:translateX(%?0?%);-ms-transform:translateX(%?0?%);transform:translateX(%?0?%)}",""])},"63ca":function(t,e,a){"use strict";a.r(e);var i=a("bf05"),o=a("67a3");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("91bf");var s=a("2877"),u=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"2a2db54f",null);e["default"]=u.exports},"67a3":function(t,e,a){"use strict";a.r(e);var i=a("2752"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},"91bf":function(t,e,a){"use strict";var i=a("24f1"),o=a.n(i);o.a},bf05:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"cu-list menu-avatar"},[t._l(t.book_list,function(e,i){return a("v-uni-view",{key:i,class:"cu-item "+(t.modalName=="move-box-"+i?"move-cur":""),attrs:{"data-target":"move-box-"+i},on:{touchstart:function(e){e=t.$handleEvent(e),t.ListTouchStart(e)},touchmove:function(e){e=t.$handleEvent(e),t.ListTouchMove(e)},touchend:function(e){e=t.$handleEvent(e),t.ListTouchEnd(e)}}},[a("v-uni-view",{staticClass:"book_body",attrs:{"data-index":i},on:{click:function(e){e=t.$handleEvent(e),t.doRead(e)},longpress:function(e){e=t.$handleEvent(e),t.doDelete(e)}}},[a("v-uni-view",{staticClass:"book_image"},[a("v-uni-image",{attrs:{src:e["image"],mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"book_info"},[a("v-uni-view",{staticClass:"book_titie margin-bottom-sm",staticStyle:{position:"relative"}},[t._v(t._s(e.title)),e.update?a("v-uni-view",{staticClass:"cu-tag badge",staticStyle:{"z-index":"99999"}},[t._v(t._s(e.update)+"}")]):t._e()],1),a("v-uni-view",{staticClass:"book_desc"},[t._v(t._s(e.author)+" · "+t._s(e.chapter.length-(e.chapterid?e.chapterid:0))+"章未读")]),a("v-uni-view",{staticClass:"book_chapter"},[t._v("最新章节 · "+t._s(e.chapter[e.chapter.length-1].name))])],1)],1),a("v-uni-view",{staticClass:"move"},[a("v-uni-view",{staticClass:"bg-green",attrs:{"data-webid":e._id,"data-url":e.url},on:{click:function(e){e=t.$handleEvent(e),t.doBookInfo(e)}}},[t._v("详情")]),a("v-uni-view",{staticClass:"bg-red",attrs:{"data-index":i},on:{click:function(e){e=t.$handleEvent(e),t.doDelete(e)}}},[t._v("删除")])],1)],1)}),a("v-uni-view",{staticStyle:{"margin-top":"160upx"}})],2),t.book_list&&0!=t.book_list.length?t._e():a("v-uni-view",{staticClass:"bg"},[a("v-uni-image",{attrs:{src:"../../static/img/bookshelf/shujia.png",mode:"aspectFit"}}),a("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.toSelected()}}},[t._v("查找更多精彩")])],1)],1)},o=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return o})}}]);