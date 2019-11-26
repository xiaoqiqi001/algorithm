let numberArr = [34,23,23,4,3,4,3,43,4,231,312,3,213,12,3,12,31];

function select (numberArr) {
	for (let outterIndex = 0; outterIndex < numberArr.length; outterIndex++ ) {
		let minIndex = -1, minVal = 0xFFFFFFFF;
		for (let innerIndex = outterIndex; innerIndex < numberArr.length; innerIndex++ ) {
			if (minVal > numberArr[innerIndex]) {
				minVal = numberArr[innerIndex];
				minIndex = innerIndex;
			}
		}
		if (minIndex !== outterIndex) {
			let temp = numberArr[outterIndex];
			numberArr[outterIndex] = numberArr[minIndex];
			numberArr[minIndex] = temp;
		}
	}
	return numberArr
}

console.log(select(numberArr));
