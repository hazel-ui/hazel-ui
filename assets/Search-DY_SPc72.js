import{j as I}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as $n}from"./index-CRoIksu0.js";import{R as Xe,r as An,M as Xr,c as qr}from"./index-BhFvso2E.js";import{R as Fe,r as m,a as on}from"./index-CAe6R3bO.js";import{b as Yr,c as ue,_ as qe,a as Kr,I as jn}from"./Icon-CGj3Vi-Z.js";import{_ as Qr,a as se,b as M,c as Jr,d as Zr,e as eo,f as Ht,g as to}from"./toConsumableArray-DgFgfs-e.js";import{y as Bt}from"./styled-components.browser.esm-CNZ_myGK.js";import{_ as P}from"./extends-CF3RwP-h.js";import{C as U}from"./Color-D8Giav_X.js";import{T as ft}from"./Theme-HiODj44g.js";import{T as no}from"./Typography-eaK2ZcZU.js";import{S as ro}from"./Shadow-BRKr-rku.js";import"./index-ChsGqxH_.js";import"./iframe-CQN2Hc3d.js";import"./index-BRq5TIsn.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function oo(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}function io(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Qr(t,e)}const an={disabled:!1},Hn=Fe.createContext(null);var ao=function(e){return e.scrollTop},ke="unmounted",ge="exited",be="entering",Oe="entered",Pt="exiting",ce=(function(t){io(e,t);function e(o,n){var i;i=t.call(this,o,n)||this;var s=n,l=s&&!s.isMounting?o.enter:o.appear,a;return i.appearStatus=null,o.in?l?(a=ge,i.appearStatus=be):a=Oe:o.unmountOnExit||o.mountOnEnter?a=ke:a=ge,i.state={status:a},i.nextCallback=null,i}e.getDerivedStateFromProps=function(n,i){var s=n.in;return s&&i.status===ke?{status:ge}:null};var r=e.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(n){var i=null;if(n!==this.props){var s=this.state.status;this.props.in?s!==be&&s!==Oe&&(i=be):(s===be||s===Oe)&&(i=Pt)}this.updateStatus(!1,i)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var n=this.props.timeout,i,s,l;return i=s=l=n,n!=null&&typeof n!="number"&&(i=n.exit,s=n.enter,l=n.appear!==void 0?n.appear:s),{exit:i,enter:s,appear:l}},r.updateStatus=function(n,i){if(n===void 0&&(n=!1),i!==null)if(this.cancelNextCallback(),i===be){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:Xe.findDOMNode(this);s&&ao(s)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ge&&this.setState({status:ke})},r.performEnter=function(n){var i=this,s=this.props.enter,l=this.context?this.context.isMounting:n,a=this.props.nodeRef?[l]:[Xe.findDOMNode(this),l],u=a[0],c=a[1],d=this.getTimeouts(),g=l?d.appear:d.enter;if(!n&&!s||an.disabled){this.safeSetState({status:Oe},function(){i.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:be},function(){i.props.onEntering(u,c),i.onTransitionEnd(g,function(){i.safeSetState({status:Oe},function(){i.props.onEntered(u,c)})})})},r.performExit=function(){var n=this,i=this.props.exit,s=this.getTimeouts(),l=this.props.nodeRef?void 0:Xe.findDOMNode(this);if(!i||an.disabled){this.safeSetState({status:ge},function(){n.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Pt},function(){n.props.onExiting(l),n.onTransitionEnd(s.exit,function(){n.safeSetState({status:ge},function(){n.props.onExited(l)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(n,i){i=this.setNextCallback(i),this.setState(n,i)},r.setNextCallback=function(n){var i=this,s=!0;return this.nextCallback=function(l){s&&(s=!1,i.nextCallback=null,n(l))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(n,i){this.setNextCallback(i);var s=this.props.nodeRef?this.props.nodeRef.current:Xe.findDOMNode(this),l=n==null&&!this.props.addEndListener;if(!s||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=a[0],c=a[1];this.props.addEndListener(u,c)}n!=null&&setTimeout(this.nextCallback,n)},r.render=function(){var n=this.state.status;if(n===ke)return null;var i=this.props,s=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var l=Yr(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Fe.createElement(Hn.Provider,{value:null},typeof s=="function"?s(n,l):Fe.cloneElement(Fe.Children.only(s),l))},e})(Fe.Component);ce.contextType=Hn;ce.propTypes={};function Ce(){}ce.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ce,onEntering:Ce,onEntered:Ce,onExit:Ce,onExiting:Ce,onExited:Ce};ce.UNMOUNTED=ke;ce.EXITED=ge;ce.ENTERING=be;ce.ENTERED=Oe;ce.EXITING=Pt;function Bn(t){var e,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=Bn(t[e]))&&(o&&(o+=" "),o+=r);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function ye(){for(var t,e,r=0,o="";r<arguments.length;)(t=arguments[r++])&&(e=Bn(t))&&(o&&(o+=" "),o+=e);return o}function Se(){return Se=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Se.apply(this,arguments)}function Ut(t,e){if(t==null)return{};var r={},o=Object.keys(t),n,i;for(i=0;i<o.length;i++)n=o[i],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function $e(t){return typeof t=="number"&&!isNaN(t)}function Ve(t){return typeof t=="boolean"}function Ae(t){return typeof t=="string"}function K(t){return typeof t=="function"}function et(t){return Ae(t)||K(t)?t:null}function Rt(t){return t===0||t}function so(t,e){return t===!1||$e(t)&&t>0?t:e}var Un=!!(typeof window<"u"&&window.document&&window.document.createElement);function yt(t){return m.isValidElement(t)||Ae(t)||K(t)||$e(t)}var zn={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ve={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function lo(t,e,r){r===void 0&&(r=300);var o=t.scrollHeight,n=t.style;requestAnimationFrame(function(){n.minHeight="initial",n.height=o+"px",n.transition="all "+r+"ms",requestAnimationFrame(function(){n.height="0",n.padding="0",n.margin="0",setTimeout(function(){return e()},r)})})}function uo(t){var e=t.enter,r=t.exit,o=t.duration,n=o===void 0?750:o,i=t.appendPosition,s=i===void 0?!1:i,l=t.collapse,a=l===void 0?!0:l,u=t.collapseDuration,c=u===void 0?300:u,d,g;return Array.isArray(n)&&n.length===2?(d=n[0],g=n[1]):d=g=n,function(b){var v=b.children,p=b.position,h=b.preventExitTransition,E=b.done,T=Ut(b,["children","position","preventExitTransition","done"]),x=s?e+"--"+p:e,f=s?r+"--"+p:r,O=function(){var w=T.nodeRef.current;w&&(w.classList.add(x),w.style.animationFillMode="forwards",w.style.animationDuration=d+"ms")},C=function(){var w=T.nodeRef.current;w&&(w.classList.remove(x),w.style.cssText="")},S=function R(){var w=T.nodeRef.current;w&&(w.removeEventListener("animationend",R),a?lo(w,E,c):E())},V=function(){var w=T.nodeRef.current;w&&(w.classList.add(f),w.style.animationFillMode="forwards",w.style.animationDuration=g+"ms",w.addEventListener("animationend",S))};return m.createElement(ce,Object.assign({},T,{timeout:h?a?c:50:{enter:d,exit:a?g+c:g+50},onEnter:O,onEntered:C,onExit:h?S:V,unmountOnExit:!0}),v)}}var te={list:new Map,emitQueue:new Map,on:function(e,r){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(r),this},off:function(e,r){if(r){var o=this.list.get(e).filter(function(n){return n!==r});return this.list.set(e,o),this}return this.list.delete(e),this},cancelEmit:function(e){var r=this.emitQueue.get(e);return r&&(r.forEach(function(o){return clearTimeout(o)}),this.emitQueue.delete(e)),this},emit:function(e){for(var r=this,o=arguments.length,n=new Array(o>1?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i];this.list.has(e)&&this.list.get(e).forEach(function(s){var l=setTimeout(function(){s.apply(void 0,n)},0);r.emitQueue.has(e)||r.emitQueue.set(e,[]),r.emitQueue.get(e).push(l)})}};function Ee(t,e){e===void 0&&(e=!1);var r=m.useRef(t);return m.useEffect(function(){e&&(r.current=t)}),r.current}function co(t,e){switch(e.type){case"ADD":return[].concat(t,[e.toastId]).filter(function(r){return r!==e.staleId});case"REMOVE":return Rt(e.toastId)?t.filter(function(r){return r!==e.toastId}):[]}}function fo(t){var e=m.useReducer(function(x){return x+1},0),r=e[1],o=m.useReducer(co,[]),n=o[0],i=o[1],s=m.useRef(null),l=Ee(0),a=Ee([]),u=Ee({}),c=Ee({toastKey:1,displayedToast:0,props:t,containerId:null,isToastActive:d,getToast:function(f){return u[f]||null}});m.useEffect(function(){return c.containerId=t.containerId,te.cancelEmit(3).on(0,p).on(1,function(x){return s.current&&y(x)}).on(5,g).emit(2,c),function(){return te.emit(3,c)}},[]),m.useEffect(function(){c.isToastActive=d,c.displayedToast=n.length,te.emit(4,n.length,t.containerId)},[n]),m.useEffect(function(){c.props=t});function d(x){return n.indexOf(x)!==-1}function g(x){var f=x.containerId,O=c.props,C=O.limit,S=O.enableMultiContainer;C&&(!f||c.containerId===f&&S)&&(l-=a.length,a=[])}function y(x){var f=a.length;if(l=Rt(x)?l-1:l-c.displayedToast,l<0&&(l=0),f>0){var O=Rt(x)?1:c.props.limit;if(f===1||O===1)c.displayedToast++,b();else{var C=O>f?f:O;c.displayedToast=C;for(var S=0;S<C;S++)b()}}i({type:"REMOVE",toastId:x})}function b(){var x=a.shift(),f=x.toastContent,O=x.toastProps,C=x.staleId;setTimeout(function(){h(f,O,C)},500)}function v(x){var f=x.containerId,O=x.toastId,C=x.updateId;return!!(!s.current||c.props.enableMultiContainer&&f!==c.props.containerId||c.isToastActive(O)&&C==null)}function p(x,f){var O=f.delay,C=f.staleId,S=Ut(f,["delay","staleId"]);if(!(!yt(x)||v(S))){var V=S.toastId,R=S.updateId,w=c.props,$=c.isToastActive,z=function(){return y(V)},q=!$(V);q&&l++;var k={toastId:V,updateId:R,key:S.key||c.toastKey++,type:S.type,closeToast:z,closeButton:S.closeButton,rtl:w.rtl,position:S.position||w.position,transition:S.transition||w.transition,className:et(S.className||w.toastClassName),bodyClassName:et(S.bodyClassName||w.bodyClassName),style:S.style||w.toastStyle,bodyStyle:S.bodyStyle||w.bodyStyle,onClick:S.onClick||w.onClick,pauseOnHover:Ve(S.pauseOnHover)?S.pauseOnHover:w.pauseOnHover,pauseOnFocusLoss:Ve(S.pauseOnFocusLoss)?S.pauseOnFocusLoss:w.pauseOnFocusLoss,draggable:Ve(S.draggable)?S.draggable:w.draggable,draggablePercent:$e(S.draggablePercent)?S.draggablePercent:w.draggablePercent,closeOnClick:Ve(S.closeOnClick)?S.closeOnClick:w.closeOnClick,progressClassName:et(S.progressClassName||w.progressClassName),progressStyle:S.progressStyle||w.progressStyle,autoClose:so(S.autoClose,w.autoClose),hideProgressBar:Ve(S.hideProgressBar)?S.hideProgressBar:w.hideProgressBar,progress:S.progress,role:Ae(S.role)?S.role:w.role,deleteToast:function(){E(V)}};K(S.onOpen)&&(k.onOpen=S.onOpen),K(S.onClose)&&(k.onClose=S.onClose);var N=w.closeButton;S.closeButton===!1||yt(S.closeButton)?N=S.closeButton:S.closeButton===!0&&(N=yt(w.closeButton)?w.closeButton:!0),k.closeButton=N;var A=x;m.isValidElement(x)&&!Ae(x.type)?A=m.cloneElement(x,{closeToast:z}):K(x)&&(A=x({closeToast:z})),w.limit&&w.limit>0&&l>w.limit&&q?a.push({toastContent:A,toastProps:k,staleId:C}):$e(O)&&O>0?setTimeout(function(){h(A,k,C)},O):h(A,k,C)}}function h(x,f,O){var C=f.toastId;u[C]={content:x,props:f},i({type:"ADD",toastId:C,staleId:O})}function E(x){delete u[x],r()}function T(x){for(var f={},O=t.newestOnTop?Object.keys(u).reverse():Object.keys(u),C=0;C<O.length;C++){var S=u[O[C]],V=S.props.position;f[V]||(f[V]=[]),f[V].push(S)}return Object.keys(f).map(function(R){return x(R,f[R])})}return{getToastToRender:T,collection:u,containerRef:s,isToastActive:d}}function sn(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function po(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function mo(t){var e=m.useState(!0),r=e[0],o=e[1],n=m.useState(!1),i=n[0],s=n[1],l=m.useRef(null),a=Ee({start:0,x:0,y:0,deltaX:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),u=Ee(t,!0),c=t.autoClose,d=t.pauseOnHover,g=t.closeToast,y=t.onClick,b=t.closeOnClick;m.useEffect(function(){return K(t.onOpen)&&t.onOpen(m.isValidElement(t.children)&&t.children.props),function(){K(u.onClose)&&u.onClose(m.isValidElement(u.children)&&u.children.props)}},[]),m.useEffect(function(){return t.draggable&&f(),function(){t.draggable&&O()}},[t.draggable]),m.useEffect(function(){return t.pauseOnFocusLoss&&T(),function(){t.pauseOnFocusLoss&&x()}},[t.pauseOnFocusLoss]);function v(R){var w=l.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=w.getBoundingClientRect(),w.style.transition="",a.start=a.x=sn(R.nativeEvent),a.removalDistance=w.offsetWidth*(t.draggablePercent/100)}function p(){if(a.boundingRect){var R=a.boundingRect,w=R.top,$=R.bottom,z=R.left,q=R.right;t.pauseOnHover&&a.x>=z&&a.x<=q&&a.y>=w&&a.y<=$?E():h()}}function h(){o(!0)}function E(){o(!1)}function T(){window.addEventListener("focus",h),window.addEventListener("blur",E)}function x(){window.removeEventListener("focus",h),window.removeEventListener("blur",E)}function f(){document.addEventListener("mousemove",C),document.addEventListener("mouseup",S),document.addEventListener("touchmove",C),document.addEventListener("touchend",S)}function O(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",S),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",S)}function C(R){var w=l.current;a.canDrag&&(r&&E(),a.x=sn(R),a.deltaX=a.x-a.start,a.y=po(R),a.start!==a.x&&(a.canCloseOnClick=!1),w.style.transform="translateX("+a.deltaX+"px)",w.style.opacity=""+(1-Math.abs(a.deltaX/a.removalDistance)))}function S(){var R=l.current;if(a.canDrag){if(a.canDrag=!1,Math.abs(a.deltaX)>a.removalDistance){s(!0),t.closeToast();return}R.style.transition="transform 0.2s, opacity 0.2s",R.style.transform="translateX(0)",R.style.opacity="1"}}var V={onMouseDown:v,onTouchStart:v,onMouseUp:p,onTouchEnd:p};return c&&d&&(V.onMouseEnter=E,V.onMouseLeave=h),b&&(V.onClick=function(R){y&&y(R),a.canCloseOnClick&&g()}),{playToast:h,pauseToast:E,isRunning:r,preventExitTransition:i,toastRef:l,eventHandlers:V}}function Wn(t){var e=t.closeToast,r=t.type,o=t.ariaLabel,n=o===void 0?"close":o;return m.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+r,type:"button",onClick:function(s){s.stopPropagation(),e(s)},"aria-label":n},m.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},m.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Gn(t){var e,r,o=t.delay,n=t.isRunning,i=t.closeToast,s=t.type,l=t.hide,a=t.className,u=t.style,c=t.controlledProgress,d=t.progress,g=t.rtl,y=t.isIn,b=Se({},u,{animationDuration:o+"ms",animationPlayState:n?"running":"paused",opacity:l?0:1});c&&(b.transform="scaleX("+d+")");var v=["Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+s,(e={},e["Toastify__progress-bar--rtl"]=g,e)],p=K(a)?a({rtl:g,type:s,defaultClassName:ye.apply(void 0,v)}):ye.apply(void 0,[].concat(v,[a])),h=(r={},r[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]=c&&d<1?null:function(){y&&i()},r);return m.createElement("div",Object.assign({className:p,style:b},h))}Gn.defaultProps={type:ve.DEFAULT,hide:!1};var ho=function(e){var r,o=mo(e),n=o.isRunning,i=o.preventExitTransition,s=o.toastRef,l=o.eventHandlers,a=e.closeButton,u=e.children,c=e.autoClose,d=e.onClick,g=e.type,y=e.hideProgressBar,b=e.closeToast,v=e.transition,p=e.position,h=e.className,E=e.style,T=e.bodyClassName,x=e.bodyStyle,f=e.progressClassName,O=e.progressStyle,C=e.updateId,S=e.role,V=e.progress,R=e.rtl,w=e.toastId,$=e.deleteToast,z=["Toastify__toast","Toastify__toast--"+g,(r={},r["Toastify__toast--rtl"]=R,r)],q=K(h)?h({rtl:R,position:p,type:g,defaultClassName:ye.apply(void 0,z)}):ye.apply(void 0,[].concat(z,[h])),k=!!V;function N(A){if(A){var G={closeToast:b,type:g};if(K(A))return A(G);if(m.isValidElement(A))return m.cloneElement(A,G)}}return m.createElement(v,{in:e.in,appear:!0,done:$,position:p,preventExitTransition:i,nodeRef:s},m.createElement("div",Object.assign({id:w,onClick:d,className:q||void 0},l,{style:E,ref:s}),m.createElement("div",Object.assign({},e.in&&{role:S},{className:K(T)?T({type:g}):ye("Toastify__toast-body",T),style:x}),u),N(a),(c||k)&&m.createElement(Gn,Object.assign({},C&&!k?{key:"pb-"+C}:{},{rtl:R,delay:c,isRunning:n,isIn:e.in,closeToast:b,hide:y,type:g,style:O,className:f,controlledProgress:k,progress:V}))))},vo=uo({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),go=function(e){var r=e.children,o=e.className,n=e.style,i=Ut(e,["children","className","style"]);return delete i.in,m.createElement("div",{className:o,style:n},m.Children.map(r,function(s){return m.cloneElement(s,i)}))},zt=function(e){var r=fo(e),o=r.getToastToRender,n=r.containerRef,i=r.isToastActive,s=e.className,l=e.style,a=e.rtl,u=e.containerId;return m.createElement("div",{ref:n,className:"Toastify",id:u},o(function(c,d){var g,y,b={className:K(s)?s({position:c,rtl:a,defaultClassName:ye("Toastify__toast-container","Toastify__toast-container--"+c,(g={},g["Toastify__toast-container--rtl"]=a,g))}):ye("Toastify__toast-container","Toastify__toast-container--"+c,(y={},y["Toastify__toast-container--rtl"]=a,y),et(s)),style:d.length===0?Se({},l,{pointerEvents:"none"}):Se({},l)};return m.createElement(go,Object.assign({},b,{key:"container-"+c}),d.map(function(v){var p=v.content,h=v.props;return m.createElement(ho,Object.assign({},h,{in:i(h.toastId),key:"toast-"+h.key,closeButton:h.closeButton===!0?Wn:h.closeButton}),p)}))}))};zt.defaultProps={position:zn.TOP_RIGHT,transition:vo,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:Wn,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,role:"alert"};var Ie=new Map,Vt,Ne,Xn,Lt=[],Dt=!1;function pt(){return Ie.size>0}function bo(t){return pt()?Ie.get(t||Vt):null}function yo(t,e){var r=e.containerId,o=bo(r);return o?o.getToast(t):null}function qn(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function So(t){return t&&(Ae(t.toastId)||$e(t.toastId))?t.toastId:qn()}function xe(t,e){return pt()?te.emit(0,t,e):(Lt.push({content:t,options:e}),Dt&&Un&&(Dt=!1,Ne=document.createElement("div"),document.body.appendChild(Ne),An.render(m.createElement(zt,Object.assign({},Xn)),Ne))),e.toastId}function Pe(t,e){return Se({},e,{type:e&&e.type||t,toastId:So(e)})}var W=function(e,r){return xe(e,Pe(ve.DEFAULT,r))};W.success=function(t,e){return xe(t,Pe(ve.SUCCESS,e))};W.info=function(t,e){return xe(t,Pe(ve.INFO,e))};W.error=function(t,e){return xe(t,Pe(ve.ERROR,e))};W.warning=function(t,e){return xe(t,Pe(ve.WARNING,e))};W.dark=function(t,e){return xe(t,Pe(ve.DARK,e))};W.warn=W.warning;W.dismiss=function(t){return pt()&&te.emit(1,t)};W.clearWaitingQueue=function(t){return t===void 0&&(t={}),pt()&&te.emit(5,t)};W.isActive=function(t){var e=!1;return Ie.forEach(function(r){r.isToastActive&&r.isToastActive(t)&&(e=!0)}),e};W.update=function(t,e){e===void 0&&(e={}),setTimeout(function(){var r=yo(t,e);if(r){var o=r.props,n=r.content,i=Se({},o,e,{toastId:e.toastId||t,updateId:qn()});i.toastId!==t&&(i.staleId=t);var s=typeof i.render<"u"?i.render:n;delete i.render,xe(s,i)}},0)};W.done=function(t){W.update(t,{progress:1})};W.onChange=function(t){return K(t)&&te.on(4,t),function(){K(t)&&te.off(4,t)}};W.configure=function(t){t===void 0&&(t={}),Dt=!0,Xn=t};W.POSITION=zn;W.TYPE=ve;te.on(2,function(t){Vt=t.containerId||t,Ie.set(Vt,t),Lt.forEach(function(e){te.emit(0,e.content,e.options)}),Lt=[]}).on(3,function(t){Ie.delete(t.containerId||t),Ie.size===0&&te.off(0).off(1).off(5),Un&&Ne&&document.body.removeChild(Ne)});function Yn(){return I.jsx(xo,{children:I.jsx(zt,{autoClose:3e3,hideProgressBar:!0,position:"bottom-center"})})}function _e(t="No message specified"){W.dark(t)}const xo=Bt.div`
  .Toastify__toast-container {
    z-index: 9999;
    -webkit-transform: translate3d(0, 0, 9999px);
    position: fixed;
    padding: 4px;
    width: 320px;
    box-sizing: border-box;
    color: #fff;
  }
  .Toastify__toast-container--top-left {
    top: 1em;
    left: 1em;
  }
  .Toastify__toast-container--top-center {
    top: 1em;
    left: 50%;
    transform: translateX(-50%);
  }
  .Toastify__toast-container--top-right {
    top: 1em;
    right: 1em;
  }
  .Toastify__toast-container--bottom-left {
    bottom: 1em;
    left: 1em;
  }
  .Toastify__toast-container--bottom-center {
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
  }
  .Toastify__toast-container--bottom-right {
    bottom: 1em;
    right: 1em;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast-container {
      width: 100vw;
      padding: 0;
      left: 0;
      margin: 0;
    }
    .Toastify__toast-container--top-left,
    .Toastify__toast-container--top-center,
    .Toastify__toast-container--top-right {
      top: 0;
      transform: translateX(0);
    }
    .Toastify__toast-container--bottom-left,
    .Toastify__toast-container--bottom-center,
    .Toastify__toast-container--bottom-right {
      bottom: 0;
      transform: translateX(0);
    }
    .Toastify__toast-container--rtl {
      right: 0;
      left: initial;
    }
  }
  .Toastify__toast {
    position: relative;
    min-height: 64px;
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding: 8px;
    border-radius: 1px;
    box-shadow:
      0 1px 10px 0 rgba(0, 0, 0, 0.1),
      0 2px 15px 0 rgba(0, 0, 0, 0.05);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-height: 800px;
    overflow: hidden;
    font-family: sans-serif;
    cursor: pointer;
    direction: ltr;
  }
  .Toastify__toast--rtl {
    direction: rtl;
  }
  .Toastify__toast--dark {
    background: #121212;
    color: #fff;
  }
  .Toastify__toast--default {
    background: #fff;
    color: #aaa;
  }
  .Toastify__toast--info {
    background: #3498db;
  }
  .Toastify__toast--success {
    background: #07bc0c;
  }
  .Toastify__toast--warning {
    background: #f1c40f;
  }
  .Toastify__toast--error {
    background: #e74c3c;
  }
  .Toastify__toast-body {
    margin: auto 0;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast {
      margin-bottom: 0;
    }
  }
  .Toastify__close-button {
    color: #fff;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s ease;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .Toastify__close-button--default {
    color: #000;
    opacity: 0.3;
  }
  .Toastify__close-button > svg {
    fill: currentColor;
    height: 16px;
    width: 14px;
  }
  .Toastify__close-button:hover,
  .Toastify__close-button:focus {
    opacity: 1;
  }

  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
  .Toastify__progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    z-index: 9999;
    opacity: 0.7;
    background-color: rgba(255, 255, 255, 0.7);
    transform-origin: left;
  }
  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards;
  }
  .Toastify__progress-bar--controlled {
    transition: transform 0.2s;
  }
  .Toastify__progress-bar--rtl {
    right: 0;
    left: initial;
    transform-origin: right;
  }
  .Toastify__progress-bar--default {
    background: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  }
  .Toastify__progress-bar--dark {
    background: #bb86fc;
  }
  @keyframes Toastify__bounceInRight {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: none;
    }
  }
  @keyframes Toastify__bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  @keyframes Toastify__bounceInLeft {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: none;
    }
  }
  @keyframes Toastify__bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  @keyframes Toastify__bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  @keyframes Toastify__bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: none;
    }
  }
  @keyframes Toastify__bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  .Toastify__bounce-enter--top-left,
  .Toastify__bounce-enter--bottom-left {
    animation-name: Toastify__bounceInLeft;
  }
  .Toastify__bounce-enter--top-right,
  .Toastify__bounce-enter--bottom-right {
    animation-name: Toastify__bounceInRight;
  }
  .Toastify__bounce-enter--top-center {
    animation-name: Toastify__bounceInDown;
  }
  .Toastify__bounce-enter--bottom-center {
    animation-name: Toastify__bounceInUp;
  }

  .Toastify__bounce-exit--top-left,
  .Toastify__bounce-exit--bottom-left {
    animation-name: Toastify__bounceOutLeft;
  }
  .Toastify__bounce-exit--top-right,
  .Toastify__bounce-exit--bottom-right {
    animation-name: Toastify__bounceOutRight;
  }
  .Toastify__bounce-exit--top-center {
    animation-name: Toastify__bounceOutUp;
  }
  .Toastify__bounce-exit--bottom-center {
    animation-name: Toastify__bounceOutDown;
  }

  @keyframes Toastify__zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes Toastify__zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  }
  .Toastify__zoom-enter {
    animation-name: Toastify__zoomIn;
  }

  .Toastify__zoom-exit {
    animation-name: Toastify__zoomOut;
  }

  @keyframes Toastify__flipIn {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
  @keyframes Toastify__flipOut {
    from {
      transform: perspective(400px);
    }
    30% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }
    to {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }
  .Toastify__flip-enter {
    animation-name: Toastify__flipIn;
  }

  .Toastify__flip-exit {
    animation-name: Toastify__flipOut;
  }

  @keyframes Toastify__slideInRight {
    from {
      transform: translate3d(110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideInLeft {
    from {
      transform: translate3d(-110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideInUp {
    from {
      transform: translate3d(0, 110%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideInDown {
    from {
      transform: translate3d(0, -110%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes Toastify__slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(110%, 0, 0);
    }
  }
  @keyframes Toastify__slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-110%, 0, 0);
    }
  }
  @keyframes Toastify__slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 500px, 0);
    }
  }
  @keyframes Toastify__slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -500px, 0);
    }
  }
  .Toastify__slide-enter--top-left,
  .Toastify__slide-enter--bottom-left {
    animation-name: Toastify__slideInLeft;
  }
  .Toastify__slide-enter--top-right,
  .Toastify__slide-enter--bottom-right {
    animation-name: Toastify__slideInRight;
  }
  .Toastify__slide-enter--top-center {
    animation-name: Toastify__slideInDown;
  }
  .Toastify__slide-enter--bottom-center {
    animation-name: Toastify__slideInUp;
  }

  .Toastify__slide-exit--top-left,
  .Toastify__slide-exit--bottom-left {
    animation-name: Toastify__slideOutLeft;
  }
  .Toastify__slide-exit--top-right,
  .Toastify__slide-exit--bottom-right {
    animation-name: Toastify__slideOutRight;
  }
  .Toastify__slide-exit--top-center {
    animation-name: Toastify__slideOutUp;
  }
  .Toastify__slide-exit--bottom-center {
    animation-name: Toastify__slideOutDown;
  }

  /*# sourceMappingURL=ReactToastify.css.map */
`;Yn.__docgenInfo={description:"",methods:[],displayName:"Toast"};var Co=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function To(t){var e=t.defaultInputValue,r=e===void 0?"":e,o=t.defaultMenuIsOpen,n=o===void 0?!1:o,i=t.defaultValue,s=i===void 0?null:i,l=t.inputValue,a=t.menuIsOpen,u=t.onChange,c=t.onInputChange,d=t.onMenuClose,g=t.onMenuOpen,y=t.value,b=ue(t,Co),v=m.useState(l!==void 0?l:r),p=se(v,2),h=p[0],E=p[1],T=m.useState(a!==void 0?a:n),x=se(T,2),f=x[0],O=x[1],C=m.useState(y!==void 0?y:s),S=se(C,2),V=S[0],R=S[1],w=m.useCallback(function(G,de){typeof u=="function"&&u(G,de),R(G)},[u]),$=m.useCallback(function(G,de){var fe;typeof c=="function"&&(fe=c(G,de)),E(fe!==void 0?fe:G)},[c]),z=m.useCallback(function(){typeof g=="function"&&g(),O(!0)},[g]),q=m.useCallback(function(){typeof d=="function"&&d(),O(!1)},[d]),k=l!==void 0?l:h,N=a!==void 0?a:f,A=y!==void 0?y:V;return M(M({},b),{},{inputValue:k,menuIsOpen:N,onChange:w,onInputChange:$,onMenuClose:q,onMenuOpen:z,value:A})}function Oo(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Eo(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Io=(function(){function t(r){var o=this;this._insertTag=function(n){var i;o.tags.length===0?o.insertionPoint?i=o.insertionPoint.nextSibling:o.prepend?i=o.container.firstChild:i=o.before:i=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(n,i),o.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(o){o.forEach(this._insertTag)},e.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Eo(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Oo(n);try{i.insertRule(o,i.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(o));this.ctr++},e.flush=function(){this.tags.forEach(function(o){var n;return(n=o.parentNode)==null?void 0:n.removeChild(o)}),this.tags=[],this.ctr=0},t})(),Y="-ms-",it="-moz-",L="-webkit-",Kn="comm",Wt="rule",Gt="decl",wo="@import",Qn="@keyframes",_o="@layer",Mo=Math.abs,mt=String.fromCharCode,Po=Object.assign;function Ro(t,e){return X(t,0)^45?(((e<<2^X(t,0))<<2^X(t,1))<<2^X(t,2))<<2^X(t,3):0}function Jn(t){return t.trim()}function Vo(t,e){return(t=e.exec(t))?t[0]:t}function D(t,e,r){return t.replace(e,r)}function Ft(t,e){return t.indexOf(e)}function X(t,e){return t.charCodeAt(e)|0}function je(t,e,r){return t.slice(e,r)}function ne(t){return t.length}function Xt(t){return t.length}function Ye(t,e){return e.push(t),t}function Lo(t,e){return t.map(e).join("")}var ht=1,Me=1,Zn=0,Q=0,H=0,Re="";function vt(t,e,r,o,n,i,s){return{value:t,root:e,parent:r,type:o,props:n,children:i,line:ht,column:Me,length:s,return:""}}function Le(t,e){return Po(vt("",null,null,"",null,null,0),t,{length:-t.length},e)}function Do(){return H}function Fo(){return H=Q>0?X(Re,--Q):0,Me--,H===10&&(Me=1,ht--),H}function Z(){return H=Q<Zn?X(Re,Q++):0,Me++,H===10&&(Me=1,ht++),H}function oe(){return X(Re,Q)}function tt(){return Q}function ze(t,e){return je(Re,t,e)}function He(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function er(t){return ht=Me=1,Zn=ne(Re=t),Q=0,[]}function tr(t){return Re="",t}function nt(t){return Jn(ze(Q-1,kt(t===91?t+2:t===40?t+1:t)))}function ko(t){for(;(H=oe())&&H<33;)Z();return He(t)>2||He(H)>3?"":" "}function No(t,e){for(;--e&&Z()&&!(H<48||H>102||H>57&&H<65||H>70&&H<97););return ze(t,tt()+(e<6&&oe()==32&&Z()==32))}function kt(t){for(;Z();)switch(H){case t:return Q;case 34:case 39:t!==34&&t!==39&&kt(H);break;case 40:t===41&&kt(t);break;case 92:Z();break}return Q}function $o(t,e){for(;Z()&&t+H!==57;)if(t+H===84&&oe()===47)break;return"/*"+ze(e,Q-1)+"*"+mt(t===47?t:Z())}function Ao(t){for(;!He(oe());)Z();return ze(t,Q)}function jo(t){return tr(rt("",null,null,null,[""],t=er(t),0,[0],t))}function rt(t,e,r,o,n,i,s,l,a){for(var u=0,c=0,d=s,g=0,y=0,b=0,v=1,p=1,h=1,E=0,T="",x=n,f=i,O=o,C=T;p;)switch(b=E,E=Z()){case 40:if(b!=108&&X(C,d-1)==58){Ft(C+=D(nt(E),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:C+=nt(E);break;case 9:case 10:case 13:case 32:C+=ko(b);break;case 92:C+=No(tt()-1,7);continue;case 47:switch(oe()){case 42:case 47:Ye(Ho($o(Z(),tt()),e,r),a);break;default:C+="/"}break;case 123*v:l[u++]=ne(C)*h;case 125*v:case 59:case 0:switch(E){case 0:case 125:p=0;case 59+c:h==-1&&(C=D(C,/\f/g,"")),y>0&&ne(C)-d&&Ye(y>32?un(C+";",o,r,d-1):un(D(C," ","")+";",o,r,d-2),a);break;case 59:C+=";";default:if(Ye(O=ln(C,e,r,u,c,n,l,T,x=[],f=[],d),i),E===123)if(c===0)rt(C,e,O,O,x,i,d,l,f);else switch(g===99&&X(C,3)===110?100:g){case 100:case 108:case 109:case 115:rt(t,O,O,o&&Ye(ln(t,O,O,0,0,n,l,T,n,x=[],d),f),n,f,d,l,o?x:f);break;default:rt(C,O,O,O,[""],f,0,l,f)}}u=c=y=0,v=h=1,T=C="",d=s;break;case 58:d=1+ne(C),y=b;default:if(v<1){if(E==123)--v;else if(E==125&&v++==0&&Fo()==125)continue}switch(C+=mt(E),E*v){case 38:h=c>0?1:(C+="\f",-1);break;case 44:l[u++]=(ne(C)-1)*h,h=1;break;case 64:oe()===45&&(C+=nt(Z())),g=oe(),c=d=ne(T=C+=Ao(tt())),E++;break;case 45:b===45&&ne(C)==2&&(v=0)}}return i}function ln(t,e,r,o,n,i,s,l,a,u,c){for(var d=n-1,g=n===0?i:[""],y=Xt(g),b=0,v=0,p=0;b<o;++b)for(var h=0,E=je(t,d+1,d=Mo(v=s[b])),T=t;h<y;++h)(T=Jn(v>0?g[h]+" "+E:D(E,/&\f/g,g[h])))&&(a[p++]=T);return vt(t,e,r,n===0?Wt:l,a,u,c)}function Ho(t,e,r){return vt(t,e,r,Kn,mt(Do()),je(t,2,-2),0)}function un(t,e,r,o){return vt(t,e,r,Gt,je(t,0,o),je(t,o+1,-1),o)}function we(t,e){for(var r="",o=Xt(t),n=0;n<o;n++)r+=e(t[n],n,t,e)||"";return r}function Bo(t,e,r,o){switch(t.type){case _o:if(t.children.length)break;case wo:case Gt:return t.return=t.return||t.value;case Kn:return"";case Qn:return t.return=t.value+"{"+we(t.children,o)+"}";case Wt:t.value=t.props.join(",")}return ne(r=we(t.children,o))?t.return=t.value+"{"+r+"}":""}function Uo(t){var e=Xt(t);return function(r,o,n,i){for(var s="",l=0;l<e;l++)s+=t[l](r,o,n,i)||"";return s}}function zo(t){return function(e){e.root||(e=e.return)&&t(e)}}var Wo=function(e,r,o){for(var n=0,i=0;n=i,i=oe(),n===38&&i===12&&(r[o]=1),!He(i);)Z();return ze(e,Q)},Go=function(e,r){var o=-1,n=44;do switch(He(n)){case 0:n===38&&oe()===12&&(r[o]=1),e[o]+=Wo(Q-1,r,o);break;case 2:e[o]+=nt(n);break;case 4:if(n===44){e[++o]=oe()===58?"&\f":"",r[o]=e[o].length;break}default:e[o]+=mt(n)}while(n=Z());return e},Xo=function(e,r){return tr(Go(er(e),r))},cn=new WeakMap,qo=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,o=e.parent,n=e.column===o.column&&e.line===o.line;o.type!=="rule";)if(o=o.parent,!o)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!cn.get(o))&&!n){cn.set(e,!0);for(var i=[],s=Xo(r,i),l=o.props,a=0,u=0;a<s.length;a++)for(var c=0;c<l.length;c++,u++)e.props[u]=i[a]?s[a].replace(/&\f/g,l[c]):l[c]+" "+s[a]}}},Yo=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function nr(t,e){switch(Ro(t,e)){case 5103:return L+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return L+t+it+t+Y+t+t;case 6828:case 4268:return L+t+Y+t+t;case 6165:return L+t+Y+"flex-"+t+t;case 5187:return L+t+D(t,/(\w+).+(:[^]+)/,L+"box-$1$2"+Y+"flex-$1$2")+t;case 5443:return L+t+Y+"flex-item-"+D(t,/flex-|-self/,"")+t;case 4675:return L+t+Y+"flex-line-pack"+D(t,/align-content|flex-|-self/,"")+t;case 5548:return L+t+Y+D(t,"shrink","negative")+t;case 5292:return L+t+Y+D(t,"basis","preferred-size")+t;case 6060:return L+"box-"+D(t,"-grow","")+L+t+Y+D(t,"grow","positive")+t;case 4554:return L+D(t,/([^-])(transform)/g,"$1"+L+"$2")+t;case 6187:return D(D(D(t,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),t,"")+t;case 5495:case 3959:return D(t,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return D(D(t,/(.+:)(flex-)?(.*)/,L+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+t+t;case 4095:case 3583:case 4068:case 2532:return D(t,/(.+)-inline(.+)/,L+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ne(t)-1-e>6)switch(X(t,e+1)){case 109:if(X(t,e+4)!==45)break;case 102:return D(t,/(.+:)(.+)-([^]+)/,"$1"+L+"$2-$3$1"+it+(X(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ft(t,"stretch")?nr(D(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(X(t,e+1)!==115)break;case 6444:switch(X(t,ne(t)-3-(~Ft(t,"!important")&&10))){case 107:return D(t,":",":"+L)+t;case 101:return D(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+L+(X(t,14)===45?"inline-":"")+"box$3$1"+L+"$2$3$1"+Y+"$2box$3")+t}break;case 5936:switch(X(t,e+11)){case 114:return L+t+Y+D(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return L+t+Y+D(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return L+t+Y+D(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return L+t+Y+t+t}return t}var Ko=function(e,r,o,n){if(e.length>-1&&!e.return)switch(e.type){case Gt:e.return=nr(e.value,e.length);break;case Qn:return we([Le(e,{value:D(e.value,"@","@"+L)})],n);case Wt:if(e.length)return Lo(e.props,function(i){switch(Vo(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return we([Le(e,{props:[D(i,/:(read-\w+)/,":"+it+"$1")]})],n);case"::placeholder":return we([Le(e,{props:[D(i,/:(plac\w+)/,":"+L+"input-$1")]}),Le(e,{props:[D(i,/:(plac\w+)/,":"+it+"$1")]}),Le(e,{props:[D(i,/:(plac\w+)/,Y+"input-$1")]})],n)}return""})}},Qo=[Ko],Jo=function(e){var r=e.key;if(r==="css"){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(v){var p=v.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var n=e.stylisPlugins||Qo,i={},s,l=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(v){for(var p=v.getAttribute("data-emotion").split(" "),h=1;h<p.length;h++)i[p[h]]=!0;l.push(v)});var a,u=[qo,Yo];{var c,d=[Bo,zo(function(v){c.insert(v)})],g=Uo(u.concat(n,d)),y=function(p){return we(jo(p),g)};a=function(p,h,E,T){c=E,y(p?p+"{"+h.styles+"}":h.styles),T&&(b.inserted[h.name]=!0)}}var b={key:r,sheet:new Io({key:r,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:a};return b.sheet.hydrate(l),b},St={exports:{}},F={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dn;function Zo(){if(dn)return F;dn=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,n=t?Symbol.for("react.strict_mode"):60108,i=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,a=t?Symbol.for("react.async_mode"):60111,u=t?Symbol.for("react.concurrent_mode"):60111,c=t?Symbol.for("react.forward_ref"):60112,d=t?Symbol.for("react.suspense"):60113,g=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,v=t?Symbol.for("react.block"):60121,p=t?Symbol.for("react.fundamental"):60117,h=t?Symbol.for("react.responder"):60118,E=t?Symbol.for("react.scope"):60119;function T(f){if(typeof f=="object"&&f!==null){var O=f.$$typeof;switch(O){case e:switch(f=f.type,f){case a:case u:case o:case i:case n:case d:return f;default:switch(f=f&&f.$$typeof,f){case l:case c:case b:case y:case s:return f;default:return O}}case r:return O}}}function x(f){return T(f)===u}return F.AsyncMode=a,F.ConcurrentMode=u,F.ContextConsumer=l,F.ContextProvider=s,F.Element=e,F.ForwardRef=c,F.Fragment=o,F.Lazy=b,F.Memo=y,F.Portal=r,F.Profiler=i,F.StrictMode=n,F.Suspense=d,F.isAsyncMode=function(f){return x(f)||T(f)===a},F.isConcurrentMode=x,F.isContextConsumer=function(f){return T(f)===l},F.isContextProvider=function(f){return T(f)===s},F.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===e},F.isForwardRef=function(f){return T(f)===c},F.isFragment=function(f){return T(f)===o},F.isLazy=function(f){return T(f)===b},F.isMemo=function(f){return T(f)===y},F.isPortal=function(f){return T(f)===r},F.isProfiler=function(f){return T(f)===i},F.isStrictMode=function(f){return T(f)===n},F.isSuspense=function(f){return T(f)===d},F.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===o||f===u||f===i||f===n||f===d||f===g||typeof f=="object"&&f!==null&&(f.$$typeof===b||f.$$typeof===y||f.$$typeof===s||f.$$typeof===l||f.$$typeof===c||f.$$typeof===p||f.$$typeof===h||f.$$typeof===E||f.$$typeof===v)},F.typeOf=T,F}var fn;function ei(){return fn||(fn=1,St.exports=Zo()),St.exports}var xt,pn;function ti(){if(pn)return xt;pn=1;var t=ei(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[t.ForwardRef]=o,i[t.Memo]=n;function s(b){return t.isMemo(b)?n:i[b.$$typeof]||e}var l=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,g=Object.prototype;function y(b,v,p){if(typeof v!="string"){if(g){var h=d(v);h&&h!==g&&y(b,h,p)}var E=a(v);u&&(E=E.concat(u(v)));for(var T=s(b),x=s(v),f=0;f<E.length;++f){var O=E[f];if(!r[O]&&!(p&&p[O])&&!(x&&x[O])&&!(T&&T[O])){var C=c(v,O);try{l(b,O,C)}catch{}}}}return b}return xt=y,xt}ti();var ni=!0;function ri(t,e,r){var o="";return r.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):n&&(o+=n+" ")}),o}var rr=function(e,r,o){var n=e.key+"-"+r.name;(o===!1||ni===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},oi=function(e,r,o){rr(e,r,o);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var i=r;do e.insert(r===i?"."+n:"",i,e.sheet,!0),i=i.next;while(i!==void 0)}};function ii(t){for(var e=0,r,o=0,n=t.length;n>=4;++o,n-=4)r=t.charCodeAt(o)&255|(t.charCodeAt(++o)&255)<<8|(t.charCodeAt(++o)&255)<<16|(t.charCodeAt(++o)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(o+2)&255)<<16;case 2:e^=(t.charCodeAt(o+1)&255)<<8;case 1:e^=t.charCodeAt(o)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var ai={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},si=/[A-Z]|^ms/g,li=/_EMO_([^_]+?)_([^]*?)_EMO_/g,or=function(e){return e.charCodeAt(1)===45},mn=function(e){return e!=null&&typeof e!="boolean"},Ct=oo(function(t){return or(t)?t:t.replace(si,"-$&").toLowerCase()}),hn=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(li,function(o,n,i){return re={name:n,styles:i,next:re},n})}return ai[e]!==1&&!or(e)&&typeof r=="number"&&r!==0?r+"px":r};function Be(t,e,r){if(r==null)return"";var o=r;if(o.__emotion_styles!==void 0)return o;switch(typeof r){case"boolean":return"";case"object":{var n=r;if(n.anim===1)return re={name:n.name,styles:n.styles,next:re},n.name;var i=r;if(i.styles!==void 0){var s=i.next;if(s!==void 0)for(;s!==void 0;)re={name:s.name,styles:s.styles,next:re},s=s.next;var l=i.styles+";";return l}return ui(t,e,r)}case"function":{if(t!==void 0){var a=re,u=r(t);return re=a,Be(t,e,u)}break}}var c=r;return c}function ui(t,e,r){var o="";if(Array.isArray(r))for(var n=0;n<r.length;n++)o+=Be(t,e,r[n])+";";else for(var i in r){var s=r[i];if(typeof s!="object"){var l=s;mn(l)&&(o+=Ct(i)+":"+hn(i,l)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&e==null)for(var a=0;a<s.length;a++)mn(s[a])&&(o+=Ct(i)+":"+hn(i,s[a])+";");else{var u=Be(t,e,s);switch(i){case"animation":case"animationName":{o+=Ct(i)+":"+u+";";break}default:o+=i+"{"+u+"}"}}}return o}var vn=/label:\s*([^\s;{]+)\s*(;|$)/g,re;function ir(t,e,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,n="";re=void 0;var i=t[0];if(i==null||i.raw===void 0)o=!1,n+=Be(r,e,i);else{var s=i;n+=s[0]}for(var l=1;l<t.length;l++)if(n+=Be(r,e,t[l]),o){var a=i;n+=a[l]}vn.lastIndex=0;for(var u="",c;(c=vn.exec(n))!==null;)u+="-"+c[1];var d=ii(n)+u;return{name:d,styles:n,next:re}}var ci=function(e){return e()},di=on.useInsertionEffect?on.useInsertionEffect:!1,fi=di||ci,ar=m.createContext(typeof HTMLElement<"u"?Jo({key:"css"}):null);ar.Provider;var pi=function(e){return m.forwardRef(function(r,o){var n=m.useContext(ar);return e(r,n,o)})},mi=m.createContext({}),qt={}.hasOwnProperty,Nt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",hi=function(e,r){var o={};for(var n in r)qt.call(r,n)&&(o[n]=r[n]);return o[Nt]=e,o},vi=function(e){var r=e.cache,o=e.serialized,n=e.isStringTag;return rr(r,o,n),fi(function(){return oi(r,o,n)}),null},gi=pi(function(t,e,r){var o=t.css;typeof o=="string"&&e.registered[o]!==void 0&&(o=e.registered[o]);var n=t[Nt],i=[o],s="";typeof t.className=="string"?s=ri(e.registered,i,t.className):t.className!=null&&(s=t.className+" ");var l=ir(i,void 0,m.useContext(mi));s+=e.key+"-"+l.name;var a={};for(var u in t)qt.call(t,u)&&u!=="css"&&u!==Nt&&(a[u]=t[u]);return a.className=s,r&&(a.ref=r),m.createElement(m.Fragment,null,m.createElement(vi,{cache:e,serialized:l,isStringTag:typeof n=="string"}),m.createElement(n,a))}),bi=gi,_=function(e,r){var o=arguments;if(r==null||!qt.call(r,"css"))return m.createElement.apply(void 0,o);var n=o.length,i=new Array(n);i[0]=bi,i[1]=hi(e,r);for(var s=2;s<n;s++)i[s]=o[s];return m.createElement.apply(null,i)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(_||(_={}));function Yt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return ir(e)}function yi(){var t=Yt.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function Si(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const xi=Math.min,Ci=Math.max,at=Math.round,Ke=Math.floor,st=t=>({x:t,y:t});function Ti(t){const{x:e,y:r,width:o,height:n}=t;return{width:o,height:n,top:r,left:e,right:e+o,bottom:r+n,x:e,y:r}}function gt(){return typeof window<"u"}function sr(t){return ur(t)?(t.nodeName||"").toLowerCase():"#document"}function le(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function lr(t){var e;return(e=(ur(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ur(t){return gt()?t instanceof Node||t instanceof le(t).Node:!1}function Oi(t){return gt()?t instanceof Element||t instanceof le(t).Element:!1}function Kt(t){return gt()?t instanceof HTMLElement||t instanceof le(t).HTMLElement:!1}function gn(t){return!gt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof le(t).ShadowRoot}function cr(t){const{overflow:e,overflowX:r,overflowY:o,display:n}=Qt(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&n!=="inline"&&n!=="contents"}let Tt;function Ei(){return Tt==null&&(Tt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Tt}function Ii(t){return/^(html|body|#document)$/.test(sr(t))}function Qt(t){return le(t).getComputedStyle(t)}function wi(t){if(sr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||gn(t)&&t.host||lr(t);return gn(e)?e.host:e}function dr(t){const e=wi(t);return Ii(e)?t.ownerDocument?t.ownerDocument.body:t.body:Kt(e)&&cr(e)?e:dr(e)}function lt(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const n=dr(t),i=n===((o=t.ownerDocument)==null?void 0:o.body),s=le(n);if(i){const l=$t(s);return e.concat(s,s.visualViewport||[],cr(n)?n:[],l&&r?lt(l):[])}else return e.concat(n,lt(n,[],r))}function $t(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _i(t){const e=Qt(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const n=Kt(t),i=n?t.offsetWidth:r,s=n?t.offsetHeight:o,l=at(r)!==i||at(o)!==s;return l&&(r=i,o=s),{width:r,height:o,$:l}}function Jt(t){return Oi(t)?t:t.contextElement}function bn(t){const e=Jt(t);if(!Kt(e))return st(1);const r=e.getBoundingClientRect(),{width:o,height:n,$:i}=_i(e);let s=(i?at(r.width):r.width)/o,l=(i?at(r.height):r.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Mi=st(0);function Pi(t){const e=le(t);return!Ei()||!e.visualViewport?Mi:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ri(t,e,r){return!1}function yn(t,e,r,o){e===void 0&&(e=!1);const n=t.getBoundingClientRect(),i=Jt(t);let s=st(1);e&&(s=bn(t));const l=Ri()?Pi(i):st(0);let a=(n.left+l.x)/s.x,u=(n.top+l.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(i){const g=le(i),y=o;let b=g,v=$t(b);for(;v&&o&&y!==b;){const p=bn(v),h=v.getBoundingClientRect(),E=Qt(v),T=h.left+(v.clientLeft+parseFloat(E.paddingLeft))*p.x,x=h.top+(v.clientTop+parseFloat(E.paddingTop))*p.y;a*=p.x,u*=p.y,c*=p.x,d*=p.y,a+=T,u+=x,b=le(v),v=$t(b)}}return Ti({width:c,height:d,x:a,y:u})}function fr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Vi(t,e){let r=null,o;const n=lr(t);function i(){var l;clearTimeout(o),(l=r)==null||l.disconnect(),r=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),i();const u=t.getBoundingClientRect(),{left:c,top:d,width:g,height:y}=u;if(l||e(),!g||!y)return;const b=Ke(d),v=Ke(n.clientWidth-(c+g)),p=Ke(n.clientHeight-(d+y)),h=Ke(c),T={rootMargin:-b+"px "+-v+"px "+-p+"px "+-h+"px",threshold:Ci(0,xi(1,a))||1};let x=!0;function f(O){const C=O[0].intersectionRatio;if(C!==a){if(!x)return s();C?s(!1,C):o=setTimeout(()=>{s(!1,1e-7)},1e3)}C===1&&!fr(u,t.getBoundingClientRect())&&s(),x=!1}try{r=new IntersectionObserver(f,{...T,root:n.ownerDocument})}catch{r=new IntersectionObserver(f,T)}r.observe(t)}return s(!0),i}function Li(t,e,r,o){o===void 0&&(o={});const{ancestorScroll:n=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,u=Jt(t),c=n||i?[...u?lt(u):[],...e?lt(e):[]]:[];c.forEach(h=>{n&&h.addEventListener("scroll",r,{passive:!0}),i&&h.addEventListener("resize",r)});const d=u&&l?Vi(u,r):null;let g=-1,y=null;s&&(y=new ResizeObserver(h=>{let[E]=h;E&&E.target===u&&y&&e&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var T;(T=y)==null||T.observe(e)})),r()}),u&&!a&&y.observe(u),e&&y.observe(e));let b,v=a?yn(t):null;a&&p();function p(){const h=yn(t);v&&!fr(v,h)&&r(),v=h,b=requestAnimationFrame(p)}return r(),()=>{var h;c.forEach(E=>{n&&E.removeEventListener("scroll",r),i&&E.removeEventListener("resize",r)}),d==null||d(),(h=y)==null||h.disconnect(),y=null,a&&cancelAnimationFrame(b)}}var At=m.useLayoutEffect,Di=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ut=function(){};function Fi(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function ki(t,e){for(var r=arguments.length,o=new Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];var i=[].concat(o);if(e&&t)for(var s in e)e.hasOwnProperty(s)&&e[s]&&i.push("".concat(Fi(t,s)));return i.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Sn=function(e){return Wi(e)?e.filter(Boolean):Kr(e)==="object"&&e!==null?[e]:[]},pr=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=ue(e,Di);return M({},r)},j=function(e,r,o){var n=e.cx,i=e.getStyles,s=e.getClassNames,l=e.className;return{css:i(r,e),className:n(o??{},s(r,e),l)}};function bt(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function Ni(t){return bt(t)?window.innerHeight:t.clientHeight}function mr(t){return bt(t)?window.pageYOffset:t.scrollTop}function ct(t,e){if(bt(t)){window.scrollTo(0,e);return}t.scrollTop=e}function $i(t){var e=getComputedStyle(t),r=e.position==="absolute",o=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(r&&e.position==="static")&&o.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function Ai(t,e,r,o){return r*((t=t/o-1)*t*t+1)+e}function Qe(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ut,n=mr(t),i=e-n,s=10,l=0;function a(){l+=s;var u=Ai(l,n,i,r);ct(t,u),l<r?window.requestAnimationFrame(a):o(t)}a()}function xn(t,e){var r=t.getBoundingClientRect(),o=e.getBoundingClientRect(),n=e.offsetHeight/3;o.bottom+n>r.bottom?ct(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):o.top-n<r.top&&ct(t,Math.max(e.offsetTop-n,0))}function ji(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Cn(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Hi(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var hr=!1,Bi={get passive(){return hr=!0}},Je=typeof window<"u"?window:{};Je.addEventListener&&Je.removeEventListener&&(Je.addEventListener("p",ut,Bi),Je.removeEventListener("p",ut,!1));var Ui=hr;function zi(t){return t!=null}function Wi(t){return Array.isArray(t)}function Ze(t,e,r){return t?e:r}var Gi=function(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];var i=Object.entries(e).filter(function(s){var l=se(s,1),a=l[0];return!o.includes(a)});return i.reduce(function(s,l){var a=se(l,2),u=a[0],c=a[1];return s[u]=c,s},{})},Xi=["children","innerProps"],qi=["children","innerProps"];function Yi(t){var e=t.maxHeight,r=t.menuEl,o=t.minHeight,n=t.placement,i=t.shouldScroll,s=t.isFixedPosition,l=t.controlHeight,a=$i(r),u={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return u;var c=a.getBoundingClientRect(),d=c.height,g=r.getBoundingClientRect(),y=g.bottom,b=g.height,v=g.top,p=r.offsetParent.getBoundingClientRect(),h=p.top,E=s?window.innerHeight:Ni(a),T=mr(a),x=parseInt(getComputedStyle(r).marginBottom,10),f=parseInt(getComputedStyle(r).marginTop,10),O=h-f,C=E-v,S=O+T,V=d-T-v,R=y-E+T+x,w=T+v-f,$=160;switch(n){case"auto":case"bottom":if(C>=b)return{placement:"bottom",maxHeight:e};if(V>=b&&!s)return i&&Qe(a,R,$),{placement:"bottom",maxHeight:e};if(!s&&V>=o||s&&C>=o){i&&Qe(a,R,$);var z=s?C-x:V-x;return{placement:"bottom",maxHeight:z}}if(n==="auto"||s){var q=e,k=s?O:S;return k>=o&&(q=Math.min(k-x-l,e)),{placement:"top",maxHeight:q}}if(n==="bottom")return i&&ct(a,R),{placement:"bottom",maxHeight:e};break;case"top":if(O>=b)return{placement:"top",maxHeight:e};if(S>=b&&!s)return i&&Qe(a,w,$),{placement:"top",maxHeight:e};if(!s&&S>=o||s&&O>=o){var N=e;return(!s&&S>=o||s&&O>=o)&&(N=s?O-f:S-f),i&&Qe(a,w,$),{placement:"top",maxHeight:N}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return u}function Ki(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var vr=function(e){return e==="auto"?"bottom":e},Qi=function(e,r){var o,n=e.placement,i=e.theme,s=i.borderRadius,l=i.spacing,a=i.colors;return M((o={label:"menu"},qe(o,Ki(n),"100%"),qe(o,"position","absolute"),qe(o,"width","100%"),qe(o,"zIndex",1),o),r?{}:{backgroundColor:a.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},gr=m.createContext(null),Ji=function(e){var r=e.children,o=e.minMenuHeight,n=e.maxMenuHeight,i=e.menuPlacement,s=e.menuPosition,l=e.menuShouldScrollIntoView,a=e.theme,u=m.useContext(gr)||{},c=u.setPortalPlacement,d=m.useRef(null),g=m.useState(n),y=se(g,2),b=y[0],v=y[1],p=m.useState(null),h=se(p,2),E=h[0],T=h[1],x=a.spacing.controlHeight;return At(function(){var f=d.current;if(f){var O=s==="fixed",C=l&&!O,S=Yi({maxHeight:n,menuEl:f,minHeight:o,placement:i,shouldScroll:C,isFixedPosition:O,controlHeight:x});v(S.maxHeight),T(S.placement),c==null||c(S.placement)}},[n,i,s,l,o,c,x]),r({ref:d,placerProps:M(M({},e),{},{placement:E||vr(i),maxHeight:b})})},Zi=function(e){var r=e.children,o=e.innerRef,n=e.innerProps;return _("div",P({},j(e,"menu",{menu:!0}),{ref:o},n),r)},ea=Zi,ta=function(e,r){var o=e.maxHeight,n=e.theme.spacing.baseUnit;return M({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:n,paddingTop:n})},na=function(e){var r=e.children,o=e.innerProps,n=e.innerRef,i=e.isMulti;return _("div",P({},j(e,"menuList",{"menu-list":!0,"menu-list--is-multi":i}),{ref:n},o),r)},br=function(e,r){var o=e.theme,n=o.spacing.baseUnit,i=o.colors;return M({textAlign:"center"},r?{}:{color:i.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},ra=br,oa=br,ia=function(e){var r=e.children,o=r===void 0?"No options":r,n=e.innerProps,i=ue(e,Xi);return _("div",P({},j(M(M({},i),{},{children:o,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),o)},aa=function(e){var r=e.children,o=r===void 0?"Loading...":r,n=e.innerProps,i=ue(e,qi);return _("div",P({},j(M(M({},i),{},{children:o,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),o)},sa=function(e){var r=e.rect,o=e.offset,n=e.position;return{left:r.left,position:n,top:o,width:r.width,zIndex:1}},la=function(e){var r=e.appendTo,o=e.children,n=e.controlElement,i=e.innerProps,s=e.menuPlacement,l=e.menuPosition,a=m.useRef(null),u=m.useRef(null),c=m.useState(vr(s)),d=se(c,2),g=d[0],y=d[1],b=m.useMemo(function(){return{setPortalPlacement:y}},[]),v=m.useState(null),p=se(v,2),h=p[0],E=p[1],T=m.useCallback(function(){if(n){var C=ji(n),S=l==="fixed"?0:window.pageYOffset,V=C[g]+S;(V!==(h==null?void 0:h.offset)||C.left!==(h==null?void 0:h.rect.left)||C.width!==(h==null?void 0:h.rect.width))&&E({offset:V,rect:C})}},[n,l,g,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);At(function(){T()},[T]);var x=m.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),n&&a.current&&(u.current=Li(n,a.current,T,{elementResize:"ResizeObserver"in window}))},[n,T]);At(function(){x()},[x]);var f=m.useCallback(function(C){a.current=C,x()},[x]);if(!r&&l!=="fixed"||!h)return null;var O=_("div",P({ref:f},j(M(M({},e),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),i),o);return _(gr.Provider,{value:b},r?An.createPortal(O,r):O)},ua=function(e){var r=e.isDisabled,o=e.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},ca=function(e){var r=e.children,o=e.innerProps,n=e.isDisabled,i=e.isRtl;return _("div",P({},j(e,"container",{"--is-disabled":n,"--is-rtl":i}),o),r)},da=function(e,r){var o=e.theme.spacing,n=e.isMulti,i=e.hasValue,s=e.selectProps.controlShouldRenderValue;return M({alignItems:"center",display:n&&i&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},fa=function(e){var r=e.children,o=e.innerProps,n=e.isMulti,i=e.hasValue;return _("div",P({},j(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":i}),o),r)},pa=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},ma=function(e){var r=e.children,o=e.innerProps;return _("div",P({},j(e,"indicatorsContainer",{indicators:!0}),o),r)},Tn,ha=["size"],va=["innerProps","isRtl","size"],ga={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},yr=function(e){var r=e.size,o=ue(e,ha);return _("svg",P({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:ga},o))},Zt=function(e){return _(yr,P({size:20},e),_("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Sr=function(e){return _(yr,P({size:20},e),_("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},xr=function(e,r){var o=e.isFocused,n=e.theme,i=n.spacing.baseUnit,s=n.colors;return M({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:o?s.neutral60:s.neutral20,padding:i*2,":hover":{color:o?s.neutral80:s.neutral40}})},ba=xr,ya=function(e){var r=e.children,o=e.innerProps;return _("div",P({},j(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),r||_(Sr,null))},Sa=xr,xa=function(e){var r=e.children,o=e.innerProps;return _("div",P({},j(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),r||_(Zt,null))},Ca=function(e,r){var o=e.isDisabled,n=e.theme,i=n.spacing.baseUnit,s=n.colors;return M({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:o?s.neutral10:s.neutral20,marginBottom:i*2,marginTop:i*2})},Ta=function(e){var r=e.innerProps;return _("span",P({},r,j(e,"indicatorSeparator",{"indicator-separator":!0})))},Oa=yi(Tn||(Tn=Si([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ea=function(e,r){var o=e.isFocused,n=e.size,i=e.theme,s=i.colors,l=i.spacing.baseUnit;return M({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},r?{}:{color:o?s.neutral60:s.neutral20,padding:l*2})},Ot=function(e){var r=e.delay,o=e.offset;return _("span",{css:Yt({animation:"".concat(Oa," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Ia=function(e){var r=e.innerProps,o=e.isRtl,n=e.size,i=n===void 0?4:n,s=ue(e,va);return _("div",P({},j(M(M({},s),{},{innerProps:r,isRtl:o,size:i}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),_(Ot,{delay:0,offset:o}),_(Ot,{delay:160,offset:!0}),_(Ot,{delay:320,offset:!o}))},wa=function(e,r){var o=e.isDisabled,n=e.isFocused,i=e.theme,s=i.colors,l=i.borderRadius,a=i.spacing;return M({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:o?s.neutral5:s.neutral0,borderColor:o?s.neutral10:n?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},_a=function(e){var r=e.children,o=e.isDisabled,n=e.isFocused,i=e.innerRef,s=e.innerProps,l=e.menuIsOpen;return _("div",P({ref:i},j(e,"control",{control:!0,"control--is-disabled":o,"control--is-focused":n,"control--menu-is-open":l}),s,{"aria-disabled":o||void 0}),r)},Ma=_a,Pa=["data"],Ra=function(e,r){var o=e.theme.spacing;return r?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Va=function(e){var r=e.children,o=e.cx,n=e.getStyles,i=e.getClassNames,s=e.Heading,l=e.headingProps,a=e.innerProps,u=e.label,c=e.theme,d=e.selectProps;return _("div",P({},j(e,"group",{group:!0}),a),_(s,P({},l,{selectProps:d,theme:c,getStyles:n,getClassNames:i,cx:o}),u),_("div",null,r))},La=function(e,r){var o=e.theme,n=o.colors,i=o.spacing;return M({label:"group",cursor:"default",display:"block"},r?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:i.baseUnit*3,paddingRight:i.baseUnit*3,textTransform:"uppercase"})},Da=function(e){var r=pr(e);r.data;var o=ue(r,Pa);return _("div",P({},j(e,"groupHeading",{"group-heading":!0}),o))},Fa=Va,ka=["innerRef","isDisabled","isHidden","inputClassName"],Na=function(e,r){var o=e.isDisabled,n=e.value,i=e.theme,s=i.spacing,l=i.colors;return M(M({visibility:o?"hidden":"visible",transform:n?"translateZ(0)":""},$a),r?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},Cr={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},$a={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":M({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Cr)},Aa=function(e){return M({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Cr)},ja=function(e){var r=e.cx,o=e.value,n=pr(e),i=n.innerRef,s=n.isDisabled,l=n.isHidden,a=n.inputClassName,u=ue(n,ka);return _("div",P({},j(e,"input",{"input-container":!0}),{"data-value":o||""}),_("input",P({className:r({input:!0},a),ref:i,style:Aa(l),disabled:s},u)))},Ha=ja,Ba=function(e,r){var o=e.theme,n=o.spacing,i=o.borderRadius,s=o.colors;return M({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:s.neutral10,borderRadius:i/2,margin:n.baseUnit/2})},Ua=function(e,r){var o=e.theme,n=o.borderRadius,i=o.colors,s=e.cropWithEllipsis;return M({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:n/2,color:i.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},za=function(e,r){var o=e.theme,n=o.spacing,i=o.borderRadius,s=o.colors,l=e.isFocused;return M({alignItems:"center",display:"flex"},r?{}:{borderRadius:i/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Tr=function(e){var r=e.children,o=e.innerProps;return _("div",o,r)},Wa=Tr,Ga=Tr;function Xa(t){var e=t.children,r=t.innerProps;return _("div",P({role:"button"},r),e||_(Zt,{size:14}))}var qa=function(e){var r=e.children,o=e.components,n=e.data,i=e.innerProps,s=e.isDisabled,l=e.removeProps,a=e.selectProps,u=o.Container,c=o.Label,d=o.Remove;return _(u,{data:n,innerProps:M(M({},j(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),i),selectProps:a},_(c,{data:n,innerProps:M({},j(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},r),_(d,{data:n,innerProps:M(M({},j(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},l),selectProps:a}))},Ya=qa,Ka=function(e,r){var o=e.isDisabled,n=e.isFocused,i=e.isSelected,s=e.theme,l=s.spacing,a=s.colors;return M({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:i?a.primary:n?a.primary25:"transparent",color:o?a.neutral20:i?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:i?a.primary:a.primary50}})},Qa=function(e){var r=e.children,o=e.isDisabled,n=e.isFocused,i=e.isSelected,s=e.innerRef,l=e.innerProps;return _("div",P({},j(e,"option",{option:!0,"option--is-disabled":o,"option--is-focused":n,"option--is-selected":i}),{ref:s,"aria-disabled":o},l),r)},Ja=Qa,Za=function(e,r){var o=e.theme,n=o.spacing,i=o.colors;return M({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:i.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},es=function(e){var r=e.children,o=e.innerProps;return _("div",P({},j(e,"placeholder",{placeholder:!0}),o),r)},ts=es,ns=function(e,r){var o=e.isDisabled,n=e.theme,i=n.spacing,s=n.colors;return M({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:o?s.neutral40:s.neutral80,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},rs=function(e){var r=e.children,o=e.isDisabled,n=e.innerProps;return _("div",P({},j(e,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),n),r)},os=rs,Ue={ClearIndicator:xa,Control:Ma,DropdownIndicator:ya,DownChevron:Sr,CrossIcon:Zt,Group:Fa,GroupHeading:Da,IndicatorsContainer:ma,IndicatorSeparator:Ta,Input:Ha,LoadingIndicator:Ia,Menu:ea,MenuList:na,MenuPortal:la,LoadingMessage:aa,NoOptionsMessage:ia,MultiValue:Ya,MultiValueContainer:Wa,MultiValueLabel:Ga,MultiValueRemove:Xa,Option:Ja,Placeholder:ts,SelectContainer:ca,SingleValue:os,ValueContainer:fa},is=function(e){return M(M({},Ue),e.components)},On=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function as(t,e){return!!(t===e||On(t)&&On(e))}function ss(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!as(t[r],e[r]))return!1;return!0}function ls(t,e){e===void 0&&(e=ss);var r=null;function o(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(r&&r.lastThis===this&&e(n,r.lastArgs))return r.lastResult;var s=t.apply(this,n);return r={lastResult:s,lastArgs:n,lastThis:this},s}return o.clear=function(){r=null},o}var us={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},cs=function(e){return _("span",P({css:us},e))},En=cs,ds={guidance:function(e){var r=e.isSearchable,o=e.isMulti,n=e.tabSelectsValue,i=e.context,s=e.isInitialFocus;switch(i){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,o=e.label,n=o===void 0?"":o,i=e.labels,s=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(i.length>1?"s":""," ").concat(i.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var r=e.context,o=e.focused,n=e.options,i=e.label,s=i===void 0?"":i,l=e.selectValue,a=e.isDisabled,u=e.isSelected,c=e.isAppleDevice,d=function(v,p){return v&&v.length?"".concat(v.indexOf(p)+1," of ").concat(v.length):""};if(r==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,o),".");if(r==="menu"&&c){var g=a?" disabled":"",y="".concat(u?" selected":"").concat(g);return"".concat(s).concat(y,", ").concat(d(n,o),".")}return""},onFilter:function(e){var r=e.inputValue,o=e.resultsMessage;return"".concat(o).concat(r?" for search term "+r:"",".")}},fs=function(e){var r=e.ariaSelection,o=e.focusedOption,n=e.focusedValue,i=e.focusableOptions,s=e.isFocused,l=e.selectValue,a=e.selectProps,u=e.id,c=e.isAppleDevice,d=a.ariaLiveMessages,g=a.getOptionLabel,y=a.inputValue,b=a.isMulti,v=a.isOptionDisabled,p=a.isSearchable,h=a.menuIsOpen,E=a.options,T=a.screenReaderStatus,x=a.tabSelectsValue,f=a.isLoading,O=a["aria-label"],C=a["aria-live"],S=m.useMemo(function(){return M(M({},ds),d||{})},[d]),V=m.useMemo(function(){var k="";if(r&&S.onChange){var N=r.option,A=r.options,G=r.removedValue,de=r.removedValues,fe=r.value,We=function(ae){return Array.isArray(ae)?null:ae},B=G||N||We(fe),J=B?g(B):"",ie=A||de||void 0,pe=ie?ie.map(g):[],ee=M({isDisabled:B&&v(B,l),label:J,labels:pe},r);k=S.onChange(ee)}return k},[r,S,v,l,g]),R=m.useMemo(function(){var k="",N=o||n,A=!!(o&&l&&l.includes(o));if(N&&S.onFocus){var G={focused:N,label:g(N),isDisabled:v(N,l),isSelected:A,options:i,context:N===o?"menu":"value",selectValue:l,isAppleDevice:c};k=S.onFocus(G)}return k},[o,n,g,v,S,i,l,c]),w=m.useMemo(function(){var k="";if(h&&E.length&&!f&&S.onFilter){var N=T({count:i.length});k=S.onFilter({inputValue:y,resultsMessage:N})}return k},[i,y,h,S,E,T,f]),$=(r==null?void 0:r.action)==="initial-input-focus",z=m.useMemo(function(){var k="";if(S.guidance){var N=n?"value":h?"menu":"input";k=S.guidance({"aria-label":O,context:N,isDisabled:o&&v(o,l),isMulti:b,isSearchable:p,tabSelectsValue:x,isInitialFocus:$})}return k},[O,o,n,b,v,p,h,S,l,x,$]),q=_(m.Fragment,null,_("span",{id:"aria-selection"},V),_("span",{id:"aria-focused"},R),_("span",{id:"aria-results"},w),_("span",{id:"aria-guidance"},z));return _(m.Fragment,null,_(En,{id:u},$&&q),_(En,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!$&&q))},ps=fs,jt=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ms=new RegExp("["+jt.map(function(t){return t.letters}).join("")+"]","g"),Or={};for(var Et=0;Et<jt.length;Et++)for(var It=jt[Et],wt=0;wt<It.letters.length;wt++)Or[It.letters[wt]]=It.base;var Er=function(e){return e.replace(ms,function(r){return Or[r]})},hs=ls(Er),In=function(e){return e.replace(/^\s+|\s+$/g,"")},vs=function(e){return"".concat(e.label," ").concat(e.value)},gs=function(e){return function(r,o){if(r.data.__isNew__)return!0;var n=M({ignoreCase:!0,ignoreAccents:!0,stringify:vs,trim:!0,matchFrom:"any"},e),i=n.ignoreCase,s=n.ignoreAccents,l=n.stringify,a=n.trim,u=n.matchFrom,c=a?In(o):o,d=a?In(l(r)):l(r);return i&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=hs(c),d=Er(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},bs=["innerRef"];function ys(t){var e=t.innerRef,r=ue(t,bs),o=Gi(r,"onExited","in","enter","exit","appear");return _("input",P({ref:e},o,{css:Yt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Ss=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function xs(t){var e=t.isEnabled,r=t.onBottomArrive,o=t.onBottomLeave,n=t.onTopArrive,i=t.onTopLeave,s=m.useRef(!1),l=m.useRef(!1),a=m.useRef(0),u=m.useRef(null),c=m.useCallback(function(p,h){if(u.current!==null){var E=u.current,T=E.scrollTop,x=E.scrollHeight,f=E.clientHeight,O=u.current,C=h>0,S=x-f-T,V=!1;S>h&&s.current&&(o&&o(p),s.current=!1),C&&l.current&&(i&&i(p),l.current=!1),C&&h>S?(r&&!s.current&&r(p),O.scrollTop=x,V=!0,s.current=!0):!C&&-h>T&&(n&&!l.current&&n(p),O.scrollTop=0,V=!0,l.current=!0),V&&Ss(p)}},[r,o,n,i]),d=m.useCallback(function(p){c(p,p.deltaY)},[c]),g=m.useCallback(function(p){a.current=p.changedTouches[0].clientY},[]),y=m.useCallback(function(p){var h=a.current-p.changedTouches[0].clientY;c(p,h)},[c]),b=m.useCallback(function(p){if(p){var h=Ui?{passive:!1}:!1;p.addEventListener("wheel",d,h),p.addEventListener("touchstart",g,h),p.addEventListener("touchmove",y,h)}},[y,g,d]),v=m.useCallback(function(p){p&&(p.removeEventListener("wheel",d,!1),p.removeEventListener("touchstart",g,!1),p.removeEventListener("touchmove",y,!1))},[y,g,d]);return m.useEffect(function(){if(e){var p=u.current;return b(p),function(){v(p)}}},[e,b,v]),function(p){u.current=p}}var wn=["boxSizing","height","overflow","paddingRight","position"],_n={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Mn(t){t.cancelable&&t.preventDefault()}function Pn(t){t.stopPropagation()}function Rn(){var t=this.scrollTop,e=this.scrollHeight,r=t+this.offsetHeight;t===0?this.scrollTop=1:r===e&&(this.scrollTop=t-1)}function Vn(){return"ontouchstart"in window||navigator.maxTouchPoints}var Ln=!!(typeof window<"u"&&window.document&&window.document.createElement),De=0,Te={capture:!1,passive:!1};function Cs(t){var e=t.isEnabled,r=t.accountForScrollbars,o=r===void 0?!0:r,n=m.useRef({}),i=m.useRef(null),s=m.useCallback(function(a){if(Ln){var u=document.body,c=u&&u.style;if(o&&wn.forEach(function(b){var v=c&&c[b];n.current[b]=v}),o&&De<1){var d=parseInt(n.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,y=window.innerWidth-g+d||0;Object.keys(_n).forEach(function(b){var v=_n[b];c&&(c[b]=v)}),c&&(c.paddingRight="".concat(y,"px"))}u&&Vn()&&(u.addEventListener("touchmove",Mn,Te),a&&(a.addEventListener("touchstart",Rn,Te),a.addEventListener("touchmove",Pn,Te))),De+=1}},[o]),l=m.useCallback(function(a){if(Ln){var u=document.body,c=u&&u.style;De=Math.max(De-1,0),o&&De<1&&wn.forEach(function(d){var g=n.current[d];c&&(c[d]=g)}),u&&Vn()&&(u.removeEventListener("touchmove",Mn,Te),a&&(a.removeEventListener("touchstart",Rn,Te),a.removeEventListener("touchmove",Pn,Te)))}},[o]);return m.useEffect(function(){if(e){var a=i.current;return s(a),function(){l(a)}}},[e,s,l]),function(a){i.current=a}}var Ts=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},Os={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Es(t){var e=t.children,r=t.lockEnabled,o=t.captureEnabled,n=o===void 0?!0:o,i=t.onBottomArrive,s=t.onBottomLeave,l=t.onTopArrive,a=t.onTopLeave,u=xs({isEnabled:n,onBottomArrive:i,onBottomLeave:s,onTopArrive:l,onTopLeave:a}),c=Cs({isEnabled:r}),d=function(y){u(y),c(y)};return _(m.Fragment,null,r&&_("div",{onClick:Ts,css:Os}),e(d))}var Is={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},ws=function(e){var r=e.name,o=e.onFocus;return _("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Is,value:"",onChange:function(){}})},_s=ws;function en(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ms(){return en(/^iPhone/i)}function Ir(){return en(/^Mac/i)}function Ps(){return en(/^iPad/i)||Ir()&&navigator.maxTouchPoints>1}function Rs(){return Ms()||Ps()}function Vs(){return Ir()||Rs()}var Ls=function(e){return e.label},Ds=function(e){return e.label},Fs=function(e){return e.value},ks=function(e){return!!e.isDisabled},Ns={clearIndicator:Sa,container:ua,control:wa,dropdownIndicator:ba,group:Ra,groupHeading:La,indicatorsContainer:pa,indicatorSeparator:Ca,input:Na,loadingIndicator:Ea,loadingMessage:oa,menu:Qi,menuList:ta,menuPortal:sa,multiValue:Ba,multiValueLabel:Ua,multiValueRemove:za,noOptionsMessage:ra,option:Ka,placeholder:Za,singleValue:ns,valueContainer:da},$s={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},As=4,wr=4,js=38,Hs=wr*2,Bs={baseUnit:wr,controlHeight:js,menuGutter:Hs},_t={borderRadius:As,colors:$s,spacing:Bs},Us={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Cn(),captureMenuScroll:!Cn(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:gs(),formatGroupLabel:Ls,getOptionLabel:Ds,getOptionValue:Fs,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:ks,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Hi(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Dn(t,e,r,o){var n=Pr(t,e,r),i=Rr(t,e,r),s=Mr(t,e),l=dt(t,e);return{type:"option",data:e,isDisabled:n,isSelected:i,label:s,value:l,index:o}}function ot(t,e){return t.options.map(function(r,o){if("options"in r){var n=r.options.map(function(s,l){return Dn(t,s,e,l)}).filter(function(s){return kn(t,s)});return n.length>0?{type:"group",data:r,options:n,index:o}:void 0}var i=Dn(t,r,e,o);return kn(t,i)?i:void 0}).filter(zi)}function _r(t){return t.reduce(function(e,r){return r.type==="group"?e.push.apply(e,Ht(r.options.map(function(o){return o.data}))):e.push(r.data),e},[])}function Fn(t,e){return t.reduce(function(r,o){return o.type==="group"?r.push.apply(r,Ht(o.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(o.index,"-").concat(n.index)}}))):r.push({data:o.data,id:"".concat(e,"-").concat(o.index)}),r},[])}function zs(t,e){return _r(ot(t,e))}function kn(t,e){var r=t.inputValue,o=r===void 0?"":r,n=e.data,i=e.isSelected,s=e.label,l=e.value;return(!Lr(t)||!i)&&Vr(t,{label:s,value:l,data:n},o)}function Ws(t,e){var r=t.focusedValue,o=t.selectValue,n=o.indexOf(r);if(n>-1){var i=e.indexOf(r);if(i>-1)return r;if(n<e.length)return e[n]}return null}function Gs(t,e){var r=t.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var Mt=function(e,r){var o,n=(o=e.find(function(i){return i.data===r}))===null||o===void 0?void 0:o.id;return n||null},Mr=function(e,r){return e.getOptionLabel(r)},dt=function(e,r){return e.getOptionValue(r)};function Pr(t,e,r){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,r):!1}function Rr(t,e,r){if(r.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,r);var o=dt(t,e);return r.some(function(n){return dt(t,n)===o})}function Vr(t,e,r){return t.filterOption?t.filterOption(e,r):!0}var Lr=function(e){var r=e.hideSelectedOptions,o=e.isMulti;return r===void 0?o:r},Xs=1,Dr=(function(t){Jr(r,t);var e=Zr(r);function r(o){var n;if(eo(this,r),n=e.call(this,o),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.controlRef=null,n.getControlRef=function(a){n.controlRef=a},n.focusedOptionRef=null,n.getFocusedOptionRef=function(a){n.focusedOptionRef=a},n.menuListRef=null,n.getMenuListRef=function(a){n.menuListRef=a},n.inputRef=null,n.getInputRef=function(a){n.inputRef=a},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(a,u){var c=n.props,d=c.onChange,g=c.name;u.name=g,n.ariaOnChange(a,u),d(a,u)},n.setValue=function(a,u,c){var d=n.props,g=d.closeMenuOnSelect,y=d.isMulti,b=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:b}),g&&(n.setState({inputIsHiddenAfterUpdate:!y}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(a,{action:u,option:c})},n.selectOption=function(a){var u=n.props,c=u.blurInputOnSelect,d=u.isMulti,g=u.name,y=n.state.selectValue,b=d&&n.isOptionSelected(a,y),v=n.isOptionDisabled(a,y);if(b){var p=n.getOptionValue(a);n.setValue(y.filter(function(h){return n.getOptionValue(h)!==p}),"deselect-option",a)}else if(!v)d?n.setValue([].concat(Ht(y),[a]),"select-option",a):n.setValue(a,"select-option");else{n.ariaOnChange(a,{action:"select-option",option:a,name:g});return}c&&n.blurInput()},n.removeValue=function(a){var u=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(a),g=c.filter(function(b){return n.getOptionValue(b)!==d}),y=Ze(u,g,g[0]||null);n.onChange(y,{action:"remove-value",removedValue:a}),n.focusInput()},n.clearValue=function(){var a=n.state.selectValue;n.onChange(Ze(n.props.isMulti,[],null),{action:"clear",removedValues:a})},n.popValue=function(){var a=n.props.isMulti,u=n.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),g=Ze(a,d,d[0]||null);c&&n.onChange(g,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(a){return Mt(n.state.focusableOptionsWithIds,a)},n.getFocusableOptionsWithIds=function(){return Fn(ot(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return ki.apply(void 0,[n.props.classNamePrefix].concat(u))},n.getOptionLabel=function(a){return Mr(n.props,a)},n.getOptionValue=function(a){return dt(n.props,a)},n.getStyles=function(a,u){var c=n.props.unstyled,d=Ns[a](u,c);d.boxSizing="border-box";var g=n.props.styles[a];return g?g(d,u):d},n.getClassNames=function(a,u){var c,d;return(c=(d=n.props.classNames)[a])===null||c===void 0?void 0:c.call(d,u)},n.getElementId=function(a){return"".concat(n.state.instancePrefix,"-").concat(a)},n.getComponents=function(){return is(n.props)},n.buildCategorizedOptions=function(){return ot(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return _r(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(a,u){n.setState({ariaSelection:M({value:a},u)})},n.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(a){n.blockOptionHover=!1},n.onControlMouseDown=function(a){if(!a.defaultPrevented){var u=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&n.onMenuClose():u&&n.openMenu("first"):(u&&(n.openAfterFocus=!0),n.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},n.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!n.props.isDisabled){var u=n.props,c=u.isMulti,d=u.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),a.preventDefault()}},n.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(n.clearValue(),a.preventDefault(),n.openAfterFocus=!1,a.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(a){typeof n.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&bt(a.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(a)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(a){var u=a.touches,c=u&&u.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(a){var u=a.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),g=Math.abs(c.clientY-n.initialTouchY),y=5;n.userIsDragging=d>y||g>y}},n.onTouchEnd=function(a){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(a.target)&&n.menuListRef&&!n.menuListRef.contains(a.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(a){n.userIsDragging||n.onControlMouseDown(a)},n.onClearIndicatorTouchEnd=function(a){n.userIsDragging||n.onClearIndicatorMouseDown(a)},n.onDropdownIndicatorTouchEnd=function(a){n.userIsDragging||n.onDropdownIndicatorMouseDown(a)},n.handleInputChange=function(a){var u=n.props.inputValue,c=a.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:u}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(a){n.props.onFocus&&n.props.onFocus(a),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(a){var u=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(a),n.onInputChange("",{action:"input-blur",prevInputValue:u}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(a){if(!(n.blockOptionHover||n.state.focusedOption===a)){var u=n.getFocusableOptions(),c=u.indexOf(a);n.setState({focusedOption:a,focusedOptionId:c>-1?n.getFocusedOptionId(a):null})}},n.shouldHideSelectedOptions=function(){return Lr(n.props)},n.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),n.focus()},n.onKeyDown=function(a){var u=n.props,c=u.isMulti,d=u.backspaceRemovesValue,g=u.escapeClearsValue,y=u.inputValue,b=u.isClearable,v=u.isDisabled,p=u.menuIsOpen,h=u.onKeyDown,E=u.tabSelectsValue,T=u.openMenuOnFocus,x=n.state,f=x.focusedOption,O=x.focusedValue,C=x.selectValue;if(!v&&!(typeof h=="function"&&(h(a),a.defaultPrevented))){switch(n.blockOptionHover=!0,a.key){case"ArrowLeft":if(!c||y)return;n.focusValue("previous");break;case"ArrowRight":if(!c||y)return;n.focusValue("next");break;case"Delete":case"Backspace":if(y)return;if(O)n.removeValue(O);else{if(!d)return;c?n.popValue():b&&n.clearValue()}break;case"Tab":if(n.isComposing||a.shiftKey||!p||!E||!f||T&&n.isOptionSelected(f,C))return;n.selectOption(f);break;case"Enter":if(a.keyCode===229)break;if(p){if(!f||n.isComposing)return;n.selectOption(f);break}return;case"Escape":p?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:y}),n.onMenuClose()):b&&g&&n.clearValue();break;case" ":if(y)return;if(!p){n.openMenu("first");break}if(!f)return;n.selectOption(f);break;case"ArrowUp":p?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":p?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!p)return;n.focusOption("pageup");break;case"PageDown":if(!p)return;n.focusOption("pagedown");break;case"Home":if(!p)return;n.focusOption("first");break;case"End":if(!p)return;n.focusOption("last");break;default:return}a.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++Xs),n.state.selectValue=Sn(o.value),o.menuIsOpen&&n.state.selectValue.length){var i=n.getFocusableOptionsWithIds(),s=n.buildFocusableOptions(),l=s.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=i,n.state.focusedOption=s[l],n.state.focusedOptionId=Mt(i,s[l])}return n}return to(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&xn(this.menuListRef,this.focusedOptionRef),Vs()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(n){var i=this.props,s=i.isDisabled,l=i.menuIsOpen,a=this.state.isFocused;(a&&!s&&n.isDisabled||a&&l&&!n.menuIsOpen)&&this.focusInput(),a&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(xn(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,i){this.props.onInputChange(n,i)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var i=this,s=this.state,l=s.selectValue,a=s.isFocused,u=this.buildFocusableOptions(),c=n==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return i.onMenuOpen()})}},{key:"focusValue",value:function(n){var i=this.state,s=i.selectValue,l=i.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=s.indexOf(l);l||(a=-1);var u=s.length-1,c=-1;if(s.length){switch(n){case"previous":a===0?c=0:a===-1?c=u:c=a-1;break;case"next":a>-1&&a<u&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",i=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,u=l.indexOf(s);s||(u=-1),n==="up"?a=u>0?u-1:l.length-1:n==="down"?a=(u+1)%l.length:n==="pageup"?(a=u-i,a<0&&(a=0)):n==="pagedown"?(a=u+i,a>l.length-1&&(a=l.length-1)):n==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:(function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(_t):M(M({},_t),this.props.theme):_t})},{key:"getCommonProps",value:function(){var n=this.clearValue,i=this.cx,s=this.getStyles,l=this.getClassNames,a=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,y=d.isRtl,b=d.options,v=this.hasValue();return{clearValue:n,cx:i,getStyles:s,getClassNames:l,getValue:a,hasValue:v,isMulti:g,isRtl:y,options:b,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,i=n.isClearable,s=n.isMulti;return i===void 0?s:i}},{key:"isOptionDisabled",value:function(n,i){return Pr(this.props,n,i)}},{key:"isOptionSelected",value:function(n,i){return Rr(this.props,n,i)}},{key:"filterOption",value:function(n,i){return Vr(this.props,n,i)}},{key:"formatOptionLabel",value:function(n,i){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(n,{context:i,inputValue:s,selectValue:l})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:(function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))})},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:(function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))})},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:(function(){var n=this.props,i=n.isDisabled,s=n.isSearchable,l=n.inputId,a=n.inputValue,u=n.tabIndex,c=n.form,d=n.menuIsOpen,g=n.required,y=this.getComponents(),b=y.Input,v=this.state,p=v.inputIsHidden,h=v.ariaSelection,E=this.commonProps,T=l||this.getElementId("input"),x=M(M(M({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?m.createElement(b,P({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:T,innerRef:this.getInputRef,isDisabled:i,isHidden:p,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:a},x)):m.createElement(ys,P({id:T,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ut,onFocus:this.onInputFocus,disabled:i,tabIndex:u,inputMode:"none",form:c,value:""},x))})},{key:"renderPlaceholderOrValue",value:function(){var n=this,i=this.getComponents(),s=i.MultiValue,l=i.MultiValueContainer,a=i.MultiValueLabel,u=i.MultiValueRemove,c=i.SingleValue,d=i.Placeholder,g=this.commonProps,y=this.props,b=y.controlShouldRenderValue,v=y.isDisabled,p=y.isMulti,h=y.inputValue,E=y.placeholder,T=this.state,x=T.selectValue,f=T.focusedValue,O=T.isFocused;if(!this.hasValue()||!b)return h?null:m.createElement(d,P({},g,{key:"placeholder",isDisabled:v,isFocused:O,innerProps:{id:this.getElementId("placeholder")}}),E);if(p)return x.map(function(S,V){var R=S===f,w="".concat(n.getOptionLabel(S),"-").concat(n.getOptionValue(S));return m.createElement(s,P({},g,{components:{Container:l,Label:a,Remove:u},isFocused:R,isDisabled:v,key:w,index:V,removeProps:{onClick:function(){return n.removeValue(S)},onTouchEnd:function(){return n.removeValue(S)},onMouseDown:function(z){z.preventDefault()}},data:S}),n.formatOptionLabel(S,"value"))});if(h)return null;var C=x[0];return m.createElement(c,P({},g,{data:C,isDisabled:v}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),i=n.ClearIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!i||a||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(i,P({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),i=n.LoadingIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!i||!u)return null;var d={"aria-hidden":"true"};return m.createElement(i,P({},s,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),i=n.DropdownIndicator,s=n.IndicatorSeparator;if(!i||!s)return null;var l=this.commonProps,a=this.props.isDisabled,u=this.state.isFocused;return m.createElement(s,P({},l,{isDisabled:a,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),i=n.DropdownIndicator;if(!i)return null;var s=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(i,P({},s,{innerProps:u,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var n=this,i=this.getComponents(),s=i.Group,l=i.GroupHeading,a=i.Menu,u=i.MenuList,c=i.MenuPortal,d=i.LoadingMessage,g=i.NoOptionsMessage,y=i.Option,b=this.commonProps,v=this.state.focusedOption,p=this.props,h=p.captureMenuScroll,E=p.inputValue,T=p.isLoading,x=p.loadingMessage,f=p.minMenuHeight,O=p.maxMenuHeight,C=p.menuIsOpen,S=p.menuPlacement,V=p.menuPosition,R=p.menuPortalTarget,w=p.menuShouldBlockScroll,$=p.menuShouldScrollIntoView,z=p.noOptionsMessage,q=p.onMenuScrollToTop,k=p.onMenuScrollToBottom;if(!C)return null;var N=function(J,ie){var pe=J.type,ee=J.data,me=J.isDisabled,ae=J.isSelected,Ge=J.label,zr=J.value,tn=v===ee,nn=me?void 0:function(){return n.onOptionHover(ee)},Wr=me?void 0:function(){return n.selectOption(ee)},rn="".concat(n.getElementId("option"),"-").concat(ie),Gr={id:rn,onClick:Wr,onMouseMove:nn,onMouseOver:nn,tabIndex:-1,role:"option","aria-selected":n.state.isAppleDevice?void 0:ae};return m.createElement(y,P({},b,{innerProps:Gr,data:ee,isDisabled:me,isSelected:ae,key:rn,label:Ge,type:pe,value:zr,isFocused:tn,innerRef:tn?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(J.data,"menu"))},A;if(this.hasOptions())A=this.getCategorizedOptions().map(function(B){if(B.type==="group"){var J=B.data,ie=B.options,pe=B.index,ee="".concat(n.getElementId("group"),"-").concat(pe),me="".concat(ee,"-heading");return m.createElement(s,P({},b,{key:ee,data:J,options:ie,Heading:l,headingProps:{id:me,data:B.data},label:n.formatGroupLabel(B.data)}),B.options.map(function(ae){return N(ae,"".concat(pe,"-").concat(ae.index))}))}else if(B.type==="option")return N(B,"".concat(B.index))});else if(T){var G=x({inputValue:E});if(G===null)return null;A=m.createElement(d,b,G)}else{var de=z({inputValue:E});if(de===null)return null;A=m.createElement(g,b,de)}var fe={minMenuHeight:f,maxMenuHeight:O,menuPlacement:S,menuPosition:V,menuShouldScrollIntoView:$},We=m.createElement(Ji,P({},b,fe),function(B){var J=B.ref,ie=B.placerProps,pe=ie.placement,ee=ie.maxHeight;return m.createElement(a,P({},b,fe,{innerRef:J,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:T,placement:pe}),m.createElement(Es,{captureEnabled:h,onTopArrive:q,onBottomArrive:k,lockEnabled:w},function(me){return m.createElement(u,P({},b,{innerRef:function(Ge){n.getMenuListRef(Ge),me(Ge)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:n.getElementId("listbox")},isLoading:T,maxHeight:ee,focusedOption:v}),A)}))});return R||V==="fixed"?m.createElement(c,P({},b,{appendTo:R,controlElement:this.controlRef,menuPlacement:S,menuPosition:V}),We):We}},{key:"renderFormField",value:function(){var n=this,i=this.props,s=i.delimiter,l=i.isDisabled,a=i.isMulti,u=i.name,c=i.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return m.createElement(_s,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(a)if(s){var g=d.map(function(v){return n.getOptionValue(v)}).join(s);return m.createElement("input",{name:u,type:"hidden",value:g})}else{var y=d.length>0?d.map(function(v,p){return m.createElement("input",{key:"i-".concat(p),name:u,type:"hidden",value:n.getOptionValue(v)})}):m.createElement("input",{name:u,type:"hidden",value:""});return m.createElement("div",null,y)}else{var b=d[0]?this.getOptionValue(d[0]):"";return m.createElement("input",{name:u,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,i=this.state,s=i.ariaSelection,l=i.focusedOption,a=i.focusedValue,u=i.isFocused,c=i.selectValue,d=this.getFocusableOptions();return m.createElement(ps,P({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:a,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),i=n.Control,s=n.IndicatorsContainer,l=n.SelectContainer,a=n.ValueContainer,u=this.props,c=u.className,d=u.id,g=u.isDisabled,y=u.menuIsOpen,b=this.state.isFocused,v=this.commonProps=this.getCommonProps();return m.createElement(l,P({},v,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:b}),this.renderLiveRegion(),m.createElement(i,P({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:b,menuIsOpen:y}),m.createElement(a,P({},v,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),m.createElement(s,P({},v,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,i){var s=i.prevProps,l=i.clearFocusValueOnUpdate,a=i.inputIsHiddenAfterUpdate,u=i.ariaSelection,c=i.isFocused,d=i.prevWasFocused,g=i.instancePrefix,y=n.options,b=n.value,v=n.menuIsOpen,p=n.inputValue,h=n.isMulti,E=Sn(b),T={};if(s&&(b!==s.value||y!==s.options||v!==s.menuIsOpen||p!==s.inputValue)){var x=v?zs(n,E):[],f=v?Fn(ot(n,E),"".concat(g,"-option")):[],O=l?Ws(i,E):null,C=Gs(i,x),S=Mt(f,C);T={selectValue:E,focusedOption:C,focusedOptionId:S,focusableOptionsWithIds:f,focusedValue:O,clearFocusValueOnUpdate:!1}}var V=a!=null&&n!==s?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},R=u,w=c&&d;return c&&!w&&(R={value:Ze(h,E,E[0]||null),options:E,action:"initial-input-focus"},w=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(R=null),M(M(M({},T),V),{},{prevProps:n,ariaSelection:R,prevWasFocused:w})}}]),r})(m.Component);Dr.defaultProps=Us;var qs=m.forwardRef(function(t,e){var r=To(t);return m.createElement(Dr,P({ref:e},r))}),Ys=qs;function Fr(t){function e(){t.clearValue(),t.selectProps.onClear&&t.selectProps.onClear()}const{children:r=I.jsx(jn.X,{size:"1.3rem"}),getStyles:o,innerProps:{ref:n,onMouseDown:i,onTouchEnd:s,...l}}=t;return I.jsx("div",{...l,ref:n,style:o("clearIndicator",t),onMouseDown:e,onTouchEnd:e,children:I.jsx("div",{style:{cursor:"pointer"},children:r})})}Fr.__docgenInfo={description:"",methods:[],displayName:"ClearIndicator"};function kr({children:t,...e}){const{floatingLabel:r,invalidSearch:o}=e.selectProps;return I.jsxs(Ue.Control,{...e,children:[I.jsx("div",{style:{margin:"0 0.1rem"},children:I.jsx(Ue.DropdownIndicator,{...e,children:I.jsx(jn.Search,{size:"1.3rem",color:o?U.red7:"none"})})}),I.jsx(Ks,{}),I.jsx(Qs,{$isFloating:e.isFocused||e.hasValue,theme:e.theme,children:r}),t]})}const Ks=Bt.span`
  width: 1px;
  height: 1.1rem;
  background-color: hsl(0, 0%, 80%);
  align-self: center;
`,Qs=Bt.label`
  position: absolute;
  left: 3.3rem;

  pointer-events: none;
  font-family: ${ft.font.sansSerif};

  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;

  color: ${t=>t.theme.colors.neutral50};
  top: ${t=>t.$isFloating?"10%":"30%"};
  font-size: ${t=>t.$isFloating?"0.6rem":"1rem"};
`;kr.__docgenInfo={description:"",methods:[],displayName:"Control"};function Nr({children:t,...e}){const r=["IndicatorSeparator","DropdownIndicator"],o=m.Children.map(t,n=>n&&!r.includes(n.type.name)?n:null);return I.jsx(Ue.IndicatorsContainer,{...e,children:o})}Nr.__docgenInfo={description:"",methods:[],displayName:"IndicatorsContainer"};function $r(t){const{noOptionsTitle:e,setInvalidSearch:r}=t.selectProps;return m.useEffect(()=>(r(!0),()=>r(!1)),[r]),I.jsxs(I.Fragment,{children:[I.jsx(no,{variant:"label",sx:{fontWeight:"bold",marginTop:"1rem",textAlign:"center"},children:e}),I.jsx(Ue.NoOptionsMessage,{...t})]})}$r.__docgenInfo={description:"",methods:[],displayName:"NoOptionsMessage"};const Js=(t,e)=>({...t,height:"3.2rem",border:`0.1rem solid ${e.theme.colors.neutral30}`,borderRadius:"0.3rem",backgroundColor:e.isFocused?U.gray5:e.theme.colors.neutral0,boxShadow:e.isFocused?ro.xs:"none",cursor:"pointer"}),Zs=(t,e)=>({...t,maxHeight:"15rem",padding:"0px","::-webkit-scrollbar":{width:"0.6rem"},"::-webkit-scrollbar-track":{background:"rgba(0, 0, 0, 0)",borderRadius:"1rem"},"::-webkit-scrollbar-thumb":{background:e.theme.colors.primary25,borderRadius:"1rem",boxShadow:"inset 0 0 0.6rem rgba(0, 0, 0, 0.2)"},"::-webkit-scrollbar-thumb:hover":{background:U.gray8}}),el=t=>({...t,zIndex:2}),tl=t=>({...t,color:U.gray11,fontFamily:ft.font.sansSerif,marginBottom:"0.5rem"}),nl=(t,e)=>({...t,color:U.gray11,fontSize:"1rem",fontFamily:ft.font.sansSerif,height:"3rem",display:"flex",alignItems:"center",boxShadow:e.isFocused||e.isSelected?`4px 0px 0px 0px ${e.theme.colors.primary25} inset`:"none",transition:"0.3s ease box-shadow","&:nth-of-type(odd)":{backgroundColor:e.theme.colors.neutral0},"&:nth-of-type(even)":{backgroundColor:e.theme.colors.neutral5},"&:hover":{boxShadow:`4px 0px 0px 0px ${e.theme.colors.primary25} inset`},cursor:"pointer"}),rl=(t,e)=>({...t,fontFamily:ft.font.sansSerif}),ol=t=>({...t,top:"0.4rem"});function he(t){const{floatingLabel:e="Search",noOptionsTitle:r="Invalid search",autoFocus:o=!1,backspaceRemovesValue:n=!0,captureMenuScroll:i=!1,hideSelectedOptions:s=!0,isClearable:l=!0,isLoading:a=!1,isSearchable:u=!0,noOptionsMessage:c=()=>"No results found for this search",placeholder:d="",defaultValue:g,...y}=t,[b,v]=m.useState(!1);return I.jsx(Ys,{floatingLabel:e,invalidSearch:b,setInvalidSearch:v,noOptionsTitle:r,components:{ClearIndicator:Fr,Control:kr,IndicatorsContainer:Nr,NoOptionsMessage:$r},theme:p=>({...p,colors:{...p.colors,neutral0:U.gray3,neutral5:U.gray2,neutral20:U.gray9,neutral30:U.gray6,neutral50:U.gray10,primary:U.gray2,primary25:U.gray4}}),styles:{control:Js,menu:el,menuList:Zs,noOptionsMessage:tl,option:nl,placeholder:rl,valueContainer:ol},autoFocus:o,backspaceRemovesValue:n,captureMenuScroll:i,hideSelectedOptions:s,isClearable:l,isLoading:a,isSearchable:u,noOptionsMessage:c,placeholder:d,...y})}he.__docgenInfo={description:"",methods:[],displayName:"Search",props:{floatingLabel:{required:!1,tsType:{name:"string"},description:""},noOptionsTitle:{required:!1,tsType:{name:"string"},description:""}},composes:["Props"]};function Ar(){return I.jsx(he,{filterOption:il,options:[{label:"First Entry",value:"entry1"},{label:"Second Entry",value:"entry2"},{label:"Third Entry",value:"entry3"}],onChange:t=>{_e(t?`Selected: ${t.label}`:"Cleared")}})}function il(t,e){const r=t.label.toLowerCase(),o=e.length;if(e=e.toLowerCase(),r.slice(0,o)===e)return!0;const n=r.split(" ");for(const i of n.slice(1))if(i.slice(0,o)===e)return!0;return!1}Ar.__docgenInfo={description:"",methods:[],displayName:"EgFiltering"};function jr(){return I.jsx(he,{options:[{label:"First Entry",value:"entry1"},{label:"Second Entry",value:"entry2"},{label:"Third Entry",value:"entry3"}],isMulti:!0,closeMenuOnSelect:!1})}jr.__docgenInfo={description:"",methods:[],displayName:"EgMultiSelect"};function Hr(){const t=[],[e,r]=m.useState(t);return I.jsx(he,{options:e.length>1?[]:[{label:"First Entry",value:"entry1"},{label:"Second Entry",value:"entry2"},{label:"Third Entry",value:"entry3"}],onChange:o=>{r(o||t)},isMulti:!0,closeMenuOnSelect:!1})}Hr.__docgenInfo={description:"",methods:[],displayName:"EgMultiSelectLimit"};function Br(){return I.jsx(he,{options:[{label:"First Entry",value:"entry1"},{label:"Second Entry",value:"entry2"},{label:"Third Entry is a very very long entry that demonstrate text truncations in case of overflow. Decrease screen width to view truncation.",value:"entry3"}],onChange:t=>{_e(t?`Selected: ${t.label}`:"Cleared")}})}Br.__docgenInfo={description:"",methods:[],displayName:"EgSingleSelect"};function Ur(){return I.jsx(he,{options:[{label:"First Entry",value:"entry1"},{label:"Second Entry",value:"entry2"},{label:"Third Entry",value:"entry3"},{label:"Fourth Entry",value:"entry4"},{label:"Fifth Entry",value:"entry5"},{label:"Sixth Entry",value:"entry6"}],onChange:t=>{_e(t?`Selected: ${t.label}`:"Cleared")},theme:t=>({...t,colors:{...t.colors,neutral0:U.gray3,neutral20:U.gray7,neutral30:U.gray8,neutral5:U.gray4,neutral50:U.gray11,primary:U.blue8,primary25:U.blue6}})})}Ur.__docgenInfo={description:"",methods:[],displayName:"EgTheming"};function Nn(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...$n(),...t.components};return I.jsxs(I.Fragment,{children:[I.jsx(Xr,{title:"Atoms/Search",component:he}),`
`,I.jsx(e.h1,{id:"search",children:"Search"}),`
`,I.jsxs(e.p,{children:["This component can be used to render a ",I.jsx(e.code,{children:"<select>"}),` like element styled as a
search box to present the user with a list of options to choose from a
dropdown menu.`]}),`
`,I.jsx(e.p,{children:I.jsx(e.img,{src:"",alt:""})}),`
`,I.jsx(e.h2,{id:"props",children:"Props"}),`
`,I.jsxs(e.p,{children:["The following props are available in addition to ",I.jsx(e.a,{href:"https://react-select.com/props",rel:"nofollow",children:"react-select props"}),"."]}),`
`,I.jsx(qr,{of:he}),`
`,I.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,I.jsxs(e.ul,{children:[`
`,I.jsx(e.li,{children:I.jsx(e.a,{href:"#single-select",children:"Single select"})}),`
`,I.jsx(e.li,{children:I.jsx(e.a,{href:"#multi-select",children:"Multi select"})}),`
`,I.jsx(e.li,{children:I.jsx(e.a,{href:"#multi-select-with-choice-limit",children:"Multi select with choice limit"})}),`
`,I.jsx(e.li,{children:I.jsx(e.a,{href:"#theming",children:"Theming"})}),`
`,I.jsx(e.li,{children:I.jsx(e.a,{href:"#filtering",children:"Filtering"})}),`
`]}),`
`,I.jsx(e.h3,{id:"single-select",children:"Single select"}),`
`,I.jsx(e.pre,{children:I.jsx(e.code,{className:"language-tsx",children:`import { useState } from "react";
import { Search, SearchOptionType, SearchValueType } from "hazel-ui";

function Component() {
  const defaultEntry = { value: "", label: "" };
  const [selectedEntry, setSelectedEntry] = useState<SearchOptionType>(defaultEntry);

  return (
    <Search
      options={[
        { value: "entry1", label: "First Entry" },
        { value: "entry2", label: "Second Entry" },
        { value: "entry3", label: "Third Entry" },
      ]}
      onChange={(selectedOption: SearchValueType<SearchOptionType>) => {
        if (selectedOption) {
          setSelectedEntry(selectedOption as SearchOptionType);
        } else setSelectedEntry(defaultEntry);
      }}
    />
  );
}
`})}),`
`,I.jsx(Br,{}),`
`,I.jsx(Yn,{}),`
`,I.jsx(e.p,{children:I.jsx(e.img,{src:"",alt:""})}),`
`,I.jsx(e.h3,{id:"multi-select",children:"Multi select"}),`
`,I.jsx(e.pre,{children:I.jsx(e.code,{className:"language-tsx",children:`function Component() {
  const defaultEntry: SearchOptionType[] = [];
  const [selectedEntry, setSelectedEntry] = useState<SearchOptionType[]>(defaultEntry);

  return (
    <Search
      options={[
        { value: "entry1", label: "First Entry" },
        { value: "entry2", label: "Second Entry" },
        { value: "entry3", label: "Third Entry" },
      ]}
      onChange={(selectedOption: SearchValueType<SearchOptionType>) => {
        if (selectedOption) {
          setSelectedEntry(selectedOption as SearchOptionType[]);
        } else setSelectedEntry(defaultEntry);
      }}
      isMulti
      closeMenuOnSelect={false}
    />
  );
}
`})}),`
`,I.jsx(jr,{}),`
`,I.jsx(e.p,{children:I.jsx(e.img,{src:"",alt:""})}),`
`,I.jsx(e.h3,{id:"multi-select-with-choice-limit",children:"Multi select with choice limit"}),`
`,I.jsx(e.p,{children:"It's possible to set a limit on the number of options the user is allowed to choose."}),`
`,I.jsx(e.pre,{children:I.jsx(e.code,{className:"language-tsx",children:`function Component() {
  return (
    <Search
      options={
        selectedEntry.length > 1
          ? []
          : [
              { value: "entry1", label: "First Entry" },
              { value: "entry2", label: "Second Entry" },
              { value: "entry3", label: "Third Entry" },
            ]
      }
    />
  );
}
`})}),`
`,I.jsx(Hr,{}),`
`,I.jsx(e.p,{children:I.jsx(e.img,{src:"",alt:""})}),`
`,I.jsx(e.h3,{id:"theming",children:"Theming"}),`
`,I.jsx(e.pre,{children:I.jsx(e.code,{className:"language-tsx",children:`<Search
  theme={(theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      neutral0: Color.whiteSmoke,
      neutral5: Color.white,
      neutral20: Color.silver,
      neutral30: Color.gainsboro,
      neutral50: Color.grey,
      primary: Color.white,
      primary25: Color.royalBlue,
    },
  })}
/>
`})}),`
`,I.jsx(Ur,{}),`
`,I.jsx(e.p,{children:I.jsx(e.img,{src:"",alt:""})}),`
`,I.jsx(e.h3,{id:"filtering",children:"Filtering"}),`
`,I.jsx(e.p,{children:`You can modify the logic used to filter search results by passing
a custom filtering function. For example, the below function will
search for the input value from the starting of the words in available
options and not from in-between them which is the default behaviour.`}),`
`,I.jsx(e.pre,{children:I.jsx(e.code,{className:"language-tsx",children:`<Search
  filterOption={(option: SearchOptionType, inputValue: string) => {
    const label = option.label.toLowerCase();
    const inputLength = inputValue.length;
    inputValue = inputValue.toLowerCase();
    if (label.slice(0, inputLength) === inputValue) return true;

    const labelWords = label.split(" ");
    for (const word of labelWords.slice(1)) {
      if (word.slice(0, inputLength) === inputValue) return true;
    }

    return false;
  }}
/>
`})}),`
`,I.jsx(Ar,{})]})}function Tl(t={}){const{wrapper:e}={...$n(),...t.components};return e?I.jsx(e,{...t,children:I.jsx(Nn,{...t})}):Nn(t)}export{Tl as default};
