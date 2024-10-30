import{j as e,r as n}from"./index-36facba6.js";import{e as b}from"./index-13c649e4.js";import{a as f}from"./index-c7d71a88.js";import{u as j}from"./useTranslation-ce2bf323.js";import"./iconBase-c6e4eced.js";import"./index-429047aa.js";const d=({options:r,value:i,onChange:o,name:c})=>e.jsxs("div",{className:"relative mb-4",children:[e.jsx("label",{className:"block",htmlFor:""}),e.jsx("select",{name:c,value:i,onChange:s=>o(s.target.value),className:"block appearance-none w-full border-[1px] text-[#764095] border-slate-300 px-2 py-1.5 pr-8 outline-none shadow-md shadow-[#764095] bg-white",style:{backgroundImage:`url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"%3E%3Cpath fill="%23764095" d="M12 14l-6-6h12z"/%3E%3C/svg%3E')`,backgroundRepeat:"no-repeat",backgroundPosition:"left 10px center",backgroundSize:"12px 12px"},children:r.map(s=>e.jsx("option",{value:s,children:s},s))})]}),k=()=>{const[r,i]=n.useState(""),[o,c]=n.useState(""),{t:s}=j(),[m,l]=n.useState(null),a=n.useRef(null),x=t=>{i(t)},u=t=>{c(t)},p=t=>{t.preventDefault(),a.current&&b.sendForm("service_3e0zp94","template_vu8faoq",a.current,"20Rrwww1sQ90ePKw_").then(()=>{l("تم تسجيل ردكم بنجاح"),a.current},h=>{l(`FAILED... ${h.text}`)})};return e.jsxs("div",{className:"w-full flex items-center justify-center pr-5",children:[e.jsxs("form",{onSubmit:p,ref:a,className:" md:w-4/12 w-5/6 mt-5",children:[e.jsxs("div",{className:"mb-2",children:[e.jsxs("label",{className:"mb-1 inline-block text-sm font-medium text-[#764095]",children:[s("phone number"),e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsxs("div",{className:"flex items-center border-[1px] border-slate-300 flex-row-reverse px-2 shadow-md shadow-[#764095]",children:[e.jsx("img",{src:"/images/ssa.png",alt:"Saudi Arabia",className:"w-8 h-6 mr-2"}),e.jsx("span",{className:"text-[#764095] mr-2",children:"+966"}),e.jsx("input",{id:"number",name:"phone",type:"tel",className:"w-full no-spin py-1.5 outline-none",required:!0})]})]}),e.jsxs("div",{className:"mb-2",children:[e.jsxs("label",{className:"mb-1 inline-block text-sm font-medium text-[#764095]",children:[s("full name"),e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{id:"name-input",name:"user_name",type:"text",className:"w-full border-[1px] border-slate-300 px-2.5 py-1.5 outline-none shadow-md shadow-[#764095]",required:!0})]}),e.jsxs("div",{className:"mb-2",children:[e.jsxs("label",{className:"mb-1 inline-block text-sm font-medium text-[#764095]",children:[s("المدينة"),e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx(d,{name:"city",options:["الدمام","الرياض"],value:r,onChange:x})]}),e.jsxs("div",{className:"mb-2",children:[e.jsxs("label",{className:"mb-1 inline-block text-sm font-medium text-[#764095]",children:[s("Services"),e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx(d,{name:"toolmakerID",options:[" ــــــ الرجاء تحديد اختيار ــــــ","خدمات التشييد والبناء","خدمات التصميم الداخلي","خدمات التشطيب والديكور","خدمات التأثيث","خدمة حلول البناء المستدامة"],value:o,onChange:u})]}),e.jsx("input",{className:"mt-3 w-full   bg-[#764095] px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700",type:"submit",value:s("Send")})]}),m&&e.jsx("div",{className:"fixed text-[#764095] top-56 flex items-center justify-center",children:e.jsxs("div",{className:"bg-white text-black p-6 rounded-lg shadow-lg w-96 h-32 flex flex-col items-center justify-center",children:[e.jsx("button",{onClick:()=>l(null),className:"relative left-40 top-0 mb-4 font-bold  w-7 h-7 text-black text-3xl z-50","aria-label":"Close",children:e.jsx(f,{})}),e.jsx("p",{className:"text-lg font-semibold absolute top-3",children:m}),e.jsx("button",{onClick:()=>l(null),className:"bg-[#764095] text-white px-4 py-2 mt-3 hover:bg-indigo-700",children:s("Close")})]})})]})};export{k as default};