import{R as b,r as a,j as s}from"./index-8028d633.js";import{M as d,a as u}from"./index-83ed1e2c.js";import{u as f,F as h,a as w}from"./index-fdbbaa49.js";const y=["/images/br1.jpg","/images/br2.jpg","/images/br3.jpg","/images/br4.jpg","/images/br5.jpg","/images/br6.jpg","/images/22.jpg","/images/br8.jpg","/images/br9.jpg","/images/br10.jpg","/images/br11.jpg","/images/br12.jpg","/images/br13.jpg","/images/br14.jpg","/images/br15.jpg","/images/br16.jpg","/images/br17.jpg","/images/br18.jpg","/images/br19.jpg","/images/br20.jpg"],k=["/images/f1.jpg","/images/f2.jpg","/images/f3.jpg","/images/f4.jpg","/images/f5.jpg","/images/f6.jpg","/images/f7.jpg","/images/f8.jpg","/images/f9.jpg","/images/f10.jpg","/images/f11.jpg","/images/f12.jpg","/images/f13.jpg","/images/f14.jpg","/images/f15.jpg","/images/f16.jpg","/images/f17.jpg","/images/f18.jpg","/images/f19.jpg","/images/f20.jpg"],N=["/images/s1.jpg","/images/s2.jpg","/images/s3.jpg","/images/s4.jpg","/images/s5.jpg","/images/s6.jpg","/images/s7.jpg","/images/s8.jpg","/images/s9.jpg","/images/s10.jpg","/images/s11.jpg","/images/s12.jpg","/images/s13.jpg","/images/s14.jpg","/images/s15.jpg","/images/s16.jpg","/images/s17.jpg","/images/s18.jpg","/images/s19.jpg","/images/s20.jpg","/images/s21.jpg","/images/s22.jpg","/images/s23.jpg","/images/s24.jpg","/images/s25.jpg","/images/s26.jpg","/images/s27.jpg","/images/s28.jpg","/images/s29.jpg","/images/s30.jpg","/images/s31.jpg","/images/s32.jpg","/images/s33.jpg","/images/s34.jpg","/images/s35.jpg","/images/s36.jpg"],C={all:y,residential:k,commercial:N},v=()=>{const[j,o]=a.useState({img:"",i:0}),[i,c]=a.useState([]),[t,p]=a.useState("all"),{t:l}=f();a.useEffect(()=>{c(C[t])},[t]);const n=a.useCallback((e,g)=>{o({img:e,i:g})},[]),r=a.useCallback(e=>{o(g=>{let m=g.i;return e==="next-img"&&m<i.length-1?{img:i[m+1],i:m+1}:e==="prev-img"&&m>0?{img:i[m-1],i:m-1}:e==="close"?{img:"",i:0}:g})},[i]),x=a.useMemo(()=>i.map((e,g)=>s.jsx("img",{src:e,className:"xl:w-80 md:w-80 w-auto h-80 block cursor-pointer rounded-md",alt:`Gallery item ${g}`,onClick:()=>n(e,g),loading:"lazy"},g)),[i,n]);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tabs flex flex-wrap items-center justify-center  space-x-4 mb-4 mt-24 h-auto",children:[s.jsx("button",{className:`md:mt-2 mt-2 px-4 md:px-5 py-2 md:py-3 rounded bg-[#764095] rtl:ml-3 text-white transition-colors ${t==="all"?"bg-blue-500 text-white":""}`,onClick:()=>p("all"),children:l("Bedrooms")}),s.jsx("button",{className:` md:mt-2 mt-2 px-4 md:px-5 py-2 md:py-3 rounded bg-[#764095] text-white transition-colors ${t==="residential"?"bg-blue-500 text-white":""}`,onClick:()=>p("residential"),children:l("Dining Rooms")}),s.jsx("button",{className:`mt-2 md:mt-5 px-4 md:px-5 py-2 md:py-3 rounded bg-[#764095] text-white transition-colors ${t==="commercial"?"bg-blue-500 text-white":""}`,onClick:()=>p("commercial"),children:l("Halls")})]}),s.jsx("div",{className:"p-3",children:s.jsx(d,{columnsCountBreakPoints:{350:1,750:2,900:3,1200:4},children:s.jsx(u,{gutter:"5px",children:x})})}),j.img&&s.jsxs("div",{className:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50",children:[s.jsx("button",{onClick:()=>r("close"),className:"absolute top-10 right-10 text-white text-3xl",children:"X"}),s.jsx("button",{onClick:()=>r("prev-img"),className:"absolute left-10 text-white text-3xl",children:s.jsx(h,{})}),s.jsx("img",{src:j.img,className:"w-auto max-w-[90%] max-h-[90%]"}),s.jsx("button",{onClick:()=>r("next-img"),className:"absolute right-10 text-white text-3xl",children:s.jsx(w,{})})]})]})},M=b.memo(v);export{M as default};
