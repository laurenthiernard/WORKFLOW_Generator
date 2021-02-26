
export let code = "._StepContainer_emk0e_1 {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  border: 1px solid #dfdfdf;\n}\n._StepHeader_emk0e_7 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  justify-content: space-between;\n  background-color: #5e94c0;\n  color: snow;\n  padding: 2px 12px;\n  min-height: 34px;\n}\n._StepContent_emk0e_18 {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 6px;\n  transition: all 0.25s ease-out;\n}\n._StepStart_emk0e_27 {\n  flex: 0 0 120px;\n  min-height: 180px;\n}\n._StepEnd_emk0e_31 {\n  flex: 1 0 auto;\n  min-width: 200px;\n}\n\n._duration_emk0e_36 {\n  display: flex;\n  font-weight: bold;\n  color: snow;\n  padding: 4px 0;\n  margin: 0 12px;\n  align-items: center;\n}\n\n._title_emk0e_45 {\n  min-width: 80px;\n  margin-left: 8px;\n}\n\n._hovered_emk0e_50 {\n  background-color: rgba(231, 231, 231, 0.5);\n}\n._hovered_emk0e_50 div {\n  pointer-events: none;\n}\n\n._btnEditStep_emk0e_57 {\n  cursor: pointer;\n  font-size: 15px;\n  z-index: 20;\n  color: white;\n  margin-right: 8px;\n}\n._btnEditStep_emk0e_57:hover {\n  color: #f0e9e9;\n}\n\n._btnRemoveStep_emk0e_68 {\n  font-size: 15px;\n  color: white;\n  cursor: pointer;\n}\n._btnRemoveStep_emk0e_68:hover {\n  color: #f1f1f1;\n}";
let json = {"StepContainer":"_StepContainer_emk0e_1","StepHeader":"_StepHeader_emk0e_7","StepContent":"_StepContent_emk0e_18","StepStart":"_StepStart_emk0e_27","StepEnd":"_StepEnd_emk0e_31","duration":"_duration_emk0e_36","title":"_title_emk0e_45","hovered":"_hovered_emk0e_50","btnEditStep":"_btnEditStep_emk0e_57","btnRemoveStep":"_btnRemoveStep_emk0e_68"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}