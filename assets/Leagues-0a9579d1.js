import{u}from"./leagues-62b2929c.js";import{r as g,o as r,c as m,w as p,a,t as n,b as _,d as y,e as c,f as h,F as d,g as b,h as f}from"./index-9781e4d8.js";import{D as x}from"./DefaultSearch-22c501eb.js";const v={class:"bg-teal-600 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"},S={class:"grid grid-cols-6 p-5 gap-y-2"},w=["src"],k={class:"col-span-5 md:col-span-4 ml-4"},B={class:"text-gray-600 font-bold"},L={class:"text-gray-400"},D={__name:"LeagueListItem",props:{id:Number,name:String,img:String,active:Boolean,type:String,country:String},setup(i){const e=i;return(s,l)=>{const o=g("router-link");return r(),m(o,{to:{name:"leagueDetail",params:{id:e.id}},class:"w-[30rem] border-2 border-b-4 border-gray-200 bg-white rounded-xl hover:bg-gray-200 mr-5 last:mr-0"},{default:p(()=>[a("p",v,n(e.country),1),a("div",S,[a("div",null,[a("img",{src:e.img,class:"max-w-16 max-h-16 bg-cover bg-center bg-gray-200"},null,8,w)]),a("div",k,[a("p",B,n(e.name),1),a("p",L,n(e.type==="domestic"?"Национальная лига":""),1)])])]),_:1},8,["to"])}}},N={key:0,class:"flex"},E={__name:"Leagues",setup(i){const e=_(()=>s.leagues),s=u(),l=async o=>{o?await s.search(o):s.load()};return y(()=>{s.load()}),(o,C)=>(r(),c(d,null,[h(x,{onSubmit:l}),e.value.length?(r(),c("ul",N,[(r(!0),c(d,null,b(e.value,t=>(r(),m(D,{key:t.id,id:t.id,img:t.logo_path,name:t.name,active:t.active,type:t.type,country:t.country.data.name},null,8,["id","img","name","active","type","country"]))),128))])):f("",!0)],64))}};export{E as default};
