const map = (arr, fun) => {
	if(arr.length==0) return arr;
	return arr.map(fun);
}

// const map = (arr, callback) => {
// 	if(arr.length == 0) return [];
// 	let index = 0;
// 	const mapFunction = (arr, callback, index) => {
// 		if(index==arr.length) return arr;
// 		arr[index] = callback(arr[index]);
// 		return mapFunction(arr, callback, index+1);
// 	}

// 	return mapFunction(arr, callback, index);
// }

module.exports = map;
