!function(a,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):"object"==typeof exports?exports.filterMagic=t(require("lodash")):a.filterMagic=t(a._)}(this,function(a){return function(a){var t={};function d(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return a[n].call(r.exports,r,r.exports,d),r.l=!0,r.exports}return d.m=a,d.c=t,d.d=function(a,t,n){d.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:n})},d.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},d.t=function(a,t){if(1&t&&(a=d(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)d.d(n,r,function(t){return a[t]}.bind(null,r));return n},d.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return d.d(t,"a",t),t},d.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},d.p="",d(d.s=0)}([function(a,t,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n;!function(a){a&&a.__esModule}(d(1));function r(a,t,d){return t in a?Object.defineProperty(a,t,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[t]=d,a}var e=void 0,o=void 0,u=void 0;var f=function(){for(e=0;e<n.data.length;e+=4)n.data[e]=255-n.data[e],n.data[e+1]=255-n.data[e+1];return n},i=function(){for(e=0;e<n.data.length;e+=4)n.data[e]=255-n.data[e],n.data[e+2]=255-n.data[e+2];return n},l=function(){for(e=0;e<n.data.length;e+=4){var a=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=a+20,n.data[e+1]=a+30,n.data[e+2]=a+60}return n},c=function(){for(e=0;e<n.data.length;e+=4){n.data[e+1]=void 0==n.data[e+100]?0:n.data[e+20]}return n},h=function(){for(e=0;e<n.data.length;e+=4){n.data[e+2]=void 0==n.data[e+100]?0:n.data[e+20]}return n},g=function(){for(e=0;e<n.data.length;e+=4)n.data[e]=255-n.data[e];return n},v=function(){for(e=0;e<n.data.length;e+=4)n.data[e]=n.data[e+2],n.data[e+1]=n.data[e+1],n.data[e+2]=n.data[e];return n},s=function(){Math.random();for(e=0;e<n.data.length;e+=4){var a=.6+.4*Math.random(),t=.6+.4*Math.random(),d=.6+.4*Math.random();n.data[e]=.99*n.data[e]*a,n.data[e+1]=.99*n.data[e+1]*t,n.data[e+2]=.99*n.data[e+2]*d}return n},m=function(){Math.random();for(e=0;e<n.data.length;e+=4){var a=.6+.6*Math.random(),t=.6+.4*Math.random(),d=.6+.4*Math.random();n.data[e]=.99*n.data[e]*a,n.data[e+1]=.99*n.data[e+1]*t,n.data[e+2]=.99*n.data[e+2]*d}return n},_=function(){for(e=0;e<n.data.length;e+=4)n.data[e+1]=255-n.data[e+1];return n},p=function(){for(e=0;e<n.data.length;e+=4)n.data[e+2]=255-n.data[e+2];return n},M=function(){for(e=0;e<n.data.length;e+=4)n.data[e]-=20,n.data[e+1]-=20,n.data[e+2]-=20;return n},y=function(){for(e=0;e<n.data.length;e+=4)n.data[e]+=50,n.data[e+1]+=50,n.data[e+2]+=50;return n},b=function(){for(e=0;e<n.data.length;e+=4){var a=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=a,n.data[e+1]=a,n.data[e+2]=a}return n},x=function(){for(e=0;e<n.data.length;e+=4){var a=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=a+100,n.data[e+1]=a+40,n.data[e+2]=a+20}return n},j=function(){for(e=0;e<n.data.length;e+=4){var a=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=a+20,n.data[e+1]=a+70,n.data[e+2]=a+20}return n},w=function(){var a=0;for(e=0;e<n.data.length;e+=4){(a+=1)>255&&(a=0);var t=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=t+a,n.data[e+1]=t+70,n.data[e+2]=t+20}return n},O=function(){var a=0;for(e=0;e<n.data.length;e+=4){(a+=20)>255&&(a=0);var t=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=t+a,n.data[e+1]=t+70,n.data[e+2]=t+20}return n},k=function(){var a=0;for(e=0;e<n.data.length;e+=4){(a+=20)>255&&(a=0);var t=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=t+5,n.data[e+1]=t+a,n.data[e+2]=t+20}return n},P=function(){var a=0;for(e=0;e<n.data.length;e+=4){(a+=200)>255&&(a=0);var t=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=t+5,n.data[e+1]=t+a,n.data[e+2]=t+20}return n},S=function(){var a=0;for(e=0;e<n.data.length;e+=4){(a=_a(0,255))>255&&(a=0);var t=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=t+a,n.data[e+1]=t+2,n.data[e+2]=t+5}return n},z=function(){var a=0,t=0;for(e=0;e<n.data.length;e+=4){a=_a(0,255),t=_a(0,255),a>255&&(a=0);var d=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=d+a,n.data[e+1]=d+t,n.data[e+2]=d+5}return n},I=function(){var a=0,t=0;for(e=0;e<n.data.length;e+=4){e=_a(0,n.data.length),a=_a(0,255),t=_a(0,255),inc3=_a(0,255),a>255&&(a=0);var d=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=d+a,n.data[e+1]=d+t,n.data[e+2]=d+5}return n},D=function(){for(e=0;e<n.data.length;e+=4)n.data[e]=255-n.data[e],n.data[e+1]=255-n.data[e+1],n.data[e+2]=255-n.data[e+2];return n},q=function(){for(e=0;e<n.data.length;e+=4)n.data[e]=200-n.data[e];return n},C=function(){for(e=0;e<n.data.length;e+=4)n.data[e+1]=255-n.data[e+1];return n},T=function(){for(e=0;e<n.data.length;e+=4)n.data[e+2]=255-n.data[e+2];return n},E=function(){for(e=0;e<n.data.length;e+=4)n.data[e+1]=120-n.data[e+1],n.data[e+2]=100-n.data[e+2];return n},N=function(){for(e=0;e<n.data.length;e+=4)n.data[e+1]=60-n.data[e+1],n.data[e+2]=100-n.data[e+2];return n},R=function(){for(e=0;e<n.data.length;e+=4){var a=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=a+80,n.data[e+1]=a+20,n.data[e+2]=a+31}return n},A=function(){for(e=0;e<n.data.length;e+=4){var a=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=a+4,n.data[e+1]=a+3,n.data[e+2]=a+12}return n},B=function(){for(e=0;e<n.data.length;e+=4){var a=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=a+90,n.data[e+1]=a+40,n.data[e+2]=a+80}return n},F=function(){for(e=0;e<n.data.length;e+=4){var a=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=a+5,n.data[e+1]=a+40,n.data[e+2]=a+20}return n},G=function(){for(e=0;e<n.data.length;e+=4){var a=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=a+18,n.data[e+1]=a+12,n.data[e+2]=a+20}return n},H=function(){for(e=0;e<n.data.length;e+=4)n.data[e]+=10,n.data[e+1]+=20,n.data[e+2]+=90;return n},J=function(){for(e=0;e<n.data.length;e+=4)n.data[e]-=150,n.data[e+1]-=150,n.data[e+2]-=150;return n},K=function(){for(e=0;e<n.data.length;e+=4){var a=_a(0,100);a>10&&a<13&&(n.data[e]=120,n.data[e+1]=120,n.data[e+2]=120);var t=(n.data[e]+n.data[e+1]+n.data[e+2])/3;n.data[e]=t+100,n.data[e+1]=t+40,n.data[e+2]=t+20}return n},L=function(){for(e=0;e<n.data.length;e+=4)n.data[e]+=_a(0,100),n.data[e+1]+=20,n.data[e+2]+=_a(0,255);return n},Q=function(){for(e=0;e<n.data.length;e+=4)n.data[e]+=80,n.data[e+1]+=40,n.data[e+2]+=120;return n},U=function(){for(e=0;e<n.data.length;e+=4)n.data[e]+=10,n.data[e+1]+=40,n.data[e+2]+=90;return n},V=function(){for(e=0;e<n.data.length;e+=4)n.data[e]+=90,n.data[e+1]+=10,n.data[e+2]+=90;return n},W=function(){for(e=0;e<n.data.length;e+=4)n.data[e]+=90,n.data[e+1]+=90,n.data[e+2]+=10;return n},X=function(){for(e=0;e<n.data.length;e+=4)n.data[e+2]=120-n.data[e+2];return n},Y=function(){var a;for(e=0;e<n.data.length;e+=4){(a=_a(0,200))>0&&a<50?(o=20,u=30):a>49&&a<100?(o=10,u=90):(o=30,u=10),n.data[e]+=o,n.data[e+1]+=u,n.data[e+2]+=o}return n},Z=function(){var a=0;for(e=0;e<n.data.length;e+=4){(a=_a(0,200))>0&&a<50?(o=20,u=30):a>49&&a<100?(o=10,u=90):(o=30,u=10),n.data[e]+0>255?n.data[e]-=0:n.data[e]+=0,n.data[e+1]+0>255?n.data[e+1]-=u:n.data[e]+=u}return n},$=function(){var a;for(e=0;e<n.data.length;e+=4){(a=_a(0,200))>0&&a<50?(o=20,u=30):a>49&&a<100?(o=10,u=90):(o=30,u=10),n.data[e]-void 0>255?n.data[e]-=void 0:n.data[e]+=void 0,n.data[e+1]+void 0>255?n.data[e+1]-=u:n.data[e+1]+=u}return n},aa=function(){var a=0;for(e=0;e<n.data.length;e+=4)(a=_a(0,200))>0&&a<50?(o=0,u=30):a>49&&a<100?(o=100,u=90):(o=70,u=10),n.data[e]-void 0>255?n.data[e]-=void 0:n.data[e]+=void 0,n.data[e+1]+void 0>255?n.data[e+1]-=u:n.data[e+2]+=u;return n},ta=function(){var a=0;for(e=0;e<n.data.length;e+=4){var t=0,d=0;(a=_a(0,200))>0&&a<50?(t=20,d=30):a>49&&a<100?(t=20,d=90):(t=10,d=50),n.data[e]-t>255?n.data[e]-=t:n.data[e]+=t,n.data[e+2]+d>255?n.data[e+2]-=d:n.data[e+2]+=d}return n},da=function(){for(e=0;e<n.data.length;e+=4)n.data[e]+=120,n.data[e+1]+=70,n.data[e+2]+=13;return n},na=function(){for(e=0;e<n.data.length;e+=4){var a=_a(0,200);a>0&&a<10?(n.data[e]=_a(0,255),n.data[e+1]=_a(0,255),n.data[e+2]=_a(0,255)):(n.data[e]+=10,n.data[e+1]+=20,n.data[e+2]+=90)}return n},ra=function(){for(e=0;e<n.data.length;e+=4)n.data[e]-=150,n.data[e+1]-=150,n.data[e+2]-=150;return n},ea=function(){for(e=0;e<n.data.length;e+=4)n.data[e]-=60,n.data[e+1]-=60,n.data[e+2]-=60;return n},oa=function(){var a=0;for(e=0;e<n.data.length;e+=4){(a=_a(0,200))>0&&a<50?(o=0,u=30):a>49&&a<100?(o=100,u=90):(o=70,u=10),n.data[e]-0>255?n.data[e]-=0:n.data[e]+=0,n.data[e+1]+0>255?n.data[e+1]-=u:n.data[e+2]+=u}return n},ua=function(){for(e=0;e<n.data.length;e+=4)n.data[e+1]=n.data[e]+50;return n},fa=function(){for(e=0;e<n.data.length;e+=4)n.data[e+2]=n.data[e+1]+50;return n},ia=function(){for(e=0;e<n.data.length;e+=4)n.data[e]=n.data[e+2],n.data[e+2]=n.data[e+1]+50;return n},la=function(){Math.random();for(e=0;e<n.data.length;e+=4){var a=.6+.5*Math.random(),t=.6+.5*Math.random(),d=.6+.5*Math.random();n.data[e]=.5*n.data[e+1]*a,n.data[e+1]=.99*n.data[e+2]*t,n.data[e+2]=.99*n.data[e]*d}return n},ca=function(){Math.random();for(e=0;e<n.data.length;e+=4){var a=.6+.5*Math.random(),t=.6+.5*Math.random(),d=.6+.5*Math.random();n.data[e]=.5*n.data[e]*a,n.data[e+1]=.3*n.data[e+1]*t,n.data[e+2]=.99*n.data[e+2]*d}return n},ha=function(){Math.random();for(e=0;e<n.data.length;e+=4){var a=.6+.1*Math.random(),t=.6+.5*Math.random(),d=.6+.5*Math.random();n.data[e]=.99*n.data[e]*a,n.data[e+1]=.99*n.data[e+1]*t,n.data[e+2]=.99*n.data[e+2]*d}return n},ga=function(){Math.random();for(e=0;e<n.data.length;e+=4){var a=.6+.1*Math.random(),t=.6+.2*Math.random(),d=.6+.7*Math.random();n.data[e]=.99*n.data[e]*a,n.data[e+1]=.99*n.data[e+1]*t,n.data[e+2]=.99*n.data[e+2]*d}return n},va=function(){Math.random();for(e=0;e<n.data.length;e+=4){var a=.6+.1*Math.random(),t=.6+.5*Math.random(),d=.6+.4*Math.random();n.data[e]=.99*n.data[e]*a,n.data[e+1]=.99*n.data[e+1]*t,n.data[e+2]=.99*n.data[e+2]*d}return n},sa=function(){Math.random();for(e=0;e<n.data.length;e+=4){var a=.6+.6*Math.random(),t=.6+.1*Math.random(),d=.6+.4*Math.random();n.data[e]=.99*n.data[e]*a,n.data[e+1]=.99*n.data[e+1]*t,n.data[e+2]=.99*n.data[e+2]*d}return n},ma=function(a){var t=document.createElement("canvas");t.height=a.height,t.width=a.width;var d=t.getContext("2d"),n=d.createPattern(a,"no-repeat");return d.fillStyle=n,d.fillRect(0,0,t.width,t.height),[t,d]},_a=function(a,t){return Math.floor(Math.random()*(t-a+1))+a};t.default=function(){var a,t=(r(a={a:oa,offset_blue:h,offset_green:c,solange_grey:v,invert:D,lemon:ua,coral:fa,dark_purple_min_noise:ca,green_med_noise:la,teal_min_noise:ha,blue_min_noise:ga,green_min_noise:va},"green_med_noise",la),r(a,"pink_min_noise",sa),r(a,"red_min_noise",m),r(a,"min_noise",s),r(a,"pane",P),r(a,"add_horizontal_lines",w),r(a,"add_diagonal_lines",O),r(a,"add_green_diagonal_lines",k),r(a,"greengreyscale",j),r(a,"darkify",M),r(a,"incbrightness",y),r(a,"cool_twilight",_),r(a,"blues",p),r(a,"ryo",i),r(a,"lix",f),r(a,"casino",S),r(a,"yellow_casino",z),r(a,"specks",I),r(a,"sat_adj",J),r(a,"noise_centre",L),r(a,"greenspecks",Y),r(a,"eclectic",Z),r(a,"matrix",$),r(a,"cosmic",aa),r(a,"solange_dark",q),r(a,"solange",g),r(a,"zapt",C),r(a,"neue",T),r(a,"eon",E),r(a,"aeon",N),r(a,"ocean",H),r(a,"confetti",na),r(a,"horizon",ra),r(a,"rosetint",R),r(a,"slate",A),r(a,"purplescale",B),r(a,"redgreyscale",x),r(a,"radio",F),r(a,"specks_redscale",K),r(a,"twenties",G),r(a,"greyscale",b),r(a,"mellow",X),r(a,"vintage",da),r(a,"evening",ea),r(a,"bluegreyscale",l),r(a,"perfume",Q),r(a,"pink_aura",V),r(a,"serenity",U),r(a,"bluegreyscale",l),r(a,"retroviolet",ta),r(a,"haze",W),r(a,"frontward",ia),a);return{filterImg:function(a,d){var r=ma(a),e=r[0],o=r[1];n=o.getImageData(0,0,e.width,e.height),console.log(n);var u=t[d]();console.log(u),o.putImageData(n,0,0),console.log(e,a),a.parentNode.replaceChild(e,a)},filterImgData:function(a,d){n=a;var r=t[d]();return console.log(r),r}}}(),a.exports=t.default},function(t,d){t.exports=a}])});