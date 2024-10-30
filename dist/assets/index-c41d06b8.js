import{r as i,j as e}from"./index-36facba6.js";import{e as c}from"./index-13c649e4.js";import{a as m}from"./index-c7d71a88.js";import{u as x}from"./useTranslation-ce2bf323.js";import"./iconBase-c6e4eced.js";import"./index-429047aa.js";const g=()=>{const{t}=x(),[a,l]=i.useState(null),s=i.useRef(null),r=o=>{o.preventDefault(),s.current&&c.sendForm("service_3e0zp94","template_vu8faoq",s.current,"20Rrwww1sQ90ePKw_").then(()=>{l("تم تسجيل ردكم بنجاح"),s.current},n=>{l(`FAILED... ${n.text}`)})};return e.jsx("div",{className:"bg-[#D4D4D4] ",children:e.jsxs("div",{className:"  mx-auto xl:w-1/3 md:w-3/4 w-4/5 pt-20 rtl:font-bien",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center w-full mb-4",children:[" ",e.jsx("h3",{className:"hidden md:block text-[#764095] font-normal text-lg",children:t("Want to work with us")}),e.jsx("h1",{className:"hidden md:block mt-3 font-bold text-[#764095] text-xl text-justify",children:t("We offer you all the options that suit your needs, ready to serve you")})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs("form",{className:" flex flex-col gap-2",ref:s,onSubmit:r,children:[e.jsx("label",{className:"mb-1 inline-block text-sm font-medium text-[#764095]",children:t("full name")}),e.jsx("input",{type:"text",name:"user_name",placeholder:t("full name"),className:"bg-[#764095] bg-opacity-80 active:border-0  outline-[#764095] text-white placeholder:text-white p-2.5 mb-2 flex-1 placeholder:rtl:text-right",required:!0}),e.jsx("label",{className:"mb-1 inline-block text-sm font-medium text-[#764095]",children:t("phone number")}),e.jsx("div",{className:"",children:e.jsxs("div",{className:" flex items-center flex-row-reverse bg-[#764095] px-2 outline-[#764095]",children:[e.jsx("img",{src:"/images/ssa.png",alt:"Saudi Arabia",className:"w-8 h-6 mr-2"}),e.jsx("span",{className:"text-white mr-2",children:"+966"}),e.jsx("input",{type:"tel",className:"bg-[#764095] bg-opacity-80 active:border-0  outline-none text-white placeholder:text-white p-2.5 mb-2 flex-1 placeholder:rtl:text-right",placeholder:t("phone number"),name:"phone",required:!0})]})}),e.jsx("label",{className:" mb-1 inline-block text-sm font-medium text-[#764095]",children:t("ُEmail")}),e.jsx("input",{type:"email",name:"user_email",placeholder:t("ُEmail"),className:"bg-[#764095] bg-opacity-80 active:border-0 outline-[#764095] text-white placeholder:text-white p-2.5 mb-2 flex-1 placeholder:rtl:text-right",required:!0}),e.jsxs("h3",{className:"ml-3 font-bold text-[#764095]",children:[" ",t("Request Type")]}),e.jsxs("div",{className:"grid grid-cols-2 gap-y-4 mt-2  ",children:[e.jsxs("div",{className:"flex gap-2 justify-center items-center",children:[e.jsx("input",{id:"toolmaker1",name:"toolmakerID",type:"checkbox",value:t("Quotation"),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"}),e.jsx("label",{className:"w-full  text-sm font-medium text-[#764095] ",children:t("Quotation")})]}),e.jsxs("div",{className:"flex gap-2 justify-center items-center",children:[e.jsx("input",{id:"toolmaker2",name:"toolmakerID",type:"checkbox",value:t("Visit"),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"}),e.jsx("label",{className:"w-full  text-sm font-medium text-[#764095] ",children:t("Visit")})]}),e.jsxs("div",{className:"flex gap-2 justify-center items-center",children:[e.jsx("input",{id:"toolmaker3",name:"toolmakerID",type:"checkbox",value:t("Talk to Customer Service"),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"}),e.jsx("label",{className:"w-full text-sm font-medium text-[#764095] ",children:t("Talk to Customer Service")})]}),e.jsxs("div",{className:"flex gap-2 justify-center items-center",children:[e.jsx("input",{id:"toolmaker4",name:"toolmakerID",type:"checkbox",value:t("Consultation-con"),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"}),e.jsx("label",{className:"w-full  text-sm font-medium text-[#764095] ",children:t("Consultation-con")})]})]}),e.jsx("label",{className:"my-3 ml-3 inline-block text-sm font-bold text-[#764095]",children:t("Notes With The Request")}),e.jsx("textarea",{placeholder:t("Message"),className:"bg-[#764095] bg-opacity-80 active:border-2 active:border-[#764095]  outline-[#764095] h-[20vh] text-white placeholder:text-white p-2 w-full  placeholder:rtl:text-right",rows:5,name:"message"}),e.jsx("input",{className:"mt-3 w-full   bg-[#764095] px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700",type:"submit",value:t("Send")})]}),a&&e.jsx("div",{className:"fixed text-[#764095] top-56 flex items-center justify-center",children:e.jsxs("div",{className:"bg-white text-black p-6 rounded-lg shadow-lg w-96 h-32 flex flex-col items-center justify-center",children:[e.jsx("button",{onClick:()=>l(null),className:"relative left-40 top-0 mb-4 font-bold  w-7 h-7 text-black text-3xl z-50","aria-label":"Close",children:e.jsx(m,{})}),e.jsx("p",{className:"text-lg font-semibold absolute top-3",children:a}),e.jsx("button",{onClick:()=>l(null),className:"bg-[#764095] text-white px-4 py-2 mt-3 hover:bg-indigo-700",children:t("Close")})]})})]})]})})};export{g as default};
