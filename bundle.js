!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){alert("I am imported")},t.AnotherMethod=function(){alert("Another method")}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n(0));function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(t,n){u(this,e),this.name=t||"default name",this.origin=n||"default origin"}return r(e,[{key:"printName",value:function(){console.log("Name = "+this.name)}},{key:"printOrigin",value:function(){console.log("Origin = "+this.origin)}}]),e}(),c=new(function(e){function t(e,n,r){u(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.genre=r||"default genre",o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a),r(t,[{key:"printName",value:function(){console.log("This is an override")}},{key:"printGenre",value:function(){console.log("Genre-"+this.genre)}}]),t}())("Bay side","test","Pure Fuck");c.printName(),c.printOrigin(),c.printGenre();console.log("You can not reassign this"),(0,o.AnotherMethod)(),(0,i.default)();var l={foo:"bar"},f=l;f.fuck="in ass",l.suck="my dick",console.log(f),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;console.log(e+10)}();var s=!0,p=!1,y=void 0;try{for(var d,h=[1,2,3,4,5,6,7,8,9,10][Symbol.iterator]();!(s=(d=h.next()).done);s=!0){var g=d.value;console.log(g)}}catch(e){p=!0,y=e}finally{try{!s&&h.return&&h.return()}finally{if(p)throw y}}}]);