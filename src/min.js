const min = arr => {
    return Math.min(...arr);
}

// const min = arr => {
// 	if(arr.length == 0) return arr;
// 	let result = arr[0];
// 	let index = 1;

// 	const findMin = (arr, index, result) => {
// 		if(index==arr.length) return result;
// 		result = Math.min(result, arr[index]);
// 		return findMin(arr, index+1, result);
// 	}

// 	return findMin(arr, index, result);
// }

module.exports = min;
