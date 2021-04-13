import.meta.env={"MODE":"dev","NODE_ENV":"dev"};import e,{useState as i,useRef as P}from"../web_modules/react.js";import"./App.css.proxy.js";import G from"./components/WorlkflowInterface.js";import z from"./components/WorlkflowEditor.js";import Z from"./components/ConfirmationModal.js";import $ from"./components/EditStepModal.js";import ee from"./components/EditStepItemModal.js";import te from"./WorkflowContext.js";import E from"../web_modules/react-spinners/SquareLoader.js";import oe from"../web_modules/react-json-view.js";import{FontAwesomeIcon as ae}from"../web_modules/@fortawesome/react-fontawesome.js";import{faAngleUp as le,faAngleDown as re}from"../web_modules/@fortawesome/free-solid-svg-icons.js";import{v4 as ne}from"../web_modules/uuid.js";function se({}){const[u,v]=i(!1),[t,s]=i(),[W,w]=i(!1),[c,A]=i(!1),[d,F]=i(window.SelectedProject),[I,p]=i(!1),[h,k]=i(null),[b,f]=i(null),R=P(null),S=P(null),[T,N]=i([]),[g,D]=i([]),O=import.meta.env.MODE==="production"?{env:"prod",url:"/api/",token:"",templatesStem:"WorkFlowTemplate/Templates",templateSaveStem:"WorkFlowTemplate",templateStem:"WorkFlowTemplate/Template",projectsStem:"Project/Load",doaStem:"WorkFlowDelegationOfAuthority/Load",contactStem:`ProjectContact/DetailedContactByProject?RootProjectId=${d}`}:{env:"dev",url:"https://api-uat.extrack.com/",token:"sPB5AizNVPeY-IPBOACn8xSNXxKhiJp0-xDkMjs210osvvuj-iNZEnjb3KfREqDDClmU3H2mpsuPEvfyn1QUBXwHqIDMfRR42SsUXkUA39ylrZcA2KuzGBgwqwROYxjc_7b7nG_wzR4fM-bpAfbUR08ghJ8DHqsSDpT3ob5fNyCIACdhUtoA-5MQmPIFb1H7VineJ6C5R2UrW4TLbpEbjZQtYb5VYfjsAT0W9lSq_0Vlic1jJYze5OgbY8GvZrssY8gOj0EkiQtw6fu8EeIJC0OxsFXCi5S-ldfhFCmel2W5v7wInbYtkNUiH1tYCeGl8XKvfbvGw82TmXiLLedfLTElOJ-6JqH8mT23VuThrwr3FdSkYe7Tk_h6lx8qZHjLbY_ScSQ7tPWp3hkr4Vg0NE7oesBERmbWM-a1Wu-34_wC_X5WIiClyVZ_pukULaWR9TjsOsB3kDX79twMygSKIIarH9TMAdbTp0GVv-NtgvHe3ptaZBhaHAW_uVOsjj7eu24AC5itrrEhHV7f27xPd0SL82b8_C5GoYDh21a3v-0giKLkFJmhPnI_qXkdMOSSMANXJRlAU_RJ95RYPjMe6N06ZRLfUv9WXXxJ7QS5iwoA1koEpLg2ncx6DvDfQbcrSViFsnAu5QsHHwywnpBYNTOrPjRGTxBa8tKanqGw17qJ6xcQKdAvcbPyf1IVPZ8nS_fIZ3m8NnveEh5_1QlWnueVgbbaRaT79VITwwf-tN4d6t715XaR7R9c_PiB25mLCGEYv8BPhHPedk5CcLAcpHUPLJryBTiGsdJsZeEDMuF-WqvS_dXTPuASdYR38cOI21Q9HsKhICzGznPEAZB83rQWiVNOCBcB0Nlea1rMn5QQzi3SfWVC_apzIzIlNwHcgZhJD8OkdxHbnY0HNjDlRWAKKYqFzpJQNZWA9jIxFmnKHczVhRYeBZMxAU38eiHgd6LyS0W3rJ0XteDCmFDcHEkgkox9F1rg8_7udpq_z0KdmYvKARFFdtsKI9nHToN-swazlsFtThbaxXTi8i_h_Y0VYBNwKP_LILiAhFinOn6ikB3M7wMyqBhUrAhXcFyk1yCHB_SXH5l3DIkIQLV2ALbx4-MbCowxcja-gw-neZM",templatesStem:"V1.0/WorkFlow/Templates",templateSaveStem:"V1.0/WorkFlow/Template",templateStem:"V1.0/Workflow/Template",projectsStem:"V1.0/Project",doaStem:"V1.0/WorkFlow/DelegationOfAuthority",contactStem:`V1.0/Project/${d}/Directory/Contacts`};function j(o){s(void 0),o!==void 0&&w(!0),setTimeout(()=>{console.log("---> changeTemplateHandler:: Set template: ",o),s(o),w(!1)},400)}function y(o){o.preventDefault(),A(!c)}function C(o){switch(o.target.id){case"templateName":s({...t,Title:o.target.value});break;case"wfNote":s({...t,Message:o.target.value});break;default:break}}const B=o=>["InitiatorOptionsStart","IsAutoEscalated","IsSkipStepAllowed","IsDelegationAllowed","StepsDelegationOfAuthorityDependant"].includes(o);function _(o){const{id:a,name:l,value:r,type:n,checked:m}=o.target;B(l)?(console.log("🚀 changeCheckboxHandler: ",l,m),s({...t,[l]:m})):(console.log("🚀 changeRadioHandler: ",l,r),s({...t,[l]:r}))}function L(o){console.log("addStep at:",o,"currentWorkflow: ",t.WorkFlowTemplateSteps);const a=[...t.WorkFlowTemplateSteps];a.map((l,r)=>({...l,StepNumber:r>=o?++l.StepNumber:l.StepNumber})),a.push(K(++o)),console.log("----> templateStepsToUpdate: ",a),s({...t,WorkFlowTemplateSteps:a})}async function x(o){console.log("----> removeStep: ",o),p(!0);try{let a=await new Promise((n,m)=>{R.current=n,S.current=m});p(!1);const l=[...t.WorkFlowTemplateSteps].filter(n=>n.StepNumber===o)[0];l.IsDeleted=!0,l.StepNumber=100;const r=[...t.WorkFlowTemplateSteps].filter(n=>n.StepNumber!==-1);r.map((n,m)=>({...n,StepNumber:++m>=o?--n.StepNumber:n.StepNumber})),s({...t,WorkFlowTemplateSteps:r})}catch(a){p(!1)}}function M(o,a){console.log("----> removeStepItem: ",o,a);const l=[...t.WorkFlowTemplateSteps[o-1].WorkFlowTemplateStepItems].filter(n=>n.ItemOrder!==a);l.map((n,m)=>({...n,StepNumber:++m>=a?--n.ItemOrder:n.ItemOrder}));const r=[...t.WorkFlowTemplateSteps];r[o-1].WorkFlowTemplateStepItems=l,s({...t,WorkFlowTemplateSteps:r})}function q(o){const a=[...t.WorkFlowTemplateSteps];a[o-1].WorkFlowTemplateStepItems.push(U(a[o-1].WorkFlowTemplateStepItems.length+1)),s({...t,WorkFlowTemplateSteps:a})}function H(o,a,l){const r=[...t.WorkFlowTemplateSteps];r[o-1].WorkFlowTemplateStepItems[a-1]=l,s({...t,WorkFlowTemplateSteps:r})}function V(o,a){const l=[...t.WorkFlowTemplateSteps].map((r,n)=>({...r,IsDraft:r.StepNumber>o&&!a.IsDraft?!1:r.IsDraft}));l[o-1]=a,s({...t,WorkFlowTemplateSteps:l})}function J(o,a){const l=t?.WorkFlowTemplateSteps.filter(r=>r.StepNumber===o)[0];k(e.createElement($,{stepJson:l,onUpdate:r=>V(o,r),viewportPosition:a,onClose:()=>k(null)}))}function Y(o,a,l){const r=t?.WorkFlowTemplateSteps.filter(n=>n.StepNumber===o)[0].WorkFlowTemplateStepItems[a-1];f(e.createElement(ee,{stepItemJson:r,onUpdate:n=>H(o,a,n),viewportPosition:l,onClose:()=>f(null)}))}const K=o=>({GUID:ne(),WorkFlowTemplateGUID:t?.GUID,StepNumber:o,StepDurationDays:1,StepReminderDays:1,WorkFlowStepRequiredApprovalCode:"A",Title:"New Step",IsInactive:!1,IsDeleted:!1,RowVersion:"AAAAAAAQLJw=",WorkFlowTemplateStepItems:[U(1)]}),U=o=>({WorkFlowTemplateGUID:t?.GUID,Title:"New StepItem",ItemOrder:o,IsInactive:!1,IsDeleted:!1,RowVersion:"AAAAAAAQLKE=",WorkFlowTemplateStepItemUsers:[],WorkFlowTemplateStepItemMemberPositionRoles:[]}),Q=c&&e.createElement("div",{className:"form"},e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Workflow Title:"),e.createElement("div",{className:"forms"},e.createElement("input",{type:"text",name:"templateName",id:"templateName",value:t?.Title,onChange:C,disabled:t?.TemplateLocked}))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Steps DOA Dependant:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"StepsDelegationOfAuthorityDependant",id:"StepsDelegationOfAuthorityDependant",defaultChecked:t?.StepsDelegationOfAuthorityDependant===!0,disabled:!0})))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Workflow Message",e.createElement("br",null),"(Sent to Users): "),e.createElement("div",{className:"forms"},e.createElement("textarea",{name:"wfNote",id:"wfNote",cols:60,rows:8,value:t?.Message,onChange:C,disabled:t?.TemplateLocked}))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Workflow Outcome Decided By:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowOutcomeDecidedByCode",id:"WorkFlowOutcomeDecidedByCodeA",value:"A",defaultChecked:t?.WorkFlowOutcomeDecidedByCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowOutcomeDecidedByCodeA"},"Final step outcome")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowOutcomeDecidedByCode",id:"WorkFlowOutcomeDecidedByCodeB",value:"B",defaultChecked:t?.WorkFlowOutcomeDecidedByCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowOutcomeDecidedByCodeB"},"Lowest of all step outcomes")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Step Approvals Required:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowStepRequiredApprovalCode",id:"WorkFlowStepRequiredApprovalCodeA",value:"A",defaultChecked:t?.WorkFlowStepRequiredApprovalCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowStepRequiredApprovalCodeA"},"All step items completed")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowStepRequiredApprovalCode",id:"WorkFlowStepRequiredApprovalCodeB",value:"B",defaultChecked:t?.WorkFlowStepRequiredApprovalCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowStepRequiredApprovalCodeB"},"Any step item completed")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowStepRequiredApprovalCode",id:"WorkFlowStepRequiredApprovalCodeC",value:"C",defaultChecked:t?.WorkFlowStepRequiredApprovalCode==="C",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowStepRequiredApprovalCodeC"},"All step items unless rejected")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Initiator Options-Start:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"checkbox",name:"InitiatorOptionsStart",id:"InitiatorOptionsStart",defaultChecked:t?.InitiatorOptionsStart===!0,disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"InitiatorOptionsStart"},"When starting a workflow: Initiator can edit step durations, roles and participants")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Initiator Options-During:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeA",value:"A",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeA"},"While workflow in progress Initiator can edit step participants")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeB",value:"B",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeB"},"While workflow in progress Initiator can skip steps")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeC",value:"C",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="C",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeC"},"No Options")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowInitiatorOptionsCode",id:"WorkFlowInitiatorOptionsCodeD",value:"D",defaultChecked:t?.WorkFlowInitiatorOptionsCode==="D",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowInitiatorOptionsCodeD"},"Initiator Can Stop Workflow")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"On Rejection:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowRejectionActionCode",id:"WorkFlowRejectionActionCodeA",value:"A",defaultChecked:t?.WorkFlowRejectionActionCode==="A",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowRejectionActionCodeA"},"Continue to next step")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowRejectionActionCode",id:"WorkFlowRejectionActionCodeB",value:"B",defaultChecked:t?.WorkFlowRejectionActionCode==="B",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowRejectionActionCodeB"},"Back to workflow intiator")),e.createElement("div",{className:"forms-row"},e.createElement("input",{type:"radio",name:"WorkFlowRejectionActionCode",id:"WorkFlowRejectionActionCodeC",value:"C",defaultChecked:t?.WorkFlowRejectionActionCode==="C",disabled:t?.TemplateLocked}),e.createElement("label",{htmlFor:"WorkFlowRejectionActionCodeC"},"Reset and send back to previous step")))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Is Auto Escalated:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"IsAutoEscalated",id:"IsAutoEscalated",defaultChecked:t?.IsAutoEscalated===!0,disabled:t?.TemplateLocked})))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Is Skip Step Allowed:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"IsSkipStepAllowed",id:"IsSkipStepAllowed",defaultChecked:t?.IsSkipStepAllowed===!0,disabled:t?.TemplateLocked})))),e.createElement("div",{className:"controls"},e.createElement("div",{className:"labels"},"Is Delegation Allowed:"),e.createElement("div",{className:"forms",onChange:_},e.createElement("div",null,e.createElement("input",{type:"checkbox",name:"IsDelegationAllowed",id:"IsDelegationAllowed",defaultChecked:t?.IsDelegationAllowed===!0,disabled:t?.TemplateLocked})))));return e.createElement(te.Provider,{value:{addStep:L,removeStep:x,addStepItem:q,removeStepItem:M,editStep:J,editStepItem:Y,apiConfig:O,currentWorkflow:t,doa:T,setDoa:N,contacts:g,setContacts:D,currentProjectId:d,setCurrentProjectId:F,showJson:u,setShowJson:v}},e.createElement("div",{className:"App"},e.createElement("header",{className:"App-header"},e.createElement(G,{onChangeTemplate:j})),e.createElement("main",{className:"App-main"},t!==void 0&&e.createElement("p",null,e.createElement("a",{href:"#",onClick:y},e.createElement(ae,{icon:c?re:le,className:"link-icon"}),c?"hide":"show"," config")),W?e.createElement("div",{className:"pageSpinners"},e.createElement(E,{size:10,color:"#EEE"}),e.createElement(E,{size:10,color:"#EEE"}),e.createElement(E,{size:10,color:"#EEE"})):Q,e.createElement(z,{steps:t}),t!==void 0&&u&&e.createElement(oe,{src:t.WorkFlowTemplateSteps,theme:"monokai",displayDataTypes:!1,iconStyle:"square",enableClipboard:!1,collapsed:2})),I&&e.createElement(Z,{resolver:R.current,rejecter:S.current}),h,b))}export default se;
