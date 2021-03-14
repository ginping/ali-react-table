(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{163:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?a.a.createElement(f,l(l({ref:n},s),{},{components:t})):a.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(163)),o={id:"single-select",title:"\u884c\u5355\u9009"},l={unversionedId:"pipeline/features/single-select",id:"pipeline/features/single-select",isDocsHomePage:!1,title:"\u884c\u5355\u9009",description:"\u793a\u4f8b",source:"@site/docs/pipeline/features/single-select.mdx",slug:"/pipeline/features/single-select",permalink:"/docs/pipeline/features/single-select",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/features/single-select.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u884c\u5206\u7ec4",permalink:"/docs/pipeline/features/row-grouping"},next:{title:"\u6392\u5e8f",permalink:"/docs/pipeline/features/sort"}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function \u884c\u5355\u9009() {\n  const dataSource = assets.biz.dataSource1\n  const columns = assets.biz.columns1\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource, columns })\n    .primaryKey('id')\n    .use(\n      features.singleSelect({\n        defaultValue: '1',\n        highlightRowWhenSelected: true,\n        checkboxPlacement: 'start',\n        clickArea: 'row',\n      }),\n    )\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(i.b)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u542f\u7528\u884c\u5355\u9009\u529f\u80fd\u4e4b\u524d\uff0cpipeline \u5fc5\u987b\u5df2\u7ecf\u8bbe\u7f6e\u4e86 primaryKey\u3002"),Object(i.b)("li",{parentName:"ul"},"\u884c\u5355\u9009\u4f9d\u8d56\u5355\u9009\u6846\u7ec4\u4ef6\uff0c\u4f7f\u7528 singleSelect \u4e4b\u524d\u9700\u8981\u901a\u8fc7 pipeline context \u8bbe\u7f6e components.Radio\u3002")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"pipeline.use(features.singleSelect(options))\n")),Object(i.b)("p",null,"options \u7ed3\u6784\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"export interface SingleSelectFeatureOptions {\n  /** \u662f\u5426\u9ad8\u4eae\u88ab\u9009\u4e2d\u7684\u884c */\n  highlightRowWhenSelected?: boolean\n\n  /** \u975e\u53d7\u63a7\u7528\u6cd5\uff1a\u9ed8\u8ba4\u9009\u4e2d\u7684\u503c */\n  defaultValue?: string\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u5f53\u524d\u9009\u4e2d\u7684\u503c */\n  value?: string\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u9009\u4e2d\u503c\u6539\u53d8\u56de\u8c03 */\n  onChange?: (next: string) => void\n\n  /** \u5224\u65ad\u4e00\u884c\u662f\u5426\u7981\u7528 */\n  isDisabled?(row: any, rowIndex: number): boolean\n\n  /** \u70b9\u51fb\u4e8b\u4ef6\u7684\u54cd\u5e94\u533a\u57df */\n  clickArea?: 'radio' | 'cell' | 'row'\n\n  /** \u5355\u9009\u6846\u6240\u5728\u5217\u7684 column \u914d\u7f6e\uff0c\u53ef\u6307\u5b9a width\uff0clock \u7b49\u5c5e\u6027 */\n  radioColumn?: Partial<ArtColumnStaticPart>\n\n  /** \u5355\u9009\u6846\u6240\u5728\u5217\u7684\u4f4d\u7f6e */\n  radioPlacement?: 'start' | 'end'\n\n  /** \u662f\u5426\u5bf9\u89e6\u53d1 onChange \u7684 click \u4e8b\u4ef6\u8c03\u7528 event.stopPropagation() */\n  stopClickEventPropagation?: boolean\n}\n")))}p.isMDXComponent=!0}}]);