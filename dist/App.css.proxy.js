const code=`* {
  box-sizing: border-box;
}

input,
select,
textarea {
  border-radius: 4px;
  border: 1px solid darkgrey;
  padding: 4px;
  outline: none;
}
input:focus,
select:focus,
textarea:focus {
  outline: none;
}

h1 {
  font-size: 14px;
  margin: 4px 0;
}

h2 {
  font-size: 12px;
  font-weight: normal;
  margin: 4px 0;
}

h3 {
  font-size: 11px;
  font-weight: normal;
  margin: 4px 0;
}

a {
  color: #350909;
}
a:hover {
  color: gray;
}
a:visited {
  color: #350909;
}

.btn {
  background-color: gray;
  color: snow;
  border: 0;
  padding: 6px 16px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}
.btn svg {
  margin-right: 6px;
}
.btn:hover {
  background-color: darkgrey;
}
.btn:disabled {
  background-color: #dfdfdf;
  cursor: default !important;
}

.link-icon {
  margin-right: 4px;
}

.App-header-content {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0e9e9;
}
.App-header-content .templateSelect,
.App-header-content .projectSelect {
  display: flex;
  padding: 0;
  align-items: center;
}
.App-header-content .templateSelect select,
.App-header-content .projectSelect select {
  width: 220px;
  margin: 4px 24px 4px 2px;
}
.App-header-content .templateSelect button,
.App-header-content .projectSelect button {
  margin: 0 24px;
}
.App-header-content h1 {
  width: 160px;
  margin-right: 8px;
}
.App-main {
  padding: 12px;
}
.App-main .pageSpinners {
  display: flex;
  width: 60px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20rem 0;
}

.actionBtns button {
  margin-left: 12px;
}
.actionBtns #showJson {
  margin-left: 36px;
}

.actionMsgs {
  padding: 6px 12px 0 12px;
  font-size: 12px;
  color: #e37433;
}

.controls {
  display: flex;
  margin: 2rem 0;
}
.controls input[type=text] {
  width: 500px;
}
.controls .labels {
  min-width: 280px;
}
.controls .forms {
  width: 100%;
}
.controls .forms-row {
  padding: 2px 0;
}
.controls .forms-row label {
  margin-left: 6px;
}

.react-json-view {
  margin-top: 3rem;
  padding: 2rem;
  height: 800px;
  overflow-y: scroll;
}

.tooltip {
  position: relative;
  top: -3px;
  background-color: #5e94c0;
  display: inline-block;
  text-align: center;
  width: 13px;
  height: 13px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  color: snow;
  margin-left: 2px;
  cursor: help;
}`,styleEl=document.createElement("style"),codeEl=document.createTextNode(code);styleEl.type="text/css",styleEl.appendChild(codeEl),document.head.appendChild(styleEl);
