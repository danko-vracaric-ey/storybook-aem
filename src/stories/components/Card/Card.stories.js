import React from 'react';

import Card from './Card';

export default {
    title: 'Base/Card',
    component: Card,
};

const Template = (args) => <div className="d-flex d-grid gap-2" style={{backgroundColor:"white", textAlign:"center"}}><Card {...args} /></div>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
    id: 'heading-paragraph-id',
    variant: "primary"
};
Secondary.args = {
    id: 'heading-paragraph-id',
    variant: "secondary"
};
