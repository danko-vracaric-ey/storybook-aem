import React from 'react';

import Button from './Button';
import ButtonMDXdoc from './ButtonMDXdoc.mdx';

export default {
    title: 'Base/Button',
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
    parameters: {
        docs: {
            page: ButtonMDXdoc
        }
    }
};

const Template = (args) => <div className="d-flex d-grid gap-2"><Button {...args} /></div>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const PrimaryDisabled = Template.bind({});
export const SecondaryDisabled = Template.bind({});


Primary.args = {
    id: 'button_id',
    label: 'button',
    disabled: false,
    argTypes: { onClick: { action: 'clicked' } },
    className: '',
    btnStyle: 'primary'
};

Secondary.args = {
    id: 'button_id',
    label: 'button',
    disabled: false,
    argTypes: { onClick: { action: 'clicked' } },
    className: '',
    btnStyle: 'secondary',
};

PrimaryDisabled.args = {
    id: 'button_id',
    label: 'button',
    disabled: true,
    argTypes: { onClick: { action: 'clicked' } },
    className: '',
    btnStyle: 'primary'
};

SecondaryDisabled.args = {
    id: 'button_id',
    label: 'button',
    disabled: true,
    argTypes: { onClick: { action: 'clicked' } },
    className: '',
    btnStyle: 'secondary'
};

