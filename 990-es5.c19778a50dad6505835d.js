!function(){function e(e,n){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==i.return||i.return()}finally{if(c)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t,i){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,i||e)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}(self.webpackChunkdejajs_component=self.webpackChunkdejajs_component||[]).push([[990],{43990:function(t,r,a){"use strict";a.r(r),a.d(r,{DejaEditorDemoModule:function(){return Y}});var l=a(61511),d=a(16073),h=a(15980),f=a(27439),g=a(66283),p=a(26756),v=a(55109),y=a(33104),m=a(31572),T=a(19861),b=a(27312),x=a(67676),C=a(19764),_=a(81110),E=a(55959),k=a(3530),Z=a(90611),A=a(66599),O=a(60509),N=a(25416),R=a(65481),w=a(71522),D=["host"],I=function(){var e=function(){function e(){c(this,e)}return u(e,[{key:"initDejaEditorLib",value:function(){return this._loading||this.init(),this._loader}},{key:"init",value:function(){var e=this;this._loader=new Promise(function(t){e._loading=!0;var n=window;if(!n.ckeditor){var i=(document.getElementsByTagName("base")[0]||{}).href,r=n.CKEDITOR_BASEPATH||"".concat(i,"assets/ckeditor/"),o=document.createElement("script");document.head.appendChild(o),o.type="text/javascript",o.src="".concat(r,"ckeditor.js"),o.addEventListener("load",t)}})}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac}),e}(),q=function(){var t=function(t){i(a,t);var r=o(a);function a(e,t,n){var i;return c(this,a),(i=r.call(this)).zone=e,i.changeDetectorRef=t,i.initializer=n,i.change=new m.vpe,i.ready=new m.vpe,i.blur=new m.vpe,i.focus=new m.vpe,i.disabled=new m.vpe,i._inline=!0,i._value="",i}return u(a,[{key:"readonly",get:function(){return this._readonly},set:function(e){this._readonly=(0,T.Ig)(e)}},{key:"inline",get:function(){return this._inline},set:function(e){this._inline=(0,T.Ig)(e)}},{key:"value",get:function(){return this._value},set:function(e){e!==this._value&&(this._value=e)}},{key:"ngOnChanges",value:function(e){e.readonly&&this.instance&&this.instance.setReadOnly(e.readonly.currentValue)}},{key:"ngOnDestroy",value:function(){var e=this;if(n(s(a.prototype),"ngOnDestroy",this).call(this),this.focus.complete(),this.blur.complete(),this.change.complete(),this.disabled.complete(),this.instance)if(this.instance.focusManager.blur(!0),this._ready){try{this.instance.destroy()}catch(t){console.warn(t,"Error occurred when destroying ckEditor instance")}this.ready.complete(),this.instance=null}else this.ready.pipe((0,k.P)()).subscribe(function(){try{e.instance.destroy()}catch(t){console.warn(t,"Error occurred when destroying ckEditor instance")}e.instance=null,e.ready.complete()})}},{key:"ngAfterViewInit",value:function(){var e=this;(0,C.D)(this.initializer.initDejaEditorLib()).pipe((0,Z.q)(1),(0,A.b)(function(){return e.ckeditorInit((0,x.Z)(e.config)||{})}),(0,O.g)(0),(0,N.R)(this.destroyed$)).subscribe(function(){return e.changeDetectorRef.markForCheck()})}},{key:"updateValue",value:function(){var e=this;this.zone.run(function(){var t=e.instance.getData();t||(t=null),e.value!==t&&(e.value=t,e.onChange(t),e.change.emit(t))})}},{key:"textAreaChange",value:function(){var e=this;this.zone.run(function(){var t=e.host.nativeElement.value;e.onChange(t),e.change.emit(t)})}},{key:"ckeditorInit",value:function(e){var t,n=this;if("undefined"==typeof CKEDITOR)console.warn("CKEditor 4.x is missing (http://ckeditor.com/)");else{if(this.instance)return;this.readonly&&(e.readOnly=this.readonly);var i=null===(t=e.on)||void 0===t?void 0:t.key;e.on||(e.on={}),e.on.key=function(e){1114177===e.data.code&&(e.cancel(),e.stop(),n.instance.document.$.execCommand("SelectAll")),i&&i(e)},this.instance=this.inline?CKEDITOR.inline(this.host.nativeElement,e):CKEDITOR.replace(this.host.nativeElement,e),this.instance.setData(this.value),this.instance.on("instanceReady",function(e){n._ready=!0,n.ready.emit(e)}),this.instance.on("blur",function(e){n.blur.emit(e),n.onTouched()}),this.instance.on("focus",function(e){n.readonly||n.focus.emit(e)}),this.registerChangeListener()}}},{key:"writeValue",value:function(e){var t=this;this._value=e,this.destroyed$.closed||(0,_.H)(0).pipe((0,N.R)(this.destroyed$)).subscribe(function(){var n;t.instance?(null===(n=t.onDataChangeListener)||void 0===n||n.removeListener(),t.instance.setData(e,function(){t.registerChangeListener()})):t.host.nativeElement.value=e})}},{key:"onChange",value:function(e){}},{key:"onTouched",value:function(){}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){var t=this;this.readonly=e,this.disabled.next(e),this._ready?this.instance&&this.instance.setReadOnly(e):this.destroyed$.closed||this.ready.pipe((0,Z.q)(1),(0,N.R)(this.destroyed$)).subscribe(function(){t.instance.setReadOnly(t.readonly)})}},{key:"getWordAtCursor",value:function(){var e=this.instance.getSelection().getRanges(!0)[0];if(!e)return null;var t=this.firstTextNode(e);return(null==t?void 0:t.toReplace)||null}},{key:"hasActiveSelection",value:function(){return!!this.getSelectedText()}},{key:"getSelectedText",value:function(){return this.instance.getSelection().getSelectedText()}},{key:"replace",value:function(e){if(e){if(this.getSelectedText()){var t=this.instance.focus;return this.instance.focus=function(){},this.instance.insertHtml(e),void(this.instance.focus=t)}var n=this.instance.getSelection().getRanges(!0)[0];if(n){var i=this.firstTextNode(n);i?this.replaceWord(i,e):this.instance.insertHtml(e),this.updateValue(),this.setFocus()}else this.instance.insertHtml(e)}}},{key:"setFocus",value:function(){this.instance?this.instance.focus():this.host.nativeElement.focus()}},{key:"registerChangeListener",value:function(){var e=this;this.onDataChangeListener=this.instance.on("change",function(){var t;if(e.debounce){var n=parseInt(e.debounce,10);null===(t=e.debounceTimeout$sub)||void 0===t||t.unsubscribe(),e.debounceTimeout$sub=(0,_.H)(n).pipe((0,N.R)(e.destroyed$)).subscribe(function(){e.updateValue(),e.debounceTimeout$sub=null})}else e.updateValue()})}},{key:"hasTextNodeAsChild",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t.getChildren().toArray();if(n)for(var r=i.length-1;r>=0;r--){var o=i[r];if(o.type===CKEDITOR.NODE_TEXT)return o;var a=this.hasTextNodeAsChild(o);if(a)return a}else{var s,c=e(i);try{for(c.s();!(s=c.n()).done;){var l=s.value;if(l.type===CKEDITOR.NODE_TEXT)return l;var u=this.hasTextNodeAsChild(l);if(u)return u}}catch(d){c.e(d)}finally{c.f()}}return null}},{key:"mergeTextNodeAroundWithDirection",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],i=e.getText(),r=e;(r=t?r.getPrevious():r.getNext)&&r.type===CKEDITOR.NODE_TEXT&&!r.getText().charAt(t?r.getText().length-1:0).match(/[\s,;.:!?]/);)t?i=r.getText()+i:i+=r.getText(),n.push(r);n.length>0&&(e.setText(i),n.forEach(function(e){return e.remove()}))}},{key:"mergeTextNodeAround",value:function(e){return this.mergeTextNodeAroundWithDirection(e,!0),this.mergeTextNodeAroundWithDirection(e),e}},{key:"firstNonEmptyTextNode",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e;n=t?n.getPrevious():n.getNext();){if(n.type!==CKEDITOR.NODE_TEXT)return n;if(""!==n.getText())return n}}},{key:"trim",value:function(e){return e&&(e=e.replace(/[\u200b\u00A0]/g,"").trim()),e}},{key:"extractFirstWord",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return e;if(e.includes(" ")){var n=e.split(" ");return this.trim(n[t?n.length-1:0])}return this.trim(e)}},{key:"firstTextNodeResult",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e.getText();if(this.trim(i)&&this.trim(i.substring(i.length-1))){var r=this.mergeTextNodeAround(e);return{textNode:r,firstNodeIsText:n,toReplace:this.extractFirstWord(r.getText(),t)}}return null}},{key:"firstTextNodeWithDirection",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.startContainer;if(t&&n.type===CKEDITOR.NODE_TEXT)return this.firstTextNodeResult(n,t,!0);var i=n.type===CKEDITOR.NODE_TEXT?t&&this.firstNonEmptyTextNode(n,!0)||this.firstNonEmptyTextNode(n):n.getChildren().getItem(e.startOffset-1);if(i){if(i.type===CKEDITOR.NODE_TEXT)return this.firstTextNodeResult(i,t);var r=this.hasTextNodeAsChild(i,t);if(r)return this.firstTextNodeResult(r,t);for(r=i;r=t?r.getPrevious():r.getNext();){if(r.type===CKEDITOR.NODE_TEXT)return this.firstTextNodeResult(r,t);var o=this.hasTextNodeAsChild(r,t);if(o)return this.firstTextNodeResult(o,t)}}return null}},{key:"firstTextNode",value:function(e){var t=this.firstTextNodeWithDirection(e,!0);return t||(t=this.firstTextNodeWithDirection(e)),t}},{key:"replaceWord",value:function(e,t){var n=e.textNode.getText().lastIndexOf(e.toReplace);if(-1!==n){var i=e.textNode.getText().substring(0,n),r=e.textNode.getText().substring(n+e.toReplace.length);e.textNode.setText(i);var o=CKEDITOR.dom.element.createFromHtml("<span>".concat(CKEDITOR.tools.htmlDecode(CKEDITOR.tools.transformPlainTextToHtml(t,CKEDITOR.ENTER_BR)),"</span>"));o.insertAfter(e.textNode),e.textNode.getText().substring(n+e.toReplace.length)&&new CKEDITOR.dom.text(r).insertAfter(o),this.instance.getSelection().selectElement(e.textNode);var a=this.instance.getSelection().getRanges()[0];a.setStartAfter(e.textNode),a.select()}}}]),a}(b.yl);return t.\u0275fac=function(e){return new(e||t)(m.Y36(m.R0b),m.Y36(m.sBO),m.Y36(I))},t.\u0275cmp=m.Xpm({type:t,selectors:[["deja-editor"]],viewQuery:function(e,t){var n;(1&e&&m.Gf(D,7),2&e)&&(m.iGM(n=m.CRH())&&(t.host=n.first))},inputs:{config:"config",debounce:"debounce",readonly:"readonly",inline:"inline",value:"value"},outputs:{change:"change",ready:"ready",blur:"blur",focus:"focus",disabled:"disabled"},features:[m._Bn([{provide:d.JU,useExisting:(0,m.Gpc)(function(){return t}),multi:!0}]),m.qOj,m.TTD],decls:2,vars:0,consts:[[2,"visibility","hidden",3,"onchange"],["host",""]],template:function(e,t){1&e&&(m.TgZ(0,"textarea",0,1),m.NdJ("onchange",function(){return t.textAreaChange()}),m.qZA())},styles:["deja-editor{line-height:normal}deja-editor .cke_textarea_inline>p{margin:0}deja-editor .cke_textarea_inline:focus{outline:none}"],encapsulation:2,changeDetection:0}),t}(),j=function(){var e=function e(){c(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({providers:[I],imports:[[l.ez]]}),e}(),P=0,M=function(){var e=function(e){i(n,e);var t=o(n);function n(e,i,r,o,a,s){var l;return c(this,n),(l=t.call(this,a,r,o,i)).editor=e,l.ngControl=i,l.hostElement=s,l.describedBy="",l.stateChanges=new E.xQ,l.controlType="app-editor",l._disabled=!1,l._uid="mat-input-"+P++,l._required=!1,l}return u(n,[{key:"id",get:function(){return this._id},set:function(e){this._id=e||this._uid}},{key:"required",get:function(){return this._required},set:function(e){this._required=(0,T.Ig)(e)}},{key:"disabled",get:function(){var e;return null!==(null===(e=this.ngControl)||void 0===e?void 0:e.disabled)?this.ngControl.disabled:this._disabled},set:function(e){this._disabled=(0,T.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}},{key:"onContainerClick",value:function(){this.editor.setFocus()}},{key:"setDescribedByIds",value:function(e){this.describedBy=e.join(" ")}},{key:"ngOnInit",value:function(){var e=this;this.editor.focus.subscribe(function(){e.focused=!0,e.stateChanges.next()}),this.editor.blur.subscribe(function(){e.focused=!1,e.stateChanges.next()}),this.editor.change.subscribe(function(){e.stateChanges.next()}),this.generatePlaceholder()}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState()}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete()}},{key:"empty",get:function(){return!this.editor.value}},{key:"shouldLabelFloat",get:function(){return this.focused||!this.empty?(this.empty?this.attachPlaceholder():this.detachPlaceholder(),!0):(this.detachPlaceholder(),!1)}},{key:"attachPlaceholder",value:function(){this._placeholder&&!this._placeholder.parentElement&&this.hostElement.nativeElement.appendChild(this._placeholder)}},{key:"detachPlaceholder",value:function(){var e;(null===(e=this._placeholder)||void 0===e?void 0:e.parentElement)&&this._placeholder.remove()}},{key:"generatePlaceholder",value:function(){if(this.placeholder){this._placeholder=document.createElement("div"),this._placeholder.style.position="absolute",this._placeholder.style.position="absolute",this._placeholder.style.left="0",this._placeholder.style.boxSizing="content-box",this._placeholder.style.width="100%",this._placeholder.style.height="100%",this._placeholder.style.overflow="hidden",this._placeholder.style.pointerEvents="none",this._placeholder.style.top="-0.84375em",this._placeholder.style.paddingTop="0.84375em";var e=document.createElement("div");e.style.color="rgba(0,0,0,0.54)",e.style.top="1.28125em",e.style.position="absolute";var t=document.createTextNode(this.placeholder);e.appendChild(t),this._placeholder.appendChild(e)}}}]),n}(R.VG);return e.\u0275fac=function(t){return new(t||e)(m.Y36(q,2),m.Y36(d.a5,10),m.Y36(d.F,8),m.Y36(d.sg,8),m.Y36(w.rD),m.Y36(m.SBq,1))},e.\u0275dir=m.lG2({type:e,selectors:[["deja-editor"]],hostVars:1,hostBindings:function(e,t){2&e&&m.uIk("aria-describedby",t.describedBy)},inputs:{placeholder:"placeholder",id:"id",required:"required",disabled:"disabled"},features:[m._Bn([{provide:g.Eo,useExisting:e}]),m.qOj]}),e}(),S=function(){var e=function e(){c(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[j,g.lN]]}),e}(),J=a(7631),K=a(71398),B=a(50246),U=["replaceEditor"];function H(e,t){1&e&&(m.TgZ(0,"mat-card",5),m._UZ(1,"deja-markdown",6),m.qZA()),2&e&&(m.xp6(1),m.Q6J("url","https://raw.githubusercontent.com/DSI-HUG/dejajs-components/develop/projects/deja-js/component/editor/readme.md"))}function L(e,t){if(1&e){var n=m.EpF();m.TgZ(0,"div"),m.TgZ(1,"mat-card",7),m.TgZ(2,"mat-toolbar",8),m._uU(3,"Inline CKEditor with material skin"),m.qZA(),m.TgZ(4,"mat-card-content"),m.TgZ(5,"div",9),m.TgZ(6,"div",10),m.TgZ(7,"h3"),m._uU(8,"Editor :"),m.qZA(),m.TgZ(9,"mat-form-field"),m.TgZ(10,"deja-editor",11),m.NdJ("ngModelChange",function(e){return m.CHM(n),m.oxw().matText=e}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(11,"div",10),m.TgZ(12,"h3"),m._uU(13,"Result :"),m.qZA(),m._UZ(14,"div",12),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(15,"mat-card",7),m.TgZ(16,"mat-toolbar",8),m._uU(17,"Default CKEditor"),m.qZA(),m.TgZ(18,"mat-card-content"),m.TgZ(19,"div",9),m.TgZ(20,"div",10),m.TgZ(21,"h3"),m._uU(22,"Editor :"),m.qZA(),m.TgZ(23,"deja-editor",13),m.NdJ("ngModelChange",function(e){return m.CHM(n),m.oxw().matText=e}),m.qZA(),m.qZA(),m.TgZ(24,"div",10),m.TgZ(25,"h3"),m._uU(26,"Result :"),m.qZA(),m._UZ(27,"div",12),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(28,"mat-card",7),m.TgZ(29,"mat-toolbar",8),m._uU(30,"Replace"),m.qZA(),m.TgZ(31,"mat-card-content"),m.TgZ(32,"div",9),m.TgZ(33,"div",10),m.TgZ(34,"h3"),m._uU(35,"Editor :"),m.qZA(),m._UZ(36,"deja-editor",14,15),m.qZA(),m.TgZ(38,"div",10),m.TgZ(39,"h3"),m._uU(40,"Actions :"),m.qZA(),m.TgZ(41,"div"),m.TgZ(42,"mat-form-field"),m.TgZ(43,"input",16),m.NdJ("ngModelChange",function(e){return m.CHM(n),m.oxw().replaceWith=e}),m.qZA(),m.qZA(),m.TgZ(44,"button",17),m.NdJ("click",function(){return m.CHM(n),m.oxw().replace()}),m._uU(45,"Replace"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()}if(2&e){var i=m.oxw();m.xp6(10),m.Q6J("ngModel",i.matText)("config",i.editorConfig),m.xp6(4),m.Q6J("innerHTML",i.matText,m.oJD),m.xp6(9),m.Q6J("ngModel",i.matText)("config",i.editorConfig)("inline",!1),m.xp6(4),m.Q6J("innerHTML",i.matText,m.oJD),m.xp6(9),m.Q6J("config",i.editorConfig)("inline",!1),m.xp6(7),m.Q6J("ngModel",i.replaceWith)}}var F,W,Q=K.Bz.forChild([{path:"",component:(F=function(){function e(){c(this,e),this.tabIndex=1,this.editorConfig={}}return u(e,[{key:"ngOnInit",value:function(){this.matText="<b>Inline Editor</b> <ul><li>First item</li><li>Second item</li><ul>",this.editorConfig.extraPlugins="colorbutton,autogrow",this.editorConfig.on={instanceReady:function(){this.dataProcessor.writer.indentationChars="",this.dataProcessor.writer.lineBreakChars=""}},this.editorConfig.title="",this.editorConfig.disableNativeSpellChecker=!0,this.editorConfig.scayt_autoStartup=!0,this.editorConfig.scayt_sLang="fr_FR",this.editorConfig.wsc_lang="fr_FR",this.editorConfig.scayt_disableOptionsStorage="all",this.editorConfig.language="fr",this.editorConfig.enterMode=3,this.editorConfig.contentsCss=["assets/ckeditor/contents.css"],this.editorConfig.autoGrow_onStartup=!0,this.editorConfig.coreStyles_bold={element:"b",overrides:{strong:!0}},this.editorConfig.coreStyles_italic={element:"i",overrides:{em:!0}}}},{key:"replace",value:function(){this.replaceEditor.replace(this.replaceWith)}}]),e}(),F.\u0275fac=function(e){return new(e||F)},F.\u0275cmp=m.Xpm({type:F,selectors:[["deja-editor-demo"]],viewQuery:function(e,t){var n;1&e&&m.Gf(U,5),2&e&&m.iGM(n=m.CRH())&&(t.replaceEditor=n.first)},decls:5,vars:3,consts:[[3,"selectedIndex","selectedTabChange"],["label","API REFERENCE"],["label","EXAMPLES"],["class","demo-card demo-basic",4,"ngIf"],[4,"ngIf"],[1,"demo-card","demo-basic"],[3,"url"],[1,"demo-card"],["color","primary"],[1,"flexLayout"],[1,"flexAuto"],[3,"ngModel","config","ngModelChange"],[3,"innerHTML"],[1,"inline",3,"ngModel","config","inline","ngModelChange"],[1,"inline",3,"config","inline"],["replaceEditor",""],["matInput","",3,"ngModel","ngModelChange"],["mat-raised-button","",3,"click"]],template:function(e,t){1&e&&(m.TgZ(0,"mat-tab-group",0),m.NdJ("selectedTabChange",function(e){return t.tabIndex=e.index}),m._UZ(1,"mat-tab",1),m._UZ(2,"mat-tab",2),m.qZA(),m.YNc(3,H,2,1,"mat-card",3),m.YNc(4,L,46,10,"div",4)),2&e&&(m.Q6J("selectedIndex",t.tabIndex),m.xp6(3),m.Q6J("ngIf",0===t.tabIndex),m.xp6(1),m.Q6J("ngIf",1===t.tabIndex))},directives:[v.SP,v.uX,l.O5,f.a8,B.F,y.Ye,f.dn,g.KE,M,q,d.JJ,d.On,p.Nt,d.Fj,h.lW],styles:["[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:90%}[_nghost-%COMP%]   deja-editor.inline[_ngcontent-%COMP%]{width:90%;display:block}[_nghost-%COMP%]   .flexLayout[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .flexLayout[_ngcontent-%COMP%]   .flexAuto[_ngcontent-%COMP%]{flex:1 1 0}"]}),F)},{path:"**",redirectTo:"",pathMatch:"full"}]),Y=((W=function e(){c(this,e)}).\u0275fac=function(e){return new(e||W)},W.\u0275mod=m.oAB({type:W}),W.\u0275inj=m.cJS({providers:[],imports:[[l.ez,d.u5,h.ot,f.QW,g.lN,p.c,v.Nh,y.g0,S,J.O,Q]]}),W)}}])}();