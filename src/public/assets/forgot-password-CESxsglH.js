import{_ as C,a as w}from"./AppBack.vue_vue_type_script_setup_true_lang-B0jaPmEW.js";import{d as y,_ as V}from"./icon-DHmKmwnm.js";import{b,c as $,_ as k,a as h}from"./validate-p3cDwF5X.js";import{s as I}from"./SnackbarSfc-C6WFjMYL.js";import{_ as P,a as S}from"./AppHeader.vue_vue_type_script_setup_true_lang-D22grd98.js";import{d as B,r as N,b as z,g as D,I as t,o as F,D as T,y as o,u as n,a6 as U,N as E}from"./__uno-BH6Bw0DK.js";import"./formDetails-CtDWKttm.js";import{u as L}from"./main-DjIizSm9.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./shared-Dotpn_Ji.js";const q={class:"forgot-password"},A=B({__name:"forgot-password",setup(G){const{t:c}=L(),l=N(),s=z({email:"",verifyCode:""});async function d(){var a;if(await((a=l.value)==null?void 0:a.validate()))return new Promise(r=>{setTimeout(()=>{I.success(c("Submit Success")),r(void 0)},1e3)})}return(e,a)=>{const r=w,_=P,m=y,p=k,u=V,f=S,v=h,g=C;return F(),D(g,null,{default:t(()=>[T("div",q,[o(_,{title:e.$t("Forgot Password")},{left:t(()=>[o(r)]),_:1},8,["title"]),o(v,{ref_key:"form",ref:l,class:"forgot-password-form"},{default:t(()=>[o(f,{direction:"column",size:["8vmin",0]},{default:t(()=>[o(p,{variant:"outlined",placeholder:e.$t("Please input {field}",{field:e.$t("email")}),rules:[n(b)()],modelValue:n(s).email,"onUpdate:modelValue":a[0]||(a[0]=i=>n(s).email=i)},{"prepend-icon":t(()=>[o(m,{class:"forgot-password-form-input-icon",name:"email"})]),_:1},8,["placeholder","rules","modelValue"]),o(p,{variant:"outlined",placeholder:e.$t("Please input {field}",{field:e.$t("verify code")}),rules:[n($)(6)],modelValue:n(s).verifyCode,"onUpdate:modelValue":a[1]||(a[1]=i=>n(s).verifyCode=i)},{"prepend-icon":t(()=>[o(m,{class:"forgot-password-form-input-icon",name:"card-account-details"})]),_:1},8,["placeholder","rules","modelValue"]),o(u,{type:"primary",block:"",size:"large","auto-loading":"",onClick:d},{default:t(()=>[U(E(e.$t("Submit")),1)]),_:1})]),_:1})]),_:1},512)])]),_:1})}}}),Z=j(A,[["__scopeId","data-v-7e58f41a"]]);export{Z as default};