import React, {useState} from "../../_snowpack/pkg/react.js";
import styles from "./ConfigModal.module.css.proxy.js";
export default function ConfigModal({projectList, viewportPosition, onClose, onSubmit}) {
  const [title, setTitle] = useState("");
  const [isDOADependant, setIsDOADependant] = useState(false);
  function submitTemplateConfig() {
    onSubmit({title, isDOADependant});
    onClose();
  }
  function clickCloseHandler(pEvent) {
    onClose();
  }
  function changeHandler(pEvent) {
    switch (pEvent.target.id) {
      case "title":
        setTitle(pEvent.target.value);
        break;
      case "doa":
        setIsDOADependant(pEvent.target.checked);
        break;
    }
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: styles.backdrop,
    onClick: clickCloseHandler
  }), /* @__PURE__ */ React.createElement("div", {
    className: styles.ConfigModal_Container,
    style: {left: viewportPosition.x, top: viewportPosition.y}
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.ConfigModal_Header
  }, /* @__PURE__ */ React.createElement("h1", null, "New Template")), /* @__PURE__ */ React.createElement("div", {
    className: styles.ConfigModal_Content
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.ConfigModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Title"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: styles.title,
    name: "title",
    id: "title",
    value: title,
    onChange: changeHandler
  }))), /* @__PURE__ */ React.createElement("div", {
    className: styles.ConfigModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Steps DOA Dependant ", /* @__PURE__ */ React.createElement("span", {
    className: "tooltip",
    title: "Selecting Steps DOA Dependancy is definitive"
  }, "?")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    className: styles.doa,
    name: "doa",
    id: "doa",
    checked: isDOADependant,
    onChange: changeHandler
  })))), /* @__PURE__ */ React.createElement("div", {
    className: styles.ConfigModal_Footer
  }, /* @__PURE__ */ React.createElement("button", {
    className: `btn ${styles.ConfigModal_btnOK}`,
    onClick: submitTemplateConfig
  }, "OK"))));
}
