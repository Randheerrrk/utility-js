const tail = arr => {
    if(arr.length == 0) return [];
    return arr.splice(1);
};

module.exports = tail;