import React, {useState, useEffect, useContext} from "../../_snowpack/pkg/react.js";
import WorkflowContext from "../WorkflowContext.js";
import SelectSearchable from "./SelectSearchable.js";
import ConfigModal from "./ConfigModal.js";
export default function WorlkflowInterface(props) {
  const [workflows, setWorkflows] = useState([]);
  const [projects, setProjects] = useState([]);
  const context = useContext(WorkflowContext);
  const [isNewTemplate, setIsNewTemplate] = useState(false);
  const [configModal, setConfigModal] = useState(null);
  const [saveBtnLabel, setSaveBtnLabel] = useState("Save");
  const currentWorkflow = context?.currentWorkflow;
  const apiURL = context?.apiConfig.url;
  const currentToken = context?.apiConfig.token;
  const [selectedProject, setSelectedProject] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState([]);
  const [selectedProjectGUID, setSelectedProjectGUID] = useState(window["SelectedProjectGUID"]);
  const [selectedTemplateGUID, setSelectedTemplateGUID] = useState(window["SelectedTemplateGUID"]);
  useEffect(() => {
    const htmlVars = {selectedProjectID: context?.currentProjectId, selectedProjectGUID, selectedTemplateGUID};
    for (let key in htmlVars)
      if (htmlVars[key] === void 0)
        delete htmlVars[key];
    console.log("%c     HTML vars     ", "background-color:red;color:white;", Object.keys(htmlVars).length > 0 ? htmlVars : "No values set");
    fetchProjects();
    fetchDOAs();
    if (context?.currentProjectId !== void 0)
      fetchContacts(context?.currentProjectId);
  }, []);
  useEffect(() => {
    if (selectedProjectGUID !== void 0) {
      fetchTemplates();
      fetchContacts();
    }
  }, [selectedProjectGUID]);
  useEffect(() => {
    setSaveBtnLabel("Save");
  }, [currentWorkflow]);
  const fetchWorkflowHeaders = new Headers();
  fetchWorkflowHeaders.append("Authorization", `Bearer ${currentToken}`);
  fetchWorkflowHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  const getRequest = {
    method: "GET",
    headers: fetchWorkflowHeaders,
    redirect: "follow"
  };
  function fetchTemplates() {
    fetch(`${apiURL}${context?.apiConfig.templatesStem}?RootProjectGuid=${selectedProjectGUID}`, getRequest).then((data) => data.json()).then((response) => {
      console.log("%c Fetching Templates ", "background:purple;color:white;", response);
      if (selectedTemplateGUID !== void 0) {
        const selectedTemplate2 = response.filter((workflow) => workflow.GUID === selectedTemplateGUID)[0];
        console.log("%c Set current Template ", "background:green;color:white;", selectedTemplate2);
        props.onChangeTemplate(selectedTemplate2);
      }
      setWorkflows(response);
    }).catch((error) => console.log("error", error));
  }
  function fetchProjects() {
    fetch(`${apiURL}${context?.apiConfig.projectsStem}`, getRequest).then((data) => data.json()).then((projectsResponse) => {
      setProjects(projectsResponse);
    }).catch((error) => console.log("error", error));
  }
  function fetchDOAs() {
    fetch(`${apiURL}${context?.apiConfig.doaStem}`, getRequest).then((data) => data.json()).then((response) => {
      const doaFormatted = context?.apiConfig.env == "prod" ? response.data : response;
      context?.setDoa(doaFormatted);
    }).catch((error) => console.log("error", error));
  }
  function fetchContacts() {
    fetch(`${apiURL}${context?.apiConfig.contactStem}`, getRequest).then((data) => data.json()).then((contactsResponse) => {
      console.log("%c Fetching contacts ", "background:gold;color:white;", contactsResponse);
      const contactList = contactsResponse.filter((contact) => contact.User);
      const userGUIDs = contactList.map((contact) => contact.User.GUID);
      const filteredList = contactList.filter((item, index) => !userGUIDs.includes(item.User.GUID, index + 1));
      console.log(" ----> %c Filtered: ", "background:gold;color:white;", filteredList);
      context?.setContacts(filteredList);
    }).catch((error) => console.log("error", error));
  }
  function changeTemplateHandler(pTemplateGUID) {
    console.log("----> changeTemplateHandler: ", pTemplateGUID);
    setSelectedTemplateGUID(pTemplateGUID);
    const selectedTemplate2 = workflows.filter((workflow) => workflow.GUID === pTemplateGUID);
    props.onChangeTemplate(selectedTemplate2[0]);
  }
  function clickNewTemplateHandler(pEvent) {
    let xPos = pEvent.pageX < document.body.clientWidth - 310 ? pEvent.pageX + 20 : pEvent.pageX - 315;
    setIsNewTemplate(true);
    setConfigModal(/* @__PURE__ */ React.createElement(ConfigModal, {
      projectList: projects,
      viewportPosition: {y: pEvent.pageY + 35, x: xPos - 150},
      onClose: closeConfigModalHandler,
      onSubmit: submitConfigModalHandler
    }));
  }
  function closeConfigModalHandler(pEvent) {
    setConfigModal(null);
  }
  function submitConfigModalHandler({title, isDOADependant}) {
    console.log("Create New Template config: ", {title, isDOADependant});
    props.onChangeTemplate(getNewTemplate(title, isDOADependant));
  }
  function clickLockHandler(pEvent) {
    const worflowToUpdate = {...currentWorkflow, TemplateLocked: true};
    props.onChangeTemplate(worflowToUpdate);
  }
  function clickSaveHandler(pEvent) {
    console.log("Workflow to save:", currentWorkflow);
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
    const postRequest = {
      method: "POST",
      headers: updateWorkflowHeaders,
      body: workflowBody
    };
    fetch(`${apiURL}${context?.apiConfig.templateSaveStem}?RootProjectGuid=${selectedProjectGUID}`, isNewTemplate ? postRequest : putRequest).then((data) => data.json()).then((response) => {
      console.log("%c Fetching Workflow ", "background:red;color:white;");
      console.log("----> Workflow response: ", response);
      setSaveBtnLabel("Saved");
      fetchTemplates();
      setSelectedTemplate([response]);
    }).catch((error) => console.log("error", error));
  }
  const getNewTemplate = (pTitle, pDoa) => {
    return {
      ProjectGUID: selectedProjectGUID,
      ExTrackModuleId: 15,
      ModuleName: "Timesheets",
      TemplateLocked: false,
      Title: pTitle,
      Message: "",
      WorkFlowOutcomeDecidedByCode: "A",
      WorkFlowStepRequiredApprovalCode: "A",
      InitiatorOptionsStart: false,
      WorkFlowInitiatorOptionsCode: "A",
      WorkFlowRejectionActionCode: "A",
      IsAutoEscalated: false,
      IsSkipStepAllowed: false,
      IsDelegationAllowed: false,
      StepsDelegationOfAuthorityDependant: pDoa,
      IsInactive: false,
      IsDeleted: false,
      WorkFlowTemplateSteps: []
    };
  };
  function toggleShowJsonHandler(pEvent) {
    context?.setShowJson(!context?.showJson);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "App-header-content"
  }, /* @__PURE__ */ React.createElement("div", null, window.SelectedProjectGUID === void 0 && /* @__PURE__ */ React.createElement("div", {
    className: "projectSelect"
  }, /* @__PURE__ */ React.createElement("h1", null, "Select a project:"), /* @__PURE__ */ React.createElement(SelectSearchable, {
    items: projects.map((value) => ({label: value.ShortName, GUID: value.GUID, ProjectId: value.Id})),
    selectedItems: selectedProject.map((project) => {
      return {label: project.label, GUID: project.GUID, ProjectId: project.ProjectId};
    }),
    allowMultiple: false,
    width: "m",
    onSelectItem: (item) => {
      if (item.length > 0) {
        console.log("Project selected: ", item[0]);
        context?.setCurrentProjectId(item[0].ProjectId);
        setSelectedProjectGUID(item[0].GUID);
      } else
        setSelectedProjectGUID(void 0);
      setSelectedProject(item);
    }
  })), selectedProjectGUID !== void 0 && /* @__PURE__ */ React.createElement("div", {
    className: "templateSelect"
  }, /* @__PURE__ */ React.createElement("h1", null, "Select a template:"), /* @__PURE__ */ React.createElement(SelectSearchable, {
    items: workflows.map((value) => ({label: value.Title, GUID: value.GUID})),
    selectedItems: selectedTemplate.map((project) => {
      return {label: project.label || project.Title, GUID: project.GUID};
    }),
    allowMultiple: false,
    width: "m",
    onSelectItem: (item) => {
      console.log("----> item: ", item);
      if (item.length > 0)
        changeTemplateHandler(item[0].GUID);
      else
        props.onChangeTemplate(void 0);
      setSelectedTemplate(item);
    }
  }))), selectedProjectGUID !== void 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    onClick: clickNewTemplateHandler
  }, "Create a new template")), currentWorkflow !== void 0 && /* @__PURE__ */ React.createElement("div", {
    className: "actionBtns"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    onClick: clickLockHandler,
    disabled: currentWorkflow.TemplateLocked
  }, "Lock template"), /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    onClick: clickSaveHandler,
    disabled: false
  }, saveBtnLabel), /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    name: "showJson",
    id: "showJson",
    onChange: toggleShowJsonHandler,
    checked: context?.showJson
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "showJson"
  }, "Json")), configModal);
}
