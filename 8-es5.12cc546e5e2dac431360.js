function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(c){r=!0,i=c}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GJmQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("7o/Q");function r(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){return n.lift(new i(e,t))}}var i=function(){function e(t,n){_classCallCheck(this,e),this.predicate=t,this.inclusive=n}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new s(e,this.predicate,this.inclusive))}}]),e}(),s=function(e){function t(e,n,o){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).predicate=n,r.inclusive=o,r.index=0,r}return _inherits(t,e),_createClass(t,[{key:"_next",value:function(e){var t,n=this.destination;try{t=this.predicate(e,this.index++)}catch(o){return void n.error(o)}this.nextOrComplete(e,t)}},{key:"nextOrComplete",value:function(e,t){var n=this.destination;Boolean(t)?n.next(e):(this.inclusive&&n.next(e),n.complete())}}]),t}(o.a)},Jql4:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return B})),n("mrSG");var o=n("SVse"),r=n("8Y7J"),i=n("s7LF"),s=n("Dxy4"),a=n("Tj54"),c=n("2Vo4"),l=n("Cfvw"),u=n("itXk"),d=n("XNiG"),b=n("PqYM"),f=n("VRyK"),h=n("xgIS"),p=n("lJxs"),v=n("vkgz"),y=n("1G5W"),_=n("/uUt"),C=n("6eBy"),O=n("Kj3r"),g=n("3E0/"),m=n("pLZG"),k=n("SxV6"),j=n("8LU1"),x=n("Z5sx"),w=["*"];function F(e,t){if(1&e&&r["\u0275\u0275element"](0,"deja-color-fab",5),2&e){var n=t.index;r["\u0275\u0275property"]("color",t.$implicit),r["\u0275\u0275attribute"]("index",n)}}function $(e,t){if(1&e&&r["\u0275\u0275element"](0,"deja-color-fab",6),2&e){var n=t.$implicit,o=t.index;r["\u0275\u0275styleProp"]("transition-duration",100*o+"ms"),r["\u0275\u0275property"]("color",n),r["\u0275\u0275attribute"]("index",o)}}function M(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",7),r["\u0275\u0275listener"]("click",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().resetDefaultColor()})),r["\u0275\u0275elementStart"](1,"mat-icon"),r["\u0275\u0275text"](2,"undo"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){var o=r["\u0275\u0275nextContext"]();r["\u0275\u0275styleProp"]("background-color",o._resetcolor.toHex()),r["\u0275\u0275advance"](1),r["\u0275\u0275styleProp"]("color",o.getBestTextColor(o._resetcolor.toHex()))}}var I,E=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];_classCallCheck(this,e),this._color=t,this._disabled=n,this._active=o,this.color$=new c.a(t),this.disabled$=new c.a(n),this.active$=new c.a(o)}return _createClass(e,[{key:"color",set:function(e){this.color$.next(this._color=e)},get:function(){return this._color}},{key:"disabled",set:function(e){this.disabled$.next(this._disabled=e)},get:function(){return this._disabled}},{key:"active",set:function(e){this.active$.next(this._active=e)},get:function(){return this._active}}]),e}(),P=function(){var e=function(){function e(t){_classCallCheck(this,e),this.subscriptions=[],this.element=t.nativeElement}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.subscriptions.forEach((function(e){return e.unsubscribe()}))}},{key:"color",set:function(e){var t=this;if(this._colorFab=e,e){this.subscriptions.push(Object(l.a)(e.active$).subscribe((function(e){return function(e,n){n?t.element.setAttribute(e,n.toString()):t.element.removeAttribute(e)}("active",e)}))),this.subscriptions.push(Object(u.b)(e.color$,e.disabled$).pipe(Object(p.a)((function(e){var t=_slicedToArray(e,2),n=t[0],o=t[1];return n&&o?n.grayScale:n}))).subscribe((function(e){return t.element.style.backgroundColor=e?e.toHex():""})))}else this.subscriptions.forEach((function(e){return e.unsubscribe()})),this.subscriptions=[]}},{key:"tile",get:function(){return this._colorFab}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ElementRef))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-color-fab"]],inputs:{color:"color"},ngContentSelectors:w,decls:1,vars:0,template:function(e,t){1&e&&(r["\u0275\u0275projectionDef"](),r["\u0275\u0275projection"](0))},styles:["[_nghost-%COMP%]{border-radius:50%;cursor:pointer;transition:.2s linear;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:space-around;margin:.45rem}[small][_nghost-%COMP%]{width:1.65rem;height:1.65rem;margin:.3rem}[active][_nghost-%COMP%]{transform:scale(1.4,1.4);transition:transform .2s linear!important}"]}),e}(),S=function(){var e=I=function(){function e(t,n){var o=this;_classCallCheck(this,e),this._control=n,this.colorhover=new r.EventEmitter,this._colors$=new c.a([]),this._resetcolor$=new c.a(null),this._colorFabs=[],this._subColorFabs=[],this._selectedBaseIndex=0,this._disabled=!1,this.selectedBaseIndex$=new c.a(0),this.selectedSubIndex$=new c.a(0),this.hilightedBaseIndex$=new d.a,this.hilightedSubIndex$=new d.a,this.destroyed$=new d.a,this.onTouchedCallback=function(e){},this.onChangeCallback=function(e){};var i=t.nativeElement;this._control&&(this._control.valueAccessor=this),this._colorFabs$=Object(l.a)(this._colors$).pipe(Object(p.a)((function(e){return e.map((function(e,t){return new E(e,o._disabled,t===o._selectedBaseIndex)}))})),Object(v.a)((function(e){return o._colorFabs=e}))),Object(u.b)(this._colors$,this._resetcolor$).pipe(Object(y.a)(this.destroyed$)).subscribe((function(e){var t,n=_slicedToArray(e,2),r=n[0],i=n[1];r&&r.length&&i?(r.reduce((function(e,t){var n=t;return n.subColors?e=[].concat(_toConsumableArray(e),_toConsumableArray(n.subColors)):e.push(t),e}),[]).reduce((function(e,n){var o=.3*Math.abs(n.r-i.r)+.4*Math.abs(n.g-i.g)+.25*Math.abs(n.b-i.b);return o<e?(t=n,o):e}),765),o._resetcolor=t):o._resetcolor=void 0}));var s=Object(l.a)(this.hilightedBaseIndex$).pipe(Object(_.a)(),Object(C.a)((function(e){return Object(b.a)(void 0!==e?100:1e3)})),Object(v.a)((function(e){o.hilightedBaseIndex=e;var t=new CustomEvent("ColorEvent",{});t.color=e?o._colorFabs&&o._colorFabs[e]&&o._colorFabs[e].color:o.value,o.colorhover.emit(t)})),Object(p.a)((function(e){return void 0!==e?e:o._selectedBaseIndex||0}))),a=Object(l.a)(this.selectedBaseIndex$).pipe(Object(v.a)((function(e){return o._selectedBaseIndex=e})));this._subColorFabs$=Object(f.a)(s,a).pipe(Object(_.a)(),Object(v.a)((function(e){o._colorFabs&&o._colorFabs.forEach((function(t,n){return t.active=n===e}))})),Object(O.a)(100),Object(v.a)((function(){return i.setAttribute("sub-tr","")})),Object(p.a)((function(e){return o._colorFabs&&o._colorFabs[e]&&o._colorFabs[e].color.subColors})),Object(p.a)((function(e){var t;return null===(t=e)||void 0===t?void 0:t.map((function(e,t){return new E(e,o._disabled,t===o._selectedSubIndex)}))})),Object(v.a)((function(e){return o._subColorFabs=e}))),this._subColorFabs$.pipe(Object(g.a)(100),Object(y.a)(this.destroyed$)).subscribe((function(){return i.removeAttribute("sub-tr")}));var k=Object(l.a)(this.hilightedSubIndex$).pipe(Object(_.a)(),Object(C.a)((function(e){return Object(b.a)(void 0!==e?200:1100)})),Object(v.a)((function(e){o.hilightedSubIndex=e;var t=new CustomEvent("ColorEvent",{});t.color=void 0!==e?o._subColorFabs&&o._subColorFabs[e]&&o._subColorFabs[e].color:o.value,o.colorhover.emit(t)})),Object(p.a)((function(e){return void 0!==e?e:o._selectedSubIndex||0}))),j=Object(l.a)(this.selectedSubIndex$).pipe(Object(_.a)(),Object(v.a)((function(e){return o._selectedSubIndex=e})));Object(f.a)(k,j).pipe(Object(m.a)((function(){return!!o._subColorFabs})),Object(y.a)(this.destroyed$)).subscribe((function(e){return o._subColorFabs.forEach((function(t,n){return t.active=n===e}))})),Object(h.a)(i,"mousemove").pipe(Object(m.a)((function(){return!o._disabled})),Object(y.a)(this.destroyed$)).subscribe((function(e){var t=e.target,n=t.attributes[I.indexAttribute];t.hasAttribute("basecolor")?(o.hilightedBaseIndex$.next(+n.value),o.hilightedSubIndex$.next(o.hilightedSubIndex)):t.hasAttribute("subcolor")?(o.hilightedBaseIndex$.next(o.hilightedBaseIndex),o.hilightedSubIndex$.next(+n.value)):(o.hilightedBaseIndex$.next(),o.hilightedSubIndex$.next())})),Object(h.a)(i,"click").pipe(Object(m.a)((function(){return!o._disabled})),Object(y.a)(this.destroyed$)).subscribe((function(e){var t=e.target;(t.hasAttribute("basecolor")||t.hasAttribute("subcolor"))&&(o.value=x.b.parse(t.style.backgroundColor))}))}return _createClass(e,[{key:"getBestTextColor",value:function(e){return x.b.fromHex(e).bestTextColor.toHex()}},{key:"resetDefaultColor",value:function(){this.value=this._resetcolor}},{key:"writeValue",value:function(e){this._value=e,this.selectedColor=e}},{key:"registerOnChange",value:function(e){this.onChangeCallback=e}},{key:"registerOnTouched",value:function(e){this.onTouchedCallback=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"ngOnDestroy",value:function(){this.destroyed$.next(),this.destroyed$.unsubscribe()}},{key:"subColorFabs",get:function(){return this._subColorFabs}},{key:"subColorFabs$",get:function(){return this._subColorFabs$}},{key:"colorFabs$",get:function(){return this._colorFabs$}},{key:"resetcolor",set:function(e){""===e&&(e=new x.b);var t=e&&("string"==typeof e?x.b.parse(e):e);this._resetcolor$.next(t||null)}},{key:"disabled",set:function(e){var t=Object(j.b)(e);this._colorFabs&&this._colorFabs.forEach((function(e){return e.disabled=t})),this._subColorFabs&&this._subColorFabs.forEach((function(e){return e.disabled=t})),this._disabled=t||null},get:function(){return this._disabled}},{key:"colors",set:function(e){this._colors$.next(e||[]),this.selectedBaseIndex$.next(0)}},{key:"selectedColor",set:function(e){var t=this,n=function(e){Object(b.a)(1).pipe(Object(k.a)(),Object(y.a)(t.destroyed$)).subscribe((function(){return t.selectedSubIndex$.next(e)}))};this._colorFabs&&(this._colorFabs.find((function(o,r){var i,s=o.color,a=null===(i=s.subColors)||void 0===i?void 0:i.findIndex((function(t){return x.b.equals(t,e)}));return void 0!==a&&a>=0?(t.selectedBaseIndex$.next(r),n(a),!0):!!x.b.equals(s,e)&&(t.selectedBaseIndex$.next(r),n(0),!0)}))||(this.selectedBaseIndex$.next(0),n(0)))}},{key:"value",set:function(e){x.b.equals(e,this._value)||(this.writeValue(e),this.onChangeCallback(e))},get:function(){return this._value}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](i.NgControl,10))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-color-selector"]],inputs:{resetcolor:"resetcolor",disabled:"disabled",colors:"colors"},outputs:{colorhover:"colorhover"},decls:7,vars:7,consts:[["id","basecolors",1,"colors-wrapper"],["basecolor","","small","",3,"color",4,"ngFor","ngForOf"],["id","subcolors",1,"colors-wrapper"],["subcolor","",3,"transition-duration","color",4,"ngFor","ngForOf"],["id","reset",3,"background-color","click",4,"ngIf"],["basecolor","","small","",3,"color"],["subcolor","",3,"color"],["id","reset",3,"click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275template"](1,F,1,2,"deja-color-fab",1),r["\u0275\u0275pipe"](2,"async"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"div",2),r["\u0275\u0275template"](4,$,1,4,"deja-color-fab",3),r["\u0275\u0275pipe"](5,"async"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](6,M,3,4,"div",4)),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",r["\u0275\u0275pipeBind1"](2,3,t.colorFabs$)),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",r["\u0275\u0275pipeBind1"](5,5,t.subColorFabs$)),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!!t._resetcolor))},directives:[o.m,o.n,P,a.a],pipes:[o.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .colors-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap;margin:1rem .5rem}[_nghost-%COMP%]   .colors-wrapper[_ngcontent-%COMP%]   deja-color-fab[_ngcontent-%COMP%]{float:left}[_nghost-%COMP%]   .colors-wrapper[_ngcontent-%COMP%]   #subcolors[_ngcontent-%COMP%]   deja-color-fab[_ngcontent-%COMP%]{opacity:1}[sub-tr][_nghost-%COMP%]   #subcolors.colors-wrapper[_ngcontent-%COMP%]   deja-color-fab[_ngcontent-%COMP%]{opacity:0;transform:scale(0,0)}[_nghost-%COMP%]   #reset[_ngcontent-%COMP%]{padding:.5rem 0;cursor:pointer;text-align:center}"]}),e.indexAttribute="index",e}(),B=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,a.b,s.c]]}),e}()},oJzz:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p})),n("mrSG");var o=n("1O3W"),r=n("SVse"),i=n("8Y7J"),s=n("Z5sx"),a=n("8LU1"),c=n("PqYM"),l=n("GJmQ"),u=n("1G5W"),d=n("SxV6");function b(e,t){1&e&&i["\u0275\u0275projection"](0)}var f=["*"],h=function(){var e=function(e){function t(e,n,o,r){var a;return _classCallCheck(this,t),(a=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).changeDetectorRef=e,a.elementRef=n,a.overlayContainer=o,a._isVisible=!1,a.overlayBackdropClass="cdk-overlay-transparent-backdrop",a._hasBackdrop=!0,a._width=null,a._widthForMobile="100%",a.visibleChange=new i.EventEmitter,a.closed=new i.EventEmitter,a.overlayOffsetX=0,a.overlayOffsetY=0,a._positions=s.f.default,a._isMobile=!1,a.disableMediaService=!1,a.overlayContainer.getContainerElement().addEventListener("contextmenu",(function(e){return e.preventDefault(),!1})),r.isMobile$.pipe(Object(l.a)((function(){return!a.disableMediaService})),Object(u.a)(a.destroyed$)).subscribe((function(e){a._isMobile=e,a.updateOriginOverlay(),a.changeDetectorRef.markForCheck()})),a}return _inherits(t,e),_createClass(t,[{key:"updatePosition",value:function(){var e,t;null===(t=null===(e=this.overlay)||void 0===e?void 0:e.overlayRef)||void 0===t||t.updatePosition()}},{key:"show",value:function(e,t){var n=this;this.overlayOffsetX=void 0!==t?+e:0,this.overlayOffsetY=t||0,this.overlayOrigin=new o.b(new i.ElementRef(this.isMobile&&document.body||e&&e.target||this.ownerElement||this.elementRef.nativeElement)),this.isVisible=!0,this.changeDetectorRef.markForCheck(),Object(c.a)(1).pipe(Object(d.a)(),Object(u.a)(this.destroyed$)).subscribe((function(){return n.updatePosition()}))}},{key:"close",value:function(){this.isVisible=!1,this.closed.emit(!0),this.changeDetectorRef.markForCheck()}},{key:"updateOriginOverlay",value:function(){this.overlayOrigin=new o.b(new i.ElementRef(this.isMobile&&document.body||this._ownerElement||this.elementRef.nativeElement))}},{key:"isVisible",get:function(){return this._isVisible},set:function(e){var t=Object(a.b)(e);if(this._isVisible!==t){var n;this._isVisible=t;var o=this.overlayContainer.getContainerElement(),r=new Array;o.classList.forEach((function(e){e.startsWith("cdk")||r.push(e)})),r.length&&(n=o.classList).remove.apply(n,r),o.classList.add("deja-overlay-container"),this.overlayContainerClass&&o.classList.add(this.overlayContainerClass),this.changeDetectorRef.markForCheck(),this.visibleChange.emit(this.isVisible)}}},{key:"hasBackdrop",set:function(e){this._hasBackdrop=Object(a.b)(e)},get:function(){return this._hasBackdrop}},{key:"ownerElement",set:function(e){this._ownerElement=e,this.updateOriginOverlay()}},{key:"positions",get:function(){return this.isMobile?this._positionsForMobile?this._positionsForMobile:s.f.parse("start top start top"):this._positions},set:function(e){this._positions="string"==typeof e?s.f.parse(e):e}},{key:"positionsForMobile",set:function(e){this._positionsForMobile="string"==typeof e?s.f.parse(e):e}},{key:"isMobile",get:function(){return this._isMobile},set:function(e){this._isMobile=Object(a.b)(e),this.updateOriginOverlay(),this.disableMediaService=!0}},{key:"width",get:function(){return this._width},set:function(e){this._width=e}},{key:"widthForMobile",get:function(){return this._widthForMobile},set:function(e){this._widthForMobile=e}},{key:"overlayWidth",get:function(){return this.isMobile?this._widthForMobile:this._width}}]),t}(s.s);return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](i.ChangeDetectorRef),i["\u0275\u0275directiveInject"](i.ElementRef),i["\u0275\u0275directiveInject"](o.f),i["\u0275\u0275directiveInject"](s.D))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-overlay"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275staticViewQuery"](o.a,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.overlay=n.first)},inputs:{overlayBackdropClass:"overlayBackdropClass",overlayOffsetX:"overlayOffsetX",overlayOffsetY:"overlayOffsetY",isVisible:"isVisible",hasBackdrop:"hasBackdrop",ownerElement:"ownerElement",positions:"positions",positionsForMobile:"positionsForMobile",isMobile:"isMobile",width:"width",widthForMobile:"widthForMobile",overlayContainerClass:"overlayContainerClass"},outputs:{visibleChange:"visibleChange",closed:"closed"},features:[i["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:f,decls:2,vars:8,consts:[["cdk-connected-overlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayBackdropClass","cdkConnectedOverlayOpen","cdkConnectedOverlayOffsetY","cdkConnectedOverlayOffsetX","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","detach"],["overlayCmp",""]],template:function(e,t){1&e&&(i["\u0275\u0275projectionDef"](),i["\u0275\u0275template"](0,b,1,0,"ng-template",0,1,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275listener"]("backdropClick",(function(e){return t.close()}))("detach",(function(e){return t.close()}))),2&e&&i["\u0275\u0275property"]("cdkConnectedOverlayHasBackdrop",t.hasBackdrop)("cdkConnectedOverlayBackdropClass",t.overlayBackdropClass)("cdkConnectedOverlayOpen",t.isVisible)("cdkConnectedOverlayOffsetY",t.overlayOffsetY)("cdkConnectedOverlayOffsetX",t.overlayOffsetX)("cdkConnectedOverlayOrigin",t.overlayOrigin)("cdkConnectedOverlayPositions",t.positions)("cdkConnectedOverlayWidth",t.overlayWidth)},directives:[o.a],styles:["@media print{.deja-overlay-container{display:none}}"],encapsulation:2,changeDetection:0}),e}(),p=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,o.g,s.C]]}),e}()}}]);