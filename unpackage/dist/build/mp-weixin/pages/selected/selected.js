(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/selected/selected"],{"06bb":function(t,e,i){"use strict";i.r(e);var n=i("10f7"),s=i("53c5");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("79e2");var r=i("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"10f7":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"53c5":function(t,e,i){"use strict";i.r(e);var n=i("6659"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},5945:function(t,e,i){},6659:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{loadModal:!0,TabCur:0,VerticalNavTop:0,swiperList:[{id:0,type:"image",url:"https://bookcover.yuewen.com/qdbimg/349573/1011471481/180",title:"这个明星来自地球"}],recommendList:!1,rankingList:!1,finishList:!1}},methods:{toSearch:function(e){console.log(e);var i=e.detail.value;i||(i=e.currentTarget.dataset.value),t.navigateTo({url:"/pages/selected/search/search?search="+i})},setTab:function(t){this.TabCur=t.detail.current},tabSelect:function(t){switch(this.TabCur=t.currentTarget.dataset.id,this.TabCur){case 0:this.recommendList||this.getRecommendList();break;case 1:this.rankingList||this.getRankingList();break;case 2:this.finishList||this.getFinishList();break}},towerSwiper:function(){for(var t=this.swiperList,e=0;e<t.length;e++)t[e].zIndex=parseInt(t.length/2)+1-Math.abs(e-parseInt(t.length/2)),t[e].mLeft=e-parseInt(t.length/2);this.swiperList=t},towerEnd:function(t){var e=this.direction,i=this.swiperList;if("right"==e){for(var n=i[0].mLeft,s=i[0].zIndex,a=1;a<i.length;a++)i[a-1].mLeft=i[a].mLeft,i[a-1].zIndex=i[a].zIndex;i[i.length-1].mLeft=n,i[i.length-1].zIndex=s,this.swiperList=i}else{for(var r=i[i.length-1].mLeft,o=i[i.length-1].zIndex,c=i.length-1;c>0;c--)i[c].mLeft=i[c-1].mLeft,i[c].zIndex=i[c-1].zIndex;i[0].mLeft=r,i[0].zIndex=o,this.swiperList=i}},towerMove:function(t){this.direction=t.touches[0].pageX-this.towerstart>0?"right":"left"},towerStart:function(t){this.towerstart=t.touches[0].pageX},getRecommendList:function(){var e=this;this.loadModal=!0,t.request({url:this.api_url["recommendList"],success:function(t){e.recommendList=t.data,e.loadModal=!1}})},getRankingList:function(){var e=this;this.loadModal=!0,t.request({url:this.api_url["rankingList"],success:function(t){e.rankingList=t.data,e.loadModal=!1,console.log(e.rankingList)}})},getFinishList:function(){var e=this;this.loadModal=!0,t.request({url:this.api_url["finishList"],success:function(t){e.finishList=t.data,e.loadModal=!1}})}},onLoad:function(){this.getRecommendList()}};e.default=i}).call(this,i("543d")["default"])},"79e2":function(t,e,i){"use strict";var n=i("5945"),s=i.n(n);s.a}},[["765e","common/runtime","common/vendor"]]]);