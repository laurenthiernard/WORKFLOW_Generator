
export let code = "._EditStepModal_Container_1qvv5_1 {\n  position: absolute;\n  min-width: 300px;\n  z-index: 30;\n}\n._EditStepModal_Header_1qvv5_6 {\n  background-color: #f1f1f1;\n  padding: 16px 24px 6px 24px;\n  border-radius: 4px 4px 0 0;\n}\n._EditStepModal_Content_1qvv5_11 {\n  background-color: #f1f1f1;\n  padding: 0 24px;\n}\n._EditStepModal_Content_Row_1qvv5_15 {\n  padding: 6px 0 0 0;\n}\n._EditStepModal_Content_Row_Inline_1qvv5_18 {\n  padding: 6px 0 0 0;\n  display: flex;\n  flex-direction: row;\n}\n._EditStepModal_Content_Row_Inline_1qvv5_18 div {\n  margin-right: 12px;\n}\n._EditStepModal_Footer_1qvv5_26 {\n  background-color: #f1f1f1;\n  padding: 16px 24px 24px 24px;\n  border-radius: 0 0 4px 4px;\n  display: flex;\n}\n._EditStepModal_btnOK_1qvv5_32 {\n  margin-left: auto;\n  background-color: #4981af;\n  color: snow;\n  border: 0;\n  padding: 4px 12px;\n  border-radius: 4px;\n  outline: none;\n  cursor: pointer;\n}\n._EditStepModal_btnOK_1qvv5_32:hover {\n  background-color: #5e94c0;\n}\n\n._title_1qvv5_46 {\n  width: 100%;\n  padding: 3px 6px;\n}\n\n._duration_1qvv5_51 {\n  width: 55px;\n  padding: 3px 6px;\n}\n\n._draftToggle_1qvv5_56 {\n  display: flex;\n  justify-content: center;\n}\n._draftToggle_Container_1qvv5_60 {\n  display: flex;\n  margin-top: auto;\n}\n\n._rules_1qvv5_65 {\n  padding: 3px 6px;\n}\n\n._backdrop_1qvv5_69 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 25;\n}";
let json = {"EditStepModal_Container":"_EditStepModal_Container_1qvv5_1","EditStepModal_Header":"_EditStepModal_Header_1qvv5_6","EditStepModal_Content":"_EditStepModal_Content_1qvv5_11","EditStepModal_Content_Row":"_EditStepModal_Content_Row_1qvv5_15","EditStepModal_Content_Row_Inline":"_EditStepModal_Content_Row_Inline_1qvv5_18","EditStepModal_Footer":"_EditStepModal_Footer_1qvv5_26","EditStepModal_btnOK":"_EditStepModal_btnOK_1qvv5_32","title":"_title_1qvv5_46","duration":"_duration_1qvv5_51","draftToggle":"_draftToggle_1qvv5_56","draftToggle_Container":"_draftToggle_Container_1qvv5_60","rules":"_rules_1qvv5_65","backdrop":"_backdrop_1qvv5_69"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}