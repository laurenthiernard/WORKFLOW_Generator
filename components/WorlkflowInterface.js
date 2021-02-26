import React, {useState, useEffect, useContext} from "../_snowpack/pkg/react.js";
import WorkflowContext from "../WorkflowContext.js";
export default function WorlkflowInterface(props) {
  const [workflows, setWorkflows] = useState([]);
  const context = useContext(WorkflowContext);
  const [saveBtnLabel, setSaveBtnLabel] = useState("Save");
  const currentWorkflow = context?.currentWorkflow;
  useEffect(() => {
    setSaveBtnLabel("Save");
  }, [currentWorkflow]);
  const apiURL = "https://api-uat.extrack.com/";
  const currentToken = "sJecTXBNeAeC0T8VeHyEuPdns2bFpxaIeiSdpdoZ2zbv8x9gjIJoxA8UqwBfYhzYUUbD4EjBMEUGnjBNcKK0iRXHY_ItEzd-X9vO7mr5NxnIaxTVGci9YoKxLm3zoUraEorCBW7_6q7kQiXyxnXQ5v2nK6blNQCCeAgCP4-RMVh1erF1Ux5beMzWl1ttVfYVtXY_bbJQfuUfz-ccnmPQWvBmxkTB-NdiEYJ52r-Pv1e9uR7Vq97_YjkbPfknUVm9Byn7R3qiKVLhaxQ9bkrcQUYqum-Y9BUY8KO7275Gn0jeiuoO3nMw0ZTFMO_tEOOZUyeJyPYQPBaHKiGOJodAeJPBDGiHiMgFqGzz4mN1Wm_-U_jJJHKfbfY3Cp5LLYkz2klVilLTaXyWXT7UpR1gEjVespjVOxVPFMb_QKcVRUmJkSINgGrH_xiTE0NjettkRcQOt2blIqNKtkNVFMM5d25lN-1NPzjrAl7gxankDs_7vsXxLzwmWoXRmXTL__8ysrL-oMJtlVpUHGugu2QwdcRkhQ9FsfPHpgGNAtZ94shyMZXMTaLe6zUM66kvnG0mHpUd1LQNIO3ALbwuvH_GwVgHStN4SO3iIyvPY2kMIvu_h2l9FdUWYmvYItW9e7ppxe62x6pCexVHSWanEwGQwz-W3mZiSraFH5aF8rKMA3kUuj4422XFebBxSFyTsi-IjlZ6q60Z-wYA3x5zGvu6osznvGq9ag7FOxX-Vlvwutdp8l8_Q8YhMRGCRrBO8q5EQzkrWbR41pz-ckkzvciha6nYTv1ZO1b9BBlj7UlBLAxC8Klcw7I9_cDmDiR3BE0z4-ONAAunuIGV7gJ3_vHwvCYAcu6HozXEjO3lOA_kSIMDHhVrTbwfaswvTPG8Fyqi3yHATLpOg-yHIG1YtIjazTDzF4lXrMNmLvPWkqydjACNnRQdcoFYo_V-vFFB8_LqoDaZyd6cNG6cKSE-FVJ-ug";
  const fetchWorkflowHeaders = new Headers();
  fetchWorkflowHeaders.append("Authorization", `Bearer ${currentToken}`);
  fetchWorkflowHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  const getRequest = {
    method: "GET",
    headers: fetchWorkflowHeaders,
    redirect: "follow"
  };
  useEffect(() => {
    fetch(`${apiURL}V1.0/WorkFlow/Templates`, getRequest).then((data) => data.json()).then((response) => {
      console.log("%c Fetching Workflow ", "background:red;color:white;");
      console.log("----> Workflow response: ", response);
      setWorkflows(response);
    }).catch((error) => console.log("error", error));
  }, []);
  function changeTemplateHandler(pEvent) {
    const selectedTemplate = workflows.filter((workflow) => workflow.GUID === pEvent.target.value)[0];
    pEvent.target.value !== "none" ? props.onChangeTemplate(selectedTemplate) : props.onChangeTemplate(void 0);
  }
  function clickLockHandler(pEvent) {
    console.log("pEvent", pEvent.target);
  }
  function clickSaveHandler(pEvent) {
    console.log("currentWorkflow to save:", currentWorkflow);
    setSaveBtnLabel("Saving...");
    const updateWorkflowHeaders = new Headers();
    updateWorkflowHeaders.append("Authorization", `Bearer ${currentToken}`);
    updateWorkflowHeaders.append("Content-Type", "application/json");
    const workflowBody = JSON.stringify(currentWorkflow);
    const putRequest = {
      method: "PUT",
      headers: updateWorkflowHeaders,
      body: workflowBody
    };
    fetch(`${apiURL}V1.0/WorkFlow/Template`, putRequest).then((data) => data.json()).then((response) => {
      console.log("%c Fetching Workflow ", "background:red;color:white;");
      console.log("----> Workflow response: ", response);
      setSaveBtnLabel("Saved");
    }).catch((error) => console.log("error", error));
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "App-header-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "templateSelect"
  }, /* @__PURE__ */ React.createElement("h1", null, "Select a template:"), /* @__PURE__ */ React.createElement("select", {
    name: "templateDropdown",
    id: "templateDropdown",
    onChange: changeTemplateHandler
  }, /* @__PURE__ */ React.createElement("option", {
    value: "none"
  }, "-------------------"), workflows.map((template, index) => /* @__PURE__ */ React.createElement("option", {
    key: index,
    value: template.GUID
  }, template.Title)))), currentWorkflow !== void 0 && /* @__PURE__ */ React.createElement("div", {
    className: "actionBtns"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    onClick: clickLockHandler,
    disabled: true
  }, "Lock template"), /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    onClick: clickSaveHandler,
    disabled: false
  }, saveBtnLabel)));
}
