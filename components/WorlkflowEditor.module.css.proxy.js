
export let code = "._WorkflowContainer_587si_1 {\n  width: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  font-size: 14px;\n  display: flex;\n}\n\n._StepGroup_587si_9 {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 220px;\n}\n\n._dragPanel_587si_16 {\n  display: flex;\n  margin: 3rem 0 1rem 0;\n}\n\n._newStep_587si_21 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 3px 0;\n  margin-right: 8px;\n  width: 40px;\n  background-color: darkgrey;\n  border-radius: 4px;\n  color: white;\n  height: unset;\n  pointer-events: unset;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}";
let json = {"WorkflowContainer":"_WorkflowContainer_587si_1","StepGroup":"_StepGroup_587si_9","dragPanel":"_dragPanel_587si_16","newStep":"_newStep_587si_21"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}