import React from 'react';

import HeadingSection from './HeadingSection';

export default {
    title: 'Base/HeadingSection',
    component: HeadingSection,
};

const Template = (args) => <div className="d-flex d-grid gap-2" style={{backgroundColor:"white", textAlign:"center"}}><HeadingSection {...args} /></div>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
    id: 'heading-paragraph-id',
    text: 'Heading Paragraph',
    variant: 'primary'
};

Secondary.args = {
    id: 'heading-paragraph-id',
    text: 'Heading Paragraph',
    variant: 'secondary'
}