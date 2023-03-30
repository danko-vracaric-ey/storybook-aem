import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import { StyledAccordionItemAnswer } from "./AccordionItemAnswer.styled";

export const AccordionItemAnswer = ({ text }) => {
  return (
    <StyledAccordionItemAnswer class="answer">
      <div class="p-border-top"></div>
      <Paragraph text={text} />
    </StyledAccordionItemAnswer>
  );
};
