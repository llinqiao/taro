(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[13323],{22122:function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return i}})},19756:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}n.d(t,{Z:function(){return i}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=d(n),m=l,u=h["".concat(s,".").concat(m)]||h[m]||c[m]||a;return n?i.createElement(u,r(r({ref:t},p),{},{components:n})):i.createElement(u,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74901:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var i=n(22122),l=n(19756),a=(n(67294),n(3905)),r={title:"Virtual List"},o={unversionedId:"virtual-list",id:"virtual-list",isDocsHomePage:!1,title:"Virtual List",description:"In the Taro application, normal list rendering follows the following logic.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/virtual-list.md",sourceDirName:".",slug:"/virtual-list",permalink:"/taro/en/docs/next/virtual-list",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/virtual-list.md",version:"current",frontMatter:{title:"Virtual List"},sidebar:"docs",previous:{title:"Prerender",permalink:"/taro/en/docs/next/prerender"},next:{title:"\u7f16\u8bd1\u4f18\u5316",permalink:"/taro/en/docs/next/compile-optimized"}},s=[{value:"React/Nerv",id:"reactnerv",children:[{value:"Infinite Scroll",id:"infinite-scroll",children:[]},{value:"props",id:"props",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Vue",id:"vue",children:[{value:"infinite scrolling",id:"infinite-scrolling",children:[]},{value:"props",id:"props-1",children:[]}]},{value:"Related Questions",id:"related-questions",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the Taro application, normal list rendering follows the following logic."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate or load data from a remote"),(0,a.kt)("li",{parentName:"ol"},"add the data to the framework's responsive data"),(0,a.kt)("li",{parentName:"ol"},"the framework tries to update the view in full depending on the data using the diff algorithm or other mechanism"),(0,a.kt)("li",{parentName:"ol"},"the Taro runtime captures the framework's update request to update the view")),(0,a.kt)("p",null,"If we follow this logic, we may have serious performance issues when the amount of data we generate or load in the first step is very large, causing the view to be unresponsive to operations for some time. To solve this problem, we can use another approach: instead of rendering the view generated with the full amount of data, we can render only the view in the ",(0,a.kt)("strong",{parentName:"p"},"current visible viewport"),", and render the view in the non-visible area after the user scrolls to the visible area."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img20.360buyimg.com/ling/jfs/t1/125645/6/13305/50138/5f6aaaa4E2f20eba7/d70a2d2da2d68de1.jpg",alt:"virtual-list"})),(0,a.kt)("h2",{id:"reactnerv"},"React/Nerv"),(0,a.kt)("p",null,"With React/Nerv we can introduce the VirtualList component directly from ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/components/virtual-list"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import VirtualList from '@tarojs/components/virtual-list'\n")),(0,a.kt)("p",null,"The simplest long list component would look like this, with all 5 properties of ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualList")," as required fields."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function buildData (offset = 0) {\n  return Array(100).fill(0).map((_, i) => i + offset);\n}\n\nconst Row = React.memo(({ id, index, style, data }) => {\n  return (\n    <View id={id} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>\n      Row {index} : {data[index]}\n    </View>\n  );\n})\n\nexport default class Index extends Component {\n  state = {\n    data: buildData(0),\n  }\n\n  render() {\n    const { data } = this.state\n    const dataLen = data.length\n    return (\n      <VirtualList\n        height={500} /* list height */\n        width='100%' /* list width */\n        itemData={data} /* rendering data for the list */\n        itemCount={dataLen} /*  length of rendering list */\n        itemSize={100} /* height of list item  */\n      >\n        {Row} /* List single component, where only one component can be passed in */\n      </VirtualList>\n    );\n  }\n}\n")),(0,a.kt)("h3",{id:"infinite-scroll"},"Infinite Scroll"),(0,a.kt)("p",null,"Implementing infinite scrolling is also very simple, we just need to append data to the end of the list when it scrolls to the bottom."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const Row = React.memo(({ id, index, style, data }) => {\n  return (\n    <View id={id} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>\n      Row {index} : {data[index]}\n    </View>\n  );\n})\n\n\nfunction buildData (offset = 0) {\n  return Array(100).fill(0).map((_, i) => i + offset);\n}\n\nexport default class Index extends Component {\n  state = {\n    data: buildData(0),\n  }\n\n  loading = false\n\n  listReachBottom() {\n    Taro.showLoading()\n    // If loading is related to the view, then it should be in `this.state`\n    // We are using a synchronous API to call loading here, so we don't need\n    this.loading = true\n    setTimeout(() => {\n      const { data } = this.state\n      this.setState({\n        data: data.concat(buildData(data.length))\n      }, () => {\n        this.loading = false;\n        Taro.hideLoading()\n      })\n    }, 1000)\n  }\n\n  render() {\n    const { data } = this.state\n    const dataLen = data.length\n    const itemSize = 100\n    return (\n      <VirtualList\n        className='List'\n        height={500}\n        itemData={data}\n        itemCount={dataLen}\n        itemSize={itemSize}\n        width='100%'\n        onScroll={({ scrollDirection, scrollOffset }) => {\n          if (\n            // \u907f\u514d\u91cd\u590d\u52a0\u8f7d\u6570\u636e\n            !this.loading &&\n            // \u53ea\u6709\u5f80\u524d\u6eda\u52a8\u6211\u4eec\u624d\u89e6\u53d1\n            scrollDirection === 'forward' &&\n            // 5 = (\u5217\u8868\u9ad8\u5ea6 / \u5355\u9879\u5217\u8868\u9ad8\u5ea6)\n            // 100 = \u6eda\u52a8\u63d0\u524d\u52a0\u8f7d\u91cf\uff0c\u53ef\u6839\u636e\u6837\u5f0f\u60c5\u51b5\u8c03\u6574\n            scrollOffset > ((dataLen - 5) * itemSize + 100)\n          ) {\n            this.listReachBottom()\n          }\n        }}\n      >\n        {Row}\n      </VirtualList>\n    );\n  }\n}\n\n")),(0,a.kt)("h3",{id:"props"},"props"),(0,a.kt)("h4",{id:"children-reactcomponent"},(0,a.kt)("inlineCode",{parentName:"h4"},"children: ReactComponent")),(0,a.kt)("p",null,"The single component of the list to be rendered. The component's ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," has 4 properties."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"style"),": the style of the single item, the style must be passed into the component's ",(0,a.kt)("inlineCode",{parentName:"li"},"style")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data"),": the data rendered by the component, same as the virtual list ",(0,a.kt)("inlineCode",{parentName:"li"},"itemData")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"index"),": the index of the data rendered by the component"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isScrolling"),": whether the component is scrolling, returns a boolean value when ",(0,a.kt)("inlineCode",{parentName:"li"},"useIsScrolling")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", otherwise returns ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"PureComponent",(0,a.kt)("inlineCode",{parentName:"p"},"or use"),"shouldComponentUpdate()` to optimize this component and avoid unnecessary rendering."),(0,a.kt)("h4",{id:"itemcount-number"},(0,a.kt)("inlineCode",{parentName:"h4"},"itemCount: number")),(0,a.kt)("p",null,"The length of the list. Required field."),(0,a.kt)("h4",{id:"itemdata-arrayany"},(0,a.kt)("inlineCode",{parentName:"h4"},"itemData: Array<any>")),(0,a.kt)("p",null,"Render data. Required field."),(0,a.kt)("h4",{id:"itemsize-number"},(0,a.kt)("inlineCode",{parentName:"h4"},"itemSize: number")),(0,a.kt)("p",null,"The size of the list item, height when scrolling vertically, width when scrolling horizontally. Required field."),(0,a.kt)("h4",{id:"height-number--string"},(0,a.kt)("inlineCode",{parentName:"h4"},"height: number | string")),(0,a.kt)("p",null,"The height of the list. Required when the scroll direction is vertical."),(0,a.kt)("h4",{id:"width-number--string"},(0,a.kt)("inlineCode",{parentName:"h4"},"width: number | string")),(0,a.kt)("p",null,"The width of the list. Required when the scroll direction is horizontal."),(0,a.kt)("h4",{id:"classname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"className: string")),(0,a.kt)("p",null,"Root Component CSS Class"),(0,a.kt)("h4",{id:"style-style"},(0,a.kt)("inlineCode",{parentName:"h4"},"style: Style")),(0,a.kt)("p",null,"Style of the root component"),(0,a.kt)("h4",{id:"initialscrolloffset-number--0"},(0,a.kt)("inlineCode",{parentName:"h4"},"initialScrollOffset: number = 0")),(0,a.kt)("p",null,"The initial scroll offset value, horizontal scrolling affects ",(0,a.kt)("inlineCode",{parentName:"p"},"scrollLeft"),", vertical scrolling affects ",(0,a.kt)("inlineCode",{parentName:"p"},"scrollTop"),"."),(0,a.kt)("h4",{id:"innerelementtype-reactelement--view"},(0,a.kt)("inlineCode",{parentName:"h4"},"innerElementType: ReactElement = View")),(0,a.kt)("p",null,"List internal container component type, default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"View"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"parentNode")," of this container is ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"childNodes")," is the list."),(0,a.kt)("h4",{id:"innerref-ref--function"},(0,a.kt)("inlineCode",{parentName:"h4"},"innerRef: Ref | Function")),(0,a.kt)("p",null,"The ref of the inner container component of the list."),(0,a.kt)("h4",{id:"layout-string--vertical"},(0,a.kt)("inlineCode",{parentName:"h4"},"layout: string = 'vertical'")),(0,a.kt)("p",null,"Scrolling direction. ",(0,a.kt)("inlineCode",{parentName:"p"},"vertical")," is vertical scrolling, ",(0,a.kt)("inlineCode",{parentName:"p"},"horizontal")," is parallel scrolling. Default is ",(0,a.kt)("inlineCode",{parentName:"p"},"vertical"),"."),(0,a.kt)("h4",{id:"onscroll-function"},(0,a.kt)("inlineCode",{parentName:"h4"},"onScroll: Function")),(0,a.kt)("p",null,"The function is called when the list is scrolled. The first argument of the function is an object, consisting of three properties."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scrollDirection"),", the scroll direction, possible values are ",(0,a.kt)("inlineCode",{parentName:"li"},"forward")," forward, ",(0,a.kt)("inlineCode",{parentName:"li"},"backward")," backward."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scrollOffset"),", the scroll distance"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scrollUpdateWasRequested"),", returns ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," when scrolling is called by ",(0,a.kt)("inlineCode",{parentName:"li"},"scrollTo()")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"scrollToItem()"),", otherwise returns ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("h4",{id:"onscrollnative-function"},(0,a.kt)("inlineCode",{parentName:"h4"},"onScrollNative: Function")),(0,a.kt)("p",null,"Call the platform's native scroll listener function."),(0,a.kt)("h4",{id:"overscancount-number--1"},(0,a.kt)("inlineCode",{parentName:"h4"},"overscanCount: number = 1")),(0,a.kt)("p",null,"The higher the value of the number of list items rendered outside the visible area, the lower the probability of a white screen when scrolling fast, and accordingly, the worse the performance per scroll will become."),(0,a.kt)("h4",{id:"unlimitedsize-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"unlimitedSize?: boolean")),(0,a.kt)("p",null,"To unlock the height list single item size limit, use the default value: itemSize (please note that too large a difference between the initial height and the actual height can cause hidden problems)."),(0,a.kt)("h4",{id:"position-absolute--relative"},(0,a.kt)("inlineCode",{parentName:"h4"},"position?: 'absolute' | 'relative'")),(0,a.kt)("p",null,'Layout method, the default is "absolute"'),(0,a.kt)("h4",{id:"renderbottom-reactnode"},(0,a.kt)("inlineCode",{parentName:"h4"},"renderBottom?: ReactNode")),(0,a.kt)("p",null,"Bottom area"),(0,a.kt)("h4",{id:"useisscrolling-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"useIsScrolling: boolean")),(0,a.kt)("p",null,"Whether to inject the ",(0,a.kt)("inlineCode",{parentName:"p"},"isScrolling")," property into the ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," component. This parameter is generally useful when implementing a scrolling skeleton screen (or other placeholder)."),(0,a.kt)("h4",{id:"other-parameters-of-the-scrollview-component"},"Other parameters of the ",(0,a.kt)("inlineCode",{parentName:"h4"},"ScrollView")," component"),(0,a.kt)("p",null,"In addition to the above parameters, all parameters of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," component can be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualList")," component, and the parameters described in the above document are preferred in case of conflicts."),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("p",null,"The ref is created with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.createRef()")," and mounted on ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualList")," to access the internal methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualList"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export default class Index extends Component {\n  state = {\n    data: buildData(0),\n  }\n\n  list = React.createRef()\n\n  componentDidMount() {\n    const list = this.list.current\n    list.scrollTo()\n    list.scrollToItem()\n  }\n\n  render() {\n    const { data } = this.state\n    const dataLen = data.length\n    return (\n      <VirtualList\n         height={500} /* list height */\n        width='100%' /* list width */\n        itemData={data} /* rendering data for the list */\n        itemCount={dataLen} /*  length of rendering list */\n        itemSize={100} /* height of list item  */\n        ref={this.list}\n      >\n        {Row} \n      </VirtualList>\n    );\n  }\n}\n")),(0,a.kt)("h4",{id:"scrolltoscrolloffset-number-void"},(0,a.kt)("inlineCode",{parentName:"h4"},"scrollTo(scrollOffset: number): void")),(0,a.kt)("p",null,"Scroll to the specified location."),(0,a.kt)("h4",{id:"scrolltoitemindex-number-align-string--auto-void"},(0,a.kt)("inlineCode",{parentName:"h4"},'scrollToItem(index: number, align: string = "auto"): void')),(0,a.kt)("p",null,"Scrolls to the specified entry."),(0,a.kt)("p",null,"The second parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"align")," may have the following values."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"auto"),": the minimum possible scrolling distance to ensure that the entry is in the visible area, or not scrolling if it is already in the visible area"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"smart"),": if the item is already in the visible area, don't scroll; if it is partially in the visible area, scroll as far as possible to keep the item in the visible area; if the item is not in the visible area at all, then scroll until the item is centered in the visible area"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"center"),": center the item in the visible area"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"end"),": make the entry appear at the end of the viewable area"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start"),": puts the item at the end of the viewable area")),(0,a.kt)("h2",{id:"vue"},"Vue"),(0,a.kt)("p",null,"To use virtual lists in Vue, we need to declare in the entry file the use of."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js entry file\nimport Vue from 'vue'\nimport VirtualList from '@tarojs/components/virtual-list'\n\nVue.use(VirtualList)\n")),(0,a.kt)("p",null,"The simplest long list component would look like this, with all 5 properties of ",(0,a.kt)("inlineCode",{parentName:"p"},"virtual-list")," as required fields."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<! \u2013\u2013 row.vue Single-item components \u2013\u2013> \n<template>\n  <view\n    :class="index % 2 ? \'ListItemOdd\' : \'ListItemEven\'"\n    :style="css"\n  >\n    Row {{ index }} : {{ data[index] }}\n  </view>\n</template>\n\n<script>\nexport default {\n  props: [\'index\', \'data\', \'css\']\n}\n<\/script>\n\n<! \u2013\u2013 page.vue page component \u2013\u2013> \n<template>\n  <virtual-list\n    wclass="List"\n    :height="500"\n    :item-data="list"\n    :item-count="list.length"\n    :item-size="100"\n    :item="Row"\n    width="100%"\n  />\n</template>\n\n<script>\nimport Row from \'./row.vue\'\n\nfunction buildData (offset = 0) {\n  return Array(100).fill(0).map((_, i) => i + offset)\n}\n\nexport default {\n  data() {\n    return {\n      Row,\n      list: buildData(0)\n    }\n  },\n}\n<\/script>\n\n')),(0,a.kt)("h3",{id:"infinite-scrolling"},"infinite scrolling"),(0,a.kt)("p",null,"Implementing infinite scrolling is also very simple, we just need to append data to the end of the list when it scrolls to the bottom."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <virtual-list\n    wclass="List"\n    :height="500"\n    :item-data="list"\n    :item-count="dataLen"\n    :item-size="itemHeight"\n    :item="Row"\n    width="100%"\n    @scroll="onScroll"\n  />\n</template>\n\n<script>\nimport Row from \'./row.vue\'\n\nfunction buildData (offset = 0) {\n  return Array(100).fill(0).map((_, i) => i + offset)\n}\n\nexport default {\n  data() {\n    return {\n      Row,\n      list: buildData(0),\n      loading: false,\n      itemHeight: 100\n    }\n  },\n  computed: {\n    dataLen () {\n      return this.list.length\n    }\n  },\n  methods: {\n    listReachBottom() {\n      Taro.showLoading()\n      this.loading = true\n      setTimeout(() => {\n        const { data } = this.state\n        this.setState({\n          data: data.concat(buildData(data.length))\n        }, () => {\n          this.loading = false;\n          Taro.hideLoading()\n        })\n      }, 1000)\n    },\n    onScroll({ scrollDirection, scrollOffset }) {\n      if (\n        // Avoid duplicate data loading\n        !this.loading &&\n        // Only scrolling forward we trigger\n        scrollDirection === \'forward\' &&\n        // 5 = (List height / Single item list height)\n        // 100 = Rolling advance loading amount, adjustable according to the style\n        scrollOffset > ((this.dataLen - 5) * this.itemHeight + 100)\n      ) {\n        this.listReachBottom()\n      }\n    }\n  }\n}\n<\/script>\n\n')),(0,a.kt)("h3",{id:"props-1"},"props"),(0,a.kt)("h4",{id:"item-vuecomponent"},(0,a.kt)("inlineCode",{parentName:"h4"},"item: VueComponent")),(0,a.kt)("p",null,"The single component of the list to be rendered. The component's ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," has 4 properties."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"css"),": the style of the single item, the style must be passed into the component's ",(0,a.kt)("inlineCode",{parentName:"li"},"style")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data"),": the data rendered by the component, same as the virtual list ",(0,a.kt)("inlineCode",{parentName:"li"},"itemData")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"index"),": the index of the data rendered by the component"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isScrolling"),": whether the component is scrolling or not, returns a boolean value when ",(0,a.kt)("inlineCode",{parentName:"li"},"useIsScrolling")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", otherwise returns ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("h4",{id:"itemcount-number-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"itemCount: number")),(0,a.kt)("p",null,"The length of the list. Required field."),(0,a.kt)("h4",{id:"itemdata-arrayany-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"itemData: Array<any>")),(0,a.kt)("p",null,"Render data. Required field."),(0,a.kt)("h4",{id:"itemsize-number-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"itemSize: number")),(0,a.kt)("p",null,"The size of the list item, height when scrolling vertically, width when scrolling horizontally. Required field."),(0,a.kt)("h4",{id:"height-number--string-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"height: number | string")),(0,a.kt)("p",null,"The height of the list. Required when the scroll direction is vertical."),(0,a.kt)("h4",{id:"width-number--string-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"width: number | string")),(0,a.kt)("p",null,"The width of the list. Required when the scroll direction is horizontal."),(0,a.kt)("h4",{id:"wclass-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"wclass: string")),(0,a.kt)("p",null,"Root Component CSS Classes"),(0,a.kt)("h4",{id:"wstyle-style"},(0,a.kt)("inlineCode",{parentName:"h4"},"wstyle: Style")),(0,a.kt)("p",null,"Style of the root component"),(0,a.kt)("h4",{id:"initialscrolloffset-number--0-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"initialScrollOffset: number = 0")),(0,a.kt)("p",null,"The initial scroll offset value, horizontal scrolling affects ",(0,a.kt)("inlineCode",{parentName:"p"},"scrollLeft"),", vertical scrolling affects ",(0,a.kt)("inlineCode",{parentName:"p"},"scrollTop"),"."),(0,a.kt)("h4",{id:"innerelementtype-string--view"},(0,a.kt)("inlineCode",{parentName:"h4"},"innerElementType: string = 'view'")),(0,a.kt)("p",null,"List internal container component type, default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"view"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"parentNode")," of this container is ",(0,a.kt)("inlineCode",{parentName:"p"},"scroll-view")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"childNodes")," is the list."),(0,a.kt)("h4",{id:"layout-string--vertical-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"layout: string = 'vertical'")),(0,a.kt)("p",null,"Scrolling direction. ",(0,a.kt)("inlineCode",{parentName:"p"},"vertical")," is vertical scrolling, ",(0,a.kt)("inlineCode",{parentName:"p"},"horizontal")," is parallel scrolling. Default is ",(0,a.kt)("inlineCode",{parentName:"p"},"vertical"),"."),(0,a.kt)("h4",{id:"v-onscroll-function"},(0,a.kt)("inlineCode",{parentName:"h4"},"v-on:scroll: Function")),(0,a.kt)("p",null,"The function is called when the list is scrolled. The first argument of the function is an object, consisting of three properties."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scrollDirection"),", the scroll direction, possible values are ",(0,a.kt)("inlineCode",{parentName:"li"},"forward")," forward, ",(0,a.kt)("inlineCode",{parentName:"li"},"backward")," backward."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scrollOffset"),", the scroll distance"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scrollUpdateWasRequested"),", returns ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," when scrolling is called by ",(0,a.kt)("inlineCode",{parentName:"li"},"scrollTo()")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"scrollToItem()"),", otherwise returns ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("h4",{id:"scrollnative-function"},(0,a.kt)("inlineCode",{parentName:"h4"},"scrollNative: Function")),(0,a.kt)("p",null,"Call the platform's native scroll listener function. Note that the call to pass this function uses ",(0,a.kt)("inlineCode",{parentName:"p"},"v-bind")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"v-on"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<virtual-list\n  wclass="List"\n  :height="500"\n  :item-data="list"\n  :item-count="list.length"\n  :item-size="100"\n  :item="Row"\n  width="100%"\n  @scroll="onScroll"\n  :scroll-native="onScrollNative"\n/>\n')),(0,a.kt)("h4",{id:"overscancount-number--1-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"overscanCount: number = 1")),(0,a.kt)("p",null,"The higher the value of the number of list items rendered outside the visible area, the lower the probability of a white screen when scrolling fast, and accordingly, the worse the performance per scroll will become."),(0,a.kt)("h4",{id:"useisscrolling-boolean-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"useIsScrolling: boolean")),(0,a.kt)("p",null,"Whether to inject the ",(0,a.kt)("inlineCode",{parentName:"p"},"isScrolling")," property into the ",(0,a.kt)("inlineCode",{parentName:"p"},"item")," component. This parameter is generally useful when implementing a scrolling skeleton screen (or other placeholder)."),(0,a.kt)("h2",{id:"related-questions"},"Related Questions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Baidu smart program temporarily does not support the use of virtual list components, see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro/issues/7254"},"#7254")),(0,a.kt)("li",{parentName:"ul"},"The virtual list component needs to implement a version of ",(0,a.kt)("inlineCode",{parentName:"li"},"Vue3")," (to be implemented), see ","[Vue3 Other Restrictions]","(",(0,a.kt)("a",{parentName:"li",href:"https://taro-docs.jd.com/taro/docs/vue3#Other"},"https://taro-docs.jd.com/taro/docs/vue3#Other")," Limitations)")))}p.isMDXComponent=!0}}]);