import React from 'react';

import Card from './Card';
import Image from "../../assets/images/spaceX-launch.webp";

export default {
    title: 'Block/Card',
    component: Card,
};

const Template = (args) => <div><Card {...args} /></div>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Rounded = Template.bind({});

Primary.args = {
    id: 'heading-paragraph-id',
    variant: "primary",
    srcImage:Image,
};
Secondary.args = {
    id: 'heading-paragraph-id',
    variant: "secondary",
    srcImage:Image
};
Rounded.args = {
    id: 'heading-paragraph-id',
    variant: "secondary",
    srcImage:Image,
    rounded:true
};
