(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(163)),o={id:"basic-usage",title:"\u57fa\u672c\u7528\u6cd5"},i={unversionedId:"table/basic-usage",id:"table/basic-usage",isDocsHomePage:!1,title:"\u57fa\u672c\u7528\u6cd5",description:"`` \u662f ali-react-table \u4e2d\u6700\u4e3b\u8981\u7684\u8868\u683c\u7ec4\u4ef6\uff0c\u5176\u63d0\u4f9b\u4e86\u57fa\u672c\u7684\u8868\u683c\u6e32\u67d3\u80fd\u529b\u3002BaseTable \u81ea\u5e26\u4e86\u4e00\u4e9b\u975e\u5e38\u5b9e\u7528\u7684\u7279\u6027\uff08\u8868\u5934\u5438\u9876\u3001\u52a0\u8f7d\u52a8\u753b\u3001\u9501\u5217\u3001\u5355\u5143\u683c\u5408\u5e76\u3001\u9875\u811a\u7b49\uff09\uff0c\u5e76\u81ea\u5e26\u865a\u62df\u6eda\u52a8\u4ee5\u652f\u6301\u5927\u6570\u636e\u91cf\u7684\u6e32\u67d3\u3002",source:"@site/docs/table/basic-usage.mdx",slug:"/table/basic-usage",permalink:"/docs/table/basic-usage",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/table/basic-usage.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/changelog"},next:{title:"\u8868\u683c\u793a\u4f8b",permalink:"/docs/table/examples"}},l=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",children:[]},{value:"\u66f4\u591a\u7528\u6cd5",id:"\u66f4\u591a\u7528\u6cd5",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"<BaseTable />")," \u662f ali-react-table \u4e2d\u6700\u4e3b\u8981\u7684\u8868\u683c\u7ec4\u4ef6\uff0c\u5176\u63d0\u4f9b\u4e86\u57fa\u672c\u7684\u8868\u683c\u6e32\u67d3\u80fd\u529b\u3002BaseTable \u81ea\u5e26\u4e86\u4e00\u4e9b\u975e\u5e38\u5b9e\u7528\u7684\u7279\u6027\uff08\u8868\u5934\u5438\u9876\u3001\u52a0\u8f7d\u52a8\u753b\u3001\u9501\u5217\u3001\u5355\u5143\u683c\u5408\u5e76\u3001\u9875\u811a\u7b49\uff09\uff0c\u5e76\u81ea\u5e26\u865a\u62df\u6eda\u52a8\u4ee5\u652f\u6301\u5927\u6570\u636e\u91cf\u7684\u6e32\u67d3\u3002"),Object(c.b)("p",null,"BaseTable \u53ea\u63d0\u4f9b\u57fa\u672c\u7684\u8868\u683c\u6e32\u67d3\u80fd\u529b\uff0c\u4e0d\u9700\u8981\u4f9d\u8d56\u7279\u5b9a\u7ec4\u4ef6\u5e93\uff0c\u6545\u5176\u6253\u5305\u4f53\u79ef\u5f88\u5c0f\uff0c\u4f46\u8fd9\u4e5f\u610f\u5473\u7740\u4e00\u4e9b\u5e38\u89c1\u7684\u8868\u683c\u529f\u80fd\uff08\u6392\u5e8f\u3001\u8fc7\u6ee4\u3001\u884c\u9009\u62e9\u3001\u6811\u72b6\u6a21\u5f0f\u7b49\uff09\u9700\u8981",Object(c.b)("a",{parentName:"p",href:"../pipeline"},"\u5728\u4e0a\u5c42\u8fdb\u884c\u62d3\u5c55"),"."),Object(c.b)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),Object(c.b)("p",null,"\u57fa\u672c\u7684 Table \u5305\u542b\u884c\u548c\u5217\uff0c\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"columns")," \u5c5e\u6027\u6765\u5b9a\u4e49\u5217\u7684\u4fe1\u606f\uff0c\u4f7f\u7528\u4f20\u5165\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"dataSource")," \u5c5e\u6027\u6570\u636e\u6765\u521b\u5efa\u884c\uff0c\u8fd9\u4e24\u4e2a\u5c5e\u6027\u4e5f\u662f\u8868\u683c\u7ec4\u4ef6\u5fc5\u4f20\u7684 props\uff08\u5176\u4ed6\u6240\u6709 props \u90fd\u662f\u53ef\u9009\u7684\uff09\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"dataSource")," \u63d0\u4f9b\u8868\u683c\u6570\u636e\uff0c\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u9879\u5bf9\u5e94\u8868\u683c\u7684\u4e00\u884c"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"columns")," \u6307\u5b9a\u8868\u683c\u4e2d\u5305\u542b\u54ea\u4e9b\u5217\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"column.code")," \u4e0e ",Object(c.b)("inlineCode",{parentName:"li"},"dataSource")," \u4e2d\u7684\u6570\u636e\u5b57\u6bb5\u5bf9\u5e94")),Object(c.b)("p",null,"\u4ee5\u4e0b\u662f BaseTable \u7684\u57fa\u672c\u7528\u6cd5\u793a\u4f8b\uff1a"),Object(c.b)("p",null,"\u7ec4\u4ef6\u5f15\u5165\uff1a ",Object(c.b)("inlineCode",{parentName:"p"},"import { BaseTable } from 'ali-react-table'")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live open",live:!0,open:!0},"function \u57fa\u672c\u7528\u6cd5() {\n  const dataSource = [\n    { prov: '\u6e56\u5317\u7701', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },\n    { prov: '\u5e7f\u4e1c\u7701', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },\n    { prov: '\u6cb3\u5357\u7701', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },\n    { prov: '\u6d59\u6c5f\u7701', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },\n    { prov: '\u6e56\u5357\u7701', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },\n  ]\n\n  const columns = [\n    { code: 'prov', name: '\u7701\u4efd', width: 150 },\n    { code: 'confirmed', name: '\u786e\u8bca', width: 100, align: 'right' },\n    { code: 'cured', name: '\u6cbb\u6108', width: 100, align: 'right' },\n    { code: 'dead', name: '\u6b7b\u4ea1', width: 100, align: 'right' },\n    { code: 't', name: '\u6700\u540e\u66f4\u65b0\u65f6\u95f4', width: 180 },\n  ]\n  return <BaseTable dataSource={dataSource} columns={columns} />\n}\n")),Object(c.b)("h2",{id:"\u66f4\u591a\u7528\u6cd5"},"\u66f4\u591a\u7528\u6cd5"),Object(c.b)("p",null,"\u4e0a\u8ff0\u7684\u4f8b\u5b50\u5c55\u793a\u4e86 BaseTable \u7684\u57fa\u672c\u7528\u6cd5\uff0c\u66f4\u591a\u7528\u6cd5\u53ef\u53c2\u8003 ",Object(c.b)("a",{parentName:"p",href:"examples"},"\u8868\u683c\u793a\u4f8b"),"\uff0c\u4e5f\u63a8\u8350\u5728 ",Object(c.b)("a",{parentName:"p",href:"/structure"},"\u8fd9\u4e2a\u9875\u9762")," \u4e2d\u4e86\u89e3\u8868\u683c\u7684\u5404\u90e8\u5206\u7684\u7ed3\u6784\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"BaseTable")," \u7684\u8be6\u7ec6 API \u8be6\u89c1 ",Object(c.b)("a",{parentName:"p",href:"api"},"BaseTable API")))}p.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,m=u["".concat(o,".").concat(s)]||u[s]||d[s]||c;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);