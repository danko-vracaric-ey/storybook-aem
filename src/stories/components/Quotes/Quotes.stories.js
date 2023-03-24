import React from 'react';
import Quotes from './Quotes';

export default {
    title: 'Block/Quotes',
    component: Quotes,
};

const Template = (args) => <div><Quotes {...args} /></div>;

export const WithImage = Template.bind({});
export const WithLink = Template.bind({});
export const NoAttribution = Template.bind({});

WithImage.args = {
    id: "quotes-id",
    variant: "WithImage"
};
WithLink.args = {
    id: "quotes-id",
    variant: "WithLink"
};
NoAttribution.args = {
    id: "quotes-id",
    variant: "NoAttribution"
};
