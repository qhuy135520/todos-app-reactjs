import{u as x,r as l,ak as j,j as e,d as h}from"./index-CrLZqs61.js";import{B as d}from"./Button-B3XPtGEn.js";import{F as f,I as m}from"./Input-rFDySL4F.js";import{F as o}from"./FormRowVertical-C1JrIQHh.js";import{S as u}from"./SpinnerMini-D9POkGas.js";import{L as v}from"./Logo-DvpDcO3R.js";import{H as y}from"./Heading-Bdaq5l28.js";import"./iconBase-X9fXyL-d.js";function b(){const c=x(),[s,n]=l.useState("huyltqse135@gmail.com"),[r,i]=l.useState("123123123"),{login:g,isPending:a}=j();function p(t){t.preventDefault(),!(!s||!r)&&g({email:s,password:r},{onSettled:()=>{n(""),i("")}})}return e.jsxs(f,{type:"regular",onSubmit:p,children:[e.jsx(o,{label:"Email address",children:e.jsx(m,{type:"email",id:"email",autoComplete:"username",value:s,onChange:t=>n(t.target.value),disabled:a})}),e.jsx(o,{label:"Password",children:e.jsx(m,{type:"password",id:"password",autoComplete:"current-password",value:r,onChange:t=>i(t.target.value),disabled:a})}),e.jsxs(o,{children:[e.jsx(d,{variation:"primary",size:"large",disabled:a,children:a?e.jsx(u,{}):"Login"}),e.jsx(d,{type:"button",variation:"danger",size:"large",disabled:a,onClick:()=>c("/signup"),children:a?e.jsx(u,{}):e.jsxs("span",{children:["New to Todos? ",e.jsx("strong",{children:"Create an account"})]})})]})]})}const L=h.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;function B(){return e.jsxs(L,{children:[e.jsx(v,{}),e.jsx(y,{as:"h4",children:"Login to your account"}),e.jsx(b,{})]})}export{B as default};
