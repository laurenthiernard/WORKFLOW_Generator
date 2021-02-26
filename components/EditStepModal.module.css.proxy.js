
export let code = "._EditStepModal_Container_150ni_1 {\n  position: absolute;\n  min-width: 300px;\n  z-index: 30;\n}\n._EditStepModal_Header_150ni_6 {\n  background-color: #f1f1f1;\n  padding: 24px 24px 6px 24px;\n  border-radius: 4px 4px 0 0;\n}\n._EditStepModal_Content_150ni_11 {\n  background-color: #f1f1f1;\n  padding: 0 24px;\n}\n._EditStepModal_Content_Row_150ni_15 {\n  padding: 6px 0 0 0;\n}\n._EditStepModal_Footer_150ni_18 {\n  background-color: #f1f1f1;\n  padding: 24px;\n  border-radius: 0 0 4px 4px;\n  display: flex;\n}\n._EditStepModal_btnOK_150ni_24 {\n  margin-left: auto;\n  background-color: #4981af;\n  color: snow;\n  border: 0;\n  padding: 4px 12px;\n  border-radius: 4px;\n  outline: none;\n  cursor: pointer;\n}\n._EditStepModal_btnOK_150ni_24:hover {\n  background-color: #5e94c0;\n}\n\n._title_150ni_38 {\n  width: 100%;\n  padding: 3px 6px;\n}\n\n._duration_150ni_43 {\n  width: 55px;\n  padding: 3px 6px;\n}\n\n._rules_150ni_48 {\n  padding: 3px 6px;\n}\n\n._backdrop_150ni_52 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 25;\n}";
let json = {"EditStepModal_Container":"_EditStepModal_Container_150ni_1","EditStepModal_Header":"_EditStepModal_Header_150ni_6","EditStepModal_Content":"_EditStepModal_Content_150ni_11","EditStepModal_Content_Row":"_EditStepModal_Content_Row_150ni_15","EditStepModal_Footer":"_EditStepModal_Footer_150ni_18","EditStepModal_btnOK":"_EditStepModal_btnOK_150ni_24","title":"_title_150ni_38","duration":"_duration_150ni_43","rules":"_rules_150ni_48","backdrop":"_backdrop_150ni_52"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}