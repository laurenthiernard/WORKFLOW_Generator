export let code=`._dist_components_Step_module__StepContainer {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  border: 1px solid #dfdfdf;
}
._dist_components_Step_module__StepContainer ._dist_components_Step_module__StepItem {
  background: url(./connectors.png) no-repeat scroll 0 0;
}
._dist_components_Step_module__StepContainer ._dist_components_Step_module__StepItem._dist_components_Step_module__top {
  background-position: 2px -42%;
}
._dist_components_Step_module__StepContainer ._dist_components_Step_module__StepItem._dist_components_Step_module__mid {
  background-position: 2px 51%;
}
._dist_components_Step_module__StepContainer ._dist_components_Step_module__StepItem._dist_components_Step_module__bot {
  background-position: 2px 142%;
}
._dist_components_Step_module__StepContainer ._dist_components_Step_module__StepItem._dist_components_Step_module__sin {
  background: transparent url(./greypix.png) repeat-x scroll center center;
}
._dist_components_Step_module__StepHeader {
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: space-between;
  background-color: #5e94c0;
  color: snow;
  padding: 2px 12px 2px 12px;
  min-height: 38px;
}
._dist_components_Step_module__StepContent {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  transition: all 0.25s ease-out;
}
._dist_components_Step_module__StepContentEnd {
  height: 100%;
}
._dist_components_Step_module__StepStart {
  flex: 0 0 120px;
  min-height: 180px;
}
._dist_components_Step_module__StepEnd {
  flex: 1 0 auto;
  min-width: 200px;
}

._dist_components_Step_module__startBG {
  position: relative;
  right: -45px;
  width: 90px;
  height: 20px;
  background: transparent url(./markers.png) no-repeat left calc(50% - 0.5px);
}

._dist_components_Step_module__endBG {
  position: relative;
  top: calc(50% - 1px);
  transform: translateY(-50%);
  left: -32px;
  width: 90px;
  height: 32px;
  background: transparent url(./markers.png) no-repeat right center;
  background-attachment: scroll;
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

._dist_components_Step_module__labelDraft {
  position: absolute;
  top: 0;
  left: 42px;
  padding: 1px 6px 2px 6px;
  background-color: #e37433;
  color: white;
  font-size: 7px;
  border-radius: 0 0 3px 3px;
  user-select: none;
}

._dist_components_Step_module__btnEditStep {
  cursor: pointer;
  font-size: 15px;
  z-index: 5;
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
}`;let e={StepContainer:"_dist_components_Step_module__StepContainer",StepItem:"_dist_components_Step_module__StepItem",top:"_dist_components_Step_module__top",mid:"_dist_components_Step_module__mid",bot:"_dist_components_Step_module__bot",sin:"_dist_components_Step_module__sin",StepHeader:"_dist_components_Step_module__StepHeader",StepContent:"_dist_components_Step_module__StepContent",StepContentEnd:"_dist_components_Step_module__StepContentEnd",StepStart:"_dist_components_Step_module__StepStart",StepEnd:"_dist_components_Step_module__StepEnd",startBG:"_dist_components_Step_module__startBG",endBG:"_dist_components_Step_module__endBG",duration:"_dist_components_Step_module__duration",title:"_dist_components_Step_module__title",hovered:"_dist_components_Step_module__hovered",labelDraft:"_dist_components_Step_module__labelDraft",btnEditStep:"_dist_components_Step_module__btnEditStep",btnRemoveStep:"_dist_components_Step_module__btnRemoveStep"};export default e;const n=document.createElement("style"),t=document.createTextNode(code);n.type="text/css",n.appendChild(t),document.head.appendChild(n);
