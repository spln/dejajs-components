(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{GJmQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("7o/Q");function r(e,t=!1){return n=>n.lift(new o(e,t))}class o{constructor(e,t){this.predicate=e,this.inclusive=t}call(e,t){return t.subscribe(new l(e,this.predicate,this.inclusive))}}class l extends i.a{constructor(e,t,n){super(e),this.predicate=t,this.inclusive=n,this.index=0}_next(e){const t=this.destination;let n;try{n=this.predicate(e,this.index++)}catch(i){return void t.error(i)}this.nextOrComplete(e,n)}nextOrComplete(e,t){const n=this.destination;Boolean(t)?n.next(e):(this.inclusive&&n.next(e),n.complete())}}},oJzz:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var i=n("1O3W"),r=n("SVse"),o=n("8Y7J"),l=n("Z5sx"),s=n("8LU1"),a=n("PqYM"),c=n("GJmQ"),d=n("1G5W"),m=n("SxV6");function u(e,t){1&e&&o["\u0275\u0275projection"](0)}const h=["*"];let p=(()=>{let e=class extends l.s{constructor(e,t,n,i){super(),this.changeDetectorRef=e,this.elementRef=t,this.overlayContainer=n,this._isVisible=!1,this.overlayBackdropClass="cdk-overlay-transparent-backdrop",this._hasBackdrop=!0,this._width=null,this._widthForMobile="100%",this.visibleChange=new o.EventEmitter,this.closed=new o.EventEmitter,this.overlayOffsetX=0,this.overlayOffsetY=0,this._positions=l.f.default,this._isMobile=!1,this.disableMediaService=!1,this.overlayContainer.getContainerElement().addEventListener("contextmenu",e=>(e.preventDefault(),!1)),i.isMobile$.pipe(Object(c.a)(()=>!this.disableMediaService),Object(d.a)(this.destroyed$)).subscribe(e=>{this._isMobile=e,this.updateOriginOverlay(),this.changeDetectorRef.markForCheck()})}get isVisible(){return this._isVisible}set isVisible(e){const t=Object(s.b)(e);if(this._isVisible!==t){this._isVisible=t;const e=this.overlayContainer.getContainerElement();e.classList.forEach(t=>{t.startsWith("cdk")||e.classList.remove(t)}),e.classList.add("deja-overlay-container"),this.overlayContainerClass&&e.classList.add(this.overlayContainerClass),this.changeDetectorRef.markForCheck(),this.visibleChange.emit(this.isVisible)}}set hasBackdrop(e){this._hasBackdrop=Object(s.b)(e)}get hasBackdrop(){return this._hasBackdrop}set ownerElement(e){this._ownerElement=e,this.updateOriginOverlay()}get positions(){return this.isMobile?this._positionsForMobile?this._positionsForMobile:l.f.parse("start top start top"):this._positions}set positions(e){this._positions="string"==typeof e?l.f.parse(e):e}set positionsForMobile(e){this._positionsForMobile="string"==typeof e?l.f.parse(e):e}get isMobile(){return this._isMobile}set isMobile(e){this._isMobile=Object(s.b)(e),this.updateOriginOverlay(),this.disableMediaService=!0}get width(){return this._width}set width(e){this._width=e}get widthForMobile(){return this._widthForMobile}set widthForMobile(e){this._widthForMobile=e}get overlayWidth(){return this.isMobile?this._widthForMobile:this._width}updatePosition(){var e,t;null===(t=null===(e=this.overlay)||void 0===e?void 0:e.overlayRef)||void 0===t||t.updatePosition()}show(e,t){this.overlayOffsetX=void 0!==t?+e:0,this.overlayOffsetY=t||0,this.overlayOrigin=new i.b(new o.ElementRef(this.isMobile&&document.body||e&&e.target||this.ownerElement||this.elementRef.nativeElement)),this.isVisible=!0,this.changeDetectorRef.markForCheck(),Object(a.a)(1).pipe(Object(m.a)(),Object(d.a)(this.destroyed$)).subscribe(()=>this.updatePosition())}close(){this.isVisible=!1,this.closed.emit(!0),this.changeDetectorRef.markForCheck()}updateOriginOverlay(){this.overlayOrigin=new i.b(new o.ElementRef(this.isMobile&&document.body||this._ownerElement||this.elementRef.nativeElement))}};return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](o.ChangeDetectorRef),o["\u0275\u0275directiveInject"](o.ElementRef),o["\u0275\u0275directiveInject"](i.f),o["\u0275\u0275directiveInject"](l.D))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-overlay"]],viewQuery:function(e,t){var n;1&e&&o["\u0275\u0275staticViewQuery"](i.a,!0),2&e&&o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(t.overlay=n.first)},inputs:{overlayBackdropClass:"overlayBackdropClass",overlayOffsetX:"overlayOffsetX",overlayOffsetY:"overlayOffsetY",isVisible:"isVisible",hasBackdrop:"hasBackdrop",ownerElement:"ownerElement",positions:"positions",positionsForMobile:"positionsForMobile",isMobile:"isMobile",width:"width",widthForMobile:"widthForMobile",overlayContainerClass:"overlayContainerClass"},outputs:{visibleChange:"visibleChange",closed:"closed"},features:[o["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:h,decls:2,vars:8,consts:[["cdk-connected-overlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayBackdropClass","cdkConnectedOverlayOpen","cdkConnectedOverlayOffsetY","cdkConnectedOverlayOffsetX","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","detach"],["overlayCmp",""]],template:function(e,t){1&e&&(o["\u0275\u0275projectionDef"](),o["\u0275\u0275template"](0,u,1,0,"ng-template",0,1,o["\u0275\u0275templateRefExtractor"]),o["\u0275\u0275listener"]("backdropClick",(function(){return t.close()}))("detach",(function(){return t.close()}))),2&e&&o["\u0275\u0275property"]("cdkConnectedOverlayHasBackdrop",t.hasBackdrop)("cdkConnectedOverlayBackdropClass",t.overlayBackdropClass)("cdkConnectedOverlayOpen",t.isVisible)("cdkConnectedOverlayOffsetY",t.overlayOffsetY)("cdkConnectedOverlayOffsetX",t.overlayOffsetX)("cdkConnectedOverlayOrigin",t.overlayOrigin)("cdkConnectedOverlayPositions",t.positions)("cdkConnectedOverlayWidth",t.overlayWidth)},directives:[i.a],styles:["@media print{.deja-overlay-container{display:none}}"],encapsulation:2,changeDetection:0}),e})(),f=(()=>{let e=class{};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,i.g,l.C]]}),e})()},vna1:function(e,t,n){"use strict";n.r(t);var i=n("SVse"),r=n("s7LF"),o=n("Dxy4"),l=n("PDjf"),s=n("Tj54"),a=n("M9ds"),c=n("l0rg"),d=n("oJzz"),m=n("KYkd"),u=n("iInd"),h=n("8Y7J");const p=["contextMenu"];function f(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"mat-card",5),h["\u0275\u0275text"](1," TODO\n"),h["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"button",9),h["\u0275\u0275listener"]("click",(function(){h["\u0275\u0275restoreView"](e);const n=t.$implicit;h["\u0275\u0275nextContext"]();const i=h["\u0275\u0275reference"](46);return h["\u0275\u0275nextContext"]().select(n.text),i.close()})),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate1"](" ",e.text," ")}}function b(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"a",24),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate1"](" ",e.text," ")}}function y(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"button",9),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"](),h["\u0275\u0275reference"](68).close()})),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate1"](" ",e.text," ")}}function x(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"div",6),h["\u0275\u0275listener"]("contextmenu",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().onContextMenu(t)})),h["\u0275\u0275elementStart"](1,"deja-overlay",null,7),h["\u0275\u0275elementStart"](3,"div",8),h["\u0275\u0275elementStart"](4,"ul"),h["\u0275\u0275elementStart"](5,"li",9),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275reference"](2).close()})),h["\u0275\u0275elementStart"](6,"mat-icon"),h["\u0275\u0275text"](7,"delete_sweep"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](8," Context menu "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](9,"li",9),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275reference"](2).close()})),h["\u0275\u0275elementStart"](10,"mat-icon"),h["\u0275\u0275text"](11,"content_copy"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](12," Dupliquer "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](13,"li",9),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275reference"](2).close()})),h["\u0275\u0275elementStart"](14,"mat-icon"),h["\u0275\u0275text"](15,"edit"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](16," Editer "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](17,"mat-card",10),h["\u0275\u0275elementStart"](18,"mat-toolbar",11),h["\u0275\u0275text"](19,"Overlay"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](20,"mat-card-content"),h["\u0275\u0275elementStart"](21,"deja-overlay",null,12),h["\u0275\u0275elementStart"](23,"div",8),h["\u0275\u0275elementStart"](24,"ul"),h["\u0275\u0275elementStart"](25,"li",9),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275reference"](22).close()})),h["\u0275\u0275elementStart"](26,"mat-icon"),h["\u0275\u0275text"](27,"delete_sweep"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](28," Supprimer "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](29,"li",9),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275reference"](22).close()})),h["\u0275\u0275elementStart"](30,"mat-icon"),h["\u0275\u0275text"](31,"content_copy"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](32," Dupliquer "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](33,"li",9),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275reference"](22).close()})),h["\u0275\u0275elementStart"](34,"mat-icon"),h["\u0275\u0275text"](35,"edit"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](36," Editer "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](37,"div",13),h["\u0275\u0275elementStart"](38,"div",14),h["\u0275\u0275elementStart"](39,"p"),h["\u0275\u0275text"](40),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](41,"mat-toolbar"),h["\u0275\u0275elementStart"](42,"button",15),h["\u0275\u0275listener"]("click",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275reference"](46).show(t)})),h["\u0275\u0275elementStart"](43,"mat-icon"),h["\u0275\u0275text"](44,"more_vert"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](45,"deja-overlay",null,16),h["\u0275\u0275elementStart"](47,"div",8),h["\u0275\u0275template"](48,v,2,1,"button",17),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](49,"div",14),h["\u0275\u0275elementStart"](50,"p"),h["\u0275\u0275text"](51," Clicking these will navigate:"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](52,"mat-toolbar"),h["\u0275\u0275elementStart"](53,"button",15),h["\u0275\u0275listener"]("click",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275reference"](57).show(t)})),h["\u0275\u0275elementStart"](54,"mat-icon"),h["\u0275\u0275text"](55,"more_vert"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](56,"deja-overlay",null,18),h["\u0275\u0275elementStart"](58,"div",19),h["\u0275\u0275template"](59,b,2,1,"a",20),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](60,"div",14),h["\u0275\u0275elementStart"](61,"p"),h["\u0275\u0275text"](62," With buttons position before "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](63,"mat-toolbar",21),h["\u0275\u0275elementStart"](64,"button",15),h["\u0275\u0275listener"]("click",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275reference"](68).show(t)})),h["\u0275\u0275elementStart"](65,"mat-icon"),h["\u0275\u0275text"](66,"more_vert"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](67,"deja-overlay",22,23),h["\u0275\u0275elementStart"](69,"div",8),h["\u0275\u0275template"](70,y,2,1,"button",17),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](71,"div",14),h["\u0275\u0275elementStart"](72,"p"),h["\u0275\u0275text"](73," With ul/li, position top "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](74,"mat-toolbar"),h["\u0275\u0275elementStart"](75,"button",15),h["\u0275\u0275listener"]("click",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275reference"](22).show(t)})),h["\u0275\u0275elementStart"](76,"mat-icon"),h["\u0275\u0275text"](77,"more_vert"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](40),h["\u0275\u0275textInterpolate1"]("You clicked on: ",e.selected,""),h["\u0275\u0275advance"](8),h["\u0275\u0275property"]("ngForOf",e.items),h["\u0275\u0275advance"](11),h["\u0275\u0275property"]("ngForOf",e.items),h["\u0275\u0275advance"](11),h["\u0275\u0275property"]("ngForOf",e.items)}}const E=u.f.forChild([{path:"",component:(()=>{class e{constructor(){this.selected="",this.items=[{text:"Refresh"},{text:"Settings"},{text:"Help",disabled:!0},{text:"Sign Out"}],this.tabIndex=1}select(e){this.selected=e}onContextMenu(e){const t=e.currentTarget.getBoundingClientRect();return this.contextMenu.show(e.pageX-t.left,e.pageY-t.top),e.preventDefault(),!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-overlay-demo"]],viewQuery:function(e,t){var n;1&e&&h["\u0275\u0275viewQuery"](p,!0),2&e&&h["\u0275\u0275queryRefresh"](n=h["\u0275\u0275loadQuery"]())&&(t.contextMenu=n.first)},decls:5,vars:3,consts:[[3,"selectedIndex","selectedTabChange"],["label","API REFERENCE"],["label","EXAMPLES"],["class","demo-card demo-basic",4,"ngIf"],[3,"contextmenu",4,"ngIf"],[1,"demo-card","demo-basic"],[3,"contextmenu"],["contextMenu",""],[1,"deja-menu-content"],[1,"menu-item",3,"click"],[1,"demo-card"],["color","primary"],["posYMenu",""],["id","demo-deja-menu"],[1,"menu-section"],["mat-icon-button","",3,"click"],["menu",""],["class","menu-item",3,"click",4,"ngFor","ngForOf"],["anchorMenu",""],["id","anchorMenu",1,"deja-menu-content"],["class","menu-item","href","http://www.google.com",4,"ngFor","ngForOf"],[1,"end-icon"],["positions","end bottom end top",1,"before"],["posXMenu",""],["href","http://www.google.com",1,"menu-item"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"mat-tab-group",0),h["\u0275\u0275listener"]("selectedTabChange",(function(e){return t.tabIndex=e.index})),h["\u0275\u0275element"](1,"mat-tab",1),h["\u0275\u0275element"](2,"mat-tab",2),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](3,f,2,0,"mat-card",3),h["\u0275\u0275template"](4,x,78,4,"div",4)),2&e&&(h["\u0275\u0275property"]("selectedIndex",t.tabIndex),h["\u0275\u0275advance"](3),h["\u0275\u0275property"]("ngIf",0===t.tabIndex),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",1===t.tabIndex))},directives:[a.b,a.a,i.n,l.a,d.a,s.a,c.a,l.c,o.b,i.m],styles:["deja-overlay-demo #demo-deja-menu{display:flex;flex-flow:row}deja-overlay-demo #demo-deja-menu .menu-section{width:300px;margin:.5rem}deja-overlay-demo #demo-deja-menu .end-icon{align-items:flex-end}.deja-overlay-container .deja-menu-content#anchorMenu .menu-item{white-space:nowrap;padding:.5rem 2rem}.deja-overlay-container .deja-menu-content .mat-icon{margin-right:.5rem}"],encapsulation:2}),e})()},{path:"**",redirectTo:"",pathMatch:"full"}]);n.d(t,"DejaOverlayDemoModule",(function(){return w}));let w=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[],imports:[[i.c,r.FormsModule,o.c,l.d,s.b,a.c,c.b,d.b,m.a,E]]}),e})()}}]);