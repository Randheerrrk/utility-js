const max = arr => {
    return Math.max(...arr);
}

// const max = arr => {
// 	if(arr.length == 0) return arr;
//     let result = arr[0]
// 	let index = 1;

// 	const findMax = (arr, index, result) => {
// 		if(index==arr.length) return result;
// 		result = Math.max(result, arr[index]);
// 		return findMax(arr, index+1, result);
// 	}

// 	return findMax(arr, index, result);
// }

module.exports = max;
