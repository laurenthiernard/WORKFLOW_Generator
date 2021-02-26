export let code=`._components_StepItem_module__StepItemContainer {
  position: relative;
  min-width: 136px;
  font-size: 13px;
  margin: 6px;
  background-color: rgba(231, 231, 231, 0.5);
  color: #7a7a7a;
  border: 1px solid darkgrey;
  padding: 14px 20px 14px 26px;
  border-radius: 4px;
  overflow: hidden;
}

._components_StepItem_module__btnRemoveStep {
  cursor: pointer;
  position: absolute;
  color: darkgrey;
  top: -3px;
  right: -2px;
}
._components_StepItem_module__btnRemoveStep:hover {
  color: gray;
}

._components_StepItem_module__btnEditStep {
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dfdfdf;
  top: -2px;
  left: -1px;
  height: calc(100% + 2px);
  width: 20px;
  background-color: darkgrey;
}
._components_StepItem_module__btnEditStep:hover {
  color: #f0e9e9;
  background-color: gray;
}`;let n={StepItemContainer:"_components_StepItem_module__StepItemContainer",btnRemoveStep:"_components_StepItem_module__btnRemoveStep",btnEditStep:"_components_StepItem_module__btnEditStep"};export default n;const e=document.createElement("style"),t=document.createTextNode(code);e.type="text/css",e.appendChild(t),document.head.appendChild(e);
