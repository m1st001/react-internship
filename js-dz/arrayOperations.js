// Merges arr1 and arr2 into a single array
// Returns an array
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
exports.mergeArrays = mergeArrays;

// Adds a sequence of elements to the arr array
// Returns an array
function addElementsToArray(array, ...elements) {
    elements.forEach(element => {
        array.push(element);
    });

    return array;
}
exports.addElementsToArray = addElementsToArray;

// Reverses array
// Returns an array
function reverseArray(array) {
    return array.reverse();
}
exports.reverseArray = reverseArray;

// Exports a sequence of elements to new array
// Returns an array
function exportElementsToNewArrayViaSlice(array, fromIndex, toIndex) {
    return array.slice(fromIndex, toIndex);
}
exports.exportElementsToNewArrayViaSlice = exportElementsToNewArrayViaSlice

// Get an array of keys from an object
// Returns an array
function getKeysArray(obj) {
    return Object.keys(obj);
}
exports.getKeysArray = getKeysArray;

// Reverses an array of numbers without using reverse() method
// Returns an array of numbers
function reverseArrayOfNumbers(array) {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }

    return array;
}
exports.reverseArrayOfNumbers = reverseArrayOfNumbers;

// Calculates the sum of all numbers in a 2D array
// Returns a number
function getSumOf2DNumbersArray(array) {
    let sum = 0;
    array.forEach(subArray => {
        sum += subArray.reduce((a, b) => a + b);
    });

    return sum;
}
exports.getSumOf2DNumbersArray = getSumOf2DNumbersArray;

// Calculates the sum of all numbers in a 3D array
// Returns a number
function getSumOf3DNumbersArray(array) {
    let sum = 0;
    array.forEach(subArray => {
        sum += getSumOf2DNumbersArray(subArray);
    });

    return sum;
}
exports.getSumOf3DNumbersArray = getSumOf3DNumbersArray;

// Calculates an intersection of two objects(same type)
// Returns an object
function getObjectsIntersection(obj1, obj2) {
    let keys = Object.keys(obj1);
    let result = {};
    keys.forEach(key => {
        if (obj1[key] === obj2[key]) {
            result[key] = obj2[key];
        }
    });

    return result;
}
exports.getObjectsIntersection = getObjectsIntersection;