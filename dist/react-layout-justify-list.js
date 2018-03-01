!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactLayoutJustifyList=t(require("classnames"),require("object-assign"),require("prop-types"),require("react")):e.ReactLayoutJustifyList=t(e.classnames,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,r,n){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,l,f=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),d=r(5),h=n(d),m=r(4),b=n(m),v=r(2),g=n(v),j=r(3),w=n(j),x=/([0-9.]+)([a-z]+)/,O=[,0,"px"],_=(l=c=function(e){function t(){return i(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),y(t,[{key:"render",value:function(){var e=this.props,t=e.width,r=e.count,n=(e.itemWidth,e.className),o=e.style,i=a(e,["width","count","itemWidth","className","style"]);return h.default.createElement("section",p({},i,{"data-count":r,className:(0,g.default)("react-layout-justify-list",n),style:(0,w.default)({width:t},o)}),h.default.createElement("div",{className:"react-layout-justify-list-container",style:{marginRight:"-"+this.gap}},this.children))}},{key:"gap",get:function(){var e=this.props,r=e.width,n=e.count,o=e.itemWidth,a=(e.children,t.parseValue(r)),i=f(a,3),u=(i[0],i[1]),s=i[2];return(parseFloat(u)-parseFloat(o)*n)/(n-1)+s}},{key:"children",get:function(){var e=this,t=this.props.children;return h.default.Children.map(t,function(t,r){var n=t.props,i=n.style,u=a(n,["style"]);return h.default.cloneElement.apply(h.default,[t,{className:"react-layout-justify-list-item",style:(0,w.default)({marginRight:""+e.gap},i)}].concat(o(u)))})}}],[{key:"parseValue",value:function(e){return e.match(x)||O}}]),t}(d.Component),c.propTypes={className:b.default.string,width:b.default.string,itemWidth:b.default.string,count:b.default.number},c.defaultProps={},l);t.default=_},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-layout-justify-list.js.map