import{d as f,a2 as i,j as e,an as w,as as k,r as C,aj as T}from"./index-CrLZqs61.js";import{B as S}from"./Button-B3XPtGEn.js";import{F as q,I as g}from"./Input-rFDySL4F.js";import{F as s}from"./FormRowVertical-C1JrIQHh.js";import{S as D}from"./Select-DqdAEI0N.js";import{H as $}from"./Heading-Bdaq5l28.js";import{u as z}from"./useTodos-BxtcYsy3.js";import{C as b}from"./index.esm-HbTiT8wP.js";const F={small:i`
    font-size: 1.2rem;
    padding: 0.4rem 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,medium:i`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,large:i`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `},B={start:i`
    margin-right: auto;
  `,center:i`
    margin: 0 auto;
  `,end:i`
    margin-left: auto;
  `,stretch:i`
    flex: 1;
  `},A={primary:i`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,secondary:i`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,danger:i`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `},E=f.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  min-width: 4.2rem;
  ${r=>B[r.$justifyselfs]}
  ${r=>F[r.size]}
  ${r=>A[r.$variation]}
  @media (max-width : 1068px) {
    width: 100%;
  }
`;E.defaultProps={$variation:"primary",size:"medium"};const H=f.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 0.4rem;
  & input[type='checkbox'] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type='checkbox']:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;function L({checked:r,onChange:c,disabled:n=!1,id:d,children:m}){return e.jsxs(H,{children:[e.jsx("input",{type:"checkbox",id:d,checked:r,onChange:c,disabled:n}),e.jsx("label",{htmlFor:n?"":d,children:m})]})}const P=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}];function K({onCloseModal:r,data:c={}}){const n=w(k),[d,m]=C.useState(c),{isPending:t,isEditSession:v,register:u,handleSubmit:y,errors:l,onSubmit:j,control:h}=z(d);return e.jsxs(T,{isLoading:t,children:[e.jsx($,{as:"h4",children:"Add new Task"}),e.jsxs(q,{type:r?"modal":"regular",onSubmit:y(async o=>{await j(o),r&&r()}),children:[e.jsx(s,{label:"Title",error:l?.title?.message,children:e.jsx(g,{type:"text",id:"title",...u("title",{required:"This field is required"}),disabled:t})}),e.jsx(s,{label:"Description",error:l?.description?.message,children:e.jsx(g,{type:"text",id:"description",...u("description",{required:"This field is required"}),disabled:t})}),e.jsx(s,{label:"Due Date",error:l?.dueDate?.message,children:e.jsx(g,{type:"date",id:"dueDate",...u("dueDate",{required:"This field is required"}),disabled:t})}),e.jsx(s,{label:"Priority",error:l?.priority?.message,children:e.jsx(b,{name:"priority",control:h,rules:{required:"This field is required"},render:({field:o})=>e.jsx(D,{options:P,value:o.value,onChange:a=>o.onChange(a),type:"white",id:"priority",disabled:t})})}),e.jsx(s,{label:"Category",children:e.jsx(b,{name:"categories",control:h,render:({field:o})=>e.jsx("div",{children:n.map(a=>a.isActive&&e.jsx(L,{checked:o.value?.includes(a.id)||!1,onChange:()=>{const x=o.value?.includes(a.id)?o.value.filter(p=>p!==a.id):[...o.value||[],a.id];o.onChange(x),m(p=>({...p,todo_categories:x}))},children:a.name},a.id))})})}),e.jsx(s,{children:e.jsx(S,{type:"submit",variation:"primary",size:"medium",disabled:t,children:v?"Update Todo":"Create new Todo"})})]})]})}export{E as B,K as C,L as a};
