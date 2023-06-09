import styled from "styled-components";

export const StyledAccordionItem = styled.li`
  list-style-type: none;
  width: 100%;

  .li-border-top,
  .li-border-bot {
    height: 2px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      transparent 1%,
      #000 50%,
      transparent 99%
    );
  }
`;
