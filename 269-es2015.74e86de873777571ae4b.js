(self.webpackChunkdejajs_component=self.webpackChunkdejajs_component||[]).push([[269],{15947:function(e,t,o){"use strict";o.d(t,{a:function(){return u},W:function(){return m}});var i=o(61511),n=o(31572),s=o(27312),a=o(87254),r=o(43835),l=o(25416);const c=["okaction"],d=["cancelaction"],p=["*"];let u=(()=>{class e extends s.yl{constructor(e){super(),this.closed=new n.vpe,(0,a.R)(e.nativeElement.ownerDocument,"keyup").pipe((0,r.h)(e=>{var t,o;return!(e.code!==s.mW.Enter||!(null===(t=this.okButton)||void 0===t?void 0:t._elementRef))||!(e.code!==s.mW.Escape||!(null===(o=this.cancelButton)||void 0===o?void 0:o._elementRef))}),(0,l.R)(this.destroyed$)).subscribe(e=>{e.code===s.mW.Enter?this.okButton._elementRef.nativeElement.click():e.code===s.mW.Escape&&this.cancelButton._elementRef.nativeElement.click()})}close(e){let t=!0,o=e.target;const i=e.currentTarget;for(;o.parentElement&&o!==i;)"dialog"===o.className&&(t=!1),o=o.parentElement;t&&(this.closed.emit(),e.preventDefault())}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.SBq))},e.\u0275cmp=n.Xpm({type:e,selectors:[["deja-dialog"]],contentQueries:function(e,t,o){if(1&e&&(n.Suo(o,c,5),n.Suo(o,d,5)),2&e){let e;n.iGM(e=n.CRH())&&(t.okButton=e.first),n.iGM(e=n.CRH())&&(t.cancelButton=e.first)}},hostBindings:function(e,t){1&e&&n.NdJ("click",function(e){return t.close(e)})},outputs:{closed:"closed"},features:[n.qOj],ngContentSelectors:p,decls:2,vars:0,consts:[[1,"dialog"]],template:function(e,t){1&e&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},styles:["[_nghost-%COMP%]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:999}[_nghost-%COMP%]   .dialog[_ngcontent-%COMP%]{z-index:1000}"]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.ez]]}),e})()},19154:function(e,t,o){"use strict";o.d(t,{b:function(){return O},J:function(){return T}});var i=o(61511),n=o(31572),s=o(15980),a=o(27439),r=o(43691),l=o(19861);const c=["actionsTemplate"];function d(e,t){if(1&e&&(n.TgZ(0,"mat-icon",6),n._uU(1),n.qZA()),2&e){const e=n.oxw(2);n.xp6(1),n.Oqu(e.icon)}}function p(e,t){if(1&e&&(n.TgZ(0,"span",7),n._uU(1),n.qZA()),2&e){const e=n.oxw(2);n.xp6(1),n.Oqu(e.title)}}function u(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"button",8),n.NdJ("click",function(){return n.CHM(e),n.oxw(2).onClose()}),n.TgZ(1,"mat-icon"),n._uU(2,"close"),n.qZA(),n.qZA()}}function m(e,t){if(1&e&&(n.TgZ(0,"mat-card-title"),n.YNc(1,d,2,1,"mat-icon",3),n.YNc(2,p,2,1,"span",2),n.TgZ(3,"div",4),n.YNc(4,u,3,0,"button",5),n.qZA(),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.icon),n.xp6(1),n.Q6J("ngIf",!e.horizontal),n.xp6(2),n.Q6J("ngIf",e.showCloseIcon)}}function g(e,t){if(1&e&&(n.TgZ(0,"h2",7),n._uU(1),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Oqu(e.title)}}function h(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"button",12),n.NdJ("click",function(){return n.CHM(e),n.oxw().$implicit.action()}),n._uU(1),n.qZA()}if(2&e){const e=n.oxw().$implicit;n.uIk("data-icon",e.icon),n.xp6(1),n.hij(" ",e.text," ")}}function f(e,t){if(1&e&&(n.TgZ(0,"mat-icon"),n._uU(1),n.qZA()),2&e){const e=n.oxw(2).$implicit;n.xp6(1),n.Oqu(e.icon)}}function b(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"button",13),n.NdJ("click",function(){return n.CHM(e),n.oxw().$implicit.action()}),n.YNc(1,f,2,1,"mat-icon",1),n.qZA()}if(2&e){const e=n.oxw().$implicit;n.ekj("action-button",!e.type),n.xp6(1),n.Q6J("ngIf",e.icon)}}function y(e,t){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,h,2,2,"button",10),n.YNc(2,b,2,3,"button",11),n.qZA()),2&e){const e=t.$implicit;n.xp6(1),n.Q6J("ngIf",e.text),n.xp6(1),n.Q6J("ngIf",e.icon&&!e.text)}}function v(e,t){if(1&e&&(n.TgZ(0,"mat-card-actions"),n.YNc(1,y,3,2,"span",9),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.actions)}}function x(e,t){}function w(e,t){if(1&e&&(n.TgZ(0,"mat-card-actions"),n.YNc(1,x,0,0,"ng-template",14),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",e.actionsTemplate)}}const Z=["*"];let O=(()=>{class e{constructor(){this.close=new n.vpe,this._showCloseIcon=!1}set horizontal(e){this._horizontal=(0,l.Ig)(e)}get horizontal(){return this._horizontal}set showCloseIcon(e){this._showCloseIcon=(0,l.Ig)(e)}get showCloseIcon(){return this._showCloseIcon}ngOnInit(){!this.icon&&this.type&&(this.icon=this.getIconFromType(this.type)),this.actions&&this.actions.forEach(e=>{!e.icon&&e.type&&(e.icon=this.getIconFromType(e.type))})}onClose(){this.close.emit()}getIconFromType(e){switch(e){case"info":case"primary":return e="primary","info_outline";case"success":return"done";case"warn":return"warning_outline";case"danger":return"error_outline";default:return null}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["deja-message-box"]],contentQueries:function(e,t,o){if(1&e&&n.Suo(o,c,5),2&e){let e;n.iGM(e=n.CRH())&&(t.actionsTemplate=e.first)}},inputs:{type:"type",title:"title",icon:"icon",actions:"actions",horizontal:"horizontal",showCloseIcon:"showCloseIcon"},outputs:{close:"close"},ngContentSelectors:Z,decls:7,vars:7,consts:[["id","msgbox"],[4,"ngIf"],["id","title",4,"ngIf"],["id","icon",4,"ngIf"],[1,"header-actions"],["mat-icon-button","","type","button","class","close",3,"click",4,"ngIf"],["id","icon"],["id","title"],["mat-icon-button","","type","button",1,"close",3,"click"],[4,"ngFor","ngForOf"],["mat-button","","type","button","class","with-icon",3,"click",4,"ngIf"],["mat-icon-button","","type","button",3,"action-button","click",4,"ngIf"],["mat-button","","type","button",1,"with-icon",3,"click"],["mat-icon-button","","type","button",3,"click"],[3,"ngTemplateOutlet"]],template:function(e,t){1&e&&(n.F$t(),n.TgZ(0,"mat-card",0),n.YNc(1,m,5,3,"mat-card-title",1),n.TgZ(2,"mat-card-content"),n.YNc(3,g,2,1,"h2",2),n.Hsn(4),n.qZA(),n.YNc(5,v,2,1,"mat-card-actions",1),n.YNc(6,w,2,1,"mat-card-actions",1),n.qZA()),2&e&&(n.Tol(t.type),n.xp6(1),n.Q6J("ngIf",t.icon||t.showCloseIcon),n.xp6(2),n.Q6J("ngIf",t.horizontal&&t.title),n.xp6(2),n.Q6J("ngIf",t.actions),n.xp6(1),n.Q6J("ngIf",!t.actions&&t.actionsTemplate))},directives:[a.a8,i.O5,a.dn,a.n5,r.Hw,s.lW,a.hq,i.sg,i.tP],styles:["deja-message-box{display:block;border-radius:3px;overflow:hidden;background-color:transparent}deja-message-box #msgbox{border:0;margin:0;padding:0;display:block;border-radius:3px}deja-message-box #msgbox>.mat-card-title{text-transform:uppercase;align-items:center;display:flex;margin:0;padding:1rem 0 0 1.2rem;font-size:1rem}deja-message-box #msgbox>.mat-card-title #icon{margin-right:.3rem}deja-message-box #msgbox>.mat-card-title .header-actions{position:absolute;top:0;right:0}deja-message-box #msgbox>.mat-card-content{margin:0;overflow:hidden;font-weight:300;padding:.5rem .75rem .75rem 1.3rem}deja-message-box #msgbox>.mat-card-content h2{font-size:1rem;margin:0;font-weight:500;text-transform:uppercase;line-height:1.5rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}deja-message-box #msgbox>.mat-card-actions{align-items:center;display:flex;justify-content:flex-end;margin:0;padding:.5rem}deja-message-box[horizontal] #msgbox{align-items:stretch;display:flex;flex-direction:row;padding:0;position:relative}deja-message-box[horizontal] #msgbox>.mat-card-title{align-items:center;display:flex;flex:0 0 auto;justify-content:center;margin:0;text-align:center;padding:.5rem 0 .5rem .8rem}deja-message-box[horizontal] #msgbox>.mat-card-title #icon{margin:0}deja-message-box[horizontal] #msgbox>.mat-card-content{align-self:center;flex:1 1 auto;padding:.75rem}deja-message-box[horizontal] #msgbox>.mat-card-actions{margin:0;padding:0;position:absolute;right:0;top:0}deja-message-box[horizontal] #msgbox>.mat-card-actions [mat-icon-button] mat-icon{font-size:1rem}"],encapsulation:2}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.ez,a.QW,r.Ps,s.ot]]}),e})()},42151:function(e,t,o){"use strict";o.d(t,{j:function(){return g},x:function(){return h}});var i=o(52076),n=o(61511),s=o(31572),a=o(27312),r=o(19861),l=o(81110),c=o(33982),d=o(25416),p=o(90611);function u(e,t){1&e&&s.Hsn(0)}const m=["*"];let g=(()=>{class e extends a.yl{constructor(e,t,o,i){super(),this.changeDetectorRef=e,this.elementRef=t,this.overlayContainer=o,this.overlayBackdropClass="cdk-overlay-transparent-backdrop",this.visibleChange=new s.vpe,this.closed=new s.vpe,this.overlayOffsetX=0,this.overlayOffsetY=0,this._isVisible=!1,this._hasBackdrop=!0,this._width=null,this._widthForMobile="100%",this._positions=a.Gg.default,this._isMobile=!1,this.disableMediaService=!1,this.overlayContainer.getContainerElement().addEventListener("contextmenu",e=>(e.preventDefault(),!1)),i.isMobile$.pipe((0,c.o)(()=>!this.disableMediaService),(0,d.R)(this.destroyed$)).subscribe(e=>{this._isMobile=e,this.updateOriginOverlay(),this.changeDetectorRef.markForCheck()})}get isVisible(){return this._isVisible}set isVisible(e){const t=(0,r.Ig)(e);if(this._isVisible!==t){this._isVisible=t;const e=this.overlayContainer.getContainerElement();e.className=Array.from(e.classList).filter(e=>e.startsWith("cdk")).join(" "),e.classList.add("deja-overlay-container"),this.isVisible&&this.overlayContainerClass&&this.overlayContainerClass.split(" ").forEach(t=>{e.classList.add(t)}),this.changeDetectorRef.markForCheck(),this.visibleChange.emit(this._isVisible)}}set hasBackdrop(e){this._hasBackdrop=(0,r.Ig)(e)}get hasBackdrop(){return this._hasBackdrop}set ownerElement(e){this._ownerElement=e,this.updateOriginOverlay()}get positionPairs(){return this.positions}get positions(){return this.isMobile?this._positionsForMobile?this._positionsForMobile:a.Gg.parse("start top start top"):this._positions}set positions(e){this._positions="string"==typeof e?a.Gg.parse(e):e}set positionsForMobile(e){this._positionsForMobile="string"==typeof e?a.Gg.parse(e):e}get isMobile(){return this._isMobile}set isMobile(e){this._isMobile=(0,r.Ig)(e),this.updateOriginOverlay(),this.disableMediaService=!0}get width(){return this._width}set width(e){this._width=(0,r.su)(e)}get widthForMobile(){return this._widthForMobile}set widthForMobile(e){this._widthForMobile=e}get overlayWidth(){return this.isMobile?this._widthForMobile:this._width}updatePosition(){var e,t;null===(t=null===(e=this.overlay)||void 0===e?void 0:e.overlayRef)||void 0===t||t.updatePosition()}show(e,t){this.overlayOffsetX=void 0!==t?+e:0,this.overlayOffsetY=t||0,this.overlayOrigin=new i.xu(new s.SBq(this.isMobile&&document.body||(null==e?void 0:e.target)||this.ownerElement||this.elementRef.nativeElement)),this.isVisible=!0,this.changeDetectorRef.markForCheck(),(0,l.H)(1).pipe((0,p.q)(1),(0,d.R)(this.destroyed$)).subscribe(()=>this.updatePosition())}close(){this.isVisible=!1,this.closed.emit(!0),this.changeDetectorRef.markForCheck()}updateOriginOverlay(){this.overlayOrigin=new i.xu(new s.SBq(this.isMobile&&document.body||this._ownerElement||this.elementRef.nativeElement))}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(i.Xj),s.Y36(a.yJ))},e.\u0275cmp=s.Xpm({type:e,selectors:[["deja-overlay"]],viewQuery:function(e,t){if(1&e&&s.Gf(i.pI,7),2&e){let e;s.iGM(e=s.CRH())&&(t.overlay=e.first)}},inputs:{overlayBackdropClass:"overlayBackdropClass",overlayContainerClass:"overlayContainerClass",overlayOffsetX:"overlayOffsetX",overlayOffsetY:"overlayOffsetY",isVisible:"isVisible",hasBackdrop:"hasBackdrop",ownerElement:"ownerElement",positions:"positions",positionsForMobile:"positionsForMobile",isMobile:"isMobile",width:"width",widthForMobile:"widthForMobile"},outputs:{visibleChange:"visibleChange",closed:"closed"},features:[s.qOj],ngContentSelectors:m,decls:2,vars:8,consts:[["cdk-connected-overlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayBackdropClass","cdkConnectedOverlayOpen","cdkConnectedOverlayOffsetY","cdkConnectedOverlayOffsetX","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","detach"],["overlayCmp",""]],template:function(e,t){1&e&&(s.F$t(),s.YNc(0,u,1,0,"ng-template",0,1,s.W1O),s.NdJ("backdropClick",function(){return t.close()})("detach",function(){return t.close()})),2&e&&s.Q6J("cdkConnectedOverlayHasBackdrop",t.hasBackdrop)("cdkConnectedOverlayBackdropClass",t.overlayBackdropClass)("cdkConnectedOverlayOpen",!!t.isVisible)("cdkConnectedOverlayOffsetY",t.overlayOffsetY)("cdkConnectedOverlayOffsetX",t.overlayOffsetX)("cdkConnectedOverlayOrigin",t.overlayOrigin)("cdkConnectedOverlayPositions",t.positionPairs)("cdkConnectedOverlayWidth",t.overlayWidth)},directives:[i.pI],styles:["@media print{.deja-overlay-container{display:none}}"],encapsulation:2,changeDetection:0}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.ez,i.U8,a.cO]]}),e})()},25269:function(e,t,o){"use strict";o.r(t),o.d(t,{DejaMessageBoxDemoModule:function(){return P}});var i=o(61511),n=o(16073),s=o(15980),a=o(27439),r=o(43691),l=o(55109),c=o(33104),d=o(15947),p=o(19154),u=o(31572),m=o(27312),g=o(42151),h=o(19861),f=o(19764),b=o(87254),y=o(40878),v=o(66599),x=o(25416),w=o(47701),Z=o(79996),O=o(43835),T=o(60509),_=o(44689);const C=["tooltipTemplate"];function k(e,t){}const j=function(e){return{$implicit:e}};function M(e,t){if(1&e&&u.YNc(0,k,0,0,"ng-template",2),2&e){const e=u.oxw();u.Q6J("ngTemplateOutlet",e.tooltipTemplate)("ngTemplateOutletContext",u.VKq(2,j,e.model))}}function q(e,t){1&e&&(u.ynx(0),u.Hsn(1),u.BQk())}const A=["*"];let J=(()=>{class e{constructor(){this.params={}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac}),e})(),I=(()=>{class e extends m.yl{constructor(e,t){super(),this.tooltipService=t,this.hide=new u.vpe,this.overlayVisible=!1,this._positions=[{originX:"center",originY:"bottom",overlayX:"center",overlayY:"top"},{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"}],this._closeOnMoveOver=!1;const o=e.nativeElement,i=(0,f.D)(this.hide).pipe((0,v.b)(()=>this._model=void 0));(0,b.R)(o.ownerDocument,"mousemove").pipe((0,x.R)(i),(0,w.b)(100),(0,Z.U)(e=>new m.Ly(e.pageX,e.pageY)),(0,O.h)(e=>{if(this._closeOnMoveOver)return!0;let t=document.elementFromPoint(e.left,e.top);for(;t;){if("cdk-overlay-pane"===t.className)return!1;t=t.parentElement}return!0}),(0,O.h)(e=>!!this._closeOnMoveOver||!new m.UL((this.params.ownerElement.nativeElement||this.params.ownerElement).getBoundingClientRect()).containsPoint(e)),(0,T.g)(300),(0,x.R)(this.destroyed$)).subscribe(()=>{this.hide.emit(),this.overlayVisible=!1})}set closeOnMoveOver(e){this._closeOnMoveOver=(0,h.Ig)(e)}get closeOnMoveOver(){return this._closeOnMoveOver}set positions(e){this._positions="string"==typeof e?m.Gg.parse(e):e}get positions(){return this._positions}get model(){return this._model}ngOnInit(){if(!this.name)throw new Error("Name is required");this.params=this.tooltipService.params[this.name],this.ownerElement=this.params.ownerElement.nativeElement||this.params.ownerElement;const e=this.params.model;if(e)if(e.subscribe)e.pipe((0,x.R)(this.destroyed$)).subscribe(e=>{this._model=e,this.overlayVisible=!0},()=>{this.hide.emit(),this.overlayVisible=!1});else{const e=this.params.model;e.then?e.then(e=>{this._model=e,this.overlayVisible=!0}).catch(()=>{this.hide.emit(),this.overlayVisible=!1}):(this._model=this.params.model,this.overlayVisible=!0)}else this._model=void 0,this.overlayVisible=!0}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.SBq),u.Y36(J))},e.\u0275cmp=u.Xpm({type:e,selectors:[["deja-tooltip"]],contentQueries:function(e,t,o){if(1&e&&u.Suo(o,C,5),2&e){let e;u.iGM(e=u.CRH())&&(t.tooltipTemplate=e.first)}},inputs:{name:"name",closeOnMoveOver:"closeOnMoveOver",positions:"positions"},outputs:{hide:"hide"},features:[u.qOj],ngContentSelectors:A,decls:3,vars:7,consts:[["hasBackdrop","false","isMobile","false",3,"overlayOffsetX","overlayOffsetY","ownerElement","isVisible","positions"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,t){1&e&&(u.F$t(),u.TgZ(0,"deja-overlay",0),u.YNc(1,M,1,4,void 0,1),u.YNc(2,q,2,0,"ng-container",1),u.qZA()),2&e&&(u.Q6J("overlayOffsetX",0)("overlayOffsetY",10)("ownerElement",t.ownerElement)("isVisible",t.overlayVisible)("positions",t.positions),u.xp6(1),u.Q6J("ngIf",!!t.tooltipTemplate),u.xp6(1),u.Q6J("ngIf",!t.tooltipTemplate))},directives:[g.j,i.O5,i.tP],styles:[".deja-overlay-container #tooltip{font-size:.8rem;border:1px solid #888;padding:.5rem}"],encapsulation:2}),e})(),U=(()=>{class e extends m.yl{constructor(e,t){super(),this.delay=600,this.show=new u.vpe;const o=e.nativeElement,i=(0,b.R)(o,"mouseleave");(0,b.R)(o,"mouseenter").pipe((0,_.w)(e=>(0,y.of)(e).pipe((0,T.g)(this.delay),(0,x.R)(i))),(0,x.R)(this.destroyed$)).subscribe(()=>{t.params[this.name]={model:this.model,ownerElement:e,positions:this.positions},this.show.emit()})}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.SBq),u.Y36(J))},e.\u0275dir=u.lG2({type:e,selectors:[["","deja-tooltip",""]],inputs:{delay:["tooltip-delay","delay"],model:["tooltip-model","model"],name:["deja-tooltip","name"],positions:["tooltip-positions","positions"]},outputs:{show:"tooltip-show"},features:[u.qOj]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({providers:[J],imports:[[i.ez,g.x,m.cO]]}),e})();var E=o(7631),z=o(71398),Q=o(50246);function N(e,t){1&e&&(u.TgZ(0,"mat-card",5),u._UZ(1,"deja-markdown",6),u.qZA()),2&e&&(u.xp6(1),u.Q6J("url","https://raw.githubusercontent.com/DSI-HUG/dejajs-components/develop/projects/deja-js/component/message-box/readme.md"))}function B(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"button",32),u.NdJ("click",function(){return u.CHM(e),u.oxw(3).dialogTitle=null}),u._uU(1," Cancel "),u.qZA(),u.TgZ(2,"button",32),u.NdJ("click",function(){return u.CHM(e),u.oxw(3).dialogTitle=null}),u._uU(3," Ok "),u.qZA()}}function F(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"deja-dialog",29),u.NdJ("closed",function(){return u.CHM(e),u.oxw(2).dialogTitle=null}),u.TgZ(1,"deja-message-box",30),u.NdJ("close",function(){return u.CHM(e),u.oxw(2).dialogTitle=null}),u._UZ(2,"span",31),u.YNc(3,B,4,0,"ng-template",null,19,u.W1O),u.qZA(),u.qZA()}if(2&e){const e=u.oxw(2);u.xp6(2),u.Q6J("innerHtml",e.dialogTitle,u.oJD)}}function V(e,t){if(1&e&&(u.TgZ(0,"div",35),u._uU(1),u.qZA()),2&e){const e=t.$implicit;u.xp6(1),u.hij(" ",e.text," ")}}function R(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"deja-tooltip",33),u.NdJ("hide",function(){return u.CHM(e),u.oxw(2).tooltipVisible=!1}),u.YNc(1,V,2,1,"ng-template",null,34,u.W1O),u.qZA()}}function H(e,t){1&e&&(u.TgZ(0,"button",36),u.TgZ(1,"mat-icon"),u._uU(2,"clear"),u.qZA(),u.qZA())}function X(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",7),u.YNc(1,F,5,1,"deja-dialog",8),u.TgZ(2,"deja-message-box",9),u._uU(3," Du texte dans la "),u.TgZ(4,"b"),u._uU(5,"message box"),u.qZA(),u.qZA(),u.TgZ(6,"deja-message-box",10),u._uU(7," Du texte dans la "),u.TgZ(8,"b"),u._uU(9,"message box"),u.qZA(),u.qZA(),u.YNc(10,R,3,0,"deja-tooltip",11),u.TgZ(11,"deja-message-box",12),u.TgZ(12,"span",13),u.NdJ("tooltip-show",function(){return u.CHM(e),u.oxw().tooltipVisible=!0}),u._uU(13,'Un message "success"'),u.qZA(),u.qZA(),u.TgZ(14,"deja-message-box",14),u._uU(15,' Un message "warn" '),u.TgZ(16,"b"),u._uU(17,"horizontal"),u.qZA(),u._uU(18," avec titre "),u.qZA(),u.TgZ(19,"deja-message-box",15),u._uU(20,' Un message "info" '),u.TgZ(21,"b"),u._uU(22,"horizontal"),u.qZA(),u.qZA(),u.TgZ(23,"deja-message-box",16),u._uU(24,' Un message "warn" '),u.TgZ(25,"b"),u._uU(26,"horizontal"),u.qZA(),u.qZA(),u._UZ(27,"div",17),u.TgZ(28,"deja-message-box",18),u._uU(29,' Un message "danger" '),u.TgZ(30,"b"),u._uU(31,"horizontal"),u.qZA(),u._uU(32," avec une action au format template "),u.YNc(33,H,3,0,"ng-template",null,19,u.W1O),u.qZA(),u.TgZ(35,"deja-message-box",20),u._uU(36," Un message horizontal sans type ni titre "),u.qZA(),u.TgZ(37,"deja-message-box",21),u._uU(38," Un message horizontal sans type ni titre "),u.qZA(),u.TgZ(39,"deja-message-box",22),u._uU(40," Un message horizontal sans type ni titre "),u.qZA(),u.TgZ(41,"deja-message-box",23),u._uU(42," Un message horizontal sans type ni titre "),u.qZA(),u.TgZ(43,"deja-message-box",24),u._uU(44," Un message horizontal sans type ni titre "),u.qZA(),u.TgZ(45,"deja-message-box",25),u.TgZ(46,"span",13),u.NdJ("tooltip-show",function(){return u.CHM(e),u.oxw().tooltipVisible=!0}),u._uU(47,'Un message "success"'),u.qZA(),u.qZA(),u.TgZ(48,"deja-message-box",26),u.TgZ(49,"span",13),u.NdJ("tooltip-show",function(){return u.CHM(e),u.oxw().tooltipVisible=!0}),u._uU(50,'Un message "success"'),u.qZA(),u.qZA(),u.TgZ(51,"deja-message-box",27),u.TgZ(52,"span",13),u.NdJ("tooltip-show",function(){return u.CHM(e),u.oxw().tooltipVisible=!0}),u._uU(53,'Un message "success"'),u.qZA(),u.qZA(),u.TgZ(54,"deja-message-box",28),u.TgZ(55,"span",13),u.NdJ("tooltip-show",function(){return u.CHM(e),u.oxw().tooltipVisible=!0}),u._uU(56,'Un message "success"'),u.qZA(),u.qZA(),u.qZA()}if(2&e){const e=u.oxw();u.xp6(1),u.Q6J("ngIf",e.dialogTitle),u.xp6(1),u.Q6J("actions",e.closeAction),u.xp6(4),u.Q6J("actions",e.closeAction),u.xp6(4),u.Q6J("ngIf",e.tooltipVisible),u.xp6(1),u.Q6J("actions",e.actions),u.xp6(1),u.Q6J("tooltip-model",e.toolTipModel),u.xp6(2),u.Q6J("actions",e.closeAction),u.xp6(9),u.Q6J("actions",e.closeAction),u.xp6(14),u.Q6J("actions",e.closeAction),u.xp6(8),u.Q6J("actions",e.actions),u.xp6(1),u.Q6J("tooltip-model",e.toolTipModel),u.xp6(2),u.Q6J("actions",e.actions),u.xp6(1),u.Q6J("tooltip-model",e.toolTipModel),u.xp6(2),u.Q6J("actions",e.actions),u.xp6(1),u.Q6J("tooltip-model",e.toolTipModel),u.xp6(2),u.Q6J("actions",e.actions),u.xp6(1),u.Q6J("tooltip-model",e.toolTipModel)}}const S=z.Bz.forChild([{path:"",component:(()=>{class e{constructor(){this.tabIndex=1,this.toolTipModel={text:"Je suis un deja-tooltip"},this.tooltipVisible=!1,this.actions=[{action:()=>{this.dialogTitle="<b>I am a deja-dialog !</b><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet felis id nisl maximus interdum. Morbi mollis sapien sapien. Vivamus lacinia elementum eros"},text:"Cliquez moi pour ouvrir une deja-dialog",type:"primary"},{action:()=>alert("test action"),text:"test sans icon"},{action:()=>alert("test action"),type:"danger"}],this.closeAction=[{action:()=>alert("test action"),icon:"clear"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["message-box-demo"]],decls:5,vars:3,consts:[[3,"selectedIndex","selectedTabChange"],["label","API REFERENCE"],["label","EXAMPLES"],["class","demo-card demo-basic",4,"ngIf"],["class","example",4,"ngIf"],[1,"demo-card","demo-basic"],[3,"url"],[1,"example"],[3,"closed",4,"ngIf"],["type","primary","title","Title",3,"actions"],["type","primary","title","Title","horizontal","",3,"actions"],["name","test-tt",3,"hide",4,"ngIf"],["type","success","title","Title",3,"actions"],["deja-tooltip","test-tt",3,"tooltip-model","tooltip-show"],["type","warn","horizontal","","title","Title",3,"actions"],["type","info","horizontal",""],["type","warn","horizontal","",3,"actions"],[2,"margin","1rem"],["type","danger","horizontal","","title","Title"],["actionsTemplate",""],["horizontal",""],["type","danger","horizontal","","light","",3,"actions"],["type","success","horizontal","","light",""],["type","warn","horizontal","","light",""],["type","info","horizontal","","light",""],["type","danger","title","Title","light","",3,"actions"],["type","success","title","Title","light","",3,"actions"],["type","warn","title","Title","light","",3,"actions"],["type","info","title","Title","light","",3,"actions"],[3,"closed"],["type","primary","title","Title","showCloseIcon","true",3,"close"],[3,"innerHtml"],["mat-button","",3,"click"],["name","test-tt",3,"hide"],["tooltipTemplate",""],["id","tooltip"],["mat-icon-button",""]],template:function(e,t){1&e&&(u.TgZ(0,"mat-tab-group",0),u.NdJ("selectedTabChange",function(e){return t.tabIndex=e.index}),u._UZ(1,"mat-tab",1),u._UZ(2,"mat-tab",2),u.qZA(),u.YNc(3,N,2,1,"mat-card",3),u.YNc(4,X,57,17,"div",4)),2&e&&(u.Q6J("selectedIndex",t.tabIndex),u.xp6(3),u.Q6J("ngIf",0===t.tabIndex),u.xp6(1),u.Q6J("ngIf",1===t.tabIndex))},directives:[l.SP,l.uX,i.O5,a.a8,Q.F,p.b,U,d.a,s.lW,I,r.Hw],styles:["[_nghost-%COMP%]   .example[_ngcontent-%COMP%]{margin-top:2rem}[_nghost-%COMP%]   deja-message-box[_ngcontent-%COMP%]{margin-bottom:1rem}"]}),e})()},{path:"**",redirectTo:"",pathMatch:"full"}]);let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({providers:[],imports:[[i.ez,n.u5,s.ot,a.QW,l.Nh,c.g0,r.Ps,d.W,p.J,E.O,Y,S]]}),e})()}}]);