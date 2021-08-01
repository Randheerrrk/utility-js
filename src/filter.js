const filter = (arr, callback) => {
    if(arr.length == 0) return arr;
    return arr.filter(callback);
}

// const filter = (arr, callback) => {
// 	if(arr.length == 0) return arr;
// 	let resultArray = new Array();
// 	let index = 0;

// 	const filterArray = (arr, callback, index, resultArray) => {
// 		if(index==arr.length) return resultArray;
// 		if(callback(arr[index])) {
// 			resultArray.push(arr[index]);
// 		}
// 		return filterArray(arr, callback, index+1, resultArray);
// 	}
	
// 	return filterArray(arr, callback, index, resultArray);
// }

module.exports = filter;
