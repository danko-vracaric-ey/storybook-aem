import React from 'react';
import Heroes from './Heroes';

export default {
    title: 'Block/Heroes',
    component: Heroes,
};

const Template = (args) => <div><Heroes {...args} /></div>;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
    id: "key-points-id",
    headingText : "featured",
    title: "Creating Robots to go where humans can't",
    linkText: "VIEW",
    variant: "small",
};

Medium.args = {
    id: "key-points-id",
    headingText : "featured",
    title: "Creating Robots to go where humans can't",
    linkText: "VIEW",
    variant: "medium",
}

Large.args = {
    id: "key-points-id",
    headingText : "featured",
    title: "FREECLIMBER 3: JUMP",
    linkText: "VIEW",
    variant: "large",
}