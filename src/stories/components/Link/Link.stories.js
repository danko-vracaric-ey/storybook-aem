import React from 'react';

import Link from './Link';
import LinkMDXdoc from './LinkMDXdoc.mdx';

export default {
    title: 'Components/Link',
    component: Link,
    argTypes: { onClick: { action: 'clicked' } },
    parameters: {
        docs: {
            page: LinkMDXdoc
        }
    }
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
export const PrimaryDisabled = Template.bind({});
export const Secondary = Template.bind({});
export const SecondaryDisabled = Template.bind({});


Primary.args = {
    id: 'link_id',
    text: 'link',
    disabled: false,
    argTypes: { onClick: { action: 'clicked' } },
    variant: 'primary'
};

PrimaryDisabled.args = {
    id: 'link_id',
    text: 'link',
    disabled: true,
    argTypes: { onClick: { action: 'clicked' } },
    variant: 'primary'
};

Secondary.args = {
    id: 'link_id',
    text: 'link',
    disabled: false,
    argTypes: { onClick: { action: 'clicked' } },
    variant: 'secondary'
};

SecondaryDisabled.args = {
    id: 'link_id',
    text: 'link',
    disabled: true,
    argTypes: { onClick: { action: 'clicked' } },
    variant: 'secondary'
};
