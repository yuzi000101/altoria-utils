/*
    语法：var new_array = concat(array, value1[, value2[, ...valueN]])
    功能：将n个数组或值与当前数组合并产生一个新的数组，原始数组不会被改变
*/

export function concat(array, ...values) {
    const arr = [...array]

    values.forEach(value => {
        if (Array.isArray(value)) {  //判断当前遍历元素是否为数组
            arr.push(...value)
        } else {
            arr.push(value)
        }
    })

    return arr
}