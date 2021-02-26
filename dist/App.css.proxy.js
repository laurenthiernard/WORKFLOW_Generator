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
.btn:hover {
  background-color: darkgrey;
}
.btn:disabled {
  background-color: #dfdfdf;
}

.link-icon {
  margin-right: 4px;
}

.App-header-content {
  padding: 0.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0e9e9;
}
.App-header-content .templateSelect {
  padding: 0 0 0.5rem 0;
}
.App-header-content .templateSelect select {
  width: 240px;
  margin-top: 4px;
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
  height: 400px;
  overflow-y: scroll;
}`,styleEl=document.createElement("style"),codeEl=document.createTextNode(code);styleEl.type="text/css",styleEl.appendChild(codeEl),document.head.appendChild(styleEl);
