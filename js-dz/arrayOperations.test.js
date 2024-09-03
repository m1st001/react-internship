const {mergeArrays} = require("./arrayOperations");
test('merge two arrays', () => {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = [1, 2, 3];
    const result = ['a', 'b', 'c', 1, 2, 3];
    expect(mergeArrays(arr1, arr2)).toEqual(result);
});

const {addElementsToArray} = require("./arrayOperations");
test('add elements to array', () => {
    const arr1 = ['a', 'b', 'c'];
    const result = ['a', 'b', 'c', 1, 2, 3];
    expect(addElementsToArray(arr1, 1, 2, 3)).toEqual(result);
});

const {reverseArray} = require("./arrayOperations");
test('add elements to array', () => {
    const array = [1, 2, 3];
    const result = [3, 2, 1];
    expect(reverseArray(array)).toEqual(result);
});

const {exportElementsToNewArrayViaSlice} = require("./arrayOperations");
test('export first three elements via slice', () => {
    const array = [1, 2, 3, 4, 5];
    const result = [1, 2, 3];
    expect(exportElementsToNewArrayViaSlice(array, 0, 3)).toEqual(result);
});
test('export last two elements via slice', () => {
    const array = [1, 2, 3, 4, 5];
    const result = [4, 5];
    expect(exportElementsToNewArrayViaSlice(array, 3, 5)).toEqual(result);
});

const {getKeysArray} = require("./arrayOperations");
test('get object keys', () => {
    const testObject = {
        a: 1,
        b: 'string',
        c: false,
    };
    const result = ['a', 'b', 'c'];
    expect(getKeysArray(testObject)).toEqual(result);
});

const {reverseArrayOfNumbers} = require("./arrayOperations");
test('reverse an array of numbers with no reverse() method', () => {
    const array = [1, 2, 3, 4, 5];
    const result = [5, 4, 3, 2, 1];
    expect(reverseArrayOfNumbers(array)).toEqual(result);
});

const {getSumOf2DNumbersArray} = require("./arrayOperations");
test('getSumOf2DNumbersArray', () => {
    const array = [[1, 2, 3], [4, 5], [6]];
    const result = 21;
    expect(getSumOf2DNumbersArray(array)).toEqual(result);
});

const {getSumOf3DNumbersArray} = require("./arrayOperations");
test('getSumOf3DNumbersArray', () => {
    const array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    const result = 36;
    expect(getSumOf3DNumbersArray(array)).toEqual(result);
});

const {getObjectsIntersection} = require("./arrayOperations");
test('getObjectsIntersection', () => {
    const obj1 = {
        a: 1,
        b: 'string',
        c: false,
    };
    const obj2 = {
        a: 1,
        b: 'string',
        c: true,
    };
    const result = {
        a: 1,
        b: 'string',
    };
    expect(getObjectsIntersection(obj1, obj2)).toEqual(result);
});