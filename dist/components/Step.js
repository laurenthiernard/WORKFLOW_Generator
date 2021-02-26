import React, {useState, useContext} from "../../_snowpack/pkg/react.js";
import StepItem from "./StepItem.js";
import WorkflowContext from "../WorkflowContext.js";
import styles from "./Step.module.css.proxy.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faBars, faWindowClose} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
export default function Step(props) {
  const {type} = props;
  const {Title, StepDurationDays, WorkFlowTemplateStepItems, StepNumber} = props.stepJson || {};
  const orderedStepITems = WorkFlowTemplateStepItems !== void 0 ? WorkFlowTemplateStepItems.sort((a, b) => a.ItemOrder - b.ItemOrder) : [];
  const [isStepHovered, setIsStepHovered] = useState(false);
  const context = useContext(WorkflowContext);
  function dragEnterStepHandler(pEvent) {
    setIsStepHovered(true);
  }
  function dragLeaveStepHandler(pEvent) {
    setIsStepHovered(false);
  }
  function dragOverHandler(pEvent) {
    pEvent.preventDefault();
  }
  function dropStepHandler(pEvent) {
    type === "inner" ? context?.addStepItem(StepNumber) : context?.addStep(StepNumber);
    setIsStepHovered(false);
  }
  function removeStepHandler() {
    context?.removeStep(StepNumber);
  }
  function showEditStepHandler(pEvent) {
    let xPos = pEvent.pageX < document.body.clientWidth - 310 ? pEvent.pageX + 20 : pEvent.pageX - 315;
    context?.editStep(StepNumber, {y: pEvent.pageY - 80, x: xPos});
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: `${styles.StepContainer} ${type === "start" ? styles.StepStart : ""} ${type === "end" ? styles.StepEnd : ""}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.StepHeader
  }, type === "inner" && /* @__PURE__ */ React.createElement("div", {
    className: styles.btnEditStep,
    onClick: showEditStepHandler
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faBars
  })), type === "start" ? "Duration" : type === "end" ? "Total" : /* @__PURE__ */ React.createElement("div", {
    className: styles.title
  }, Title), type === "inner" && /* @__PURE__ */ React.createElement("div", {
    className: styles.duration
  }, StepDurationDays, " days"), type === "inner" && /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faWindowClose,
    className: styles.btnRemoveStep,
    onClick: removeStepHandler
  })), /* @__PURE__ */ React.createElement("div", {
    className: `${styles.StepContent} ${isStepHovered ? styles.hovered : ""}`,
    onDragEnter: dragEnterStepHandler,
    onDragLeave: dragLeaveStepHandler,
    onDragOver: dragOverHandler,
    onDrop: dropStepHandler
  }, orderedStepITems.map((stepItem) => /* @__PURE__ */ React.createElement(StepItem, {
    key: stepItem.ItemOrder,
    stepItemJson: stepItem,
    stepNumber: StepNumber
  }))));
}
