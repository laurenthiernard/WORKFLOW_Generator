import e from"../../web_modules/react.js";import m from"./Step.js";import c from"./InterStep.js";import s from"./WorlkflowEditor.module.css.proxy.js";import{FontAwesomeIcon as i}from"../../web_modules/@fortawesome/react-fontawesome.js";import{faGripLines as E}from"../../web_modules/@fortawesome/free-solid-svg-icons.js";export default function d(t){const{Title:f,WorkFlowTemplateSteps:n,TemplateLocked:l}=t.steps||{},a=t.steps&&Object.keys(t.steps).length>0&&t.steps.constructor===Object,_=n!==void 0?n.sort((o,r)=>o.StepNumber-r.StepNumber):[],p=a?e.createElement("div",{className:s.WorkflowContainer},e.createElement(m,{type:"start",stepJson:{StepNumber:0}}),_.map((o,r)=>e.createElement("div",{key:o.StepNumber,className:s.StepGroup},e.createElement(m,{type:"inner",stepJson:o,isLocked:l}),r<_.length-1&&e.createElement(c,{stepJson:{StepNumber:++r}}))),e.createElement(m,{type:"end",stepJson:{StepNumber:_.length}})):"";return e.createElement(e.Fragment,null,a&&e.createElement("div",{className:s.dragPanel},e.createElement("div",{className:s.newStep,id:"step",draggable:!l},e.createElement(i,{icon:E})),e.createElement("div",null,"Drag new step into template")),p)}
