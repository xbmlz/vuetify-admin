import{m as g,a as y,u as G,D as O,V as R}from"./default-V2rln7Be.js";import{p as m,g as C,u as T,c as u,b as f,a as _,d as N,h as j,e as I,f as U,o as M,w as r,i as d,j as F}from"./index-Bqx1u-cq.js";const K=m({fluid:{type:Boolean,default:!1},...g(),...y()},"VContainer"),D=C()({name:"VContainer",props:K(),setup(e,n){let{slots:t}=n;const{rtlClasses:s}=T();return G(()=>u(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},t)),{}}}),v=f.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),w=f.reduce((e,n)=>{const t="offset"+_(n);return e[t]={type:[String,Number],default:null},e},{}),L=f.reduce((e,n)=>{const t="order"+_(n);return e[t]={type:[String,Number],default:null},e},{}),b={col:Object.keys(v),offset:Object.keys(w),order:Object.keys(L)};function W(e,n,t){let s=e;if(!(t==null||t===!1)){if(n){const a=n.replace(e,"");s+=`-${a}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const z=["auto","start","end","center","baseline","stretch"],H=m({cols:{type:[Boolean,String,Number],default:!1},...v,offset:{type:[String,Number],default:null},...w,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>z.includes(e)},...g(),...y()},"VCol"),J=C()({name:"VCol",props:H(),setup(e,n){let{slots:t}=n;const s=N(()=>{const a=[];let l;for(l in b)b[l].forEach(o=>{const i=e[o],S=W(l,o,i);S&&a.push(S)});const c=a.some(o=>o.startsWith("v-col-"));return a.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return j(e.tag,{class:[s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),V=["start","end","center"],P=["space-between","space-around","space-evenly"];function h(e,n){return f.reduce((t,s)=>{const a=e+_(s);return t[a]=n(),t},{})}const Y=[...V,"baseline","stretch"],$=e=>Y.includes(e),p=h("align",()=>({type:String,default:null,validator:$})),q=[...V,...P],E=e=>q.includes(e),x=h("justify",()=>({type:String,default:null,validator:E})),Q=[...V,...P,"stretch"],A=e=>Q.includes(e),B=h("alignContent",()=>({type:String,default:null,validator:A})),k={align:Object.keys(p),justify:Object.keys(x),alignContent:Object.keys(B)},X={align:"align",justify:"justify",alignContent:"align-content"};function Z(e,n,t){let s=X[e];if(t!=null){if(n){const a=n.replace(e,"");s+=`-${a}`}return s+=`-${t}`,s.toLowerCase()}}const ee=m({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...p,justify:{type:String,default:null,validator:E},...x,alignContent:{type:String,default:null,validator:A},...B,...g(),...y()},"VRow"),te=C()({name:"VRow",props:ee(),setup(e,n){let{slots:t}=n;const s=N(()=>{const a=[];let l;for(l in k)k[l].forEach(c=>{const o=e[c],i=Z(l,c,o);i&&a.push(i)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return j(e.tag,{class:["v-row",s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),ne=d("h1",{class:"text-h3 text-primary"}," Whoops, 404 ",-1),ae=d("p",null,"The page you were looking for does not exist",-1),se=d("p",null,null,-1),re=I({__name:"404",setup(e){return(n,t)=>(M(),U(O,null,{default:r(()=>[u(D,{style:{minHeight:"100%"},class:"d-flex"},{default:r(()=>[u(te,{align:"center",justify:"center"},{default:r(()=>[u(J,{cols:"auto"},{default:r(()=>[ne,ae,d("p",null,[u(R,{color:"primary",variant:"outlined"},{default:r(()=>[F(" Get me out of here! ")]),_:1})]),se]),_:1})]),_:1})]),_:1})]),_:1}))}});export{re as default};
