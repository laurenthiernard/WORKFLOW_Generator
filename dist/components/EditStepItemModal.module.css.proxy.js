
export let code = "._EditStepItemModal_Container_nmrjt_1 {\n  position: absolute;\n  min-width: 450px;\n  max-width: 600px;\n  z-index: 30;\n}\n._EditStepItemModal_Header_nmrjt_7 {\n  background-color: #f1f1f1;\n  padding: 16px 24px 6px 24px;\n  border-radius: 4px 4px 0 0;\n}\n._EditStepItemModal_Content_nmrjt_12 {\n  background-color: #f1f1f1;\n  padding: 0 24px;\n}\n._EditStepItemModal_Content_Row_nmrjt_16 {\n  padding: 6px 0 0 0;\n}\n._EditStepItemModal_Footer_nmrjt_19 {\n  background-color: #f1f1f1;\n  padding: 16px 24px 24px 24px;\n  border-radius: 0 0 4px 4px;\n  display: flex;\n}\n._EditStepItemModal_btnOK_nmrjt_25 {\n  margin-left: auto;\n  background-color: #4981af;\n}\n._EditStepItemModal_btnOK_nmrjt_25:hover {\n  background-color: #5e94c0;\n}\n\n._title_nmrjt_33 {\n  width: 100%;\n}\n\n._role_nmrjt_37 {\n  width: 100%;\n}\n\n._participants_nmrjt_41 {\n  width: 100%;\n}\n\n._cc_nmrjt_45 {\n  width: 100%;\n}\n\n._backdrop_nmrjt_49 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 25;\n}";
let json = {"EditStepItemModal_Container":"_EditStepItemModal_Container_nmrjt_1","EditStepItemModal_Header":"_EditStepItemModal_Header_nmrjt_7","EditStepItemModal_Content":"_EditStepItemModal_Content_nmrjt_12","EditStepItemModal_Content_Row":"_EditStepItemModal_Content_Row_nmrjt_16","EditStepItemModal_Footer":"_EditStepItemModal_Footer_nmrjt_19","EditStepItemModal_btnOK":"_EditStepItemModal_btnOK_nmrjt_25","title":"_title_nmrjt_33","role":"_role_nmrjt_37","participants":"_participants_nmrjt_41","cc":"_cc_nmrjt_45","backdrop":"_backdrop_nmrjt_49"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}