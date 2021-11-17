import{o as l,c as d,a as r,u as v,r as x,b as m,d as g,F as w,e as y,f as u,n as p,g as s,w as $,t as E,h as M,i as L,j as P,k as A,l as R,m as O,p as C,q as j}from"./vendor.968a8615.js";const I=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}};I();const T={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},V=r("g",{fill:"none"},[r("path",{d:"M12 11a4 4 0 1 1 0-8a4 4 0 0 1 0 8z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",class:"il-md-length-40 il-md-duration-3 il-md-delay-2"}),r("path",{d:"M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",class:"il-md-length-25 il-md-duration-2 il-md-delay-0"})],-1),S=[V];function z(a,o){return l(),d("svg",T,S)}var D={name:"line-md-account",render:z};const N={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},B=r("path",{d:"M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8z",fill:"currentColor"},null,-1),F=[B];function W(a,o){return l(),d("svg",N,F)}var q={name:"ion-search",render:W};const H={class:"absolute max-w-screen-xl w-full z-10 text-right pt-6 pr-6"},Y={class:"inline-block align-middle divide-black divide-x-2 divide-opacity-30 divide-solid font-bold opacity-50"},K={class:"inline-block align-middle px-1 opacity-50"},G={class:"inline-block align-middle rounded-1/2 w-1.875rem h-1.875rem bg-white opacity-100 text-center py-1 mx-2"},J={class:"relative"},Q=["src"],U=["src"],X={setup(a){const o=v(),e=x({path:m(()=>o.state.path),isMobile:m(()=>o.state.isMobile)}),n=[{text:"\u6D3B\u52D5\u65B0\u8A0A",link:""},{text:"\u666F\u9EDE",link:"attraction"},{text:"\u7F8E\u98DF",link:"food"},{text:"\u4F4F\u5BBF",link:"hotel"},{text:"\u4EA4\u901A",link:"travel"}];return(t,i)=>{const c=g("router-link"),_=q,f=D;return l(),d(w,null,[r("div",H,[r("ul",Y,[(l(),d(w,null,y(n,b=>u(c,{class:"inline-block px-1",to:`/${b.link}`},{default:$(()=>[r("li",null,E(b.text),1)]),_:2},1032,["to"])),64))]),r("div",K,[u(_,{class:"mt-1"})]),r("div",G,[u(f)])]),r("div",J,[r("img",{class:p(["absolute left-1/2 transform -translate-x-1/2 z-1",[{"top-4/100 w-[calc(12%)]":!s(e).isMobile&&s(e).path},{"top-6/100 w-[calc(22%)]":!s(e).isMobile&&!s(e).path},{"top-8/100 w-[calc(24%)]":s(e).isMobile}]]),src:`/src/assets/logo${s(e).isMobile||s(e).path?"-small":""}.png`},null,10,Q),r("img",{class:"w-full",src:`/src/assets/background-${s(e).path!==""?s(e).path:"home"}${s(e).isMobile?"-m":""}.png`},null,8,U)])],64)}}},Z=["src"],ee=M(" 24\u5C0F\u6642\u514D\u4ED8\u8CBB\u65C5\u904A\u8AEE\u8A62\u71B1\u7DDA\uFF1A0800-011765 "),te=r("br",null,null,-1),oe=M(" \u514D\u4ED8\u8CBB\u570B\u65C5\u5238\u5C08\u7DDA\uFF1A0800-211734\uFF08\u670D\u52D9\u6642\u9593\uFF1A\u9031\u4E00\u81F3\u9031\u65E58:30~18:30\uFF09 "),se=[ee,te,oe],ne={setup(a){const o=v(),e=x({path:m(()=>o.state.path),isMobile:m(()=>o.state.isMobile)});return(n,t)=>(l(),d("div",{class:p(["",[`bg-${s(e).path?s(e).path:"home"}`,{"flex justify-start items-center h-76px":!s(e).isMobile},{"block min-h-200px px-12":s(e).isMobile}]])},[r("img",{class:p(["py-2",[{"mx-7 w-[calc(4%)]":!s(e).isMobile},{"mx-auto w-[calc(35%)]":s(e).isMobile}]]),src:"/src/assets/logo.png"},null,10,Z),r("div",{class:p(["text-white_text font-bold mt-2",[{"text-md":!s(e).isMobile},{"text-sm leading-7":s(e).isMobile}]])},se,2)],2))}},ie={setup(a){const o=L(),e=v(),n=document.body.clientWidth<=640,t=m(()=>o.currentRoute.value.path.replace("/",""));return P(()=>{e.commit("setIsMobile",n)}),A(t,()=>{e.commit("setPath",t)}),(i,c)=>{const _=g("router-view");return l(),d("div",{class:p(["w-auto mx-auto max-w-screen-xl font-moto",{"max-w-screen-sm":s(n)}])},[u(X),u(_),u(ne)],2)}}},re="modulepreload",k={},ce="/TWtravel/",h=function(o,e){return!e||e.length===0?o():Promise.all(e.map(n=>{if(n=`${ce}${n}`,n in k)return;k[n]=!0;const t=n.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":re,t||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),t)return new Promise((_,f)=>{c.addEventListener("load",_),c.addEventListener("error",f)})})).then(()=>o())},ae=[{path:"/",component:()=>h(()=>import("./Home.d6c97e3b.js"),["assets/Home.d6c97e3b.js","assets/vendor.968a8615.js"])},{path:"/attraction",component:()=>h(()=>import("./Attraction.a957940c.js"),["assets/Attraction.a957940c.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.968a8615.js"])},{path:"/food",component:()=>h(()=>import("./Food.05ac00e3.js"),["assets/Food.05ac00e3.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.968a8615.js"])},{path:"/hotel",component:()=>h(()=>import("./Hotel.74d72cf1.js"),["assets/Hotel.74d72cf1.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.968a8615.js"])},{path:"/travel",component:()=>h(()=>import("./Travel.8609328b.js"),["assets/Travel.8609328b.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.968a8615.js"])}];var le=R({history:O(),routes:ae});const de=C({state:{path:"",isMobile:!1},getters:{},mutations:{setIsMobile(a,o){a.isMobile=o},setPath(a,o){a.path=o}},actions:{}});j(ie).use(le).use(de).mount("#app");