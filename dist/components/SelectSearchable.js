import l,{useState as S,useEffect as I,useRef as h}from"../../web_modules/react.js";import c from"./SelectSearchable.module.css.proxy.js";import{FontAwesomeIcon as u}from"../../web_modules/@fortawesome/react-fontawesome.js";import{faAngleUp as g,faAngleDown as k,faTimes as w}from"../../web_modules/@fortawesome/free-solid-svg-icons.js";function C(t){const[r,i]=S(t),n=h(null),_=m=>{n.current&&!n.current.contains(m.target)&&i(!1)};return I(()=>(document.addEventListener("click",_,!0),()=>{document.removeEventListener("click",_,!0)}),[]),{ref:n,isVisible:r,setIsVisible:i}}export default function N(t){const[r,i]=S(""),n=h(null),_=t.items,m=t.allowMultiple,f=t.width,R=r.split(" ").filter(e=>e.length>0),P=()=>_.filter(e=>R.every(s=>String(e.label).toLowerCase().includes(s.toLowerCase()))),{ref:U,isVisible:o,setIsVisible:E}=C(!1,n);function b(e,s){if(e.stopPropagation(),e.currentTarget.className.includes("delete")){t.onSelectItem(t.selectedItems.filter(a=>a.label!==s.label));return}if(m){const a=t.selectedItems.findIndex(d=>d.label===s.label);a>-1?t.onSelectItem(t.selectedItems.filter(d=>d!==s)):t.onSelectItem([...t.selectedItems,s])}else t.onSelectItem([s]),E(!1)}I(()=>{n.current&&n.current.focus()},[o]);const v=f==="s"?c.ListSmall:f==="m"?c.ListMedium:c.ListLarge;return l.createElement("div",{className:c.selectSearchable_Container},l.createElement("div",{className:c.selectSearchable_Header,onClick:e=>E(!o)},l.createElement("div",{className:c.selectSearchable_SelectedContainer},t.selectedItems.map((e,s)=>l.createElement("div",{key:s,className:c.selectSearchable_SelectedItem},e.label,l.createElement("span",{className:c.selectedItem_delete,onClick:a=>b(a,e)},l.createElement(u,{icon:w}))))),l.createElement("div",{className:c.selectSearchable_Trigger},l.createElement(u,{icon:o?k:g}))),o&&l.createElement("div",{style:{position:"absolute"},className:`${c.selectSearchable_List} ${v}`,ref:U},l.createElement("div",{className:c.selectSearchable_SearchContainer},l.createElement("input",{type:"text",value:r,onChange:e=>i(e.target.value),ref:n}),l.createElement(u,{icon:w,onClick:e=>i("")})),l.createElement("div",{className:c.selectSearchable_ItemsContainer},P().map((e,s)=>l.createElement("span",{key:s,className:`${c.selectItem} ${t.selectedItems.findIndex(a=>e.label===a.label)>-1?c.selectSearchable_SelectedItem_Selected:""}`,onClick:a=>b(a,e)},e.label)))))}