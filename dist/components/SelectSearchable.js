import React, {useState, useEffect, useRef} from "../../_snowpack/pkg/react.js";
import styles from "./SelectSearchable.module.css.proxy.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faAngleUp, faAngleDown, faTimes} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
function useVisible(initialIsVisible) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return {ref, isVisible, setIsVisible};
}
export default function SelectSearchable(props) {
  const [keyword, setKeyword] = useState("");
  const input = useRef(null);
  const items = props.items;
  const allowMultiple = props.allowMultiple;
  const width = props.width;
  const keywords = keyword.split(" ").filter((word) => word.length > 0);
  const multiFiltered = () => {
    return items.filter((item) => keywords.every((keyword2) => String(item.label).toLowerCase().includes(keyword2.toLowerCase())));
  };
  const {ref, isVisible, setIsVisible} = useVisible(false, input);
  function onClickItemHandler(pEvent, pItem) {
    console.log("\u{1F680} -> onClickItemHandler -> pItem", pItem);
    pEvent.stopPropagation();
    if (pEvent.currentTarget.className.includes("delete")) {
      if (props.deleteMode === "keep") {
        const itemToUpdateIndex = props.selectedItems.findIndex((item) => item.UserGUID === pItem.UserGUID);
        const itemsToUpdate = [...props.selectedItems];
        itemsToUpdate[itemToUpdateIndex].IsDeleted = true;
        props.onSelectItem([...itemsToUpdate]);
      } else
        props.onSelectItem(props.selectedItems.filter((item) => item.GUID !== pItem.GUID));
      return;
    }
    if (allowMultiple) {
      const clickedItemIndex = props.selectedItems.findIndex((item) => item.label === pItem.label);
      if (clickedItemIndex > -1) {
        props.onSelectItem(props.selectedItems.filter((item) => item !== pItem));
      } else
        props.onSelectItem([...props.selectedItems, pItem]);
    } else {
      props.onSelectItem([pItem]);
      setIsVisible(false);
    }
  }
  useEffect(() => {
    if (input.current)
      input.current.focus();
  }, [isVisible]);
  const cssWidth = width === "s" ? styles.ListSmall : width === "m" ? styles.ListMedium : styles.ListLarge;
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.selectSearchable_Container
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.selectSearchable_Header,
    onClick: (e) => setIsVisible(!isVisible)
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.selectSearchable_SelectedContainer
  }, props.selectedItems.map((item, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    className: styles.selectSearchable_SelectedItem
  }, item.label, /* @__PURE__ */ React.createElement("span", {
    className: styles.selectedItem_delete,
    onClick: (e) => onClickItemHandler(e, item)
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faTimes
  })))).filter((item) => !item.Isdeleted)), /* @__PURE__ */ React.createElement("div", {
    className: styles.selectSearchable_Trigger
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: isVisible ? faAngleDown : faAngleUp
  }))), isVisible && /* @__PURE__ */ React.createElement("div", {
    style: {position: "absolute"},
    className: `${styles.selectSearchable_List} ${cssWidth}`,
    ref
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.selectSearchable_SearchContainer
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: keyword,
    onChange: (e) => setKeyword(e.target.value),
    ref: input
  }), /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faTimes,
    onClick: (e) => setKeyword("")
  })), /* @__PURE__ */ React.createElement("div", {
    className: styles.selectSearchable_ItemsContainer
  }, multiFiltered().map((item, index) => /* @__PURE__ */ React.createElement("span", {
    key: index,
    className: `${styles.selectItem} ${props.selectedItems.findIndex((selectedItem) => item.label === selectedItem.label) > -1 ? styles.selectSearchable_SelectedItem_Selected : ""}`,
    onClick: (e) => onClickItemHandler(e, item)
  }, item.label)))));
}
