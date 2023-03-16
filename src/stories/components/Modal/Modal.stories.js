import React from 'react';

import Modal from './Modal';
import ModalMDXdox from "./ModalMDXdoc.mdx"

export default {
    title: 'Block/Modal',
    component: Modal,
    parameters: {
        docs: {
            page: ModalMDXdox
        }
    }
};

const Template = (args) => <Modal {...args} />;

export const Opened = Template.bind({});

Opened.args = {
    id: 'text-box-id',
    text: 'Content',
    buttonOneText: "Cancel",
    buttonTwoText: "Confirm"

};
