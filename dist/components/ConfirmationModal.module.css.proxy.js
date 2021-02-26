
export let code = "._ConfirmationModal_Container_1g9a9_1 {\n  position: absolute;\n  min-width: 300px;\n  z-index: 30;\n  left: calc(50vw - 150px);\n  top: calc(70vh - 120px);\n}\n._ConfirmationModal_Header_1g9a9_8 {\n  background-color: #f1f1f1;\n  padding: 6px 24px;\n  border-radius: 4px 4px 0 0;\n}\n._ConfirmationModal_Content_1g9a9_13 {\n  background-color: #f1f1f1;\n  padding: 0 24px 24px 24px;\n}\n._ConfirmationModal_Content_Row_1g9a9_17 {\n  padding: 6px 0 0 0;\n}\n._ConfirmationModal_Footer_1g9a9_20 {\n  background-color: #f1f1f1;\n  padding: 12px 24px;\n  border-radius: 0 0 4px 4px;\n  display: flex;\n}\n._ConfirmationModal_btnOK_1g9a9_26 {\n  margin-left: auto;\n  background-color: #4981af;\n}\n._ConfirmationModal_btnOK_1g9a9_26:hover {\n  background-color: #5e94c0;\n}\n._ConfirmationModal_btnCancel_1g9a9_33 {\n  background-color: gray;\n}\n\n._backdrop_1g9a9_37 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 25;\n}";
let json = {"ConfirmationModal_Container":"_ConfirmationModal_Container_1g9a9_1","ConfirmationModal_Header":"_ConfirmationModal_Header_1g9a9_8","ConfirmationModal_Content":"_ConfirmationModal_Content_1g9a9_13","ConfirmationModal_Content_Row":"_ConfirmationModal_Content_Row_1g9a9_17","ConfirmationModal_Footer":"_ConfirmationModal_Footer_1g9a9_20","ConfirmationModal_btnOK":"_ConfirmationModal_btnOK_1g9a9_26","ConfirmationModal_btnCancel":"_ConfirmationModal_btnCancel_1g9a9_33","backdrop":"_backdrop_1g9a9_37"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}