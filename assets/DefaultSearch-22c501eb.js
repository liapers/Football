import{_ as c,j as l,o as i,e as d,p as u,y as p,a as e,z as _,s as h,x as v}from"./index-9781e4d8.js";const m=t=>(h("data-v-d73483fb"),t=t(),v(),t),f={class:"relative mb-7"},y=m(()=>e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-0"},[e("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1)),b=["onKeyup"],x={__name:"DefaultSearch",emits:["submit"],setup(t,{emit:n}){const s=l(""),a=async()=>{n("submit",s.value)};return(w,o)=>(i(),d("div",f,[y,u(e("input",{id:"default-search",type:"search","onUpdate:modelValue":o[0]||(o[0]=r=>s.value=r),onKeyup:_(a,["enter"]),class:"search-input",placeholder:"Название лиги",required:""},null,40,b),[[p,s.value]]),e("button",{onClick:a,type:"submit",class:"search-btn"}," Поиск ")]))}},g=c(x,[["__scopeId","data-v-d73483fb"]]);export{g as D};