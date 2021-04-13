import l,{useState as a,useEffect as P,useContext as se,useRef as F}from"../../web_modules/react.js";import re from"../WorkflowContext.js";import W from"./SelectSearchable.js";import ie from"./ConfigModal.js";import de from"./ConfirmationModal.js";import{FontAwesomeIcon as me}from"../../web_modules/@fortawesome/react-fontawesome.js";import{faLock as fe,faLockOpen as pe}from"../../web_modules/@fortawesome/free-solid-svg-icons.js";export default function ue(u){const[M,I]=a([]),[E,N]=a([]),o=se(re),[A,T]=a(!1),[h,v]=a(!1),[H,U]=a(null),[x,g]=a(!1),j=F(null),C=F(null),[O,_]=a("Save"),s=o?.currentWorkflow,i=o?.apiConfig.url,b=o?.apiConfig.token;let R=!0,f=s?.TemplateLocked;const[J,B]=a([]),[q,D]=a([]),[c,L]=a(window.SelectedProjectGUID),[w,X]=a(window.SelectedTemplateGUID);P(()=>{const e={selectedProjectID:o?.currentProjectId,selectedProjectGUID:c,selectedTemplateGUID:w};for(let t in e)e[t]===void 0&&delete e[t];console.log("%c     HTML vars     ","background-color:red;color:white;",Object.keys(e).length>0?e:"No values set"),w!==void 0&&R===!0&&(G(w),R=!1),Y(),K(),o?.currentProjectId!==void 0&&$(o?.currentProjectId)},[]),P(()=>{c!==void 0&&(z(),$())},[c]),P(()=>{if(s!==void 0&&s.StepsDelegationOfAuthorityDependant===!0){const e=s.WorkFlowTemplateSteps?.filter(n=>n.IsDeleted===!1).map(n=>n.WorkFlowTemplateStepItems?.every(r=>r.WorkFlowTemplateStepItemMemberPositionRoles.length>0)),t=e?.every(n=>n===!0);t===!0?v(!1):v(!0)}f=s?.TemplateLocked,console.log("----> UseEffect:: currentWorkflow changed: ",s),_("Save")},[s]);const k=new Headers;k.append("Authorization",`Bearer ${b}`),k.append("Content-Type","application/x-www-form-urlencoded");const p={method:"GET",headers:k,redirect:"follow"};function z(){fetch(`${i}${o?.apiConfig.templatesStem}?RootProjectGuid=${c}`,p).then(e=>e.json()).then(e=>{console.log("%c Fetching Templates List","background:pink;color:white;",e),I(e)}).catch(e=>console.log("error",e))}function G(e){console.log("----> fetchTemplate: ",e),fetch(`${i}${o?.apiConfig.templateStem}/${e}?RootProjectGuid=${c}`,p).then(t=>t.json()).then(t=>{console.log("%c Fetch and set Template ","background:purple;color:white;",t),u.onChangeTemplate(t)}).catch(t=>console.log("error",t))}function V(){fetch(`${i}${o?.apiConfig.templatesStem}?RootProjectGuid=${c}`,p).then(e=>e.json()).then(e=>{console.log("%c Fetching Templates ","background:purple;color:white;",e),I(e)}).catch(e=>console.log("error",e))}function Y(){fetch(`${i}${o?.apiConfig.projectsStem}`,p).then(e=>e.json()).then(e=>{N(e)}).catch(e=>console.log("error",e))}function K(){fetch(`${i}${o?.apiConfig.doaStem}?RootProjectGuid=${c}`,p).then(e=>e.json()).then(e=>{const t=o?.apiConfig.env=="prod"?e.data:e;o?.setDoa(t)}).catch(e=>console.log("error",e))}function $(){fetch(`${i}${o?.apiConfig.contactStem}`,p).then(e=>e.json()).then(e=>{console.log("%c Fetching contacts ","background:gold;color:white;",e);const t=e.filter(d=>d.User),n=t.map(d=>d.User.GUID),r=t.filter((d,S)=>!n.includes(d.User.GUID,S+1));console.log(" ----> %c Filtered: ","background:gold;color:white;",r),o?.setContacts(r)}).catch(e=>console.log("error",e))}function Q(e){console.log("----> changeTemplateHandler: ",e),X(e),G(e)}function Z(e){let t=e.pageX<document.body.clientWidth-310?e.pageX+20:e.pageX-315;T(!0),U(l.createElement(ie,{projectList:E,viewportPosition:{y:e.pageY+35,x:t-150},onClose:ee,onSubmit:te}))}function ee(e){U(null)}function te({title:e,isDOADependant:t}){console.log("Create New Template config: ",{title:e,isDOADependant:t}),u.onChangeTemplate(ce(e,t))}function oe(e){le(),g(!0)}async function le(){try{let e=await new Promise((n,r)=>{j.current=n,C.current=r});g(!1),console.log("----> Lock confirmed!");const t={...s,TemplateLocked:!0};u.onChangeTemplate(t),y(t)}catch(e){g(!1),console.log("----> Lock cancelled")}}function ne(e){y()}function y(e){const t=e||s;console.log("Template to save:",t),_("Saving...");const n=new Headers;n.append("Authorization",`Bearer ${b}`),n.append("Content-Type","application/json");const r=JSON.stringify(t),d={method:"PUT",headers:n,body:r},S={method:"POST",headers:n,body:r};fetch(`${i}${o?.apiConfig.templateSaveStem}?RootProjectGuid=${c}`,A?S:d).then(m=>m.json()).then(m=>{console.log("%c Fetching Workflow ","background:red;color:white;"),console.log("----> Workflow response: ",m),_("Saved"),V(),D([m]),u.onChangeTemplate(m),T(!1)}).catch(m=>console.log("error",m))}const ce=(e,t)=>({ProjectGUID:c,ExTrackModuleId:15,ModuleName:"Timesheets",TemplateLocked:!1,Title:e,Message:"",WorkFlowOutcomeDecidedByCode:"A",WorkFlowStepRequiredApprovalCode:"A",InitiatorOptionsStart:!1,WorkFlowInitiatorOptionsCode:"A",WorkFlowRejectionActionCode:"A",IsAutoEscalated:!1,IsSkipStepAllowed:!1,IsDelegationAllowed:!1,StepsDelegationOfAuthorityDependant:t,IsInactive:!1,IsDeleted:!1,WorkFlowTemplateSteps:[]});function ae(e){o?.setShowJson(!o?.showJson)}return l.createElement("div",{className:"App-header-content"},l.createElement("div",null,window.SelectedProjectGUID===void 0&&l.createElement("div",{className:"projectSelect"},l.createElement("h1",null,"Select a project:"),l.createElement(W,{items:E.map(e=>({label:e.ShortName,GUID:e.GUID,ProjectId:e.Id})),selectedItems:J.map(e=>({label:e.label,GUID:e.GUID,ProjectId:e.ProjectId})),allowMultiple:!1,width:"m",onSelectItem:e=>{e.length>0?(console.log("Project selected: ",e[0]),o?.setCurrentProjectId(e[0].ProjectId),L(e[0].GUID)):L(void 0),B(e)}})),c!==void 0&&l.createElement("div",{className:"templateSelect"},l.createElement("h1",null,"Select a template:"),l.createElement(W,{items:M.map(e=>({label:e.Title,GUID:e.GUID})),selectedItems:q.map(e=>({label:e.label||e.Title,GUID:e.GUID})),allowMultiple:!1,width:"m",onSelectItem:e=>{console.log("----> item: ",e),e.length>0?Q(e[0].GUID):u.onChangeTemplate(void 0),D(e)}}))),c!==void 0&&l.createElement("div",null,l.createElement("button",{className:"btn",onClick:Z},"Create a new template")),l.createElement("div",null,s!==void 0&&l.createElement("div",{className:"actionBtns"},l.createElement("button",{className:"btn",onClick:oe,disabled:h||f},l.createElement(me,{icon:f?fe:pe}),f?"Template locked":"Lock template"),l.createElement("button",{className:"btn",onClick:ne,disabled:h||f},O),l.createElement("input",{type:"checkbox",name:"showJson",id:"showJson",onChange:ae,checked:o?.showJson}),l.createElement("label",{htmlFor:"showJson",title:"Editor 210414 v.1"},"Json")),l.createElement("div",{className:"actionMsgs"},f?"Locked template cannot be Edited/Saved":h?"Please set all DOA roles to allow Locking/Saving":"")),H,x&&l.createElement(de,{type:"lock",resolver:j.current,rejecter:C.current}))}
