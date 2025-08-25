import{j as e,d as i,N as y,r as s,u as m,a as k,b as w,l as C,c as M,e as x,f as S,g as H,h as L,O}from"./index-CrLZqs61.js";import{L as A}from"./Logo-DvpDcO3R.js";import{H as $,a as N,b as z,c as D,d as E}from"./index-CULUCp8g.js";import{H as R,a as T,b as U,c as _,d as B}from"./index-jHi3EtOl.js";import{S as P}from"./SpinnerMini-D9POkGas.js";import"./Button-B3XPtGEn.js";import"./iconBase-X9fXyL-d.js";const X=i.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,d=i(y)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;function I(){return e.jsx("nav",{children:e.jsxs(X,{children:[e.jsx("strong",{children:" Main Menu"}),e.jsx("li",{children:e.jsxs(d,{to:"/dashboard",children:[e.jsx($,{}),e.jsx("span",{children:"Dashboard"})]})}),e.jsx("li",{children:e.jsxs(d,{to:"todos",children:[e.jsx(R,{}),e.jsx("span",{children:"Tasks"})]})}),e.jsx("li",{children:e.jsxs(d,{to:"categories",children:[e.jsx(N,{}),e.jsx("span",{children:"Categories"})]})}),e.jsx("li",{children:e.jsxs(d,{to:"calendar",children:[e.jsx(T,{}),e.jsx("span",{children:"Calendar"})]})}),e.jsx("strong",{children:"Settings"}),e.jsx("li",{children:e.jsxs(d,{to:"",children:[e.jsx(U,{}),e.jsx("span",{children:"Settings "})]})}),e.jsx("li",{children:e.jsxs(d,{to:"",children:[e.jsx(z,{}),e.jsx("span",{children:"Supports "})]})})]})})}/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),F=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,n)=>n?n.toUpperCase():o.toLowerCase()),g=r=>{const t=F(r);return t.charAt(0).toUpperCase()+t.slice(1)},p=(...r)=>r.filter((t,o,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===o).join(" ").trim(),W=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=s.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:l="",children:a,iconNode:j,...u},f)=>s.createElement("svg",{ref:f,...Z,width:t,height:t,stroke:r,strokeWidth:n?Number(o)*24/Number(t):o,className:p("lucide",l),...!a&&!W(u)&&{"aria-hidden":"true"},...u},[...j.map(([v,b])=>s.createElement(v,b)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(r,t)=>{const o=s.forwardRef(({className:n,...l},a)=>s.createElement(q,{ref:a,iconNode:t,className:p(`lucide-${Q(g(r))}`,`lucide-${r}`,n),...l}));return o.displayName=g(r),o};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],G=h("menu",K);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],V=h("x",J),Y=i.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  z-index: 1001;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    position: static;
    grid-column: 1/2;
    grid-row: 1/-1;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 240px;
    transform: ${({$open:r})=>r?"translateX(0)":"translateX(-100%)"};
  }
`,ee=i.button`
  position: fixed;
  top: 1.2rem;
  left: 1.2rem;
  background: var(--color-brand-500);
  color: #fff;
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  z-index: 1100;
  cursor: pointer;

  &:hover {
    background: var(--color-brand-600);
  }

  @media (min-width: 769px) {
    display: none;
  }
`,re=i.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    opacity: ${({$open:r})=>r?"1":"0"};
    visibility: ${({$open:r})=>r?"visible":"hidden"};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
`;function te(){const[r,t]=s.useState(!1),o=()=>t(l=>!l),n=()=>t(!1);return e.jsxs(e.Fragment,{children:[e.jsx(ee,{onClick:o,children:r?e.jsx(V,{size:20}):e.jsx(G,{size:20})}),e.jsx(re,{$open:r,onClick:n}),e.jsxs(Y,{$open:r,children:[e.jsx(A,{}),e.jsx(I,{})]})]})}const c=i.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;function oe(){const r=m(),t=k(),{mutate:o,isPending:n}=w({mutationFn:C,onSuccess:()=>{t.removeQueries(),r("/login",{replace:!0})}});return{logout:o,isPending:n}}function ie(){const{logout:r,isPending:t}=oe();return e.jsx(c,{disabled:t,onClick:r,children:t?e.jsx(P,{}):e.jsx(_,{})})}function ne(){const{isDarkMode:r,toggleDarkMode:t}=M();return e.jsx(c,{onClick:t,children:r?e.jsx(D,{}):e.jsx(E,{})})}const se=i.ul`
  display: flex;
  gap: 0.4rem;
`;function ae(){const r=m();return e.jsxs(se,{children:[e.jsx("li",{children:e.jsx(c,{onClick:()=>r("/account"),children:e.jsx(B,{})})}),e.jsx("li",{children:e.jsx(ne,{})}),e.jsx("li",{children:e.jsx(ie,{})})]})}const de=i.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`,le=i.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;function ce(){const{user:r}=x(),{fullName:t,avatar:o}=r.user_metadata;return e.jsxs(de,{children:[e.jsx(le,{src:o||"default-user.jpg",alt:`Avatar of ${t}`}),e.jsx("span",{children:t})]})}const ue=i.header`
  position: fixed;
  width: 100%;
  background-color: var(--color-grey-0);
  padding: 1.4rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  z-index: 100;

  @media (max-width: 476px) {
    flex-direction: column;
  }
`;function ge(){return e.jsxs(ue,{children:[e.jsx(ce,{}),e.jsx(ae,{})]})}const me=i.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
  }
`,xe=i.main`
  margin-top: 50px;
  min-height: 100vh;
  background-color: var(--color-grey-50);
  padding: 4rem 3rem 6.4rem;
  grid-column: 2/-1;

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 3rem;
    grid-column: 1;
  }
  @media (max-width: 476px) {
    margin-top: 120px;
  }
`,pe=i.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function we(){const{user:r}=x(),t=S();return s.useEffect(()=>{r&&(t(H(r.id)),t(L(r.id)))},[r]),e.jsxs(me,{children:[e.jsx(ge,{}),e.jsx(te,{}),e.jsx(xe,{children:e.jsx(pe,{children:e.jsx(O,{})})})]})}export{we as default};
