import{o as r,c as l,a as e,n as S,b as h,r as b,F as m,t as d,d as _,p,e as u,f as g,g as v,h as C}from"./vendor.384c0846.js";const x=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}};x();var I="/portfolio/assets/logo.6add005d.svg";var f=(o,s)=>{const i=o.__vccOpts||o;for(const[c,t]of s)i[c]=t;return i};const k={name:"HeaderSection",data(){return{classOpen:!1}},methods:{toggleMobileMenu(){this.classOpen=!this.classOpen}}},j=h('<a href="#home" data-v-0739ff0c><img id="brand" src="'+I+'" alt="logo" data-v-0739ff0c></a><nav data-v-0739ff0c><ul data-v-0739ff0c><li data-v-0739ff0c><a href="#home" data-v-0739ff0c>Home</a></li><li data-v-0739ff0c><a href="#about-me" data-v-0739ff0c>About Me</a></li><li data-v-0739ff0c><a href="#my-work" data-v-0739ff0c>My Work</a></li><li data-v-0739ff0c><a href="#contact" data-v-0739ff0c>Contact</a></li></ul></nav>',2),M=h('<div class="bar1" data-v-0739ff0c></div><div class="bar2" data-v-0739ff0c></div><div class="bar3" data-v-0739ff0c></div><ul class="mobile-menu" data-v-0739ff0c><li data-v-0739ff0c><a href="#home" data-v-0739ff0c>Home</a></li><li data-v-0739ff0c><a href="#about-me" data-v-0739ff0c>About Me</a></li><li data-v-0739ff0c><a href="#my-work" data-v-0739ff0c>My Work</a></li><li data-v-0739ff0c><a href="#contact" data-v-0739ff0c>Contact</a></li></ul>',4),P=[M];function F(o,s,i,c,t,a){return r(),l("header",null,[j,e("div",{id:"hamburger-icon",class:S({open:t.classOpen}),onClick:s[0]||(s[0]=(...n)=>a.toggleMobileMenu&&a.toggleMobileMenu(...n))},P,2)])}var A=f(k,[["render",F],["__scopeId","data-v-0739ff0c"]]),H="/portfolio/assets/caret-forward-circle.2dbc16d5.svg";const V={name:"BannerSection"},z={class:"banner__container",id:"home"},N=h('<div class="left__bar" data-v-c3f8fb5a></div><div class="banner__texts" data-v-c3f8fb5a><h1 data-v-c3f8fb5a>Hello, I&#39;m <span data-v-c3f8fb5a>Reinaldo Perez</span></h1><h2 data-v-c3f8fb5a>and I&#39;m a front-end web developer</h2><div class="link__btn" data-v-c3f8fb5a><h3 data-v-c3f8fb5a>view my work</h3><a href="#my-work" data-v-c3f8fb5a><img class="button" src="'+H+'" alt="icon" data-v-c3f8fb5a></a></div></div>',2),O=[N];function B(o,s,i,c,t,a){return r(),l("div",z,O)}var L=f(V,[["render",B],["__scopeId","data-v-c3f8fb5a"]]);const T={name:"CardComponent",data(){return{cards:[{name:"Minimalist Design Enthusiastic",description:"Minimalism aims for simplicity and objectivity. Minimalist designs tend toward more whitespace, better typography, grid layouts, and less color."},{name:"Accurate selection of colors",description:"Different colors, fonts, and arrangement of the text to help increase scanability, legibility and readability. Different sizes, fonts, and arrangement of the text to help increase scanability, legibility and readability."},{name:"Following the desires of the client",description:"It's very important to follow strictly the instructions of the customer. Different sizes, fonts, and arrangement of the text to help increase scanability, legibility and readability."},{name:"Here, we can put anything we want",description:"Actually I'm starting to enjoy VUE and I know that, once I practice all the directives I will love it. Different sizes, fonts, and arrangement of the text to help increase scanability, legibility and readability."}]}}},D={class:"card__content"};function E(o,s,i,c,t,a){return r(!0),l(m,null,b(t.cards,n=>(r(),l("div",{class:"card__component-container",key:n.name},[e("h4",null,d(n.name),1),e("p",D,d(n.description),1)]))),128)}var W=f(T,[["render",E],["__scopeId","data-v-4cf5dfdb"]]);const Y={name:"AboutSection",data(){return{title:"About Me",subtitle:"Coming from the world of marketing and advertising, I know the importance of offering the best user experience while respecting the clients demands."}},components:{CardComponent:W}},y=o=>(p("data-v-2b98966a"),o=o(),u(),o),q={class:"about__me-container",id:"about-me"},R=y(()=>e("div",{class:"left__bar"},null,-1)),J={class:"content"},K={class:"title"},Q=y(()=>e("div",{class:"under-line"},null,-1)),U={class:"cards__container"};function G(o,s,i,c,t,a){const n=g("CardComponent");return r(),l("div",q,[R,e("div",J,[e("div",K,[e("h2",null,d(t.title),1),Q]),e("h4",null,d(t.subtitle),1),e("div",U,[_(n)])])])}var X=f(Y,[["render",G],["__scopeId","data-v-2b98966a"]]);const Z={name:"ProjectComponent",data(){return{projects:[{title:"HYF-Connect",description:"Platform where all students, alumni and coaches of HackYourFuture Belgium can share their coding experiences and profiles for new opportunities to grow. Final group-project of Class 15.",technologies:"Vue3js, CSS, SQl, JWT",date:"February 2022",github:"https://github.com/HYF-Connect/hyf-connect",website:"https://hyf-connect.herokuapp.com/"},{title:"Reinaldo Perez Portfolio",description:"This portfolio is my very first project after finishing my formation in HackYourFuture Belgium. I pretend to create, from now, one project monthly using other technologies and show them in this website",technologies:"Vue3js, Vite, CSS",date:"May 2022",github:"https://github.com/perezrei/portfolio",website:"https://perezrei.github.io/portfolio/"},{title:"Project Number 3",description:"This is the third example of a project for my portfolio. For this project I want to create a website fetching data from an API",technologies:"Vue3js, CSS",date:"May 2022",github:"https://github.com/freeCodeCamp/freeCodeCamp",website:"https://vuejs.org/"},{title:"Project Number 4",description:"This is the fourth example of a project for my portfolio.",technologies:"Vue3js, CSS",date:"May 2022",github:"https://github.com/sudheerj/javascript-interview-questions",website:"https://cli.vuejs.org/"}]}}},ee={class:"buttons__container"},te=["href"],oe=["href"];function ae(o,s,i,c,t,a){return r(!0),l(m,null,b(t.projects,n=>(r(),l("div",{class:"project__component-container",key:n.title},[e("h4",null,d(n.title),1),e("p",null,d(n.description),1),e("p",null,"Technologies implemented: "+d(n.technologies),1),e("p",null,d(n.date),1),e("div",ee,[e("a",{href:n.github,target:"_blank",class:"github__btn"},"github",8,te),e("a",{href:n.website,target:"_blank",class:"website__btn"},"website",8,oe)])]))),128)}var ne=f(Z,[["render",ae],["__scopeId","data-v-2d5c3ef9"]]);const se={name:"PortfolioSection",components:{ProjectComponent:ne},data(){return{title:"My Work",subtitle:"These are some of the projects that I\u2019ve been working on."}}},$=o=>(p("data-v-d8cf77e8"),o=o(),u(),o),ie={class:"portfolio__container",id:"my-work"},ce=$(()=>e("div",{class:"left__bar"},null,-1)),re={class:"content"},le={class:"title"},de=$(()=>e("div",{class:"under-line"},null,-1)),_e={class:"projects__container"};function fe(o,s,i,c,t,a){const n=g("ProjectComponent");return r(),l("div",ie,[ce,e("div",re,[e("div",le,[e("h2",null,d(t.title),1),de]),e("h4",null,d(t.subtitle),1),e("div",_e,[_(n)])])])}var pe=f(se,[["render",fe],["__scopeId","data-v-d8cf77e8"]]);const ue={name:"ContactSection"},w=o=>(p("data-v-cd7e583a"),o=o(),u(),o),he={class:"contact__container",id:"contact"},me=w(()=>e("div",{class:"left__bar"},null,-1)),ve=w(()=>e("div",{class:"contact__content"},[e("div",{class:"title"},[e("h2",null,"Contact"),e("div",{class:"under-line"})]),e("h4",null,[v("Have a question or want to work together? "),e("br"),v(" Leave me a message")]),e("div",{class:"contact__form"},[e("input",{class:"name__input",placeholder:"name",type:"text"}),e("input",{class:"email__input",placeholder:"e-mail",type:"email"}),e("textarea",{class:"message__input",placeholder:"message",name:"message",id:"",cols:"30",rows:"10"}),e("button",{class:"submit__btn",type:"submit",onclick:"alert('testing button')"},"Submit")])],-1)),be=[me,ve];function ge(o,s,i,c,t,a){return r(),l("div",he,be)}var ye=f(ue,[["render",ge],["__scopeId","data-v-cd7e583a"]]);const $e={name:"FooterSection"},we=o=>(p("data-v-0fedbe49"),o=o(),u(),o),Se={class:"footer__container"},Ce=we(()=>e("p",{class:"footer__text"},"\xA9 2022 | Reinaldo Perez",-1)),xe=[Ce];function Ie(o,s,i,c,t,a){return r(),l("div",Se,xe)}var ke=f($e,[["render",Ie],["__scopeId","data-v-0fedbe49"]]);const je={setup(o){return(s,i)=>(r(),l(m,null,[_(A),_(L),_(X),_(pe),_(ye),_(ke)],64))}};C(je).mount("#app");
