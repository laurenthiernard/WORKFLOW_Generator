
export let code = "._EditStepItemModal_Container_mnu08_1 {\n  position: absolute;\n  min-width: 300px;\n  z-index: 30;\n}\n._EditStepItemModal_Header_mnu08_6 {\n  background-color: #f1f1f1;\n  padding: 24px 24px 6px 24px;\n  border-radius: 4px 4px 0 0;\n}\n._EditStepItemModal_Content_mnu08_11 {\n  background-color: #f1f1f1;\n  padding: 0 24px;\n}\n._EditStepItemModal_Content_Row_mnu08_15 {\n  padding: 6px 0 0 0;\n}\n._EditStepItemModal_Footer_mnu08_18 {\n  background-color: #f1f1f1;\n  padding: 24px;\n  border-radius: 0 0 4px 4px;\n  display: flex;\n}\n._EditStepItemModal_btnOK_mnu08_24 {\n  margin-left: auto;\n  background-color: #4981af;\n}\n._EditStepItemModal_btnOK_mnu08_24:hover {\n  background-color: #5e94c0;\n}\n\n._title_mnu08_32 {\n  width: 100%;\n}\n\n._role_mnu08_36 {\n  width: 100%;\n}\n\n._participants_mnu08_40 {\n  width: 100%;\n}\n\n._cc_mnu08_44 {\n  width: 100%;\n}\n\n._backdrop_mnu08_48 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 25;\n}";
let json = {"EditStepItemModal_Container":"_EditStepItemModal_Container_mnu08_1","EditStepItemModal_Header":"_EditStepItemModal_Header_mnu08_6","EditStepItemModal_Content":"_EditStepItemModal_Content_mnu08_11","EditStepItemModal_Content_Row":"_EditStepItemModal_Content_Row_mnu08_15","EditStepItemModal_Footer":"_EditStepItemModal_Footer_mnu08_18","EditStepItemModal_btnOK":"_EditStepItemModal_btnOK_mnu08_24","title":"_title_mnu08_32","role":"_role_mnu08_36","participants":"_participants_mnu08_40","cc":"_cc_mnu08_44","backdrop":"_backdrop_mnu08_48"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}