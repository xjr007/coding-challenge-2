import React from 'react';
import { shallow, mount } from 'enzyme';
import Slider from './layout/Slider';
import Slide from './components/Slide';
import App from './App';
import setupTest from './setupTest';
import ToolTip from './components/ToolTip';
import InformationBox from './layout/InformationBox';

// Running checks on all important components

it('App, renders without crashing', () => {
	shallow(<App />);
});

it('Slider, renders without crashing', () => {
	shallow(<Slider />);
});

it('Slide, renders without crashing', () => {
	shallow(<Slide />);
});

it('Tooltip, renders without crashing', () => {
	shallow(<ToolTip />);
});

it('Description, renders without crashing', () => {
	shallow(<InformationBox />);
});
