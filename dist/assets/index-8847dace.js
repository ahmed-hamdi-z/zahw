import{j as e}from"./index-36facba6.js";import{G as o}from"./iconBase-c6e4eced.js";import{u as a}from"./useTranslation-ce2bf323.js";import"./index-429047aa.js";function c(s){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"},child:[]}]})(s)}const d=({title:s,items:i,image:t})=>{const{t:n}=a();return e.jsxs("div",{className:"bg-[linear-gradient(0deg,#D4D4D4,#764095)] rtl:font-bien text-white xl:w-[400px] w-full sm:w-[350px] p-4 h-auto shadow-md shadow-[#764095]",children:[e.jsx("div",{className:"mb-2 flex rtl:justify-end justify-start",children:e.jsx("img",{src:t,alt:s,className:"w-12 h-12 object-contain"})}),e.jsx("div",{className:"flex items-center mb-3 rtl:justify-end justify-start",children:e.jsx("h2",{className:"text-2xl font-bold rtl:text-start rtl:font-bien",children:n(s)})}),e.jsx("ul",{className:"pl-3 space-y-1",children:i.map((r,l)=>e.jsxs("li",{className:"flex rtl:flex-row-reverse leading-snug rtl:justify-start rtl:text-end rtl:font-bien text-start",children:[e.jsx("span",{className:"text-white w-1 m-1 pr-4 rtl:rotate-180",children:e.jsx(c,{})}),n(r)]},l))})]})},m=()=>{const{i18n:s}=a(),i=[{title:"Construction Services",image:"/images/Building.png",items:["Concrete and insulation solutions","Electricity business solutions","Plumbing solutions","Commerce Business Solutions","Ceramic and flooring solutions","Painting business solutions","Cooling systems solutions","Renewable energy systems solutions"]},{title:"Interior Design Services",image:"/images/Interior.png",items:["Design of residential facades for villas and buildings","Designing commercial facades","Residential interior design for villas and apartments","Interior design for restaurants, cafes and offices","Landscape design"]},{title:"Finishing and decoration services",image:"/images/Finishing.png",items:["GRC Facade Works","Wooden, stone and marble cladding","decoration rules","General paint finishing","Interior wood, marble and porcelain works","mirrors and steel","Wallpaper","Paints, ceilings, walls, etc"]},{title:"Furnishing services",image:"/images/Furnishing.png",items:["We have customized furnishing","We have customized furnishing2","We have customized furnishing3"]},{title:"Sustainable building solutions service",image:"/images/Sustainable.png",items:["We have special solutions","Reducing the cost of operation and maintenance","Enhancing quality standards in the building"]}];return e.jsx("div",{className:`min-h-screen flex flex-col justify-center items-center p-4 ${s.dir()==="rtl"?"rtl":""}`,children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl",children:i.map((t,n)=>e.jsx(d,{title:t.title,items:t.items,image:t.image},n))})})},h=()=>{const{t:s,i18n:i}=a();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`absolute  ${i.dir()==="rtl"?"left-[50%]":"right-[50%] "} mt-[350px] transform -translate-x-1/2`,id:"services"}),e.jsx("div",{className:"min-h-[40vh] md:min-h-[70vh] flex justify-center items-center bg-fixed bg-parallex bg-cover bg-center bg-no-repeat mt-20",children:e.jsx("h1",{className:"md:text-6xl rtl:font-bien xl:text-6xl text-5xl text-center font-bold text-white",children:s("Services")})}),e.jsx("div",{className:"relative xl:mt-[-150px] md:mt-[-100px] mt-[-100px] flex items-center justify-center",children:e.jsx(m,{})})]})};export{h as default};
