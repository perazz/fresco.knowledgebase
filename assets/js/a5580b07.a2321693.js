(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),p=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,u=d["".concat(o,".").concat(b)]||d[b]||m[b]||i;return n?l.a.createElement(u,r(r({ref:t},c),{},{components:n})):l.a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),i=(n(0),n(110)),o={id:"flame-speeds",title:"Flame Speeds",description:"Laminar flame speed selection."},r={unversionedId:"flame-speeds",id:"flame-speeds",isDocsHomePage:!1,title:"Flame Speeds",description:"Laminar flame speed selection.",source:"@site/docs/flame-speeds.md",slug:"/flame-speeds",permalink:"/fresco.knowledgebase/docs/flame-speeds",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flame-speeds.md",version:"current",sidebar:"docs",previous:{title:"Discrete Particle Ignition Kernel (DPIK)",permalink:"/fresco.knowledgebase/docs/flame-dpik"}},s=[{value:"Flame speed input",id:"flame-speed-input",children:[{value:"Distaso flame speeds",id:"distaso-flame-speeds",children:[]},{value:"Metghalchi flame speeds",id:"metghalchi-flame-speeds",children:[]},{value:"Constant flame speed",id:"constant-flame-speed",children:[]},{value:"Hydrogen flame speed",id:"hydrogen-flame-speed",children:[]}]},{value:"Multicomponent flame speed model",id:"multicomponent-flame-speed-model",children:[{value:"Matlab flame speed initialization",id:"matlab-flame-speed-initialization",children:[]}]},{value:"References",id:"references",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"flame-speed-input"},"Flame speed input"),Object(i.b)("p",null,"The user can currently only choose between a selection of pre-tested laminar flame speed correlations.\nA laminar flame speed is specified in ",Object(i.b)("inlineCode",{parentName:"p"},"itapeFlame")," with the following syntax: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"speed [model] [choice] [(attachedSpecies)]\n")),Object(i.b)("p",null,"where: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"model")," defines the laminar flame speed model, which can be: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DISTASO")," to use the predefined correlations in ",Object(i.b)("a",{parentName:"li",href:"#1"},"Distaso and Reitz")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"METGHALCHI")," to use the predefined correlations in ",Object(i.b)("a",{parentName:"li",href:"#2"},"Metghalchi and Keck")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CONSTANT")," to specify a constant flame speed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HYDROGEN")," to enable the Hydrogen flame speed model.")))),Object(i.b)("h3",{id:"distaso-flame-speeds"},"Distaso flame speeds"),Object(i.b)("p",null,"Distaso flame speeds are provided for choices: ",Object(i.b)("inlineCode",{parentName:"p"},"PROPANE"),", ",Object(i.b)("inlineCode",{parentName:"p"},"METHANE"),", ",Object(i.b)("inlineCode",{parentName:"p"},"GASOLINE"),". For example: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"speed DISTASO GASOLINE\n")),Object(i.b)("p",null,"will propagate the flame using the gasoline formulation from Distaso et al.\nDistaso flame speed formulations are somewhat recommended for lean and dilute mixtures, because they feature an exponential decay based formulation for the dilution factor which works better at high dilution levels."),Object(i.b)("h3",{id:"metghalchi-flame-speeds"},"Metghalchi flame speeds"),Object(i.b)("p",null,"Metghalchi flame speeds are provided for choices: ",Object(i.b)("inlineCode",{parentName:"p"},"PROPANE"),", ",Object(i.b)("inlineCode",{parentName:"p"},"METHANE"),", ",Object(i.b)("inlineCode",{parentName:"p"},"GASOLINE"),". For example: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"speed METGHALCHI GASOLINE\n")),Object(i.b)("p",null,"will propagate the flame using the gasoline formulation from Metghalchi and Keck."),Object(i.b)("h3",{id:"constant-flame-speed"},"Constant flame speed"),Object(i.b)("p",null,"A constant flame speed is sometimes needed for testing purposes. In case this is selected, the model ",Object(i.b)("inlineCode",{parentName:"p"},"choice")," has to be a number, equal to the desired laminar flame speed value in ",Object(i.b)("inlineCode",{parentName:"p"},"[cm/s]"),". For example,"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"speed CONSTANT 60.0\n")),Object(i.b)("p",null,"will achieve a constant ",Object(i.b)("inlineCode",{parentName:"p"},"60cm/s")," flame speed. Note that this formulation has no dependency on pressure, temperature, equivalence ratio, dilution."),Object(i.b)("h3",{id:"hydrogen-flame-speed"},"Hydrogen flame speed"),Object(i.b)("p",null,"Laminar hydrogen flames only exist at low pressure, temperature and equivalence ratios. FRESCO's hydrogen flame speed model contains a complex fit of parameters to achieve a good representation of hydrogen burning speeds at both ambient and engine-like conditions.\nTo enable it:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"speed HYDROGEN \n")),Object(i.b)("p",null,"will be enough. As an additional option, the user can request to enable Pitsch' cellular enhancement option, which increases the local flame speed value by consideration of the usual cellular structures forming on the H2 flame front.\nIn order to turn this on, keyword ",Object(i.b)("inlineCode",{parentName:"p"},"ENHANCED")," should be specified, like: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"speed HYDROGEN ENHANCED\n")),Object(i.b)("h2",{id:"multicomponent-flame-speed-model"},"Multicomponent flame speed model"),Object(i.b)("p",null,"FRESCO has a unique multicomponent laminar flame speed model, which allows multiple and multi-component fuels to be smoothly handled.\nWhen the user wants multiple components:\n1) several ",Object(i.b)("inlineCode",{parentName:"p"},"speed")," inputs should be provided, one per component\n2) each speed model should be ",Object(i.b)("em",{parentName:"p"},"attached")," to one gas-phase species, that FRESCO will use to compute the multi-component mixture composition. This additional input, which must apply to all flame speeds now requested, is specified by adding the attached species name between round brackets."),Object(i.b)("p",null,"The following example shows how one can run a dual-fuel simulation with a PRF fuel surrogate and methane with the multi-component laminar speed model: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"speed DISTASO GASOLINE (ic8h18)\nspeed METGHALCHI PROPANE (nc7h16)\nspeed DISTASO METHANE (ch4)\n")),Object(i.b)("p",null,"The multi-component model computes a local laminar flame speed that responds to changes in the mixture composition, as follows: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"One laminar speed per component is computed, all using the same equivalence ratio and thermodynamic state, equal to the cell bulk state;"),Object(i.b)("li",{parentName:"ul"},"Multi-component mixing of these speeds is performed based on each component's amount, using Le Chatelier's principle, to produce a unique final value.")),Object(i.b)("h3",{id:"matlab-flame-speed-initialization"},"Matlab flame speed initialization"),Object(i.b)("p",null,"In the Matlab structure, flame speed initialization is still based on a model/choice flag, done via a call to the routine ",Object(i.b)("inlineCode",{parentName:"p"},"fresco_flame_speed_get"),". For example: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-{octave}"},"flame.speed = fresco_flame_speed_get('METGHALCHI','PROPANE');\n")),Object(i.b)("p",null,"The optional attached species name can be specified as: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-{octave}"},"flame.speed.spname = 'mySpeciesName';\n")),Object(i.b)("p",null,"Whenever the multicomponent model is required, ",Object(i.b)("inlineCode",{parentName:"p"},"flame.speed")," will have to be an array of speed structures instead of a scalar."),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("a",{id:"1",href:"https://journals.sagepub.com/doi/abs/10.1177/1468087417720018"},"[1]"),"R. Amirante, E. Distaso, P. Tamburrano, R.D. Reitz Laminar flame speed correlations for methane, ethane, propane and their mixtures, and natural gas and gasoline for spark-ignition engine simulations. International Journal of Engine Research 18(9), 951-970, 2017. doi:10.1177/1468087417720018.",Object(i.b)("a",{id:"2",href:"https://journals.sagepub.com/doi/abs/10.1177/1468087417720018"},"[2]"),"M. Metghalchi, J.C. Keck Laminar burning velocity of propane-air mixtures at high temperature and pressure. Combustion and Flame 38, 143-154, 1980. doi:10.1177/1468087417720018.")}p.isMDXComponent=!0}}]);