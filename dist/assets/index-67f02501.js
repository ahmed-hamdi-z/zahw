import{r as a,j as e}from"./index-8028d633.js";import{u as d,e as c}from"./index-fdbbaa49.js";const b=()=>{const r=a.useRef(null),{t:s}=d(),[n,l]=a.useState(null),[u,i]=a.useState(null),m=o=>{o.preventDefault(),r.current&&c.sendForm("service_tc9dusc","template_4qrvjnp",r.current,"OT9OR1z7XDM1I2qYe").then(()=>{var t;i(!0),l("SUCCESS!"),setTimeout(()=>l(null),3e3),(t=r.current)==null||t.reset()},t=>{i(!1),l("FAILED..."),setTimeout(()=>l(null),3e3),console.log("FAILED...",t.text)})};return e.jsxs("div",{className:"w-full flex items-center justify-center",children:[e.jsxs("form",{onSubmit:m,className:"w-6/12",children:[e.jsxs("div",{className:"mb-2",children:[e.jsxs("label",{className:"mb-1 inline-block text-sm font-medium",children:[s("full name"),e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{id:"name-input",name:"user_name",type:"text",placeholder:s("full name"),className:"w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095]",required:!0})]}),e.jsxs("div",{className:"mb-2",children:[e.jsxs("label",{className:"mb-1 inline-block text-sm font-medium",children:[s("ُEmail"),e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{id:"email-input",name:"user_email",type:"email",placeholder:s("ُEmail"),className:"w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095]",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{className:"mb-1 inline-block text-sm font-medium",children:[s("phone number"),e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{id:"Mobile-number-input",type:"number",placeholder:s("phone number"),className:"w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095]",required:!0}),e.jsxs("label",{className:"mb-1 inline-block text-sm font-medium mt-2",children:[s("Message")," ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{id:"message",name:"message",type:"text",placeholder:"Enter Your Message",className:"w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095] h-40 placeholder:text-ellipsis",required:!0})]}),e.jsx("div",{className:"mb-4 flex w-full items-start gap-1.5"}),e.jsx("input",{value:s("Send"),type:"submit",className:"mb-1.5 w-full rounded bg-[#764095] px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"})]}),n&&e.jsx("div",{className:`fixed top-4 right-4 p-4 rounded shadow-lg z-50 ${u?"bg-green-500":"bg-red-500"} text-white`,children:n})]})};export{b as default};
