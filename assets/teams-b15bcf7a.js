import{i as d,j as c,k as o}from"./index-49a1bce0.js";const m=d("teams",()=>{const e=c(void 0),n=c(void 0);async function u(){const a=await o({method:"GET",url:"/teams",params:{api_token:"17hqpW8cicGA4F6bUYwgYCvcl2wfboDtWlaOMsjaHVGt8V4xOsjhenuD5v71",include:"country,league"}});e.value=a.data.data}async function i(t){const a={method:"GET",url:`/teams/search/${t}`,params:{api_token:"17hqpW8cicGA4F6bUYwgYCvcl2wfboDtWlaOMsjaHVGt8V4xOsjhenuD5v71",include:"country,league"}},s=await o(a);e.value=s.data.data}async function l(t){const a={method:"GET",url:`/teams/${t}`,params:{api_token:"17hqpW8cicGA4F6bUYwgYCvcl2wfboDtWlaOMsjaHVGt8V4xOsjhenuD5v71",include:"country,league,squad.player.position,coach"}},s=await o(a);n.value=s.data.data}async function r(t){const a={method:"GET",url:`/teams/season/${t}`,params:{api_token:"17hqpW8cicGA4F6bUYwgYCvcl2wfboDtWlaOMsjaHVGt8V4xOsjhenuD5v71",include:"stats,coach"}},s=await o(a);e.value=s.data.data}return{teams:e,team:n,load:u,loadOne:l,search:i,loadBySeason:r}});export{m as u};
