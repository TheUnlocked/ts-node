(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[925],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,k=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},935:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={title:"Make it fast"},c={unversionedId:"fast",id:"fast",isDocsHomePage:!1,title:"Make it fast",description:"These tricks will make ts-node faster.",source:"@site/docs/fast.md",sourceDirName:".",slug:"/fast",permalink:"/ts-node/docs/fast",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/fast.md",version:"current",frontMatter:{title:"Make it fast"},sidebar:"primarySidebar",previous:{title:"Troubleshooting",permalink:"/ts-node/docs/troubleshooting"},next:{title:"How It Works",permalink:"/ts-node/docs/how-it-works"}},l=[{value:"Skip typechecking",id:"skip-typechecking",children:[]},{value:"With typechecking",id:"with-typechecking",children:[]}],p={toc:l};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These tricks will make ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," faster."),(0,a.kt)("h2",{id:"skip-typechecking"},"Skip typechecking"),(0,a.kt)("p",null,"It is often better to use ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc --noEmit")," to typecheck once before your tests run or as a lint step. In these cases, ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," can skip typechecking."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("a",{parentName:"li",href:"configuration#options"},(0,a.kt)("inlineCode",{parentName:"a"},"transpileOnly"))," to skip typechecking"),(0,a.kt)("li",{parentName:"ul"},"Use our ",(0,a.kt)("a",{parentName:"li",href:"transpilers#bundled-swc-integration"},(0,a.kt)("inlineCode",{parentName:"a"},"swc")," integration"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is by far the fastest option")))),(0,a.kt)("h2",{id:"with-typechecking"},"With typechecking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Avoid dynamic ",(0,a.kt)("inlineCode",{parentName:"li"},"require()")," which may trigger repeated typechecking; prefer ",(0,a.kt)("inlineCode",{parentName:"li"},"import")),(0,a.kt)("li",{parentName:"ul"},"Try with and without ",(0,a.kt)("inlineCode",{parentName:"li"},"--files"),"; one may be faster depending on your project"),(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("inlineCode",{parentName:"li"},"tsc --showConfig"),"; make sure all executed files are included"),(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/tsconfig#skipLibCheck"},(0,a.kt)("inlineCode",{parentName:"a"},"skipLibCheck"))),(0,a.kt)("li",{parentName:"ul"},"Set a ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/tsconfig#types"},(0,a.kt)("inlineCode",{parentName:"a"},"types"))," array to avoid loading unnecessary ",(0,a.kt)("inlineCode",{parentName:"li"},"@types"))))}s.isMDXComponent=!0}}]);