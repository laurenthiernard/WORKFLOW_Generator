import.meta.env={"MODE":"dev","NODE_ENV":"dev"};import e,{useState as i,useRef as P}from"../web_modules/react.js";import"./App.css.proxy.js";import X from"./components/WorlkflowInterface.js";import Y from"./components/WorlkflowEditor.js";import Z from"./components/ConfirmationModal.js";import $ from"./components/EditStepModal.js";import ee from"./components/EditStepItemModal.js";import te from"./WorkflowContext.js";import E from"../web_modules/react-spinners/SquareLoader.js";import oe from"../web_modules/react-json-view.js";import{FontAwesomeIcon as ae}from"../web_modules/@fortawesome/react-fontawesome.js";import{faAngleUp as le,faAngleDown as re}from"../web_modules/@fortawesome/free-solid-svg-icons.js";import{v4 as ne}from"../web_modules/uuid.js";function se({}){const[u,C]=i(!1),[t,s]=i(),[F,k]=i(!1),[c,W]=i(!1),[d,I]=i(window.SelectedProject),[h,p]=i(!1),[A,w]=i(null),[b,f]=i(null),R=P(null),S=P(null),[N,T]=i([]),[g,D]=i([]),O=import.meta.env.MODE==="production"?{env:"prod",url:"/api/",token:"",templatesStem:"WorkFlowTemplate/Templates",templateSaveStem:"WorkFlowTemplate",templateStem:"WorkFlowTemplate/Template",projectsStem:"Project/Load",doaStem:"WorkFlowDelegationOfAuthority/Load",contactStem:`ProjectContact/DetailedContactByProject?RootProjectId=${d}`}:{env:"dev",url:"https://api-uat.extrack.com/",token:"biYB7NRdDo0sGjR2twjAyeOLvJGyq6UTng9_e3vZKjVssmvbqs5AMX1Y51OaruB_ULKC2BACRUB3Yh07doHWFPNKvi_YIPPEDZyRsX6xahhHc20D-TNUb-vqXC7Xb-en_prkSa-04bssCGPUqhEcZm5hTnzNlfqtHM32PyE4S2gVA1tUa6fSV8ghR_0BJMfgiHL-HsjhZ49mYMMsNA22TerQroBOYCKw00aaQJd-8XL6oT9LPo-9eTXv4VYjiZrauD2i0PW-zQCtChYvC1MKioZaFRPaI2XYII44aPBFzf0k1wyxsIEvNZxhyNnQIn6dn0bhZJpQzlD5yZMJ2w2Tbtn0Gfn3u64R1Dzz5hK7rz6MVt9bvfq0ePkViqyEVI6TcqSQcdniQObg2FyWQb44SIlumEDb7qpPb-iBIJrUOo37vOiQebEFhZHaZsUKQRcb6BsYnl23KNTPUs3vax24UvKLOSfFTcl9MhqE7Hjh67ToqmeRO8p5ToKkDwbDc7tlWmf7kmylRfDkyqQT3v3QDsfvrFERkiXOVwxo0-BzB97W0OsPPNEqk-uRejtpHnKpl__8x-vIDIft-6yRVuCamGRlz4O1HWxS1gk7Rbing6EzTW7255GRJegpH7mvyMS0BKkPT2N4g4PL_HD34WINlS5dDudSyEoQsDepCSk3Do9iVIq0ZjjCpmtQKhBrjUGzsSKjOnWCCEXUOIDHSgpEJLuqV9KzRb86N_764iqMrvHId3GcqaDNXU9Gy0cL5Wf_aH2ds8pn-H_rbt_wvckUnFFLyNPVR9NJ5hdVKX3XAe3HIBwgKnQePnsL8kxMMn5Y2NjDiUPWHmY7bFHAKFMxu_GXufS21fOuNePxrLDbInKlKOiB-vV1LwTV60jbJszdSP4VPudImrj-jlH72h6vxrmsYdlpc62S3eQmQhvHP3kxKwUrdaG9bm5r6EX558q2oB0GhoVkknWuegjkvvSIiePRnL_SeLQsfYVt75f8GKUNk6ujq8Ce3tiCIwFZ9qXwiCZTOFMdqf8j3u5skWMQzJQ4iaNFsBH_azcKizWgN-O3EJ5ttHMSiv3EDoGJqSyVAis-Lzu-QYiIbMvyNR9gzg",templatesStem:"V1.0/WorkFlow/Templates",templateSaveStem:"V1.0/WorkFlow/Template",templateStem:"V1.0/Workflow/Template",projectsStem:"V1.0/Project",doaStem:"V1.0/WorkFlow/DelegationOfAuthority",contactStem:`V1.0/Project/${d}/Directory/Contacts`};function y(o){s(void 0),o!==void 0&&k(!0),setTimeout(()=>{console.log("---> Set template: ",o),s(o),k(!1)},400)}function j(o){o.preventDefault(),W(!c)}function v(o){switch(o.target.id){case"templateName":s({...t,Title:o.target.value});break;case"wfNote":s({...t,Message:o.target.value});break;default:break}}const B=o=>["InitiatorOptionsStart","IsAutoEscalated","IsSkipStepAllowed","IsDelegationAllowed","StepsDelegationOfAuthorityDependant"].includes(o);function m(o){const{id:a,name:l,value:r,type:n,checked:_}=o.target;B(l)?(console.log("🚀 changeCheckboxHandler: ",l,_),s({...t,[l]:_})):(console.log("🚀 changeRadioHandler: ",l,r),s({...t,[l]:r}))}function L(o){console.log("addStep at:",o,"currentWorkflow: ",t.WorkFlowTemplateSteps);const a=[...t.WorkFlowTemplateSteps];a.map((l,r)=>({...l,StepNumber:r>=o?++l.StepNumber:l.StepNumber})),a.push(z(++o)),console.log("----> templateStepsToUpdate: ",a),s({...t,WorkFlowTemplateSteps:a})}async function q(o){console.log("----> removeStep: ",o),p(!0);try{let a=await new Promise((n,_)=>{R.current=n,S.current=_});p(!1);const l=[...t.WorkFlowTemplateSteps].filter(n=>n.StepNumber===o)[0];l.IsDeleted=!0,l.StepNumber=0;const r=[...t.WorkFlowTemplateSteps].filter(n=>n.StepNumber!==-1);r.map((n,_)=>({...n,StepNumber:++_>=o?--n.StepNumber:n.StepNumber})),s({...t,WorkFlowTemplateSteps:r})}catch(a){p(!1)}}function M(o,a){console.log("----> removeStepItem: ",o,a);const l=[...t.WorkFlowTemplateSteps[o-1].WorkFlowTemplateStepItems].filter(n=>n.ItemOrder!==a);l.map((n,_)=>({...n,StepNumber:++_>=a?--n.ItemOrder:n.ItemOrder}));const r=[...t.WorkFlowTemplateSteps];r[o-1].WorkFlowTemplateStepItems=l,s({...t,WorkFlowTemplateSteps:r})}function x(o){const a=[...t.WorkFlowTemplateSteps];a[o-1].WorkFlowTemplateStepItems.push(U(a[o-1].WorkFlowTemplateStepItems.length+1)),s({...t,WorkFlowTemplateSteps:a})}function V(o,a,l){const r=[...t.WorkFlowTemplateSteps];r[o-1].WorkFlowTemplateStepItems[a-1]=l,s({...t,WorkFlowTemplateSteps:r})}function H(o,a){const l=[...t.WorkFlowTemplateSteps].map((r,n)=>({...r,IsDraft:r.StepNumber>o&&!a.IsDraft?!1:r.IsDraft}));l[o-1]=a,s({...t,WorkFlowTemplateSteps:l})}function K(o,a){const l=t?.WorkFlowTemplateSteps.filter(r=>r.StepNumber===o)[0];w(e.createElement($,{stepJson:l,onUpdate:r=>H(o,r),viewportPosition:a,onClose:()=>w(null)}))}function Q(o,a,l){const r=t?.WorkFlowTemplateSteps.filter(n=>n.StepNumber===o)[0].WorkFlowTemplateStepItems[a-1];f(e.createElement(ee,{stepItemJson:r,onUpdate:n=>V(o,a,n),viewportPosition:l,onClose:()=>f(null)}))}const z=o=>({GUID:ne(),WorkFlowTemplateGUID:t?.GUID,StepNumber:o,StepDurationDays:1,StepReminderDays:1,WorkFlowStepRequiredApprovalCode:"A",Title:"New Step",IsInactive:!1,IsDeleted:!1,RowVersion:"AAAAAAAQLJw=",WorkFlowTemplateStepItems:[U(1)]}),U=o=>({WorkFlowTemplateGUID:t?.GUID,Title:"New StepItem",ItemOrder:o,IsInactive:!1,IsDeleted:!1,RowVersion:"AAAAAAAQLKE=",WorkFlowTemplateStepItemUsers:[],WorkFlowTemplateStepItemMemberPositionRoles:[]}),G=c&&e.createElement("div",{className:"form"},e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Workflow Title:"),e.createElement("div",{className:"forms"},e.createElement("input",{type:"text",name:"templateName",id:"templateName",value:t?.Title,onChange:v,disabled:t?.TemplateLocked}))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Steps DOA Dependant:"),e.createElement("div",{className:"forms",onChange:m},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"StepsDelegationOfAuthorityDependant",id:"StepsDelegationOfAuthorityDependant",defaultChecked:t?.StepsDelegationOfAuthorityDependant===!0,disabled:!0})))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Workflow Message",e.createElement("br",null),"(Sent to Users): "),e.createElement("div",{className:"forms"},e.createElement("textarea",{name:"wfNote",id:"wfNote",cols:60,rows:8,value:t?.Message,onChange:v,disabled:t?.TemplateLocked}))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Workflow Outcome Decided By:"),e.createElement("div",{className:"forms",onChange:m},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowOutcomeDecidedByCode",id:"WorkFlowOutcomeDecidedByCodeA",value:"A",defaultChecked:t?.WorkFlowOutcomeDecidedByCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowOutcomeDecidedByCodeA"},"Final step outcome")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowOutcomeDecidedByCode",id:"WorkFlowOutcomeDecidedByCodeB",value:"B",defaultChecked:t?.WorkFlowOutcomeDecidedByCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowOutcomeDecidedByCodeB"},"Lowest of all step outcomes")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Step Approvals Required:"),e.createElement("div",{className:"forms",onChange:m},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowStepRequiredApprovalCode",id:"WorkFlowStepRequiredApprovalCodeA",value:"A",defaultChecked:t?.WorkFlowStepRequiredApprovalCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowStepRequiredApprovalCodeA"},"All step items completed")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowStepRequiredApprovalCode",id:"WorkFlowStepRequiredApprovalCodeB",value:"B",defaultChecked:t?.WorkFlowStepRequiredApprovalCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowStepRequiredApprovalCodeB"},"Any step item completed")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowStepRequiredApprovalCode",id:"WorkFlowStepRequiredApprovalCodeC",value:"C",defaultChecked:t?.WorkFlowStepRequiredApprovalCode==="C",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowStepRequiredApprovalCodeC"},"All step items unless rejected")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Initiator Options-Start:"),e.createElement("div",{className:"forms",onChange:m},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"checkbox",name:"InitiatorOptionsStart",id:"InitiatorOptionsStart",defaultChecked:t?.InitiatorOptionsStart===!0,disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"InitiatorOptionsStart"},"When starting a workflow: Initiator can edit step durations, roles and participants")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Initiator Options-During:"),e.createElement("div",{className:"forms",onChange:m},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeA",value:"A",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeA"},"While workflow in progress Initiator can edit step participants")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeB",value:"B",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeB"},"While workflow in progress Initiator can skip steps")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeC",value:"C",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="C",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeC"},"No Options")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeD",value:"D",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="D",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeD"},"Initiator Can Stop Workflow")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"On Rejection:"),e.createElement("div",{className:"forms",onChange:m},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowRejectionActionCode",id:"WorkFlowRejectionActionCodeA",value:"A",defaultChecked:t?.WorkFlowRejectionActionCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowRejectionActionCodeA"},"Continue to next step")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowRejectionActionCode",id:"WorkFlowRejectionActionCodeB",value:"B",defaultChecked:t?.WorkFlowRejectionActionCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowRejectionActionCodeB"},"Back to workflow intiator")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowRejectionActionCode",id:"WorkFlowRejectionActionCodeC",value:"C",defaultChecked:t?.WorkFlowRejectionActionCode==="C",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowRejectionActionCodeC"},"Reset and send back to previous step")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Is Auto Escalated:"),e.createElement("div",{className:"forms",onChange:m},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"IsAutoEscalated",id:"IsAutoEscalated",defaultChecked:t?.IsAutoEscalated===!0,disabled:t?.TemplateLocked})))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Is Skip Step Allowed:"),e.createElement("div",{className:"forms",onChange:m},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"IsSkipStepAllowed",id:"IsSkipStepAllowed",defaultChecked:t?.IsSkipStepAllowed===!0,disabled:t?.TemplateLocked})))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Is Delegation Allowed:"),e.createElement("div",{className:"forms",onChange:m},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"IsDelegationAllowed",id:"IsDelegationAllowed",defaultChecked:t?.IsDelegationAllowed===!0,disabled:t?.TemplateLocked})))));return e.createElement(te.Provider,{value:{addStep:L,removeStep:q,addStepItem:x,removeStepItem:M,editStep:K,editStepItem:Q,apiConfig:O,currentWorkflow:t,doa:N,setDoa:T,contacts:g,setContacts:D,currentProjectId:d,setCurrentProjectId:I,showJson:u,setShowJson:C}},e.createElement("div",{className:"App"},e.createElement("header",{className:"App-header"},e.createElement(X,{onChangeTemplate:y})),e.createElement("main",{className:"App-main"},t!==void 0&&e.createElement("p",null,e.createElement("a",{href:"#",onClick:j},e.createElement(ae,{icon:c?re:le,className:"link-icon"}),c?"hide":"show"," config")),F?e.createElement("div",{className:"pageSpinners"},e.createElement(E,{size:10,color:"#EEE"}),e.createElement(E,{size:10,color:"#EEE"}),e.createElement(E,{size:10,color:"#EEE"})):G,e.createElement(Y,{steps:t}),t!==void 0&&u&&e.createElement(oe,{src:t.WorkFlowTemplateSteps,theme:"monokai",displayDataTypes:!1,iconStyle:"square",enableClipboard:!1,collapsed:2})),h&&e.createElement(Z,{resolver:R.current,rejecter:S.current}),A,b))}export default se;
