import React from 'react';

import Paragraph from './Paragraph';
import ParagraphMDXdoc from './ParagraphMDXdoc.mdx'

export default {
    title: 'Base/Paragraph',
    component: Paragraph,
    parameters: {
        docs: {
            page: ParagraphMDXdoc
        }
    }
};

const Template = (args) => <Paragraph {...args} />;

const Template2 = (args) => <div style={{border:"solid"}}>
    <Paragraph {...args} />
    <Paragraph {...args} />
</div>

export const ParagraphOne = Template.bind({});
export const ParagraphTwo = Template2.bind({});

ParagraphOne.args = {
    id: 'text-box-id',
    text: 'Content',
};
ParagraphTwo.args = {
    id: 'text-box-id',
    text: 'Content',
};
