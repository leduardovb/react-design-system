var z=Object.defineProperty;var u=(e,t)=>z(e,"name",{value:t,configurable:!0});import{T as B}from"./Text.1fd4be96.js";import{_ as g,$ as W,a as R}from"./clsx.m.86e90cd9.js";import{r as o}from"./index.be0aab1d.js";import{r as F}from"./index.c83f14ba.js";import{j as b,F as C,a as q}from"./jsx-runtime.9c2eeae6.js";import{I as K,r as X}from"./IconBase.esm.9e82d71f.js";import"./iframe.f8dd491c.js";function H(e,t){const n=o.exports.createContext(t);function r(c){const{children:d,...l}=c,a=o.exports.useMemo(()=>l,Object.values(l));return o.exports.createElement(n.Provider,{value:a},d)}u(r,"Provider");function s(c){const d=o.exports.useContext(n);if(d)return d;if(t!==void 0)return t;throw new Error(`\`${c}\` must be used within \`${e}\``)}return u(s,"useContext"),r.displayName=e+"Provider",[r,s]}u(H,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function Z(e,t=[]){let n=[];function r(c,d){const l=o.exports.createContext(d),a=n.length;n=[...n,d];function i(f){const{scope:p,children:x,...$}=f,P=(p==null?void 0:p[e][a])||l,E=o.exports.useMemo(()=>$,Object.values($));return o.exports.createElement(P.Provider,{value:E},x)}u(i,"Provider");function h(f,p){const x=(p==null?void 0:p[e][a])||l,$=o.exports.useContext(x);if($)return $;if(d!==void 0)return d;throw new Error(`\`${f}\` must be used within \`${c}\``)}return u(h,"useContext"),i.displayName=c+"Provider",[i,h]}u(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=u(()=>{const c=n.map(d=>o.exports.createContext(d));return u(function(l){const a=(l==null?void 0:l[e])||c;return o.exports.useMemo(()=>({[`__scope${e}`]:{...l,[e]:a}}),[l,a])},"useScope")},"createScope");return s.scopeName=e,[r,G(s,...t)]}u(Z,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function G(...e){const t=e[0];if(e.length===1)return t;const n=u(()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return u(function(c){const d=r.reduce((l,{useScope:a,scopeName:i})=>{const f=a(c)[`__scope${i}`];return{...l,...f}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}u(G,"$c512c27ab02ef895$var$composeContextScopes");function _(e,t,{checkForDefaultPrevented:n=!0}={}){return u(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}u(_,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function L(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}u(L,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function J({prop:e,defaultProp:t,onChange:n=u(()=>{},"onChange")}){const[r,s]=Q({defaultProp:t,onChange:n}),c=e!==void 0,d=c?e:r,l=L(n),a=o.exports.useCallback(i=>{if(c){const f=typeof i=="function"?i(e):i;f!==e&&l(f)}else s(i)},[c,e,s,l]);return[d,a]}u(J,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Q({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,s=o.exports.useRef(r),c=L(t);return o.exports.useEffect(()=>{s.current!==r&&(c(r),s.current=r)},[r,s,c]),n}u(Q,"$71cd76cc60e0454e$var$useUncontrolledState");function Y(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}u(Y,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const A=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function V(e){const[t,n]=o.exports.useState(void 0);return A(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let d,l;if("borderBoxSize"in c){const a=c.borderBoxSize,i=Array.isArray(a)?a[0]:a;d=i.inlineSize,l=i.blockSize}else d=e.offsetWidth,l=e.offsetHeight;n({width:d,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}u(V,"$db6c3485150b8e66$export$1ab7ae714698c4b8");const ee=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],O=ee.reduce((e,t)=>{const n=o.exports.forwardRef((r,s)=>{const{asChild:c,...d}=r,l=c?W:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(l,g({},d,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),te="Label",[Ee,ne]=H(te,{id:void 0,controlRef:{current:null}}),oe=u(e=>{const t=ne("LabelConsumer"),{controlRef:n}=t;return o.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function re(e,t){return o.exports.useReducer((n,r)=>{const s=t[n][r];return s!=null?s:n},e)}u(re,"$fe963b355347cc68$export$3e6543de14f8614f");const I=u(e=>{const{present:t,children:n}=e,r=se(t),s=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),c=R(r.ref,s.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");I.displayName="Presence";function se(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),s=o.exports.useRef(e),c=o.exports.useRef("none"),d=e?"mounted":"unmounted",[l,a]=re(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const i=N(r.current);c.current=l==="mounted"?i:"none"},[l]),A(()=>{const i=r.current,h=s.current;if(h!==e){const p=c.current,x=N(i);e?a("MOUNT"):x==="none"||(i==null?void 0:i.display)==="none"?a("UNMOUNT"):a(h&&p!==x?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,a]),A(()=>{if(t){const i=u(f=>{const x=N(r.current).includes(f.animationName);f.target===t&&x&&F.exports.flushSync(()=>a("ANIMATION_END"))},"handleAnimationEnd"),h=u(f=>{f.target===t&&(c.current=N(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:o.exports.useCallback(i=>{i&&(r.current=getComputedStyle(i)),n(i)},[])}}u(se,"$921a889cee6df7e8$var$usePresence");function N(e){return(e==null?void 0:e.animationName)||"none"}u(N,"$921a889cee6df7e8$var$getAnimationName");const T="Checkbox",[ce,Se]=Z(T),[ae,ie]=ce(T),ue=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":r,name:s,checked:c,defaultChecked:d,required:l,disabled:a,value:i="on",onCheckedChange:h,...f}=e,[p,x]=o.exports.useState(null),$=R(t,m=>x(m)),P=oe(p),E=r||P,S=o.exports.useRef(!1),w=p?Boolean(p.closest("form")):!0,[y=!1,j]=J({prop:c,defaultProp:d,onChange:h});return o.exports.createElement(ae,{scope:n,state:y,disabled:a},o.exports.createElement(O.button,g({type:"button",role:"checkbox","aria-checked":v(y)?"mixed":y,"aria-labelledby":E,"aria-required":l,"data-state":D(y),"data-disabled":a?"":void 0,disabled:a,value:i},f,{ref:$,onKeyDown:_(e.onKeyDown,m=>{m.key==="Enter"&&m.preventDefault()}),onClick:_(e.onClick,m=>{j(M=>v(M)?!0:!M),w&&(S.current=m.isPropagationStopped(),S.current||m.stopPropagation())})})),w&&o.exports.createElement(fe,{control:p,bubbles:!S.current,name:s,value:i,checked:y,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),de="CheckboxIndicator",le=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...s}=e,c=ie(de,n);return o.exports.createElement(I,{present:r||v(c.state)||c.state===!0},o.exports.createElement(O.span,g({"data-state":D(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),fe=u(e=>{const{control:t,checked:n,bubbles:r=!0,...s}=e,c=o.exports.useRef(null),d=Y(n),l=V(t);return o.exports.useEffect(()=>{const a=c.current,i=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(i,"checked").set;if(d!==n&&f){const p=new Event("click",{bubbles:r});a.indeterminate=v(n),f.call(a,v(n)?!1:n),a.dispatchEvent(p)}},[d,n,r]),o.exports.createElement("input",g({type:"checkbox","aria-hidden":!0,defaultChecked:v(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function v(e){return e==="indeterminate"}u(v,"$e698a72e93240346$var$isIndeterminate");function D(e){return v(e)?"indeterminate":e?"checked":"unchecked"}u(D,"$e698a72e93240346$var$getState");const pe=ue,be=le;var k=new Map;k.set("bold",function(e){return b(C,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});k.set("duotone",function(e){return b(C,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});k.set("fill",function(){return b(C,{children:b("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});k.set("light",function(e){return b(C,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});k.set("thin",function(e){return b(C,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});k.set("regular",function(e){return b(C,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var he=u(function(t,n){return X(t,n,k)},"renderPath"),U=o.exports.forwardRef(function(e,t){return b(K,{...Object.assign({ref:t},e,{renderPath:he})})});U.displayName="Check";const xe=U;function $e(){return b(pe,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:b(be,{asChild:!0,children:b(xe,{weight:"bold",className:"h5 w-5 text-cyan-500"})})})}u($e,"Checkbox");const Ae={title:"Components/Checkbox",component:$e,args:{},argTypes:{},decorators:[e=>q("div",{className:"flex items-center gap-2",children:[e(),b(B,{size:"sm",children:"Lembrar de mim"})]})]},we={},Me=["Default"];export{we as Default,Me as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Checkbox.stories.9d7ec8c1.js.map
