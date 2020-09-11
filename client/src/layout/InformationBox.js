import React from 'react';

const InformationBox = props => {
	const { description } = props;
	return (
		<div className='info'>
			<p id='description'>{description}</p>
		</div>
	);
};

export default InformationBox;
