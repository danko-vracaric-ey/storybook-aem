import React from 'react';
import AccordionItem from './AccordionItem';

export default {
    title: 'Base/AccordionItem',
    component: AccordionItem,
};

const Template = (args) => <AccordionItem {...args} />;

export const Opened = Template.bind({});
export const Closed = Template.bind({});

Opened.args = {
    id: 'accodion-item-id',
    text1: 'Accordion',
    text2:"Some text",
    open:true,
    setOpen:()=>{}
};
Closed.args = {
    id: 'accodion-item-id',
    text1: 'Accordion',
    text2:"Some text",
    open:false,
    setOpen:()=>{}
};
