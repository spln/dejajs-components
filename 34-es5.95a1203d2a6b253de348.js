function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{r9ZW:function(e,t,n){"use strict";n.r(t);var a,o,l=n("SVse"),i=n("s7LF"),r=n("PDjf"),s=n("M9ds"),d=n("l0rg"),c=(n("mrSG"),n("Tj54")),u=n("e6WT"),m=n("YRDH"),f=n("8LU1"),h=n("Z5sx"),p=n("8Y7J"),b=n("Q2Ze"),g=((o=function(){function e(t){_classCallCheck(this,e),this._control=t,this.text="",this.items=[],this._disabled=null,this.onTouchedCallback=function(e){},this.onChangeCallback=function(e){},this.onValidatorChangeCallback=function(e){},this._control&&(this._control.valueAccessor=this)}return _createClass(e,[{key:"writeValue",value:function(e){this.items=e||[]}},{key:"registerOnChange",value:function(e){this.onChangeCallback=e}},{key:"registerOnTouched",value:function(e){this.onTouchedCallback=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"onKeyDown",value:function(e){e.code===h.A.Enter&&this.onAddItem(e.target.value)}},{key:"onAddItem",value:function(e){e&&(this.items.push(e),this.value=this.items,this.text="")}},{key:"onRemoveItem",value:function(){this.onChangeCallback(this.value)}},{key:"disabled",set:function(e){var t=Object(f.b)(e);this._disabled=t||null},get:function(){return this._control?this._control.disabled:this._disabled}},{key:"value",get:function(){return this.items},set:function(e){this.writeValue(e),this.onChangeCallback(e),this.onTouchedCallback()}}]),e}()).\u0275fac=function(e){return new(e||o)(p["\u0275\u0275directiveInject"](i.NgControl,10))},o.\u0275cmp=p["\u0275\u0275defineComponent"]({type:o,selectors:[["deja-tag"]],hostVars:1,hostBindings:function(e,t){2&e&&p["\u0275\u0275attribute"]("disabled",t._disabled)},inputs:{disabled:"disabled",placeholder:"placeholder"},decls:6,vars:5,consts:[[3,"items","disabled","close"],["matInput","","matInput","","autocomplete","off",3,"ngModel","placeholder","disabled","ngModelChange","keydown"],["matSuffix","",3,"click"],[1,"matSuffix"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"deja-chips",0),p["\u0275\u0275listener"]("close",(function(e){return t.onRemoveItem()})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](1,"mat-form-field"),p["\u0275\u0275elementStart"](2,"input",1),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.text=e}))("keydown",(function(e){return t.onKeyDown(e)})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"div",2),p["\u0275\u0275listener"]("click",(function(e){return t.onAddItem(t.text)})),p["\u0275\u0275elementStart"](4,"mat-icon",3),p["\u0275\u0275text"](5,"add"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("items",t.items)("disabled",t.disabled),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.text)("placeholder",t.placeholder)("disabled",t.disabled))},directives:[m.a,b.b,u.a,i.DefaultValueAccessor,i.NgControlStatus,i.NgModel,b.h,c.a],styles:["[_nghost-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),o),C=((a=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},providers:[],imports:[[l.c,i.FormsModule,c.b,u.b,m.b]]}),a),v=n("KYkd");function y(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"mat-card",4),p["\u0275\u0275text"](1," TODO\n"),p["\u0275\u0275elementEnd"]())}function k(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"mat-card",4),p["\u0275\u0275elementStart"](1,"mat-toolbar",5),p["\u0275\u0275text"](2,"Tag Component"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"mat-card-content"),p["\u0275\u0275elementStart"](4,"deja-tag",6),p["\u0275\u0275listener"]("ngModelChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().values=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"div"),p["\u0275\u0275text"](6," Model : "),p["\u0275\u0275elementStart"](7,"pre"),p["\u0275\u0275text"](8),p["\u0275\u0275pipe"](9,"json"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("ngModel",a.values),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](9,2,a.values))}}var x,M=n("iInd").f.forChild([{path:"",component:(x=function e(){_classCallCheck(this,e),this.tabIndex=1,this.values=["HTML5","ANGULAR"]},x.\u0275fac=function(e){return new(e||x)},x.\u0275cmp=p["\u0275\u0275defineComponent"]({type:x,selectors:[["tag-demo"]],decls:5,vars:3,consts:[[3,"selectedIndex","selectedTabChange"],["label","API REFERENCE"],["label","EXAMPLES"],["class","demo-card demo-basic",4,"ngIf"],[1,"demo-card","demo-basic"],["color","primary"],["placeholder","Add tags",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"mat-tab-group",0),p["\u0275\u0275listener"]("selectedTabChange",(function(e){return t.tabIndex=e.index})),p["\u0275\u0275element"](1,"mat-tab",1),p["\u0275\u0275element"](2,"mat-tab",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](3,y,2,0,"mat-card",3),p["\u0275\u0275template"](4,k,10,4,"mat-card",3)),2&e&&(p["\u0275\u0275property"]("selectedIndex",t.tabIndex),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngIf",0===t.tabIndex),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",1===t.tabIndex))},directives:[s.b,s.a,l.n,r.a,d.a,r.c,g,i.NgControlStatus,i.NgModel],pipes:[l.h],encapsulation:2}),x)},{path:"**",redirectTo:"",pathMatch:"full"}]);n.d(t,"DejaTagDemoModule",(function(){return I}));var _,I=((_=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||_)},providers:[],imports:[[l.c,i.FormsModule,r.d,s.c,d.b,C,v.a,M]]}),_)}}]);