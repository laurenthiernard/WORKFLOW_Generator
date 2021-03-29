import React, {useState, useContext} from "../../_snowpack/pkg/react.js";
import WorkflowContext from "../WorkflowContext.js";
import styles from "./EditStepModal.module.css.proxy.js";
export default function EditStepModal({viewportPosition, onUpdate, onClose, stepJson, stepJson: {Title, StepDurationDays, StepNumber, IsDraft}}) {
  const context = useContext(WorkflowContext);
  const [title, setTitle] = useState(stepJson.Title);
  const [duration, setDuration] = useState(stepJson.StepDurationDays);
  const [draft, setDraft] = useState(stepJson.IsDraft);
  const [rules, setRules] = useState({rejected: "back"});
  function isDraftAvailable() {
    if (StepNumber >= 2) {
      return !context?.currentWorkflow.WorkFlowTemplateSteps[StepNumber - 2].IsDraft;
    }
    return false;
  }
  function changeHandler(pEvent) {
    let value = pEvent.target.value;
    switch (pEvent.target.id) {
      case "duration":
        setDuration(Number(value));
        break;
      case "title":
        setTitle(value);
        break;
      case "draft":
        value = pEvent.target.checked;
        setDraft(value);
        break;
      case "rules":
        const selectedIndex = pEvent.target.selectedIndex;
        setRules({rejected: selectedIndex === 0 ? "back" : "continue"});
        break;
      default:
        break;
    }
  }
  function submitEditStepHandler(pEvent) {
    const stepToUpdate = {...stepJson, Title: title, StepDurationDays: duration, IsDraft: draft};
    onUpdate(stepToUpdate);
    onClose();
  }
  function clickCloseHandler(pEvent) {
    onClose();
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: styles.backdrop,
    onClick: clickCloseHandler
  }), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepModal_Container,
    style: {left: viewportPosition.x, top: viewportPosition.y}
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepModal_Header
  }, /* @__PURE__ */ React.createElement("h1", null, "Edit Step")), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepModal_Content
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Title"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: styles.title,
    name: "title",
    id: "title",
    value: title,
    onChange: changeHandler
  }))), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepModal_Content_Row_Inline
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "Duration"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    type: "number",
    className: styles.duration,
    name: "duration",
    id: "duration",
    min: "1",
    max: "99",
    value: duration,
    onChange: changeHandler
  }))), /* @__PURE__ */ React.createElement("div", {
    className: styles.draftToggle_Container
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.draftToggle
  }, /* @__PURE__ */ React.createElement("h3", null, "Set as Draft"), /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    name: "draft",
    id: "draft",
    checked: draft,
    disabled: isDraftAvailable(),
    onChange: changeHandler
  })))), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h2", null, "Step Completion Rules"), /* @__PURE__ */ React.createElement("h3", null, "If Rejected:"), /* @__PURE__ */ React.createElement("select", {
    name: "rules",
    id: "rules",
    className: styles.rules,
    onChange: changeHandler,
    value: rules.rejected
  }, /* @__PURE__ */ React.createElement("option", {
    value: "back"
  }, "Back to workflow initiator"), /* @__PURE__ */ React.createElement("option", {
    value: "continue"
  }, "Continue to next step")))), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepModal_Footer
  }, /* @__PURE__ */ React.createElement("button", {
    className: `btn ${styles.EditStepModal_btnOK}`,
    onClick: submitEditStepHandler
  }, "OK"))));
}
