const filter = (arr, callback) => {
    if(arr.length == 0) return arr;
    return arr.filter(callback);
};

module.exports = filter;