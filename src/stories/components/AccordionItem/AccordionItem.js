import React from "react";
import PropTypes from "prop-types";
import { AccordionItemQuestion } from "./AccordionItemQuestion";
import { AccordionItemAnswer } from "./AccordionItemAnswer";
import { StyledAccordionItem } from "./AccordionItem.styled";

const AccordionItem = ({ id, text1, text2, open, setOpen, ...otherProps }) => {
  const onToggleAccordion = () => {
    setOpen(!open);
  };
  const toggleIcon = !open ? "+" : "-";

  return (
    <StyledAccordionItem id={id}>
      <div class="li-border-top"></div>
      <AccordionItemQuestion
        text={text1}
        icon={toggleIcon}
        onToggleAccordion={onToggleAccordion}
      />
      {open ? <AccordionItemAnswer text={text2} /> : null}
      <div class="li-border-bot"></div>
    </StyledAccordionItem>
  );
};

AccordionItem.propTypes = {
  /**
   * Accordion item id
   */
  id: PropTypes.string,
  /**
   * Unopened item question text
   */
  text1: PropTypes.string,
  /**
   * Opened item answer text
   */
  text2: PropTypes.string,
  /**
   * Accordion item state (opened / closed)
   */
  open: PropTypes.bool,
};

AccordionItem.defaultProps = {
  id: "accordion-item-id",
  text1: "text",
  text2: "text2",
  open: false,
  setOpen: () => {},
};

export default AccordionItem;
