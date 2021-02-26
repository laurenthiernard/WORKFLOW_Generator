import React from "../../_snowpack/pkg/react.js";
import Step from "./Step.js";
import InterStep from "./InterStep.js";
import styles from "./WorlkflowEditor.module.css.proxy.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faGripLines} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
export default function WorlkflowEditor(props) {
  const {Title, WorkFlowTemplateSteps, TemplateLocked} = props.steps || {};
  const isWorkflowSelected = props.steps && Object.keys(props.steps).length > 0 && props.steps.constructor === Object;
  const orderedSteps = WorkFlowTemplateSteps !== void 0 ? WorkFlowTemplateSteps.sort((a, b) => a.StepNumber - b.StepNumber) : [];
  const steps = isWorkflowSelected ? /* @__PURE__ */ React.createElement("div", {
    className: styles.WorkflowContainer
  }, /* @__PURE__ */ React.createElement(Step, {
    type: "start",
    stepJson: {StepNumber: 0}
  }), orderedSteps.map((step, index) => /* @__PURE__ */ React.createElement("div", {
    key: step.StepNumber,
    className: styles.StepGroup
  }, /* @__PURE__ */ React.createElement(Step, {
    type: "inner",
    stepJson: step
  }), index < orderedSteps.length - 1 && /* @__PURE__ */ React.createElement(InterStep, {
    stepJson: {StepNumber: ++index}
  }))), /* @__PURE__ */ React.createElement(Step, {
    type: "end",
    stepJson: {StepNumber: orderedSteps.length}
  })) : "";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, isWorkflowSelected && /* @__PURE__ */ React.createElement("div", {
    className: styles.dragPanel
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.newStep,
    id: "step",
    draggable: !TemplateLocked
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faGripLines
  })), /* @__PURE__ */ React.createElement("div", null, "Drag new step into template")), steps);
}
