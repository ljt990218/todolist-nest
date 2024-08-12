import{b as X,s as Y,a as Z}from"./icon-vdiOjEHh.js";import{V as L,G as q,j as P,a5 as Q,J as _,o as r,C as u,D as T,H as v,L as o,X as m,M as f,N as H,y as R,I as x,ae as ee,d as te,r as t,c as ae,w as oe,n as le,R as w,af as ne,a2 as ie,ah as se,a0 as F,S as re,U as ue}from"./__uno-C5uaOKZs.js";import{u as de,a as ve}from"./shared-B5B2mrma.js";const U={src:String,fit:{type:String,default:"cover"},imageHeight:[String,Number],imageWidth:[String,Number],outline:Boolean,layout:{type:String,default:"column"},floating:Boolean,floatingDuration:{type:Number,default:250},alt:String,title:String,subtitle:String,description:String,elevation:{type:[Boolean,Number,String],default:!0},ripple:Boolean,onClick:L(),"onUpdate:floating":L()};var V=(e,c,d)=>new Promise((i,l)=>{var s=a=>{try{n(d.next(a))}catch(p){l(p)}},h=a=>{try{n(d.throw(a))}catch(p){l(p)}},n=a=>a.done?i(a.value):Promise.resolve(a.value).then(s,h);n((d=d.apply(e,c)).next())});const{name:fe,n:ce,classes:he}=q("card"),pe=500,ge=["src","alt"];function me(e,c){const d=P("var-icon"),i=P("var-button"),l=Q("ripple");return _((r(),u("div",{ref:"card",class:o(e.classes(e.n(),[e.isRow,e.n("--layout-row")],[e.outline,e.n("--outline")],e.formatElevation(e.elevation,1))),style:m({zIndex:e.floated?e.zIndex:void 0}),onClick:c[0]||(c[0]=(...s)=>e.handleClick&&e.handleClick(...s))},[T("div",{ref:"cardFloater",class:o(e.n("floater")),style:m({width:e.floaterWidth,height:e.floaterHeight,top:e.floaterTop,left:e.floaterLeft,overflow:e.floaterOverflow,position:e.floaterPosition,zIndex:e.floated?e.zIndex:void 0,background:e.outline&&!e.floated?"transparent":void 0,transition:e.floated?"background-color ".concat(e.floatingDuration,"ms, color ").concat(e.floatingDuration,"ms, width ").concat(e.floatingDuration,"ms, height ").concat(e.floatingDuration,"ms, top ").concat(e.floatingDuration,"ms, left ").concat(e.floatingDuration,"ms"):void 0})},[v(e.$slots,"image",{},()=>[e.src?(r(),u("img",{key:0,class:o(e.n("image")),style:m({objectFit:e.fit,height:e.toSizeUnit(e.imageHeight),width:e.toSizeUnit(e.imageWidth)}),src:e.src,alt:e.alt},null,14,ge)):f("v-if",!0)]),T("div",{class:o(e.n("container"))},[v(e.$slots,"title",{slotClass:e.n("title")},()=>[e.title?(r(),u("div",{key:0,class:o(e.n("title"))},H(e.title),3)):f("v-if",!0)]),e.$slots.default?(r(),u("div",{key:0,class:o(e.n("content"))},[v(e.$slots,"default")],2)):f("v-if",!0),v(e.$slots,"subtitle",{slotClass:e.n("subtitle")},()=>[e.subtitle?(r(),u("div",{key:0,class:o(e.n("subtitle"))},H(e.subtitle),3)):f("v-if",!0)]),v(e.$slots,"description",{slotClass:e.n("description")},()=>[e.description?(r(),u("div",{key:0,class:o(e.n("description"))},H(e.description),3)):f("v-if",!0)]),e.$slots.extra?(r(),u("div",{key:1,class:o(e.n("footer"))},[v(e.$slots,"extra")],2)):f("v-if",!0),e.$slots["floating-content"]&&!e.isRow?(r(),u("div",{key:2,class:o(e.n("floating-content")),style:m({height:e.contentHeight,opacity:e.opacity,transition:"opacity ".concat(e.floatingDuration*2,"ms")})},[v(e.$slots,"floating-content")],6)):f("v-if",!0)],2),e.showFloatingButtons?(r(),u("div",{key:0,class:o(e.classes(e.n("floating-buttons"),e.n("$--box"))),style:m({zIndex:e.zIndex,opacity:e.opacity,transition:"opacity ".concat(e.floatingDuration*2,"ms")})},[v(e.$slots,"close-button",{},()=>[R(i,{"var-card-cover":"",class:o(e.classes(e.n("close-button"),e.n("$-elevation--6"))),onClick:ee(e.close,["stop"])},{default:x(()=>[R(d,{"var-card-cover":"",name:"window-close",class:o(e.n("close-button-icon"))},null,8,["class"])]),_:1},8,["class","onClick"])])],6)):f("v-if",!0)],6),T("div",{class:o(e.n("holder")),style:m({width:e.holderWidth,height:e.holderHeight})},null,6)],6)),[[l,{disabled:!e.ripple||e.floater}]])}const W=te({name:fe,directives:{Ripple:X},components:{VarIcon:Y,VarButton:Z},props:U,setup(e){const c=t(null),d=t(null),i=t("auto"),l=t("auto"),s=t("100%"),h=t("100%"),n=t("auto"),a=t("auto"),p=t(void 0),$=t("hidden"),b=t("0px"),k=t("0"),C=ae(()=>e.layout==="row"),S=t(!1),D=t(!1),{zIndex:E}=de(()=>e.floating,1);let z="auto",I="auto",B=null;const g=t(null);ve(()=>e.floating,()=>!C.value),oe(()=>e.floating,y=>{C.value||le(()=>{y?j():M()})},{immediate:!0});function j(){return V(this,null,function*(){clearTimeout(g.value),clearTimeout(B),g.value=null,g.value=setTimeout(()=>V(this,null,function*(){const{width:y,height:G,left:J,top:K}=ie(c.value);i.value=w(y),l.value=w(G),s.value=i.value,h.value=l.value,n.value=w(K),a.value=w(J),p.value="fixed",z=n.value,I=a.value,S.value=!0,yield se(),n.value="0",a.value="0",s.value="100vw",h.value="100vh",b.value="auto",k.value="1",$.value="auto",D.value=!0}),e.ripple?pe:0)})}function M(){clearTimeout(B),clearTimeout(g.value),g.value=null,s.value=i.value,h.value=l.value,n.value=z,a.value=I,b.value="0px",k.value="0",S.value=!1,B=setTimeout(()=>{i.value="auto",l.value="auto",s.value="100%",h.value="100%",n.value="auto",a.value="auto",z="auto",I="auto",$.value="hidden",p.value=void 0,D.value=!1},e.floatingDuration)}function O(){F(e["onUpdate:floating"],!1)}function A(y){F(e.onClick,y)}return{card:c,cardFloater:d,holderWidth:i,holderHeight:l,floater:g,floaterWidth:s,floaterHeight:h,floaterTop:n,floaterLeft:a,floaterPosition:p,floaterOverflow:$,contentHeight:b,opacity:k,zIndex:E,isRow:C,showFloatingButtons:S,floated:D,n:ce,classes:he,toSizeUnit:w,close:O,formatElevation:ne,handleClick:A}}});W.render=me;var N=W;re(N);ue(N,U);const be=N,ke="/varlet/assets/material-2-CK7uVnfm.png";export{ke as _,be as a};
