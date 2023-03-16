import React from 'react';

import Heading from './Heading';

export default {
    title: 'Base/Heading',
    component: Heading,
};

const Template = (args) => <div className="d-flex d-grid gap-2" style={{backgroundColor:"black", textAlign:"center"}}><Heading {...args} /></div>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});

Primary.args = {
    id: 'heading_id',
    text: 'heading',
    variant: 'primary',
    animationDirection:"left"
};
Secondary.args = {
    id: 'heading_id',
    text: 'heading',
    variant: 'secondary',
    animationDirection:"left"
};
Tertiary.args = {
    id: 'heading_id',
    text: 'heading',
    variant: 'tertiary',
    animationDirection:"left"
};