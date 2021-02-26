export let code=`._dist_components_Step_module__StepContainer {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  border: 1px solid #dfdfdf;
}
._dist_components_Step_module__StepHeader {
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: space-between;
  background-color: #5e94c0;
  color: snow;
  padding: 2px 12px;
  min-height: 34px;
}
._dist_components_Step_module__StepContent {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  padding: 12px 6px;
  transition: all 0.25s ease-out;
}
._dist_components_Step_module__StepStart {
  flex: 0 0 120px;
  min-height: 180px;
}
._dist_components_Step_module__StepEnd {
  flex: 1 0 auto;
  min-width: 200px;
}

._dist_components_Step_module__duration {
  display: flex;
  font-weight: bold;
  color: snow;
  padding: 4px 0;
  margin: 0 12px;
  align-items: center;
}

._dist_components_Step_module__title {
  min-width: 80px;
  margin-left: 8px;
}

._dist_components_Step_module__hovered {
  background-color: rgba(231, 231, 231, 0.5);
}
._dist_components_Step_module__hovered div {
  pointer-events: none;
}

._dist_components_Step_module__btnEditStep {
  cursor: pointer;
  font-size: 15px;
  z-index: 20;
  color: white;
  margin-right: 8px;
}
._dist_components_Step_module__btnEditStep:hover {
  color: #f0e9e9;
}

._dist_components_Step_module__btnRemoveStep {
  font-size: 15px;
  color: white;
  cursor: pointer;
}
._dist_components_Step_module__btnRemoveStep:hover {
  color: #f1f1f1;
}`;let n={StepContainer:"_dist_components_Step_module__StepContainer",StepHeader:"_dist_components_Step_module__StepHeader",StepContent:"_dist_components_Step_module__StepContent",StepStart:"_dist_components_Step_module__StepStart",StepEnd:"_dist_components_Step_module__StepEnd",duration:"_dist_components_Step_module__duration",title:"_dist_components_Step_module__title",hovered:"_dist_components_Step_module__hovered",btnEditStep:"_dist_components_Step_module__btnEditStep",btnRemoveStep:"_dist_components_Step_module__btnRemoveStep"};export default n;const e=document.createElement("style"),t=document.createTextNode(code);e.type="text/css",e.appendChild(t),document.head.appendChild(e);
