const tail = require('./tail');

describe('Tail', () => {
    it('Tail 0f [1, 2, 3] is 3', () => {
        expect(tail([1, 2, 3])).toEqual([2, 3]);
    });
    it('Tail of [] is []', () => {
        expect(tail([])).toEqual([]);
    });
});