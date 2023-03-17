import React from 'react';

import Label from './Label';
import Image from "../../assets/images/info.png";

export default {
    title: 'Base/Label',
    component: Label,
};

const Template = (args) =><Label {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
    id:"header-1",
    text:"Content",
    labelLogo: Image,
};
