import React from 'react';

import TextBox from './TextBox';
import TextBoxMDXdoc from './TextBoxMDXdoc.mdx';

export default {
    title: 'Base/TextBox',
    component: TextBox,
    parameters: {
        docs: {
            page: TextBoxMDXdoc
        }
    }
};

const Template = (args) => <TextBox {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
    id: 'text-box-id',
    text: 'Content',
    variant: "primary"
};
Secondary.args = {
    id: 'text-box-id',
    text: 'Content',
    variant: "secondary"
};
