import t,{useContext as f}from"../../web_modules/react.js";import p from"../WorkflowContext.js";import o from"./StepItem.module.css.proxy.js";import{FontAwesomeIcon as a}from"../../web_modules/@fortawesome/react-fontawesome.js";import{faCog as d,faWindowClose as w}from"../../web_modules/@fortawesome/free-solid-svg-icons.js";export default function u({stepItemJson:{Title:i,ItemOrder:m},stepNumber:n,isLocked:s}){const r=f(p);function c(e){let _=e.pageX<document.body.clientWidth-310?e.pageX+20:e.pageX-315;s||r?.editStepItem(n,m,{y:e.pageY-80,x:_})}function l(e){s||r?.removeStepItem(n,m)}return t.createElement("div",{className:o.StepItemContainer},i,t.createElement("div",{className:o.btnRemoveStep,onClick:l},t.createElement(a,{icon:w})),t.createElement("div",{className:o.btnEditStep,onClick:c},t.createElement(a,{icon:d})))}
