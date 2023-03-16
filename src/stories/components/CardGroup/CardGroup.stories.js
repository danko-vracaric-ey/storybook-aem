import React from 'react';

import CardGroup from './CardGroup';
import Image from "../../assets/images/spaceX-launch.webp";

const mockData = [{id:"card-group-id-1", srcImage:Image, variant:"secondary", rounded:false},{id:"card-group-id-1", srcImage:Image, variant:"primary", rounded:true},{id:"card-group-id-1", srcImage:Image, variant:"secondary", rounded:true},{id:"card-group-id-1", srcImage:Image, variant:"primary", rounded:false},{id:"card-group-id-1", srcImage:Image, variant:"primary", rounded:true}]

export default {
    title: 'Block/CardGroup',
    component: CardGroup,
};

const Template = (args) => <div><CardGroup {...args} /></div>;

export const Primary = Template.bind({});

Primary.args = {
    cardGroupData: mockData
};
