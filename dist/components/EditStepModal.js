import e,{useState as c}from"../../web_modules/react.js";import t from"./EditStepModal.module.css.proxy.js";export default function S({viewportPosition:i,onUpdate:s,onClose:r,stepJson:_,stepJson:{Title:v,StepDurationDays:b}}){const[o,E]=c(_.Title),[d,u]=c(_.StepDurationDays),[m,p]=c({rejected:"back"});function n(a){const l=a.target.value;switch(a.target.id){case"duration":u(Number(l));break;case"title":E(l);break;case"rules":const P=a.target.selectedIndex;p({rejected:P===0?"back":"continue"});break;default:break}}function R(a){const l={..._,Title:o,StepDurationDays:d};s(l),r()}function U(a){r()}return e.createElement(e.Fragment,null,e.createElement("div",{className:t.backdrop,onClick:U}),e.createElement("div",{className:t.EditStepModal_Container,style:{left:i.x,top:i.y}},e.createElement("div",{className:t.EditStepModal_Header},e.createElement("h1",null,"Edit Step")),e.createElement("div",{className:t.EditStepModal_Content},e.createElement("div",{className:t.EditStepModal_Content_Row},e.createElement("h3",null,"Title"),e.createElement("div",null,e.createElement("input",{type:"text",className:t.title,name:"title",id:"title",value:o,onChange:n}))),e.createElement("div",{className:t.EditStepModal_Content_Row},e.createElement("h3",null,"Duration"),e.createElement("div",null,e.createElement("input",{type:"number",className:t.duration,name:"duration",id:"duration",min:"1",max:"99",value:d,onChange:n}))),e.createElement("div",{className:t.EditStepModal_Content_Row},e.createElement("h2",null,"Step Completion Rules"),e.createElement("h3",null,"If Rejected:"),e.createElement("select",{name:"rules",id:"rules",className:t.rules,onChange:n,value:m.rejected},e.createElement("option",{value:"back"},"Back to workflow initiator"),e.createElement("option",{value:"continue"},"Continue to next step")))),e.createElement("div",{className:t.EditStepModal_Footer},e.createElement("button",{className:`btn ${t.EditStepModal_btnOK}`,onClick:R},"OK"))))}
