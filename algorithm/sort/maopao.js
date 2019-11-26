let numberArr = [34,23,23,4,3,4,3,43,4,231,312,3,213,12,3,12,31];

function maopao (arr) {
	for(let outerIndex = 0; outerIndex < numberArr.length; outerIndex++) {
		for(let innerIndex = 1; innerIndex < (numberArr.length - outerIndex); innerIndex++) {
			if (numberArr[innerIndex - 1] > numberArr[innerIndex]) {
				let temp = numberArr[innerIndex - 1];
				numberArr[innerIndex - 1] = numberArr[innerIndex];
				numberArr[innerIndex] = temp;
			}
		}
	}
	return numberArr;
}

console.log(maopao(numberArr))
