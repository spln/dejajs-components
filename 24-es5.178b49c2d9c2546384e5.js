function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(c){r=!0,o=c}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{Pkvd:function(e,t,n){"use strict";n.r(t);var i,r,o=n("SVse"),a=n("s7LF"),l=n("PDjf"),c=n("pMoy"),s=n("M9ds"),d=n("l0rg"),u=n("8Y7J"),b=n("8LU1"),f=n("Z5sx"),m=n("2Vo4"),p=n("xgIS"),h=n("Cfvw"),y=n("PqYM"),g=n("1G5W"),v=n("/uUt"),_=n("lJxs"),j=n("IzEk"),C=n("pLZG"),O=n("eIep"),w=((r=function(e){function t(e,n){var i;_classCallCheck(this,t),(i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)))._control=n,i._inEdition=!1,i._editMode=!1,i._mandatory=!1,i._multiline=!1,i.edit$=new m.a([!1,!1]),i._disabled=null,i.onTouchedCallback=function(e){},i.onChangeCallback=function(e){},i._control&&(i._control.valueAccessor=_assertThisInitialized(i)),i.element=e.nativeElement,Object(p.a)(i.element,"mousedown").pipe(Object(g.a)(i.destroyed$)).subscribe((function(e){return i.inEdition||i.disabled?(e.cancelBubble=!0,!1):i.editMode?(i.edit$.next([!0,!0]),e.cancelBubble=!0,!1):void 0}));var r=Object(h.a)(i.edit$).pipe(Object(v.a)(),Object(_.a)((function(e){var t=_slicedToArray(e,2),n=t[0];return!1!==t[1]&&Object(y.a)(10).pipe(Object(j.a)(1),Object(g.a)(i.destroyed$)).subscribe((function(){i.selectAll(),i.focus()})),i._inEdition=n,n?i.element.setAttribute("contenteditable","true"):i.element.removeAttribute("contenteditable"),i.refreshView(),n}))),o=r.pipe(Object(C.a)((function(e){return!e}))),a=Object(p.a)(i.element.ownerDocument,"mousedown").pipe(Object(C.a)((function(e){return!i.isChildElement(e.target)})),Object(g.a)(o));r.pipe(Object(C.a)((function(e){return e})),Object(O.a)((function(){return a})),Object(g.a)(i.destroyed$)).subscribe((function(){var e=i.element.innerText.replace(/\n/g,"<br />").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");i.onTouchedCallback(),!e&&i.mandatory||(i.value=e),i.inEdition=!1}));var l=Object(p.a)(i.element,"keydown").pipe(Object(g.a)(o));return r.pipe(Object(C.a)((function(e){return e})),Object(O.a)((function(){return l})),Object(g.a)(i.destroyed$)).subscribe((function(e){if(e.cancelBubble=!0,e.stopPropagation(),e.code!==f.A.Enter||i.multiline)e.code===f.A.Escape&&(i.inEdition=!1);else{var t=i.element.innerText;!t&&i.mandatory||(i.value=t),i.inEdition=!1}return!1})),i}return _inherits(t,e),_createClass(t,[{key:"writeValue",value:function(e){this.model=e,this.refreshView()}},{key:"registerOnChange",value:function(e){this.onChangeCallback=e}},{key:"registerOnTouched",value:function(e){this.onTouchedCallback=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"ngOnInit",value:function(){this.model=this.element.innerHTML}},{key:"focus",value:function(){this.element.focus()}},{key:"selectAll",value:function(){var e=document.createRange();e.selectNodeContents(this.element);var t=window.getSelection();t.removeAllRanges(),t.addRange(e)}},{key:"edit",value:function(e){this.edit$.next([!this.disabled,e])}},{key:"isChildElement",value:function(e){for(var t=e;t&&t!==this.element;)t=t.parentElement;return t===this.element}},{key:"refreshView",value:function(){this.model&&(this.inEdition?this.element.innerText=this.model.replace(/<br\s*[\/]?>/gi,"\n"):this.element.innerHTML=this.model.replace(/\n/g,"<br />"))}},{key:"mandatory",set:function(e){this._mandatory=Object(b.b)(e)},get:function(){return this._mandatory}},{key:"multiline",set:function(e){this._multiline=Object(b.b)(e)},get:function(){return this._multiline}},{key:"disabled",set:function(e){var t=Object(b.b)(e);this._disabled=t||null,this.disabled&&this.edit$.next([!1,!1])},get:function(){var e;return(null===(e=this._control)||void 0===e?void 0:e.disabled)||this._disabled}},{key:"editMode",set:function(e){this._editMode=Object(b.b)(e)},get:function(){return this._editMode}},{key:"inEdition",set:function(e){this.disabled||this.edit$.next([Object(b.b)(e),!1])},get:function(){return this._inEdition}},{key:"value",set:function(e){e!==this.model&&(this.writeValue(e),this.onChangeCallback(e))},get:function(){return this.model}}]),t}(f.s)).\u0275fac=function(e){return new(e||r)(u["\u0275\u0275directiveInject"](u.ElementRef),u["\u0275\u0275directiveInject"](a.NgControl,10))},r.\u0275dir=u["\u0275\u0275defineDirective"]({type:r,selectors:[["","deja-editable",""]],hostVars:1,hostBindings:function(e,t){2&e&&u["\u0275\u0275attribute"]("disabled",t._disabled)},inputs:{mandatory:"mandatory",multiline:"multiline",disabled:"disabled",editMode:["deja-editable","editMode"],inEdition:"inEdition"},features:[u["\u0275\u0275InheritDefinitionFeature"]]}),r),E=((i=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||i)},imports:[[o.c,a.FormsModule]]}),i),k=n("KYkd"),x=n("iInd"),M=n("iss+");function I(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"mat-card",4),u["\u0275\u0275element"](1,"deja-markdown",5),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("url","https://raw.githubusercontent.com/DSI-HUG/dejajs-components/dev/projects/deja-js/component/content-editable/readme.md"))}function T(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"mat-card",4),u["\u0275\u0275elementStart"](1,"mat-toolbar",6),u["\u0275\u0275text"](2,"Content Editable Demo"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"mat-card-content"),u["\u0275\u0275elementStart"](4,"mat-checkbox",7),u["\u0275\u0275listener"]("ngModelChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().designMode=e})),u["\u0275\u0275text"](5,"Design Mode\xa0"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"mat-checkbox",7),u["\u0275\u0275listener"]("ngModelChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().disabled=e})),u["\u0275\u0275text"](7,"Disabled"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"mat-card-content",8),u["\u0275\u0275elementStart"](9,"div",9),u["\u0275\u0275text"](10," Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),u["\u0275\u0275element"](11,"br"),u["\u0275\u0275text"](12," Mauris auctor sit amet odio et aliquet. Curabitur auctor eleifend mattis. "),u["\u0275\u0275element"](13,"br"),u["\u0275\u0275text"](14," Nullam sit amet quam tellus. Ut mattis tellus sed erat ultricies ornare. "),u["\u0275\u0275element"](15,"br"),u["\u0275\u0275text"](16," Nulla dictum nisi eu tortor lacinia porttitor. Donec eu arcu et enim cursus viverra. "),u["\u0275\u0275element"](17,"br"),u["\u0275\u0275text"](18," Praesent pulvinar dui nisi, a tincidunt arcu finibus sed. "),u["\u0275\u0275element"](19,"br"),u["\u0275\u0275elementStart"](20,"a",10),u["\u0275\u0275text"](21,"Google"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var i=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngModel",i.designMode),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngModel",i.disabled),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("deja-editable",i.designMode)("disabled",i.disabled)}}var P,S=x.f.forChild([{path:"",component:(P=function e(){_classCallCheck(this,e),this.tabIndex=1,this.designMode=!1,this.disabled=!1},P.\u0275fac=function(e){return new(e||P)},P.\u0275cmp=u["\u0275\u0275defineComponent"]({type:P,selectors:[["deja-content-editable-demo"]],decls:5,vars:3,consts:[[3,"selectedIndex","selectedTabChange"],["label","API REFERENCE"],["label","EXAMPLES"],["class","demo-card demo-basic",4,"ngIf"],[1,"demo-card","demo-basic"],[3,"url"],["color","primary"],["color","primary",3,"ngModel","ngModelChange"],["id","contentEditableContainer"],["multiline","",3,"deja-editable","disabled"],["href","http://www.google.ch"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"mat-tab-group",0),u["\u0275\u0275listener"]("selectedTabChange",(function(e){return t.tabIndex=e.index})),u["\u0275\u0275element"](1,"mat-tab",1),u["\u0275\u0275element"](2,"mat-tab",2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,I,2,1,"mat-card",3),u["\u0275\u0275template"](4,T,22,4,"mat-card",3)),2&e&&(u["\u0275\u0275property"]("selectedIndex",t.tabIndex),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngIf",0===t.tabIndex),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",1===t.tabIndex))},directives:[s.b,s.a,o.n,l.a,M.a,d.a,l.c,c.a,a.NgControlStatus,a.NgModel,w],encapsulation:2}),P)},{path:"**",redirectTo:"",pathMatch:"full"}]);n.d(t,"DejaContentEditableDemoModule",(function(){return D}));var A,D=((A=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:A}),A.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||A)},providers:[],imports:[[o.c,a.FormsModule,l.d,c.b,s.c,d.b,E,k.a,S]]}),A)}}]);