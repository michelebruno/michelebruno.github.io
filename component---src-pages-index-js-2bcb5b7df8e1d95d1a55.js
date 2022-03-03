"use strict";(self.webpackChunkmichele_bruno=self.webpackChunkmichele_bruno||[]).push([[678],{7004:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3366),l=a(7294),r=a(5900),s=a.n(r),i=(a(5444),a(3110),a(287),["children","before","after","className","as"]);function c(e){var t=e.children,a=e.before,r=e.after,c=e.className,o=e.as,m=(0,n.Z)(e,i),u=s()(" inline-block transition-all","button-child"),p=s()(u,"w-0 group-hover:w-[1em] group-hover:pr-2 overflow-hidden inline-block ","transition-all align-bottom");return l.createElement(o,Object.assign({className:s()("rounded-button group border-b-4 border-current inline-block ",c)},m),a&&l.createElement("span",{className:p},"→"),l.createElement("span",{className:s()(u,"py-1 text-current")},t),r&&l.createElement("span",{className:p},"→"))}c.defaultProps={as:"a"}},9880:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(7004);function r(){return n.createElement("section",{className:"min-h-[80vh] border-b grid items-center"},n.createElement("div",{className:"px items-center leading-tight"},n.createElement("p",{className:"fs-3xl"},"Let's work together! ",n.createElement("br",null),n.createElement(l.Z,{before:!0,href:"mailto:bm.michelebruno@gmail.com"},"Drop me a line.")),n.createElement("p",{className:"pt-4 fs-lg hidden"},"I'm currently looking for an internship, however you can write me ",n.createElement("br",null),"if you need a freelance creative developer.")))}},4951:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(7294),l=a(2884),r=a(2932),s=a(5444),i=a(5900),c=a.n(i),o=a(2802),m=(a(7004),a(287));a(3110);function u(e){var t=e.project,a=(e.position,e.className),l=e.version,r=(0,n.useState)(!1),i=r[0],u=r[1],p=(0,s.useStaticQuery)("3307058481").projects.nodes.find((function(e){return e.slug===t}))||console.error("Project "+t+" not found"),d=p.name,f=(p.year,p.type),g=p.slug,v=p.tagline,b=p.thumbnail,E=p.cover,h="/projects/"+g+"/";return 2===l?n.createElement("div",{className:c()("group overflow-hidden cursor-pointer","aspect-[16/9]  border-r relative",a)},n.createElement(o.Z,{image:b,className:"bg-white object-cover h-full w-full absolute inset-0 opacity-0 group-hover:opacity-50 transition-all group-hover:scale-105"}),n.createElement("div",{className:"absolute inset-0 grid grid-rows-[12rem_auto_auto] px-32 py-32 "},n.createElement("h3",{className:"fs-3xl"},d),n.createElement("div",{className:"text-"},n.createElement("p",{className:"group-hover:translate-y-full group-hover:opacity-0 transition-all text-gray"},f.join(" / "))),n.createElement("div",{className:"self-end"},n.createElement(m.KR,{as:s.Link,to:h,before:!0},"View")))):3===l?n.createElement("div",{className:c()("ver-3 group overflow-hidden","aspect-[4/5] border relative",a),role:"group",onClick:function(){return(0,s.navigate)(h)}},n.createElement(o.Z,{image:b,className:"bg-white object-cover h-full w-full absolute inset-0 lg:opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"}),n.createElement("div",{className:"bg-white absolute inset-0 opacity-50"}),n.createElement("div",{className:"relative h-full inset-0 grid gap-x-0 grid-rows-3 lg:grid-rows-[8rem_auto_auto] px py  mix-blend-multiply"},n.createElement(m.H3,null,d),n.createElement("div",null,n.createElement("div",{className:"overflow-hidden pb"},n.createElement("div",{className:"group-hover:translate-y-full group-hover:opacity-0 transition-all fs-lg"},n.createElement("h4",{className:""},v),n.createElement("p",{className:"text-gray"},f.join(" + "))))),n.createElement("div",{className:"self-end"},n.createElement(m.KR,{as:s.Link,to:h},"View →")))):n.createElement(n.Fragment,null,n.createElement("div",{className:"fixed inset-16 -z-10 px py"},n.createElement("div",{className:" h-1/2 w-1/2  right-0 top-1/2 -translate-y-1/2 absolute"},n.createElement(o.Z,{image:E||b,className:c()("bg-white object-cover aspect-[9/16] h-full transition-all ",i?"opacity-100 ":"opacity-0 ")}))),n.createElement(s.Link,{to:h,className:c()("group block  border-b px py",a)},n.createElement("div",{className:" relative ",onMouseEnter:function(e){u(!0)},onMouseLeave:function(e){u(!1)}},n.createElement("div",{className:"lg:max-w-[75%]"},n.createElement("h2",{className:"fs-3xl inline "},d),n.createElement("div",{className:"inline-grid gap-0 fs-base  !leading-none  pt-4 text-gray align-top"},n.createElement("span",{className:""},f.join(" + ")))),n.createElement("h3",{className:"fs-xl text-gray"},v))))}var p=a(1863),d=a(9880),f=a(4329);l.ZP.registerPlugin(r.i);var g=["opinion-library","sign-here-to-fight-the-pandemic","disruptive","feelo","accessibilita-e-coinvolgere-tutti","moodboard"];var v=function(){var e=(0,n.useRef)();return(0,n.useEffect)((function(){}),[]),n.createElement(p.Z,null,n.createElement("div",{className:"flex content-around items-center relative py"},n.createElement("h1",{className:"fs-3xl px py pb-lg leading-relaxed "},n.createElement("span",{className:""},"Hey!")," I'm Michele Bruno, an Italian"," ",n.createElement("span",{className:"inline-block font-sans not-italic"},"UX Designer")," and"," ",n.createElement("span",{className:"inline-block font-sans not-italic"},"Creative Developer")," based in Milan, currently enrolled in Communication Design Master at PoliMi."),n.createElement("div",{className:"hidden py text-gray text-left absolute bottom-0 left-0"},n.createElement("button",{className:"scroll-button px"},"Scroll"))),n.createElement("section",{className:"",ref:e},n.createElement(f.Z,{className:"gap-0 border-t"},g.map((function(e,t){return n.createElement(u,{key:e,project:e,position:t+1,className:""})})))),n.createElement(d.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-2bcb5b7df8e1d95d1a55.js.map