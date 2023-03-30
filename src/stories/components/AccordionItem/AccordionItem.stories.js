import React from "react";
import AccordionItem from "./AccordionItem";

export default {
  title: "Base/AccordionItem",
  component: AccordionItem,
  argTypes: { onToggleAccordion: { action: "clicked" } },
};

const Template = (args) => <AccordionItem {...args} />;

export const Opened = Template.bind({});
export const Closed = Template.bind({});

Opened.args = {
  id: "accodion-item-id",
  text1: "Question text",
  text2: "Answer text",
  open: true,
  setOpen: () => {},
  argTypes: { onToggleAccordion: { action: "clicked" } },
};
Closed.args = {
  id: "accodion-item-id",
  text1: "Question text",
  text2: "Answer text",
  open: false,
  setOpen: () => {},
};
