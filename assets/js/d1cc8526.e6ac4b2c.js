(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),r=(n(0),n(110)),o={id:"flame-GEqn",title:"G-Equation model",description:"G-Equation flame propagation settings."},l={unversionedId:"flame-GEqn",id:"flame-GEqn",isDocsHomePage:!1,title:"G-Equation model",description:"G-Equation flame propagation settings.",source:"@site/docs/flame-GEqn.md",slug:"/flame-GEqn",permalink:"/fresco.knowledgebase/docs/flame-GEqn",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flame-GEqn.md",version:"current",sidebar:"docs",previous:{title:"Flame Speeds",permalink:"/fresco.knowledgebase/docs/flame-speeds"}},c=[{value:"Flame speed input",id:"flame-speed-input",children:[{value:"Diffusion term",id:"diffusion-term",children:[]},{value:"Dilution (EGR) fraction",id:"dilution-egr-fraction",children:[]},{value:"Laminar flame thickening",id:"laminar-flame-thickening",children:[]}]},{value:"References",id:"references",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"flame-speed-input"},"Flame speed input"),Object(r.b)("p",null,"The following inputs define the behavior of the G-Equation model: in ",Object(r.b)("inlineCode",{parentName:"p"},"itapeFlame"),", we have: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'diffuse             ENTHALPY            ! diffusion coefficient: "ENTHALPY" use Prt; "MASS" use Sct; "0.1234" use custom value\ncm4                 15.0                ! flame brush thickness timescale constant (cm4_uw, def=15.0)\nb1                  2.0                 ! turbulent flame thickness parameter (b1, def=2.00)\nb2                  1.78                ! turbulent flame thickness parameter (b2, def=1.78)\nb3                  1.0                 ! turbulent flame thickness parameter (b3, def=1.00)\nlFmult              1.0                 ! laminar flame thickness diffusivity multiplier (def=1.0)\nEGR                 -1.0                ! charge dilution method: <0=composition-esimated; [0:1] user-defined fixed mass fraction (def=-1.0)\n')),Object(r.b)("p",null,"and in the Matlab input structure, everything is in the ",Object(r.b)("inlineCode",{parentName:"p"},"flame.GEqn")," branch:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-{octave}"},"    diffModel: 'enthalpy';      % Diffusion term method\n        difft: 0;               % Fixed diffusivity coefficient  \n       lFmult: 1;               % Laminar flame thickness multiplier\n          EGR: -1;              % Unburnt dilution estimate method\n      G0_mode: 'none';          % Non-kernel G Initialization method\n       G0_val: 0;               % Non-kernel G Initialization value\n          cm4: 15;              % Laminar->Turbulent flame speed timescale \n            b: [2 1.7800 1];    % Turbulent flame speed formulation constants\n")),Object(r.b)("h3",{id:"diffusion-term"},"Diffusion term"),Object(r.b)("p",null,"Flame diffusion is proportional to the local flame curvature by means of the flame diffusivity term.\nThis can be critical in high-speed applications, because in reality, it's possible that thermal and mass diffusivities do not match (non-unity Lewis number),\nwhile the G-Equation model is a thin-layer assumption that cannot capture this behavior.\nFor example, if the thermal layer travels faster than the flame front into the unburnt side, the unburnt side estimates for the flame speed calculation may become unaccurate/invalid.\nFor the same reason, if the mass layer travels faster than the flame front into the unburnt, the unburnt side may end up containing combustion products; that would cause the laminar flame speed correlation to inaccurately predict a high degree of dilution, and slower flame propagation."),Object(r.b)("p",null,"For all these reasons, the user can choose between several options, through keywords ",Object(r.b)("inlineCode",{parentName:"p"},"diffModel")," and the real value ",Object(r.b)("inlineCode",{parentName:"p"},"difft"),".\nIn all cases, the flame diffusion term is computed as: "),Object(r.b)("p",null,"$$\n-D_t \\cdot \\kappa\n$$"),Object(r.b)("p",null,"with ",Object(r.b)("inlineCode",{parentName:"p"},"D_t [cm2/s]")," computed from the local value of the turbulent eddy viscosity."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ENTHALPY")," diffusion model: in this case, the flame diffuses at the speed of thermal diffusion, and $D_t = \\mu_t/(Pr_t \\ro) $. To do so, just specify ",Object(r.b)("inlineCode",{parentName:"li"},"diffuse ENTHALPY"),", no need to specify any real values; the turbulent Prandtl number is the same as being used by the current turbulence model for energy diffusion (",Object(r.b)("inlineCode",{parentName:"li"},"rpr = 1/Prt")," in ",Object(r.b)("inlineCode",{parentName:"li"},"itape5"),")."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MASS")," diffusion model: the flame diffuses at the speed of mass diffusion, and $D_t = \\mu_t/(Sc_t \\ro) $. To do so, just specify ",Object(r.b)("inlineCode",{parentName:"li"},"diffuse MASS"),", no need to specify any real values; the turbulent Schmidt number is the same as being used by the current turbulence model for mass diffusion (",Object(r.b)("inlineCode",{parentName:"li"},"rsc = 1/Sct")," in ",Object(r.b)("inlineCode",{parentName:"li"},"itape5"),")."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MIXINGL")," diffusion model: the Prandtl mixing layer diffusion model is employed. If so, the local diffusion coefficient is -sqrt(2",Object(r.b)("em",{parentName:"li"},"Sc_t/(c_mu"),"Cs)), where c_mu is from the active turbulence model, Sc_t=0.7 and Cs=2.0 are from Ewald and Peters."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"1.234")," User-defined diffusion model: the user can specify a ",Object(r.b)("em",{parentName:"li"},"different")," Prandtl number coefficient, by entering a real number: ",Object(r.b)("inlineCode",{parentName:"li"},"diffuse 0.123"),". In this case, the user-defined value replaces the Prandtl number, and ",Object(r.b)("inlineCode",{parentName:"li"},"D_t = \\mu/ (Pr_{user} \\ro)"),".")),Object(r.b)("h3",{id:"dilution-egr-fraction"},"Dilution (EGR) fraction"),Object(r.b)("p",null,"All laminar flame speed correlation depend on a local dilution fraction parameter, which quantifies the amount of EGR present in each cell. This critically affects how accurately the code can predict a laminar flame speed in complex mixture formation configurations.\nFor this reason, the user is left with the option to either let the code ",Object(r.b)("em",{parentName:"p"},"estimate")," a local EGR fraction based on the local composition, or ",Object(r.b)("em",{parentName:"p"},"force")," the code to assume EGR is constant in all cells. This is done via the ",Object(r.b)("inlineCode",{parentName:"p"},"EGR")," keyword.\n",Object(r.b)("inlineCode",{parentName:"p"},"EGR")," must be followed by a number: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EGR<0"),": the code will estimate an EGR fraction locally in each cell based on the charge composition, using the method by ",Object(r.b)("a",{parentName:"li",href:"#1"},"Liang"),"; "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EGR>=0, EGR<=1"),": the code will not estimate an EGR fraction; all flame speeds are computed using this user-defined EGR dilution value.")),Object(r.b)("p",null,"::: note\nIf the user is running a fully premixed case, the user is recommended to set a fixed user-based EGR value, because mass diffusion through the flame can impact the local EGR estimate on the unburnt side ahead of the front, increasing the measured dilution level, and lowering the local flame speed.\n:::"),Object(r.b)("h3",{id:"laminar-flame-thickening"},"Laminar flame thickening"),Object(r.b)("p",null,"The user can specify an artificial, constant flame thickening factor by specifying a non-unity value for the ",Object(r.b)("inlineCode",{parentName:"p"},"lFmult")," multiplier. This term scales the laminar flame thickness value everywhere in the code."),Object(r.b)("h2",{id:"references"},"References"),Object(r.b)("a",{id:"1"},"[1]"),"L. Liang. Multidimensional modeling of combustion and knock in spark-ignition engines with detailed chemical kinetics. Ph.D. Thesis, University of Wisconsin-Madison, 2006.")}u.isMDXComponent=!0},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,b=d["".concat(o,".").concat(f)]||d[f]||m[f]||r;return n?a.a.createElement(b,l(l({ref:t},s),{},{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);