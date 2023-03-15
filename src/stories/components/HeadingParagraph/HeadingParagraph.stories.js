import React from 'react';

import HeadingParagraph from './HeadingParagraph';

export default {
    title: 'Base/HeadingParagraph',
    component: HeadingParagraph,
};

const Template = (args) => <div className="d-flex d-grid gap-2" style={{backgroundColor:"white", textAlign:"center"}}><HeadingParagraph {...args} /></div>;

export const Primary = Template.bind({});

Primary.args = {
    id: 'heading-paragraph-id',
    text: 'Heading Paragraph',
};