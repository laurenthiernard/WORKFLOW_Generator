import React from "../../_snowpack/pkg/react.js";
import Step from "./Step.js";
import InterStep from "./InterStep.js";
import styles from "./WorlkflowEditor.module.css.proxy.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faGripLines} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
import {useTransition, animated} from "../../_snowpack/pkg/react-spring.js";
export default function WorlkflowEditor(props) {
  const {Title, WorkFlowTemplateSteps, TemplateLocked} = props.steps || {};
  const isWorkflowSelected = props.steps && Object.keys(props.steps).length > 0 && props.steps.constructor === Object;
  const orderedSteps = WorkFlowTemplateSteps !== void 0 ? WorkFlowTemplateSteps.sort((a, b) => a.StepNumber - b.StepNumber) : [];
  const activeOrderedSteps = orderedSteps.filter((step) => step.IsDeleted === false);
  console.log("\u{1F680} -> WorlkflowEditor -> activeOrderedSteps", activeOrderedSteps);
  const stepsTransition = useTransition(activeOrderedSteps, (item) => {
    console.log("----> tansition item: ", item);
    return item.GUID;
  }, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    unique: false
  });
  const steps = isWorkflowSelected ? /* @__PURE__ */ React.createElement("div", {
    className: styles.WorkflowContainer
  }, /* @__PURE__ */ React.createElement(Step, {
    type: "start",
    stepJson: {StepNumber: 0}
  }), activeOrderedSteps.map((step, index) => !step.IsDeleted && /* @__PURE__ */ React.createElement("div", {
    key: step.GUID,
    className: styles.StepGroup
  }, /* @__PURE__ */ React.createElement(Step, {
    type: "inner",
    stepJson: step,
    isLocked: TemplateLocked
  }), index < activeOrderedSteps.length - 1 && /* @__PURE__ */ React.createElement(InterStep, {
    stepJson: {StepNumber: ++index}
  }))), /* @__PURE__ */ React.createElement(Step, {
    type: "end",
    stepJson: {StepNumber: activeOrderedSteps.length}
  })) : "";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, isWorkflowSelected && /* @__PURE__ */ React.createElement("div", {
    className: styles.dragPanel
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.newStep,
    id: "step",
    draggable: !TemplateLocked
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faGripLines
  })), /* @__PURE__ */ React.createElement("div", null, "Drag new step into template")), isWorkflowSelected ? /* @__PURE__ */ React.createElement("div", {
    className: styles.WorkflowContainer
  }, /* @__PURE__ */ React.createElement(Step, {
    type: "start",
    stepJson: {StepNumber: 0}
  }), stepsTransition.map(({item, props: props2, key}) => {
    return /* @__PURE__ */ React.createElement(animated.div, {
      key: item.StepNumber,
      style: props2,
      className: styles.StepGroup
    }, /* @__PURE__ */ React.createElement(Step, {
      type: "inner",
      stepJson: item,
      isLocked: TemplateLocked
    }), item.StepNumber < activeOrderedSteps.length && /* @__PURE__ */ React.createElement(InterStep, {
      stepJson: {StepNumber: ++key}
    }));
  }), /* @__PURE__ */ React.createElement(Step, {
    type: "end",
    stepJson: {StepNumber: activeOrderedSteps.length}
  })) : "");
}
