(globalThis.webpackChunkreact_app=globalThis.webpackChunkreact_app||[]).push([[179],{"./src/components/Button/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),unit=__webpack_require__("./src/utils/unit.js");const styled=styled_components_browser_esm.ZP.button`
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${(0,unit.Q)(4)};
	background: #fae;
	color: #000;
	font-size: 1em;

	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){let{children,type="button",...props}=_ref;return(0,jsx_runtime.jsx)(styled,{type,...props,children})}const Default=function Default(){return(0,jsx_runtime.jsx)(Button,{children:"Button"})},Button_stories={title:"Button",component:Button};Default.parameters={storySource:{source:"function Default() {\n\treturn <Button>Button</Button>;\n}"},...Default.parameters};const __namedExportsOrder=["Default"]},"./src/components/FoodCard/FoodCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FoodCard_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const InputFoodContainer=styled_components_browser_esm.ZP.section`
	margin: 2em;
	padding: 0.2em 1em;
	border: 1px solid black;
	border-radius: 10px;

	h4 {
		display: flex;
		justify-content: center;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function InputFood(_ref){let{addNewFoodItem,setSubmittedFoodInput,setSubmittedTimeInput}=_ref;const[enteredAmount,setEnteredAmount]=(0,react.useState)(0),[enteredTime,setEnteredTime]=(0,react.useState)("08:00");return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(InputFoodContainer,{children:(0,jsx_runtime.jsxs)("form",{onSubmit:event=>{event.preventDefault();const newInput={amount:parseInt(enteredAmount),time:enteredTime};addNewFoodItem(newInput),setSubmittedFoodInput(enteredAmount),setSubmittedTimeInput(enteredTime),setEnteredAmount(0),setEnteredTime("")},children:[(0,jsx_runtime.jsx)("h4",{children:"Your dog"}),(0,jsx_runtime.jsx)("section",{children:(0,jsx_runtime.jsxs)("label",{children:["How many gram did the dog eat",(0,jsx_runtime.jsx)("input",{type:"number",min:"0",value:enteredAmount,onChange:event=>setEnteredAmount(event.target.value)})]})}),(0,jsx_runtime.jsx)("section",{children:(0,jsx_runtime.jsxs)("label",{children:["When did the dog eat",(0,jsx_runtime.jsx)("input",{type:"time",value:enteredTime,defaultValue:"08:00",onChange:event=>setEnteredTime(event.target.value)})]})}),(0,jsx_runtime.jsx)("section",{children:(0,jsx_runtime.jsx)("button",{type:"submit",children:"Add"})})]})})})}var unit=__webpack_require__("./src/utils/unit.js");const FoodCardContainer=styled_components_browser_esm.ZP.section`
	margin: 2em;
	padding: 0.2em 1em;
	border: 1px solid black;
	border-radius: 10px;
`,FoodCardHead=styled_components_browser_esm.ZP.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
`,FoodCardButton=styled_components_browser_esm.ZP.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: ${(0,unit.Q)(4)};
	background: #343d46;
	color: white;
	font-size: 1em;

	&:hover {
		background: grey;
	}

	&:active {
		background: #bad;
	}
`,FoodInfoContainer=styled_components_browser_esm.ZP.section`
	display: flex;
	justify-content: space-between;
`,FoodInfo=styled_components_browser_esm.ZP.section`
	align-self: flex-end;
	color: grey;
	font-size: 0.8rem;
	font-weight: light;
	text-align: start;
`,FoodCounter=styled_components_browser_esm.ZP.p`
	align-self: flex-end;
	color: grey;
	font-size: 0.8rem;
	font-weight: light;
	text-align: end;
`;function FoodCard(){const[foodItem,setFoodItem]=(0,react.useState)([]),[showForm,setShowForm]=(0,react.useState)(!1),[submittedFoodInput,setSubmittedFoodInput]=(0,react.useState)(""),[submittedTimeInput,setSubmittedTimeInput]=(0,react.useState)("");const todayAmount=foodItem.reduce(((previousAmount,currentAmount)=>previousAmount+currentAmount.amount),0);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(FoodCardContainer,{children:[(0,jsx_runtime.jsxs)(FoodCardHead,{children:[(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h2",{children:"Food"}),(0,jsx_runtime.jsx)("h3",{children:"Type of food"})]}),(0,jsx_runtime.jsx)(FoodCardButton,{onClick:()=>{setShowForm(!showForm)},children:showForm?"-":"+"})]}),(0,jsx_runtime.jsxs)(FoodInfoContainer,{children:[(0,jsx_runtime.jsxs)(FoodInfo,{children:[(0,jsx_runtime.jsxs)("p",{children:["What: ",submittedFoodInput," gram"]}),(0,jsx_runtime.jsxs)("p",{children:["When: ",submittedTimeInput]})]}),(0,jsx_runtime.jsxs)(FoodCounter,{children:[todayAmount," / goal"]})]})]}),showForm&&(0,jsx_runtime.jsx)(InputFood,{addNewFoodItem:function addNewFoodItem(prevItem){const newFoodItems=[...foodItem,prevItem];setFoodItem(newFoodItems)},setSubmittedFoodInput,setSubmittedTimeInput})]})}const Default=function Default(){return(0,jsx_runtime.jsx)(FoodCard,{children:"Food Card"})},FoodCard_stories={title:"Foodcard",component:FoodCard};Default.parameters={storySource:{source:"function Default() {\n\treturn <FoodCard>Food Card</FoodCard>;\n}"},...Default.parameters};const __namedExportsOrder=["Default"]},"./src/components/InputFood/InputFood.stories.js":()=>{},"./src/components/InputLabel/InputLabel.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputLabel_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function InputLabel(_ref){let{children}=_ref;return(0,jsx_runtime.jsx)("label",{children})}const Default=function Default(){return(0,jsx_runtime.jsx)(InputLabel,{children:"Input Label"})},InputLabel_stories={title:"InputLabel",component:InputLabel};Default.parameters={storySource:{source:"function Default() {\n\treturn <InputLabel>Input Label</InputLabel>;\n}"},...Default.parameters};const __namedExportsOrder=["Default"]},"./src/components/WalkCard/WalkCard.stories.js":()=>{},"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,decorators:()=>decorators,parameters:()=>parameters});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js");const GlobalStyle=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").vJ`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:root {
		--card-info-color: grey;
		--card-info-fontSize: 0.8rem;
		--card-info-fontWeight: light;
	}
	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		font-family: sans-serif;
		font-size: 1rem;
	}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators=[Story=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsx)(Story,{})]})],__namedExportsOrder=["parameters","decorators"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/utils/unit.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function rem(n){return`${n}rem`}function pxToRem(pixel){let rootFontSize=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return rem(pixel/rootFontSize)}__webpack_require__.d(__webpack_exports__,{Q:()=>pxToRem})},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","./components/FoodCard/FoodCard.stories.js":"./src/components/FoodCard/FoodCard.stories.js","./components/InputFood/InputFood.stories.js":"./src/components/InputFood/InputFood.stories.js","./components/InputLabel/InputLabel.stories.js":"./src/components/InputLabel/InputLabel.stories.js","./components/WalkCard/WalkCard.stories.js":"./src/components/WalkCard/WalkCard.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[974],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);
//# sourceMappingURL=main.67fbbf01.iframe.bundle.js.map