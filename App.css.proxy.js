// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "* {\n  box-sizing: border-box;\n}\n\ninput,\nselect,\ntextarea {\n  border-radius: 4px;\n  border: 1px solid darkgrey;\n  padding: 4px;\n  outline: none;\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n}\n\nh1 {\n  font-size: 14px;\n  margin: 4px 0;\n}\n\nh2 {\n  font-size: 12px;\n  font-weight: normal;\n  margin: 4px 0;\n}\n\nh3 {\n  font-size: 11px;\n  font-weight: normal;\n  margin: 4px 0;\n}\n\na {\n  color: #350909;\n}\na:hover {\n  color: gray;\n}\na:visited {\n  color: #350909;\n}\n\n.btn {\n  background-color: gray;\n  color: snow;\n  border: 0;\n  padding: 6px 16px;\n  border-radius: 4px;\n  outline: none;\n  cursor: pointer;\n}\n.btn:hover {\n  background-color: darkgrey;\n}\n.btn:disabled {\n  background-color: #dfdfdf;\n}\n\n.link-icon {\n  margin-right: 4px;\n}\n\n.App-header-content {\n  padding: 0.5rem 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f0e9e9;\n}\n.App-header-content .templateSelect {\n  padding: 0 0 0.5rem 0;\n}\n.App-header-content .templateSelect select {\n  width: 240px;\n  margin-top: 4px;\n}\n.App-main {\n  padding: 12px;\n}\n.App-main .pageSpinners {\n  display: flex;\n  width: 60px;\n  justify-content: space-between;\n  margin: 0 auto;\n  padding: 20rem 0;\n}\n\n.actionBtns button {\n  margin-left: 12px;\n}\n\n.controls {\n  display: flex;\n  margin: 2rem 0;\n}\n.controls input[type=text] {\n  width: 500px;\n}\n.controls .labels {\n  min-width: 280px;\n}\n.controls .forms {\n  width: 100%;\n}\n.controls .forms-row {\n  padding: 2px 0;\n}\n.controls .forms-row label {\n  margin-left: 6px;\n}\n\n.react-json-view {\n  margin-top: 3rem;\n  padding: 2rem;\n  height: 400px;\n  overflow-y: scroll;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}