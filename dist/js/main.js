!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));n(4);var i=new r.default;i.indexedDB.initialization(),[gifs,stickers,favorites].forEach(function(e){e.addEventListener("click",function(e){i.getImg.type!==e.target.getAttribute("data-type")&&(i.getImg.type=e.target.getAttribute("data-type"),i.clearImgContainer(),i.getImg.offset=0,i.getImg.loading=!0,i.getImg.inquiryImg())})}),search.addEventListener("click",function(){""!==i.getImg.textSearch&&(i.clearDropDown(),i.clearImgContainer(),i.getImg.offset=0,i.getImg.loading=!0,i.getImg.textSearch=textSearch.value.split(" ").join("+").trim(),i.getImg.inquiryImg())}),document.addEventListener("scroll",function(e){i.getImg.loading||document.documentElement.scrollTop+document.documentElement.clientHeight!==document.body.scrollHeight||(i.getImg.loading=!0,i.getImg.inquiryImg())}),textSearch.addEventListener("keyup",function(){i.clearDropDown(),i.getImg.textSearch=textSearch.value.split(" ").join("+").trim(),i.getImg.inquiryImg(!0)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=o(n(2)),a=o(n(3));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.indexedDB=new a.default(this),this.getImg=new i.default(this),this.arrImages=[],this.arrImagesSearch=[]}return r(e,[{key:"createImg",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=document.createElement("div");r.className="imgContainer";var i=document.createElement("div");if("favorites"===this.getImg.type)r.id=""+n,i.className="cross",i.addEventListener("click",function(e){t.indexedDB.removeFavorite(e.target.parentNode.id),imgsContainer.removeChild(e.target.parentNode),t.arrImages.slice,t.arrImages=t.arrImages.filter(function(t){return t!==e.target.parentNode})});else{i.className="heart";var a=function(){var e=!0;return function(n){e&&(t.indexedDB.addFavorit({url:n.target.parentNode.firstChild.src}),e=!1)}}();i.addEventListener("click",a)}var o=document.createElement("img");o.src=e,r.appendChild(o),r.appendChild(i),this.arrImages.push(r),imgsContainer.appendChild(r)}},{key:"createDropDown",value:function(e){var t=this,n=document.createElement("div");n.className="imgSearchContainer";var r=document.createElement("div");r.className="heart";var i=function(){var e=!0;return function(n){e&&(t.indexedDB.addFavorit({url:n.target.parentNode.firstChild.src}),e=!1)}}();r.addEventListener("click",i);var a=document.createElement("img");a.src=e,n.appendChild(a),n.appendChild(r),this.arrImagesSearch.push(n),dropdown.appendChild(n)}},{key:"clearImgContainer",value:function(){this.arrImages.forEach(function(e){imgsContainer.removeChild(e)}),this.arrImages=[]}},{key:"clearDropDown",value:function(){this.arrImagesSearch.forEach(function(e){dropdown.removeChild(e)}),this.arrImagesSearch=[]}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.key="3QilPpAzXngyRapI2zVkza4r3Fe0VTpV",this.linkApp=t,this.type="gifs",this.textSearch,this.offset=0,this.limit=25,this.loading=!1}return r(e,[{key:"inquiryImg",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];"favorites"===this.type?(this.linkApp.clearImgContainer(),this.linkApp.indexedDB.showFavorites()):this.textSearch&&fetch("https://api.giphy.com/v1/"+this.type+"/search?q="+this.textSearch+"&api_key="+this.key+"&limit="+(t?5:this.limit)+"&offset="+(t?0:this.offset)).then(function(e){return e.json()}).then(function(n){t?n.data.forEach(function(t){e.linkApp.createDropDown(t.images.fixed_width.url)}):(n.data.forEach(function(t){e.linkApp.createImg(t.images.fixed_width.url)}),e.offset+=15,e.loading=!1)})}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.linkApp=t,this.db=null}return r(e,[{key:"initialization",value:function(){var e=indexedDB.open("MyTestDatabase");e.onerror=function(e){console.log("error")},e.onsuccess=function(e){this.db=e.target.result}.bind(this),e.onupgradeneeded=function(e){var t=e.target.result;"favorites"!==!t.objectStoreNames.contains&&t.createObjectStore("favorites",{keyPath:"id",autoIncrement:!0}).createIndex("id","id",{unigue:!1})}}},{key:"addFavorit",value:function(e){var t=this.db.transaction(["favorites"],"readwrite").objectStore("favorites").add(e);t.onerror=function(e){console.log(e.terget.error.name)},t.onsuccess=function(e){console.log("good")}}},{key:"showFavorites",value:function(){this.db.transaction(["favorites"],"readonly").objectStore("favorites").index("id").openCursor().onsuccess=function(e){var t=e.target.result;t&&(this.linkApp.createImg(t.value.url,t.value.id),t.continue())}.bind(this)}},{key:"removeFavorite",value:function(e){var t=this.db.transaction(["favorites"],"readwrite").objectStore("favorites").delete(+e);t.onerror=function(e){console.log(e.terget.error.name)},t.onsuccess=function(e){console.log("remove")}}}]),e}();t.default=i},function(e,t){}]);