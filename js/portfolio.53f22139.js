(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["portfolio"],{2829:function(t,a,r){},c9e5:function(t,a,r){"use strict";r.r(a);var s=function(){var t=this,a=t._self._c;return a("div",{class:t.className},[a("section",{staticClass:"padding_30 padbot_45"},[a("app-title",{attrs:{label:"Portfolio (Hobby Projects)"}}),a("a-row",{attrs:{gutter:32}},t._l(t.displayProjects,(function(t,r){return a("appPortfolioCard",{key:r,attrs:{cardData:t}})})),1)],1)])},o=[],e=r("fa2b"),l=function(){var t=this,a=t._self._c;return a("a-col",{staticClass:"project-card",attrs:{loading:t.loading,xs:24,sm:24,md:12,lg:12,xl:12}},[a("p",{staticClass:"top_30"},[a("a-card",{staticStyle:{width:"100%"},attrs:{hoverable:""}},[a("img",{attrs:{slot:"cover",alt:t.cardData&&t.cardData.title,src:t.cardData.image},slot:"cover"}),a("a-card-meta",{attrs:{title:t.cardData.title}},[a("template",{slot:"description"},[a("p",[t._v(t._s(t.cardData.description))]),a("div",{staticClass:"action-btns"},[a("a",{attrs:{href:t.cardData.link,target:"_blank"}},[t._v("Visit Link")]),a("a",{attrs:{href:t.cardData.repo,target:"_blank"}},[t._v("Git Repo Link")])])])],2)],1)],1)])},c=[],i={name:"PortfolioCard",data(){return{loading:!0}},props:{cardData:Object}},n=i,d=(r("e5dd"),r("2877")),p=Object(d["a"])(n,l,c,!1,null,null,null),u=p.exports,f=r("a078"),b={computed:{displayProjects:()=>f["c"]},props:{data:Object,className:String},components:{appTitle:e["a"],appPortfolioCard:u}},_=b,g=Object(d["a"])(_,s,o,!1,null,null,null);a["default"]=g.exports},e5dd:function(t,a,r){"use strict";r("2829")}}]);
//# sourceMappingURL=portfolio.53f22139.js.map