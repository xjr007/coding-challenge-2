import React from 'react';
import ToolTip from './ToolTip';

const Button = props => {
	const { setX, setTime, slide_arr, x } = props;
	// btn hover
	const [toolTipHover, setToolTipHover] = useState({
		hover: false,
		position: null,
	});

	const handleNavigation = nav => {
		// processes the button selection

		if (nav === 'previous') {
			previous(setX, setTime, slide_arr, x);
		}
		if (nav === 'next') {
			next(setX, setTime, slide_arr, x);
		}
	};
	return (
		<div className='buttonBox'>
			<button
				id='button'
				onClick={() => handleNavigation('previous')}
				onMouseEnter={() =>
					setToolTipHover({
						hover: true,
						position: 'left',
					})
				}
				onMouseLeave={() =>
					setToolTipHover({
						hover: false,
						position: null,
					})
				}
			>
				Button
				<ToolTip />
			</button>
			<button
				id='button'
				onClick={() => handleNavigation('previous')}
				onMouseEnter={() =>
					setToolTipHover({
						hover: true,
						position: 'left',
					})
				}
				onMouseLeave={() =>
					setToolTipHover({
						hover: false,
						position: null,
					})
				}
			>
				Button
				<ToolTip />
			</button>
		</div>
	);
};

export default Button;
