"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4010],{4010:(L,g,r)=>{r.r(g),r.d(g,{DetailPageModule:()=>P});var d=r(6814),p=r(95),t=r(6761),l=r(3044),e=r(6689),h=r(6265),f=r(7319);function m(s,n){if(1&s&&(e.TgZ(0,"ion-grid",7)(1,"ion-row",8)(2,"ion-col",9),e._UZ(3,"img",10),e.qZA(),e.TgZ(4,"ion-col",11)(5,"ion-label"),e._uU(6),e.qZA()()()()),2&s){const o=n.$implicit;e.Q6J("routerLink","/presentateurs/"+o.id),e.xp6(3),e.Q6J("src","https://devfest2018.gdgnantes.com/"+o.photoUrl,e.LSH),e.xp6(3),e.Oqu(o.name)}}const v=[{path:"",component:(()=>{var s;class n{constructor(i,a,u){this.route=i,this._sessionService=a,this._presentateurService=u,this.session={},this.speakerList=[]}ngOnInit(){this.route.paramMap.subscribe(i=>{this.speakerList=[],this.session.id=i.get("id"),this._sessionService.getSessions().subscribe(a=>{this.session=a[this.session.id],this._presentateurService.getPresentateurs().subscribe(u=>{var c;null===(c=this.session.speakers)||void 0===c||c.forEach(D=>{this.speakerList.push(u[D])})})})})}}return(s=n).\u0275fac=function(i){return new(i||s)(e.Y36(l.gz),e.Y36(h.j),e.Y36(f.m))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-detail"]],decls:19,vars:7,consts:[[3,"translucent"],["slot","end"],[1,"ion-text-center"],["name","chevron-back-outline","slot","start","routerLink","/sessions"],["id","sessionsList",3,"fullscreen"],[3,"routerLink",4,"ngFor","ngForOf"],["size","small","fill","outline","expand","block",3,"routerLink"],[3,"routerLink"],[1,"ion-justify-content-center"],["size","3"],["alt","photo",3,"src"],["size","6",1,"ion-align-self-center"]],template:function(i,a){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title",2),e._uU(5,"Sessions"),e.qZA(),e._UZ(6,"ion-icon",3),e.qZA()(),e.TgZ(7,"ion-content",4)(8,"ion-card")(9,"ion-card-header")(10,"ion-card-title"),e._uU(11),e.qZA(),e.TgZ(12,"ion-card-subtitle"),e._uU(13),e.qZA()(),e.TgZ(14,"ion-card-content"),e._uU(15),e.qZA(),e.YNc(16,m,7,3,"ion-grid",5),e.TgZ(17,"ion-button",6),e._uU(18,"Mes Notes"),e.qZA()()()),2&i&&(e.Q6J("translucent",!0),e.xp6(7),e.Q6J("fullscreen",!0),e.xp6(4),e.Oqu(a.session.title),e.xp6(2),e.Oqu(a.session.titleMobile),e.xp6(2),e.hij(" ",a.session.description," "),e.xp6(1),e.Q6J("ngForOf",a.speakerList),e.xp6(1),e.Q6J("routerLink","/note/"+a.session.id))},dependencies:[d.sg,t.YG,t.Sm,t.PM,t.FN,t.Zi,t.tO,t.Dq,t.wI,t.W2,t.jY,t.Gu,t.gu,t.Q$,t.fG,t.Nd,t.wd,t.sr,t.YI,l.rH]}),n})()}];let Z=(()=>{var s;class n{}return(s=n).\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[l.Bz.forChild(v),l.Bz]}),n})(),P=(()=>{var s;class n{}return(s=n).\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[d.ez,p.u5,t.Pc,Z]}),n})()}}]);