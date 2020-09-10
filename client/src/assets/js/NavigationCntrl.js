/**
 *  @function previous : moves back at rate 1 slide
 */

export const previous = (setX, setTime, arr, x) => {
	// adds 100 to x ... x E |R = [ -( array.length x 100 ) <= x <= 0 ]
	// we are matching each slide to each x value
	if (x < 0) {
		setTime(0.5);
		setX(x + 100);
	} else {
		// set x to the last index of the array, thereafter we fetch the last item
		setTime(0.5);
		setX((arr.length - 1) * -100);
	}
};

/**
 * @function next : moves forward at rate 1 slide
 */

export const next = (setX, setTime, arr, x) => {
	// subtracts 100 from x ... x E |R = [ -( array.length x 100 ) <= x <= 0 ]
	if (x > (arr.length - 1) * -100) {
		setTime(0.5);
		setX(x - 100);
	} else {
		// set x to first index of array, thereafter we fetch the first item
		setTime(0.5);
		setX(0);
	}
};
