// Created customMap instead of overwriting map for testability purposes
Array.prototype.customMap = function(callback, thisArg) {
    let result = [];
    this.forEach((element) => result.push(callback.call(thisArg, element))); 

    return result;
}
exports.customMap = Array.prototype.customMap;

// Created customFilter instead of overwriting filter for testability purposes
Array.prototype.customFilter = function(callback, thisArg) {
    let result = [];
    this.forEach((element) => {
        if(callback.call(thisArg, element)) {
            result.push(element);
        }
    });

    return result;
}
exports.customFilter = Array.prototype.customFilter;

// Created customReduce instead of overwriting map reduce testability purposes
Array.prototype.customReduce = function(projectionFunction) {
    let result = [1,2];
    return result;
}
exports.customReduce = Array.prototype.customReduce;
