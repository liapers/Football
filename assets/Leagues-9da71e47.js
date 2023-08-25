import{u as p}from"./leagues-f58104df.js";import{r as _,o,c as u,w as y,a,t as i,b as h,d as b,e as l,u as f,f as m,g as x,F as g,h as v}from"./index-5c2cf638.js";import{L as S}from"./Loader-044f9807.js";import{D as k}from"./DefaultSearch-09b8f05e.js";const w={class:"bg-teal-600 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"},L={class:"grid grid-cols-6 p-5 gap-y-2"},B=["src"],D={class:"col-span-5 md:col-span-4 ml-4"},N={class:"text-gray-600 font-bold"},C={class:"text-gray-400"},V={__name:"LeagueListItem",props:{id:Number,name:String,img:String,active:Boolean,type:String,country:String},setup(d){const e=d;return(r,s)=>{const n=_("router-link");return o(),u(n,{to:{name:"leagueDetail",params:{id:e.id}},class:"w-[30rem] border-2 border-b-4 border-gray-200 bg-white rounded-xl hover:bg-gray-200 mr-5 last:mr-0"},{default:y(()=>[a("p",w,i(e.country),1),a("div",L,[a("div",null,[a("img",{src:e.img,class:"max-w-16 max-h-16 bg-cover bg-center bg-gray-200"},null,8,B)]),a("div",D,[a("p",N,i(e.name),1),a("p",C,i(e.type==="domestic"?"Национальная лига":""),1)])])]),_:1},8,["to"])}}},F={key:1,class:"flex"},q={__name:"Leagues",setup(d){let e=!0;const r=h(()=>s.leagues),s=p(),n=async c=>{c?await s.search(c):s.load()};return b(()=>{s.load(),e=!1}),(c,$)=>(o(),l(g,null,[f(e)?(o(),u(S,{key:0})):m("",!0),x(k,{onSubmit:n}),r.value.length?(o(),l("ul",F,[(o(!0),l(g,null,v(r.value,t=>(o(),u(V,{key:t.id,id:t.id,img:t.logo_path,name:t.name,active:t.active,type:t.type,country:t.country.data.name},null,8,["id","img","name","active","type","country"]))),128))])):m("",!0)],64))}};export{q as default};
