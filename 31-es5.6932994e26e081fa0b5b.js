function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{QpsU:function(e,t,n){"use strict";n.r(t);var a=n("SVse"),r=n("Dxy4"),o=n("PDjf"),c=n("M9ds"),i=n("l0rg"),l=n("iInd"),s=n("WfBr"),d=n("8Y7J");function m(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"mat-card",5),d["\u0275\u0275text"](1," TODO "),d["\u0275\u0275elementEnd"]())}function u(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"mat-card",6),d["\u0275\u0275elementStart"](1,"mat-toolbar",7),d["\u0275\u0275text"](2,"Manage app sidenav"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"mat-card-content",8),d["\u0275\u0275elementStart"](4,"button",9),d["\u0275\u0275listener"]("click",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().toggle()})),d["\u0275\u0275text"](5,"Toggle"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"button",10),d["\u0275\u0275listener"]("click",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().open()})),d["\u0275\u0275text"](7,"Open"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"button",11),d["\u0275\u0275listener"]("click",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().close()})),d["\u0275\u0275text"](9,"Close"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}}var f,p=((f=function(){function e(t){_classCallCheck(this,e),this.sidenavService=t,this.tabIndex=1}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"toggle",value:function(){this.sidenavService.toggle()}},{key:"open",value:function(){this.sidenavService.open()}},{key:"close",value:function(){this.sidenavService.close()}}]),e}()).\u0275fac=function(e){return new(e||f)(d["\u0275\u0275directiveInject"](s.f))},f.\u0275cmp=d["\u0275\u0275defineComponent"]({type:f,selectors:[["sidenav-demo"]],decls:5,vars:3,consts:[[3,"selectedIndex","selectedTabChange"],["label","API REFERENCE"],["label","EXAMPLES"],["class","demo-card demo-basic",4,"ngIf"],["class","demo-card",4,"ngIf"],[1,"demo-card","demo-basic"],[1,"demo-card"],["color","primary"],[1,"listContainer"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"mat-tab-group",0),d["\u0275\u0275listener"]("selectedTabChange",(function(e){return t.tabIndex=e.index})),d["\u0275\u0275element"](1,"mat-tab",1),d["\u0275\u0275element"](2,"mat-tab",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,m,2,0,"mat-card",3),d["\u0275\u0275template"](4,u,10,0,"mat-card",4)),2&e&&(d["\u0275\u0275property"]("selectedIndex",t.tabIndex),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngIf",0===t.tabIndex),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",1===t.tabIndex))},directives:[c.b,c.a,a.n,o.a,i.a,o.c,r.b],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:1rem .5rem}"]}),f);n.d(t,"DejaSidenavDemoModule",(function(){return g}));var b,v=[{path:"",component:p}],g=((b=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},providers:[],imports:[[a.c,s.e,r.c,o.d,c.c,i.b,l.f.forChild(v)]]}),b)}}]);