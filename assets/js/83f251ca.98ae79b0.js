(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(a,".").concat(d)]||m[d]||p[d]||i;return r?o.a.createElement(b,s(s({ref:t},c),{},{components:r})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},159:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/ale_transport_equation-625c2b560701be4316b3e6674033cb23.png"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(106)),a={id:"solver",title:"Solver settings",description:"Information on solver settings."},s={unversionedId:"solver",id:"solver",isDocsHomePage:!1,title:"Solver settings",description:"Information on solver settings.",source:"@site/docs/solver.md",slug:"/solver",permalink:"/fresco.knowledgebase/docs/solver",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/solver.md",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/fresco.knowledgebase/docs/"},next:{title:"Spray modeling",permalink:"/fresco.knowledgebase/docs/spray"}},l=[{value:"The Arbitrary Lagrangian-Eulerian solver.",id:"the-arbitrary-lagrangian-eulerian-solver",children:[]},{value:"Momentum solver",id:"momentum-solver",children:[]},{value:"Diffusion solvers",id:"diffusion-solvers",children:[]},{value:"Advection solver",id:"advection-solver",children:[]},{value:"References",id:"references",children:[]}],c={toc:l};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"the-arbitrary-lagrangian-eulerian-solver"},"The Arbitrary Lagrangian-Eulerian solver."),Object(i.b)("p",null,"FRESCO solves transport equations in the finite-volume mesh using the Arbitrary Lagrangian-Eulerian (ALE) solution method.\nEach transport equation can be split into several operators: "),Object(i.b)("p",null,Object(i.b)("img",{alt:"Docusaurus",src:r(159).default})),Object(i.b)("p",null,"These terms have different properties, which makes different solution methods more suitable to them. The ALE method performs time integration following three major separate stages, or ",Object(i.b)("em",{parentName:"p"},"phases"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Phase A")," A constant-volume step, where explicit source terms at the right-hand-side of the transport equations are solved. These include, for example, spray, multiphase and combustion source terms. During this stage, the computational mesh is steady, so all source terms can be treated like happening in a constant-volume environment."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Phase B")," A Lagrangian step, where all Lagrangian derivatives pressure-momentum coupling is solved. During this stage, mesh motion follows the Lagrangian node motion following the momentum equation, so, there are no mass/momentum fluxes through the faces. This makes the Lagrangian stage suitable to solve computationally expensive diffusion terms for all quantities. All these are solved in a fully time-implicit fashion, using robust, preconditioned linear system solvers."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Phase C")," A Eulerian step, where mesh nodes move back from the Lagrangian locations to the Eulerian locations at the new step (n+1). This ",Object(i.b)("em",{parentName:"li"},"rezoning")," step solves for the advective fluxes of all quantities. It is performed using an explicit, subcycled integration whose timestep is determined as a fraction of the Courant constraint.")),Object(i.b)("p",null,"In this way, with the ALE method we achieve: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each term is solved with its most tailored solution method;"),Object(i.b)("li",{parentName:"ul"},"The solver is inherently compressible, and works at all speeds (including ",Object(i.b)("inlineCode",{parentName:"li"},"Ma>=1"),");"),Object(i.b)("li",{parentName:"ul"},"Because the Lagrangian solvers are fully implicit, there are no upper limits on the integration timesteps. However, for accuracy reasons, a timestepping strategy is used to limit timestep size based on some error estimators.")),Object(i.b)("h2",{id:"momentum-solver"},"Momentum solver"),Object(i.b)("h2",{id:"diffusion-solvers"},"Diffusion solvers"),Object(i.b)("h2",{id:"advection-solver"},"Advection solver"),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("a",{id:"1",href:"https://www.sciencedirect.com/science/article/pii/S002199910600338X"},"[1]"),"D. J. Torres, M. F. Trujillo. KIVA-4: An unstructured ALE code for compressible gas flow with sprays. Journal of Computational Physics 219, 943-975, 2006. doi:10.1016/j.jcp.2006.07.006")}u.isMDXComponent=!0}}]);