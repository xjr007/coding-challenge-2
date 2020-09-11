import React, { useState } from 'react';
import { previous, next } from '../assets/js/NavigationCntrl';
import ToolTip from './ToolTip';
import InformationBox from '../layout/InformationBox';

const Slide = props => {
	// array of images
	const { slides } = props;

	// x --> x ref as coordinate and acts as slide counter
	const [x, setX] = useState(0);

	// time--> time in seconds
	const [time, setTime] = useState(0);

	// btn hover
	const [toolTipHover, setToolTipHover] = useState({
		hover: false,
		position: null,
	});

	const handleNavigation = nav => {
		// processes the button selection

		if (nav === 'previous') {
			previous(setX, setTime, slides, x);
		}
		if (nav === 'next') {
			next(setX, setTime, slides, x);
		}
	};

	return (
		<div className='slider'>
			{x !== 0 &&
				slides.map((item, index) => {
					return (
						<div
							key={index}
							className='slide'
							style={{
								transform: `translateX(${x}%)`,
								transition: `${time}s`,
							}}
						>
							<img
								id='img'
								src={item.imgURL}
								alt={'Slide no.' + index}
							/>

							<InformationBox description={item.imgDescription} />
						</div>
					);
				})}
			<div className='buttonBox'>
				<button
					id='button'
					onClick={() => handleNavigation('previous')}
					onMouseEnter={() =>
						setTimeout(() => {
							setToolTipHover({
								hover: true,
								position: 'left',
							});
						}, 350)
					}
					onMouseLeave={() =>
						setToolTipHover({
							hover: false,
							position: null,
						})
					}
				>
					{toolTipHover.hover && toolTipHover.position === 'left' && (
						<ToolTip
							styles={{ left: '5%' }}
							slideNo={
								-1 * (x / 100) - 1 < 0 ? slides.length : -1 * (x / 100)
							}
						/>
					)}
				</button>
				<button
					id='button'
					onClick={() => handleNavigation('next')}
					onMouseEnter={() =>
						setTimeout(() => {
							setToolTipHover({
								hover: true,
								position: 'right',
							});
						}, 350)
					}
					onMouseLeave={() =>
						setToolTipHover({
							hover: false,
							position: null,
						})
					}
				>
					{toolTipHover.hover && toolTipHover.position === 'right' && (
						<ToolTip
							styles={{ right: '5%' }}
							slideNo={
								-1 * (x / 100) + 2 > slides.length
									? 1
									: -1 * (x / 100) + 2
							}
						/>
					)}
				</button>
			</div>
		</div>
	);
};

export default Slide;
