import styled from "styled-components";

export const StyledAccordionItemQuestion = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;

  & .title {
    margin: 0;
    width: 90%;
  }

  & .close {
    width: 10%;
    text-align: center;
  }
`;
