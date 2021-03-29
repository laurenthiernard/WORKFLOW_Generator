import React, {useContext} from "../../_snowpack/pkg/react.js";
import WorkflowContext from "../WorkflowContext.js";
import styles from "./StepItem.module.css.proxy.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faCog, faWindowClose} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
export default function StepItem({stepItemJson: {Title, ItemOrder}, stepNumber, isLocked}) {
  const context = useContext(WorkflowContext);
  function showEditStepItemHandler(pEvent) {
    let xPos = pEvent.pageX < document.body.clientWidth - 310 ? pEvent.pageX + 20 : pEvent.pageX - 315;
    if (!isLocked)
      context?.editStepItem(stepNumber, ItemOrder, {y: pEvent.pageY - 80, x: xPos});
  }
  function removeStepItemHandler(pEvent) {
    if (!isLocked)
      context?.removeStepItem(stepNumber, ItemOrder);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.StepItemContainer
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.StepTitle
  }, /* @__PURE__ */ React.createElement("span", {
    className: styles.StepTitleContainer
  }, Title)), /* @__PURE__ */ React.createElement("div", {
    className: styles.btnRemoveStep,
    onClick: removeStepItemHandler
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faWindowClose
  })), /* @__PURE__ */ React.createElement("div", {
    className: styles.btnEditStep,
    onClick: showEditStepItemHandler
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faCog
  })));
}
