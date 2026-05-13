import{j as I}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as An}from"./index-CRoIksu0.js";import{R as Ge,r as $n,M as Gr,c as Xr}from"./index-ghjPb5SR.js";import{R as Fe,r as p,a as on}from"./index-CAe6R3bO.js";import{b as Yr,c as ue,_ as Xe,a as Kr,I as jn}from"./Icon-CGj3Vi-Z.js";import{_ as Qr,a as se,b as M,c as Jr,d as Zr,e as eo,f as Ht,g as to}from"./toConsumableArray-DgFgfs-e.js";import{y as Bt}from"./styled-components.browser.esm-CNZ_myGK.js";import{_ as P}from"./extends-CF3RwP-h.js";import{C as U}from"./Color-D8Giav_X.js";import{T as ft}from"./Theme-HiODj44g.js";import{T as no}from"./Typography-DCBI8IZd.js";import{S as ro}from"./Shadow-BRKr-rku.js";import"./index-ChsGqxH_.js";import"./iframe-fc34HBmR.js";import"./index-BRq5TIsn.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function oo(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}function ao(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Qr(t,e)}const an={disabled:!1},Hn=Fe.createContext(null);var io=function(e){return e.scrollTop},ke="unmounted",ge="exited",be="entering",Oe="entered",Pt="exiting",ce=(function(t){ao(e,t);function e(o,n){var a;a=t.call(this,o,n)||this;var s=n,l=s&&!s.isMounting?o.enter:o.appear,i;return a.appearStatus=null,o.in?l?(i=ge,a.appearStatus=be):i=Oe:o.unmountOnExit||o.mountOnEnter?i=ke:i=ge,a.state={status:i},a.nextCallback=null,a}e.getDerivedStateFromProps=function(n,a){var s=n.in;return s&&a.status===ke?{status:ge}:null};var r=e.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(n){var a=null;if(n!==this.props){var s=this.state.status;this.props.in?s!==be&&s!==Oe&&(a=be):(s===be||s===Oe)&&(a=Pt)}this.updateStatus(!1,a)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var n=this.props.timeout,a,s,l;return a=s=l=n,n!=null&&typeof n!="number"&&(a=n.exit,s=n.enter,l=n.appear!==void 0?n.appear:s),{exit:a,enter:s,appear:l}},r.updateStatus=function(n,a){if(n===void 0&&(n=!1),a!==null)if(this.cancelNextCallback(),a===be){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:Ge.findDOMNode(this);s&&io(s)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ge&&this.setState({status:ke})},r.performEnter=function(n){var a=this,s=this.props.enter,l=this.context?this.context.isMounting:n,i=this.props.nodeRef?[l]:[Ge.findDOMNode(this),l],u=i[0],c=i[1],d=this.getTimeouts(),g=l?d.appear:d.enter;if(!n&&!s||an.disabled){this.safeSetState({status:Oe},function(){a.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:be},function(){a.props.onEntering(u,c),a.onTransitionEnd(g,function(){a.safeSetState({status:Oe},function(){a.props.onEntered(u,c)})})})},r.performExit=function(){var n=this,a=this.props.exit,s=this.getTimeouts(),l=this.props.nodeRef?void 0:Ge.findDOMNode(this);if(!a||an.disabled){this.safeSetState({status:ge},function(){n.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Pt},function(){n.props.onExiting(l),n.onTransitionEnd(s.exit,function(){n.safeSetState({status:ge},function(){n.props.onExited(l)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(n,a){a=this.setNextCallback(a),this.setState(n,a)},r.setNextCallback=function(n){var a=this,s=!0;return this.nextCallback=function(l){s&&(s=!1,a.nextCallback=null,n(l))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(n,a){this.setNextCallback(a);var s=this.props.nodeRef?this.props.nodeRef.current:Ge.findDOMNode(this),l=n==null&&!this.props.addEndListener;if(!s||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=i[0],c=i[1];this.props.addEndListener(u,c)}n!=null&&setTimeout(this.nextCallback,n)},r.render=function(){var n=this.state.status;if(n===ke)return null;var a=this.props,s=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var l=Yr(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Fe.createElement(Hn.Provider,{value:null},typeof s=="function"?s(n,l):Fe.cloneElement(Fe.Children.only(s),l))},e})(Fe.Component);ce.contextType=Hn;ce.propTypes={};function Ce(){}ce.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ce,onEntering:Ce,onEntered:Ce,onExit:Ce,onExiting:Ce,onExited:Ce};ce.UNMOUNTED=ke;ce.EXITED=ge;ce.ENTERING=be;ce.ENTERED=Oe;ce.EXITING=Pt;function Bn(t){var e,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=Bn(t[e]))&&(o&&(o+=" "),o+=r);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function ye(){for(var t,e,r=0,o="";r<arguments.length;)(t=arguments[r++])&&(e=Bn(t))&&(o&&(o+=" "),o+=e);return o}function Se(){return Se=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Se.apply(this,arguments)}function Ut(t,e){if(t==null)return{};var r={},o=Object.keys(t),n,a;for(a=0;a<o.length;a++)n=o[a],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function Ae(t){return typeof t=="number"&&!isNaN(t)}function Ve(t){return typeof t=="boolean"}function $e(t){return typeof t=="string"}function K(t){return typeof t=="function"}function et(t){return $e(t)||K(t)?t:null}function Rt(t){return t===0||t}function so(t,e){return t===!1||Ae(t)&&t>0?t:e}var Un=!!(typeof window<"u"&&window.document&&window.document.createElement);function yt(t){return p.isValidElement(t)||$e(t)||K(t)||Ae(t)}var zn={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ve={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function lo(t,e,r){r===void 0&&(r=300);var o=t.scrollHeight,n=t.style;requestAnimationFrame(function(){n.minHeight="initial",n.height=o+"px",n.transition="all "+r+"ms",requestAnimationFrame(function(){n.height="0",n.padding="0",n.margin="0",setTimeout(function(){return e()},r)})})}function uo(t){var e=t.enter,r=t.exit,o=t.duration,n=o===void 0?750:o,a=t.appendPosition,s=a===void 0?!1:a,l=t.collapse,i=l===void 0?!0:l,u=t.collapseDuration,c=u===void 0?300:u,d,g;return Array.isArray(n)&&n.length===2?(d=n[0],g=n[1]):d=g=n,function(b){var v=b.children,m=b.position,h=b.preventExitTransition,E=b.done,T=Ut(b,["children","position","preventExitTransition","done"]),x=s?e+"--"+m:e,f=s?r+"--"+m:r,O=function(){var w=T.nodeRef.current;w&&(w.classList.add(x),w.style.animationFillMode="forwards",w.style.animationDuration=d+"ms")},C=function(){var w=T.nodeRef.current;w&&(w.classList.remove(x),w.style.cssText="")},S=function R(){var w=T.nodeRef.current;w&&(w.removeEventListener("animationend",R),i?lo(w,E,c):E())},V=function(){var w=T.nodeRef.current;w&&(w.classList.add(f),w.style.animationFillMode="forwards",w.style.animationDuration=g+"ms",w.addEventListener("animationend",S))};return p.createElement(ce,Object.assign({},T,{timeout:h?i?c:50:{enter:d,exit:i?g+c:g+50},onEnter:O,onEntered:C,onExit:h?S:V,unmountOnExit:!0}),v)}}var te={list:new Map,emitQueue:new Map,on:function(e,r){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(r),this},off:function(e,r){if(r){var o=this.list.get(e).filter(function(n){return n!==r});return this.list.set(e,o),this}return this.list.delete(e),this},cancelEmit:function(e){var r=this.emitQueue.get(e);return r&&(r.forEach(function(o){return clearTimeout(o)}),this.emitQueue.delete(e)),this},emit:function(e){for(var r=this,o=arguments.length,n=new Array(o>1?o-1:0),a=1;a<o;a++)n[a-1]=arguments[a];this.list.has(e)&&this.list.get(e).forEach(function(s){var l=setTimeout(function(){s.apply(void 0,n)},0);r.emitQueue.has(e)||r.emitQueue.set(e,[]),r.emitQueue.get(e).push(l)})}};function Ee(t,e){e===void 0&&(e=!1);var r=p.useRef(t);return p.useEffect(function(){e&&(r.current=t)}),r.current}function co(t,e){switch(e.type){case"ADD":return[].concat(t,[e.toastId]).filter(function(r){return r!==e.staleId});case"REMOVE":return Rt(e.toastId)?t.filter(function(r){return r!==e.toastId}):[]}}function fo(t){var e=p.useReducer(function(x){return x+1},0),r=e[1],o=p.useReducer(co,[]),n=o[0],a=o[1],s=p.useRef(null),l=Ee(0),i=Ee([]),u=Ee({}),c=Ee({toastKey:1,displayedToast:0,props:t,containerId:null,isToastActive:d,getToast:function(f){return u[f]||null}});p.useEffect(function(){return c.containerId=t.containerId,te.cancelEmit(3).on(0,m).on(1,function(x){return s.current&&y(x)}).on(5,g).emit(2,c),function(){return te.emit(3,c)}},[]),p.useEffect(function(){c.isToastActive=d,c.displayedToast=n.length,te.emit(4,n.length,t.containerId)},[n]),p.useEffect(function(){c.props=t});function d(x){return n.indexOf(x)!==-1}function g(x){var f=x.containerId,O=c.props,C=O.limit,S=O.enableMultiContainer;C&&(!f||c.containerId===f&&S)&&(l-=i.length,i=[])}function y(x){var f=i.length;if(l=Rt(x)?l-1:l-c.displayedToast,l<0&&(l=0),f>0){var O=Rt(x)?1:c.props.limit;if(f===1||O===1)c.displayedToast++,b();else{var C=O>f?f:O;c.displayedToast=C;for(var S=0;S<C;S++)b()}}a({type:"REMOVE",toastId:x})}function b(){var x=i.shift(),f=x.toastContent,O=x.toastProps,C=x.staleId;setTimeout(function(){h(f,O,C)},500)}function v(x){var f=x.containerId,O=x.toastId,C=x.updateId;return!!(!s.current||c.props.enableMultiContainer&&f!==c.props.containerId||c.isToastActive(O)&&C==null)}function m(x,f){var O=f.delay,C=f.staleId,S=Ut(f,["delay","staleId"]);if(!(!yt(x)||v(S))){var V=S.toastId,R=S.updateId,w=c.props,A=c.isToastActive,z=function(){return y(V)},X=!A(V);X&&l++;var k={toastId:V,updateId:R,key:S.key||c.toastKey++,type:S.type,closeToast:z,closeButton:S.closeButton,rtl:w.rtl,position:S.position||w.position,transition:S.transition||w.transition,className:et(S.className||w.toastClassName),bodyClassName:et(S.bodyClassName||w.bodyClassName),style:S.style||w.toastStyle,bodyStyle:S.bodyStyle||w.bodyStyle,onClick:S.onClick||w.onClick,pauseOnHover:Ve(S.pauseOnHover)?S.pauseOnHover:w.pauseOnHover,pauseOnFocusLoss:Ve(S.pauseOnFocusLoss)?S.pauseOnFocusLoss:w.pauseOnFocusLoss,draggable:Ve(S.draggable)?S.draggable:w.draggable,draggablePercent:Ae(S.draggablePercent)?S.draggablePercent:w.draggablePercent,closeOnClick:Ve(S.closeOnClick)?S.closeOnClick:w.closeOnClick,progressClassName:et(S.progressClassName||w.progressClassName),progressStyle:S.progressStyle||w.progressStyle,autoClose:so(S.autoClose,w.autoClose),hideProgressBar:Ve(S.hideProgressBar)?S.hideProgressBar:w.hideProgressBar,progress:S.progress,role:$e(S.role)?S.role:w.role,deleteToast:function(){E(V)}};K(S.onOpen)&&(k.onOpen=S.onOpen),K(S.onClose)&&(k.onClose=S.onClose);var N=w.closeButton;S.closeButton===!1||yt(S.closeButton)?N=S.closeButton:S.closeButton===!0&&(N=yt(w.closeButton)?w.closeButton:!0),k.closeButton=N;var $=x;p.isValidElement(x)&&!$e(x.type)?$=p.cloneElement(x,{closeToast:z}):K(x)&&($=x({closeToast:z})),w.limit&&w.limit>0&&l>w.limit&&X?i.push({toastContent:$,toastProps:k,staleId:C}):Ae(O)&&O>0?setTimeout(function(){h($,k,C)},O):h($,k,C)}}function h(x,f,O){var C=f.toastId;u[C]={content:x,props:f},a({type:"ADD",toastId:C,staleId:O})}function E(x){delete u[x],r()}function T(x){for(var f={},O=t.newestOnTop?Object.keys(u).reverse():Object.keys(u),C=0;C<O.length;C++){var S=u[O[C]],V=S.props.position;f[V]||(f[V]=[]),f[V].push(S)}return Object.keys(f).map(function(R){return x(R,f[R])})}return{getToastToRender:T,collection:u,containerRef:s,isToastActive:d}}function sn(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function po(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function mo(t){var e=p.useState(!0),r=e[0],o=e[1],n=p.useState(!1),a=n[0],s=n[1],l=p.useRef(null),i=Ee({start:0,x:0,y:0,deltaX:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),u=Ee(t,!0),c=t.autoClose,d=t.pauseOnHover,g=t.closeToast,y=t.onClick,b=t.closeOnClick;p.useEffect(function(){return K(t.onOpen)&&t.onOpen(p.isValidElement(t.children)&&t.children.props),function(){K(u.onClose)&&u.onClose(p.isValidElement(u.children)&&u.children.props)}},[]),p.useEffect(function(){return t.draggable&&f(),function(){t.draggable&&O()}},[t.draggable]),p.useEffect(function(){return t.pauseOnFocusLoss&&T(),function(){t.pauseOnFocusLoss&&x()}},[t.pauseOnFocusLoss]);function v(R){var w=l.current;i.canCloseOnClick=!0,i.canDrag=!0,i.boundingRect=w.getBoundingClientRect(),w.style.transition="",i.start=i.x=sn(R.nativeEvent),i.removalDistance=w.offsetWidth*(t.draggablePercent/100)}function m(){if(i.boundingRect){var R=i.boundingRect,w=R.top,A=R.bottom,z=R.left,X=R.right;t.pauseOnHover&&i.x>=z&&i.x<=X&&i.y>=w&&i.y<=A?E():h()}}function h(){o(!0)}function E(){o(!1)}function T(){window.addEventListener("focus",h),window.addEventListener("blur",E)}function x(){window.removeEventListener("focus",h),window.removeEventListener("blur",E)}function f(){document.addEventListener("mousemove",C),document.addEventListener("mouseup",S),document.addEventListener("touchmove",C),document.addEventListener("touchend",S)}function O(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",S),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",S)}function C(R){var w=l.current;i.canDrag&&(r&&E(),i.x=sn(R),i.deltaX=i.x-i.start,i.y=po(R),i.start!==i.x&&(i.canCloseOnClick=!1),w.style.transform="translateX("+i.deltaX+"px)",w.style.opacity=""+(1-Math.abs(i.deltaX/i.removalDistance)))}function S(){var R=l.current;if(i.canDrag){if(i.canDrag=!1,Math.abs(i.deltaX)>i.removalDistance){s(!0),t.closeToast();return}R.style.transition="transform 0.2s, opacity 0.2s",R.style.transform="translateX(0)",R.style.opacity="1"}}var V={onMouseDown:v,onTouchStart:v,onMouseUp:m,onTouchEnd:m};return c&&d&&(V.onMouseEnter=E,V.onMouseLeave=h),b&&(V.onClick=function(R){y&&y(R),i.canCloseOnClick&&g()}),{playToast:h,pauseToast:E,isRunning:r,preventExitTransition:a,toastRef:l,eventHandlers:V}}function Wn(t){var e=t.closeToast,r=t.type,o=t.ariaLabel,n=o===void 0?"close":o;return p.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+r,type:"button",onClick:function(s){s.stopPropagation(),e(s)},"aria-label":n},p.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},p.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function qn(t){var e,r,o=t.delay,n=t.isRunning,a=t.closeToast,s=t.type,l=t.hide,i=t.className,u=t.style,c=t.controlledProgress,d=t.progress,g=t.rtl,y=t.isIn,b=Se({},u,{animationDuration:o+"ms",animationPlayState:n?"running":"paused",opacity:l?0:1});c&&(b.transform="scaleX("+d+")");var v=["Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+s,(e={},e["Toastify__progress-bar--rtl"]=g,e)],m=K(i)?i({rtl:g,type:s,defaultClassName:ye.apply(void 0,v)}):ye.apply(void 0,[].concat(v,[i])),h=(r={},r[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]=c&&d<1?null:function(){y&&a()},r);return p.createElement("div",Object.assign({className:m,style:b},h))}qn.defaultProps={type:ve.DEFAULT,hide:!1};var ho=function(e){var r,o=mo(e),n=o.isRunning,a=o.preventExitTransition,s=o.toastRef,l=o.eventHandlers,i=e.closeButton,u=e.children,c=e.autoClose,d=e.onClick,g=e.type,y=e.hideProgressBar,b=e.closeToast,v=e.transition,m=e.position,h=e.className,E=e.style,T=e.bodyClassName,x=e.bodyStyle,f=e.progressClassName,O=e.progressStyle,C=e.updateId,S=e.role,V=e.progress,R=e.rtl,w=e.toastId,A=e.deleteToast,z=["Toastify__toast","Toastify__toast--"+g,(r={},r["Toastify__toast--rtl"]=R,r)],X=K(h)?h({rtl:R,position:m,type:g,defaultClassName:ye.apply(void 0,z)}):ye.apply(void 0,[].concat(z,[h])),k=!!V;function N($){if($){var q={closeToast:b,type:g};if(K($))return $(q);if(p.isValidElement($))return p.cloneElement($,q)}}return p.createElement(v,{in:e.in,appear:!0,done:A,position:m,preventExitTransition:a,nodeRef:s},p.createElement("div",Object.assign({id:w,onClick:d,className:X||void 0},l,{style:E,ref:s}),p.createElement("div",Object.assign({},e.in&&{role:S},{className:K(T)?T({type:g}):ye("Toastify__toast-body",T),style:x}),u),N(i),(c||k)&&p.createElement(qn,Object.assign({},C&&!k?{key:"pb-"+C}:{},{rtl:R,delay:c,isRunning:n,isIn:e.in,closeToast:b,hide:y,type:g,style:O,className:f,controlledProgress:k,progress:V}))))},vo=uo({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),go=function(e){var r=e.children,o=e.className,n=e.style,a=Ut(e,["children","className","style"]);return delete a.in,p.createElement("div",{className:o,style:n},p.Children.map(r,function(s){return p.cloneElement(s,a)}))},zt=function(e){var r=fo(e),o=r.getToastToRender,n=r.containerRef,a=r.isToastActive,s=e.className,l=e.style,i=e.rtl,u=e.containerId;return p.createElement("div",{ref:n,className:"Toastify",id:u},o(function(c,d){var g,y,b={className:K(s)?s({position:c,rtl:i,defaultClassName:ye("Toastify__toast-container","Toastify__toast-container--"+c,(g={},g["Toastify__toast-container--rtl"]=i,g))}):ye("Toastify__toast-container","Toastify__toast-container--"+c,(y={},y["Toastify__toast-container--rtl"]=i,y),et(s)),style:d.length===0?Se({},l,{pointerEvents:"none"}):Se({},l)};return p.createElement(go,Object.assign({},b,{key:"container-"+c}),d.map(function(v){var m=v.content,h=v.props;return p.createElement(ho,Object.assign({},h,{in:a(h.toastId),key:"toast-"+h.key,closeButton:h.closeButton===!0?Wn:h.closeButton}),m)}))}))};zt.defaultProps={position:zn.TOP_RIGHT,transition:vo,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:Wn,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,role:"alert"};var Ie=new Map,Vt,Ne,Gn,Lt=[],Dt=!1;function pt(){return Ie.size>0}function bo(t){return pt()?Ie.get(t||Vt):null}function yo(t,e){var r=e.containerId,o=bo(r);return o?o.getToast(t):null}function Xn(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function So(t){return t&&($e(t.toastId)||Ae(t.toastId))?t.toastId:Xn()}function xe(t,e){return pt()?te.emit(0,t,e):(Lt.push({content:t,options:e}),Dt&&Un&&(Dt=!1,Ne=document.createElement("div"),document.body.appendChild(Ne),$n.render(p.createElement(zt,Object.assign({},Gn)),Ne))),e.toastId}function Pe(t,e){return Se({},e,{type:e&&e.type||t,toastId:So(e)})}var W=function(e,r){return xe(e,Pe(ve.DEFAULT,r))};W.success=function(t,e){return xe(t,Pe(ve.SUCCESS,e))};W.info=function(t,e){return xe(t,Pe(ve.INFO,e))};W.error=function(t,e){return xe(t,Pe(ve.ERROR,e))};W.warning=function(t,e){return xe(t,Pe(ve.WARNING,e))};W.dark=function(t,e){return xe(t,Pe(ve.DARK,e))};W.warn=W.warning;W.dismiss=function(t){return pt()&&te.emit(1,t)};W.clearWaitingQueue=function(t){return t===void 0&&(t={}),pt()&&te.emit(5,t)};W.isActive=function(t){var e=!1;return Ie.forEach(function(r){r.isToastActive&&r.isToastActive(t)&&(e=!0)}),e};W.update=function(t,e){e===void 0&&(e={}),setTimeout(function(){var r=yo(t,e);if(r){var o=r.props,n=r.content,a=Se({},o,e,{toastId:e.toastId||t,updateId:Xn()});a.toastId!==t&&(a.staleId=t);var s=typeof a.render<"u"?a.render:n;delete a.render,xe(s,a)}},0)};W.done=function(t){W.update(t,{progress:1})};W.onChange=function(t){return K(t)&&te.on(4,t),function(){K(t)&&te.off(4,t)}};W.configure=function(t){t===void 0&&(t={}),Dt=!0,Gn=t};W.POSITION=zn;W.TYPE=ve;te.on(2,function(t){Vt=t.containerId||t,Ie.set(Vt,t),Lt.forEach(function(e){te.emit(0,e.content,e.options)}),Lt=[]}).on(3,function(t){Ie.delete(t.containerId||t),Ie.size===0&&te.off(0).off(1).off(5),Un&&Ne&&document.body.removeChild(Ne)});function Yn(){return I.jsx(xo,{children:I.jsx(zt,{autoClose:3e3,hideProgressBar:!0,position:"bottom-center"})})}function _e(t="No message specified"){W.dark(t)}const xo=Bt.div`
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
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1),
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
    background: linear-gradient(
      to right,
      #4cd964,
      #5ac8fa,
      #007aff,
      #34aadc,
      #5856d6,
      #ff2d55
    );
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
`;Yn.__docgenInfo={description:"",methods:[],displayName:"Toast"};var Co=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function To(t){var e=t.defaultInputValue,r=e===void 0?"":e,o=t.defaultMenuIsOpen,n=o===void 0?!1:o,a=t.defaultValue,s=a===void 0?null:a,l=t.inputValue,i=t.menuIsOpen,u=t.onChange,c=t.onInputChange,d=t.onMenuClose,g=t.onMenuOpen,y=t.value,b=ue(t,Co),v=p.useState(l!==void 0?l:r),m=se(v,2),h=m[0],E=m[1],T=p.useState(i!==void 0?i:n),x=se(T,2),f=x[0],O=x[1],C=p.useState(y!==void 0?y:s),S=se(C,2),V=S[0],R=S[1],w=p.useCallback(function(q,de){typeof u=="function"&&u(q,de),R(q)},[u]),A=p.useCallback(function(q,de){var fe;typeof c=="function"&&(fe=c(q,de)),E(fe!==void 0?fe:q)},[c]),z=p.useCallback(function(){typeof g=="function"&&g(),O(!0)},[g]),X=p.useCallback(function(){typeof d=="function"&&d(),O(!1)},[d]),k=l!==void 0?l:h,N=i!==void 0?i:f,$=y!==void 0?y:V;return M(M({},b),{},{inputValue:k,menuIsOpen:N,onChange:w,onInputChange:A,onMenuClose:X,onMenuOpen:z,value:$})}function Oo(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Eo(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Io=(function(){function t(r){var o=this;this._insertTag=function(n){var a;o.tags.length===0?o.insertionPoint?a=o.insertionPoint.nextSibling:o.prepend?a=o.container.firstChild:a=o.before:a=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(n,a),o.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(o){o.forEach(this._insertTag)},e.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Eo(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Oo(n);try{a.insertRule(o,a.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(o));this.ctr++},e.flush=function(){this.tags.forEach(function(o){var n;return(n=o.parentNode)==null?void 0:n.removeChild(o)}),this.tags=[],this.ctr=0},t})(),Y="-ms-",at="-moz-",L="-webkit-",Kn="comm",Wt="rule",qt="decl",wo="@import",Qn="@keyframes",_o="@layer",Mo=Math.abs,mt=String.fromCharCode,Po=Object.assign;function Ro(t,e){return G(t,0)^45?(((e<<2^G(t,0))<<2^G(t,1))<<2^G(t,2))<<2^G(t,3):0}function Jn(t){return t.trim()}function Vo(t,e){return(t=e.exec(t))?t[0]:t}function D(t,e,r){return t.replace(e,r)}function Ft(t,e){return t.indexOf(e)}function G(t,e){return t.charCodeAt(e)|0}function je(t,e,r){return t.slice(e,r)}function ne(t){return t.length}function Gt(t){return t.length}function Ye(t,e){return e.push(t),t}function Lo(t,e){return t.map(e).join("")}var ht=1,Me=1,Zn=0,Q=0,H=0,Re="";function vt(t,e,r,o,n,a,s){return{value:t,root:e,parent:r,type:o,props:n,children:a,line:ht,column:Me,length:s,return:""}}function Le(t,e){return Po(vt("",null,null,"",null,null,0),t,{length:-t.length},e)}function Do(){return H}function Fo(){return H=Q>0?G(Re,--Q):0,Me--,H===10&&(Me=1,ht--),H}function Z(){return H=Q<Zn?G(Re,Q++):0,Me++,H===10&&(Me=1,ht++),H}function oe(){return G(Re,Q)}function tt(){return Q}function ze(t,e){return je(Re,t,e)}function He(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function er(t){return ht=Me=1,Zn=ne(Re=t),Q=0,[]}function tr(t){return Re="",t}function nt(t){return Jn(ze(Q-1,kt(t===91?t+2:t===40?t+1:t)))}function ko(t){for(;(H=oe())&&H<33;)Z();return He(t)>2||He(H)>3?"":" "}function No(t,e){for(;--e&&Z()&&!(H<48||H>102||H>57&&H<65||H>70&&H<97););return ze(t,tt()+(e<6&&oe()==32&&Z()==32))}function kt(t){for(;Z();)switch(H){case t:return Q;case 34:case 39:t!==34&&t!==39&&kt(H);break;case 40:t===41&&kt(t);break;case 92:Z();break}return Q}function Ao(t,e){for(;Z()&&t+H!==57;)if(t+H===84&&oe()===47)break;return"/*"+ze(e,Q-1)+"*"+mt(t===47?t:Z())}function $o(t){for(;!He(oe());)Z();return ze(t,Q)}function jo(t){return tr(rt("",null,null,null,[""],t=er(t),0,[0],t))}function rt(t,e,r,o,n,a,s,l,i){for(var u=0,c=0,d=s,g=0,y=0,b=0,v=1,m=1,h=1,E=0,T="",x=n,f=a,O=o,C=T;m;)switch(b=E,E=Z()){case 40:if(b!=108&&G(C,d-1)==58){Ft(C+=D(nt(E),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:C+=nt(E);break;case 9:case 10:case 13:case 32:C+=ko(b);break;case 92:C+=No(tt()-1,7);continue;case 47:switch(oe()){case 42:case 47:Ye(Ho(Ao(Z(),tt()),e,r),i);break;default:C+="/"}break;case 123*v:l[u++]=ne(C)*h;case 125*v:case 59:case 0:switch(E){case 0:case 125:m=0;case 59+c:h==-1&&(C=D(C,/\f/g,"")),y>0&&ne(C)-d&&Ye(y>32?un(C+";",o,r,d-1):un(D(C," ","")+";",o,r,d-2),i);break;case 59:C+=";";default:if(Ye(O=ln(C,e,r,u,c,n,l,T,x=[],f=[],d),a),E===123)if(c===0)rt(C,e,O,O,x,a,d,l,f);else switch(g===99&&G(C,3)===110?100:g){case 100:case 108:case 109:case 115:rt(t,O,O,o&&Ye(ln(t,O,O,0,0,n,l,T,n,x=[],d),f),n,f,d,l,o?x:f);break;default:rt(C,O,O,O,[""],f,0,l,f)}}u=c=y=0,v=h=1,T=C="",d=s;break;case 58:d=1+ne(C),y=b;default:if(v<1){if(E==123)--v;else if(E==125&&v++==0&&Fo()==125)continue}switch(C+=mt(E),E*v){case 38:h=c>0?1:(C+="\f",-1);break;case 44:l[u++]=(ne(C)-1)*h,h=1;break;case 64:oe()===45&&(C+=nt(Z())),g=oe(),c=d=ne(T=C+=$o(tt())),E++;break;case 45:b===45&&ne(C)==2&&(v=0)}}return a}function ln(t,e,r,o,n,a,s,l,i,u,c){for(var d=n-1,g=n===0?a:[""],y=Gt(g),b=0,v=0,m=0;b<o;++b)for(var h=0,E=je(t,d+1,d=Mo(v=s[b])),T=t;h<y;++h)(T=Jn(v>0?g[h]+" "+E:D(E,/&\f/g,g[h])))&&(i[m++]=T);return vt(t,e,r,n===0?Wt:l,i,u,c)}function Ho(t,e,r){return vt(t,e,r,Kn,mt(Do()),je(t,2,-2),0)}function un(t,e,r,o){return vt(t,e,r,qt,je(t,0,o),je(t,o+1,-1),o)}function we(t,e){for(var r="",o=Gt(t),n=0;n<o;n++)r+=e(t[n],n,t,e)||"";return r}function Bo(t,e,r,o){switch(t.type){case _o:if(t.children.length)break;case wo:case qt:return t.return=t.return||t.value;case Kn:return"";case Qn:return t.return=t.value+"{"+we(t.children,o)+"}";case Wt:t.value=t.props.join(",")}return ne(r=we(t.children,o))?t.return=t.value+"{"+r+"}":""}function Uo(t){var e=Gt(t);return function(r,o,n,a){for(var s="",l=0;l<e;l++)s+=t[l](r,o,n,a)||"";return s}}function zo(t){return function(e){e.root||(e=e.return)&&t(e)}}var Wo=function(e,r,o){for(var n=0,a=0;n=a,a=oe(),n===38&&a===12&&(r[o]=1),!He(a);)Z();return ze(e,Q)},qo=function(e,r){var o=-1,n=44;do switch(He(n)){case 0:n===38&&oe()===12&&(r[o]=1),e[o]+=Wo(Q-1,r,o);break;case 2:e[o]+=nt(n);break;case 4:if(n===44){e[++o]=oe()===58?"&\f":"",r[o]=e[o].length;break}default:e[o]+=mt(n)}while(n=Z());return e},Go=function(e,r){return tr(qo(er(e),r))},cn=new WeakMap,Xo=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,o=e.parent,n=e.column===o.column&&e.line===o.line;o.type!=="rule";)if(o=o.parent,!o)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!cn.get(o))&&!n){cn.set(e,!0);for(var a=[],s=Go(r,a),l=o.props,i=0,u=0;i<s.length;i++)for(var c=0;c<l.length;c++,u++)e.props[u]=a[i]?s[i].replace(/&\f/g,l[c]):l[c]+" "+s[i]}}},Yo=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function nr(t,e){switch(Ro(t,e)){case 5103:return L+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return L+t+at+t+Y+t+t;case 6828:case 4268:return L+t+Y+t+t;case 6165:return L+t+Y+"flex-"+t+t;case 5187:return L+t+D(t,/(\w+).+(:[^]+)/,L+"box-$1$2"+Y+"flex-$1$2")+t;case 5443:return L+t+Y+"flex-item-"+D(t,/flex-|-self/,"")+t;case 4675:return L+t+Y+"flex-line-pack"+D(t,/align-content|flex-|-self/,"")+t;case 5548:return L+t+Y+D(t,"shrink","negative")+t;case 5292:return L+t+Y+D(t,"basis","preferred-size")+t;case 6060:return L+"box-"+D(t,"-grow","")+L+t+Y+D(t,"grow","positive")+t;case 4554:return L+D(t,/([^-])(transform)/g,"$1"+L+"$2")+t;case 6187:return D(D(D(t,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),t,"")+t;case 5495:case 3959:return D(t,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return D(D(t,/(.+:)(flex-)?(.*)/,L+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+t+t;case 4095:case 3583:case 4068:case 2532:return D(t,/(.+)-inline(.+)/,L+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ne(t)-1-e>6)switch(G(t,e+1)){case 109:if(G(t,e+4)!==45)break;case 102:return D(t,/(.+:)(.+)-([^]+)/,"$1"+L+"$2-$3$1"+at+(G(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ft(t,"stretch")?nr(D(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(G(t,e+1)!==115)break;case 6444:switch(G(t,ne(t)-3-(~Ft(t,"!important")&&10))){case 107:return D(t,":",":"+L)+t;case 101:return D(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+L+(G(t,14)===45?"inline-":"")+"box$3$1"+L+"$2$3$1"+Y+"$2box$3")+t}break;case 5936:switch(G(t,e+11)){case 114:return L+t+Y+D(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return L+t+Y+D(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return L+t+Y+D(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return L+t+Y+t+t}return t}var Ko=function(e,r,o,n){if(e.length>-1&&!e.return)switch(e.type){case qt:e.return=nr(e.value,e.length);break;case Qn:return we([Le(e,{value:D(e.value,"@","@"+L)})],n);case Wt:if(e.length)return Lo(e.props,function(a){switch(Vo(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return we([Le(e,{props:[D(a,/:(read-\w+)/,":"+at+"$1")]})],n);case"::placeholder":return we([Le(e,{props:[D(a,/:(plac\w+)/,":"+L+"input-$1")]}),Le(e,{props:[D(a,/:(plac\w+)/,":"+at+"$1")]}),Le(e,{props:[D(a,/:(plac\w+)/,Y+"input-$1")]})],n)}return""})}},Qo=[Ko],Jo=function(e){var r=e.key;if(r==="css"){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(v){var m=v.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var n=e.stylisPlugins||Qo,a={},s,l=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(v){for(var m=v.getAttribute("data-emotion").split(" "),h=1;h<m.length;h++)a[m[h]]=!0;l.push(v)});var i,u=[Xo,Yo];{var c,d=[Bo,zo(function(v){c.insert(v)})],g=Uo(u.concat(n,d)),y=function(m){return we(jo(m),g)};i=function(m,h,E,T){c=E,y(m?m+"{"+h.styles+"}":h.styles),T&&(b.inserted[h.name]=!0)}}var b={key:r,sheet:new Io({key:r,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:i};return b.sheet.hydrate(l),b},St={exports:{}},F={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dn;function Zo(){if(dn)return F;dn=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,n=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,i=t?Symbol.for("react.async_mode"):60111,u=t?Symbol.for("react.concurrent_mode"):60111,c=t?Symbol.for("react.forward_ref"):60112,d=t?Symbol.for("react.suspense"):60113,g=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,v=t?Symbol.for("react.block"):60121,m=t?Symbol.for("react.fundamental"):60117,h=t?Symbol.for("react.responder"):60118,E=t?Symbol.for("react.scope"):60119;function T(f){if(typeof f=="object"&&f!==null){var O=f.$$typeof;switch(O){case e:switch(f=f.type,f){case i:case u:case o:case a:case n:case d:return f;default:switch(f=f&&f.$$typeof,f){case l:case c:case b:case y:case s:return f;default:return O}}case r:return O}}}function x(f){return T(f)===u}return F.AsyncMode=i,F.ConcurrentMode=u,F.ContextConsumer=l,F.ContextProvider=s,F.Element=e,F.ForwardRef=c,F.Fragment=o,F.Lazy=b,F.Memo=y,F.Portal=r,F.Profiler=a,F.StrictMode=n,F.Suspense=d,F.isAsyncMode=function(f){return x(f)||T(f)===i},F.isConcurrentMode=x,F.isContextConsumer=function(f){return T(f)===l},F.isContextProvider=function(f){return T(f)===s},F.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===e},F.isForwardRef=function(f){return T(f)===c},F.isFragment=function(f){return T(f)===o},F.isLazy=function(f){return T(f)===b},F.isMemo=function(f){return T(f)===y},F.isPortal=function(f){return T(f)===r},F.isProfiler=function(f){return T(f)===a},F.isStrictMode=function(f){return T(f)===n},F.isSuspense=function(f){return T(f)===d},F.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===o||f===u||f===a||f===n||f===d||f===g||typeof f=="object"&&f!==null&&(f.$$typeof===b||f.$$typeof===y||f.$$typeof===s||f.$$typeof===l||f.$$typeof===c||f.$$typeof===m||f.$$typeof===h||f.$$typeof===E||f.$$typeof===v)},F.typeOf=T,F}var fn;function ea(){return fn||(fn=1,St.exports=Zo()),St.exports}var xt,pn;function ta(){if(pn)return xt;pn=1;var t=ea(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[t.ForwardRef]=o,a[t.Memo]=n;function s(b){return t.isMemo(b)?n:a[b.$$typeof]||e}var l=Object.defineProperty,i=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,g=Object.prototype;function y(b,v,m){if(typeof v!="string"){if(g){var h=d(v);h&&h!==g&&y(b,h,m)}var E=i(v);u&&(E=E.concat(u(v)));for(var T=s(b),x=s(v),f=0;f<E.length;++f){var O=E[f];if(!r[O]&&!(m&&m[O])&&!(x&&x[O])&&!(T&&T[O])){var C=c(v,O);try{l(b,O,C)}catch{}}}}return b}return xt=y,xt}ta();var na=!0;function ra(t,e,r){var o="";return r.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):n&&(o+=n+" ")}),o}var rr=function(e,r,o){var n=e.key+"-"+r.name;(o===!1||na===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},oa=function(e,r,o){rr(e,r,o);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var a=r;do e.insert(r===a?"."+n:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function aa(t){for(var e=0,r,o=0,n=t.length;n>=4;++o,n-=4)r=t.charCodeAt(o)&255|(t.charCodeAt(++o)&255)<<8|(t.charCodeAt(++o)&255)<<16|(t.charCodeAt(++o)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(o+2)&255)<<16;case 2:e^=(t.charCodeAt(o+1)&255)<<8;case 1:e^=t.charCodeAt(o)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var ia={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},sa=/[A-Z]|^ms/g,la=/_EMO_([^_]+?)_([^]*?)_EMO_/g,or=function(e){return e.charCodeAt(1)===45},mn=function(e){return e!=null&&typeof e!="boolean"},Ct=oo(function(t){return or(t)?t:t.replace(sa,"-$&").toLowerCase()}),hn=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(la,function(o,n,a){return re={name:n,styles:a,next:re},n})}return ia[e]!==1&&!or(e)&&typeof r=="number"&&r!==0?r+"px":r};function Be(t,e,r){if(r==null)return"";var o=r;if(o.__emotion_styles!==void 0)return o;switch(typeof r){case"boolean":return"";case"object":{var n=r;if(n.anim===1)return re={name:n.name,styles:n.styles,next:re},n.name;var a=r;if(a.styles!==void 0){var s=a.next;if(s!==void 0)for(;s!==void 0;)re={name:s.name,styles:s.styles,next:re},s=s.next;var l=a.styles+";";return l}return ua(t,e,r)}case"function":{if(t!==void 0){var i=re,u=r(t);return re=i,Be(t,e,u)}break}}var c=r;return c}function ua(t,e,r){var o="";if(Array.isArray(r))for(var n=0;n<r.length;n++)o+=Be(t,e,r[n])+";";else for(var a in r){var s=r[a];if(typeof s!="object"){var l=s;mn(l)&&(o+=Ct(a)+":"+hn(a,l)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&e==null)for(var i=0;i<s.length;i++)mn(s[i])&&(o+=Ct(a)+":"+hn(a,s[i])+";");else{var u=Be(t,e,s);switch(a){case"animation":case"animationName":{o+=Ct(a)+":"+u+";";break}default:o+=a+"{"+u+"}"}}}return o}var vn=/label:\s*([^\s;{]+)\s*(;|$)/g,re;function ar(t,e,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,n="";re=void 0;var a=t[0];if(a==null||a.raw===void 0)o=!1,n+=Be(r,e,a);else{var s=a;n+=s[0]}for(var l=1;l<t.length;l++)if(n+=Be(r,e,t[l]),o){var i=a;n+=i[l]}vn.lastIndex=0;for(var u="",c;(c=vn.exec(n))!==null;)u+="-"+c[1];var d=aa(n)+u;return{name:d,styles:n,next:re}}var ca=function(e){return e()},da=on.useInsertionEffect?on.useInsertionEffect:!1,fa=da||ca,ir=p.createContext(typeof HTMLElement<"u"?Jo({key:"css"}):null);ir.Provider;var pa=function(e){return p.forwardRef(function(r,o){var n=p.useContext(ir);return e(r,n,o)})},ma=p.createContext({}),Xt={}.hasOwnProperty,Nt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ha=function(e,r){var o={};for(var n in r)Xt.call(r,n)&&(o[n]=r[n]);return o[Nt]=e,o},va=function(e){var r=e.cache,o=e.serialized,n=e.isStringTag;return rr(r,o,n),fa(function(){return oa(r,o,n)}),null},ga=pa(function(t,e,r){var o=t.css;typeof o=="string"&&e.registered[o]!==void 0&&(o=e.registered[o]);var n=t[Nt],a=[o],s="";typeof t.className=="string"?s=ra(e.registered,a,t.className):t.className!=null&&(s=t.className+" ");var l=ar(a,void 0,p.useContext(ma));s+=e.key+"-"+l.name;var i={};for(var u in t)Xt.call(t,u)&&u!=="css"&&u!==Nt&&(i[u]=t[u]);return i.className=s,r&&(i.ref=r),p.createElement(p.Fragment,null,p.createElement(va,{cache:e,serialized:l,isStringTag:typeof n=="string"}),p.createElement(n,i))}),ba=ga,_=function(e,r){var o=arguments;if(r==null||!Xt.call(r,"css"))return p.createElement.apply(void 0,o);var n=o.length,a=new Array(n);a[0]=ba,a[1]=ha(e,r);for(var s=2;s<n;s++)a[s]=o[s];return p.createElement.apply(null,a)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(_||(_={}));function Yt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return ar(e)}function ya(){var t=Yt.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function Sa(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const xa=Math.min,Ca=Math.max,it=Math.round,Ke=Math.floor,st=t=>({x:t,y:t});function Ta(t){const{x:e,y:r,width:o,height:n}=t;return{width:o,height:n,top:r,left:e,right:e+o,bottom:r+n,x:e,y:r}}function gt(){return typeof window<"u"}function sr(t){return ur(t)?(t.nodeName||"").toLowerCase():"#document"}function le(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function lr(t){var e;return(e=(ur(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ur(t){return gt()?t instanceof Node||t instanceof le(t).Node:!1}function Oa(t){return gt()?t instanceof Element||t instanceof le(t).Element:!1}function Kt(t){return gt()?t instanceof HTMLElement||t instanceof le(t).HTMLElement:!1}function gn(t){return!gt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof le(t).ShadowRoot}function cr(t){const{overflow:e,overflowX:r,overflowY:o,display:n}=Qt(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&n!=="inline"&&n!=="contents"}let Tt;function Ea(){return Tt==null&&(Tt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Tt}function Ia(t){return/^(html|body|#document)$/.test(sr(t))}function Qt(t){return le(t).getComputedStyle(t)}function wa(t){if(sr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||gn(t)&&t.host||lr(t);return gn(e)?e.host:e}function dr(t){const e=wa(t);return Ia(e)?t.ownerDocument?t.ownerDocument.body:t.body:Kt(e)&&cr(e)?e:dr(e)}function lt(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const n=dr(t),a=n===((o=t.ownerDocument)==null?void 0:o.body),s=le(n);if(a){const l=At(s);return e.concat(s,s.visualViewport||[],cr(n)?n:[],l&&r?lt(l):[])}else return e.concat(n,lt(n,[],r))}function At(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _a(t){const e=Qt(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const n=Kt(t),a=n?t.offsetWidth:r,s=n?t.offsetHeight:o,l=it(r)!==a||it(o)!==s;return l&&(r=a,o=s),{width:r,height:o,$:l}}function Jt(t){return Oa(t)?t:t.contextElement}function bn(t){const e=Jt(t);if(!Kt(e))return st(1);const r=e.getBoundingClientRect(),{width:o,height:n,$:a}=_a(e);let s=(a?it(r.width):r.width)/o,l=(a?it(r.height):r.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Ma=st(0);function Pa(t){const e=le(t);return!Ea()||!e.visualViewport?Ma:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ra(t,e,r){return!1}function yn(t,e,r,o){e===void 0&&(e=!1);const n=t.getBoundingClientRect(),a=Jt(t);let s=st(1);e&&(s=bn(t));const l=Ra()?Pa(a):st(0);let i=(n.left+l.x)/s.x,u=(n.top+l.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(a){const g=le(a),y=o;let b=g,v=At(b);for(;v&&o&&y!==b;){const m=bn(v),h=v.getBoundingClientRect(),E=Qt(v),T=h.left+(v.clientLeft+parseFloat(E.paddingLeft))*m.x,x=h.top+(v.clientTop+parseFloat(E.paddingTop))*m.y;i*=m.x,u*=m.y,c*=m.x,d*=m.y,i+=T,u+=x,b=le(v),v=At(b)}}return Ta({width:c,height:d,x:i,y:u})}function fr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Va(t,e){let r=null,o;const n=lr(t);function a(){var l;clearTimeout(o),(l=r)==null||l.disconnect(),r=null}function s(l,i){l===void 0&&(l=!1),i===void 0&&(i=1),a();const u=t.getBoundingClientRect(),{left:c,top:d,width:g,height:y}=u;if(l||e(),!g||!y)return;const b=Ke(d),v=Ke(n.clientWidth-(c+g)),m=Ke(n.clientHeight-(d+y)),h=Ke(c),T={rootMargin:-b+"px "+-v+"px "+-m+"px "+-h+"px",threshold:Ca(0,xa(1,i))||1};let x=!0;function f(O){const C=O[0].intersectionRatio;if(C!==i){if(!x)return s();C?s(!1,C):o=setTimeout(()=>{s(!1,1e-7)},1e3)}C===1&&!fr(u,t.getBoundingClientRect())&&s(),x=!1}try{r=new IntersectionObserver(f,{...T,root:n.ownerDocument})}catch{r=new IntersectionObserver(f,T)}r.observe(t)}return s(!0),a}function La(t,e,r,o){o===void 0&&(o={});const{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=Jt(t),c=n||a?[...u?lt(u):[],...e?lt(e):[]]:[];c.forEach(h=>{n&&h.addEventListener("scroll",r,{passive:!0}),a&&h.addEventListener("resize",r)});const d=u&&l?Va(u,r):null;let g=-1,y=null;s&&(y=new ResizeObserver(h=>{let[E]=h;E&&E.target===u&&y&&e&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var T;(T=y)==null||T.observe(e)})),r()}),u&&!i&&y.observe(u),e&&y.observe(e));let b,v=i?yn(t):null;i&&m();function m(){const h=yn(t);v&&!fr(v,h)&&r(),v=h,b=requestAnimationFrame(m)}return r(),()=>{var h;c.forEach(E=>{n&&E.removeEventListener("scroll",r),a&&E.removeEventListener("resize",r)}),d==null||d(),(h=y)==null||h.disconnect(),y=null,i&&cancelAnimationFrame(b)}}var $t=p.useLayoutEffect,Da=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ut=function(){};function Fa(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function ka(t,e){for(var r=arguments.length,o=new Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];var a=[].concat(o);if(e&&t)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(Fa(t,s)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Sn=function(e){return Wa(e)?e.filter(Boolean):Kr(e)==="object"&&e!==null?[e]:[]},pr=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=ue(e,Da);return M({},r)},j=function(e,r,o){var n=e.cx,a=e.getStyles,s=e.getClassNames,l=e.className;return{css:a(r,e),className:n(o??{},s(r,e),l)}};function bt(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function Na(t){return bt(t)?window.innerHeight:t.clientHeight}function mr(t){return bt(t)?window.pageYOffset:t.scrollTop}function ct(t,e){if(bt(t)){window.scrollTo(0,e);return}t.scrollTop=e}function Aa(t){var e=getComputedStyle(t),r=e.position==="absolute",o=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(r&&e.position==="static")&&o.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function $a(t,e,r,o){return r*((t=t/o-1)*t*t+1)+e}function Qe(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ut,n=mr(t),a=e-n,s=10,l=0;function i(){l+=s;var u=$a(l,n,a,r);ct(t,u),l<r?window.requestAnimationFrame(i):o(t)}i()}function xn(t,e){var r=t.getBoundingClientRect(),o=e.getBoundingClientRect(),n=e.offsetHeight/3;o.bottom+n>r.bottom?ct(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):o.top-n<r.top&&ct(t,Math.max(e.offsetTop-n,0))}function ja(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Cn(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Ha(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var hr=!1,Ba={get passive(){return hr=!0}},Je=typeof window<"u"?window:{};Je.addEventListener&&Je.removeEventListener&&(Je.addEventListener("p",ut,Ba),Je.removeEventListener("p",ut,!1));var Ua=hr;function za(t){return t!=null}function Wa(t){return Array.isArray(t)}function Ze(t,e,r){return t?e:r}var qa=function(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];var a=Object.entries(e).filter(function(s){var l=se(s,1),i=l[0];return!o.includes(i)});return a.reduce(function(s,l){var i=se(l,2),u=i[0],c=i[1];return s[u]=c,s},{})},Ga=["children","innerProps"],Xa=["children","innerProps"];function Ya(t){var e=t.maxHeight,r=t.menuEl,o=t.minHeight,n=t.placement,a=t.shouldScroll,s=t.isFixedPosition,l=t.controlHeight,i=Aa(r),u={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return u;var c=i.getBoundingClientRect(),d=c.height,g=r.getBoundingClientRect(),y=g.bottom,b=g.height,v=g.top,m=r.offsetParent.getBoundingClientRect(),h=m.top,E=s?window.innerHeight:Na(i),T=mr(i),x=parseInt(getComputedStyle(r).marginBottom,10),f=parseInt(getComputedStyle(r).marginTop,10),O=h-f,C=E-v,S=O+T,V=d-T-v,R=y-E+T+x,w=T+v-f,A=160;switch(n){case"auto":case"bottom":if(C>=b)return{placement:"bottom",maxHeight:e};if(V>=b&&!s)return a&&Qe(i,R,A),{placement:"bottom",maxHeight:e};if(!s&&V>=o||s&&C>=o){a&&Qe(i,R,A);var z=s?C-x:V-x;return{placement:"bottom",maxHeight:z}}if(n==="auto"||s){var X=e,k=s?O:S;return k>=o&&(X=Math.min(k-x-l,e)),{placement:"top",maxHeight:X}}if(n==="bottom")return a&&ct(i,R),{placement:"bottom",maxHeight:e};break;case"top":if(O>=b)return{placement:"top",maxHeight:e};if(S>=b&&!s)return a&&Qe(i,w,A),{placement:"top",maxHeight:e};if(!s&&S>=o||s&&O>=o){var N=e;return(!s&&S>=o||s&&O>=o)&&(N=s?O-f:S-f),a&&Qe(i,w,A),{placement:"top",maxHeight:N}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return u}function Ka(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var vr=function(e){return e==="auto"?"bottom":e},Qa=function(e,r){var o,n=e.placement,a=e.theme,s=a.borderRadius,l=a.spacing,i=a.colors;return M((o={label:"menu"},Xe(o,Ka(n),"100%"),Xe(o,"position","absolute"),Xe(o,"width","100%"),Xe(o,"zIndex",1),o),r?{}:{backgroundColor:i.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},gr=p.createContext(null),Ja=function(e){var r=e.children,o=e.minMenuHeight,n=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,l=e.menuShouldScrollIntoView,i=e.theme,u=p.useContext(gr)||{},c=u.setPortalPlacement,d=p.useRef(null),g=p.useState(n),y=se(g,2),b=y[0],v=y[1],m=p.useState(null),h=se(m,2),E=h[0],T=h[1],x=i.spacing.controlHeight;return $t(function(){var f=d.current;if(f){var O=s==="fixed",C=l&&!O,S=Ya({maxHeight:n,menuEl:f,minHeight:o,placement:a,shouldScroll:C,isFixedPosition:O,controlHeight:x});v(S.maxHeight),T(S.placement),c==null||c(S.placement)}},[n,a,s,l,o,c,x]),r({ref:d,placerProps:M(M({},e),{},{placement:E||vr(a),maxHeight:b})})},Za=function(e){var r=e.children,o=e.innerRef,n=e.innerProps;return _("div",P({},j(e,"menu",{menu:!0}),{ref:o},n),r)},ei=Za,ti=function(e,r){var o=e.maxHeight,n=e.theme.spacing.baseUnit;return M({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:n,paddingTop:n})},ni=function(e){var r=e.children,o=e.innerProps,n=e.innerRef,a=e.isMulti;return _("div",P({},j(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:n},o),r)},br=function(e,r){var o=e.theme,n=o.spacing.baseUnit,a=o.colors;return M({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},ri=br,oi=br,ai=function(e){var r=e.children,o=r===void 0?"No options":r,n=e.innerProps,a=ue(e,Ga);return _("div",P({},j(M(M({},a),{},{children:o,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),o)},ii=function(e){var r=e.children,o=r===void 0?"Loading...":r,n=e.innerProps,a=ue(e,Xa);return _("div",P({},j(M(M({},a),{},{children:o,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),o)},si=function(e){var r=e.rect,o=e.offset,n=e.position;return{left:r.left,position:n,top:o,width:r.width,zIndex:1}},li=function(e){var r=e.appendTo,o=e.children,n=e.controlElement,a=e.innerProps,s=e.menuPlacement,l=e.menuPosition,i=p.useRef(null),u=p.useRef(null),c=p.useState(vr(s)),d=se(c,2),g=d[0],y=d[1],b=p.useMemo(function(){return{setPortalPlacement:y}},[]),v=p.useState(null),m=se(v,2),h=m[0],E=m[1],T=p.useCallback(function(){if(n){var C=ja(n),S=l==="fixed"?0:window.pageYOffset,V=C[g]+S;(V!==(h==null?void 0:h.offset)||C.left!==(h==null?void 0:h.rect.left)||C.width!==(h==null?void 0:h.rect.width))&&E({offset:V,rect:C})}},[n,l,g,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);$t(function(){T()},[T]);var x=p.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),n&&i.current&&(u.current=La(n,i.current,T,{elementResize:"ResizeObserver"in window}))},[n,T]);$t(function(){x()},[x]);var f=p.useCallback(function(C){i.current=C,x()},[x]);if(!r&&l!=="fixed"||!h)return null;var O=_("div",P({ref:f},j(M(M({},e),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),a),o);return _(gr.Provider,{value:b},r?$n.createPortal(O,r):O)},ui=function(e){var r=e.isDisabled,o=e.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},ci=function(e){var r=e.children,o=e.innerProps,n=e.isDisabled,a=e.isRtl;return _("div",P({},j(e,"container",{"--is-disabled":n,"--is-rtl":a}),o),r)},di=function(e,r){var o=e.theme.spacing,n=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return M({alignItems:"center",display:n&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},fi=function(e){var r=e.children,o=e.innerProps,n=e.isMulti,a=e.hasValue;return _("div",P({},j(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":a}),o),r)},pi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},mi=function(e){var r=e.children,o=e.innerProps;return _("div",P({},j(e,"indicatorsContainer",{indicators:!0}),o),r)},Tn,hi=["size"],vi=["innerProps","isRtl","size"],gi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},yr=function(e){var r=e.size,o=ue(e,hi);return _("svg",P({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:gi},o))},Zt=function(e){return _(yr,P({size:20},e),_("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Sr=function(e){return _(yr,P({size:20},e),_("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},xr=function(e,r){var o=e.isFocused,n=e.theme,a=n.spacing.baseUnit,s=n.colors;return M({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:o?s.neutral60:s.neutral20,padding:a*2,":hover":{color:o?s.neutral80:s.neutral40}})},bi=xr,yi=function(e){var r=e.children,o=e.innerProps;return _("div",P({},j(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),r||_(Sr,null))},Si=xr,xi=function(e){var r=e.children,o=e.innerProps;return _("div",P({},j(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),r||_(Zt,null))},Ci=function(e,r){var o=e.isDisabled,n=e.theme,a=n.spacing.baseUnit,s=n.colors;return M({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:o?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},Ti=function(e){var r=e.innerProps;return _("span",P({},r,j(e,"indicatorSeparator",{"indicator-separator":!0})))},Oi=ya(Tn||(Tn=Sa([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ei=function(e,r){var o=e.isFocused,n=e.size,a=e.theme,s=a.colors,l=a.spacing.baseUnit;return M({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},r?{}:{color:o?s.neutral60:s.neutral20,padding:l*2})},Ot=function(e){var r=e.delay,o=e.offset;return _("span",{css:Yt({animation:"".concat(Oi," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Ii=function(e){var r=e.innerProps,o=e.isRtl,n=e.size,a=n===void 0?4:n,s=ue(e,vi);return _("div",P({},j(M(M({},s),{},{innerProps:r,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),_(Ot,{delay:0,offset:o}),_(Ot,{delay:160,offset:!0}),_(Ot,{delay:320,offset:!o}))},wi=function(e,r){var o=e.isDisabled,n=e.isFocused,a=e.theme,s=a.colors,l=a.borderRadius,i=a.spacing;return M({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:i.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:o?s.neutral5:s.neutral0,borderColor:o?s.neutral10:n?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},_i=function(e){var r=e.children,o=e.isDisabled,n=e.isFocused,a=e.innerRef,s=e.innerProps,l=e.menuIsOpen;return _("div",P({ref:a},j(e,"control",{control:!0,"control--is-disabled":o,"control--is-focused":n,"control--menu-is-open":l}),s,{"aria-disabled":o||void 0}),r)},Mi=_i,Pi=["data"],Ri=function(e,r){var o=e.theme.spacing;return r?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Vi=function(e){var r=e.children,o=e.cx,n=e.getStyles,a=e.getClassNames,s=e.Heading,l=e.headingProps,i=e.innerProps,u=e.label,c=e.theme,d=e.selectProps;return _("div",P({},j(e,"group",{group:!0}),i),_(s,P({},l,{selectProps:d,theme:c,getStyles:n,getClassNames:a,cx:o}),u),_("div",null,r))},Li=function(e,r){var o=e.theme,n=o.colors,a=o.spacing;return M({label:"group",cursor:"default",display:"block"},r?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Di=function(e){var r=pr(e);r.data;var o=ue(r,Pi);return _("div",P({},j(e,"groupHeading",{"group-heading":!0}),o))},Fi=Vi,ki=["innerRef","isDisabled","isHidden","inputClassName"],Ni=function(e,r){var o=e.isDisabled,n=e.value,a=e.theme,s=a.spacing,l=a.colors;return M(M({visibility:o?"hidden":"visible",transform:n?"translateZ(0)":""},Ai),r?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},Cr={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ai={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":M({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Cr)},$i=function(e){return M({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Cr)},ji=function(e){var r=e.cx,o=e.value,n=pr(e),a=n.innerRef,s=n.isDisabled,l=n.isHidden,i=n.inputClassName,u=ue(n,ki);return _("div",P({},j(e,"input",{"input-container":!0}),{"data-value":o||""}),_("input",P({className:r({input:!0},i),ref:a,style:$i(l),disabled:s},u)))},Hi=ji,Bi=function(e,r){var o=e.theme,n=o.spacing,a=o.borderRadius,s=o.colors;return M({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:n.baseUnit/2})},Ui=function(e,r){var o=e.theme,n=o.borderRadius,a=o.colors,s=e.cropWithEllipsis;return M({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:n/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},zi=function(e,r){var o=e.theme,n=o.spacing,a=o.borderRadius,s=o.colors,l=e.isFocused;return M({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Tr=function(e){var r=e.children,o=e.innerProps;return _("div",o,r)},Wi=Tr,qi=Tr;function Gi(t){var e=t.children,r=t.innerProps;return _("div",P({role:"button"},r),e||_(Zt,{size:14}))}var Xi=function(e){var r=e.children,o=e.components,n=e.data,a=e.innerProps,s=e.isDisabled,l=e.removeProps,i=e.selectProps,u=o.Container,c=o.Label,d=o.Remove;return _(u,{data:n,innerProps:M(M({},j(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:i},_(c,{data:n,innerProps:M({},j(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:i},r),_(d,{data:n,innerProps:M(M({},j(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},l),selectProps:i}))},Yi=Xi,Ki=function(e,r){var o=e.isDisabled,n=e.isFocused,a=e.isSelected,s=e.theme,l=s.spacing,i=s.colors;return M({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?i.primary:n?i.primary25:"transparent",color:o?i.neutral20:a?i.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?i.primary:i.primary50}})},Qi=function(e){var r=e.children,o=e.isDisabled,n=e.isFocused,a=e.isSelected,s=e.innerRef,l=e.innerProps;return _("div",P({},j(e,"option",{option:!0,"option--is-disabled":o,"option--is-focused":n,"option--is-selected":a}),{ref:s,"aria-disabled":o},l),r)},Ji=Qi,Zi=function(e,r){var o=e.theme,n=o.spacing,a=o.colors;return M({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},es=function(e){var r=e.children,o=e.innerProps;return _("div",P({},j(e,"placeholder",{placeholder:!0}),o),r)},ts=es,ns=function(e,r){var o=e.isDisabled,n=e.theme,a=n.spacing,s=n.colors;return M({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:o?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},rs=function(e){var r=e.children,o=e.isDisabled,n=e.innerProps;return _("div",P({},j(e,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),n),r)},os=rs,Ue={ClearIndicator:xi,Control:Mi,DropdownIndicator:yi,DownChevron:Sr,CrossIcon:Zt,Group:Fi,GroupHeading:Di,IndicatorsContainer:mi,IndicatorSeparator:Ti,Input:Hi,LoadingIndicator:Ii,Menu:ei,MenuList:ni,MenuPortal:li,LoadingMessage:ii,NoOptionsMessage:ai,MultiValue:Yi,MultiValueContainer:Wi,MultiValueLabel:qi,MultiValueRemove:Gi,Option:Ji,Placeholder:ts,SelectContainer:ci,SingleValue:os,ValueContainer:fi},as=function(e){return M(M({},Ue),e.components)},On=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function is(t,e){return!!(t===e||On(t)&&On(e))}function ss(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!is(t[r],e[r]))return!1;return!0}function ls(t,e){e===void 0&&(e=ss);var r=null;function o(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(r&&r.lastThis===this&&e(n,r.lastArgs))return r.lastResult;var s=t.apply(this,n);return r={lastResult:s,lastArgs:n,lastThis:this},s}return o.clear=function(){r=null},o}var us={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},cs=function(e){return _("span",P({css:us},e))},En=cs,ds={guidance:function(e){var r=e.isSearchable,o=e.isMulti,n=e.tabSelectsValue,a=e.context,s=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,o=e.label,n=o===void 0?"":o,a=e.labels,s=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var r=e.context,o=e.focused,n=e.options,a=e.label,s=a===void 0?"":a,l=e.selectValue,i=e.isDisabled,u=e.isSelected,c=e.isAppleDevice,d=function(v,m){return v&&v.length?"".concat(v.indexOf(m)+1," of ").concat(v.length):""};if(r==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,o),".");if(r==="menu"&&c){var g=i?" disabled":"",y="".concat(u?" selected":"").concat(g);return"".concat(s).concat(y,", ").concat(d(n,o),".")}return""},onFilter:function(e){var r=e.inputValue,o=e.resultsMessage;return"".concat(o).concat(r?" for search term "+r:"",".")}},fs=function(e){var r=e.ariaSelection,o=e.focusedOption,n=e.focusedValue,a=e.focusableOptions,s=e.isFocused,l=e.selectValue,i=e.selectProps,u=e.id,c=e.isAppleDevice,d=i.ariaLiveMessages,g=i.getOptionLabel,y=i.inputValue,b=i.isMulti,v=i.isOptionDisabled,m=i.isSearchable,h=i.menuIsOpen,E=i.options,T=i.screenReaderStatus,x=i.tabSelectsValue,f=i.isLoading,O=i["aria-label"],C=i["aria-live"],S=p.useMemo(function(){return M(M({},ds),d||{})},[d]),V=p.useMemo(function(){var k="";if(r&&S.onChange){var N=r.option,$=r.options,q=r.removedValue,de=r.removedValues,fe=r.value,We=function(ie){return Array.isArray(ie)?null:ie},B=q||N||We(fe),J=B?g(B):"",ae=$||de||void 0,pe=ae?ae.map(g):[],ee=M({isDisabled:B&&v(B,l),label:J,labels:pe},r);k=S.onChange(ee)}return k},[r,S,v,l,g]),R=p.useMemo(function(){var k="",N=o||n,$=!!(o&&l&&l.includes(o));if(N&&S.onFocus){var q={focused:N,label:g(N),isDisabled:v(N,l),isSelected:$,options:a,context:N===o?"menu":"value",selectValue:l,isAppleDevice:c};k=S.onFocus(q)}return k},[o,n,g,v,S,a,l,c]),w=p.useMemo(function(){var k="";if(h&&E.length&&!f&&S.onFilter){var N=T({count:a.length});k=S.onFilter({inputValue:y,resultsMessage:N})}return k},[a,y,h,S,E,T,f]),A=(r==null?void 0:r.action)==="initial-input-focus",z=p.useMemo(function(){var k="";if(S.guidance){var N=n?"value":h?"menu":"input";k=S.guidance({"aria-label":O,context:N,isDisabled:o&&v(o,l),isMulti:b,isSearchable:m,tabSelectsValue:x,isInitialFocus:A})}return k},[O,o,n,b,v,m,h,S,l,x,A]),X=_(p.Fragment,null,_("span",{id:"aria-selection"},V),_("span",{id:"aria-focused"},R),_("span",{id:"aria-results"},w),_("span",{id:"aria-guidance"},z));return _(p.Fragment,null,_(En,{id:u},A&&X),_(En,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!A&&X))},ps=fs,jt=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ms=new RegExp("["+jt.map(function(t){return t.letters}).join("")+"]","g"),Or={};for(var Et=0;Et<jt.length;Et++)for(var It=jt[Et],wt=0;wt<It.letters.length;wt++)Or[It.letters[wt]]=It.base;var Er=function(e){return e.replace(ms,function(r){return Or[r]})},hs=ls(Er),In=function(e){return e.replace(/^\s+|\s+$/g,"")},vs=function(e){return"".concat(e.label," ").concat(e.value)},gs=function(e){return function(r,o){if(r.data.__isNew__)return!0;var n=M({ignoreCase:!0,ignoreAccents:!0,stringify:vs,trim:!0,matchFrom:"any"},e),a=n.ignoreCase,s=n.ignoreAccents,l=n.stringify,i=n.trim,u=n.matchFrom,c=i?In(o):o,d=i?In(l(r)):l(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=hs(c),d=Er(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},bs=["innerRef"];function ys(t){var e=t.innerRef,r=ue(t,bs),o=qa(r,"onExited","in","enter","exit","appear");return _("input",P({ref:e},o,{css:Yt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Ss=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function xs(t){var e=t.isEnabled,r=t.onBottomArrive,o=t.onBottomLeave,n=t.onTopArrive,a=t.onTopLeave,s=p.useRef(!1),l=p.useRef(!1),i=p.useRef(0),u=p.useRef(null),c=p.useCallback(function(m,h){if(u.current!==null){var E=u.current,T=E.scrollTop,x=E.scrollHeight,f=E.clientHeight,O=u.current,C=h>0,S=x-f-T,V=!1;S>h&&s.current&&(o&&o(m),s.current=!1),C&&l.current&&(a&&a(m),l.current=!1),C&&h>S?(r&&!s.current&&r(m),O.scrollTop=x,V=!0,s.current=!0):!C&&-h>T&&(n&&!l.current&&n(m),O.scrollTop=0,V=!0,l.current=!0),V&&Ss(m)}},[r,o,n,a]),d=p.useCallback(function(m){c(m,m.deltaY)},[c]),g=p.useCallback(function(m){i.current=m.changedTouches[0].clientY},[]),y=p.useCallback(function(m){var h=i.current-m.changedTouches[0].clientY;c(m,h)},[c]),b=p.useCallback(function(m){if(m){var h=Ua?{passive:!1}:!1;m.addEventListener("wheel",d,h),m.addEventListener("touchstart",g,h),m.addEventListener("touchmove",y,h)}},[y,g,d]),v=p.useCallback(function(m){m&&(m.removeEventListener("wheel",d,!1),m.removeEventListener("touchstart",g,!1),m.removeEventListener("touchmove",y,!1))},[y,g,d]);return p.useEffect(function(){if(e){var m=u.current;return b(m),function(){v(m)}}},[e,b,v]),function(m){u.current=m}}var wn=["boxSizing","height","overflow","paddingRight","position"],_n={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Mn(t){t.cancelable&&t.preventDefault()}function Pn(t){t.stopPropagation()}function Rn(){var t=this.scrollTop,e=this.scrollHeight,r=t+this.offsetHeight;t===0?this.scrollTop=1:r===e&&(this.scrollTop=t-1)}function Vn(){return"ontouchstart"in window||navigator.maxTouchPoints}var Ln=!!(typeof window<"u"&&window.document&&window.document.createElement),De=0,Te={capture:!1,passive:!1};function Cs(t){var e=t.isEnabled,r=t.accountForScrollbars,o=r===void 0?!0:r,n=p.useRef({}),a=p.useRef(null),s=p.useCallback(function(i){if(Ln){var u=document.body,c=u&&u.style;if(o&&wn.forEach(function(b){var v=c&&c[b];n.current[b]=v}),o&&De<1){var d=parseInt(n.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,y=window.innerWidth-g+d||0;Object.keys(_n).forEach(function(b){var v=_n[b];c&&(c[b]=v)}),c&&(c.paddingRight="".concat(y,"px"))}u&&Vn()&&(u.addEventListener("touchmove",Mn,Te),i&&(i.addEventListener("touchstart",Rn,Te),i.addEventListener("touchmove",Pn,Te))),De+=1}},[o]),l=p.useCallback(function(i){if(Ln){var u=document.body,c=u&&u.style;De=Math.max(De-1,0),o&&De<1&&wn.forEach(function(d){var g=n.current[d];c&&(c[d]=g)}),u&&Vn()&&(u.removeEventListener("touchmove",Mn,Te),i&&(i.removeEventListener("touchstart",Rn,Te),i.removeEventListener("touchmove",Pn,Te)))}},[o]);return p.useEffect(function(){if(e){var i=a.current;return s(i),function(){l(i)}}},[e,s,l]),function(i){a.current=i}}var Ts=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},Os={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Es(t){var e=t.children,r=t.lockEnabled,o=t.captureEnabled,n=o===void 0?!0:o,a=t.onBottomArrive,s=t.onBottomLeave,l=t.onTopArrive,i=t.onTopLeave,u=xs({isEnabled:n,onBottomArrive:a,onBottomLeave:s,onTopArrive:l,onTopLeave:i}),c=Cs({isEnabled:r}),d=function(y){u(y),c(y)};return _(p.Fragment,null,r&&_("div",{onClick:Ts,css:Os}),e(d))}var Is={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},ws=function(e){var r=e.name,o=e.onFocus;return _("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Is,value:"",onChange:function(){}})},_s=ws;function en(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ms(){return en(/^iPhone/i)}function Ir(){return en(/^Mac/i)}function Ps(){return en(/^iPad/i)||Ir()&&navigator.maxTouchPoints>1}function Rs(){return Ms()||Ps()}function Vs(){return Ir()||Rs()}var Ls=function(e){return e.label},Ds=function(e){return e.label},Fs=function(e){return e.value},ks=function(e){return!!e.isDisabled},Ns={clearIndicator:Si,container:ui,control:wi,dropdownIndicator:bi,group:Ri,groupHeading:Li,indicatorsContainer:pi,indicatorSeparator:Ci,input:Ni,loadingIndicator:Ei,loadingMessage:oi,menu:Qa,menuList:ti,menuPortal:si,multiValue:Bi,multiValueLabel:Ui,multiValueRemove:zi,noOptionsMessage:ri,option:Ki,placeholder:Zi,singleValue:ns,valueContainer:di},As={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},$s=4,wr=4,js=38,Hs=wr*2,Bs={baseUnit:wr,controlHeight:js,menuGutter:Hs},_t={borderRadius:$s,colors:As,spacing:Bs},Us={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Cn(),captureMenuScroll:!Cn(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:gs(),formatGroupLabel:Ls,getOptionLabel:Ds,getOptionValue:Fs,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:ks,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Ha(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Dn(t,e,r,o){var n=Pr(t,e,r),a=Rr(t,e,r),s=Mr(t,e),l=dt(t,e);return{type:"option",data:e,isDisabled:n,isSelected:a,label:s,value:l,index:o}}function ot(t,e){return t.options.map(function(r,o){if("options"in r){var n=r.options.map(function(s,l){return Dn(t,s,e,l)}).filter(function(s){return kn(t,s)});return n.length>0?{type:"group",data:r,options:n,index:o}:void 0}var a=Dn(t,r,e,o);return kn(t,a)?a:void 0}).filter(za)}function _r(t){return t.reduce(function(e,r){return r.type==="group"?e.push.apply(e,Ht(r.options.map(function(o){return o.data}))):e.push(r.data),e},[])}function Fn(t,e){return t.reduce(function(r,o){return o.type==="group"?r.push.apply(r,Ht(o.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(o.index,"-").concat(n.index)}}))):r.push({data:o.data,id:"".concat(e,"-").concat(o.index)}),r},[])}function zs(t,e){return _r(ot(t,e))}function kn(t,e){var r=t.inputValue,o=r===void 0?"":r,n=e.data,a=e.isSelected,s=e.label,l=e.value;return(!Lr(t)||!a)&&Vr(t,{label:s,value:l,data:n},o)}function Ws(t,e){var r=t.focusedValue,o=t.selectValue,n=o.indexOf(r);if(n>-1){var a=e.indexOf(r);if(a>-1)return r;if(n<e.length)return e[n]}return null}function qs(t,e){var r=t.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var Mt=function(e,r){var o,n=(o=e.find(function(a){return a.data===r}))===null||o===void 0?void 0:o.id;return n||null},Mr=function(e,r){return e.getOptionLabel(r)},dt=function(e,r){return e.getOptionValue(r)};function Pr(t,e,r){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,r):!1}function Rr(t,e,r){if(r.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,r);var o=dt(t,e);return r.some(function(n){return dt(t,n)===o})}function Vr(t,e,r){return t.filterOption?t.filterOption(e,r):!0}var Lr=function(e){var r=e.hideSelectedOptions,o=e.isMulti;return r===void 0?o:r},Gs=1,Dr=(function(t){Jr(r,t);var e=Zr(r);function r(o){var n;if(eo(this,r),n=e.call(this,o),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.controlRef=null,n.getControlRef=function(i){n.controlRef=i},n.focusedOptionRef=null,n.getFocusedOptionRef=function(i){n.focusedOptionRef=i},n.menuListRef=null,n.getMenuListRef=function(i){n.menuListRef=i},n.inputRef=null,n.getInputRef=function(i){n.inputRef=i},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(i,u){var c=n.props,d=c.onChange,g=c.name;u.name=g,n.ariaOnChange(i,u),d(i,u)},n.setValue=function(i,u,c){var d=n.props,g=d.closeMenuOnSelect,y=d.isMulti,b=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:b}),g&&(n.setState({inputIsHiddenAfterUpdate:!y}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(i,{action:u,option:c})},n.selectOption=function(i){var u=n.props,c=u.blurInputOnSelect,d=u.isMulti,g=u.name,y=n.state.selectValue,b=d&&n.isOptionSelected(i,y),v=n.isOptionDisabled(i,y);if(b){var m=n.getOptionValue(i);n.setValue(y.filter(function(h){return n.getOptionValue(h)!==m}),"deselect-option",i)}else if(!v)d?n.setValue([].concat(Ht(y),[i]),"select-option",i):n.setValue(i,"select-option");else{n.ariaOnChange(i,{action:"select-option",option:i,name:g});return}c&&n.blurInput()},n.removeValue=function(i){var u=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(i),g=c.filter(function(b){return n.getOptionValue(b)!==d}),y=Ze(u,g,g[0]||null);n.onChange(y,{action:"remove-value",removedValue:i}),n.focusInput()},n.clearValue=function(){var i=n.state.selectValue;n.onChange(Ze(n.props.isMulti,[],null),{action:"clear",removedValues:i})},n.popValue=function(){var i=n.props.isMulti,u=n.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),g=Ze(i,d,d[0]||null);c&&n.onChange(g,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(i){return Mt(n.state.focusableOptionsWithIds,i)},n.getFocusableOptionsWithIds=function(){return Fn(ot(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return ka.apply(void 0,[n.props.classNamePrefix].concat(u))},n.getOptionLabel=function(i){return Mr(n.props,i)},n.getOptionValue=function(i){return dt(n.props,i)},n.getStyles=function(i,u){var c=n.props.unstyled,d=Ns[i](u,c);d.boxSizing="border-box";var g=n.props.styles[i];return g?g(d,u):d},n.getClassNames=function(i,u){var c,d;return(c=(d=n.props.classNames)[i])===null||c===void 0?void 0:c.call(d,u)},n.getElementId=function(i){return"".concat(n.state.instancePrefix,"-").concat(i)},n.getComponents=function(){return as(n.props)},n.buildCategorizedOptions=function(){return ot(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return _r(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(i,u){n.setState({ariaSelection:M({value:i},u)})},n.onMenuMouseDown=function(i){i.button===0&&(i.stopPropagation(),i.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(i){n.blockOptionHover=!1},n.onControlMouseDown=function(i){if(!i.defaultPrevented){var u=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&n.onMenuClose():u&&n.openMenu("first"):(u&&(n.openAfterFocus=!0),n.focusInput()),i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&i.preventDefault()}},n.onDropdownIndicatorMouseDown=function(i){if(!(i&&i.type==="mousedown"&&i.button!==0)&&!n.props.isDisabled){var u=n.props,c=u.isMulti,d=u.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),i.preventDefault()}},n.onClearIndicatorMouseDown=function(i){i&&i.type==="mousedown"&&i.button!==0||(n.clearValue(),i.preventDefault(),n.openAfterFocus=!1,i.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(i){typeof n.props.closeMenuOnScroll=="boolean"?i.target instanceof HTMLElement&&bt(i.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(i)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(i){var u=i.touches,c=u&&u.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(i){var u=i.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),g=Math.abs(c.clientY-n.initialTouchY),y=5;n.userIsDragging=d>y||g>y}},n.onTouchEnd=function(i){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(i.target)&&n.menuListRef&&!n.menuListRef.contains(i.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(i){n.userIsDragging||n.onControlMouseDown(i)},n.onClearIndicatorTouchEnd=function(i){n.userIsDragging||n.onClearIndicatorMouseDown(i)},n.onDropdownIndicatorTouchEnd=function(i){n.userIsDragging||n.onDropdownIndicatorMouseDown(i)},n.handleInputChange=function(i){var u=n.props.inputValue,c=i.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:u}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(i){n.props.onFocus&&n.props.onFocus(i),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(i){var u=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(i),n.onInputChange("",{action:"input-blur",prevInputValue:u}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(i){if(!(n.blockOptionHover||n.state.focusedOption===i)){var u=n.getFocusableOptions(),c=u.indexOf(i);n.setState({focusedOption:i,focusedOptionId:c>-1?n.getFocusedOptionId(i):null})}},n.shouldHideSelectedOptions=function(){return Lr(n.props)},n.onValueInputFocus=function(i){i.preventDefault(),i.stopPropagation(),n.focus()},n.onKeyDown=function(i){var u=n.props,c=u.isMulti,d=u.backspaceRemovesValue,g=u.escapeClearsValue,y=u.inputValue,b=u.isClearable,v=u.isDisabled,m=u.menuIsOpen,h=u.onKeyDown,E=u.tabSelectsValue,T=u.openMenuOnFocus,x=n.state,f=x.focusedOption,O=x.focusedValue,C=x.selectValue;if(!v&&!(typeof h=="function"&&(h(i),i.defaultPrevented))){switch(n.blockOptionHover=!0,i.key){case"ArrowLeft":if(!c||y)return;n.focusValue("previous");break;case"ArrowRight":if(!c||y)return;n.focusValue("next");break;case"Delete":case"Backspace":if(y)return;if(O)n.removeValue(O);else{if(!d)return;c?n.popValue():b&&n.clearValue()}break;case"Tab":if(n.isComposing||i.shiftKey||!m||!E||!f||T&&n.isOptionSelected(f,C))return;n.selectOption(f);break;case"Enter":if(i.keyCode===229)break;if(m){if(!f||n.isComposing)return;n.selectOption(f);break}return;case"Escape":m?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:y}),n.onMenuClose()):b&&g&&n.clearValue();break;case" ":if(y)return;if(!m){n.openMenu("first");break}if(!f)return;n.selectOption(f);break;case"ArrowUp":m?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":m?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!m)return;n.focusOption("pageup");break;case"PageDown":if(!m)return;n.focusOption("pagedown");break;case"Home":if(!m)return;n.focusOption("first");break;case"End":if(!m)return;n.focusOption("last");break;default:return}i.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++Gs),n.state.selectValue=Sn(o.value),o.menuIsOpen&&n.state.selectValue.length){var a=n.getFocusableOptionsWithIds(),s=n.buildFocusableOptions(),l=s.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=a,n.state.focusedOption=s[l],n.state.focusedOptionId=Mt(a,s[l])}return n}return to(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&xn(this.menuListRef,this.focusedOptionRef),Vs()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(n){var a=this.props,s=a.isDisabled,l=a.menuIsOpen,i=this.state.isFocused;(i&&!s&&n.isDisabled||i&&l&&!n.menuIsOpen)&&this.focusInput(),i&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!i&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(xn(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,a){this.props.onInputChange(n,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var a=this,s=this.state,l=s.selectValue,i=s.isFocused,u=this.buildFocusableOptions(),c=n==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(i&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(n){var a=this.state,s=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var i=s.indexOf(l);l||(i=-1);var u=s.length-1,c=-1;if(s.length){switch(n){case"previous":i===0?c=0:i===-1?c=u:c=i-1;break;case"next":i>-1&&i<u&&(c=i+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var i=0,u=l.indexOf(s);s||(u=-1),n==="up"?i=u>0?u-1:l.length-1:n==="down"?i=(u+1)%l.length:n==="pageup"?(i=u-a,i<0&&(i=0)):n==="pagedown"?(i=u+a,i>l.length-1&&(i=l.length-1)):n==="last"&&(i=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[i],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[i])})}}},{key:"getTheme",value:(function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(_t):M(M({},_t),this.props.theme):_t})},{key:"getCommonProps",value:function(){var n=this.clearValue,a=this.cx,s=this.getStyles,l=this.getClassNames,i=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,y=d.isRtl,b=d.options,v=this.hasValue();return{clearValue:n,cx:a,getStyles:s,getClassNames:l,getValue:i,hasValue:v,isMulti:g,isRtl:y,options:b,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,a=n.isClearable,s=n.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(n,a){return Pr(this.props,n,a)}},{key:"isOptionSelected",value:function(n,a){return Rr(this.props,n,a)}},{key:"filterOption",value:function(n,a){return Vr(this.props,n,a)}},{key:"formatOptionLabel",value:function(n,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(n,{context:a,inputValue:s,selectValue:l})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:(function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))})},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:(function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))})},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:(function(){var n=this.props,a=n.isDisabled,s=n.isSearchable,l=n.inputId,i=n.inputValue,u=n.tabIndex,c=n.form,d=n.menuIsOpen,g=n.required,y=this.getComponents(),b=y.Input,v=this.state,m=v.inputIsHidden,h=v.ariaSelection,E=this.commonProps,T=l||this.getElementId("input"),x=M(M(M({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?p.createElement(b,P({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:T,innerRef:this.getInputRef,isDisabled:a,isHidden:m,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:i},x)):p.createElement(ys,P({id:T,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ut,onFocus:this.onInputFocus,disabled:a,tabIndex:u,inputMode:"none",form:c,value:""},x))})},{key:"renderPlaceholderOrValue",value:function(){var n=this,a=this.getComponents(),s=a.MultiValue,l=a.MultiValueContainer,i=a.MultiValueLabel,u=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,g=this.commonProps,y=this.props,b=y.controlShouldRenderValue,v=y.isDisabled,m=y.isMulti,h=y.inputValue,E=y.placeholder,T=this.state,x=T.selectValue,f=T.focusedValue,O=T.isFocused;if(!this.hasValue()||!b)return h?null:p.createElement(d,P({},g,{key:"placeholder",isDisabled:v,isFocused:O,innerProps:{id:this.getElementId("placeholder")}}),E);if(m)return x.map(function(S,V){var R=S===f,w="".concat(n.getOptionLabel(S),"-").concat(n.getOptionValue(S));return p.createElement(s,P({},g,{components:{Container:l,Label:i,Remove:u},isFocused:R,isDisabled:v,key:w,index:V,removeProps:{onClick:function(){return n.removeValue(S)},onTouchEnd:function(){return n.removeValue(S)},onMouseDown:function(z){z.preventDefault()}},data:S}),n.formatOptionLabel(S,"value"))});if(h)return null;var C=x[0];return p.createElement(c,P({},g,{data:C,isDisabled:v}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),a=n.ClearIndicator,s=this.commonProps,l=this.props,i=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||i||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,P({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),a=n.LoadingIndicator,s=this.commonProps,l=this.props,i=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!a||!u)return null;var d={"aria-hidden":"true"};return p.createElement(a,P({},s,{innerProps:d,isDisabled:i,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator,s=n.IndicatorSeparator;if(!a||!s)return null;var l=this.commonProps,i=this.props.isDisabled,u=this.state.isFocused;return p.createElement(s,P({},l,{isDisabled:i,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator;if(!a)return null;var s=this.commonProps,l=this.props.isDisabled,i=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,P({},s,{innerProps:u,isDisabled:l,isFocused:i}))}},{key:"renderMenu",value:function(){var n=this,a=this.getComponents(),s=a.Group,l=a.GroupHeading,i=a.Menu,u=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,g=a.NoOptionsMessage,y=a.Option,b=this.commonProps,v=this.state.focusedOption,m=this.props,h=m.captureMenuScroll,E=m.inputValue,T=m.isLoading,x=m.loadingMessage,f=m.minMenuHeight,O=m.maxMenuHeight,C=m.menuIsOpen,S=m.menuPlacement,V=m.menuPosition,R=m.menuPortalTarget,w=m.menuShouldBlockScroll,A=m.menuShouldScrollIntoView,z=m.noOptionsMessage,X=m.onMenuScrollToTop,k=m.onMenuScrollToBottom;if(!C)return null;var N=function(J,ae){var pe=J.type,ee=J.data,me=J.isDisabled,ie=J.isSelected,qe=J.label,zr=J.value,tn=v===ee,nn=me?void 0:function(){return n.onOptionHover(ee)},Wr=me?void 0:function(){return n.selectOption(ee)},rn="".concat(n.getElementId("option"),"-").concat(ae),qr={id:rn,onClick:Wr,onMouseMove:nn,onMouseOver:nn,tabIndex:-1,role:"option","aria-selected":n.state.isAppleDevice?void 0:ie};return p.createElement(y,P({},b,{innerProps:qr,data:ee,isDisabled:me,isSelected:ie,key:rn,label:qe,type:pe,value:zr,isFocused:tn,innerRef:tn?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(J.data,"menu"))},$;if(this.hasOptions())$=this.getCategorizedOptions().map(function(B){if(B.type==="group"){var J=B.data,ae=B.options,pe=B.index,ee="".concat(n.getElementId("group"),"-").concat(pe),me="".concat(ee,"-heading");return p.createElement(s,P({},b,{key:ee,data:J,options:ae,Heading:l,headingProps:{id:me,data:B.data},label:n.formatGroupLabel(B.data)}),B.options.map(function(ie){return N(ie,"".concat(pe,"-").concat(ie.index))}))}else if(B.type==="option")return N(B,"".concat(B.index))});else if(T){var q=x({inputValue:E});if(q===null)return null;$=p.createElement(d,b,q)}else{var de=z({inputValue:E});if(de===null)return null;$=p.createElement(g,b,de)}var fe={minMenuHeight:f,maxMenuHeight:O,menuPlacement:S,menuPosition:V,menuShouldScrollIntoView:A},We=p.createElement(Ja,P({},b,fe),function(B){var J=B.ref,ae=B.placerProps,pe=ae.placement,ee=ae.maxHeight;return p.createElement(i,P({},b,fe,{innerRef:J,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:T,placement:pe}),p.createElement(Es,{captureEnabled:h,onTopArrive:X,onBottomArrive:k,lockEnabled:w},function(me){return p.createElement(u,P({},b,{innerRef:function(qe){n.getMenuListRef(qe),me(qe)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:n.getElementId("listbox")},isLoading:T,maxHeight:ee,focusedOption:v}),$)}))});return R||V==="fixed"?p.createElement(c,P({},b,{appendTo:R,controlElement:this.controlRef,menuPlacement:S,menuPosition:V}),We):We}},{key:"renderFormField",value:function(){var n=this,a=this.props,s=a.delimiter,l=a.isDisabled,i=a.isMulti,u=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(_s,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(i)if(s){var g=d.map(function(v){return n.getOptionValue(v)}).join(s);return p.createElement("input",{name:u,type:"hidden",value:g})}else{var y=d.length>0?d.map(function(v,m){return p.createElement("input",{key:"i-".concat(m),name:u,type:"hidden",value:n.getOptionValue(v)})}):p.createElement("input",{name:u,type:"hidden",value:""});return p.createElement("div",null,y)}else{var b=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:u,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,a=this.state,s=a.ariaSelection,l=a.focusedOption,i=a.focusedValue,u=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(ps,P({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:i,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),a=n.Control,s=n.IndicatorsContainer,l=n.SelectContainer,i=n.ValueContainer,u=this.props,c=u.className,d=u.id,g=u.isDisabled,y=u.menuIsOpen,b=this.state.isFocused,v=this.commonProps=this.getCommonProps();return p.createElement(l,P({},v,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:b}),this.renderLiveRegion(),p.createElement(a,P({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:b,menuIsOpen:y}),p.createElement(i,P({},v,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(s,P({},v,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,a){var s=a.prevProps,l=a.clearFocusValueOnUpdate,i=a.inputIsHiddenAfterUpdate,u=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,g=a.instancePrefix,y=n.options,b=n.value,v=n.menuIsOpen,m=n.inputValue,h=n.isMulti,E=Sn(b),T={};if(s&&(b!==s.value||y!==s.options||v!==s.menuIsOpen||m!==s.inputValue)){var x=v?zs(n,E):[],f=v?Fn(ot(n,E),"".concat(g,"-option")):[],O=l?Ws(a,E):null,C=qs(a,x),S=Mt(f,C);T={selectValue:E,focusedOption:C,focusedOptionId:S,focusableOptionsWithIds:f,focusedValue:O,clearFocusValueOnUpdate:!1}}var V=i!=null&&n!==s?{inputIsHidden:i,inputIsHiddenAfterUpdate:void 0}:{},R=u,w=c&&d;return c&&!w&&(R={value:Ze(h,E,E[0]||null),options:E,action:"initial-input-focus"},w=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(R=null),M(M(M({},T),V),{},{prevProps:n,ariaSelection:R,prevWasFocused:w})}}]),r})(p.Component);Dr.defaultProps=Us;var Xs=p.forwardRef(function(t,e){var r=To(t);return p.createElement(Dr,P({ref:e},r))}),Ys=Xs;function Fr(t){function e(){t.clearValue(),t.selectProps.onClear&&t.selectProps.onClear()}const{children:r=I.jsx(jn.X,{size:"1.3rem"}),getStyles:o,innerProps:{ref:n,onMouseDown:a,onTouchEnd:s,...l}}=t;return I.jsx("div",{...l,ref:n,style:o("clearIndicator",t),onMouseDown:e,onTouchEnd:e,children:I.jsx("div",{style:{cursor:"pointer"},children:r})})}Fr.__docgenInfo={description:"",methods:[],displayName:"ClearIndicator"};function kr({children:t,...e}){const{floatingLabel:r,invalidSearch:o}=e.selectProps;return I.jsxs(Ue.Control,{...e,children:[I.jsx("div",{style:{margin:"0 0.1rem"},children:I.jsx(Ue.DropdownIndicator,{...e,children:I.jsx(jn.Search,{size:"1.3rem",color:o?U.red7:"none"})})}),I.jsx(Ks,{}),I.jsx(Qs,{$isFloating:e.isFocused||e.hasValue,theme:e.theme,children:r}),t]})}const Ks=Bt.span`
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
`;kr.__docgenInfo={description:"",methods:[],displayName:"Control"};function Nr({children:t,...e}){const r=["IndicatorSeparator","DropdownIndicator"],o=p.Children.map(t,n=>n&&!r.includes(n.type.name)?n:null);return I.jsx(Ue.IndicatorsContainer,{...e,children:o})}Nr.__docgenInfo={description:"",methods:[],displayName:"IndicatorsContainer"};function Ar(t){const{noOptionsTitle:e,setInvalidSearch:r}=t.selectProps;return p.useEffect(()=>(r(!0),()=>r(!1)),[r]),I.jsxs(I.Fragment,{children:[I.jsx(no,{variant:"label",sx:{fontWeight:"bold",textAlign:"center",marginTop:"1rem"},children:e}),I.jsx(Ue.NoOptionsMessage,{...t})]})}Ar.__docgenInfo={description:"",methods:[],displayName:"NoOptionsMessage"};const Js=(t,e)=>({...t,height:"3.2rem",border:`0.1rem solid ${e.theme.colors.neutral30}`,borderRadius:"0.3rem",backgroundColor:e.isFocused?U.gray5:e.theme.colors.neutral0,boxShadow:e.isFocused?ro.xs:"none",cursor:"pointer"}),Zs=(t,e)=>({...t,maxHeight:"15rem",padding:"0px","::-webkit-scrollbar":{width:"0.6rem"},"::-webkit-scrollbar-track":{background:"rgba(0, 0, 0, 0)",borderRadius:"1rem"},"::-webkit-scrollbar-thumb":{background:e.theme.colors.primary25,borderRadius:"1rem",boxShadow:"inset 0 0 0.6rem rgba(0, 0, 0, 0.2)"},"::-webkit-scrollbar-thumb:hover":{background:U.gray8}}),el=t=>({...t,zIndex:2}),tl=t=>({...t,color:U.gray11,fontFamily:ft.font.sansSerif,marginBottom:"0.5rem"}),nl=(t,e)=>({...t,color:U.gray11,fontSize:"1rem",fontFamily:ft.font.sansSerif,height:"3rem",display:"flex",alignItems:"center",boxShadow:e.isFocused||e.isSelected?`4px 0px 0px 0px ${e.theme.colors.primary25} inset`:"none",transition:"0.3s ease box-shadow","&:nth-of-type(odd)":{backgroundColor:e.theme.colors.neutral0},"&:nth-of-type(even)":{backgroundColor:e.theme.colors.neutral5},"&:hover":{boxShadow:`4px 0px 0px 0px ${e.theme.colors.primary25} inset`},cursor:"pointer"}),rl=(t,e)=>({...t,fontFamily:ft.font.sansSerif}),ol=t=>({...t,top:"0.4rem"});function he({floatingLabel:t="Search",noOptionsTitle:e="Invalid search",autoFocus:r=!1,backspaceRemovesValue:o=!0,captureMenuScroll:n=!1,hideSelectedOptions:a=!0,isClearable:s=!0,isLoading:l=!1,isSearchable:i=!0,noOptionsMessage:u=()=>"No results found for this search",placeholder:c="",defaultValue:d,...g}){const[y,b]=p.useState(!1);return I.jsx(Ys,{floatingLabel:t,invalidSearch:y,setInvalidSearch:b,noOptionsTitle:e,components:{ClearIndicator:Fr,Control:kr,IndicatorsContainer:Nr,NoOptionsMessage:Ar},theme:v=>({...v,colors:{...v.colors,neutral0:U.gray3,neutral5:U.gray2,neutral20:U.gray9,neutral30:U.gray6,neutral50:U.gray10,primary:U.gray2,primary25:U.gray4}}),styles:{control:Js,menu:el,menuList:Zs,noOptionsMessage:tl,option:nl,placeholder:rl,valueContainer:ol},autoFocus:r,backspaceRemovesValue:o,captureMenuScroll:n,hideSelectedOptions:a,isClearable:s,isLoading:l,isSearchable:i,noOptionsMessage:u,placeholder:c,...g})}he.__docgenInfo={description:"",methods:[],displayName:"Search",props:{floatingLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search"',computed:!1}},noOptionsTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Invalid search"',computed:!1}},autoFocus:{defaultValue:{value:"false",computed:!1},required:!1},backspaceRemovesValue:{defaultValue:{value:"true",computed:!1},required:!1},captureMenuScroll:{defaultValue:{value:"false",computed:!1},required:!1},hideSelectedOptions:{defaultValue:{value:"true",computed:!1},required:!1},isClearable:{defaultValue:{value:"true",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},isSearchable:{defaultValue:{value:"true",computed:!1},required:!1},noOptionsMessage:{defaultValue:{value:'() => "No results found for this search"',computed:!1},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Props"]};function $r(){return I.jsx(he,{filterOption:al,options:[{value:"entry1",label:"First Entry"},{value:"entry2",label:"Second Entry"},{value:"entry3",label:"Third Entry"}],onChange:t=>{_e(t?"Selected: "+t.label:"Cleared")}})}function al(t,e){const r=t.label.toLowerCase(),o=e.length;if(e=e.toLowerCase(),r.slice(0,o)===e)return!0;const n=r.split(" ");for(const a of n.slice(1))if(a.slice(0,o)===e)return!0;return!1}$r.__docgenInfo={description:"",methods:[],displayName:"EgFiltering"};function jr(){return I.jsx(he,{options:[{value:"entry1",label:"First Entry"},{value:"entry2",label:"Second Entry"},{value:"entry3",label:"Third Entry"}],isMulti:!0,closeMenuOnSelect:!1})}jr.__docgenInfo={description:"",methods:[],displayName:"EgMultiSelect"};function Hr(){const t=[],[e,r]=p.useState(t);return I.jsx(he,{options:e.length>1?[]:[{value:"entry1",label:"First Entry"},{value:"entry2",label:"Second Entry"},{value:"entry3",label:"Third Entry"}],onChange:o=>{r(o||t)},isMulti:!0,closeMenuOnSelect:!1})}Hr.__docgenInfo={description:"",methods:[],displayName:"EgMultiSelectLimit"};function Br(){return I.jsx(he,{options:[{value:"entry1",label:"First Entry"},{value:"entry2",label:"Second Entry"},{value:"entry3",label:"Third Entry is a very very long entry that demonstrate text truncations in case of overflow. Decrease screen width to view truncation."}],onChange:t=>{_e(t?"Selected: "+t.label:"Cleared")}})}Br.__docgenInfo={description:"",methods:[],displayName:"EgSingleSelect"};function Ur(){return I.jsx(he,{options:[{value:"entry1",label:"First Entry"},{value:"entry2",label:"Second Entry"},{value:"entry3",label:"Third Entry"},{value:"entry4",label:"Fourth Entry"},{value:"entry5",label:"Fifth Entry"},{value:"entry6",label:"Sixth Entry"}],onChange:t=>{_e(t?"Selected: "+t.label:"Cleared")},theme:t=>({...t,colors:{...t.colors,neutral0:U.gray3,neutral5:U.gray4,neutral20:U.gray7,neutral30:U.gray8,neutral50:U.gray11,primary:U.blue8,primary25:U.blue6}})})}Ur.__docgenInfo={description:"",methods:[],displayName:"EgTheming"};function Nn(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...An(),...t.components};return I.jsxs(I.Fragment,{children:[I.jsx(Gr,{title:"Atoms/Search",component:he}),`
`,I.jsx(e.h1,{id:"search",children:"Search"}),`
`,I.jsxs(e.p,{children:["This component can be used to render a ",I.jsx(e.code,{children:"<select>"}),` like element styled as a
search box to present the user with a list of options to choose from a
dropdown menu.`]}),`
`,I.jsx(e.p,{children:I.jsx(e.img,{src:"",alt:""})}),`
`,I.jsx(e.h2,{id:"props",children:"Props"}),`
`,I.jsxs(e.p,{children:["The following props are available in addition to ",I.jsx(e.a,{href:"https://react-select.com/props",rel:"nofollow",children:"react-select props"}),"."]}),`
`,I.jsx(Xr,{of:he}),`
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
  const [selectedEntry, setSelectedEntry] =
    useState<SearchOptionType>(defaultEntry);

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
  const [selectedEntry, setSelectedEntry] =
    useState<SearchOptionType[]>(defaultEntry);

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
`,I.jsx($r,{})]})}function Tl(t={}){const{wrapper:e}={...An(),...t.components};return e?I.jsx(e,{...t,children:I.jsx(Nn,{...t})}):Nn(t)}export{Tl as default};
