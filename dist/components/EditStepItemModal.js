import React, {useState, useContext} from "../../_snowpack/pkg/react.js";
import SelectSearchable from "./SelectSearchable.js";
import WorkflowContext from "../WorkflowContext.js";
import styles from "./EditStepItemModal.module.css.proxy.js";
export default function EditStepItemModal({viewportPosition, onUpdate, onClose, stepItemJson, stepItemJson: {Title, WorkFlowTemplateStepItemMemberPositionRoles, WorkFlowTemplateStepItemUsers}}) {
  const roleValue = WorkFlowTemplateStepItemMemberPositionRoles[0] ? [{label: WorkFlowTemplateStepItemMemberPositionRoles[0].MemberPositionRoleName, MemberPositionRoleGUID: WorkFlowTemplateStepItemMemberPositionRoles[0].MemberPositionRoleGUID}] : [];
  const [title, setTitle] = useState(Title);
  const [role, setRole] = useState(roleValue);
  const [contacts, setContacts] = useState(WorkFlowTemplateStepItemUsers.filter((contact) => contact.IsInactive === false));
  const [ccContactList, setCcContactList] = useState(WorkFlowTemplateStepItemUsers.filter((contact) => contact.IsCC === true));
  const context = useContext(WorkflowContext);
  const isDOADependant = context?.currentWorkflow?.StepsDelegationOfAuthorityDependant;
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  function changeHandler(pEvent) {
    switch (pEvent.target.id) {
      case "title":
        setTitle(pEvent.target.value);
        break;
      case "role":
        setRole(pEvent.target.value);
        break;
      case "rules":
        const selectedIndex = pEvent.target.selectedIndex;
      default:
        break;
    }
  }
  function submitEditStepItemHandler(pEvent) {
    let updatedContactList = contacts.map((contact) => {
      const isCC = ccContactList.some((ccContact) => contact.UserGUID === ccContact.UserGUID);
      return {...contact, IsCC: isCC, IsInactive: false};
    });
    const ccContactsToAdd = ccContactList.filter((ccContact) => {
      return !updatedContactList.map((contact) => contact.UserGUID).includes(ccContact.UserGUID);
    }).map((ccContact) => ({...ccContact, IsCC: true, IsInactive: true}));
    const stepItemUsers = [...updatedContactList, ...ccContactsToAdd].map((contact) => {
      const newContact = {...contact};
      delete newContact.label;
      return newContact;
    });
    const workFlowTemplateStepItemMemberPositionRolesValue = role[0] ? [{MemberPositionRoleName: role[0].label, MemberPositionRoleGUID: role[0].MemberPositionRoleGUID}] : [];
    const stepItemToUpdate = isDOADependant ? {...stepItemJson, Title: title, WorkFlowTemplateStepItemMemberPositionRoles: workFlowTemplateStepItemMemberPositionRolesValue} : {...stepItemJson, Title: title, WorkFlowTemplateStepItemUsers: stepItemUsers};
    onUpdate(stepItemToUpdate);
    onClose();
  }
  function clickCloseHandler(pEvent) {
    onClose();
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: styles.backdrop,
    onClick: clickCloseHandler
  }), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Container,
    style: {left: viewportPosition.x, top: viewportPosition.y}
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Header
  }, /* @__PURE__ */ React.createElement("h1", null, "Edit Step Item")), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Content
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title",
    className: styles.title,
    value: title,
    onChange: changeHandler
  })), isDOADependant && /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Role"), /* @__PURE__ */ React.createElement(SelectSearchable, {
    items: context?.doa.map((value) => ({label: `${value.MemberPositionRoleName} | [${value.DelegatedValue ? moneyFormatter.format(value.DelegatedValue).replace(/\D00(?=\D*$)/, "") : "undefined"}]`, MemberPositionRoleName: value.MemberPositionRoleName, MemberPositionRoleGUID: value.MemberPositionRoleGUID})),
    selectedItems: [...role],
    allowMultiple: false,
    width: "l",
    onSelectItem: (item) => setRole(item)
  })), !isDOADependant && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Particpants"), /* @__PURE__ */ React.createElement(SelectSearchable, {
    items: context?.contacts.map((value) => ({label: `${value.Contact.NameFirst} ${value.Contact.NameLast}`, ContactName: `${value.Contact.NameFirst} ${value.Contact.NameLast}`, UserGUID: value.User.GUID})),
    allowMultiple: true,
    width: "l",
    deleteMode: "keep",
    selectedItems: [...contacts].filter((activeContact) => !activeContact.IsDeleted === true).map((contact) => {
      return {...contact, label: contact.ContactName};
    }),
    onSelectItem: (item) => setContacts(item)
  })), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Content_Row
  }, /* @__PURE__ */ React.createElement("h3", null, "Cc"), /* @__PURE__ */ React.createElement(SelectSearchable, {
    items: context?.contacts.map((value) => ({label: `${value.Contact.NameFirst} ${value.Contact.NameLast}`, ContactName: `${value.Contact.NameFirst} ${value.Contact.NameLast}`, UserGUID: value.User.GUID})),
    allowMultiple: true,
    width: "l",
    selectedItems: [...ccContactList].map((contact) => {
      return {...contact, label: contact.ContactName, ContactName: contact.ContactName};
    }),
    onSelectItem: (item) => setCcContactList(item)
  })))), /* @__PURE__ */ React.createElement("div", {
    className: styles.EditStepItemModal_Footer
  }, /* @__PURE__ */ React.createElement("button", {
    className: `btn ${styles.EditStepItemModal_btnOK}`,
    onClick: submitEditStepItemHandler
  }, "OK"))));
}
