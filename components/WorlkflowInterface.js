import t,{useState as p,useEffect as m,useContext as U}from"../web_modules/react.js";import b from"../WorkflowContext.js";export default function x(s){const[i,k]=p([]),u=U(b),[w,l]=p("Save"),a=u?.currentWorkflow;m(()=>{l("Save")},[a]);const _="https://api-uat.extrack.com/",d="sJecTXBNeAeC0T8VeHyEuPdns2bFpxaIeiSdpdoZ2zbv8x9gjIJoxA8UqwBfYhzYUUbD4EjBMEUGnjBNcKK0iRXHY_ItEzd-X9vO7mr5NxnIaxTVGci9YoKxLm3zoUraEorCBW7_6q7kQiXyxnXQ5v2nK6blNQCCeAgCP4-RMVh1erF1Ux5beMzWl1ttVfYVtXY_bbJQfuUfz-ccnmPQWvBmxkTB-NdiEYJ52r-Pv1e9uR7Vq97_YjkbPfknUVm9Byn7R3qiKVLhaxQ9bkrcQUYqum-Y9BUY8KO7275Gn0jeiuoO3nMw0ZTFMO_tEOOZUyeJyPYQPBaHKiGOJodAeJPBDGiHiMgFqGzz4mN1Wm_-U_jJJHKfbfY3Cp5LLYkz2klVilLTaXyWXT7UpR1gEjVespjVOxVPFMb_QKcVRUmJkSINgGrH_xiTE0NjettkRcQOt2blIqNKtkNVFMM5d25lN-1NPzjrAl7gxankDs_7vsXxLzwmWoXRmXTL__8ysrL-oMJtlVpUHGugu2QwdcRkhQ9FsfPHpgGNAtZ94shyMZXMTaLe6zUM66kvnG0mHpUd1LQNIO3ALbwuvH_GwVgHStN4SO3iIyvPY2kMIvu_h2l9FdUWYmvYItW9e7ppxe62x6pCexVHSWanEwGQwz-W3mZiSraFH5aF8rKMA3kUuj4422XFebBxSFyTsi-IjlZ6q60Z-wYA3x5zGvu6osznvGq9ag7FOxX-Vlvwutdp8l8_Q8YhMRGCRrBO8q5EQzkrWbR41pz-ckkzvciha6nYTv1ZO1b9BBlj7UlBLAxC8Klcw7I9_cDmDiR3BE0z4-ONAAunuIGV7gJ3_vHwvCYAcu6HozXEjO3lOA_kSIMDHhVrTbwfaswvTPG8Fyqi3yHATLpOg-yHIG1YtIjazTDzF4lXrMNmLvPWkqydjACNnRQdcoFYo_V-vFFB8_LqoDaZyd6cNG6cKSE-FVJ-ug",c=new Headers;c.append("Authorization",`Bearer ${d}`),c.append("Content-Type","application/x-www-form-urlencoded");const f={method:"GET",headers:c,redirect:"follow"};m(()=>{fetch(`${_}V1.0/WorkFlow/Templates`,f).then(e=>e.json()).then(e=>{console.log("%c Fetching Workflow ","background:red;color:white;"),console.log("----> Workflow response: ",e),k(e)}).catch(e=>console.log("error",e))},[]);function v(e){const o=i.filter(r=>r.GUID===e.target.value)[0];e.target.value!=="none"?s.onChangeTemplate(o):s.onChangeTemplate(void 0)}function g(e){console.log("pEvent",e.target)}function h(e){console.log("currentWorkflow to save:",a),l("Saving...");const o=new Headers;o.append("Authorization",`Bearer ${d}`),o.append("Content-Type","application/json");const r=JSON.stringify(a),E={method:"PUT",headers:o,body:r};fetch(`${_}V1.0/WorkFlow/Template`,E).then(n=>n.json()).then(n=>{console.log("%c Fetching Workflow ","background:red;color:white;"),console.log("----> Workflow response: ",n),l("Saved")}).catch(n=>console.log("error",n))}return t.createElement("div",{className:"App-header-content"},t.createElement("div",{className:"templateSelect"},t.createElement("h1",null,"Select a template:"),t.createElement("select",{name:"templateDropdown",id:"templateDropdown",onChange:v},t.createElement("option",{value:"none"},"-------------------"),i.map((e,o)=>t.createElement("option",{key:o,value:e.GUID},e.Title)))),a!==void 0&&t.createElement("div",{className:"actionBtns"},t.createElement("button",{className:"btn",onClick:g,disabled:!0},"Lock template"),t.createElement("button",{className:"btn",onClick:h,disabled:!1},w)))}
