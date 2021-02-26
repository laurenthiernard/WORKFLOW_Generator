
export let code = "._StepItemContainer_1fh2n_1 {\n  position: relative;\n  min-width: 136px;\n  font-size: 13px;\n  margin: 6px;\n  background-color: rgba(231, 231, 231, 0.5);\n  color: #7a7a7a;\n  border: 1px solid darkgrey;\n  padding: 14px 20px 14px 26px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n._btnRemoveStep_1fh2n_14 {\n  cursor: pointer;\n  position: absolute;\n  color: darkgrey;\n  top: -3px;\n  right: -2px;\n}\n._btnRemoveStep_1fh2n_14:hover {\n  color: gray;\n}\n\n._btnEditStep_1fh2n_25 {\n  cursor: pointer;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dfdfdf;\n  top: -2px;\n  left: -1px;\n  height: calc(100% + 2px);\n  width: 20px;\n  background-color: darkgrey;\n}\n._btnEditStep_1fh2n_25:hover {\n  color: #f0e9e9;\n  background-color: gray;\n}";
let json = {"StepItemContainer":"_StepItemContainer_1fh2n_1","btnRemoveStep":"_btnRemoveStep_1fh2n_14","btnEditStep":"_btnEditStep_1fh2n_25"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}