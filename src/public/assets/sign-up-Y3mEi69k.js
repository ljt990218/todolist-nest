import{_ as C,a as k}from"./AppBack.vue_vue_type_script_setup_true_lang-B0jaPmEW.js";import{d as P,_ as U}from"./icon-DHmKmwnm.js";import{v as u,b,c as N,_ as S,a as I}from"./validate-p3cDwF5X.js";import{s as B}from"./SnackbarSfc-C6WFjMYL.js";import{_ as h,a as z}from"./AppHeader.vue_vue_type_script_setup_true_lang-D22grd98.js";import{d as D,r as c,b as E,g as T,I as t,o as F,D as L,y as n,u as e,a6 as j,N as q}from"./__uno-BH6Bw0DK.js";import"./formDetails-CtDWKttm.js";import{u as A}from"./main-DjIizSm9.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./shared-Dotpn_Ji.js";const H={class:"sign-up"},J=D({__name:"sign-up",setup(K){const{t:_}=A(),f=c(),p=c(!1),d=c(!1),l=E({username:"",password:"",confirmPassword:"",email:"",verifyCode:""});async function v(){var o;if(await((o=f.value)==null?void 0:o.validate()))return new Promise(m=>{setTimeout(()=>{B.success(_("Submit Success")),m(void 0)},1e3)})}return(a,o)=>{const m=k,w=h,i=P,r=S,V=U,g=z,$=I,y=C;return F(),T(y,null,{default:t(()=>[L("div",H,[n(w,{title:a.$t("Sign Up")},{left:t(()=>[n(m)]),_:1},8,["title"]),n($,{ref_key:"form",ref:f,class:"sign-up-form"},{default:t(()=>[n(g,{direction:"column",size:["8vmin",0]},{default:t(()=>[n(r,{variant:"outlined",placeholder:a.$t("Please input {field}",{field:a.$t("username")}),rules:[e(u)()],modelValue:e(l).username,"onUpdate:modelValue":o[0]||(o[0]=s=>e(l).username=s)},{"prepend-icon":t(()=>[n(i,{class:"sign-up-form-input-icon",name:"account-circle"})]),_:1},8,["placeholder","rules","modelValue"]),n(r,{variant:"outlined",placeholder:a.$t("Please input {field}",{field:a.$t("password")}),type:e(p)?"text":"password",rules:[e(u)()],modelValue:e(l).password,"onUpdate:modelValue":o[2]||(o[2]=s=>e(l).password=s)},{"prepend-icon":t(()=>[n(i,{class:"sign-up-form-input-icon",name:"lock"})]),"append-icon":t(()=>[n(i,{class:"sign-up-form-input-icon",name:e(p)?"view":"view-outline",onClick:o[1]||(o[1]=s=>p.value=!e(p))},null,8,["name"])]),_:1},8,["placeholder","type","rules","modelValue"]),n(r,{variant:"outlined",placeholder:a.$t("Please input {field}",{field:a.$t("confirm password")}),type:e(d)?"text":"password",rules:[e(u)(),s=>s===e(l).password||a.$t("Not match the password")],modelValue:e(l).confirmPassword,"onUpdate:modelValue":o[4]||(o[4]=s=>e(l).confirmPassword=s)},{"prepend-icon":t(()=>[n(i,{class:"sign-up-form-input-icon",name:"lock"})]),"append-icon":t(()=>[n(i,{class:"sign-up-form-input-icon",name:e(d)?"view":"view-outline",onClick:o[3]||(o[3]=s=>d.value=!e(d))},null,8,["name"])]),_:1},8,["placeholder","type","rules","modelValue"]),n(r,{variant:"outlined",placeholder:a.$t("Please input {field}",{field:a.$t("email")}),rules:[e(b)()],modelValue:e(l).email,"onUpdate:modelValue":o[5]||(o[5]=s=>e(l).email=s)},{"prepend-icon":t(()=>[n(i,{class:"sign-up-form-input-icon",name:"email"})]),_:1},8,["placeholder","rules","modelValue"]),n(r,{variant:"outlined",placeholder:a.$t("Please input {field}",{field:a.$t("verify code")}),rules:[e(N)(6)],modelValue:e(l).verifyCode,"onUpdate:modelValue":o[6]||(o[6]=s=>e(l).verifyCode=s)},{"prepend-icon":t(()=>[n(i,{class:"sign-up-form-input-icon",name:"card-account-details"})]),_:1},8,["placeholder","rules","modelValue"]),n(V,{type:"primary",block:"",size:"large","auto-loading":"",onClick:v},{default:t(()=>[j(q(a.$t("Sign Up")),1)]),_:1})]),_:1})]),_:1},512)])]),_:1})}}}),oe=G(J,[["__scopeId","data-v-a08c18c5"]]);export{oe as default};
