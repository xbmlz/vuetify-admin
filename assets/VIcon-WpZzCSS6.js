import{p as u,v as h,n as i,au as m,av as v,aw as S,ax as I,ay as V,M as b,L as P,i as T,u as l,ac as B,X as R,g as $,r as w,Y as A,az as F,P as N,aA as O,aB as j,b as D}from"./index-C5CI_hpq.js";const L=u({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function M(e){const n=h("useRender");n.render=e}function k(e){return m(()=>{const n=[],t={};if(e.value.background)if(v(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text&&S(e.value.background)){const a=I(e.value.background);if(a.a==null||a.a===1){const s=V(a);t.color=s,t.caretColor=s}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(v(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:t}})}function U(e,n){const t=i(()=>({text:b(e)?e.value:null})),{colorClasses:a,colorStyles:s}=k(t);return{textColorClasses:a,textColorStyles:s}}function J(e,n){const t=i(()=>({background:b(e)?e.value:null})),{colorClasses:a,colorStyles:s}=k(t);return{backgroundColorClasses:a,backgroundColorStyles:s}}const X=["x-small","small","default","large","x-large"],Y=u({size:{type:[String,Number],default:"default"}},"size");function q(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return m(()=>{let t,a;return T(X,e.size)?t=`${n}--size-${e.size}`:e.size&&(a={width:l(e.size),height:l(e.size)}),{sizeClasses:t,sizeStyles:a}})}const E=u({tag:{type:String,default:"div"}},"tag"),G=u({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:B,...L(),...Y(),...E({tag:"i"}),...R()},"VIcon"),K=$()({name:"VIcon",props:G(),setup(e,n){let{attrs:t,slots:a}=n;const s=w(),{themeClasses:x}=A(e),{iconData:d}=F(i(()=>s.value||e.icon)),{sizeClasses:g}=q(e),{textColorClasses:y,textColorStyles:z}=U(N(e,"color"));return M(()=>{var f,C;const r=(f=a.default)==null?void 0:f.call(a);r&&(s.value=(C=O(r).filter(c=>c.type===j&&c.children&&typeof c.children=="string")[0])==null?void 0:C.children);const o=!!(t.onClick||t.onClickOnce);return D(d.value.component,{tag:e.tag,icon:d.value.icon,class:["v-icon","notranslate",x.value,g.value,y.value,{"v-icon--clickable":o,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[g.value?void 0:{fontSize:l(e.size),height:l(e.size),width:l(e.size)},z.value,e.style],role:o?"button":void 0,"aria-hidden":!o,tabindex:o?e.disabled?-1:0:void 0},{default:()=>[r]})}),{}}});export{K as V,E as a,J as b,k as c,Y as d,q as e,U as f,L as m,M as u};