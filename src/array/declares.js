export function map(array, callback) {
    const arr = []
    // 遍历当前数组中的每个元素，调用callback得到结果数据，添加arr
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        const result = callback(element, index)
        arr.push(result)
    }
    return arr
}

export function reduce(array, callback, initValue) {
    let total = initValue
    // 遍历当前数组中的每个元素，调用callback得到累加结果数据，返回total
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        total = callback(total, element, index)

    }
    return total
}

export function filter(array, callback) {
    const arr = []
    // 遍历当前数组中的每个元素，调用callback得到布尔值，如果为真，则将element添加到arr
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        const result = callback(element, index)
        if (result) {
            arr.push(element)
        }
    }
    return arr
}

export function find(array, callback) {
    // 遍历当前数组中的每个元素，调用callback得到布尔值，如果为真，则返回element
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        const result = callback(element, index)
        if (result) {
            return element
        }
    }
    return false
}

export function findIndex(array, callback) {
    // 遍历当前数组中的每个元素，调用callback得到布尔值，如果为真，则返回element
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        const result = callback(element, index)
        if (result) {
            return index
        }
    }
    return -1
}

export function every(array, callback) {
    // 遍历当前数组中的每个元素，调用callback得到布尔值，一旦条件为false，则返回false
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        const result = callback(element, index)
        if (!result) {
            return false
        }
    }
    return true
}
export function some(array, callback) {
    // 遍历当前数组中的每个元素，调用callback得到布尔值，一旦条件为true，则返回true
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        const result = callback(element, index)
        if (result) {
            return true
        }
    }
    return false
}