(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{oJzz:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n("1O3W"),r=n("SVse"),o=n("8Y7J"),l=n("CDpB"),a=n("8LU1"),s=n("PqYM"),c=n("GJmQ"),d=n("1G5W"),m=n("IzEk");function p(e,t){1&e&&o["\u0275\u0275projection"](0)}class u extends l.s{constructor(e,t,n,i){super(),this.changeDetectorRef=e,this.elementRef=t,this.overlayContainer=n,this.overlayBackdropClass="cdk-overlay-transparent-backdrop",this.visibleChange=new o.EventEmitter,this.closed=new o.EventEmitter,this.overlayOffsetX=0,this.overlayOffsetY=0,this._isVisible=!1,this._hasBackdrop=!0,this._width=null,this._widthForMobile="100%",this._positions=l.f.default,this._isMobile=!1,this.disableMediaService=!1,this.overlayContainer.getContainerElement().addEventListener("contextmenu",e=>(e.preventDefault(),!1)),i.isMobile$.pipe(Object(c.a)(()=>!this.disableMediaService),Object(d.a)(this.destroyed$)).subscribe(e=>{this._isMobile=e,this.updateOriginOverlay(),this.changeDetectorRef.markForCheck()})}get isVisible(){return this._isVisible}set isVisible(e){const t=Object(a.b)(e);if(this._isVisible!==t){this._isVisible=t;const e=this.overlayContainer.getContainerElement();e.classList.forEach(t=>{t.startsWith("cdk")||e.classList.remove(t)}),e.classList.add("deja-overlay-container"),this.overlayContainerClass&&this.overlayContainerClass.split(" ").forEach(t=>{e.classList.add(t)}),this.changeDetectorRef.markForCheck(),this.visibleChange.emit(this._isVisible)}}set hasBackdrop(e){this._hasBackdrop=Object(a.b)(e)}get hasBackdrop(){return this._hasBackdrop}set ownerElement(e){this._ownerElement=e,this.updateOriginOverlay()}get positionPairs(){return this.positions}get positions(){return this.isMobile?this._positionsForMobile?this._positionsForMobile:l.f.parse("start top start top"):this._positions}set positions(e){this._positions="string"==typeof e?l.f.parse(e):e}set positionsForMobile(e){this._positionsForMobile="string"==typeof e?l.f.parse(e):e}get isMobile(){return this._isMobile}set isMobile(e){this._isMobile=Object(a.b)(e),this.updateOriginOverlay(),this.disableMediaService=!0}get width(){return this._width}set width(e){this._width=Object(a.e)(e)}get widthForMobile(){return this._widthForMobile}set widthForMobile(e){this._widthForMobile=e}get overlayWidth(){return this.isMobile?this._widthForMobile:this._width}updatePosition(){var e,t;null===(t=null===(e=this.overlay)||void 0===e?void 0:e.overlayRef)||void 0===t||t.updatePosition()}show(e,t){this.overlayOffsetX=void 0!==t?+e:0,this.overlayOffsetY=t||0,this.overlayOrigin=new i.b(new o.ElementRef(this.isMobile&&document.body||(null==e?void 0:e.target)||this.ownerElement||this.elementRef.nativeElement)),this.isVisible=!0,this.changeDetectorRef.markForCheck(),Object(s.a)(1).pipe(Object(m.a)(1),Object(d.a)(this.destroyed$)).subscribe(()=>this.updatePosition())}close(){this.isVisible=!1,this.closed.emit(!0),this.changeDetectorRef.markForCheck()}updateOriginOverlay(){this.overlayOrigin=new i.b(new o.ElementRef(this.isMobile&&document.body||this._ownerElement||this.elementRef.nativeElement))}}u.\u0275fac=function(e){return new(e||u)(o["\u0275\u0275directiveInject"](o.ChangeDetectorRef),o["\u0275\u0275directiveInject"](o.ElementRef),o["\u0275\u0275directiveInject"](i.f),o["\u0275\u0275directiveInject"](l.D))},u.\u0275cmp=o["\u0275\u0275defineComponent"]({type:u,selectors:[["deja-overlay"]],viewQuery:function(e,t){var n;1&e&&o["\u0275\u0275staticViewQuery"](i.a,!0),2&e&&o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(t.overlay=n.first)},inputs:{overlayBackdropClass:"overlayBackdropClass",overlayOffsetX:"overlayOffsetX",overlayOffsetY:"overlayOffsetY",isVisible:"isVisible",hasBackdrop:"hasBackdrop",ownerElement:"ownerElement",positions:"positions",positionsForMobile:"positionsForMobile",isMobile:"isMobile",width:"width",widthForMobile:"widthForMobile",overlayContainerClass:"overlayContainerClass"},outputs:{visibleChange:"visibleChange",closed:"closed"},features:[o["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:["*"],decls:2,vars:8,consts:[["cdk-connected-overlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayBackdropClass","cdkConnectedOverlayOpen","cdkConnectedOverlayOffsetY","cdkConnectedOverlayOffsetX","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","detach"],["overlayCmp",""]],template:function(e,t){1&e&&(o["\u0275\u0275projectionDef"](),o["\u0275\u0275template"](0,p,1,0,"ng-template",0,1,o["\u0275\u0275templateRefExtractor"]),o["\u0275\u0275listener"]("backdropClick",(function(){return t.close()}))("detach",(function(){return t.close()}))),2&e&&o["\u0275\u0275property"]("cdkConnectedOverlayHasBackdrop",t.hasBackdrop)("cdkConnectedOverlayBackdropClass",t.overlayBackdropClass)("cdkConnectedOverlayOpen",!!t.isVisible)("cdkConnectedOverlayOffsetY",t.overlayOffsetY)("cdkConnectedOverlayOffsetX",t.overlayOffsetX)("cdkConnectedOverlayOrigin",t.overlayOrigin)("cdkConnectedOverlayPositions",t.positionPairs)("cdkConnectedOverlayWidth",t.overlayWidth)},directives:[i.a],styles:["@media print{.deja-overlay-container{display:none}}"],encapsulation:2,changeDetection:0}),u.ctorParameters=()=>[{type:o.ChangeDetectorRef},{type:o.ElementRef},{type:i.f},{type:l.D}],u.propDecorators={overlayBackdropClass:[{type:o.Input}],overlayContainerClass:[{type:o.Input}],visibleChange:[{type:o.Output}],closed:[{type:o.Output}],overlayOffsetX:[{type:o.Input}],overlayOffsetY:[{type:o.Input}],overlay:[{type:o.ViewChild,args:[i.a,{static:!0}]}],isVisible:[{type:o.Input}],hasBackdrop:[{type:o.Input}],ownerElement:[{type:o.Input}],positions:[{type:o.Input}],positionsForMobile:[{type:o.Input}],isMobile:[{type:o.Input}],width:[{type:o.Input}],widthForMobile:[{type:o.Input}]};class h{}h.\u0275mod=o["\u0275\u0275defineNgModule"]({type:h}),h.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||h)},imports:[[r.c,i.g,l.C]]})},vna1:function(e,t,n){"use strict";n.r(t),n.d(t,"DejaOverlayDemoModule",(function(){return g}));var i=n("SVse"),r=n("s7LF"),o=n("Dxy4"),l=n("PDjf"),a=n("Tj54"),s=n("M9ds"),c=n("l0rg"),d=n("oJzz"),m=n("KYkd"),p=n("iInd"),u=n("8Y7J");const h=["contextMenu"];function f(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"mat-card",5),u["\u0275\u0275text"](1," TODO\n"),u["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",9),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const n=t.$implicit;u["\u0275\u0275nextContext"]();const i=u["\u0275\u0275reference"](46);return u["\u0275\u0275nextContext"]().select(n.text),i.close()})),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",e.text," ")}}function y(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"a",24),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",e.text," ")}}function b(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",9),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"](),u["\u0275\u0275reference"](68).close()})),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",e.text," ")}}function E(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div",6),u["\u0275\u0275listener"]("contextmenu",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().onContextMenu(t)})),u["\u0275\u0275elementStart"](1,"deja-overlay",null,7),u["\u0275\u0275elementStart"](3,"div",8),u["\u0275\u0275elementStart"](4,"ul"),u["\u0275\u0275elementStart"](5,"li",9),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275reference"](2).close()})),u["\u0275\u0275elementStart"](6,"mat-icon"),u["\u0275\u0275text"](7,"delete_sweep"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](8," Context menu "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"li",9),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275reference"](2).close()})),u["\u0275\u0275elementStart"](10,"mat-icon"),u["\u0275\u0275text"](11,"content_copy"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](12," Dupliquer "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](13,"li",9),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275reference"](2).close()})),u["\u0275\u0275elementStart"](14,"mat-icon"),u["\u0275\u0275text"](15,"edit"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](16," Editer "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](17,"mat-card",10),u["\u0275\u0275elementStart"](18,"mat-toolbar",11),u["\u0275\u0275text"](19,"Overlay"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](20,"mat-card-content"),u["\u0275\u0275elementStart"](21,"deja-overlay",null,12),u["\u0275\u0275elementStart"](23,"div",8),u["\u0275\u0275elementStart"](24,"ul"),u["\u0275\u0275elementStart"](25,"li",9),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275reference"](22).close()})),u["\u0275\u0275elementStart"](26,"mat-icon"),u["\u0275\u0275text"](27,"delete_sweep"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](28," Supprimer "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](29,"li",9),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275reference"](22).close()})),u["\u0275\u0275elementStart"](30,"mat-icon"),u["\u0275\u0275text"](31,"content_copy"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](32," Dupliquer "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](33,"li",9),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275reference"](22).close()})),u["\u0275\u0275elementStart"](34,"mat-icon"),u["\u0275\u0275text"](35,"edit"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](36," Editer "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](37,"div",13),u["\u0275\u0275elementStart"](38,"div",14),u["\u0275\u0275elementStart"](39,"p"),u["\u0275\u0275text"](40),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](41,"mat-toolbar"),u["\u0275\u0275elementStart"](42,"button",15),u["\u0275\u0275listener"]("click",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275reference"](46).show(t)})),u["\u0275\u0275elementStart"](43,"mat-icon"),u["\u0275\u0275text"](44,"more_vert"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](45,"deja-overlay",null,16),u["\u0275\u0275elementStart"](47,"div",8),u["\u0275\u0275template"](48,v,2,1,"button",17),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](49,"div",14),u["\u0275\u0275elementStart"](50,"p"),u["\u0275\u0275text"](51," Clicking these will navigate:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](52,"mat-toolbar"),u["\u0275\u0275elementStart"](53,"button",15),u["\u0275\u0275listener"]("click",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275reference"](57).show(t)})),u["\u0275\u0275elementStart"](54,"mat-icon"),u["\u0275\u0275text"](55,"more_vert"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](56,"deja-overlay",null,18),u["\u0275\u0275elementStart"](58,"div",19),u["\u0275\u0275template"](59,y,2,1,"a",20),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](60,"div",14),u["\u0275\u0275elementStart"](61,"p"),u["\u0275\u0275text"](62," With buttons position before "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](63,"mat-toolbar",21),u["\u0275\u0275elementStart"](64,"button",15),u["\u0275\u0275listener"]("click",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275reference"](68).show(t)})),u["\u0275\u0275elementStart"](65,"mat-icon"),u["\u0275\u0275text"](66,"more_vert"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](67,"deja-overlay",22,23),u["\u0275\u0275elementStart"](69,"div",8),u["\u0275\u0275template"](70,b,2,1,"button",17),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](71,"div",14),u["\u0275\u0275elementStart"](72,"p"),u["\u0275\u0275text"](73," With ul/li, position top "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](74,"mat-toolbar"),u["\u0275\u0275elementStart"](75,"button",15),u["\u0275\u0275listener"]("click",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275reference"](22).show(t)})),u["\u0275\u0275elementStart"](76,"mat-icon"),u["\u0275\u0275text"](77,"more_vert"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](40),u["\u0275\u0275textInterpolate1"]("You clicked on: ",e.selected,""),u["\u0275\u0275advance"](8),u["\u0275\u0275property"]("ngForOf",e.items),u["\u0275\u0275advance"](11),u["\u0275\u0275property"]("ngForOf",e.items),u["\u0275\u0275advance"](11),u["\u0275\u0275property"]("ngForOf",e.items)}}const w=p.f.forChild([{path:"",component:(()=>{class e{constructor(){this.selected="",this.items=[{text:"Refresh"},{text:"Settings"},{text:"Help",disabled:!0},{text:"Sign Out"}],this.tabIndex=1}select(e){this.selected=e}onContextMenu(e){const t=e.currentTarget.getBoundingClientRect();return this.contextMenu.show(e.pageX-t.left,e.pageY-t.top),e.preventDefault(),!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["deja-overlay-demo"]],viewQuery:function(e,t){var n;1&e&&u["\u0275\u0275viewQuery"](h,!0),2&e&&u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.contextMenu=n.first)},decls:5,vars:3,consts:[[3,"selectedIndex","selectedTabChange"],["label","API REFERENCE"],["label","EXAMPLES"],["class","demo-card demo-basic",4,"ngIf"],[3,"contextmenu",4,"ngIf"],[1,"demo-card","demo-basic"],[3,"contextmenu"],["contextMenu",""],[1,"deja-menu-content"],[1,"menu-item",3,"click"],[1,"demo-card"],["color","primary"],["posYMenu",""],["id","demo-deja-menu"],[1,"menu-section"],["mat-icon-button","",3,"click"],["menu",""],["class","menu-item",3,"click",4,"ngFor","ngForOf"],["anchorMenu",""],["id","anchorMenu",1,"deja-menu-content"],["class","menu-item","href","http://www.google.com",4,"ngFor","ngForOf"],[1,"end-icon"],["positions","end bottom end top",1,"before"],["posXMenu",""],["href","http://www.google.com",1,"menu-item"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"mat-tab-group",0),u["\u0275\u0275listener"]("selectedTabChange",(function(e){return t.tabIndex=e.index})),u["\u0275\u0275element"](1,"mat-tab",1),u["\u0275\u0275element"](2,"mat-tab",2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,f,2,0,"mat-card",3),u["\u0275\u0275template"](4,E,78,4,"div",4)),2&e&&(u["\u0275\u0275property"]("selectedIndex",t.tabIndex),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngIf",0===t.tabIndex),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",1===t.tabIndex))},directives:[s.b,s.a,i.n,l.a,d.a,a.a,c.a,l.c,o.b,i.m],styles:["deja-overlay-demo #demo-deja-menu{display:flex;flex-flow:row}deja-overlay-demo #demo-deja-menu .menu-section{width:300px;margin:.5rem}deja-overlay-demo #demo-deja-menu .end-icon{align-items:flex-end}.deja-overlay-container .deja-menu-content#anchorMenu .menu-item{white-space:nowrap;padding:.5rem 2rem}.deja-overlay-container .deja-menu-content .mat-icon{margin-right:.5rem}"],encapsulation:2}),e})()},{path:"**",redirectTo:"",pathMatch:"full"}]);let g=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[],imports:[[i.c,r.FormsModule,o.c,l.d,a.b,s.c,c.b,d.b,m.a,w]]}),e})()}}]);