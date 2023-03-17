import styled, { css } from "styled-components";

export const StyledFormCheckboxList = styled.div`
  display: flex;
  ${({ layout }) =>
    !layout &&
    css`
      justify-content: space-evenly;
    `}
  ${({ layout }) =>
    layout === "v" &&
    css`
      flex-direction: column;
    `}

  label {
    cursor: pointer;

    input[type="checkbox"] {
      margin-right: 10px;
    }
  }

  label:hover {
    background-color: #e8e8e8;
  }
`;
