import React, {useState} from "../../_snowpack/pkg/react.js";
import styles from "./EditStepModal.module.css.proxy.js";
export default function EditStepModal({viewportPosition, onUpdate, onClose, stepJson, stepJson: {Title, StepDurationDays}}) {
  const [title, setTitle] = useState(stepJson.Title);
  const [duration, setDuration] = useState(stepJson.StepDurationDays);
  const [rules, setRules] = useState({rejected: "back"});
  function changeHandler(pEvent) {
    const value = pEvent.target.value;
    switch (pEvent.target.id) {
      case "duration":
        setDuration(Number(value));
        break;
      case "title":
        setTitle(value);
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
    const stepToUpdate = {...stepJson, Title: title, StepDurationDays: duration};
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
    className: styles.EditStepModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Duration"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    type: "number",
    className: styles.duration,
    name: "duration",
    id: "duration",
    min: "1",
    max: "99",
    value: duration,
    onChange: changeHandler
  }))), /* @__PURE__ */ React.createElement("div", {
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
