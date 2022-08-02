(globalThis.webpackChunkreact_app=globalThis.webpackChunkreact_app||[]).push([[179],{"./src/components/Activities/FoodCard/FoodCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FoodCard_stories});var iconify=__webpack_require__("./node_modules/@iconify/react/dist/iconify.mjs"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function BackgroundHistory(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Shape1,{}),(0,jsx_runtime.jsx)(Shape2,{}),(0,jsx_runtime.jsx)(Shape3,{})]})}const Shape1=styled_components_browser_esm.ZP.div`
	position: absolute;
	z-index: -1;
	top: 0;
	right: 10%;
	width: 45px;
	height: 45px;
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	opacity: 0.2;
	background-color: #b9e6ff;
`,Shape2=styled_components_browser_esm.ZP.div`
	position: absolute;
	z-index: -1;
	bottom: 50%;
	width: 75px;
	height: 80px;
	border-radius: 30% 70% 29% 71% / 30% 75% 25% 70%;
	opacity: 0.2;
	background-color: #b9e6ff;
`,Shape3=styled_components_browser_esm.ZP.div`
	position: absolute;
	z-index: -1;
	right: 0%;
	bottom: 0%;
	width: 75px;
	height: 60px;
	border-radius: 62% 38% 29% 71% / 74% 35% 65% 26%;
	opacity: 0.2;
	background-color: #b9e6ff;
`,ModalContainer=styled_components_browser_esm.ZP.section`
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: rgba(0, 0, 0, 0.5);
`,Modal=styled_components_browser_esm.ZP.dialog`
	position: fixed;
	z-index: 2;
	top: 30%;
	width: 80%;
	max-height: 100%;
	margin: 0 auto;
	padding: 1.4em;
	overflow-y: auto;
	transform: translate(0, -30%);
	border: none;
	border-radius: 5px;
	background: #fff;
	box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`,StyledHistoryModalHeader=styled_components_browser_esm.ZP.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2px solid #343d46;
`,StyledHistoryModalButton=styled_components_browser_esm.ZP.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #c3423f;
	color: #fff;
	font-size: 1em;
	cursor: pointer;
	&:hover {
		background: #aa3936;
	}

	&:active {
		background: #bad;
	}
`;function FoodGoalModal(_ref){let{children,onCancelGoalForm}=_ref;return(0,jsx_runtime.jsx)(ModalContainer,{children:(0,jsx_runtime.jsxs)(Modal,{open:!0,children:[(0,jsx_runtime.jsx)(BackgroundHistory,{}),(0,jsx_runtime.jsxs)(StyledHistoryModalHeader,{children:[(0,jsx_runtime.jsx)("h2",{children:"Food-Goal"}),(0,jsx_runtime.jsx)(StyledHistoryModalButton,{type:"button",onClick:onCancelGoalForm,children:"Get back"})]}),children]})})}function BackgroundInput(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(BackgroundInput_Shape1,{}),(0,jsx_runtime.jsx)(BackgroundInput_Shape2,{}),(0,jsx_runtime.jsx)(BackgroundInput_Shape3,{})]})}const BackgroundInput_Shape1=styled_components_browser_esm.ZP.div`
	position: absolute;
	z-index: -1;
	top: 0;
	right: 10%;
	width: 45px;
	height: 45px;
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	opacity: 0.2;
	background-color: #b9e6ff;
`,BackgroundInput_Shape2=styled_components_browser_esm.ZP.div`
	position: absolute;
	z-index: -1;
	bottom: 50%;
	width: 75px;
	height: 80px;
	border-radius: 30% 70% 29% 71% / 30% 75% 25% 70%;
	opacity: 0.2;
	background-color: #b9e6ff;
`,BackgroundInput_Shape3=styled_components_browser_esm.ZP.div`
	position: absolute;
	z-index: -1;
	right: 0%;
	bottom: 0%;
	width: 75px;
	height: 60px;
	border-radius: 62% 38% 29% 71% / 74% 35% 65% 26%;
	opacity: 0.2;
	background-color: #b9e6ff;
`,styled_ModalContainer=styled_components_browser_esm.ZP.section`
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: rgba(0, 0, 0, 0.5);
`,styled_Modal=styled_components_browser_esm.ZP.dialog`
	position: fixed;
	z-index: 2;
	top: 30%;
	width: 90%;
	margin: 0 auto;
	padding: 1.4em;
	overflow-y: auto;
	transform: translate(0, -30%);
	border: none;
	border-radius: 5px;
	background: #fff;
	box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
	color: #343d46;
`;function FormModal(_ref){let{children}=_ref;return(0,jsx_runtime.jsx)(styled_ModalContainer,{children:(0,jsx_runtime.jsxs)(styled_Modal,{open:!0,children:[children,(0,jsx_runtime.jsx)(BackgroundInput,{})]})})}const HistoryModal_styled_ModalContainer=styled_components_browser_esm.ZP.section`
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: rgba(0, 0, 0, 0.5);
`,HistoryModal_styled_Modal=styled_components_browser_esm.ZP.dialog`
	position: fixed;
	z-index: 2;
	top: 30%;
	width: 80%;
	max-height: 80%;
	margin: 0 auto;
	padding: 1.4em;
	overflow-y: auto;
	transform: translate(0, -30%);
	border: none;
	border-radius: 5px;
	background: #fff;
	box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`,styled_StyledHistoryModalHeader=styled_components_browser_esm.ZP.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2px solid #343d46;
	color: #343d46;
`,styled_StyledHistoryModalButton=styled_components_browser_esm.ZP.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #c3423f;
	color: #fff;
	font-size: 1em;
	cursor: pointer;
	&:hover {
		background: #aa3936;
	}

	&:active {
		background: #bad;
	}
`;function HistoryModal(_ref){let{children,onCancelHistoryForm}=_ref;return(0,jsx_runtime.jsx)(HistoryModal_styled_ModalContainer,{children:(0,jsx_runtime.jsxs)(HistoryModal_styled_Modal,{open:!0,children:[(0,jsx_runtime.jsx)(BackgroundHistory,{}),(0,jsx_runtime.jsxs)(styled_StyledHistoryModalHeader,{children:[(0,jsx_runtime.jsx)("h2",{children:"History"}),(0,jsx_runtime.jsx)(styled_StyledHistoryModalButton,{type:"button",onClick:onCancelHistoryForm,children:"Get back"})]}),children]})})}var index_browser=__webpack_require__("./node_modules/nanoid/index.browser.js");const GoalForm=styled_components_browser_esm.ZP.form`
	padding: 0.2em 2em;
`,InputGoalHeader=styled_components_browser_esm.ZP.h2`
	text-align: center;
`,InputGoalSection=styled_components_browser_esm.ZP.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1em;
`,InputGoalLabel=styled_components_browser_esm.ZP.label`
	margin-bottom: 0.4em;
`,InputGoalAmount=styled_components_browser_esm.ZP.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`,InputGoalButtonGroup=styled_components_browser_esm.ZP.section`
	display: flex;
	justify-content: space-evenly;
	margin: 2em 0 1em;
`,AddButton=styled_components_browser_esm.ZP.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #64b6ac;
	color: #fff;
	font-size: 1em;
	cursor: pointer;
	&:hover {
		background: #559c93;
	}

	&:active {
		background: #bad;
	}
`,LastSubmitSection=styled_components_browser_esm.ZP.section`
	margin: 0.4em;
	padding: 0.6em;
	border: 4px solid rgb(100, 182, 172);
	border-radius: 15px;
	box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
`,LastSubmitHeading=styled_components_browser_esm.ZP.h3`
	font-size: 1.4rem;
	text-align: center;
`,LastSubmitText=styled_components_browser_esm.ZP.p`
	margin: 1em;
	text-align: center;
`;function InputGoalForm(_ref){let{onCancelGoalForm,addNewFoodGoal}=_ref;const[amount,setAmount]=(0,react.useState)(0),[message,setMessage]=(0,react.useState)("");return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(GoalForm,{onSubmit:event=>{event.preventDefault();const newAmount={id:(0,index_browser.x0)(),amount};addNewFoodGoal(newAmount),setMessage(`Your new food-goal for today is reach to ${newAmount.amount} gram. You can do this!`)},children:[(0,jsx_runtime.jsx)(InputGoalHeader,{children:"How much food should your dog eat today?"}),(0,jsx_runtime.jsxs)(InputGoalSection,{children:[(0,jsx_runtime.jsx)(InputGoalLabel,{htmlFor:"enterAmount",children:"Input your goal amount in gram"}),(0,jsx_runtime.jsx)(InputGoalAmount,{id:"enterAmount",type:"number",value:amount,min:"0",onChange:event=>setAmount(event.target.value)})]}),(0,jsx_runtime.jsx)(InputGoalButtonGroup,{children:(0,jsx_runtime.jsx)(AddButton,{type:"submit",children:"add"})})]}),message&&(0,jsx_runtime.jsxs)(LastSubmitSection,{children:[(0,jsx_runtime.jsx)(LastSubmitHeading,{children:"New goal!"}),(0,jsx_runtime.jsx)(LastSubmitText,{children:message})]})]})}const ActivityCard=styled_components_browser_esm.ZP.section`
	margin: 2em;
	padding: 1em 1em;
	border: none;
	border-radius: 5px;
	background-color: white;
	box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
`;function ActivityContainer(_ref){let{children}=_ref;return(0,jsx_runtime.jsx)(ActivityCard,{children})}const StyledAddButton=styled_components_browser_esm.ZP.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #64b6ac;
	color: #fff;
	font-size: 1em;
	cursor: pointer;

	&:hover {
		background: #559c93;
	}

	&:active {
		background: #bad;
	}
`;function AddButton_AddButton(_ref){let{buttonText,cancelForm}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(StyledAddButton,{onClick:cancelForm,children:buttonText})})}const StyledCancelButton=styled_components_browser_esm.ZP.button`
	padding: 0.5em 1em;
	border: none;
	border-radius: 5px;
	background: #c3423f;
	color: #fff;
	font-size: 1em;
	cursor: pointer;
	&:hover {
		background: #aa3936;
	}

	&:active {
		background: #bad;
	}
`;function CancelButton(_ref){let{buttonText,cancelForm}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(StyledCancelButton,{onClick:cancelForm,children:buttonText})})}const InputFoodContainer=styled_components_browser_esm.ZP.section``,InputFoodForm=styled_components_browser_esm.ZP.form`
	padding: 0.2em 2em;
`,InputFoodHeader=styled_components_browser_esm.ZP.h2`
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #343d46;
`,InputFoodSection=styled_components_browser_esm.ZP.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1em;
`,InputFoodLabel=styled_components_browser_esm.ZP.label`
	margin-bottom: 0.4em;
	text-align: center;
`,InputFoodAmount=styled_components_browser_esm.ZP.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`,InputFoodTime=styled_components_browser_esm.ZP.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`,InputFoodDate=styled_components_browser_esm.ZP.input`
	padding: 0.4em;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`,InputFoodButtonGroup=styled_components_browser_esm.ZP.section`
	display: flex;
	justify-content: space-evenly;
	margin: 2em 0 1em;
`,styled_LastSubmitSection=styled_components_browser_esm.ZP.section`
	margin: 0.4em;
	padding: 0.6em;
	border: 4px solid rgb(100, 182, 172);
	border-radius: 15px;
	box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
`,styled_LastSubmitHeading=styled_components_browser_esm.ZP.h3`
	font-size: 1.4rem;
	text-align: center;
`,styled_LastSubmitText=styled_components_browser_esm.ZP.p`
	margin: 1em;
	text-align: center;
`;function InputFood(_ref){let{addNewFoodItem,cancelForm}=_ref;const[enteredAmount,setEnteredAmount]=(0,react.useState)(0),[enteredTime,setEnteredTime]=(0,react.useState)("08:00"),[enteredDate,setEnteredDate]=(0,react.useState)(""),[message,setMessage]=(0,react.useState)("");return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(InputFoodContainer,{children:[(0,jsx_runtime.jsxs)(InputFoodForm,{onSubmit:event=>{event.preventDefault();const newFoodInput={id:(0,index_browser.x0)(),amount:parseInt(enteredAmount),time:enteredTime,date:new Date(enteredDate).toDateString()};addNewFoodItem(newFoodInput),setMessage(`Your dog last ate ${newFoodInput.amount} gram at ${newFoodInput.time} o'clock on ${newFoodInput.date}! Your dog will forever be grateful!`),setEnteredAmount(0)},children:[(0,jsx_runtime.jsx)(InputFoodHeader,{children:"Enter food"}),(0,jsx_runtime.jsxs)(InputFoodSection,{children:[(0,jsx_runtime.jsx)(InputFoodLabel,{htmlFor:"food-amount-input",children:"How many gram did your dog eat?"}),(0,jsx_runtime.jsx)(InputFoodAmount,{id:"food-amount-input",type:"number",min:"0",value:enteredAmount,required:!0,onChange:event=>setEnteredAmount(event.target.value)})]}),(0,jsx_runtime.jsxs)(InputFoodSection,{children:[(0,jsx_runtime.jsxs)(InputFoodLabel,{htmlFor:"food-amount-time",children:["At what time did your dog eat?"," "]}),(0,jsx_runtime.jsx)(InputFoodTime,{id:"food-amount-time",type:"time",value:enteredTime,required:!0,onChange:event=>setEnteredTime(event.target.value)})]}),(0,jsx_runtime.jsxs)(InputFoodSection,{children:[(0,jsx_runtime.jsx)(InputFoodLabel,{htmlFor:"food-amount-date",children:"When did your dog eat?"}),(0,jsx_runtime.jsx)(InputFoodDate,{id:"food-amount-date",type:"date",min:"2022-07-18",max:"2022-12-31",value:enteredDate,required:!0,onChange:event=>setEnteredDate(event.target.value)})]}),(0,jsx_runtime.jsxs)(InputFoodButtonGroup,{children:[(0,jsx_runtime.jsx)(CancelButton,{buttonText:"Cancel",type:"button",cancelForm}),(0,jsx_runtime.jsx)(AddButton_AddButton,{buttonText:"Add food",type:"submit"})]})]}),message&&(0,jsx_runtime.jsxs)(styled_LastSubmitSection,{children:[(0,jsx_runtime.jsx)(styled_LastSubmitHeading,{children:"Good job!"}),(0,jsx_runtime.jsx)(styled_LastSubmitText,{children:message})]})]})})}const FoodInfoContainer=styled_components_browser_esm.ZP.section`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #343d46;
`,FoodCardHeaderGroup=styled_components_browser_esm.ZP.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`,FoodCardButtonGroup=styled_components_browser_esm.ZP.section`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`,FoodCardButtonGoal=styled_components_browser_esm.ZP.button`
	padding: 0.4em 0.6em;
	border: none;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	background: #343d46;
	cursor: pointer;
`,FoodCardButtonHistory=styled_components_browser_esm.ZP.button`
	padding: 0.4em 0.6em;
	border: none;
	background: #343d46;
	cursor: pointer;

	&:hover {
		background: #1a1f24;
	}
`,FoodCardButtonAdd=styled_components_browser_esm.ZP.button`
	padding: 0.4em 0.6em;
	border: none;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	background: #343d46;
	cursor: pointer;

	&:hover {
		background: #1a1f24;
	}
`;function FoodCard(){const[showForm,setShowForm]=(0,react.useState)(!1),[showHistory,setShowHistory]=(0,react.useState)(!1),[showGoal,setShowGoal]=(0,react.useState)(!1),[foodItems,setFoodItems]=(0,react.useState)([]),[foodGoal,setFoodGoal]=(0,react.useState)({}),dates=foodItems.map((foodItem=>foodItem.date)),uniqueDates=[...new Set(dates)],lastSubmit=foodItems[foodItems.length-1],foodSum=foodItems.reduce(((total,currentValue)=>total+currentValue.amount),0);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(ActivityContainer,{children:[(0,jsx_runtime.jsxs)(FoodInfoContainer,{children:[(0,jsx_runtime.jsxs)(FoodCardHeaderGroup,{children:[(0,jsx_runtime.jsx)("h2",{children:"Food"}),(0,jsx_runtime.jsxs)(FoodCardButtonGroup,{children:[showGoal&&(0,jsx_runtime.jsx)(FoodGoalModal,{onCancelGoalForm:()=>{setShowGoal(!showGoal)},children:(0,jsx_runtime.jsx)(InputGoalForm,{addNewFoodGoal:prevAmount=>{const newFoodGoal={...foodGoal,...prevAmount};setFoodGoal(newFoodGoal)}})}),(0,jsx_runtime.jsx)(FoodCardButtonGoal,{onClick:()=>setShowGoal(!showGoal),children:(0,jsx_runtime.jsx)(iconify.JO,{icon:"mdi:bullseye-arrow",width:"1.6rem",height:"1.6rem",color:"white",alt:"add activity"})}),(0,jsx_runtime.jsx)(FoodCardButtonHistory,{onClick:()=>{setShowHistory(!showHistory)},children:(0,jsx_runtime.jsx)(iconify.JO,{icon:"mdi:history",width:"1.6rem",height:"1.6rem",color:"white",alt:"show history"})}),(0,jsx_runtime.jsx)(FoodCardButtonAdd,{onClick:()=>{setShowForm(!showForm)},children:(0,jsx_runtime.jsx)(iconify.JO,{icon:"mdi:plus-circle",width:"1.6rem",height:"1.6rem",color:"white",alt:"add activity"})})]})]}),(0,jsx_runtime.jsx)("p",{children:"Dogs gotta eat"})]}),foodGoal.amount&&(0,jsx_runtime.jsxs)("p",{children:["Todays goal: ",foodGoal.amount," gram"]}),lastSubmit&&foodGoal.amount?(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("p",{children:["Todays sum: ",foodSum," gram"]}),(0,jsx_runtime.jsx)("p",{children:foodSum>=foodGoal.amount?"food goal reached (unless you want to have a chunky boy you should probably stop feeding your dog.)":`missing food: ${foodGoal.amount-foodSum} gram`}),(0,jsx_runtime.jsx)("h4",{children:"Last Input"}),(0,jsx_runtime.jsxs)("p",{children:["How much ",lastSubmit.amount," gram"]}),(0,jsx_runtime.jsxs)("p",{children:["At: ",lastSubmit.time]})]}):lastSubmit&&(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h4",{children:"Last feed"}),(0,jsx_runtime.jsxs)("p",{children:["Amount: ",lastSubmit.amount," gram"]}),(0,jsx_runtime.jsxs)("p",{children:["Time: ",lastSubmit.time]})]}),(0,jsx_runtime.jsxs)("p",{children:["Todays sum: ",foodSum," gram"]})]})]}),showForm&&(0,jsx_runtime.jsx)(FormModal,{children:(0,jsx_runtime.jsx)(InputFood,{addNewFoodItem:prevItem=>{const newFoodItems=[...foodItems,prevItem];setFoodItems(newFoodItems)},cancelForm:()=>{setShowForm(!showForm)}})}),showHistory&&(0,jsx_runtime.jsx)(HistoryModal,{onCancelHistoryForm:()=>{setShowHistory(!showHistory)},children:uniqueDates.sort(((a,b)=>new Date(b)-new Date(a))).map((date=>(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h3",{children:date}),foodItems.filter((food=>food.date===date)).map((food=>(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("p",{children:["Amount: ",food.amount," gram"]}),(0,jsx_runtime.jsxs)("p",{children:["Time: ",food.time]})]},food.id)))]},date)))})]})}const Default=function Default(){return(0,jsx_runtime.jsx)(FoodCard,{children:"Food Card"})},FoodCard_stories={title:"Foodcard",component:FoodCard};Default.parameters={storySource:{source:"function Default() {\n\treturn <FoodCard>Food Card</FoodCard>;\n}"},...Default.parameters};const __namedExportsOrder=["Default"]},"./src/components/Activities/InputFood/InputFood.stories.js":()=>{},"./src/components/Activities/WalkCard/WalkCard.stories.js":()=>{},"./src/components/Button/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function rem(n){return`${n}rem`}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});const styled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button`
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${function pxToRem(pixel){let rootFontSize=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return rem(pixel/rootFontSize)}(4)};
	background: #fae;
	color: #000;
	font-size: 1em;

	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){let{children,type="button",...props}=_ref;return(0,jsx_runtime.jsx)(styled,{type,...props,children})}const Default=function Default(){return(0,jsx_runtime.jsx)(Button,{children:"Button"})},Button_stories={title:"Button",component:Button};Default.parameters={storySource:{source:"function Default() {\n\treturn <Button>Button</Button>;\n}"},...Default.parameters};const __namedExportsOrder=["Default"]},"./src/components/InputLabel/InputLabel.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputLabel_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function InputLabel(_ref){let{children}=_ref;return(0,jsx_runtime.jsx)("label",{children})}const Default=function Default(){return(0,jsx_runtime.jsx)(InputLabel,{children:"Input Label"})},InputLabel_stories={title:"InputLabel",component:InputLabel};Default.parameters={storySource:{source:"function Default() {\n\treturn <InputLabel>Input Label</InputLabel>;\n}"},...Default.parameters};const __namedExportsOrder=["Default"]},"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,decorators:()=>decorators,parameters:()=>parameters});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js");const GlobalStyle=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").vJ`
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
		background-color: #FFF9F4;
		color: #323232;
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
	}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators=[Story=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsx)(Story,{})]})],__namedExportsOrder=["parameters","decorators"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/Activities/FoodCard/FoodCard.stories.js":"./src/components/Activities/FoodCard/FoodCard.stories.js","./components/Activities/InputFood/InputFood.stories.js":"./src/components/Activities/InputFood/InputFood.stories.js","./components/Activities/WalkCard/WalkCard.stories.js":"./src/components/Activities/WalkCard/WalkCard.stories.js","./components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","./components/InputLabel/InputLabel.stories.js":"./src/components/InputLabel/InputLabel.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[949],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);
//# sourceMappingURL=main.c59cf16d.iframe.bundle.js.map