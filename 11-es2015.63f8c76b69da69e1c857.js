(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7lvT":function(e,t,i){"use strict";var s=i("SVse"),n=i("pk1M"),r=i("8Y7J"),o=i("bcAL");let a=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[n.a],imports:[[s.c]]}),e})();var c=i("Q2Ze");i("A5hg");let h=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a,c.d]]}),e})();i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return o.a})),i.d(t,"c",(function(){return h}))},A5hg:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var s=i("8LU1"),n=i("Q2Ze"),r=i("Paro"),o=i("XNiG"),a=i("bcAL"),c=i("8Y7J"),h=i("s7LF"),d=i("UhP/");let l=0,u=(()=>{class e extends r.b{constructor(e,t,i,s,n,r){super(n,i,s,t),this._editor=e,this.ngControl=t,this._hostElement=r,this._uid=`mat-input-${l++}`,this.stateChanges=new o.a,this._required=!1,this._disabled=!1,this.describedBy="",this.controlType="app-editor"}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required}set required(e){this._required=Object(s.b)(e)}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=Object(s.b)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}onContainerClick(){this._editor.setFocus()}setDescribedByIds(e){this.describedBy=e.join(" ")}ngOnInit(){this._editor.focus.subscribe(()=>{this.focused=!0,this.stateChanges.next()}),this._editor.blur.subscribe(()=>{this.focused=!1,this.stateChanges.next()}),this._editor.change.subscribe(()=>{this.stateChanges.next()}),this._generatePlaceholder()}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){this.stateChanges.complete()}get empty(){return!this._editor.value}get shouldLabelFloat(){return this.focused||!this.empty?(this.empty?this._attachPlaceholder():this._detachPlaceholder(),!0):(this._detachPlaceholder(),!1)}_attachPlaceholder(){this._placeholder&&!this._placeholder.parentElement&&this._hostElement.nativeElement.appendChild(this._placeholder)}_detachPlaceholder(){this._placeholder&&this._placeholder.parentElement&&this._placeholder.remove()}_generatePlaceholder(){if(this.placeholder){this._placeholder=document.createElement("div"),this._placeholder.style.position="absolute",this._placeholder.style.position="absolute",this._placeholder.style.left="0",this._placeholder.style.boxSizing="content-box",this._placeholder.style.width="100%",this._placeholder.style.height="100%",this._placeholder.style.overflow="hidden",this._placeholder.style.pointerEvents="none",this._placeholder.style.top="-0.84375em",this._placeholder.style.paddingTop="0.84375em";const e=document.createElement("div");e.style.color="rgba(0,0,0,0.54)",e.style.top="1.28125em",e.style.position="absolute";const t=document.createTextNode(this.placeholder);e.appendChild(t),this._placeholder.appendChild(e)}}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](a.a,2),c["\u0275\u0275directiveInject"](h.NgControl,10),c["\u0275\u0275directiveInject"](h.NgForm,8),c["\u0275\u0275directiveInject"](h.FormGroupDirective,8),c["\u0275\u0275directiveInject"](d.a),c["\u0275\u0275directiveInject"](c.ElementRef,1))},e.\u0275dir=c["\u0275\u0275defineDirective"]({type:e,selectors:[["deja-editor"]],hostVars:1,hostBindings:function(e,t){2&e&&c["\u0275\u0275attribute"]("aria-describedby",t.describedBy)},inputs:{id:"id",placeholder:"placeholder",required:"required",disabled:"disabled"},features:[c["\u0275\u0275ProvidersFeature"]([{provide:n.c,useExisting:e}]),c["\u0275\u0275InheritDefinitionFeature"]]}),e})()},Paro:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return o})),i("SVse");var s=i("UhP/");class n{static escapeRegExp(e){return e?e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):e}}class r{constructor(e,t,i,s){this._defaultErrorStateMatcher=e,this._parentForm=t,this._parentFormGroup=i,this.ngControl=s}}const o=Object(s.u)(r)},bcAL:function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var s=i("8LU1"),n=i("8Y7J"),r=i("s7LF"),o=i("Z5sx"),a=i("LvDl"),c=i("PqYM"),h=i("SxV6"),d=i("1G5W"),l=i("IzEk"),u=i("pk1M");const g=["host"];let f=(()=>{class e extends o.s{constructor(e,t,i){super(),this.zone=e,this._changeDetectorRef=t,this._initializer=i,this.change=new n.EventEmitter,this.ready=new n.EventEmitter,this.blur=new n.EventEmitter,this.focus=new n.EventEmitter,this.disabled=new n.EventEmitter,this._inline=!0,this._value=""}set readonly(e){this._readonly=Object(s.b)(e)}get readonly(){return this._readonly}set inline(e){this._inline=Object(s.b)(e)}get inline(){return this._inline}get value(){return this._value}set value(e){e!==this._value&&(this._value=e,this.onChange(e))}ngOnChanges(e){e.readonly&&this.instance&&this.instance.setReadOnly(e.readonly.currentValue)}ngOnDestroy(){if(super.ngOnDestroy(),this.focus.complete(),this.blur.complete(),this.change.complete(),this.disabled.complete(),this.instance)if(this.instance.focusManager.blur(!0),this._ready){try{this.instance.destroy()}catch(e){console.warn(e,"Error occurred when destroying ckEditor instance")}this.ready.complete(),this.instance=null}else this.ready.pipe(Object(h.a)()).subscribe(()=>{try{this.instance.destroy()}catch(e){console.warn(e,"Error occurred when destroying ckEditor instance")}this.instance=null,this.ready.complete()})}ngAfterViewInit(){this._initializer.initDejaEditorLib().then(()=>{this.ckeditorInit(a.cloneDeep(this.config)||{}),this.destroyed$.closed||Object(c.a)(0).pipe(Object(d.a)(this.destroyed$)).subscribe(()=>this._changeDetectorRef.markForCheck())})}updateValue(){this.zone.run(()=>{let e=this.instance.getData();e||(e=null),this.value!==e&&(this.value=e,this.onChange(e),this.change.emit(e))})}textAreaChange(){this.zone.run(()=>{const e=this.host.nativeElement.value;this.onChange(e),this.change.emit(e)})}ckeditorInit(e){var t;if("undefined"==typeof CKEDITOR)console.warn("CKEditor 4.x is missing (http://ckeditor.com/)");else{if(this.instance)return;this.readonly&&(e.readOnly=this.readonly);const i=null===(t=e.on)||void 0===t?void 0:t.key;e.on||(e.on={}),e.on.key=e=>{1114177===e.data.code&&(e.cancel(),e.stop(),this.instance.document.$.execCommand("SelectAll")),i&&i(e)},this.instance=this.inline?CKEDITOR.inline(this.host.nativeElement,e):CKEDITOR.replace(this.host.nativeElement,e),this.instance.setData(this.value),this.instance.on("instanceReady",e=>{this._ready=!0,this.ready.emit(e)}),this.instance.on("change",()=>{var e;if(this.debounce){const t=parseInt(this.debounce,10);null===(e=this.debounceTimeout$sub)||void 0===e||e.unsubscribe(),this.debounceTimeout$sub=Object(c.a)(t).pipe(Object(d.a)(this.destroyed$)).subscribe(()=>{this.updateValue(),this.debounceTimeout$sub=null})}else this.updateValue()}),this.instance.on("blur",e=>{this.blur.emit(e),this.onTouched()}),this.instance.on("focus",e=>{this.readonly||this.focus.emit(e)})}}writeValue(e){this._value=e,this.destroyed$.closed||Object(c.a)(0).pipe(Object(d.a)(this.destroyed$)).subscribe(()=>{this.instance?this.instance.setData(e):this.host.nativeElement.value=e})}onChange(e){}onTouched(){}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.readonly=e,this.disabled.next(e),this._ready?this.instance&&this.instance.setReadOnly(e):this.destroyed$.closed||this.ready.pipe(Object(l.a)(1),Object(d.a)(this.destroyed$)).subscribe(()=>{this.instance.setReadOnly(this.readonly)})}getWordAtCursor(){const e=this.instance.getSelection().getRanges(!0)[0];if(!e)return null;const t=this._firstTextNode(e);return t&&t.toReplace||null}hasActiveSelection(){return!!this.getSelectedText()}getSelectedText(){return this.instance.getSelection().getSelectedText()}replace(e){if(!e)return;if(this.getSelectedText()){const t=this.instance.focus;return this.instance.focus=()=>{},this.instance.insertHtml(e),void(this.instance.focus=t)}const t=this.instance.getSelection().getRanges(!0)[0];if(!t)return void this.instance.insertHtml(e);const i=this._firstTextNode(t);i?this._replaceWord(i,e):this.instance.insertHtml(e),this.updateValue(),this.setFocus()}setFocus(){this.instance?this.instance.focus():this.host.nativeElement.focus()}_hasTextNodeAsChild(e,t=!1){const i=e.getChildren().toArray();if(t)for(let s=i.length-1;s>=0;s--){const e=i[s];if(e.type===CKEDITOR.NODE_TEXT)return e;{const t=this._hasTextNodeAsChild(e);if(t)return t}}else for(const s of i){if(s.type===CKEDITOR.NODE_TEXT)return s;{const e=this._hasTextNodeAsChild(s);if(e)return e}}return null}_mergeTextNodeAroundWithDirection(e,t=!1){const i=[];let s=e.getText(),n=e;for(;(n=t?n.getPrevious():n.getNext)&&n.type===CKEDITOR.NODE_TEXT&&!n.getText().charAt(t?n.getText().length-1:0).match(/[\s,;.:!?]/);)t?s=n.getText()+s:s+=n.getText(),i.push(n);i.length>0&&(e.setText(s),i.forEach(e=>e.remove()))}_mergeTextNodeAround(e){return this._mergeTextNodeAroundWithDirection(e,!0),this._mergeTextNodeAroundWithDirection(e),e}_firstNonEmptyTextNode(e,t=!1){let i=e;for(;i=t?i.getPrevious():i.getNext();){if(i.type!==CKEDITOR.NODE_TEXT)return i;if(""!==i.getText())return i}}_trim(e){return e&&(e=e.replace(/[\u200b\u00A0]/g,"").trim()),e}_extractFirstWord(e,t=!1){if(!e)return e;if(-1!==e.indexOf(" ")){const i=e.split(" ");return this._trim(i[t?i.length-1:0])}return this._trim(e)}_firstTextNodeResult(e,t=!1,i=!1){const s=e.getText();if(this._trim(s)&&this._trim(s.substring(s.length-1))){const s=this._mergeTextNodeAround(e);return{textNode:s,firstNodeIsText:i,toReplace:this._extractFirstWord(s.getText(),t)}}return null}_firstTextNodeWithDirection(e,t=!1){const i=e.startContainer;if(t&&i.type===CKEDITOR.NODE_TEXT)return this._firstTextNodeResult(i,t,!0);const s=i.type===CKEDITOR.NODE_TEXT?t?this._firstNonEmptyTextNode(i,!0):this._firstNonEmptyTextNode(i):i.getChildren().getItem(e.startOffset-1);if(s){if(s.type===CKEDITOR.NODE_TEXT)return this._firstTextNodeResult(s,t);let e=this._hasTextNodeAsChild(s,t);if(e)return this._firstTextNodeResult(e,t);for(e=s;e=t?e.getPrevious():e.getNext();){if(e.type===CKEDITOR.NODE_TEXT)return this._firstTextNodeResult(e,t);const i=this._hasTextNodeAsChild(e,t);if(i)return this._firstTextNodeResult(i,t)}}return null}_firstTextNode(e){let t=this._firstTextNodeWithDirection(e,!0);return t||(t=this._firstTextNodeWithDirection(e)),t}_replaceWord(e,t){const i=e.textNode.getText().lastIndexOf(e.toReplace);if(-1!==i){const s=e.textNode.getText().substring(0,i),n=e.textNode.getText().substring(i+e.toReplace.length);e.textNode.setText(s);const r=CKEDITOR.dom.element.createFromHtml(CKEDITOR.tools.htmlDecode(CKEDITOR.tools.transformPlainTextToHtml(t,CKEDITOR.ENTER_BR)));r.insertAfter(e.textNode),e.textNode.getText().substring(i+e.toReplace.length)&&new CKEDITOR.dom.text(n).insertAfter(r),this.instance.getSelection().selectElement(e.textNode);const o=this.instance.getSelection().getRanges()[0];o.setStartAfter(e.textNode),o.select()}}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](n.NgZone),n["\u0275\u0275directiveInject"](n.ChangeDetectorRef),n["\u0275\u0275directiveInject"](u.a))},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-editor"]],viewQuery:function(e,t){var i;1&e&&n["\u0275\u0275staticViewQuery"](g,!0),2&e&&n["\u0275\u0275queryRefresh"](i=n["\u0275\u0275loadQuery"]())&&(t.host=i.first)},inputs:{config:"config",debounce:"debounce",readonly:"readonly",inline:"inline",value:"value"},outputs:{change:"change",ready:"ready",blur:"blur",focus:"focus",disabled:"disabled"},features:[n["\u0275\u0275ProvidersFeature"]([{provide:r.NG_VALUE_ACCESSOR,useExisting:Object(n.forwardRef)(()=>e),multi:!0}]),n["\u0275\u0275InheritDefinitionFeature"],n["\u0275\u0275NgOnChangesFeature"]()],decls:2,vars:0,consts:[[2,"visibility","hidden",3,"onchange"],["host",""]],template:function(e,t){1&e&&(n["\u0275\u0275elementStart"](0,"textarea",0,1),n["\u0275\u0275listener"]("onchange",(function(e){return t.textAreaChange()})),n["\u0275\u0275elementEnd"]())},styles:["deja-editor{line-height:normal}deja-editor .cke_textarea_inline>p{margin:0}deja-editor .cke_textarea_inline:focus{outline:none}"],encapsulation:2,changeDetection:0}),e})()},pk1M:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("8Y7J");let n=(()=>{class e{initDejaEditorLib(){return this._loading||this.init(),this._loader}init(){this._loader=new Promise(e=>{if(this._loading=!0,!window.ckeditor){const t=(document.getElementsByTagName("base")[0]||{}).href,i=window.CKEDITOR_BASEPATH||`${t}assets/ckeditor/`,s=document.createElement("script");document.head.appendChild(s),s.type="text/javascript",s.src=`${i}ckeditor.js`,s.addEventListener("load",e)}})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})()}}]);