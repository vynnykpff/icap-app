import{r as a,j as e,af as m,ag as p}from"./index-fff66478.js";import{W as u,T as x,B as h}from"./Common.styled-63f663c8.js";import{C as j,a as v,b as C,c as g,d as F}from"./Cards.styled-b4eac1df.js";const O=()=>{const[r,i]=a.useState(null),[l,o]=a.useState(null);a.useEffect(()=>{i(JSON.parse(window.localStorage.getItem("Favorites"))),o(!1)},[l]);const n=({e:s,favorite:t})=>{s.preventDefault();const c=(JSON.parse(window.localStorage.getItem("Favorites"))||[]).filter(d=>d.id!==t.id);window.localStorage.setItem("Favorites",JSON.stringify(c)),o(!0)};return e.jsxs(u,{children:[e.jsx(x,{children:"Favorites"}),e.jsx(j,{children:r!=null&&r.length?r.map(s=>e.jsxs(v,{to:`/${m}/${s.url}`,children:[e.jsx(C,{children:s.name}),e.jsx(g,{src:s.image}),e.jsx(F,{children:s.description}),e.jsx(h,{onClick:t=>n({e:t,favorite:s}),children:e.jsx(p,{})})]},s.id)):e.jsx("div",{children:"You have not favorites cards"})})]})};export{O as default};
