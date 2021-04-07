import c,{useState as I,useEffect as S,useRef as U}from"../../web_modules/react.js";import a from"./SelectSearchable.module.css.proxy.js";import{FontAwesomeIcon as u}from"../../web_modules/@fortawesome/react-fontawesome.js";import{faAngleUp as g,faAngleDown as C,faTimes as h}from"../../web_modules/@fortawesome/free-solid-svg-icons.js";function N(e){const[_,r]=I(e),n=U(null),o=m=>{n.current&&!n.current.contains(m.target)&&r(!1)};return S(()=>(document.addEventListener("click",o,!0),()=>{document.removeEventListener("click",o,!0)}),[]),{ref:n,isVisible:_,setIsVisible:r}}export default function y(e){const[_,r]=I(""),n=U(null),o=e.items,m=e.allowMultiple,f=e.width,w=_.split(" ").filter(t=>t.length>0),R=()=>{let t=o.filter(s=>w.every(l=>String(s.label).toLowerCase().includes(l.toLowerCase())));return t.sort((s,l)=>s.label<l.label?-1:s.label>l.label?1:0),t},{ref:P,isVisible:d,setIsVisible:b}=N(!1,n);function E(t,s){if(t.stopPropagation(),!e.disabled){if(t.currentTarget.className.includes("delete")){if(e.deleteMode==="keep"){const l=e.selectedItems.findIndex(v=>v.UserGUID===s.UserGUID),i=[...e.selectedItems];i[l].IsDeleted=!0,e.onSelectItem([...i])}else e.onSelectItem(e.selectedItems.filter(l=>l.GUID!==s.GUID));return}if(m){const l=e.selectedItems.findIndex(i=>i.label===s.label);l>-1?e.onSelectItem(e.selectedItems.filter(i=>i!==s)):e.onSelectItem([...e.selectedItems,s])}else e.onSelectItem([s]),b(!1)}}S(()=>{n.current&&n.current.focus()},[d]);const k=f==="s"?a.ListSmall:f==="m"?a.ListMedium:a.ListLarge;return c.createElement("div",{className:a.selectSearchable_Container},c.createElement("div",{className:a.selectSearchable_Header,onClick:t=>e.disabled?"":b(!d)},c.createElement("div",{className:a.selectSearchable_SelectedContainer},e.selectedItems.map((t,s)=>c.createElement("div",{key:s,className:a.selectSearchable_SelectedItem},t.label,c.createElement("span",{className:a.selectedItem_delete,onClick:l=>E(l,t)},c.createElement(u,{icon:h})))).filter(t=>!t.Isdeleted)),c.createElement("div",{className:a.selectSearchable_Trigger},c.createElement(u,{icon:d?C:g}))),d&&c.createElement("div",{style:{position:"absolute"},className:`${a.selectSearchable_List} ${k}`,ref:P},c.createElement("div",{className:a.selectSearchable_SearchContainer},c.createElement("input",{type:"text",value:_,onChange:t=>r(t.target.value),ref:n}),c.createElement(u,{icon:h,onClick:t=>r("")})),c.createElement("div",{className:a.selectSearchable_ItemsContainer},R().map((t,s)=>c.createElement("span",{key:s,className:`${a.selectItem} ${e.selectedItems.findIndex(l=>t.label===l.label)>-1?a.selectSearchable_SelectedItem_Selected:""}`,onClick:l=>E(l,t)},t.label)))))}
