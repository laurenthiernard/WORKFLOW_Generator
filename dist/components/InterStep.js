import React, {useState, useContext} from "../../_snowpack/pkg/react.js";
import WorkflowContext from "../WorkflowContext.js";
import styles from "./InterStep.module.css.proxy.js";
export default function InterStep({stepJson: {StepNumber}}) {
  const context = useContext(WorkflowContext);
  const [isStepHovered, setIsStepHovered] = useState(false);
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
    context?.addStep(StepNumber);
    setIsStepHovered(false);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: `${styles.InterStepContainer} ${isStepHovered ? styles.hovered : ""}`,
    onDragEnter: dragEnterStepHandler,
    onDragLeave: dragLeaveStepHandler,
    onDragOver: dragOverHandler,
    onDrop: dropStepHandler
  });
}
