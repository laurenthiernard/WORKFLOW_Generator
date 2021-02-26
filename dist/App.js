import React, {useState, useRef} from "../_snowpack/pkg/react.js";
import "./App.css.proxy.js";
import WorlkflowInterface from "./components/WorlkflowInterface.js";
import WorlkflowEditor from "./components/WorlkflowEditor.js";
import ConfirmationModal from "./components/ConfirmationModal.js";
import EditStepModal from "./components/EditStepModal.js";
import EditStepItemModal from "./components/EditStepItemModal.js";
import WorkflowContext from "./WorkflowContext.js";
import SquareLoader from "../_snowpack/pkg/react-spinners/SquareLoader.js";
import ReactJson from "../_snowpack/pkg/react-json-view.js";
import {FontAwesomeIcon} from "../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faAngleUp, faAngleDown} from "../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
function App({}) {
  const [currentWorkflow, setCurrentWorkflow] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [editStepModal, setEditStepModal] = useState(null);
  const [editStepItemModal, setEditStepItemModal] = useState(null);
  const confirmationResolver = useRef(null);
  const confirmationRejecter = useRef(null);
  function changeTemplateHandler(pWorkflow) {
    setCurrentWorkflow(void 0);
    if (pWorkflow !== void 0)
      setIsLoading(true);
    setTimeout(() => {
      setCurrentWorkflow(pWorkflow);
      setIsLoading(false);
    }, 400);
  }
  function clickToggleShowConfig(pEvent) {
    pEvent.preventDefault();
    setShowConfig(!showConfig);
  }
  function changeTextHandler(pEvent) {
    switch (pEvent.target.id) {
      case "templateName":
        setCurrentWorkflow({...currentWorkflow, Title: pEvent.target.value});
        break;
      case "wfNote":
        setCurrentWorkflow({...currentWorkflow, Message: pEvent.target.value});
        break;
      default:
        break;
    }
  }
  const isCheckbox = (propName) => [
    "InitiatorOptionsStart",
    "IsAutoEscalated",
    "IsSkipStepAllowed",
    "IsDelegationAllowed",
    "StepsDelegationOfAuthorityDependant"
  ].includes(propName);
  function changeRadioHandler(pEvent) {
    const {id, name, value, type, checked} = pEvent.target;
    if (isCheckbox(name)) {
      console.log("\u{1F680} changeCheckboxHandler: ", name, checked);
      setCurrentWorkflow({...currentWorkflow, [name]: checked});
    } else {
      console.log("\u{1F680} changeRadioHandler: ", name, value);
      setCurrentWorkflow({...currentWorkflow, [name]: value});
    }
  }
  function addStep(pStep) {
    console.log("addStep at:", pStep);
    const templateStepsToUpdate = [...currentWorkflow.WorkFlowTemplateSteps];
    templateStepsToUpdate.map((step, index) => {
      return {...step, StepNumber: index >= pStep ? ++step.StepNumber : step.StepNumber};
    });
    templateStepsToUpdate.push(getNewStep(++pStep));
    setCurrentWorkflow({...currentWorkflow, WorkFlowTemplateSteps: templateStepsToUpdate});
  }
  async function removeStep(pStep) {
    console.log("----> removeStep: ", pStep);
    setShowConfirmationModal(true);
    try {
      let confirmation = await new Promise((resolve, reject) => {
        confirmationResolver.current = resolve;
        confirmationRejecter.current = reject;
      });
      setShowConfirmationModal(false);
      const templateStepsToUpdate = [...currentWorkflow.WorkFlowTemplateSteps].filter((step) => step.StepNumber !== pStep);
      templateStepsToUpdate.map((step, index) => {
        return {...step, StepNumber: ++index >= pStep ? --step.StepNumber : step.StepNumber};
      });
      setCurrentWorkflow({...currentWorkflow, WorkFlowTemplateSteps: templateStepsToUpdate});
    } catch (e) {
      console.log("----> cancel", e);
      setShowConfirmationModal(false);
    }
  }
  function removeStepItem(pStepPos, pStepItemPos) {
    console.log("----> removeStepItem: ", pStepPos, pStepItemPos);
    const templateStepItemsToUpdate = [...currentWorkflow.WorkFlowTemplateSteps[pStepPos - 1].WorkFlowTemplateStepItems].filter((stepItem) => stepItem.ItemOrder !== pStepItemPos);
    templateStepItemsToUpdate.map((stepItem, index) => {
      return {...stepItem, StepNumber: ++index >= pStepItemPos ? --stepItem.ItemOrder : stepItem.ItemOrder};
    });
    const templateStepsToUpdate = [...currentWorkflow.WorkFlowTemplateSteps];
    templateStepsToUpdate[pStepPos - 1].WorkFlowTemplateStepItems = templateStepItemsToUpdate;
    setCurrentWorkflow({...currentWorkflow, WorkFlowTemplateSteps: templateStepsToUpdate});
  }
  function addStepItem(pStep) {
    const templateStepsToUpdate = [...currentWorkflow.WorkFlowTemplateSteps];
    templateStepsToUpdate[pStep - 1].WorkFlowTemplateStepItems.push(getNewStepItem(templateStepsToUpdate[pStep - 1].WorkFlowTemplateStepItems.length + 1));
    setCurrentWorkflow({...currentWorkflow, WorkFlowTemplateSteps: templateStepsToUpdate});
  }
  function updateStepItem(pStepNumber, pStepItemNumber, pJson) {
    const templateStepsToUpdate = [...currentWorkflow.WorkFlowTemplateSteps];
    templateStepsToUpdate[pStepNumber - 1].WorkFlowTemplateStepItems[pStepItemNumber - 1] = pJson;
    setCurrentWorkflow({...currentWorkflow, WorkFlowTemplateSteps: templateStepsToUpdate});
  }
  function updateStep(pStepNumber, pJson) {
    console.log("----> step: ", pStepNumber, pJson);
    const templateStepsToUpdate = [...currentWorkflow.WorkFlowTemplateSteps];
    templateStepsToUpdate[pStepNumber - 1] = pJson;
    setCurrentWorkflow({...currentWorkflow, WorkFlowTemplateSteps: templateStepsToUpdate});
  }
  function editStep(pStepNumber, pModalPos) {
    const currentStep = currentWorkflow?.WorkFlowTemplateSteps.filter((step) => step.StepNumber === pStepNumber)[0];
    setEditStepModal(/* @__PURE__ */ React.createElement(EditStepModal, {
      stepJson: currentStep,
      onUpdate: (json) => updateStep(pStepNumber, json),
      viewportPosition: pModalPos,
      onClose: () => setEditStepModal(null)
    }));
  }
  function editStepItem(pStepNumber, pStepItemNumber, pModalPos) {
    const currentStepItem = currentWorkflow?.WorkFlowTemplateSteps.filter((step) => step.StepNumber === pStepNumber)[0].WorkFlowTemplateStepItems[pStepItemNumber - 1];
    setEditStepItemModal(/* @__PURE__ */ React.createElement(EditStepItemModal, {
      stepItemJson: currentStepItem,
      onUpdate: (json) => updateStepItem(pStepNumber, pStepItemNumber, json),
      viewportPosition: pModalPos,
      onClose: () => setEditStepItemModal(null)
    }));
  }
  const getNewStep = (stepPos) => {
    return {
      WorkFlowTemplateGUID: currentWorkflow?.GUID,
      StepNumber: stepPos,
      StepDurationDays: 1,
      StepReminderDays: 1,
      WorkFlowStepRequiredApprovalCode: "",
      Title: "New Step",
      IsInactive: false,
      IsDeleted: false,
      RowVersion: "AAAAAAAQLJw=",
      WorkFlowTemplateStepItems: [getNewStepItem(1)]
    };
  };
  const getNewStepItem = (stepItemPos) => {
    return {
      WorkFlowTemplateGUID: currentWorkflow?.GUID,
      Title: "New StepItem",
      ItemOrder: stepItemPos,
      IsInactive: false,
      IsDeleted: false,
      RowVersion: "AAAAAAAQLKE=",
      WorkFlowTemplateStepItemUsers: [],
      WorkFlowTemplateStepItemMemberPositionRoles: []
    };
  };
  const configForm = showConfig && /* @__PURE__ */ React.createElement("div", {
    className: "form"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "labels"
  }, "Workflow Title:"), /* @__PURE__ */ React.createElement("div", {
    className: "forms"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "templateName",
    id: "templateName",
    value: currentWorkflow?.Title,
    onChange: changeTextHandler
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "labels"
  }, "Workflow Message", /* @__PURE__ */ React.createElement("br", null), "(Sent to Users):\xA0"), /* @__PURE__ */ React.createElement("div", {
    className: "forms"
  }, /* @__PURE__ */ React.createElement("textarea", {
    name: "wfNote",
    id: "wfNote",
    cols: 60,
    rows: 8,
    value: currentWorkflow?.Message,
    onChange: changeTextHandler
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "labels"
  }, "Workflow Outcome Decided By:"), /* @__PURE__ */ React.createElement("div", {
    className: "forms",
    onChange: changeRadioHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowOutcomeDecidedByCode",
    id: "WorkFlowOutcomeDecidedByCodeA",
    value: "A",
    defaultChecked: currentWorkflow?.WorkFlowOutcomeDecidedByCode === "A"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowOutcomeDecidedByCodeA"
  }, "Final step outcome")), /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowOutcomeDecidedByCode",
    id: "WorkFlowOutcomeDecidedByCodeB",
    value: "B",
    defaultChecked: currentWorkflow?.WorkFlowOutcomeDecidedByCode === "B"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowOutcomeDecidedByCodeB"
  }, "Lowest of all step outcomes")))), /* @__PURE__ */ React.createElement("div", {
    className: "controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "labels"
  }, "Step Approvals Required:"), /* @__PURE__ */ React.createElement("div", {
    className: "forms",
    onChange: changeRadioHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowStepRequiredApprovalCode",
    id: "WorkFlowStepRequiredApprovalCodeA",
    value: "A",
    defaultChecked: currentWorkflow?.WorkFlowStepRequiredApprovalCode === "A"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowStepRequiredApprovalCodeA"
  }, "All step items completed")), /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowStepRequiredApprovalCode",
    id: "WorkFlowStepRequiredApprovalCodeB",
    value: "B",
    defaultChecked: currentWorkflow?.WorkFlowStepRequiredApprovalCode === "B"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowStepRequiredApprovalCodeB"
  }, "Any step item completed")), /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowStepRequiredApprovalCode",
    id: "WorkFlowStepRequiredApprovalCodeC",
    value: "C",
    defaultChecked: currentWorkflow?.WorkFlowStepRequiredApprovalCode === "C"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowStepRequiredApprovalCodeC"
  }, "All step items unless rejected")))), /* @__PURE__ */ React.createElement("div", {
    className: "controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "labels"
  }, "Initiator Options-Start:"), /* @__PURE__ */ React.createElement("div", {
    className: "forms",
    onChange: changeRadioHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    name: "InitiatorOptionsStart",
    id: "InitiatorOptionsStart",
    defaultChecked: currentWorkflow?.InitiatorOptionsStart === true
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "InitiatorOptionsStart"
  }, "When starting a workflow: Initiator can edit step durations, roles and participants")))), /* @__PURE__ */ React.createElement("div", {
    className: "controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "labels"
  }, "Initiator Options-During:"), /* @__PURE__ */ React.createElement("div", {
    className: "forms",
    onChange: changeRadioHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowInitiatorOptionsCode",
    id: "WorkFlowInitiatorOptionsCodeA",
    value: "A",
    defaultChecked: currentWorkflow?.WorkFlowInitiatorOptionsCode === "A"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowInitiatorOptionsCodeA"
  }, "While workflow in progress Initiator can edit step participants")), /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowInitiatorOptionsCode",
    id: "WorkFlowInitiatorOptionsCodeB",
    value: "B",
    defaultChecked: currentWorkflow?.WorkFlowInitiatorOptionsCode === "B"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowInitiatorOptionsCodeB"
  }, "While workflow in progress Initiator can skip steps")), /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowInitiatorOptionsCode",
    id: "WorkFlowInitiatorOptionsCodeC",
    value: "C",
    defaultChecked: currentWorkflow?.WorkFlowInitiatorOptionsCode === "C"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowInitiatorOptionsCodeC"
  }, "No Options")), /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowInitiatorOptionsCode",
    id: "WorkFlowInitiatorOptionsCodeD",
    value: "D",
    defaultChecked: currentWorkflow?.WorkFlowInitiatorOptionsCode === "D"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowInitiatorOptionsCodeD"
  }, "Initiator Can Stop Workflow")))), /* @__PURE__ */ React.createElement("div", {
    className: "controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "labels"
  }, "On Rejection:"), /* @__PURE__ */ React.createElement("div", {
    className: "forms",
    onChange: changeRadioHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowRejectionActionCode",
    id: "WorkFlowRejectionActionCodeA",
    value: "A",
    defaultChecked: currentWorkflow?.WorkFlowRejectionActionCode === "A"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowRejectionActionCodeA"
  }, "Continue to next step")), /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowRejectionActionCode",
    id: "WorkFlowRejectionActionCodeB",
    value: "B",
    defaultChecked: currentWorkflow?.WorkFlowRejectionActionCode === "B"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowRejectionActionCodeB"
  }, "Back to workflow intiator")), /* @__PURE__ */ React.createElement("div", {
    className: "forms-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "WorkFlowRejectionActionCode",
    id: "WorkFlowRejectionActionCodeC",
    value: "C",
    defaultChecked: currentWorkflow?.WorkFlowRejectionActionCode === "C"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "WorkFlowRejectionActionCodeC"
  }, "Reset and send back to previous step")))), /* @__PURE__ */ React.createElement("div", {
    className: "controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "labels"
  }, "Is Auto Escalated:"), /* @__PURE__ */ React.createElement("div", {
    className: "forms",
    onChange: changeRadioHandler
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    name: "IsAutoEscalated",
    id: "IsAutoEscalated",
    defaultChecked: currentWorkflow?.IsAutoEscalated === true
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "labels"
  }, "Is Skip Step Allowed:"), /* @__PURE__ */ React.createElement("div", {
    className: "forms",
    onChange: changeRadioHandler
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    name: "IsSkipStepAllowed",
    id: "IsSkipStepAllowed",
    defaultChecked: currentWorkflow?.IsSkipStepAllowed === true
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "labels"
  }, "Is Delegation Allowed:"), /* @__PURE__ */ React.createElement("div", {
    className: "forms",
    onChange: changeRadioHandler
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    name: "IsDelegationAllowed",
    id: "IsDelegationAllowed",
    defaultChecked: currentWorkflow?.IsDelegationAllowed === true
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "labels"
  }, "Steps DOA Dependant:"), /* @__PURE__ */ React.createElement("div", {
    className: "forms",
    onChange: changeRadioHandler
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    name: "StepsDelegationOfAuthorityDependant",
    id: "StepsDelegationOfAuthorityDependant",
    defaultChecked: currentWorkflow?.StepsDelegationOfAuthorityDependant === true
  })))));
  return /* @__PURE__ */ React.createElement(WorkflowContext.Provider, {
    value: {addStep, removeStep, addStepItem, removeStepItem, editStep, editStepItem, currentWorkflow}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "App-header"
  }, /* @__PURE__ */ React.createElement(WorlkflowInterface, {
    onChangeTemplate: changeTemplateHandler
  })), /* @__PURE__ */ React.createElement("main", {
    className: "App-main"
  }, currentWorkflow !== void 0 && /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    onClick: clickToggleShowConfig
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: showConfig ? faAngleDown : faAngleUp,
    className: "link-icon"
  }), showConfig ? "hide" : "show", " config")), isLoading ? /* @__PURE__ */ React.createElement("div", {
    className: "pageSpinners"
  }, /* @__PURE__ */ React.createElement(SquareLoader, {
    size: 10,
    color: `#EEE`
  }), /* @__PURE__ */ React.createElement(SquareLoader, {
    size: 10,
    color: `#EEE`
  }), /* @__PURE__ */ React.createElement(SquareLoader, {
    size: 10,
    color: `#EEE`
  })) : configForm, /* @__PURE__ */ React.createElement(WorlkflowEditor, {
    steps: currentWorkflow
  }), currentWorkflow !== void 0 && /* @__PURE__ */ React.createElement(ReactJson, {
    src: currentWorkflow,
    theme: "monokai",
    displayDataTypes: false,
    iconStyle: "square",
    enableClipboard: false
  })), showConfirmationModal && /* @__PURE__ */ React.createElement(ConfirmationModal, {
    resolver: confirmationResolver.current,
    rejecter: confirmationRejecter.current
  }), editStepModal, editStepItemModal));
}
export default App;
