import React, { useEffect, useState } from 'react';

const ToolTip = props => {
	const { slideNo, styles } = props;

	// useEffect(() => {
	// 	if (position === 'right' || position === 'left') {
	// 		setStyle({
	// 			display: 'block',
	// 			zIndex: '5',
	// 		});
	// 	}
	// 	//es-lint-disable-next-line
	// }, [setStyle, position]);
	return (
		<div className='tooltip' style={styles}>
			<div className='tooltip-arrow'></div>
			<div className='tooltip-inner'>Next slide no.{slideNo}</div>
		</div>
	);
};

export default ToolTip;
