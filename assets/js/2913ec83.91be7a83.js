(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{109:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?a.a.createElement(f,l(l({ref:n},s),{},{components:t})):a.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(109)),o={id:"flame-dpik",title:"Discrete Particle Ignition Kernel (DPIK)",description:"DPIK kernel model settings."},l={unversionedId:"flame-dpik",id:"flame-dpik",isDocsHomePage:!1,title:"Discrete Particle Ignition Kernel (DPIK)",description:"DPIK kernel model settings.",source:"@site/docs/flame-dpik.md",slug:"/flame-dpik",permalink:"/fresco.knowledgebase/docs/flame-dpik",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flame-dpik.md",version:"current",sidebar:"docs",previous:{title:"Model input",permalink:"/fresco.knowledgebase/docs/flame"}},c=[{value:"Model input",id:"model-input",children:[]},{value:"Geometry handling",id:"geometry-handling",children:[]},{value:"References",id:"references",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"model-input"},"Model input"),Object(i.b)("p",null,"The Discrete Particle Ignition Kernel (DPIK) model is implemented based on the original model by ",Object(i.b)("a",{parentName:"p",href:"#1"},"Fan and Reitz")," and Tan and Reitz.\nIn the Matlab structure, kernel model inputs are found under the ",Object(i.b)("inlineCode",{parentName:"p"},"flame.sparkPlug")," structure: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-{octave}"},"\n      electrodes: []               % 1 or 2 electrode locations\n     nChannelPts: 1                % number of spark channel points \n       kernel_r0: 0.1000           % initial radius of each kernel parcel\n         eta_eff: 0.3000           % thermal discharge efficiency [0 to 1]\n          Qspark: 20               % Electrical spark plug power [W]\n         strikes: []               % Spark strike events \n    toFlame_mode: 'TURBLENGTH'     % Kernel->Flame transition method\n     toFlame_val: 25               % Kernel->Flame transition threshold\n          cema_U: 'BLANCO'         % [CEMA only] Spontaneous Flame Speed method (\"BLANCO\",\"SANKARAN\")\n\n")),Object(i.b)("p",null,"The same settings are found in the flame model's ASCII input (",Object(i.b)("inlineCode",{parentName:"p"},"itapeFlame"),") as optional inputs: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:'language-title="itapeFlame"'},'\ncema_u BLANCO                                 ! CEMA velocity mode: "Sankaran" use IDT; "Blanco" use ERC Autoignition Index \nchannelPts 1                                  ! number of spark-channel particles\nelectrode -0.300000 0.000000 -0.700000        ! electrode 1 of 1: location\nr0    1.00000E-001                            ! kernel: initial radius [cm]\neta_eff    3.00000E-001                       ! kernel: thermal discharge coefficient [-]\ntoFlame TURBLENGTH     25.00                  ! kernel->flame switch. "TURBLENGTH" (follow CM1), "NCELLS" (follow #) \nQspark    2.00000E+001                        ! spark plug electrical power [W] \nstrike at -14.000000 for 8.000000             ! spark strike 1 of 1  \n\n')),Object(i.b)("h2",{id:"geometry-handling"},"Geometry handling"),Object(i.b)("p",null,"There are significant differences as far as what the actual kernel geometry is implemented like. In the original model, the spherical kernel volume was represented using a large set of Lagrangian parcels, which would be queried for location and "),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("a",{id:"1",href:"https://www.sae.org/publications/technical-papers/content/2000-01-2809/"},"[1]"),"L. Fan, R.D.Reitz. Development of an Ignition and Combustion Model for Spark-Ignition Engines SAE Technical Paper 2000-01-2809, 2001. doi:10.4271/2000-01-2809 .",Object(i.b)("a",{id:"2",href:"https://www.sciencedirect.com/science/article/abs/pii/S0010218006000058"},"[2]"),"Z. Tan, R.D.Reitz. An ignition and combustion model based on the level-set method for spark ignition engine multidimensional modeling Combustion and Flame 145(1-2), 1:15, 2006. doi:10.1016/j.combustflame.2005.12.007 .")}p.isMDXComponent=!0}}]);