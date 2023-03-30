import styled from "styled-components";

export const StyledAccordionItemAnswer = styled.div`
  padding: 0 20px;

  & .p-border-top {
    height: 2px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      transparent 1%,
      lightgray 50%,
      transparent 99%
    );
  }

  & p {
    margin: 0;
    padding: 10px 0;
  }
`;
