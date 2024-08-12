import{E as y,V as p,G,j as C,J as ee,O as ne,o as c,C as S,D as T,L as f,H as d,a6 as oe,N as te,g as $,M as g,X as z,d as F,r as ae,c as B,w as V,a0 as l,Z as re,af as se,y as b,I as O,K as P,ax as ie,P as le,ar as ce,aB as de,b as _,aC as ue,S as M,U as pe,aD as fe,aE as me,aF as ve,Q as R,aG as ye}from"./__uno-BH6Bw0DK.js";import{h as w,c as ge,s as Oe,i as we}from"./icon-DHmKmwnm.js";import{u as be,a as he}from"./shared-Dotpn_Ji.js";var Se=Object.defineProperty,ke=Object.defineProperties,Ce=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,$e=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,L=(e,o,n)=>o in e?Se(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,Ee=(e,o)=>{for(var n in o||(o={}))$e.call(o,n)&&L(e,n,o[n]);if(D)for(var n of D(o))Pe.call(o,n)&&L(e,n,o[n]);return e},_e=(e,o)=>ke(e,Ce(o));const I={type:String,position:{type:String,default:"top"},content:[String,Function,Object],contentClass:String,duration:{type:Number,default:3e3},elevation:{type:[Boolean,String,Number],default:!0},vertical:Boolean,loadingType:y(w,"type"),loadingSize:y(w,"size"),loadingRadius:y(w,"radius"),loadingColor:_e(Ee({},y(w,"color")),{default:"currentColor"}),lockScroll:Boolean,show:Boolean,teleport:{type:[String,Object,Boolean],default:"body"},forbidClick:Boolean,onOpen:p(),onOpened:p(),onClose:p(),onClosed:p(),"onUpdate:show":p(),_update:String},{n:Ie,classes:Ae}=G("snackbar"),Ne={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""};function Te(e,o){const n=C("var-icon"),a=C("var-loading");return ee((c(),S("div",{class:f(e.n()),style:z({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[T("div",{class:f(e.classes(e.n("wrapper"),e.n("wrapper-".concat(e.position)),e.formatElevation(e.elevation,4),[e.vertical,e.n("vertical")],[e.type&&e.SNACKBAR_TYPE.includes(e.type),e.n("wrapper-".concat(e.type))])),style:z({zIndex:e.zIndex})},[T("div",{class:f([e.n("content"),e.contentClass])},[d(e.$slots,"default",{},()=>[oe(te(e.content),1)])],2),e.iconName||e.type==="loading"||e.$slots.icon?(c(),S("div",{key:0,class:f(e.n("icon"))},[e.iconName?(c(),$(n,{key:0,name:e.iconName},null,8,["name"])):g("v-if",!0),e.type==="loading"?(c(),$(a,{key:1,type:e.loadingType,size:e.loadingSize,color:e.loadingColor,radius:e.loadingRadius},null,8,["type","size","color","radius"])):g("v-if",!0),d(e.$slots,"icon")],2)):g("v-if",!0),e.$slots.action?(c(),S("div",{key:1,class:f(e.n("action"))},[d(e.$slots,"action")],2)):g("v-if",!0)],6)],6)),[[ne,e.show]])}const K=F({name:"VarSnackbarCore",components:{VarLoading:ge,VarIcon:Oe},props:I,setup(e){const o=ae(null),{zIndex:n}=be(()=>e.show,1);he(()=>e.show,()=>e.lockScroll);const a=B(()=>{const{type:u,forbidClick:h}=e;return u==="loading"||h}),r=B(()=>e.type?Ne[e.type]:"");function i(){o.value=setTimeout(()=>{e.type!=="loading"&&l(e["onUpdate:show"],!1)},e.duration)}return V(()=>e.show,u=>{u?(l(e.onOpen),i()):(clearTimeout(o.value),l(e.onClose))}),V(()=>e._update,()=>{clearTimeout(o.value),i()}),re(()=>{e.show&&(l(e.onOpen),i())}),{SNACKBAR_TYPE:Z,zIndex:n,iconName:r,isForbidClick:a,n:Ie,classes:Ae,formatElevation:se}}});K.render=Te;var Y=K;const{name:ze,n:Be}=G("snackbar");function Ve(e,o){const n=C("var-snackbar-core");return c(),$(ce,{to:e.teleport===!1?void 0:e.teleport,disabled:e.disabled||e.teleport===!1},[b(le,{name:"".concat(e.n(),"-fade"),onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:O(()=>[b(n,P(e.$props,{class:e.n("transition")}),ie({default:O(()=>[d(e.$slots,"default")]),_:2},[e.$slots.icon?{name:"icon",fn:O(()=>[d(e.$slots,"icon")]),key:"0"}:void 0,e.$slots.action?{name:"action",fn:O(()=>[d(e.$slots,"action")]),key:"1"}:void 0]),1040,["class"])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"])}const H=F({name:ze,components:{VarSnackbarCore:Y},props:I,setup(){const{disabled:e}=de();return{disabled:e,n:Be}}});H.render=Ve;var A=H,De=Object.defineProperty,j=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,U=(e,o,n)=>o in e?De(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,m=(e,o)=>{for(var n in o||(o={}))Le.call(o,n)&&U(e,n,o[n]);if(j)for(var n of j(o))je.call(o,n)&&U(e,n,o[n]);return e};const Z=["loading","success","warning","info","error"];let q=0,E=!1,J,v=!1;const Q={type:void 0,content:"",icon:"",action:"",position:"top",duration:3e3,elevation:!0,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}};let t=_([]),N=Q;const Ue={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},k=e=>()=>ye(e)?e():e,qe={setup(){return()=>{const e=t.map(({id:o,reactiveSnackOptions:n,_update:a})=>{const r=document.querySelector(".var-transition-group");n.forbidClick||n.type==="loading"?r.classList.add("var-pointer-auto"):r.classList.remove("var-pointer-auto");const i=m({position:v?"relative":"absolute"},Ye(n.position)),{content:u,icon:h,action:X}=n,W={default:k(u),icon:k(h),action:k(X)};return b(Y,P(n,{key:o,style:i,"data-id":o,_update:a,show:n.show,"onUpdate:show":x=>n.show=x}),W)});return b(ve,P(Ue,{style:{zIndex:we.zIndex},onAfterEnter:Ge,onAfterLeave:Fe}),{default:()=>[e]})}}},s=function(e){const o=Re(e),n=_(m(m({},N),o));n.show=!0,E||(E=!0,J=fe(qe).unmountInstance);const{length:a}=t,r={id:q++,reactiveSnackOptions:n};if(a===0||v)Me(r);else{const i="update-".concat(q);Ke(n,i)}return{clear(){!v&&t.length?t[0].reactiveSnackOptions.show=!1:n.show=!1}}};Z.forEach(e=>{s[e]=o=>(ue(o)?o.type=e:o={content:o,type:e},s(o))});s.allowMultiple=function(e=!1){e!==v&&(t.forEach(o=>{o.reactiveSnackOptions.show=!1}),v=e)};s.clear=function(){t.forEach(e=>{e.reactiveSnackOptions.show=!1})};s.setDefaultOptions=function(e){N=e};s.resetDefaultOptions=function(){N=Q};function Ge(e){const o=e.getAttribute("data-id"),n=t.find(a=>a.id===R(o));n&&l(n.reactiveSnackOptions.onOpened)}function Fe(e){e.parentElement&&e.parentElement.classList.remove("var-pointer-auto");const o=e.getAttribute("data-id"),n=t.find(r=>r.id===R(o));n&&(n.animationEnd=!0,l(n.reactiveSnackOptions.onClosed)),t.every(r=>r.animationEnd)&&(l(J),t=_([]),E=!1)}function Me(e){t.push(e)}function Re(e={}){return me(e)?{content:e}:e}function Ke(e,o){const[n]=t;n.reactiveSnackOptions=m(m({},n.reactiveSnackOptions),e),n._update=o}function Ye(e="top"){return e==="bottom"?{top:"85%"}:{top:e==="top"?"5%":"45%"}}s.Component=A;M(A);M(A,s);pe(s,I);var Qe=s;export{Qe as s};
