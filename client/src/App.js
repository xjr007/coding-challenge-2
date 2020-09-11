import React, { useEffect } from 'react';
import Slider from './layout/Slider';
import InformationBox from './layout/InformationBox';

import './assets/css/style.css';

const App = () => {
	const connectToServer = () => {
		fetch('/');
	};

	useEffect(() => {
		connectToServer();
	});
	return (
		<div className='App'>
			<Slider />
		</div>
	);
};

export default App;
