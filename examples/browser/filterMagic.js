!function(a,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):"object"==typeof exports?exports.filterMagic=t(require("lodash")):a.filterMagic=t(a._)}(this,function(a){return function(a){var t={};function d(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return a[n].call(r.exports,r,r.exports,d),r.l=!0,r.exports}return d.m=a,d.c=t,d.d=function(a,t,n){d.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:n})},d.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},d.t=function(a,t){if(1&t&&(a=d(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)d.d(n,r,function(t){return a[t]}.bind(null,r));return n},d.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return d.d(t,"a",t),t},d.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},d.p="",d(d.s=0)}([function(a,t,d){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0});var r;!function(a){a&&a.__esModule}(d(2));function e(a,t,d){return t in a?Object.defineProperty(a,t,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[t]=d,a}var o=void 0,u=void 0,i=void 0;var f=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=255-r.data[o],r.data[o+1]=255-r.data[o+1];return r},l=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=255-r.data[o],r.data[o+2]=255-r.data[o+2];return r},c=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+20,r.data[o+1]=a+30,r.data[o+2]=a+60}return r},h=function(){for(o=0;o<r.data.length;o+=4){r.data[o+1]=void 0==r.data[o+100]?0:r.data[o+20]}return r},g=function(){for(o=0;o<r.data.length;o+=4){r.data[o+2]=void 0==r.data[o+100]?0:r.data[o+20]}return r},v=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=255-r.data[o];return r},s=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=r.data[o+2],r.data[o+1]=r.data[o+1],r.data[o+2]=r.data[o];return r},m=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.4*Math.random(),t=.6+.4*Math.random(),d=.6+.4*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*d}return r},p=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.6*Math.random(),t=.6+.4*Math.random(),d=.6+.4*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*d}return r},_=function(){for(o=0;o<r.data.length;o+=4)r.data[o+1]=255-r.data[o+1];return r},M=function(){for(o=0;o<r.data.length;o+=4)r.data[o+2]=255-r.data[o+2];return r},y=function(){for(o=0;o<r.data.length;o+=4)r.data[o]-=20,r.data[o+1]-=20,r.data[o+2]-=20;return r},b=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=50,r.data[o+1]+=50,r.data[o+2]+=50;return r},w=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a,r.data[o+1]=a,r.data[o+2]=a}return r},x=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+100,r.data[o+1]=a+40,r.data[o+2]=a+20}return r},j=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+20,r.data[o+1]=a+70,r.data[o+2]=a+20}return r},O=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a+=1)>255&&(a=0);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+a,r.data[o+1]=t+70,r.data[o+2]=t+20}return r},k=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a+=20)>255&&(a=0);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+a,r.data[o+1]=t+70,r.data[o+2]=t+20}return r},P=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a+=20)>255&&(a=0);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+5,r.data[o+1]=t+a,r.data[o+2]=t+20}return r},S=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a+=200)>255&&(a=0);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+5,r.data[o+1]=t+a,r.data[o+2]=t+20}return r},I=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a=_a(0,255))>255&&(a=0);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+a,r.data[o+1]=t+2,r.data[o+2]=t+5}return r},z=function(){var a=0,t=0;for(o=0;o<r.data.length;o+=4){a=_a(0,255),t=_a(0,255),a>255&&(a=0);var d=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=d+a,r.data[o+1]=d+t,r.data[o+2]=d+5}return r},D=function(){var a=0,t=0;for(o=0;o<r.data.length;o+=4){o=_a(0,r.data.length),a=_a(0,255),t=_a(0,255),inc3=_a(0,255),a>255&&(a=0);var d=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=d+a,r.data[o+1]=d+t,r.data[o+2]=d+5}return r},q=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=255-r.data[o],r.data[o+1]=255-r.data[o+1],r.data[o+2]=255-r.data[o+2];return r},C=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=200-r.data[o];return r},T=function(){for(o=0;o<r.data.length;o+=4)r.data[o+1]=255-r.data[o+1];return r},E=function(){for(o=0;o<r.data.length;o+=4)r.data[o+2]=255-r.data[o+2];return r},F=function(){for(o=0;o<r.data.length;o+=4)r.data[o+1]=120-r.data[o+1],r.data[o+2]=100-r.data[o+2];return r},N=function(){for(o=0;o<r.data.length;o+=4)r.data[o+1]=60-r.data[o+1],r.data[o+2]=100-r.data[o+2];return r},R=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+80,r.data[o+1]=a+20,r.data[o+2]=a+31}return r},A=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+4,r.data[o+1]=a+3,r.data[o+2]=a+12}return r},B=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+90,r.data[o+1]=a+40,r.data[o+2]=a+80}return r},G=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+5,r.data[o+1]=a+40,r.data[o+2]=a+20}return r},H=function(){for(o=0;o<r.data.length;o+=4){var a=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=a+18,r.data[o+1]=a+12,r.data[o+2]=a+20}return r},J=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=10,r.data[o+1]+=20,r.data[o+2]+=90;return r},K=function(){for(o=0;o<r.data.length;o+=4)r.data[o]-=150,r.data[o+1]-=150,r.data[o+2]-=150;return r},L=function(){for(o=0;o<r.data.length;o+=4){var a=_a(0,100);a>10&&a<13&&(r.data[o]=120,r.data[o+1]=120,r.data[o+2]=120);var t=(r.data[o]+r.data[o+1]+r.data[o+2])/3;r.data[o]=t+100,r.data[o+1]=t+40,r.data[o+2]=t+20}return r},Q=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=_a(0,100),r.data[o+1]+=20,r.data[o+2]+=_a(0,255);return r},U=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=80,r.data[o+1]+=40,r.data[o+2]+=120;return r},V=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=10,r.data[o+1]+=40,r.data[o+2]+=90;return r},W=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=90,r.data[o+1]+=10,r.data[o+2]+=90;return r},X=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=90,r.data[o+1]+=90,r.data[o+2]+=10;return r},Y=function(){for(o=0;o<r.data.length;o+=4)r.data[o+2]=120-r.data[o+2];return r},Z=function(){var a;for(o=0;o<r.data.length;o+=4){(a=_a(0,200))>0&&a<50?(u=20,i=30):a>49&&a<100?(u=10,i=90):(u=30,i=10),r.data[o]+=u,r.data[o+1]+=i,r.data[o+2]+=u}return r},$=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a=_a(0,200))>0&&a<50?(u=20,i=30):a>49&&a<100?(u=10,i=90):(u=30,i=10),r.data[o]+0>255?r.data[o]-=0:r.data[o]+=0,r.data[o+1]+0>255?r.data[o+1]-=i:r.data[o]+=i}return r},aa=function(){var a;for(o=0;o<r.data.length;o+=4){(a=_a(0,200))>0&&a<50?(u=20,i=30):a>49&&a<100?(u=10,i=90):(u=30,i=10),r.data[o]-void 0>255?r.data[o]-=void 0:r.data[o]+=void 0,r.data[o+1]+void 0>255?r.data[o+1]-=i:r.data[o+1]+=i}return r},ta=function(){var a=0;for(o=0;o<r.data.length;o+=4)(a=_a(0,200))>0&&a<50?(u=0,i=30):a>49&&a<100?(u=100,i=90):(u=70,i=10),r.data[o]-void 0>255?r.data[o]-=void 0:r.data[o]+=void 0,r.data[o+1]+void 0>255?r.data[o+1]-=i:r.data[o+2]+=i;return r},da=function(){var a=0;for(o=0;o<r.data.length;o+=4){var t=0,d=0;(a=_a(0,200))>0&&a<50?(t=20,d=30):a>49&&a<100?(t=20,d=90):(t=10,d=50),r.data[o]-t>255?r.data[o]-=t:r.data[o]+=t,r.data[o+2]+d>255?r.data[o+2]-=d:r.data[o+2]+=d}return r},na=function(){for(o=0;o<r.data.length;o+=4)r.data[o]+=120,r.data[o+1]+=70,r.data[o+2]+=13;return r},ra=function(){for(o=0;o<r.data.length;o+=4){var a=_a(0,200);a>0&&a<10?(r.data[o]=_a(0,255),r.data[o+1]=_a(0,255),r.data[o+2]=_a(0,255)):(r.data[o]+=10,r.data[o+1]+=20,r.data[o+2]+=90)}return r},ea=function(){for(o=0;o<r.data.length;o+=4)r.data[o]-=150,r.data[o+1]-=150,r.data[o+2]-=150;return r},oa=function(){for(o=0;o<r.data.length;o+=4)r.data[o]-=60,r.data[o+1]-=60,r.data[o+2]-=60;return r},ua=function(){var a=0;for(o=0;o<r.data.length;o+=4){(a=_a(0,200))>0&&a<50?(u=0,i=30):a>49&&a<100?(u=100,i=90):(u=70,i=10),r.data[o]-0>255?r.data[o]-=0:r.data[o]+=0,r.data[o+1]+0>255?r.data[o+1]-=i:r.data[o+2]+=i}return r},ia=function(){for(o=0;o<r.data.length;o+=4)r.data[o+1]=r.data[o]+50;return r},fa=function(){for(o=0;o<r.data.length;o+=4)r.data[o+2]=r.data[o+1]+50;return r},la=function(){for(o=0;o<r.data.length;o+=4)r.data[o]=r.data[o+2],r.data[o+2]=r.data[o+1]+50;return r},ca=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.5*Math.random(),t=.6+.5*Math.random(),d=.6+.5*Math.random();r.data[o]=.5*r.data[o+1]*a,r.data[o+1]=.99*r.data[o+2]*t,r.data[o+2]=.99*r.data[o]*d}return r},ha=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.5*Math.random(),t=.6+.5*Math.random(),d=.6+.5*Math.random();r.data[o]=.5*r.data[o]*a,r.data[o+1]=.3*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*d}return r},ga=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.1*Math.random(),t=.6+.5*Math.random(),d=.6+.5*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*d}return r},va=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.1*Math.random(),t=.6+.2*Math.random(),d=.6+.7*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*d}return r},sa=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.1*Math.random(),t=.6+.5*Math.random(),d=.6+.4*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*d}return r},ma=function(){Math.random();for(o=0;o<r.data.length;o+=4){var a=.6+.6*Math.random(),t=.6+.1*Math.random(),d=.6+.4*Math.random();r.data[o]=.99*r.data[o]*a,r.data[o+1]=.99*r.data[o+1]*t,r.data[o+2]=.99*r.data[o+2]*d}return r},pa=function(a){var t=document.createElement("canvas");t.height=a.height,t.width=a.width;var d=t.getContext("2d"),n=d.createPattern(a,"no-repeat");return d.fillStyle=n,d.fillRect(0,0,t.width,t.height),[t,d]},_a=function(a,t){return Math.floor(Math.random()*(t-a+1))+a};t.default=function(){var a,t=(e(a={a:ua,offset_blue:g,offset_green:h,solange_grey:s,invert:q,lemon:ia,coral:fa,dark_purple_min_noise:ha,green_med_noise:ca,teal_min_noise:ga,blue_min_noise:va,green_min_noise:sa},"green_med_noise",ca),e(a,"pink_min_noise",ma),e(a,"red_min_noise",p),e(a,"min_noise",m),e(a,"pane",S),e(a,"add_horizontal_lines",O),e(a,"add_diagonal_lines",k),e(a,"add_green_diagonal_lines",P),e(a,"greengreyscale",j),e(a,"darkify",y),e(a,"incbrightness",b),e(a,"cool_twilight",_),e(a,"blues",M),e(a,"ryo",l),e(a,"lix",f),e(a,"casino",I),e(a,"yellow_casino",z),e(a,"specks",D),e(a,"sat_adj",K),e(a,"noise_centre",Q),e(a,"greenspecks",Z),e(a,"eclectic",$),e(a,"matrix",aa),e(a,"cosmic",ta),e(a,"solange_dark",C),e(a,"solange",v),e(a,"zapt",T),e(a,"neue",E),e(a,"eon",F),e(a,"aeon",N),e(a,"ocean",J),e(a,"confetti",ra),e(a,"horizon",ea),e(a,"rosetint",R),e(a,"slate",A),e(a,"purplescale",B),e(a,"redgreyscale",x),e(a,"radio",G),e(a,"specks_redscale",L),e(a,"twenties",H),e(a,"greyscale",w),e(a,"mellow",Y),e(a,"vintage",na),e(a,"evening",oa),e(a,"bluegreyscale",c),e(a,"perfume",U),e(a,"pink_aura",W),e(a,"serenity",V),e(a,"bluegreyscale",c),e(a,"retroviolet",da),e(a,"haze",X),e(a,"frontward",la),a);return{filterImg:function(a,d){console.log("In browser");var n=pa(a),e=n[0],o=n[1];r=o.getImageData(0,0,e.width,e.height),console.log(r);var u=t[d]();console.log(u),o.putImageData(r,0,0),console.log(e,a),a.parentNode.replaceChild(e,a)},filterImgData:function(a,d){return r=a,t[d]()}}}(),a.exports=t.default}).call(this,d(1))},function(a,t){var d;d=function(){return this}();try{d=d||Function("return this")()||(0,eval)("this")}catch(a){"object"==typeof window&&(d=window)}a.exports=d},function(t,d){t.exports=a}])});