import{j as e,d as p,a as y,b as U,al as C,am as x,e as F,r as b}from"./index-CrLZqs61.js";import{u as S}from"./index.esm-HbTiT8wP.js";import{B as c}from"./Button-B3XPtGEn.js";import{F as v,I as m}from"./Input-rFDySL4F.js";import"./Logo-DvpDcO3R.js";import{H as g}from"./Heading-Bdaq5l28.js";import{R as j}from"./Row-B6qXb3fB.js";const z=p.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`,q=p.label`
  font-weight: 500;
`,N=p.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function i({label:s,error:r,children:a}){return e.jsxs(z,{children:[s&&e.jsx(q,{htmlFor:a.props.id,children:s}),a,r&&e.jsx(N,{children:r})]})}function w(){const s=y(),{mutate:r,isPending:a}=U({mutationFn:C,onSuccess:({user:t})=>{x.success("User account updated successfully"),s.setQueryData(["user"],t),s.invalidateQueries({queryKey:["user"]})},onError:t=>{x.error(t.message)}});return{updateUser:r,isUpdating:a}}function k(){const{register:s,handleSubmit:r,formState:a,getValues:t,reset:n}=S(),{errors:l}=a,{updateUser:h,isUpdating:o}=w();function f({password:u}){h({password:u},{onSuccess:n})}return e.jsxs(v,{onSubmit:r(f),children:[e.jsx(i,{label:"New password (min 8 chars)",error:l?.password?.message,children:e.jsx(m,{type:"password",id:"password",autoComplete:"current-password",disabled:o,...s("password",{required:"This field is required",minLength:{value:8,message:"Password needs a minimum of 8 characters"}})})}),e.jsx(i,{label:"Confirm password",error:l?.passwordConfirm?.message,children:e.jsx(m,{type:"password",autoComplete:"new-password",id:"passwordConfirm",disabled:o,...s("passwordConfirm",{required:"This field is required",validate:u=>t().password===u||"Passwords need to match"})})}),e.jsxs(i,{children:[e.jsx(c,{onClick:n,type:"reset",variation:"secondary",size:"medium",children:"Cancel"}),e.jsx(c,{disabled:o,size:"medium",variation:"primary",children:"Update password"})]})]})}const E=p.input.attrs({type:"file"})`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;function R(){const{updateUser:s,isUpdating:r}=w(),{user:{email:a,user_metadata:{fullName:t}}}=F(),[n,l]=b.useState(t),[h,o]=b.useState(null);function f(d){d.preventDefault(),n&&s({fullName:n,avatar:h},{onSuccess:()=>{o(null),d.target.reset()}})}function u(){l(t),o(null)}return e.jsx(e.Fragment,{children:e.jsxs(v,{onSubmit:f,children:[e.jsx(i,{label:"Email address",children:e.jsx(m,{value:a,disabled:!0})}),e.jsx(i,{label:"Full name",children:e.jsx(m,{type:"text",value:n,onChange:d=>l(d.target.value),id:"fullName",disabled:r})}),e.jsx(i,{label:"Avatar image",children:e.jsx(E,{id:"avatar",accept:"image/*",onChange:d=>o(d.target.files[0]),disabled:r})}),e.jsxs(i,{children:[e.jsx(c,{type:"reset",variation:"secondary",size:"medium",disabled:r,onClick:u,children:"Cancel"}),e.jsx(c,{variation:"primary",size:"medium",disabled:r,children:"Update account"})]})]})})}function L(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{as:"h1",children:"Update your account"}),e.jsxs(j,{type:"vertical",children:[e.jsx(g,{as:"h3",children:"Update user data"}),e.jsx(R,{})]}),e.jsxs(j,{type:"vertical",children:[e.jsx(g,{as:"h3",children:"Update password"}),e.jsx(k,{})]})]})}export{L as default};
