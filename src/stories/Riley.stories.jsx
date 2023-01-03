// this is the Name.stories.jsx file
import React from 'react';
import {Riley} from './Riley';

export default {
title: 'Riley',
component: Riley,
};

const Template = (args) => <Riley {...args} />;

export const Primary = Template.bind({});
Primary.args = {
primary: true,
label: 'Riley',
};