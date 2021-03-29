import e,{useState as i,useRef as P}from"../web_modules/react.js";import"./App.css.proxy.js";import G from"./components/WorlkflowInterface.js";import Z from"./components/WorlkflowEditor.js";import z from"./components/ConfirmationModal.js";import Y from"./components/EditStepModal.js";import $ from"./components/EditStepItemModal.js";import ee from"./WorkflowContext.js";import p from"../web_modules/react-spinners/SquareLoader.js";import te from"../web_modules/react-json-view.js";import{FontAwesomeIcon as oe}from"../web_modules/@fortawesome/react-fontawesome.js";import{faAngleUp as le,faAngleDown as ae}from"../web_modules/@fortawesome/free-solid-svg-icons.js";import{v4 as re}from"../web_modules/uuid.js";function ne({}){const[E,v]=i(!1),[t,s]=i(),[W,u]=i(!1),[c,A]=i(!1),[w,F]=i(window.SelectedProject),[I,d]=i(!1),[h,k]=i(null),[N,f]=i(null),R=P(null),S=P(null),[b,T]=i([]),[g,D]=i([]),O={env:"dev",url:"https://api-uat.extrack.com/",token:"5sjZTPQl9k0RQGRiGDkGlnSFfXNaZ7CvciMBTjTJ1J9XoHir0SL7qIu-tBHg8b5FodCCX32XbNxhTb7Ju3GCBJK6_gmtStluJRwYn8Cqn7ZcRXQ4pHiKUAkhI9yS7RKcQnDUIQcpR3MCaGkvyLXQrZP0hOAvSfQAaOfhUQlvhJNlrHqAm19koCs523Bw5fvcUl-9hqUfEz3fy8dDwb8KpkX0bPuj5PZ8Ngk_ZZ4eiNydzzGjm-6CpuHH5jttg-kXXIsoro4nWxse5IdIlKLMrzmaQMU6sI97BKg3JhJEyfvvezc6J8KBM34rI0Px3sVfq996seSnOVu5k5GZtu_SH429OpGkN2QVkYEwR2cdCrqNUupaeERZcPnIrTR5QEfaHVp_NsfiXDs-RDfFJ-3VHJEOaUQI6OWkqdTCQRkMSvDrPKyVQPrABPsfsD9wMUL-KW383YW1pPps6nemqk3AgAzToLksD3dthjMi_-NXfbwyVsZ0wAKDJOeVdpZMQgkogQ1RKfMkmNa-9H369D_Avg2wIiqCweAZD6771Uq31sjIKDGX8DXbopEbKrKdrpQ8gGJfz-d6ictq1g5RtK--Ex8e6ZJO1Jr1987dcHm5-iBwMF8vD2KAhwWdp43qin6pisfRvoZl9Dm6-S-rtgFQdj-moRjQMGaV-egkB2oJCKwLK8B6GWGf7_RQYjwcm3kpdxbXWZUVBLPEq1EZaEn1wWj7uPN9fe7yzk8jbla4IiQ1eBafEKqpteTA__PF0_pK787sJW8KKC-vejMazSBAnSBBr6050_xR0BgzxqXq9LZ347nsbS6QlXTqIcHrlnKVEb5k4yhOtWURiuXlwYyMcBYHmgIE1SkbKvFF5Zjjri2OW3JC6RsBmXdw7KiW-rGbMjgbC8EpM0J-57rud4jxd1tfeCV2MJT49OyA2OCy_hJdQRXZ0u_t9GRma6ROJNPWMlpN4SNwMpY_mPvIT4vJJcS_i1SdwOErLP7V7OLKbMYncM6t2NH5lbn58UEiBNB7HBBNHzWh3pf3iQj49ElQySeNAJISrVVMETdll79lSLBXDldMlAKzKZ-5XEi51wpUUQ7nap47NyBD_09hVFtMnA",templatesStem:"V1.0/WorkFlow/Templates",templateSaveStem:"V1.0/WorkFlow/Template",templateStem:"",projectsStem:"V1.0/Project",doaStem:"V1.0/WorkFlow/DelegationOfAuthority",contactStem:`V1.0/Project/${w}/Directory/Contacts`};function y(o){s(void 0),o!==void 0&&u(!0),setTimeout(()=>{console.log("---> Set template: ",o),s(o),u(!1)},400)}function j(o){o.preventDefault(),A(!c)}function U(o){switch(o.target.id){case"templateName":s({...t,Title:o.target.value});break;case"wfNote":s({...t,Message:o.target.value});break;default:break}}const B=o=>["InitiatorOptionsStart","IsAutoEscalated","IsSkipStepAllowed","IsDelegationAllowed","StepsDelegationOfAuthorityDependant"].includes(o);function _(o){const{id:l,name:a,value:r,type:n,checked:m}=o.target;B(a)?(console.log("🚀 changeCheckboxHandler: ",a,m),s({...t,[a]:m})):(console.log("🚀 changeRadioHandler: ",a,r),s({...t,[a]:r}))}function M(o){console.log("addStep at:",o,"currentWorkflow: ",t.WorkFlowTemplateSteps);const l=[...t.WorkFlowTemplateSteps];l.map((a,r)=>({...a,StepNumber:r>=o?++a.StepNumber:a.StepNumber})),l.push(H(++o)),console.log("----> templateStepsToUpdate: ",l),s({...t,WorkFlowTemplateSteps:l})}async function L(o){console.log("----> removeStep: ",o),d(!0);try{let l=await new Promise((n,m)=>{R.current=n,S.current=m});d(!1);const a=[...t.WorkFlowTemplateSteps].filter(n=>n.StepNumber===o)[0];a.IsDeleted=!0,a.StepNumber=0;const r=[...t.WorkFlowTemplateSteps].filter(n=>n.StepNumber!==-1);r.map((n,m)=>({...n,StepNumber:++m>=o?--n.StepNumber:n.StepNumber})),s({...t,WorkFlowTemplateSteps:r})}catch(l){d(!1)}}function q(o,l){console.log("----> removeStepItem: ",o,l);const a=[...t.WorkFlowTemplateSteps[o-1].WorkFlowTemplateStepItems].filter(n=>n.ItemOrder!==l);a.map((n,m)=>({...n,StepNumber:++m>=l?--n.ItemOrder:n.ItemOrder}));const r=[...t.WorkFlowTemplateSteps];r[o-1].WorkFlowTemplateStepItems=a,s({...t,WorkFlowTemplateSteps:r})}function J(o){const l=[...t.WorkFlowTemplateSteps];l[o-1].WorkFlowTemplateStepItems.push(C(l[o-1].WorkFlowTemplateStepItems.length+1)),s({...t,WorkFlowTemplateSteps:l})}function K(o,l,a){const r=[...t.WorkFlowTemplateSteps];r[o-1].WorkFlowTemplateStepItems[l-1]=a,s({...t,WorkFlowTemplateSteps:r})}function Q(o,l){const a=[...t.WorkFlowTemplateSteps].map((r,n)=>({...r,IsDraft:r.StepNumber>o&&!l.IsDraft?!1:r.IsDraft}));a[o-1]=l,s({...t,WorkFlowTemplateSteps:a})}function x(o,l){const a=t?.WorkFlowTemplateSteps.filter(r=>r.StepNumber===o)[0];k(e.createElement(Y,{stepJson:a,onUpdate:r=>Q(o,r),viewportPosition:l,onClose:()=>k(null)}))}function V(o,l,a){const r=t?.WorkFlowTemplateSteps.filter(n=>n.StepNumber===o)[0].WorkFlowTemplateStepItems[l-1];f(e.createElement($,{stepItemJson:r,onUpdate:n=>K(o,l,n),viewportPosition:a,onClose:()=>f(null)}))}const H=o=>({GUID:re(),WorkFlowTemplateGUID:t?.GUID,StepNumber:o,StepDurationDays:1,StepReminderDays:1,WorkFlowStepRequiredApprovalCode:"A",Title:"New Step",IsInactive:!1,IsDeleted:!1,RowVersion:"AAAAAAAQLJw=",WorkFlowTemplateStepItems:[C(1)]}),C=o=>({WorkFlowTemplateGUID:t?.GUID,Title:"New StepItem",ItemOrder:o,IsInactive:!1,IsDeleted:!1,RowVersion:"AAAAAAAQLKE=",WorkFlowTemplateStepItemUsers:[],WorkFlowTemplateStepItemMemberPositionRoles:[]}),X=c&&e.createElement("div",{className:"form"},e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Workflow Title:"),e.createElement("div",{className:"forms"},e.createElement("input",{type:"text",name:"templateName",id:"templateName",value:t?.Title,onChange:U,disabled:t?.TemplateLocked}))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Steps DOA Dependant:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"StepsDelegationOfAuthorityDependant",id:"StepsDelegationOfAuthorityDependant",defaultChecked:t?.StepsDelegationOfAuthorityDependant===!0,disabled:!0})))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Workflow Message",e.createElement("br",null),"(Sent to Users): "),e.createElement("div",{className:"forms"},e.createElement("textarea",{name:"wfNote",id:"wfNote",cols:60,rows:8,value:t?.Message,onChange:U,disabled:t?.TemplateLocked}))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Workflow Outcome Decided By:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowOutcomeDecidedByCode",id:"WorkFlowOutcomeDecidedByCodeA",value:"A",defaultChecked:t?.WorkFlowOutcomeDecidedByCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowOutcomeDecidedByCodeA"},"Final step outcome")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowOutcomeDecidedByCode",id:"WorkFlowOutcomeDecidedByCodeB",value:"B",defaultChecked:t?.WorkFlowOutcomeDecidedByCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowOutcomeDecidedByCodeB"},"Lowest of all step outcomes")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Step Approvals Required:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowStepRequiredApprovalCode",id:"WorkFlowStepRequiredApprovalCodeA",value:"A",defaultChecked:t?.WorkFlowStepRequiredApprovalCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowStepRequiredApprovalCodeA"},"All step items completed")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowStepRequiredApprovalCode",id:"WorkFlowStepRequiredApprovalCodeB",value:"B",defaultChecked:t?.WorkFlowStepRequiredApprovalCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowStepRequiredApprovalCodeB"},"Any step item completed")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowStepRequiredApprovalCode",id:"WorkFlowStepRequiredApprovalCodeC",value:"C",defaultChecked:t?.WorkFlowStepRequiredApprovalCode==="C",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowStepRequiredApprovalCodeC"},"All step items unless rejected")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Initiator Options-Start:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"checkbox",name:"InitiatorOptionsStart",id:"InitiatorOptionsStart",defaultChecked:t?.InitiatorOptionsStart===!0,disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"InitiatorOptionsStart"},"When starting a workflow: Initiator can edit step durations, roles and participants")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Initiator Options-During:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeA",value:"A",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeA"},"While workflow in progress Initiator can edit step participants")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeB",value:"B",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeB"},"While workflow in progress Initiator can skip steps")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeC",value:"C",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="C",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeC"},"No Options")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeD",value:"D",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="D",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeD"},"Initiator Can Stop Workflow")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"On Rejection:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowRejectionActionCode",id:"WorkFlowRejectionActionCodeA",value:"A",defaultChecked:t?.WorkFlowRejectionActionCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowRejectionActionCodeA"},"Continue to next step")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowRejectionActionCode",id:"WorkFlowRejectionActionCodeB",value:"B",defaultChecked:t?.WorkFlowRejectionActionCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowRejectionActionCodeB"},"Back to workflow intiator")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowRejectionActionCode",id:"WorkFlowRejectionActionCodeC",value:"C",defaultChecked:t?.WorkFlowRejectionActionCode==="C",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowRejectionActionCodeC"},"Reset and send back to previous step")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Is Auto Escalated:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"IsAutoEscalated",id:"IsAutoEscalated",defaultChecked:t?.IsAutoEscalated===!0,disabled:t?.TemplateLocked})))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Is Skip Step Allowed:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"IsSkipStepAllowed",id:"IsSkipStepAllowed",defaultChecked:t?.IsSkipStepAllowed===!0,disabled:t?.TemplateLocked})))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Is Delegation Allowed:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"IsDelegationAllowed",id:"IsDelegationAllowed",defaultChecked:t?.IsDelegationAllowed===!0,disabled:t?.TemplateLocked})))));return e.createElement(ee.Provider,{value:{addStep:M,removeStep:L,addStepItem:J,removeStepItem:q,editStep:x,editStepItem:V,apiConfig:O,currentWorkflow:t,doa:b,setDoa:T,contacts:g,setContacts:D,currentProjectId:w,setCurrentProjectId:F,showJson:E,setShowJson:v}},e.createElement("div",{className:"App"},e.createElement("header",{className:"App-header"},e.createElement(G,{onChangeTemplate:y})),e.createElement("main",{className:"App-main"},t!==void 0&&e.createElement("p",null,e.createElement("a",{href:"#",onClick:j},e.createElement(oe,{icon:c?ae:le,className:"link-icon"}),c?"hide":"show"," config")),W?e.createElement("div",{className:"pageSpinners"},e.createElement(p,{size:10,color:"#EEE"}),e.createElement(p,{size:10,color:"#EEE"}),e.createElement(p,{size:10,color:"#EEE"})):X,e.createElement(Z,{steps:t}),t!==void 0&&E&&e.createElement(te,{src:t.WorkFlowTemplateSteps,theme:"monokai",displayDataTypes:!1,iconStyle:"square",enableClipboard:!1,collapsed:2})),I&&e.createElement(z,{resolver:R.current,rejecter:S.current}),h,N))}export default ne;
