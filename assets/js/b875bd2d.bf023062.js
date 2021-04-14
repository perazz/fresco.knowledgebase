(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||o;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spray_gasjet_model-5b5be0d548d805e8c6da9e1285cfccce.svg"},159:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spray_gasjet_model_equations-f345dced12b6a0321a6e2065dc60d26b.svg"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spray_gasjet_stokes_meaning-b0fec5d44dd97e488591526da4e4a520.svg"},161:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spray_gasjet_stokes-ebcd5d21ba9535e62dd103f736d040b8.svg"},162:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spray_gasjet_Kentr-f8e52f7a68496ab4dd2c21d4a4411868.svg"},163:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spray_gasjet_smoothing-748160f67e6944dd2aa377cb78b49cbb.svg"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(105)),r={id:"spray-gasjet",title:"Gas-jet model",description:"How to set up the gas-jet model for an injected spray."},s={unversionedId:"spray-gasjet",id:"spray-gasjet",isDocsHomePage:!1,title:"Gas-jet model",description:"How to set up the gas-jet model for an injected spray.",source:"@site/docs/spray-gasjet.md",slug:"/spray-gasjet",permalink:"/fresco.knowledgebase/docs/spray-gasjet",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/spray-gasjet.md",version:"current",sidebar:"docs",previous:{title:"Nozzle setup",permalink:"/fresco.knowledgebase/docs/spray-nozzles"}},l=[{value:"Model description",id:"model-description",children:[]},{value:"Model input",id:"model-input",children:[{value:"Model selection",id:"model-selection",children:[]},{value:"Stokes number",id:"stokes-number",children:[]},{value:"Entrainment constant",id:"entrainment-constant",children:[]},{value:"Near-nozzle velocity profile smoothing",id:"near-nozzle-velocity-profile-smoothing",children:[]}]},{value:"References",id:"references",children:[]}],c={toc:l};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"model-description"},"Model description"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Docusaurus",src:n(158).default})),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"type(gasjet)")," model introduces a sub-grid scale representation of the flow field following a spray injection event, to cope with the under-resolved flow field representation typically surrounding the near-nozzle region in engineering-size engine grids.\nTo achieve good field representation near the nozzle, a cell resolution of ",Object(o.b)("inlineCode",{parentName:"p"},"O(dnoz/10)")," would be needed, which is impractical. "),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"#1"},"turbulent round-jet model")," can predict the instantaneous flow velocity in the surroundings of the injection axis, at any times during and after each injection pulse: "),Object(o.b)("p",null,Object(o.b)("img",{alt:"Docusaurus",src:n(159).default})),Object(o.b)("p",null,"The equation represents an exponential response function, where: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"x")," is the downstream coordinate along the injection axis ",Object(o.b)("inlineCode",{parentName:"li"},"[cm]"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"r")," is the radial coordinate ",Object(o.b)("inlineCode",{parentName:"li"},"[cm]")," in the plane normal to the injection axis;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"uinj")," is the flow injection velocity at the nozzle ",Object(o.b)("inlineCode",{parentName:"li"},"[cm/s]"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"uaxis")," represents model-predicted velocity along the injection axis ",Object(o.b)("inlineCode",{parentName:"li"},"[cm/s]"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"usgs")," is the model-predicted sgs velocity."),Object(o.b)("li",{parentName:"ul"},"the Stokes number ",Object(o.b)("inlineCode",{parentName:"li"},"St")," rules over the response time, i.e., how fast the flow field responds to changes in the injection velocity"),Object(o.b)("li",{parentName:"ul"},"the entrainment constant ",Object(o.b)("inlineCode",{parentName:"li"},"Kentr")," defines how much the jet will spread out radially depending on turbulent entrainment")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Gas-jet model in FRESCO is automatically applied for each injection pulse, starting from SOI, and until the model is predicting a residual flow velocity that is at least ",Object(o.b)("inlineCode",{parentName:"p"},"0.1%")," of that pulse's peak injection velocity."))),Object(o.b)("h2",{id:"model-input"},"Model input"),Object(o.b)("p",null,"Gas-jet model settings can be found in the input structure at: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-{octave}"},"input.spray.dynamics.gasjet\n")),Object(o.b)("p",null,"which contains the following settings: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"spray.dynamics.gasjet.model           = 2;\nspray.dynamics.gasjet.stokes          = 0.15;\nspray.dynamics.gasjet.smooth          = 1;\nspray.dynamics.gasjet.smooth_min      = 0.90;\nspray.dynamics.gasjet.smooth_max      = 0.95;\nspray.dynamics.gasjet.Kentr           = 0.85;\n")),Object(o.b)("h3",{id:"model-selection"},"Model selection"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"gasjet.model")," flag has three options: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"GASJET_MODEL_NONE = 0")," to turn the gas-jet model OFF. any other flags will not be important."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"GASJET_MODEL_STEADY = 1")," to turn on the steady version of the gas-jet model. This will assume that input to the model's response function is a ",Object(o.b)("em",{parentName:"li"},"constant")," injection velocity, equal to the pulse's average velocity;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"GASJET_MODEL_UNSTEADY = 2")," (recommended) to turn on the unsteady-version. This will use the pulse's actual time-varying injection velocity profile, and will compute the time integral using trapezoidal rule. It reduces to the steady version whenever the injection velocity is constant; hence, it is recommended for all cases.")),Object(o.b)("h3",{id:"stokes-number"},"Stokes number"),Object(o.b)("p",null,"The Stokes number ",Object(o.b)("inlineCode",{parentName:"p"},"gasjet.stokes")," represents how fast the liquid particles interact and transfer momentum to the gaseous phase.\nIn fact, it is assumed to be a ratio between the a normalized turbulent eddy time scale and the particle's response time: "),Object(o.b)("p",null,Object(o.b)("img",{alt:"Docusaurus",src:n(160).default})),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"#1"},"Abani and Reitz")," suggest ",Object(o.b)("inlineCode",{parentName:"p"},"St = 3")," for the steady case. ",Object(o.b)("a",{parentName:"p",href:"#2"},"Perini and Reitz")," found that the Stokes number strongly affects the local responsiveness of the model prediction, also affecting peak velocity:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Docusaurus",src:n(161).default})),Object(o.b)("p",null,"A value of ",Object(o.b)("inlineCode",{parentName:"p"},"St = 0.15")," is recommended in FRESCO to match ECN Spray A data. Even smaller values were observed to be appropriate, in particular to capture the initial flow field transient after the start of injection."),Object(o.b)("h3",{id:"entrainment-constant"},"Entrainment constant"),Object(o.b)("p",null,"The entrainment constant ",Object(o.b)("inlineCode",{parentName:"p"},"gasjet.Kentr")," determines the spread of the gaseous jet. With more entrainment (",Object(o.b)("inlineCode",{parentName:"p"},"Kentr")," up), we get lower peak velocity along the injection axis, and more radial spread. Recommended values are: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gasjet.Kentr = 0.70")," according to ",Object(o.b)("a",{parentName:"li",href:"#1"},"Abani and Reitz"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gasjet.Kentr = 0.85")," according to ",Object(o.b)("a",{parentName:"li",href:"#2"},"Perini and Reitz"),", as the result of a genetic optimization of spray model constants against ECN Spray A data.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Docusaurus",src:n(162).default})," "),Object(o.b)("h3",{id:"near-nozzle-velocity-profile-smoothing"},"Near-nozzle velocity profile smoothing"),Object(o.b)("p",null,"It is recommended to always use a numerical smoothing of the model-predicted velocity profile near the injector.\nThe following settings determine what happens between the nozzle (x=0) and the start-of-velocity-decay location (x=x0).\nWithin this range, the model just predicts ",Object(o.b)("inlineCode",{parentName:"p"},"u(x<=x0)=uinj"),", but that introduces a discontinuity at ",Object(o.b)("inlineCode",{parentName:"p"},"x0")," that can destabilize the breakup models.\nSo, the smoothing function just bends this profile slightly, to make it continuous. It is recommended to use the default values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gasjet.smooth = 1")," model switch: ",Object(o.b)("inlineCode",{parentName:"li"},"1=ON")," (recommended); ",Object(o.b)("inlineCode",{parentName:"li"},"0=OFF"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gasjet.smooth_min"),": fraction of usgs applied at the nozzle (x=0);"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gasjet.smooth_max"),": fraction of usgs applied at the model's start-of-velocity-decay location(x=x0);")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Docusaurus",src:n(163).default})," "),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("a",{id:"1",href:"https://aip.scitation.org/doi/abs/10.1063/1.2821910"},"[1] "),"N. Abani and R.D. Reitz. Turbulent Round Jets and vortex Motion Physics of Fluids 19m 125102, 2007. doi:10.1063/1.2821910 .",Object(o.b)("a",{id:"2",href:"http://www.sciencedirect.com/science/article/pii/S0301932215002487"},"[2]"),"F. Perini and R.D. Reitz. Improved atomization, collision and sub-grid scale momentum coupling models for transient vaporizing engine sprays. International Journal of Multiphase Flows 79(2016), 107-123. doi:10.1016/j.ijmultiphaseflow.2015.10.009.")}d.isMDXComponent=!0}}]);