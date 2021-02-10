/*
    drop(array, count):
        得到数组过滤掉左边count个后剩余元素组成的数组
        说明：不改变当前数组，count默认是1
        如：drop([1,3,5,5],2) ==> [5,7]
    dropRight(array, count):
        得到数组过滤掉右边count个后剩余元素组成的数组
        说明：不改变当前数组，count默认是1
        如：drop([1,3,5,5],2) ==> [1，3]
*/

export function drop(arr, count) {
    return arr.filter((item, index) => index >= count)
}


export function dropRight(arr, count) {
    return arr.filter((item, index) => index < arr.length - count)
}
