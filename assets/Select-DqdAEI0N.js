import{r as s,j as a,d as i,ab as u}from"./index-CrLZqs61.js";import{j as m}from"./index-jHi3EtOl.js";function h(e,t=!0){const r=s.useRef();return s.useEffect(()=>{function n(o){r.current&&!r.current.contains(o.target)&&e()}return document.addEventListener("click",n,!0),()=>document.removeEventListener("click",n,t)},[e]),r}const v=i.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  width: ${({size:e})=>e==="small"?"30rem":e==="large"?"88rem":"50rem"};

  @media (max-width: 1068px) {
    /* max-height: ${e=>e.name==="delete-task"?"40vh":"80vh"}; */
    max-height: 80vh;
    height: fit-content;
    overflow-y: scroll;
  }

  @media (max-width: 412px) {
    width: 90%;
  }
`,p=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 999999999999;
  transition: all 0.5s;
`,x=i.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`,l=s.createContext();function c({children:e}){const[t,r]=s.useState(""),n=()=>r(""),o=r;return a.jsx(l.Provider,{value:{openName:t,close:n,open:o},children:e})}function g({children:e,opens:t}){const{open:r}=s.useContext(l);return s.cloneElement(e,{onClick:()=>r(t)})}function f({children:e,name:t,size:r}){const{openName:n,close:o}=s.useContext(l),d=h(o);return t!==n?null:u.createPortal(a.jsx(p,{children:a.jsxs(v,{ref:d,size:r,name:t,children:[a.jsx(x,{onClick:o,children:a.jsx(m,{})}),a.jsx("div",{children:s.cloneElement(e,{onCloseModal:o})})]})}),document.body)}c.Open=g;c.Window=f;const b=i.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;function y({options:e,value:t,onChange:r,...n}){return a.jsx(b,{value:t,...n,onChange:r,children:e.map(o=>a.jsx("option",{value:o.value,children:o.label},o.value))})}export{c as M,y as S,h as u};
