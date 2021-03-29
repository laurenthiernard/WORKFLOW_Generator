
export let code = "._StepItemContainer_15i03_1 {\n  position: relative;\n  min-width: 132px;\n  font-size: 13px;\n  margin: 6px 16px;\n  background-color: #ededed;\n  color: #7a7a7a;\n  border: 1px solid darkgrey;\n  padding: 0 24px;\n  border-radius: 4px;\n  overflow: hidden;\n  width: 100px;\n  height: 46px;\n}\n\n._StepTitle_15i03_16 {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 100%;\n}\n._StepTitleContainer_15i03_22 {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  line-height: 11px;\n  user-select: none;\n}\n\n._btnRemoveStep_15i03_30 {\n  cursor: pointer;\n  position: absolute;\n  color: darkgrey;\n  top: -3px;\n  right: -2px;\n}\n._btnRemoveStep_15i03_30:hover {\n  color: gray;\n}\n\n._btnEditStep_15i03_41 {\n  cursor: pointer;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dfdfdf;\n  top: -2px;\n  left: -1px;\n  height: calc(100% + 2px);\n  width: 20px;\n  background-color: darkgrey;\n}\n._btnEditStep_15i03_41:hover {\n  color: #f0e9e9;\n  background-color: gray;\n}";
let json = {"StepItemContainer":"_StepItemContainer_15i03_1","StepTitle":"_StepTitle_15i03_16","StepTitleContainer":"_StepTitleContainer_15i03_22","btnRemoveStep":"_btnRemoveStep_15i03_30","btnEditStep":"_btnEditStep_15i03_41"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}