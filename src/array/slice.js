/* 
    语法：var new_array = slice(array, [begin[, end]])
    功能：返回一个由begin 和 end 决定的原数组的浅拷贝， 原始数组不会发生改变
*/

export function slice(array, begin, end) {
    const arr = []

    // 如果原始数组是空数组, 直接返回
    if (array.length === 0) {
        return array
    }

    // 处理没有指定begin和end的情况
    begin = begin || 0
    end = end || array.length

    if (begin < 0) {
        begin = 0
    }
    if (end > array.length) {
        end = array.length
    }

    for (let index = begin; index < end; index++) {
        arr.push(array[index])
    }

    return arr
}