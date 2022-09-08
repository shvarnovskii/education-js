function loadGrain(levels) {
	let arrIndexes = [];
	let result = 0;
	for (let i = 0; i < levels.length; i++) {
		if (i === 0 && levels[0] > levels[1]) {
			arrIndexes.push(i);
		} else if (i === levels.length - 1 && levels[i] > levels[i - 1]) {
			arrIndexes.push(i);
		} else {
			if (levels[i - 1] < levels[i] && levels[i] > levels[i + 1]) {
				arrIndexes.push(i);
			}
		}
	}

	do {
		let slicedArr = levels.slice(arrIndexes[0], arrIndexes[1] + 1);
		slicedArr[0] > slicedArr[slicedArr.length - 1]
			? slicedArr.reverse()
			: slicedArr;

		for (let i = 0; i < slicedArr.length - 1; i++) {
			result += slicedArr[0] - slicedArr[i];
		}

		arrIndexes.shift();
	} while (arrIndexes.length > 0);

	return result;
}
console.log(loadGrain([3, 2, 1, 2, 5, 2, 7, 4, 10, 8, 9, 8]));
