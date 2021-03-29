
export let code = "._InterStepContainer_n4fy3_1 {\n  position: absolute;\n  z-index: 10;\n  width: 62px;\n  right: -30px;\n  top: 39px;\n  height: calc(100% - 40px);\n  background: transparent url(./greypix.png) repeat-x scroll center center;\n}\n\n._hovered_n4fy3_11 {\n  background-color: rgba(231, 231, 231, 0.5);\n}";
let json = {"InterStepContainer":"_InterStepContainer_n4fy3_1","hovered":"_hovered_n4fy3_11"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}