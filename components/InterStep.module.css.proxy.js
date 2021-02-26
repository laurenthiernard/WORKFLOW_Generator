
export let code = "._InterStepContainer_106xj_1 {\n  position: absolute;\n  z-index: 10;\n  width: 40px;\n  right: -20px;\n  top: 35px;\n  height: 100%;\n}\n\n._hovered_106xj_10 {\n  background-color: rgba(231, 231, 231, 0.5);\n}";
let json = {"InterStepContainer":"_InterStepContainer_106xj_1","hovered":"_hovered_106xj_10"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}