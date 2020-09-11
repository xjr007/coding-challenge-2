import React, { useEffect } from 'react';
import Slide from '../components/Slide';
import Slide1 from '../assets/img/Slide1.jpg';
import Slide2 from '../assets/img/Slide2.jpg';
import Slide3 from '../assets/img/Slide3.jpg';
import Slide4 from '../assets/img/Slide4.jpg';
import Slide5 from '../assets/img/Slide5.jpg';

const Slider = () => {
	const slides = [
		{
			imgURL: Slide1,
			imgDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusantium ipsum sint nobis libero minima possimus repudiandae consequuntur nisi officiis?',
		},
		{
			imgURL: Slide2,
			imgDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus temporibus corporis facere, obcaecati modi.',
		},
		{
			imgURL: Slide3,
			imgDescription:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, blanditiis vero officiis autem voluptatum soluta nisi molestiae amet nihil corporis ratione. Voluptates aspernatur distinctio similique amet exercitationem est a quia?',
		},
		{
			imgURL: Slide4,
			imgDescription:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, soluta.',
		},
		{
			imgURL: Slide5,
			imgDescription:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro rem, sed expedita tempora tenetur, ratione beatae neque illum, ipsam quasi dolore. Minus obcaecati veniam voluptatibus?',
		},
	];
	return (
		<div>
			<Slide slides={slides} />
		</div>
	);
};

export default Slider;
