import React from "../_snowpack/pkg/react.js";
import styles from "./ConfirmationModal.module.css.proxy.js";
export default function ConfirmationModal({resolver, rejecter}) {
  function validateConfirmHandler() {
    resolver(true);
  }
  function closeConfirmHandler() {
    rejecter(false);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: styles.backdrop,
    onClick: closeConfirmHandler
  }), /* @__PURE__ */ React.createElement("div", {
    className: styles.ConfirmationModal_Container
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.ConfirmationModal_Header
  }, /* @__PURE__ */ React.createElement("h1", null, "Removing Step")), /* @__PURE__ */ React.createElement("div", {
    className: styles.ConfirmationModal_Content
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.ConfirmationModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h2", null, "Do you want to remove shis step?"))), /* @__PURE__ */ React.createElement("div", {
    className: styles.ConfirmationModal_Footer
  }, /* @__PURE__ */ React.createElement("button", {
    className: `btn ${styles.ConfirmationModal_btnCancel}`,
    onClick: closeConfirmHandler
  }, "Cancel"), /* @__PURE__ */ React.createElement("button", {
    className: `btn ${styles.ConfirmationModal_btnOK}`,
    onClick: validateConfirmHandler
  }, "Confirm"))));
}
