const reduce = (arr, reducer, defaultValue=undefined) => {
    if(arr.length == 0) return defaultValue;
    const reducedValue = arr.reduce(reducer);
    if(defaultValue) {
        return defaultValue + reducedValue;
    } else {
        return reducedValue;
    }
}

// const reduce = (arr, callback, initialValue=undefined) => {
// 	if(arr.length == 0) return initialValue;
// 	let result = arr[0];
// 	let index = 1;

// 	const reduceArray = (arr, callback, index, result) => {
// 		if(index==arr.length) return result;
// 		result = callback(result, arr[index]);
// 		return reduceArray(arr, callback, index+1, result);
// 	}

// 	result = reduceArray(arr, callback, index, result);
// 	return initialValue ? initialValue+result : result;
// }

module.exports = reduce;
