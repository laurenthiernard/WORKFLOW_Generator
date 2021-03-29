
export let code = "._ConfigModal_Container_12a8f_1 {\n  position: absolute;\n  min-width: 440px;\n  z-index: 30;\n  left: calc(50vw - 150px);\n  top: calc(70vh - 120px);\n}\n._ConfigModal_Header_12a8f_8 {\n  background-color: #f1f1f1;\n  padding: 16px 24px 6px 24px;\n  border-radius: 4px 4px 0 0;\n}\n._ConfigModal_Content_12a8f_13 {\n  background-color: #f1f1f1;\n  padding: 0 24px 24px 24px;\n}\n._ConfigModal_Content_Row_12a8f_17 {\n  padding: 6px 0 0 0;\n}\n._ConfigModal_Content_Row_12a8f_17 ._title_12a8f_20 {\n  width: 100%;\n}\n._ConfigModal_Content_Row_12a8f_17 ._projectDropdown_12a8f_23 {\n  width: 100%;\n}\n._ConfigModal_Footer_12a8f_26 {\n  background-color: #f1f1f1;\n  padding: 16px 24px 24px 24px;\n  border-radius: 0 0 4px 4px;\n  display: flex;\n}\n._ConfigModal_btnOK_12a8f_32 {\n  margin-left: auto;\n  background-color: #4981af;\n}\n._ConfigModal_btnOK_12a8f_32:hover {\n  background-color: #5e94c0;\n}\n._ConfigModal_btnCancel_12a8f_39 {\n  background-color: gray;\n}\n\n._backdrop_12a8f_43 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 25;\n}";
let json = {"ConfigModal_Container":"_ConfigModal_Container_12a8f_1","ConfigModal_Header":"_ConfigModal_Header_12a8f_8","ConfigModal_Content":"_ConfigModal_Content_12a8f_13","ConfigModal_Content_Row":"_ConfigModal_Content_Row_12a8f_17","title":"_title_12a8f_20","projectDropdown":"_projectDropdown_12a8f_23","ConfigModal_Footer":"_ConfigModal_Footer_12a8f_26","ConfigModal_btnOK":"_ConfigModal_btnOK_12a8f_32","ConfigModal_btnCancel":"_ConfigModal_btnCancel_12a8f_39","backdrop":"_backdrop_12a8f_43"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}