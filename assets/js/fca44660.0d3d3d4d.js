(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{102:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return r})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return p}));var n=i(3),a=i(7),o=(i(0),i(107)),l={id:"spray",title:"Spray modeling",description:"Basics of spray model settings."},r={unversionedId:"spray",id:"spray",isDocsHomePage:!1,title:"Spray modeling",description:"Basics of spray model settings.",source:"@site/docs/spray.md",slug:"/spray",permalink:"/fresco.knowledgebase/docs/spray",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/spray.md",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/fresco.knowledgebase/docs/"}},c=[{value:"Spray behavior: sub-model switches",id:"spray-behavior-sub-model-switches",children:[]},{value:"Rate of injection",id:"rate-of-injection",children:[{value:"Common-Rail Injector Model (<code>pulse = 4</code>)",id:"common-rail-injector-model-pulse--4",children:[]}]},{value:"Injected size distribution",id:"injected-size-distribution",children:[]},{value:"Collisions",id:"collisions",children:[]},{value:"Breakup",id:"breakup",children:[]},{value:"Vaporization",id:"vaporization",children:[]},{value:"References",id:"references",children:[]}],s={toc:c};function p(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"spray-behavior-sub-model-switches"},"Spray behavior: sub-model switches"),Object(o.b)("p",null,"Sub-model input is necessary to define the behavior of the ",Object(o.b)("inlineCode",{parentName:"p"},"sprayCloud")," object.\nWith the current legacy input format, model inputs are somewhat scattered across input files.\nModel selection is generally done via switches, either of the boolean type (",Object(o.b)("inlineCode",{parentName:"p"},"1=ON; 0=OFF"),"), or of the enumerator type (",Object(o.b)("inlineCode",{parentName:"p"},"0=OFF; 1=model1; 2=model2,..."),")."),Object(o.b)("p",null,"In the Matlab input structure, we have: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-{octave}"},"\n\ninput.spray.injection.pulse;         % Rate of injection model\ninput.spray.injection.injdist;       % Injection Size Distribution model\ninput.spray.collision.active;        % Collision model switch (on/off)\ninput.spray.dynamics.turb;           % Turbulent drop dispersion model switch (on/off)\ninput.spray.breakup.active;          % Breakup model switch (on/off)\ninput.spray.evaporation.active;      % Vaporization model switch (on/off)\n\n\n")),Object(o.b)("p",null,"In the ASCII input file structure, spray model behavior is set via these same switches as part of the ",Object(o.b)("inlineCode",{parentName:"p"},"itape5")," file: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:'language-title="itape5"'},"\n   pulse 3.000000         ! Rate of injection model                 \n injdist 0                ! Injected Size Distribution model                \n  kolide 1                ! Collision Model switch\n    turb 1.000000         ! Turbulence dispersion model switch                \n breakup 1.000000         ! Breakup model switch\n   evapp 0.000000         ! Vaporization model switch                \n\n")),Object(o.b)("p",null,"Before each simulation, it is good practice to check that all these model flags are properly set. For example, in the example above here, the vaporization model is turned ",Object(o.b)("em",{parentName:"p"},"off")," by the ",Object(o.b)("inlineCode",{parentName:"p"},"evapp = 0.0")," setting."),Object(o.b)("p",null,"Additional flags for each model then specifically define its behavior."),Object(o.b)("h2",{id:"rate-of-injection"},"Rate of injection"),Object(o.b)("p",null,"The rate of injection model (",Object(o.b)("inlineCode",{parentName:"p"},"ROI"),") applies to all ",Object(o.b)("inlineCode",{parentName:"p"},"type(injection)")," pulses being setup for fuel injection. This is a non-mandatory keyword, so, it does not matter whenever no injection pulses are present. "),Object(o.b)("p",null,"The following settings are possible: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pulse = 0"),": No ROI model used. No injection velocity table(s) should be specified."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pulse = 1"),": Constant (flat) rate of injection. With this injection model, no injection velocity table(s) should be specified, as FRESCO will assume a constant velocity for each pulse."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pulse = 3"),": ROI table. Injection mass flow rate is specified via a table, which should follow, in ",Object(o.b)("inlineCode",{parentName:"li"},"itape5"),", all injector specifications. With a fixed number of points (",Object(o.b)("inlineCode",{parentName:"li"},"numvel"),", same for all pulses). In the Matlab toolbox, that appears as the array",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"input.spray.injection.injections(i).velocity_table\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pulse = 4"),": use the Common-Rail Injector model of ",Object(o.b)("a",{parentName:"li",href:"#1"},"[1]"),"; no injection velocity table(s) should be specified.")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Warning! In FRESCO, an ROI table ",Object(o.b)("em",{parentName:"p"},"always")," represents a ",Object(o.b)("em",{parentName:"p"},"scaled")," flow rate of injection, with ",Object(o.b)("em",{parentName:"p"},"any")," scale factor.\nTotal injected mass and duration are defined by the pulse's ",Object(o.b)("inlineCode",{parentName:"p"},"tspmas")," and duration keywords (",Object(o.b)("inlineCode",{parentName:"p"},"t1inj/tdinj")," or ",Object(o.b)("inlineCode",{parentName:"p"},"ca1inj/cadinj"),").\nInstantaneous injection velocity is computed by FRESCO internally, based on the assumed or computed nozzle discharge coefficient."))),Object(o.b)("p",null,"On startup, FRESCO writes a textfile with the details for each injection pulse from each injector, incrementally named ",Object(o.b)("inlineCode",{parentName:"p"},"dat.injector_0_injectionPulse_1"),", containing: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Instantaneous velocity table (",Object(o.b)("inlineCode",{parentName:"li"},"[cm/s]"),");"),Object(o.b)("li",{parentName:"ul"},"Instantaneous mass flow rate (",Object(o.b)("inlineCode",{parentName:"li"},"[g/s]"),");"),Object(o.b)("li",{parentName:"ul"},"Integral injected mass (",Object(o.b)("inlineCode",{parentName:"li"},"[g]"),");"),Object(o.b)("li",{parentName:"ul"},"Integral number of injected computational parcels (per cylinder).")),Object(o.b)("p",null,"For example: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"! 0.3.19\n!             time           velinj             mdot      totInjected totNPinjected \n!                s             cm/s              g/s                g    #/cylinder \n   0.00000000E+000  0.00000000E+000  0.00000000E+000  0.00000000E+000             0 \n   1.70967742E-005  1.28505660E+004  2.45261578E-001  4.19318182E-006            20 \n   3.41935484E-005  2.57011319E+004  7.35784734E-001  1.67727273E-005            79 \n   5.12903226E-005  3.85516979E+004  1.22630789E+000  3.77386364E-005           178 \n   [...]\n")),Object(o.b)("h3",{id:"common-rail-injector-model-pulse--4"},"Common-Rail Injector Model (",Object(o.b)("inlineCode",{parentName:"h3"},"pulse = 4"),")"),Object(o.b)("p",null,"The Common-Rail injector model of ",Object(o.b)("a",{parentName:"p",href:"#1"},"[1]")," contains a default calibration for a high-pressure diesel common rail injection system.\nIt can be used to test the effects of different nozzle geometries, and injected amounts without worrying about having to define appropriate rates of injection. "),Object(o.b)("p",null,"This model responds to changes in nozzle geometry, and fuel physical properties; however, currently, rail pressure cannot be changed as an user input parameter, as it is assumed to be the default value ",Object(o.b)("inlineCode",{parentName:"p"},"prail = 1200 bar"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Docusaurus",src:i(158).default})),Object(o.b)("p",null,"The Common-Rail ROI model uses the following inputs: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"rail pressure"),", assumed fixed ",Object(o.b)("inlineCode",{parentName:"li"},"prail = 1200 bar"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"fuel liquid density"),", computed by the multicomponent fuel model at the injector's fuel composition (see species input in ",Object(o.b)("inlineCode",{parentName:"li"},"itape5"),", or keyword ",Object(o.b)("inlineCode",{parentName:"li"},"input.species.nspl")," and ",Object(o.b)("inlineCode",{parentName:"li"},"input.species.Yfuel")," to determine fuel composition);"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"injected fuel temperature"),", from ",Object(o.b)("inlineCode",{parentName:"li"},"itape5/tpi")," or ",Object(o.b)("inlineCode",{parentName:"li"},"input.spray.injection.tpi"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"nozzle hole diameter (geometric)"),", from the geometric area ",Object(o.b)("inlineCode",{parentName:"li"},"input.spray.injection.nozzle(i).anoz"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"nozzle discharge coefficient"),", from the nozzle setting."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"number of injected parcels"),", from the injection pulse's ",Object(o.b)("inlineCode",{parentName:"li"},"tnparc"),".")),Object(o.b)("p",null,"All other parameters will be automatically determined by the model, i.e., any user inputs overridden:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"pulse duration, `tdinj/cadinj';"),Object(o.b)("li",{parentName:"ul"},"ROI table, ",Object(o.b)("inlineCode",{parentName:"li"},"velinj"),".")),Object(o.b)("h2",{id:"injected-size-distribution"},"Injected size distribution"),Object(o.b)("p",null,"This simple submodel sets the injected parcel's initial size distribution. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"injdist = 0"),": blob model (recommended for diesel injection with KHRT breakup). All drops are injected at the nozzle's hole size, determined by the ",Object(o.b)("inlineCode",{parentName:"li"},"nozzle.smr")," keyword."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"injdist = 1"),": Inject a Rosin-Rammler distribution of drops, centered in ",Object(o.b)("inlineCode",{parentName:"li"},"nozzle.smr"),".")),Object(o.b)("h2",{id:"collisions"},"Collisions"),Object(o.b)("p",null,"Collision model settings describe drop behavior after drop-to-drop collisions. This is an important model that affects predicted liquid size distribution, and can significantly affect simulation time.\nModel settings are defined in the ",Object(o.b)("inlineCode",{parentName:"p"},"input.spray.collision")," structure. References for FRESCO collision modeling approaches are ",Object(o.b)("a",{parentName:"p",href:"#2"},"[2]"),", ",Object(o.b)("a",{parentName:"p",href:"#3"},"[3]"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"collision.model")," is a flag to define the ",Object(o.b)("strong",{parentName:"p"},"collision detection method"),". FRESCO defines three possible methods for collision detection: "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"COLIDE_ELIGIBLE_KDTREE  = 1")," (recommended) is ",Object(o.b)("a",{parentName:"li",href:"#3"},"Perini et al.'s")," kd-tree accelerated, parallelized ROI collision eligibility method.\t"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"COLIDE_ELIGIBLE_PARABOLA=-1")," is ",Object(o.b)("a",{parentName:"li",href:"#2"},"Perini et al.'s")," velocity-based ROI collision eligibility method. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"COLIDE_ELIGIBLE_SAMECELL= 0")," is O'Rourke same-cell collision detection algorithm: only drops which physically lie within the same computational cell are deemed eligible for collisions. This is a relatively computationally-efficient method, but it introduces severe mesh dependency. ")),Object(o.b)("p",{parentName:"li"},"The parabola ROI eligibility method is the most accurate one; the kd-tree accelerated method was reported to achieve up to one order of magnitude speed-up with respect to the parabola method, in parallel, with virtually no change in predicted spray structure."),Object(o.b)("p",{parentName:"li"},"Same-cell versus ROI-based collision elegibility detection looks like:\n",Object(o.b)("img",{alt:"Docusaurus",src:i(159).default}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"collision.ROI")," defines the region of influence method for the collision detection mode. "))),Object(o.b)("p",null,"In the ASCII textfile structure, the same collision settings are set in ",Object(o.b)("inlineCode",{parentName:"p"},"itapeSpray"),", as follows: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"1                   ! [Use ROI collision model]                               <=> spray.collision.model \n 0.000e+00          !   (fixed ROI radius value [cm] / dynamic if zero)       <=> spray.collision.ROI \n1                   ! [Use deterministic impact parameter]                    <=> spray.collision.impact_parameter \n1                   ! [Use extended collision outcomes]                       <=> spray.collision.extended_outcomes\n")),Object(o.b)("h2",{id:"breakup"},"Breakup"),Object(o.b)("h2",{id:"vaporization"},"Vaporization"),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("a",{id:"1",href:"https://journals.sagepub.com/doi/full/10.1177/0954407019898062"},"[1]"),"F. Perini, S. Busch, R.D.Reitz. A phenomenological rate of injection model for predicting fuel injection with application to mixture formation in light-duty engines. Proc ImechE Part D: J Automobile Engineering 234(7), 1826-1839, 2020. doi:10.1177/0954407019898062.",Object(o.b)("a",{id:"2",href:"http://www.sciencedirect.com/science/article/pii/S0301932215002487"},"[2]"),"F. Perini and R.D. Reitz. Improved atomization, collision and sub-grid scale momentum coupling models for transient vaporizing engine sprays. International Journal of Multiphase Flows 79(2016), 107-123. doi:10.1016/j.ijmultiphaseflow.2015.10.009.",Object(o.b)("a",{id:"3",href:"https://www.sae.org/publications/technical-papers/content/2021-01-0412/"},"[3]"),"F. Perini, S. Busch, R.D.Reitz. Parallel Load Balancing Strategies for Mesh-Independent Spray Vaporization and Collision Models. SAE Technical Paper 2021-01-0412, 2021, doi:10.4271/2021-01-0412. doi:10.1177/0954407019898062.")}p.isMDXComponent=!0},107:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return u}));var n=i(0),a=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(i),m=n,u=b["".concat(l,".").concat(m)]||b[m]||d[m]||o;return i?a.a.createElement(u,r(r({ref:t},s),{},{components:i})):a.a.createElement(u,r({ref:t},s))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,l=new Array(o);l[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var s=2;s<o;s++)l[s]=i[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},158:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/spray_ROI_sensitivity-def4b7d453a14f514d5444e6dbe80025.svg"},159:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/spray_ROI_vs_sameCell-d4beb5257b74900cd36aa72108ca0ada.png"}}]);