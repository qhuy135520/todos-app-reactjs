import{a2 as t,d as i}from"./index-CrLZqs61.js";const a=i.div`
  display: flex;

  ${e=>e.type==="horizontal"&&t`
      justify-content: space-between;
      align-items: center;
      gap: 2rem;

      @media (max-width: 1068px) {
        flex-direction: column;
        align-items: stretch;
      }
    `}

  ${e=>e.type==="vertical"&&t`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;a.defaultProps={type:"vertical"};export{a as R};
