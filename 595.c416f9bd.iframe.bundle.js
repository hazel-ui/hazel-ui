"use strict";(self.webpackChunkhazel_ui=self.webpackChunkhazel_ui||[]).push([[595],{"./node_modules/@storybook/builder-webpack5/node_modules/@storybook/components/dist/WithTooltip-6RTI5BE5.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithToolTipState:function(){return WithToolTipState},WithTooltip:function(){return WithToolTipState},WithTooltipPure:function(){return WithTooltipPure}});var _chunk_BVZGY62N_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/@storybook/components/dist/chunk-BVZGY62N.mjs"),_chunk_FD4M6EBV_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/@storybook/components/dist/chunk-FD4M6EBV.mjs"),_chunk_NNAAFZ4U_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/@storybook/components/dist/chunk-NNAAFZ4U.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/@storybook/theming/dist/index.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-dom/index.js"),memoizerific__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/memoizerific/memoizerific.js"),memoizerific__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(memoizerific__WEBPACK_IMPORTED_MODULE_5__),_storybook_theming__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/@storybook/theming/dist/chunk-IWWAIZM3.mjs"),require_react_fast_compare=(0,_chunk_NNAAFZ4U_mjs__WEBPACK_IMPORTED_MODULE_0__.E)({"../../node_modules/react-fast-compare/index.js"(exports,module){var hasElementType=typeof Element<"u",hasMap="function"==typeof Map,hasSet="function"==typeof Set,hasArrayBuffer="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys,it;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(hasMap&&a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;for(it=a.entries();!(i=it.next()).done;)if(!equal(i.value[1],b.get(i.value[0])))return!1;return!0}if(hasSet&&a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;return!0}if(hasArrayBuffer&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;if(hasElementType&&a instanceof Element)return!1;for(i=length;0!=i--;)if(("_owner"!==keys[i]&&"__v"!==keys[i]&&"__o"!==keys[i]||!a.$$typeof)&&!equal(a[keys[i]],b[keys[i]]))return!1;return!0}return a!=a&&b!=b}module.exports=function(a,b){try{return equal(a,b)}catch(error){if((error.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw error}}}}),require_warning=(0,_chunk_NNAAFZ4U_mjs__WEBPACK_IMPORTED_MODULE_0__.E)({"../../node_modules/warning/warning.js"(exports,module){var warning2=function(){};module.exports=warning2}}),ManagerReferenceNodeContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),ManagerReferenceNodeSetterContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext();function Manager(_ref){var children=_ref.children,_React$useState=react__WEBPACK_IMPORTED_MODULE_1__.useState(null),referenceNode=_React$useState[0],setReferenceNode=_React$useState[1],hasUnmounted=react__WEBPACK_IMPORTED_MODULE_1__.useRef(!1);react__WEBPACK_IMPORTED_MODULE_1__.useEffect((function(){return function(){hasUnmounted.current=!0}}),[]);var handleSetReferenceNode=react__WEBPACK_IMPORTED_MODULE_1__.useCallback((function(node){hasUnmounted.current||setReferenceNode(node)}),[]);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(ManagerReferenceNodeContext.Provider,{value:referenceNode},react__WEBPACK_IMPORTED_MODULE_1__.createElement(ManagerReferenceNodeSetterContext.Provider,{value:handleSetReferenceNode},children))}var unwrapArray=function(arg){return Array.isArray(arg)?arg[0]:arg},safeInvoke=function(fn){if("function"==typeof fn){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return fn.apply(void 0,args)}},setRef=function(ref,node){if("function"==typeof ref)return safeInvoke(ref,node);null!=ref&&(ref.current=node)},fromEntries=function(entries){return entries.reduce((function(acc,_ref){var key=_ref[0],value=_ref[1];return acc[key]=value,acc}),{})},useIsomorphicLayoutEffect=typeof window<"u"&&window.document&&window.document.createElement?react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_1__.useEffect,import_react_fast_compare=(0,_chunk_NNAAFZ4U_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(require_react_fast_compare()),EMPTY_MODIFIERS=[],NOOP=function(){},NOOP_PROMISE=function(){return Promise.resolve(null)},EMPTY_MODIFIERS2=[];function Popper(_ref){var _ref$placement=_ref.placement,placement=void 0===_ref$placement?"bottom":_ref$placement,_ref$strategy=_ref.strategy,strategy=void 0===_ref$strategy?"absolute":_ref$strategy,_ref$modifiers=_ref.modifiers,modifiers=void 0===_ref$modifiers?EMPTY_MODIFIERS2:_ref$modifiers,referenceElement=_ref.referenceElement,onFirstUpdate=_ref.onFirstUpdate,innerRef=_ref.innerRef,children=_ref.children,referenceNode=react__WEBPACK_IMPORTED_MODULE_1__.useContext(ManagerReferenceNodeContext),_React$useState=react__WEBPACK_IMPORTED_MODULE_1__.useState(null),popperElement=_React$useState[0],setPopperElement=_React$useState[1],_React$useState2=react__WEBPACK_IMPORTED_MODULE_1__.useState(null),arrowElement=_React$useState2[0],setArrowElement=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_1__.useEffect((function(){setRef(innerRef,popperElement)}),[innerRef,popperElement]);var options=react__WEBPACK_IMPORTED_MODULE_1__.useMemo((function(){return{placement:placement,strategy:strategy,onFirstUpdate:onFirstUpdate,modifiers:[].concat(modifiers,[{name:"arrow",enabled:null!=arrowElement,options:{element:arrowElement}}])}}),[placement,strategy,onFirstUpdate,modifiers,arrowElement]),_usePopper=function(referenceElement,popperElement,options){void 0===options&&(options={});var prevOptions=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),optionsWithDefaults={onFirstUpdate:options.onFirstUpdate,placement:options.placement||"bottom",strategy:options.strategy||"absolute",modifiers:options.modifiers||EMPTY_MODIFIERS},_React$useState=react__WEBPACK_IMPORTED_MODULE_1__.useState({styles:{popper:{position:optionsWithDefaults.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),state=_React$useState[0],setState=_React$useState[1],updateStateModifier=react__WEBPACK_IMPORTED_MODULE_1__.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(_ref){var state2=_ref.state,elements=Object.keys(state2.elements);react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync((function(){setState({styles:fromEntries(elements.map((function(element){return[element,state2.styles[element]||{}]}))),attributes:fromEntries(elements.map((function(element){return[element,state2.attributes[element]]})))})}))},requires:["computeStyles"]}}),[]),popperOptions=react__WEBPACK_IMPORTED_MODULE_1__.useMemo((function(){var newOptions={onFirstUpdate:optionsWithDefaults.onFirstUpdate,placement:optionsWithDefaults.placement,strategy:optionsWithDefaults.strategy,modifiers:[].concat(optionsWithDefaults.modifiers,[updateStateModifier,{name:"applyStyles",enabled:!1}])};return(0,import_react_fast_compare.default)(prevOptions.current,newOptions)?prevOptions.current||newOptions:(prevOptions.current=newOptions,newOptions)}),[optionsWithDefaults.onFirstUpdate,optionsWithDefaults.placement,optionsWithDefaults.strategy,optionsWithDefaults.modifiers,updateStateModifier]),popperInstanceRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef();return useIsomorphicLayoutEffect((function(){popperInstanceRef.current&&popperInstanceRef.current.setOptions(popperOptions)}),[popperOptions]),useIsomorphicLayoutEffect((function(){if(null!=referenceElement&&null!=popperElement){var popperInstance=(options.createPopper||_chunk_BVZGY62N_mjs__WEBPACK_IMPORTED_MODULE_3__.fi)(referenceElement,popperElement,popperOptions);return popperInstanceRef.current=popperInstance,function(){popperInstance.destroy(),popperInstanceRef.current=null}}}),[referenceElement,popperElement,options.createPopper]),{state:popperInstanceRef.current?popperInstanceRef.current.state:null,styles:state.styles,attributes:state.attributes,update:popperInstanceRef.current?popperInstanceRef.current.update:null,forceUpdate:popperInstanceRef.current?popperInstanceRef.current.forceUpdate:null}}(referenceElement||referenceNode,popperElement,options),state=_usePopper.state,styles=_usePopper.styles,forceUpdate=_usePopper.forceUpdate,update=_usePopper.update,childrenProps=react__WEBPACK_IMPORTED_MODULE_1__.useMemo((function(){return{ref:setPopperElement,style:styles.popper,placement:state?state.placement:placement,hasPopperEscaped:state&&state.modifiersData.hide?state.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:state&&state.modifiersData.hide?state.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:styles.arrow,ref:setArrowElement},forceUpdate:forceUpdate||NOOP,update:update||NOOP_PROMISE}}),[setPopperElement,setArrowElement,placement,state,styles,update,forceUpdate]);return unwrapArray(children)(childrenProps)}var import_warning=(0,_chunk_NNAAFZ4U_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(require_warning());function Reference(_ref){var children=_ref.children,innerRef=_ref.innerRef,setReferenceNode=react__WEBPACK_IMPORTED_MODULE_1__.useContext(ManagerReferenceNodeSetterContext),refHandler=react__WEBPACK_IMPORTED_MODULE_1__.useCallback((function(node){setRef(innerRef,node),safeInvoke(setReferenceNode,node)}),[innerRef,setReferenceNode]);return react__WEBPACK_IMPORTED_MODULE_1__.useEffect((function(){return function(){return setRef(innerRef,null)}}),[]),react__WEBPACK_IMPORTED_MODULE_1__.useEffect((function(){(0,import_warning.default)(Boolean(setReferenceNode),"`Reference` should not be used outside of a `Manager` component.")}),[setReferenceNode]),unwrapArray(children)({ref:refHandler})}var TooltipContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext({}),callAll=function(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return fns.forEach((function(fn){return fn&&fn.apply(void 0,args)}))}},canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},setRef3=function(ref,node){if("function"==typeof ref)return ref(node);null!=ref&&(ref.current=node)},Tooltip=function(_Component){function Tooltip3(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).observer=void 0,_this.tooltipRef=void 0,_this.handleOutsideClick=function(event){if(_this.tooltipRef&&!_this.tooltipRef.contains(event.target)){var parentOutsideClickHandler=_this.context.parentOutsideClickHandler,_this$props=_this.props,hideTooltip=_this$props.hideTooltip;(0,_this$props.clearScheduled)(),hideTooltip(),parentOutsideClickHandler&&parentOutsideClickHandler(event)}},_this.handleOutsideRightClick=function(event){if(_this.tooltipRef&&!_this.tooltipRef.contains(event.target)){var parentOutsideRightClickHandler=_this.context.parentOutsideRightClickHandler,_this$props2=_this.props,hideTooltip=_this$props2.hideTooltip;(0,_this$props2.clearScheduled)(),hideTooltip(),parentOutsideRightClickHandler&&parentOutsideRightClickHandler(event)}},_this.addOutsideClickHandler=function(){document.body.addEventListener("touchend",_this.handleOutsideClick),document.body.addEventListener("click",_this.handleOutsideClick)},_this.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",_this.handleOutsideClick),document.body.removeEventListener("click",_this.handleOutsideClick)},_this.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",_this.handleOutsideRightClick)},_this.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",_this.handleOutsideRightClick)},_this.getTooltipRef=function(node){_this.tooltipRef=node,setRef3(_this.props.innerRef,node)},_this.getArrowProps=function(props){return void 0===props&&(props={}),(0,_chunk_FD4M6EBV_mjs__WEBPACK_IMPORTED_MODULE_4__.j)({},props,{style:(0,_chunk_FD4M6EBV_mjs__WEBPACK_IMPORTED_MODULE_4__.j)({},props.style,_this.props.arrowProps.style)})},_this.getTooltipProps=function(props){return void 0===props&&(props={}),(0,_chunk_FD4M6EBV_mjs__WEBPACK_IMPORTED_MODULE_4__.j)({},props,_this.isTriggeredBy("hover")&&{onMouseEnter:callAll(_this.props.clearScheduled,props.onMouseEnter),onMouseLeave:callAll(_this.props.hideTooltip,props.onMouseLeave)},{style:(0,_chunk_FD4M6EBV_mjs__WEBPACK_IMPORTED_MODULE_4__.j)({},props.style,_this.props.style)})},_this.contextValue={isParentNoneTriggered:"none"===_this.props.trigger,addParentOutsideClickHandler:_this.addOutsideClickHandler,addParentOutsideRightClickHandler:_this.addOutsideRightClickHandler,parentOutsideClickHandler:_this.handleOutsideClick,parentOutsideRightClickHandler:_this.handleOutsideRightClick,removeParentOutsideClickHandler:_this.removeOutsideClickHandler,removeParentOutsideRightClickHandler:_this.removeOutsideRightClickHandler},_this}(0,_chunk_BVZGY62N_mjs__WEBPACK_IMPORTED_MODULE_3__.PW)(Tooltip3,_Component);var _proto=Tooltip3.prototype;return _proto.componentDidMount=function(){var _this2=this;if((this.observer=new MutationObserver((function(){_this2.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var _this$context=this.context,removeParentOutsideClickHandler=_this$context.removeParentOutsideClickHandler,removeParentOutsideRightClickHandler=_this$context.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),removeParentOutsideClickHandler&&removeParentOutsideClickHandler(),removeParentOutsideRightClickHandler&&removeParentOutsideRightClickHandler()}},_proto.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},_proto.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var _this$context2=this.context,isParentNoneTriggered=_this$context2.isParentNoneTriggered,addParentOutsideClickHandler=_this$context2.addParentOutsideClickHandler,addParentOutsideRightClickHandler=_this$context2.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!isParentNoneTriggered&&addParentOutsideClickHandler&&addParentOutsideClickHandler(),!isParentNoneTriggered&&addParentOutsideRightClickHandler&&addParentOutsideRightClickHandler()}},_proto.render=function(){var _this$props3=this.props,arrowProps=_this$props3.arrowProps,placement=_this$props3.placement,tooltip=_this$props3.tooltip;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(TooltipContext.Provider,{value:this.contextValue},tooltip({arrowRef:arrowProps.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:placement,tooltipRef:this.getTooltipRef}))},_proto.isTriggeredBy=function(event){var trigger=this.props.trigger;return trigger===event||Array.isArray(trigger)&&trigger.includes(event)},Tooltip3}(react__WEBPACK_IMPORTED_MODULE_1__.Component);Tooltip.contextType=TooltipContext;var TooltipTrigger=function(_Component){function TooltipTrigger2(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).state={tooltipShown:_this.props.defaultTooltipShown},_this.hideTimeout=void 0,_this.showTimeout=void 0,_this.popperOffset=void 0,_this.setTooltipState=function(state){var cb=function(){return _this.props.onVisibilityChange(state.tooltipShown)};_this.isControlled()?cb():_this.setState(state,cb)},_this.clearScheduled=function(){clearTimeout(_this.hideTimeout),clearTimeout(_this.showTimeout)},_this.showTooltip=function(_ref){var pageX=_ref.pageX,pageY=_ref.pageY;_this.clearScheduled();var state={tooltipShown:!0};_this.props.followCursor&&(state=(0,_chunk_FD4M6EBV_mjs__WEBPACK_IMPORTED_MODULE_4__.j)({},state,{pageX:pageX,pageY:pageY})),_this.showTimeout=window.setTimeout((function(){return _this.setTooltipState(state)}),_this.props.delayShow)},_this.hideTooltip=function(){_this.clearScheduled(),_this.hideTimeout=window.setTimeout((function(){return _this.setTooltipState({tooltipShown:!1})}),_this.props.delayHide)},_this.toggleTooltip=function(_ref2){var pageX=_ref2.pageX,pageY=_ref2.pageY,action=_this.getState()?"hideTooltip":"showTooltip";_this[action]({pageX:pageX,pageY:pageY})},_this.clickToggle=function(event){event.preventDefault();var pageX=event.pageX,pageY=event.pageY,action=_this.props.followCursor?"showTooltip":"toggleTooltip";_this[action]({pageX:pageX,pageY:pageY})},_this.contextMenuToggle=function(event){event.preventDefault();var pageX=event.pageX,pageY=event.pageY,action=_this.props.followCursor?"showTooltip":"toggleTooltip";_this[action]({pageX:pageX,pageY:pageY})},_this.getTriggerProps=function(props){return void 0===props&&(props={}),(0,_chunk_FD4M6EBV_mjs__WEBPACK_IMPORTED_MODULE_4__.j)({},props,_this.isTriggeredBy("click")&&{onClick:callAll(_this.clickToggle,props.onClick),onTouchEnd:callAll(_this.clickToggle,props.onTouchEnd)},_this.isTriggeredBy("right-click")&&{onContextMenu:callAll(_this.contextMenuToggle,props.onContextMenu)},_this.isTriggeredBy("hover")&&(0,_chunk_FD4M6EBV_mjs__WEBPACK_IMPORTED_MODULE_4__.j)({onMouseEnter:callAll(_this.showTooltip,props.onMouseEnter),onMouseLeave:callAll(_this.hideTooltip,props.onMouseLeave)},_this.props.followCursor&&{onMouseMove:callAll(_this.showTooltip,props.onMouseMove)}),_this.isTriggeredBy("focus")&&{onFocus:callAll(_this.showTooltip,props.onFocus),onBlur:callAll(_this.hideTooltip,props.onBlur)})},_this}(0,_chunk_BVZGY62N_mjs__WEBPACK_IMPORTED_MODULE_3__.PW)(TooltipTrigger2,_Component);var _proto=TooltipTrigger2.prototype;return _proto.componentWillUnmount=function(){this.clearScheduled()},_proto.render=function(){var _this2=this,_this$props=this.props,children=_this$props.children,tooltip=_this$props.tooltip,placement=_this$props.placement,trigger=_this$props.trigger,getTriggerRef=_this$props.getTriggerRef,modifiers=_this$props.modifiers,closeOnReferenceHidden=_this$props.closeOnReferenceHidden,usePortal=_this$props.usePortal,portalContainer=_this$props.portalContainer,followCursor=_this$props.followCursor,getTooltipRef=_this$props.getTooltipRef,mutationObserverOptions=_this$props.mutationObserverOptions,restProps=(0,_chunk_FD4M6EBV_mjs__WEBPACK_IMPORTED_MODULE_4__.B)(_this$props,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),popper=react__WEBPACK_IMPORTED_MODULE_1__.createElement(Popper,(0,_chunk_FD4M6EBV_mjs__WEBPACK_IMPORTED_MODULE_4__.j)({innerRef:getTooltipRef,placement:placement,modifiers:[{name:"followCursor",enabled:followCursor,phase:"main",fn:function(data){_this2.popperOffset=data.state.rects.popper}}].concat(modifiers)},restProps),(function(_ref3){var ref=_ref3.ref,style=_ref3.style,placement2=_ref3.placement,arrowProps=_ref3.arrowProps,isReferenceHidden=_ref3.isReferenceHidden,update=_ref3.update;if(followCursor&&_this2.popperOffset){var _this2$state=_this2.state,pageX=_this2$state.pageX,pageY=_this2$state.pageY,_this2$popperOffset=_this2.popperOffset,width=_this2$popperOffset.width,height=_this2$popperOffset.height,x=pageX+width>window.pageXOffset+document.body.offsetWidth?pageX-width:pageX,y=pageY+height>window.pageYOffset+document.body.offsetHeight?pageY-height:pageY;style.transform="translate3d("+x+"px, "+y+"px, 0"}return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Tooltip,(0,_chunk_FD4M6EBV_mjs__WEBPACK_IMPORTED_MODULE_4__.j)({arrowProps:arrowProps,closeOnReferenceHidden:closeOnReferenceHidden,isReferenceHidden:isReferenceHidden,placement:placement2,update:update,style:style,tooltip:tooltip,trigger:trigger,mutationObserverOptions:mutationObserverOptions},{clearScheduled:_this2.clearScheduled,hideTooltip:_this2.hideTooltip,innerRef:ref}))}));return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Manager,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(Reference,{innerRef:getTriggerRef},(function(_ref4){var ref=_ref4.ref;return children({getTriggerProps:_this2.getTriggerProps,triggerRef:ref})})),this.getState()&&(usePortal?(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(popper,portalContainer):popper))},_proto.isControlled=function(){return void 0!==this.props.tooltipShown},_proto.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},_proto.isTriggeredBy=function(event){var trigger=this.props.trigger;return trigger===event||Array.isArray(trigger)&&trigger.includes(event)},TooltipTrigger2}(react__WEBPACK_IMPORTED_MODULE_1__.Component);TooltipTrigger.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:canUseDOM()?document.body:null,trigger:"hover",usePortal:canUseDOM(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};var react_popper_tooltip_default=TooltipTrigger,match=memoizerific__WEBPACK_IMPORTED_MODULE_5___default()(1e3)(((requests,actual,value,fallback=0)=>actual.split("-")[0]===requests?value:fallback)),Arrow=_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.styled.div({position:"absolute",borderStyle:"solid"},(({placement:placement})=>{let x=0,y=0;switch(!0){case placement.startsWith("left")||placement.startsWith("right"):y=8;break;case placement.startsWith("top")||placement.startsWith("bottom"):x=8}return{transform:`translate3d(${x}px, ${y}px, 0px)`}}),(({theme:theme,color:color,placement:placement})=>({bottom:`${match("top",placement,-8,"auto")}px`,top:`${match("bottom",placement,-8,"auto")}px`,right:`${match("left",placement,-8,"auto")}px`,left:`${match("right",placement,-8,"auto")}px`,borderBottomWidth:`${match("top",placement,"0",8)}px`,borderTopWidth:`${match("bottom",placement,"0",8)}px`,borderRightWidth:`${match("left",placement,"0",8)}px`,borderLeftWidth:`${match("right",placement,"0",8)}px`,borderTopColor:match("top",placement,theme.color[color]||color||"light"===theme.base?(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_7__.tG)(theme.background.app):theme.background.app,"transparent"),borderBottomColor:match("bottom",placement,theme.color[color]||color||"light"===theme.base?(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_7__.tG)(theme.background.app):theme.background.app,"transparent"),borderLeftColor:match("left",placement,theme.color[color]||color||"light"===theme.base?(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_7__.tG)(theme.background.app):theme.background.app,"transparent"),borderRightColor:match("right",placement,theme.color[color]||color||"light"===theme.base?(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_7__.tG)(theme.background.app):theme.background.app,"transparent")}))),Wrapper=_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.styled.div((({hidden:hidden})=>({display:hidden?"none":"inline-block",zIndex:2147483647})),(({theme:theme,color:color,hasChrome:hasChrome})=>hasChrome?{background:theme.color[color]||color||"light"===theme.base?(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_7__.tG)(theme.background.app):theme.background.app,filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*theme.appBorderRadius,fontSize:theme.typography.size.s1}:{})),Tooltip2=({placement:placement,hasChrome:hasChrome,children:children,arrowProps:arrowProps,tooltipRef:tooltipRef,arrowRef:arrowRef,color:color,...props})=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(Wrapper,{hasChrome:hasChrome,placement:placement,ref:tooltipRef,...props,color:color},hasChrome&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(Arrow,{placement:placement,ref:arrowRef,...arrowProps,color:color}),children);Tooltip2.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var{document:document2}=_storybook_global__WEBPACK_IMPORTED_MODULE_8__.global,TargetContainer=_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.styled.div`
  display: inline-block;
  cursor: ${props=>"hover"===props.mode?"default":"pointer"};
`,TargetSvgContainer=_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.styled.g`
  cursor: ${props=>"hover"===props.mode?"default":"pointer"};
`,WithTooltipPure=({svg:svg,trigger:trigger,closeOnClick:closeOnClick,placement:placement,modifiers:modifiers,hasChrome:hasChrome,tooltip:tooltip,children:children,tooltipShown:tooltipShown,onVisibilityChange:onVisibilityChange,...props})=>{let Container=svg?TargetSvgContainer:TargetContainer;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_popper_tooltip_default,{placement:placement,trigger:trigger,modifiers:modifiers,tooltipShown:tooltipShown,onVisibilityChange:onVisibilityChange,tooltip:({getTooltipProps:getTooltipProps,getArrowProps:getArrowProps,tooltipRef:tooltipRef,arrowRef:arrowRef,placement:tooltipPlacement})=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(Tooltip2,{hasChrome:hasChrome,placement:tooltipPlacement,tooltipRef:tooltipRef,arrowRef:arrowRef,arrowProps:getArrowProps(),...getTooltipProps()},"function"==typeof tooltip?tooltip({onHide:()=>onVisibilityChange(!1)}):tooltip)},(({getTriggerProps:getTriggerProps,triggerRef:triggerRef})=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(Container,{ref:triggerRef,...getTriggerProps(),...props},children)))};WithTooltipPure.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var WithToolTipState=({startOpen:startOpen=!1,onVisibilityChange:onChange,...rest})=>{let[tooltipShown,setTooltipShown]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(startOpen),onVisibilityChange=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((visibility=>{onChange&&!1===onChange(visibility)||setTooltipShown(visibility)}),[onChange]);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{let hide=()=>onVisibilityChange(!1);document2.addEventListener("keydown",hide,!1);let iframes=Array.from(document2.getElementsByTagName("iframe")),unbinders=[];return iframes.forEach((iframe=>{let bind=()=>{try{iframe.contentWindow.document&&(iframe.contentWindow.document.addEventListener("click",hide),unbinders.push((()=>{try{iframe.contentWindow.document.removeEventListener("click",hide)}catch{}})))}catch{}};bind(),iframe.addEventListener("load",bind),unbinders.push((()=>{iframe.removeEventListener("load",bind)}))})),()=>{document2.removeEventListener("keydown",hide),unbinders.forEach((unbind=>{unbind()}))}})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(WithTooltipPure,{...rest,tooltipShown:tooltipShown,onVisibilityChange:onVisibilityChange})}}}]);
//# sourceMappingURL=595.c416f9bd.iframe.bundle.js.map