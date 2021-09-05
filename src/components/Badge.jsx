import React from "react";
import styled from "styled-components";

function Badge({
  content,
  clean = false,
  glow = false,
  paid = false,
  late = false,
}) {
  return (
    <Div clean={clean} glow={glow} paid={paid} late={late}>
      {content}
    </Div>
  );
}

const Div = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: #6100d4;
  cursor: pointer;
  ${({ clean }) =>
    clean &&
    `background-color: transparent;
    border: 0.05rem solid #6100d4;
     color:#6100d4;`}
  ${({ glow }) =>
    glow &&
    `
        font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weight:normal;
          background-color: rgba(109, 134, 245, 0.192);
        color:#2f233d;
    `}
    ${({ paid }) =>
    paid &&
    `
        background-color:#70e00041;
        color:#70e000;
    `}

${({ late }) =>
    late &&
    `
        background-color:#ff595e41;
        color:#ff595e;
    `}
`;

export default Badge;
