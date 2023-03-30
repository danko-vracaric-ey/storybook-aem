import React from "react";
import { StyledAccordionItemQuestion } from "./AccordionItemQuestion.styled";

export const AccordionItemQuestion = ({ text, icon, onToggleAccordion }) => {
  return (
    <StyledAccordionItemQuestion class="question" onClick={onToggleAccordion}>
      <h3 class="title">{text}</h3>
      <div class="close">{icon}</div>
    </StyledAccordionItemQuestion>
  );
};
