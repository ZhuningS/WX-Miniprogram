	define("commandWidget.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var i=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),a=e(require("./util/log")),r=!1,n=e(require("./util/utils")).default.compareVersion,o=new a.default("commandWidget"),s=null,h=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=i.templateFlag,r=void 0===a?function(){}:a,n=i.render,o=i.classObj,s=i.WidgetDom,h=i.maxActorsNum,u=void 0===h?13:h,l=i.fontSize,d=void 0===l?14:l;t(this,e),this.render=n,this.classObj=o,this.WidgetDom=s,this.maxActorsNum=u,this.fontSize=d,this.templateFlag=r.bind(this)}return i(e,[{key:"scaleImg",value:function(e,t,i,a){var r=1;return r=i/a<e/t?e*a/t>1.5*i?1.5*i/e:e*a/t/e:t*i/e>1.5*a?1.5*a/t:t*i/e/t,{height:t*r,width:e*r}}},{key:"exceedWidth",value:function(e,t){var i=e.split("|").length,a=0;return i>1&&(a=Math.ceil(20*(i-1))||0),this.WidgetDom.measureText(e)+a>t}},{key:"formatOverflowText",value:function(e,t){for(var i="",a=0;a<e.length;a++)if(i+=e[a],this.exceedWidth(i,t))return i.slice(0,i.length-2)+"...";return i}},{key:"overflowArray",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e.length>0){var i=e.join("|"),a=this.maxActorsNum-(t.length+1);"..."===(e=(i=this.formatOverflowText(i,a*this.fontSize)).split("|"))[e.length-1]&&e.splice(-1)}return e}},{key:"overflowArrayWithMaxCharLen",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(e.length>0){var i=e.join("|");"..."===(e=(i=this.formatOverflowText(i,t*this.fontSize)).split("|"))[e.length-1]&&e.splice(-1)}return e}},{key:"isEncodeJson",value:function(e){return"string"==typeof e&&"%"===e.trim()[0]}},{key:"getWidgetParam",value:function(e,t){if("query"===e)return"wxSearchQuery"in t?decodeURIComponent(t.wxSearchQuery):t.query;if(t[e])return"widgetData"===e||"wxParamData"===e||"data"===e?this.isEncodeJson(t[e])?JSON.parse(decodeURIComponent(t[e])):JSON.parse(t[e]):void 0}},{key:"onLoad",value:function(e,t,i,a){var s=this;if(this.wxSearchQuery="",this.typeWording="",this.searchScene="",this.supportApiAuthorize=!1,this.commandTelData={error:!1,wxSearchQuery:""},e.query.errmsg)return this.commandTelData.errmsg=e.query.errmsg,this.initErrorWidgetDom(e,t,i,a),this;var h=this.getWidgetParam("widgetData",e.query);this.getWidgetParam("wxParamData",e.query);return this.widgetData=h,this.wxSearchQuery=this.getWidgetParam("query",e.query),this.typeWording=e.query.typeWording,this.searchScene="47"===e.query.searchScene,this.commandTelData=Object.assign(this.commandTelData,{wxSearchQuery:this.wxSearchQuery,typeWording:this.typeWording,searchScene:this.searchScene},h),this.commandTelData.onTapElement=function(t,i){o.log("click jump",t,i,2==e.query.version&&r);var a=t;if(2==e.query.version&&r){var n="open_target_weapp://path?origin_id="+e.query.userName.split("@")[0]+"&path="+encodeURIComponent(a)+"&debug_mode=2";return o.log("version 2 jump: ",n),void wx.openApp({url:n})}if(r){var s="open_target_weapp://path?origin_id="+e.query.userName.split("@")[0]+"&path="+encodeURIComponent(a)+"&debug_mode=0";return o.log("version 0 jump: ",s),void wx.openApp({url:s})}o.log("open app: ",a),wx.openApp({url:a})},this.commandTelData.refreshLocation=function(){console.info("refresh"),wx.authorize&&wx.authorize({scope:"scope.userLocation",success:function(){},fail:function(){}})},this.commandTelData.openWeApp=function(e){console.info("open we app",e),wx.openApp({url:e})},wx.getSystemInfo?wx.getSystemInfo({success:function(o){console.info("getSystemInfo back",o.version,o.platform),"ios"==o.platform?(s.supportApiAuthorize=!!o.version&&1==n(o.version,"6.7.2"),r=!!o.version&&1==n(o.version,"6.7.2")):"android"==o.platform&&(s.supportApiAuthorize=!!o.version&&1==n(o.version,"6.7.2"),r=!!o.version&&1==n(o.version,"6.7.2")),s.initWidgetDom(e,t,i,a)}}):this.initWidgetDom(e,t,i,a),this}},{key:"initErrorWidgetDom",value:function(e,t,i,a){var r=e.width,n=e.height;this.templateFlag(this);var s=!1;this.wxParamData&&0==this.wxParamData.type&&(s=!0),this.WidgetDom.init({windowWidth:r,windowHeight:n,render:this.render,classObj:this.classObj,ctx:t,layoutDebug:s}),this.WidgetDom.setDynamicHeight(280),o.log("onload真实绘制数据",this.commandTelData),this.WidgetDom.setData(this.commandTelData,i,a)}},{key:"initWidgetDom",value:function(e,t,i,a){var r=e.width,n=e.height;this.widgetData.err_code>=0?(s=this.widgetData,this.commandTelData.error=!1,this.templateFlag(this)):this.commandTelData.error=!0;var h=!1;this.wxParamData&&0==this.wxParamData.type&&(h=!0),this.WidgetDom.init({windowWidth:r,windowHeight:n,render:this.render,classObj:this.classObj,ctx:t,layoutDebug:h}),this.WidgetDom.useDynamicHeight(),o.log("onload真实绘制数据",this.commandTelData),void 0!=this.widgetData.err_code&&this.WidgetDom.setData(this.commandTelData,i,a)}},{key:"_diffDataStructure",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=!0,a=Object.keys(e),r=Object.keys(t);return a.length!=r.length?i=!1:a.forEach(function(e){r.includes(e)||(i=!1)}),i}},{key:"onDataPush",value:function(e){if(e.data){var t=this.widgetData=this.getWidgetParam("data",e);if(t.err_code>=0){if(s&&this._diffDataStructure(t,s)||null==s)this.commandTelData.error=!1,this.commandTelData=Object.assign(this.commandTelData,t),this.templateFlag(this);else{if(null!=s)return void console.info("datapush数据异常，不渲染");this.commandTelData.error=!0}o.log("ondatapush真实绘制数据",this.commandTelData),this.WidgetDom.setData(this.commandTelData)}}}},{key:"onTap",value:function(e){return this.WidgetDom.handleTap(e)}}]),e}();exports.default=h; 
 			}); 
		define("minWidgetDom/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=void 0,n=0,r=function(){function r(){e(this,r)}return o(r,[{key:"init",value:function(t){this.ctx=t}},{key:"setData",value:function(t,e,i,o,r){if(this.data=t,this.tapMap=e,this.height=i,this.width=o,this.isDefWidth=r,n=0,clearTimeout(a),this.isDefWidth)if(wx.getSystemInfo){var s=this;wx.getSystemInfo({success:function(t){console.log("windowWidth",t.windowWidth),s.shouldScale=t.windowWidth!=s.width,s.ratio=t.windowWidth/s.width,s.height=Math.ceil(s.height*s.ratio),console.info("widget dom params, shouldScale, ratio, width, height",s.shouldScale,s.ratio,s.width,s.height),s.draw()}})}else this.draw();else this.draw()}},{key:"draw",value:function(){var t=this;this.setDynamicHeight(this.height,function(){t._draw()})}},{key:"_draw",value:function(){var t=this,e=JSON.parse(JSON.stringify(this.data)),i=this.ctx;e&&e.forEach(function(e){t.execAction(e)}),i.draw(),n<5&&(a=setTimeout(function(){t._draw(),n++},500))}},{key:"setDynamicHeight",value:function(t,e){console.log("dynamicHeight:"+t),wx.setWidgetSize?wx.setWidgetSize({height:t,success:function(t){e&&e(t?t.errCode:0)},fail:function(t){e&&e(t?t.errCode:0)}}):e&&e()}},{key:"execAction",value:function(e){var o=this,a=this.ctx;switch(e.method){case"strokePath":case"fillPath":a.beginPath(),e.data.forEach(function(t){o.execAction(t)}),a[e.method.replace("Path","")]();break;case"setFillStyle":case"setStrokeStyle":var n=e.data[1];a[e.method](this.convertColor(n));break;default:if(this.shouldScale){var r=[];e.data.forEach(function(e){if("object"===(void 0===e?"undefined":i(e))){var o;(o=r).push.apply(o,t(e))}else r.push(e)}),r&&r.length>0&&(r=r.map(function(t){return"string"==typeof t?t:t*o.ratio})),a[e.method].apply(a,t(r))}else a[e.method].apply(a,t(e.data))}}},{key:"convertColor",value:function(t){return t&&4==t.length?(t[3]&&255!=t[3]?t[3]&&(t[3]=(t[3]/255).toFixed(1)):t[3]=1,"rgba("+t.join(",")+")"):""}},{key:"handleTap",value:function(t){var e=t.x,i=t.y;this.shouldScale&&(e/=this.ratio,i/=this.ratio);var o=!1;if(this.tapMap)for(var a=this.tapMap.length-1;a>=0;a--)if(this.isInnerRect(e,i,this.tapMap[a].rect)){switch(o=!0,this.tapMap[a].action.event){case"openApp":wx.openApp&&(console.info("openApp",this.tapMap[a].action.url),wx.openApp({url:this.tapMap[a].action.url}));break;case"refreshLocation":console.info("refreshLocation"),wx.authorize&&wx.authorize({scope:"scope.userLocation",success:function(){},fail:function(){}})}if(this.tapMap[a].isCatch)break}return o}},{key:"isInnerRect",value:function(t,e,i){var o=i.left,a=i.top,n=i.width,r=i.height;return t>=o&&t<=o+n&&e>=a&&e<=a+r}}]),r}();exports.default=r; 
 			}); 
		define("util/log.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),o=function(){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t(this,o),this.debugName=e,this.timeKeyCache={}}return n(o,[{key:"_getTime",value:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),i=e.getHours(),r=e.getMinutes(),a=e.getSeconds();return n<10&&(n="0"+n),o<10&&(o="0"+o),i<10&&(i="0"+i),r<10&&(r="0"+r),a<10&&(a="0"+a),"["+t+"-"+n+"-"+o+" "+i+":"+r+":"+a+"]"}},{key:"_getMsg",value:function(){return this.debugName+" "+this._getTime()}},{key:"log",value:function(){var e;(e=console).info.apply(e,[this._getMsg()].concat(Array.prototype.slice.call(arguments)))}},{key:"error",value:function(){var e;(e=console).error.apply(e,[this._getMsg()].concat(Array.prototype.slice.call(arguments)))}},{key:"time",value:function(t){if(this.timeKeyCache=e({},t,this._getTime()),console.time)try{console.time(t)}catch(e){console.error(e)}else this.consoleTime=+new Date}},{key:"timeEnd",value:function(e){if(this.timeKeyCache[e]&&console.info("timeKey: "+e+", "+this.timeKeyCache[e]+"-"+this._getTime()),console.timeEnd)try{console.timeEnd(e)}catch(e){console.error(e)}else console.info("timeEnd",this.timeKeyCache[e],+new Date-this.consoleTime)}}]),o}();exports.default=o; 
 			}); 
		define("util/polyfill.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Array.prototype.forEach||(Array.prototype.forEach=function(t){var r,e;if(null==this)throw new TypeError("this is null or not defined");var n=Object(this),o=n.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(r=arguments[1]),e=0;e<o;){var i;e in n&&(i=n[e],t.call(r,i,e,n)),e++}}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,r){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},writable:!0,configurable:!0}),Object.keys||(Object.keys=function(){var r=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=n.length;return function(i){if("function"!=typeof i&&("object"!==(void 0===i?"undefined":t(i))||null===i))throw new TypeError("Object.keys called on non-object");var u,f,l=[];for(u in i)r.call(i,u)&&l.push(u);if(e)for(f=0;f<o;f++)r.call(i,n[f])&&l.push(n[f]);return l}}()),Object.entries||(Object.entries=function(t){for(var r=Object.keys(t),e=r.length,n=new Array(e);e--;)n[e]=[r[e],t[r[e]]];return n}),String.prototype.includes||Object.defineProperty(String.prototype,"includes",{value:function(t,r){return"number"!=typeof r&&(r=0),!(r+t.length>this.length)&&-1!==this.indexOf(t,r)}}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,r){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if(0===n)return!1;for(var o=0|r,i=Math.max(o>=0?o:n-Math.abs(o),0);i<n;){if(function(t,r){return t===r||"number"==typeof t&&"number"==typeof r&&isNaN(t)&&isNaN(r)}(e[i],t))return!0;i++}return!1}}); 
 			}); 
		define("util/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){return e<10?"0"+e:e},r=function(e){return"string"==typeof e&&"%"===e.trim()[0]};exports.default={isNewData:function(e,r){var t=!0;return r.map(function(r){e[r]||(t=!1)}),t},getType:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},compareVersion:function(e,r){if(!e&&!r)return 0;if(!e)return-1;if(!r)return 1;e=e.split("."),r=r.split(".");for(var t=0;t<e.length;t++){var n=Number(e[t]||0),a=Number(r[t]||0);if(n>a)return 1;if(n<a)return-1}return 0},backNum:e,today:function(r){var t=r>0?new Date(r):new Date;return[t.getFullYear(),e(t.getMonth()+1),e(t.getDate())].join("-")},getWidgetParam:function(e,t){if("query"===e)return"wxSearchQuery"in t?decodeURIComponent(t.wxSearchQuery):t.query;if(t[e])return["widgetData","wxParamData","data","argsMap"].indexOf(e)>-1?r(t[e])?JSON.parse(decodeURIComponent(t[e])):JSON.parse(t[e]):void 0}}; 
 			}); 
		define("widget.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}require("./util/polyfill");var t=e(require("./util/utils")),a=new(e(require("./minWidgetDom/index")).default);Widget({processMockData:function(e){return e},onLoad:function(e){e=this.processMockData(e),this.ignoreOnDataPushWhenErr=!1,a.init(this.getContext()),this.onNewData(t.default.getWidgetParam("widgetData",e.query))},onDataPush:function(e){e=this.processMockData(e);var a=t.default.getWidgetParam("data",e);a&&a.err_code<0&&this.ignoreOnDataPushWhenErr?console.info("ignore err draw"):this.onNewData(a)},onTap:function(e){return a.handleTap(e)},onNewData:function(e){e&&e.render_data&&(console.info("err",e.err_code),console.info("actions",!!e.render_data.actions,e.render_data.actions?e.render_data.actions.length:-1),console.info("tap_map",!!e.render_data.tap_map),console.info("height",e.render_data.height),console.info("width",e.render_data.width),this.ignoreOnDataPushWhenErr=e.render_data.actions&&e.render_data.actions.length>0,a.setData(e.render_data.actions,e.render_data.tap_map,e.render_data.height||500,e.render_data.width,e.render_data.isDefaultWidth))}}); 
 			}); 	require("widget.js");
 	