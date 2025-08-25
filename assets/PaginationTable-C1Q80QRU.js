import{d as i,r as d,j as e,ab as g,f as m}from"./index-CrLZqs61.js";import{g as f,h as v,i as b}from"./index-jHi3EtOl.js";import{u as j}from"./Select-DqdAEI0N.js";const I=i.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
  @media (max-width: 1068px) {
    /* flex-direction: column; */
  }
`,y=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,w=i.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`,C=i.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${o=>o.position.x}px;
  top: ${o=>o.position.y}px;
`,k=i.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`,u=d.createContext();function h({children:o}){const[n,t]=d.useState(""),[r,s]=d.useState(null),a=()=>t(""),c=t;return e.jsx(u.Provider,{value:{openId:n,open:c,close:a,position:r,setPosition:s},children:o})}function S({id:o}){const{openId:n,open:t,close:r,setPosition:s}=d.useContext(u);function a(c){const l=c.target.closest("button").getBoundingClientRect();s({x:window.innerWidth-l.width-l.x,y:l.y+l.height+8}),n===""||n!==o?t(o):r()}return e.jsx(w,{onClick:a,children:e.jsx(f,{})})}function B({id:o,children:n}){const{openId:t,position:r,close:s}=d.useContext(u),a=j(s);return t!==o?null:g.createPortal(e.jsx(C,{position:r,ref:a,children:n}),document.body)}function M({children:o,icon:n,onClick:t}){const{close:r}=d.useContext(u);function s(){t?.(),r()}return e.jsx("li",{children:e.jsxs(k,{onClick:s,children:[n,e.jsxs("span",{children:[" ",o]})]})})}h.Menu=y;h.Toggle=S;h.List=B;h.Button=M;const T=i.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,E=i.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`,L=i.div`
  display: flex;
  gap: 0.6rem;
`,x=i.button`
  background-color: ${o=>o.active?" var(--color-brand-600)":"var(--color-grey-50)"};
  color: ${o=>o.active?" var(--color-brand-50)":"inherit"};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function O({totalItems:o,currentPage:n,totalPages:t,limit:r,setPage:s}){const a=m();function c(){const p=n===t?n:n+1;a(s(p))}function l(){const p=n===1?n:n-1;a(s(p))}return t<=1?null:e.jsxs(T,{children:[e.jsxs(E,{children:["Showing ",e.jsx("strong",{children:(n-1)*r+1})," to"," ",e.jsx("strong",{children:n===t?o:n*r})," ","of ",e.jsx("strong",{children:o})," results"]}),e.jsxs(L,{children:[e.jsxs(x,{onClick:l,disabled:n===1,children:[e.jsx(v,{}),e.jsx("span",{children:"Previous"})]}),e.jsxs(x,{onClick:c,disabled:n===t,children:[e.jsx("span",{children:"Next"}),e.jsx(b,{})]})]})]})}export{O as C,h as M,I as T};
