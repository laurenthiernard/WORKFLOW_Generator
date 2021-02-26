import React, {useState} from "../_snowpack/pkg/react.js";
import styles from "./EditStepItemModal.module.css.proxy.js";
export default function EditStepItemModal({viewportPosition, onUpdate, onClose, stepItemJson, stepItemJson: {Title}}) {
  const [title, setTitle] = useState(Title);
  const [role, setRole] = useState("");
  function changeHandler(pEvent) {
    switch (pEvent.target.id) {
      case "title":
        setTitle(pEvent.target.value);
        break;
      case "role":
        setRole(pEvent.target.value);
        break;
      case "rules":
        const selectedIndex = pEvent.target.selectedIndex;
      default:
        break;
    }
  }
  function submitEditStepItemHandler(pEvent) {
    const stepItemToUpdate = {...stepItemJson, Title: title};
    onUpdate(stepItemToUpdate);
    onClose();
  }
  function clickCloseHandler(pEvent) {
    onClose();
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: styles.backdrop,
    onClick: clickCloseHandler
  }), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Container,
    style: {left: viewportPosition.x, top: viewportPosition.y}
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Header
  }, /* @__PURE__ */ React.createElement("h1", null, "Edit Step Item")), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Content
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title",
    className: styles.title,
    value: title,
    onChange: changeHandler
  })), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Role"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "role",
    id: "role",
    className: styles.role,
    value: role,
    onChange: changeHandler
  })), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Particpants"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "participants",
    id: "participants",
    className: styles.participants
  })), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Cc"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "cc",
    id: "cc",
    className: styles.cc
  }))), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Footer
  }, /* @__PURE__ */ React.createElement("button", {
    className: `btn ${styles.EditStepItemModal_btnOK}`,
    onClick: submitEditStepItemHandler
  }, "OK"))));
}
