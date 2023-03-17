import React from 'react';

import HeaderInformation from './HeaderInformation';

export default {
    title: 'Block/HeaderInformation',
    component: HeaderInformation,
};

const Template = (args) =><HeaderInformation {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
    id: 'header-information-id',
    text : "See more about our inovations",
    linkText: "link",
    textAnimationDirection : "left",
    variant: "primary"
};
Secondary.args = {
    id: 'header-information-id',
    text : "See more about our inovations",
    linkText: "link",
    textAnimationDirection: "right",
    variant: "secondary"
};