function _get(e,t,o){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var n=_superPropBase(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(o):r.value}})(e,t,o||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var o,n=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return _possibleConstructorReturn(this,o)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"53vn":function(e,t,o){"use strict";o.r(t);var n=o("SVse"),r=o("s7LF"),l=o("PDjf"),i=o("M9ds"),c=o("l0rg"),a=o("8Y7J"),s=o("Dxy4"),u=o("Jql4"),d=o("oJzz"),h=o("8LU1"),f=o("Z5sx");function p(e,t){if(1&e){var o=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"button",4),a["\u0275\u0275listener"]("click",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().show(e)})),a["\u0275\u0275elementEnd"]()}if(2&e){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("disabled",n.disabled)("ngStyle",n.getStyle())}}function m(e,t){if(1&e){var o=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"button",5),a["\u0275\u0275listener"]("click",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().show(e)})),a["\u0275\u0275elementEnd"]()}if(2&e){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("disabled",n.disabled)("ngStyle",n.getStyle())}}var C,g,v=((g=function(){function e(t,o,n){_classCallCheck(this,e),this._control=o,this.changeDetectorRef=n,this.resetcolor=null,this.colorhover=new a.EventEmitter,this._small=!1,this._disabled=null,this._isOpen=!1,this._positions=f.f.default,this.onTouchedCallback=function(e){},this.onChangeCallback=function(e){},this._control&&(this._control.valueAccessor=this),this.ownerElement=t.nativeElement}return _createClass(e,[{key:"writeValue",value:function(e){this._value=e,this.changeDetectorRef.markForCheck()}},{key:"registerOnChange",value:function(e){this.onChangeCallback=e}},{key:"registerOnTouched",value:function(e){this.onTouchedCallback=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"show",value:function(e){return this.disabled||(this.dejaOverlayCmp.show(e),this.isOpen=!0,this.changeDetectorRef.markForCheck()),!1}},{key:"close",value:function(){this.isOpen=!1}},{key:"onColorChange",value:function(e){this.isOpen=!1,this.value=e}},{key:"getStyle",value:function(){var e=this.value&&this.value.toHex();return e?{"background-color":e}:null}},{key:"isOpen",set:function(e){this._isOpen=Object(h.b)(e)||null},get:function(){return this._isOpen}},{key:"positions",set:function(e){this._positions="string"==typeof e?f.f.parse(e):e},get:function(){return this._positions}},{key:"small",set:function(e){this._small=Object(h.b)(e)},get:function(){return this._small}},{key:"disabled",set:function(e){this._disabled=Object(h.b)(e),this.changeDetectorRef.markForCheck()},get:function(){return this._disabled}},{key:"value",set:function(e){f.b.equals(e,this._value)||(this.writeValue(e),this.onChangeCallback(e))},get:function(){return this._value}}]),e}()).\u0275fac=function(e){return new(e||g)(a["\u0275\u0275directiveInject"](a.ElementRef),a["\u0275\u0275directiveInject"](r.NgControl,10),a["\u0275\u0275directiveInject"](a.ChangeDetectorRef))},g.\u0275cmp=a["\u0275\u0275defineComponent"]({type:g,selectors:[["deja-color-picker"]],viewQuery:function(e,t){var o;1&e&&a["\u0275\u0275staticViewQuery"](d.a,!0),2&e&&a["\u0275\u0275queryRefresh"](o=a["\u0275\u0275loadQuery"]())&&(t.dejaOverlayCmp=o.first)},hostVars:1,hostBindings:function(e,t){2&e&&a["\u0275\u0275attribute"]("disabled",t._disabled)},inputs:{resetcolor:"resetcolor",isOpen:"isOpen",positions:"positions",small:"small",disabled:"disabled",colors:"colors"},outputs:{colorhover:"colorhover"},decls:4,vars:8,consts:[["type","button","id","colorbtn","mat-fab","",3,"disabled","ngStyle","click",4,"ngIf"],["type","button","id","colorbtn","mat-mini-fab","",3,"disabled","ngStyle","click",4,"ngIf"],["overlayBackdropClass","cdk-overlay-dark-backdrop",3,"ownerElement","isVisible","positions","closed"],[3,"resetcolor","colors","ngModel","colorhover","ngModelChange"],["type","button","id","colorbtn","mat-fab","",3,"disabled","ngStyle","click"],["type","button","id","colorbtn","mat-mini-fab","",3,"disabled","ngStyle","click"]],template:function(e,t){1&e&&(a["\u0275\u0275template"](0,p,1,2,"button",0),a["\u0275\u0275template"](1,m,1,2,"button",1),a["\u0275\u0275elementStart"](2,"deja-overlay",2),a["\u0275\u0275listener"]("closed",(function(){return t.close()})),a["\u0275\u0275elementStart"](3,"deja-color-selector",3),a["\u0275\u0275listener"]("colorhover",(function(e){return t.colorhover.emit(e)}))("ngModelChange",(function(e){return t.onColorChange(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275property"]("ngIf",!t.small),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.small),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ownerElement",t.ownerElement)("isVisible",t.isOpen)("positions",t.positions),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("resetcolor",t.resetcolor)("colors",t.colors)("ngModel",t.value))},directives:[n.n,d.a,u.a,r.NgControlStatus,r.NgModel,s.b,n.o],styles:["deja-color-picker #colorbtn[disabled]{-webkit-filter:grayscale(100%);filter:grayscale(100%)}.deja-overlay-container deja-color-selector{overflow:hidden;max-width:24rem;min-height:15rem}"],encapsulation:2,changeDetection:0}),g),b=((C=function e(){_classCallCheck(this,e)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[n.c,r.FormsModule,u.b,s.c,d.b]]}),C),y=o("KYkd"),k=o("iInd"),_=o("iss+");function x(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"mat-card",5),a["\u0275\u0275element"](1,"deja-markdown",6),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("url","https://raw.githubusercontent.com/DSI-HUG/dejajs-components/dev/projects/deja-js/component/color-selector/readme.md"))}function w(e,t){if(1&e){var o=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div"),a["\u0275\u0275elementStart"](1,"mat-card",7),a["\u0275\u0275elementStart"](2,"mat-toolbar",8),a["\u0275\u0275text"](3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"mat-card-content",9),a["\u0275\u0275elementStart"](5,"deja-color-picker",10),a["\u0275\u0275listener"]("ngModelChange",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().selectedColor=e}))("colorhover",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().onColorPickerHover(e)}))("ngModelChange",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().onColorPickerChange(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"deja-color-picker",11),a["\u0275\u0275listener"]("ngModelChange",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().invalidColor=e}))("colorhover",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().onColorPickerHover(e)}))("ngModelChange",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().onColorPickerChange(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"deja-color-picker",12),a["\u0275\u0275listener"]("ngModelChange",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().selectedColor=e}))("colorhover",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().onColorPickerHover(e)}))("ngModelChange",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().onColorPickerChange(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"mat-card",7),a["\u0275\u0275elementStart"](9,"mat-toolbar",8),a["\u0275\u0275text"](10,"Color Selector - Pick a color:"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"mat-card-content"),a["\u0275\u0275elementStart"](12,"div",13),a["\u0275\u0275elementStart"](13,"deja-color-selector",14),a["\u0275\u0275listener"]("ngModelChange",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().selectedColor=e}))("colorhover",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().onColorPickerHover(e)}))("ngModelChange",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().onColorPickerChange(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"mat-card",7),a["\u0275\u0275elementStart"](15,"mat-toolbar",8),a["\u0275\u0275text"](16,"Color Selector - Disabled:"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](17,"mat-card-content",9),a["\u0275\u0275elementStart"](18,"deja-color-selector",15),a["\u0275\u0275listener"]("ngModelChange",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().selectedColor=e}))("colorhover",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().onColorPickerHover(e)}))("ngModelChange",(function(e){return a["\u0275\u0275restoreView"](o),a["\u0275\u0275nextContext"]().onColorPickerChange(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"]("Color Picker width backdrop - Pick a color: (selected color: ",n.selectedColor.toHex(),");"),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("colors",n.materialColors.colors)("ngModel",n.selectedColor),a["\u0275\u0275attribute"]("hexx",n.selectedColor&&n.selectedColor.toHex()),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("colors",n.materialColors.colors)("ngModel",n.invalidColor),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("colors",n.materialColors.colors)("ngModel",n.selectedColor),a["\u0275\u0275advance"](5),a["\u0275\u0275styleProp"]("background-color",n.hoveredColor&&n.hoveredColor.toHex()||n.selectedColor.toHex()),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("colors",n.materialColors.colors)("ngModel",n.selectedColor),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("colors",n.materialColors.colors)("ngModel",n.selectedColor)}}var S,O=k.f.forChild([{path:"",component:(S=function(){function e(t){_classCallCheck(this,e),this.materialColors=t,this.tabIndex=1,this.selectedColor=new f.b(233,30,99),this.invalidColor=f.b.fromHex("#D02D06")}return _createClass(e,[{key:"onColorPickerHover",value:function(e){this.hoveredColor=e.color}},{key:"onColorPickerChange",value:function(e){this.hoveredColor=e.color}}]),e}(),S.\u0275fac=function(e){return new(e||S)(a["\u0275\u0275directiveInject"](f.B))},S.\u0275cmp=a["\u0275\u0275defineComponent"]({type:S,selectors:[["deja-color-selector-demo"]],decls:5,vars:3,consts:[[3,"selectedIndex","selectedTabChange"],["label","API REFERENCE"],["label","EXAMPLES"],["class","demo-card demo-basic",4,"ngIf"],[4,"ngIf"],[1,"demo-card","demo-basic"],[3,"url"],[1,"demo-card"],["color","primary"],["id","colorpickers"],["name","1",1,"colorpicker",3,"colors","ngModel","ngModelChange","colorhover"],["name","2","resetcolor","red","small","",1,"colorpicker",3,"colors","ngModel","ngModelChange","colorhover"],["name","3","disabled","","small","",1,"colorpicker",3,"colors","ngModel","ngModelChange","colorhover"],["id","hoveredColor"],["name","4",3,"colors","ngModel","ngModelChange","colorhover"],["name","5","disabled","",3,"colors","ngModel","ngModelChange","colorhover"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"mat-tab-group",0),a["\u0275\u0275listener"]("selectedTabChange",(function(e){return t.tabIndex=e.index})),a["\u0275\u0275element"](1,"mat-tab",1),a["\u0275\u0275element"](2,"mat-tab",2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](3,x,2,1,"mat-card",3),a["\u0275\u0275template"](4,w,19,14,"div",4)),2&e&&(a["\u0275\u0275property"]("selectedIndex",t.tabIndex),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",0===t.tabIndex),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",1===t.tabIndex))},directives:[i.b,i.a,n.n,l.a,_.a,c.a,l.c,v,r.NgControlStatus,r.NgModel,u.a],styles:["[_nghost-%COMP%]   deja-color-selector[_ngcontent-%COMP%]{background-color:#222}[_nghost-%COMP%]   deja-color-selector[disabled][_ngcontent-%COMP%]{margin:1rem 2rem 3rem}[_nghost-%COMP%]   #hoveredColor[_ngcontent-%COMP%]{width:100%;margin:1rem 0 3rem;padding:5rem 0;transition:background-color .5s ease}[_nghost-%COMP%]   #colorpickers[_ngcontent-%COMP%]{flex-direction:row}[_nghost-%COMP%]   #colorpickers[_ngcontent-%COMP%]   .colorpicker[_ngcontent-%COMP%]{margin-right:1rem}"]}),S)},{path:"**",redirectTo:"",pathMatch:"full"}]);o.d(t,"DejaColorSelectorDemoModule",(function(){return M}));var P,M=((P=function e(){_classCallCheck(this,e)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:P}),P.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||P)},providers:[],imports:[[n.c,r.FormsModule,l.d,i.c,c.b,u.b,b,y.a,O]]}),P)},"6eBy":function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o("l7GE"),r=o("ZUHj");function l(e){return function(t){return t.lift(new i(e))}}var i=function(){function e(t){_classCallCheck(this,e),this.durationSelector=t}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new c(e,this.durationSelector))}}]),e}(),c=function(e){_inherits(o,e);var t=_createSuper(o);function o(e,n){var r;return _classCallCheck(this,o),(r=t.call(this,e)).durationSelector=n,r.hasValue=!1,r.durationSubscription=null,r}return _createClass(o,[{key:"_next",value:function(e){try{var t=this.durationSelector.call(this,e);t&&this._tryNext(e,t)}catch(o){this.destination.error(o)}}},{key:"_complete",value:function(){this.emitValue(),this.destination.complete()}},{key:"_tryNext",value:function(e,t){var o=this.durationSubscription;this.value=e,this.hasValue=!0,o&&(o.unsubscribe(),this.remove(o)),(o=Object(r.a)(this,t))&&!o.closed&&this.add(this.durationSubscription=o)}},{key:"notifyNext",value:function(e,t,o,n,r){this.emitValue()}},{key:"notifyComplete",value:function(){this.emitValue()}},{key:"emitValue",value:function(){if(this.hasValue){var e=this.value,t=this.durationSubscription;t&&(this.durationSubscription=null,t.unsubscribe(),this.remove(t)),this.value=null,this.hasValue=!1,_get(_getPrototypeOf(o.prototype),"_next",this).call(this,e)}}}]),o}(n.a)}}]);