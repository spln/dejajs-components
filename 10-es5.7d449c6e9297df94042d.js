function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,o=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=_superPropBase(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6SPM":function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return O}));var i,r,o=n("SVse"),s=n("8Y7J"),a=n("8LU1"),c=n("s7LF"),u=n("Z5sx"),l=n("LvDl"),d=n("PqYM"),h=n("XNiG"),f=n("SxV6"),p=n("1G5W"),y=n("IzEk"),v=n("Q2Ze"),_=n("Paro"),g=n("UhP/"),b=["host"],m=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"initDejaEditorLib",value:function(){return this._loading||this.init(),this._loader}},{key:"init",value:function(){var e=this;this._loader=new Promise((function(t){if(e._loading=!0,!window.ckeditor){var n=(document.getElementsByTagName("base")[0]||{}).href,i=window.CKEDITOR_BASEPATH||n+"assets/ckeditor/",r=document.createElement("script");document.head.appendChild(r),r.type="text/javascript",r.src=i+"ckeditor.js",r.addEventListener("load",t)}}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e}(),T=function(){var e=i=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i,r){var o;return _classCallCheck(this,n),(o=t.call(this)).zone=e,o._changeDetectorRef=i,o._initializer=r,o.change=new s.EventEmitter,o.ready=new s.EventEmitter,o.blur=new s.EventEmitter,o.focus=new s.EventEmitter,o.disabled=new s.EventEmitter,o._inline=!0,o._value="",o}return _createClass(n,[{key:"ngOnChanges",value:function(e){e.readonly&&this.instance&&this.instance.setReadOnly(e.readonly.currentValue)}},{key:"ngOnDestroy",value:function(){var e=this;if(_get(_getPrototypeOf(n.prototype),"ngOnDestroy",this).call(this),this.focus.complete(),this.blur.complete(),this.change.complete(),this.disabled.complete(),this.instance)if(this.instance.focusManager.blur(!0),this._ready){try{this.instance.destroy()}catch(t){console.warn(t,"Error occurred when destroying ckEditor instance")}this.ready.complete(),this.instance=null}else this.ready.pipe(Object(f.a)()).subscribe((function(){try{e.instance.destroy()}catch(t){console.warn(t,"Error occurred when destroying ckEditor instance")}e.instance=null,e.ready.complete()}))}},{key:"ngAfterViewInit",value:function(){var e=this;this._initializer.initDejaEditorLib().then((function(){e.ckeditorInit(Object(l.cloneDeep)(e.config)||{}),e.destroyed$.closed||Object(d.a)(0).pipe(Object(p.a)(e.destroyed$)).subscribe((function(){return e._changeDetectorRef.markForCheck()}))}))}},{key:"updateValue",value:function(){var e=this;this.zone.run((function(){var t=e.instance.getData();t||(t=null),e.value!==t&&(e.value=t,e.onChange(t),e.change.emit(t))}))}},{key:"textAreaChange",value:function(){var e=this;this.zone.run((function(){var t=e.host.nativeElement.value;e.onChange(t),e.change.emit(t)}))}},{key:"ckeditorInit",value:function(e){var t,n=this;if("undefined"==typeof CKEDITOR)console.warn("CKEditor 4.x is missing (http://ckeditor.com/)");else{if(this.instance)return;this.readonly&&(e.readOnly=this.readonly);var i=null===(t=e.on)||void 0===t?void 0:t.key;e.on||(e.on={}),e.on.key=function(e){1114177===e.data.code&&(e.cancel(),e.stop(),n.instance.document.$.execCommand("SelectAll")),i&&i(e)},this.instance=this.inline?CKEDITOR.inline(this.host.nativeElement,e):CKEDITOR.replace(this.host.nativeElement,e),this.instance.setData(this.value),this.instance.on("instanceReady",(function(e){n._ready=!0,n.ready.emit(e)})),this.instance.on("change",(function(){var e;if(n.debounce){var t=parseInt(n.debounce,10);null===(e=n.debounceTimeout$sub)||void 0===e||e.unsubscribe(),n.debounceTimeout$sub=Object(d.a)(t).pipe(Object(p.a)(n.destroyed$)).subscribe((function(){n.updateValue(),n.debounceTimeout$sub=null}))}else n.updateValue()})),this.instance.on("blur",(function(e){n.blur.emit(e),n.onTouched()})),this.instance.on("focus",(function(e){n.readonly||n.focus.emit(e)}))}}},{key:"writeValue",value:function(e){var t=this;this._value=e,this.destroyed$.closed||Object(d.a)(0).pipe(Object(p.a)(this.destroyed$)).subscribe((function(){t.instance?t.instance.setData(e):t.host.nativeElement.value=e}))}},{key:"onChange",value:function(e){}},{key:"onTouched",value:function(){}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){var t=this;this.readonly=e,this.disabled.next(e),this._ready?this.instance&&this.instance.setReadOnly(e):this.destroyed$.closed||this.ready.pipe(Object(y.a)(1),Object(p.a)(this.destroyed$)).subscribe((function(){t.instance.setReadOnly(t.readonly)}))}},{key:"getWordAtCursor",value:function(){var e=this.instance.getSelection().getRanges(!0)[0];if(!e)return null;var t=this._firstTextNode(e);return t&&t.toReplace||null}},{key:"hasActiveSelection",value:function(){return!!this.getSelectedText()}},{key:"getSelectedText",value:function(){return this.instance.getSelection().getSelectedText()}},{key:"replace",value:function(e){if(e){if(this.getSelectedText()){var t=this.instance.focus;return this.instance.focus=function(){},this.instance.insertHtml(e),void(this.instance.focus=t)}var n=this.instance.getSelection().getRanges(!0)[0];if(n){var i=this._firstTextNode(n);i?this._replaceWord(i,e):this.instance.insertHtml(e),this.updateValue(),this.setFocus()}else this.instance.insertHtml(e)}}},{key:"setFocus",value:function(){this.instance?this.instance.focus():this.host.nativeElement.focus()}},{key:"_hasTextNodeAsChild",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getChildren().toArray();if(t)for(var i=n.length-1;i>=0;i--){var r=n[i];if(r.type===CKEDITOR.NODE_TEXT)return r;var o=this._hasTextNodeAsChild(r);if(o)return o}else{var s,a=_createForOfIteratorHelper(n);try{for(a.s();!(s=a.n()).done;){var c=s.value;if(c.type===CKEDITOR.NODE_TEXT)return c;var u=this._hasTextNodeAsChild(c);if(u)return u}}catch(l){a.e(l)}finally{a.f()}}return null}},{key:"_mergeTextNodeAroundWithDirection",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],i=e.getText(),r=e;(r=t?r.getPrevious():r.getNext)&&r.type===CKEDITOR.NODE_TEXT&&!r.getText().charAt(t?r.getText().length-1:0).match(/[\s,;.:!?]/);)t?i=r.getText()+i:i+=r.getText(),n.push(r);n.length>0&&(e.setText(i),n.forEach((function(e){return e.remove()})))}},{key:"_mergeTextNodeAround",value:function(e){return this._mergeTextNodeAroundWithDirection(e,!0),this._mergeTextNodeAroundWithDirection(e),e}},{key:"_firstNonEmptyTextNode",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e;n=t?n.getPrevious():n.getNext();){if(n.type!==CKEDITOR.NODE_TEXT)return n;if(""!==n.getText())return n}}},{key:"_trim",value:function(e){return e&&(e=e.replace(/[\u200b\u00A0]/g,"").trim()),e}},{key:"_extractFirstWord",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return e;if(-1!==e.indexOf(" ")){var n=e.split(" ");return this._trim(n[t?n.length-1:0])}return this._trim(e)}},{key:"_firstTextNodeResult",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e.getText();if(this._trim(i)&&this._trim(i.substring(i.length-1))){var r=this._mergeTextNodeAround(e);return{textNode:r,firstNodeIsText:n,toReplace:this._extractFirstWord(r.getText(),t)}}return null}},{key:"_firstTextNodeWithDirection",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.startContainer;if(t&&n.type===CKEDITOR.NODE_TEXT)return this._firstTextNodeResult(n,t,!0);var i=n.type===CKEDITOR.NODE_TEXT?t?this._firstNonEmptyTextNode(n,!0):this._firstNonEmptyTextNode(n):n.getChildren().getItem(e.startOffset-1);if(i){if(i.type===CKEDITOR.NODE_TEXT)return this._firstTextNodeResult(i,t);var r=this._hasTextNodeAsChild(i,t);if(r)return this._firstTextNodeResult(r,t);for(r=i;r=t?r.getPrevious():r.getNext();){if(r.type===CKEDITOR.NODE_TEXT)return this._firstTextNodeResult(r,t);var o=this._hasTextNodeAsChild(r,t);if(o)return this._firstTextNodeResult(o,t)}}return null}},{key:"_firstTextNode",value:function(e){var t=this._firstTextNodeWithDirection(e,!0);return t||(t=this._firstTextNodeWithDirection(e)),t}},{key:"_replaceWord",value:function(e,t){var n=e.textNode.getText().lastIndexOf(e.toReplace);if(-1!==n){var i=e.textNode.getText().substring(0,n),r=e.textNode.getText().substring(n+e.toReplace.length);e.textNode.setText(i);var o=CKEDITOR.dom.element.createFromHtml("<span>".concat(CKEDITOR.tools.htmlDecode(CKEDITOR.tools.transformPlainTextToHtml(t,CKEDITOR.ENTER_BR)),"</span>"));o.insertAfter(e.textNode),e.textNode.getText().substring(n+e.toReplace.length)&&new CKEDITOR.dom.text(r).insertAfter(o),this.instance.getSelection().selectElement(e.textNode);var s=this.instance.getSelection().getRanges()[0];s.setStartAfter(e.textNode),s.select()}}},{key:"readonly",set:function(e){this._readonly=Object(a.b)(e)},get:function(){return this._readonly}},{key:"inline",set:function(e){this._inline=Object(a.b)(e)},get:function(){return this._inline}},{key:"value",get:function(){return this._value},set:function(e){e!==this._value&&(this._value=e,this.onChange(e))}}]),n}(u.s);return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](s.NgZone),s["\u0275\u0275directiveInject"](s.ChangeDetectorRef),s["\u0275\u0275directiveInject"](m))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-editor"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275staticViewQuery"](b,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.host=n.first)},inputs:{readonly:"readonly",inline:"inline",value:"value",config:"config",debounce:"debounce"},outputs:{change:"change",ready:"ready",blur:"blur",focus:"focus",disabled:"disabled"},features:[s["\u0275\u0275ProvidersFeature"]([{provide:c.NG_VALUE_ACCESSOR,useExisting:Object(s.forwardRef)((function(){return i})),multi:!0}]),s["\u0275\u0275InheritDefinitionFeature"],s["\u0275\u0275NgOnChangesFeature"]],decls:2,vars:0,consts:[[2,"visibility","hidden",3,"onchange"],["host",""]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"textarea",0,1),s["\u0275\u0275listener"]("onchange",(function(){return t.textAreaChange()})),s["\u0275\u0275elementEnd"]())},styles:["deja-editor{line-height:normal}deja-editor .cke_textarea_inline>p{margin:0}deja-editor .cke_textarea_inline:focus{outline:0}"],encapsulation:2,changeDetection:0}),e}(),C=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[m],imports:[[o.c]]}),e}(),E=0,x=function(){var e=r=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i,r,o,s,a){var c;return _classCallCheck(this,n),(c=t.call(this,s,r,o,i))._editor=e,c.ngControl=i,c._hostElement=a,c._uid="mat-input-"+E++,c.stateChanges=new h.a,c._required=!1,c._disabled=!1,c.describedBy="",c.controlType="app-editor",c}return _createClass(n,[{key:"onContainerClick",value:function(){this._editor.setFocus()}},{key:"setDescribedByIds",value:function(e){this.describedBy=e.join(" ")}},{key:"ngOnInit",value:function(){var e=this;this._editor.focus.subscribe((function(){e.focused=!0,e.stateChanges.next()})),this._editor.blur.subscribe((function(){e.focused=!1,e.stateChanges.next()})),this._editor.change.subscribe((function(){e.stateChanges.next()})),this._generatePlaceholder()}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState()}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete()}},{key:"_attachPlaceholder",value:function(){this._placeholder&&!this._placeholder.parentElement&&this._hostElement.nativeElement.appendChild(this._placeholder)}},{key:"_detachPlaceholder",value:function(){this._placeholder&&this._placeholder.parentElement&&this._placeholder.remove()}},{key:"_generatePlaceholder",value:function(){if(this.placeholder){this._placeholder=document.createElement("div"),this._placeholder.style.position="absolute",this._placeholder.style.position="absolute",this._placeholder.style.left="0",this._placeholder.style.boxSizing="content-box",this._placeholder.style.width="100%",this._placeholder.style.height="100%",this._placeholder.style.overflow="hidden",this._placeholder.style.pointerEvents="none",this._placeholder.style.top="-0.84375em",this._placeholder.style.paddingTop="0.84375em";var e=document.createElement("div");e.style.color="rgba(0,0,0,0.54)",e.style.top="1.28125em",e.style.position="absolute";var t=document.createTextNode(this.placeholder);e.appendChild(t),this._placeholder.appendChild(e)}}},{key:"id",get:function(){return this._id},set:function(e){this._id=e||this._uid}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(a.b)(e)}},{key:"disabled",get:function(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled},set:function(e){this._disabled=Object(a.b)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}},{key:"empty",get:function(){return!this._editor.value}},{key:"shouldLabelFloat",get:function(){return this.focused||!this.empty?(this.empty?this._attachPlaceholder():this._detachPlaceholder(),!0):(this._detachPlaceholder(),!1)}}]),n}(_.b);return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](T,2),s["\u0275\u0275directiveInject"](c.NgControl,10),s["\u0275\u0275directiveInject"](c.NgForm,8),s["\u0275\u0275directiveInject"](c.FormGroupDirective,8),s["\u0275\u0275directiveInject"](g.b),s["\u0275\u0275directiveInject"](s.ElementRef,1))},e.\u0275dir=s["\u0275\u0275defineDirective"]({type:e,selectors:[["deja-editor"]],hostVars:1,hostBindings:function(e,t){2&e&&s["\u0275\u0275attribute"]("aria-describedby",t.describedBy)},inputs:{id:"id",required:"required",disabled:"disabled",placeholder:"placeholder"},features:[s["\u0275\u0275ProvidersFeature"]([{provide:v.c,useExisting:r}]),s["\u0275\u0275InheritDefinitionFeature"]]}),e}(),O=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[C,v.d]]}),e}()},Paro:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n("SVse");var i=n("UhP/"),r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"escapeRegExp",value:function(e){return e?e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):e}}]),e}(),o=Object(i.x)((function e(t,n,i,r){_classCallCheck(this,e),this._defaultErrorStateMatcher=t,this._parentForm=n,this._parentFormGroup=i,this.ngControl=r}))}}]);