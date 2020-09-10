import React from 'react';
import ToolTip from './ToolTip';

const Button = () => {
	return (
		<div className='buttonBox'>
			<button id='button'>
				Button
				<ToolTip />
			</button>
			<button id='button'>
				Button
				<ToolTip />
			</button>
		</div>
	);
};

export default Button;
