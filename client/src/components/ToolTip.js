import React, { useEffect, useState } from 'react';

const ToolTip = props => {
	const { slideNo, styles } = props;

	return (
		<div className='tooltip' style={styles}>
			<div className='tooltip-arrow'></div>
			<div className='tooltip-inner'>Go to slide no.{slideNo}</div>
		</div>
	);
};

export default ToolTip;
