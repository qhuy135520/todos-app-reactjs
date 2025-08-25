import{f,an as x,ao as I,j as e,ap as M,d as l,a2 as P,aq as O,ar as L,as as U,aj as $,e as B,at as _,r as S,au as E,av as W,aw as N,ai as V,h as G}from"./index-CrLZqs61.js";import{T as J,M as K,C as Q}from"./PaginationTable-C1Q80QRU.js";import{S as R,M as u}from"./Select-DqdAEI0N.js";import{B as C,C as X,a as q}from"./CreateTaskForm-B0T8CQHZ.js";import{I as j,F as A}from"./Input-rFDySL4F.js";import{u as y}from"./useTodos-BxtcYsy3.js";import{B as z}from"./Button-B3XPtGEn.js";import{F as h}from"./FormRowVertical-C1JrIQHh.js";import{H as b}from"./Heading-Bdaq5l28.js";import{C as F}from"./index.esm-HbTiT8wP.js";import{S as Y}from"./SpinnerMini-D9POkGas.js";import{T as Z}from"./Tag-l4tASsRI.js";import{f as ee}from"./format-BSD5EYcm.js";import{R as re}from"./Row-B6qXb3fB.js";import"./index-jHi3EtOl.js";import"./iconBase-X9fXyL-d.js";const ie=l.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`,oe=l.button`
  background-color: var(--color-grey-0);
  border: none;

  ${r=>r.active&&P`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function te({options:r}){const o=f(),s=x(I);function n(t){t!==s&&o(M(t))}return e.jsx(ie,{children:r.map(t=>e.jsx(oe,{onClick:()=>n(t.value),active:t.value===s,children:t.label},t.value))})}function ae({options:r}){const o=f(),s=x(O);function n(t){o(L(t.target.value))}return e.jsx(R,{options:r,type:"white",onChange:n,value:s})}function se(){const{handleSearch:r}=y();return e.jsxs(J,{children:[e.jsx(te,{options:[{value:"all",label:"All"},{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}]}),e.jsx(ae,{options:[{value:"default",label:"Default"},{value:"recent",label:"Sort by date (recent first)"},{value:"earlier",label:"Sort by date (earlier first)"},{value:"completed",label:"Completed"},{value:"uncompleted",label:"UnCompleted"}]}),e.jsx(j,{onChange:r,placeholder:"Search task..."}),e.jsxs(u,{children:[e.jsx(u.Open,{opens:"add-task",children:e.jsx(C,{$variation:"primary",size:"medium",justifyselfs:"end",children:"Add Task +"})}),e.jsx(u.Window,{name:"add-task",children:e.jsx(X,{onClose:()=>setIsOpen(!1)})})]})]})}const le=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}];function ne({onCloseModal:r,data:o}){const s=x(U),n={...o,todo_categories:o.todo_categories.map(a=>a.categories.id)},{register:t,handleSubmit:p,onSubmit:v,control:g,isPending:c}=y(n);return e.jsxs($,{isLoading:c,children:[e.jsx(b,{as:"h4",children:"Add new Task"}),e.jsxs(A,{type:r?"modal":"regular",onSubmit:p(async a=>{await v(a),r&&r()}),children:[e.jsx(h,{label:"Title",children:e.jsx(j,{type:"text",id:"title",...t("title",{required:"This field is required"}),disabled:c})}),e.jsx(h,{label:"Description",children:e.jsx(j,{type:"text",id:"description",...t("description",{required:"This field is required"}),disabled:c})}),e.jsx(h,{label:"Due Date",children:e.jsx(j,{type:"date",id:"dueDate",...t("dueDate",{required:"This field is required"}),disabled:c})}),e.jsx(h,{label:"Priority",children:e.jsx(F,{name:"priority",control:g,rules:{required:"This field is required"},render:({field:a})=>e.jsx(R,{options:le,value:a.value,onChange:i=>a.onChange(i),type:"white",id:"priority",disabled:c})})}),e.jsx(h,{label:"Category",children:e.jsx(F,{name:"categories",control:g,render:({field:a})=>e.jsx("div",{children:s.map(i=>i.isActive&&e.jsx(q,{checked:a.value?.includes(i.id)||!1,onChange:()=>{const w=a.value?.includes(i.id)?a.value.filter(T=>T!==i.id):[...a.value||[],i.id];a.onChange(w)},children:i.name},i.id))})})}),e.jsx(h,{children:e.jsx(z,{type:"submit",variation:"primary",size:"medium",disabled:c,children:"Update Todos"})})]})]})}function de({onCloseModal:r,data:o}){const s=f(),{user:n}=B(),{isPending:t}=y(),p=()=>{s(_({userID:n.id,todoID:o.id})),r()};return e.jsxs(e.Fragment,{children:[e.jsxs(b,{as:"h4",children:["Delete Task #",o.title]}),e.jsxs(A,{type:"regular",onSubmit:p,children:[e.jsxs(b,{as:"h5",children:["Confirm delete ",o.title,"?"]}),e.jsx(h,{children:e.jsx(z,{variation:"danger",size:"medium",disabled:t,children:t?e.jsx(Y,{}):"Delete"})})]})]})}const ce=l.div`
  border: 1px solid var(--color-grey-200);
  min-width: 100%;
  width: 100%;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  @media (max-width: 1068px) {
    background: none;
    border: none;
    border-radius: 0;
  }
`,H=l.div`
  display: grid;
  grid-template-columns: ${r=>r.$columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;

  @media (max-width: 1068px) {
    grid-template-columns: 1fr;
    row-gap: 0.8rem;
    padding: 1.2rem;
    border-bottom: 1px solid var(--color-grey-100);
  }
`,me=l(H)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  @media (max-width: 1068px) {
    display: none;
  }
`,ue=l(H)`
  padding: 1.2rem 2.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  ${({$completed:r})=>r&&"color: var(--color-red-700);"}

  @media (max-width: 1068px) {
    background: var(--color-grey-200);
    margin-bottom: 1rem;
    border-radius: 7px;
    padding: 1.6rem;
  }
`,he=l.section`
  margin: 0.4rem 0;
`,pe=l.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`,xe=l.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,k=S.createContext();function d({columns:r,children:o}){return e.jsx(k.Provider,{value:{columns:r},children:e.jsx(ce,{role:"table",children:o})})}function ge({children:r}){const{columns:o}=S.useContext(k);return e.jsx(me,{role:"row",$columns:o,as:"header",children:r})}function je({children:r,completed:o}){const{columns:s}=S.useContext(k);return e.jsx(ue,{role:"row",$columns:s,$completed:o,children:r})}function be({data:r,render:o}){return r.length?e.jsx(he,{children:r.map(o)}):e.jsx(xe,{children:"No data to show at the moment"})}d.Header=ge;d.Row=je;d.Body=be;d.Footer=pe;const m=l.div`
  @media (max-width: 1068px) {
    ${r=>{if(r.label==="Completed"||r.label==="Action")return P`
          display: flex;
          flex-direction: row !important;
          align-items: center;
        `}}
    &::before {
      content: '${r=>r.label}: ';
      display: inline-block;
      font-weight: 600;
      margin-right: 0.5rem;
      color: var(--color-grey-900);
      min-width: 12rem;
    }
  }
`,fe=l.div`
  gap: 0.4rem;

  display: flex;
  flex-direction: column;
  @media (max-width: 1068px) {
    flex-direction: row;
  }
`;function ye(){const{user:r,isPending:o}=B(),s=f(),{currentPage:n,totalPages:t,limit:p,totalItems:v}=x(E),{isPending:g}=y(),c=x(W),a=async i=>{await s(V({userID:r.id,taskID:i.id,dataUpdate:{isCompleted:!i.isCompleted}})),s(G(r.id))};return e.jsx($,{isLoading:o||g,children:e.jsx(K,{children:e.jsxs(d,{columns:"1fr 2fr 3fr 1fr 2fr 1fr 1fr 1fr",children:[e.jsxs(d.Header,{children:[e.jsx("div",{children:"STT"}),e.jsx("div",{children:"Title"}),e.jsx("div",{children:"Description"}),e.jsx("div",{children:"Completed"}),e.jsx("div",{children:"Due Date"}),e.jsx("div",{children:"Priority"}),e.jsx("div",{children:"Category"}),e.jsx("div",{style:{justifySelf:"center"},children:"Action"})]}),e.jsx(d.Body,{data:c,render:(i,w)=>e.jsxs(d.Row,{completed:i.isCompleted,children:[e.jsx(m,{label:"STT",children:w+1}),e.jsx(m,{label:"Title",children:i.title}),e.jsx(m,{label:"Description",children:i.description}),e.jsx(m,{label:"Completed",children:e.jsx(q,{checked:i.isCompleted,onChange:()=>a(i)})}),e.jsx(m,{label:"Due Date",children:ee(i.dueDate,"MMM dd yyyy")}),e.jsx(m,{label:"Priority",children:e.jsx(Z,{type:i.priority==="high"?"red":i.priority==="medium"?"yellow":"green",children:i.priority})}),e.jsx(m,{label:"Category",children:i.todo_categories.map((T,D)=>e.jsxs("span",{children:[T.categories.name,D<i.todo_categories.length-1&&", "]},D))}),e.jsx(m,{label:"Action",children:e.jsxs(u,{children:[e.jsxs(fe,{children:[e.jsx(u.Open,{opens:"update-task",children:e.jsx(C,{$variation:"primary",size:"small",children:"Update"})}),e.jsx(u.Open,{opens:"delete-task",children:e.jsx(C,{$variation:"danger",size:"small",children:"Delete"})})]}),e.jsx(u.Window,{name:"update-task",children:e.jsx(ne,{data:i})}),e.jsx(u.Window,{name:"delete-task",children:e.jsx(de,{data:i})})]})})]},i.id)}),e.jsx(d.Footer,{children:e.jsx(Q,{totalItems:v,currentPage:n,totalPages:t,limit:p,setPage:N})})]})})})}function Ie(){return e.jsx(e.Fragment,{children:e.jsxs(re,{type:"vertical",children:[e.jsx(b,{as:"h1",children:"All Todos"}),e.jsx(se,{}),e.jsx(ye,{})]})})}export{Ie as default};
