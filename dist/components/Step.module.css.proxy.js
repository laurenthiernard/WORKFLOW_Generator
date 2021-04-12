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
  white-space: nowrap;
  background-color: #5e94c0;
  color: snow;
  padding: 14px 12px 2px 12px;
  height: 38px;
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

._dist_components_Step_module__hovered {
  background-color: rgba(231, 231, 231, 0.5);
}
._dist_components_Step_module__hovered div {
  pointer-events: none;
}

._dist_components_Step_module__btnEditStep {
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  font-size: 15px;
  z-index: 5;
  color: white;
}
._dist_components_Step_module__btnEditStep:hover {
  color: #f0e9e9;
}

._dist_components_Step_module__title {
  width: 150px;
  display: inline-block;
  margin-left: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
}

._dist_components_Step_module__labelDraft {
  position: absolute;
  top: 0;
  left: 92px;
  padding: 1px 6px 2px 6px;
  background-color: #e37433;
  color: white;
  font-size: 8px;
  border-radius: 0 0 3px 3px;
  user-select: none;
}

._dist_components_Step_module__duration {
  position: absolute;
  top: 0px;
  left: 38px;
  padding: 1px 6px 2px 6px;
  background-color: #4981af;
  color: snow;
  font-size: 8px;
  border-radius: 0 0 3px 3px;
  user-select: none;
  text-transform: uppercase;
}
._dist_components_Step_module__durationValue {
  font-weight: bold;
  color: white;
}

._dist_components_Step_module__btnRemoveStep {
  position: absolute;
  top: 17px;
  right: 8px;
  font-size: 14px;
  color: white;
  cursor: pointer;
}
._dist_components_Step_module__btnRemoveStep:hover {
  color: #f1f1f1;
}`;let e={StepContainer:"_dist_components_Step_module__StepContainer",StepItem:"_dist_components_Step_module__StepItem",top:"_dist_components_Step_module__top",mid:"_dist_components_Step_module__mid",bot:"_dist_components_Step_module__bot",sin:"_dist_components_Step_module__sin",StepHeader:"_dist_components_Step_module__StepHeader",StepContent:"_dist_components_Step_module__StepContent",StepContentEnd:"_dist_components_Step_module__StepContentEnd",StepStart:"_dist_components_Step_module__StepStart",StepEnd:"_dist_components_Step_module__StepEnd",startBG:"_dist_components_Step_module__startBG",endBG:"_dist_components_Step_module__endBG",hovered:"_dist_components_Step_module__hovered",btnEditStep:"_dist_components_Step_module__btnEditStep",title:"_dist_components_Step_module__title",labelDraft:"_dist_components_Step_module__labelDraft",duration:"_dist_components_Step_module__duration",durationValue:"_dist_components_Step_module__durationValue",btnRemoveStep:"_dist_components_Step_module__btnRemoveStep"};export default e;const n=document.createElement("style"),t=document.createTextNode(code);n.type="text/css",n.appendChild(t),document.head.appendChild(n);
