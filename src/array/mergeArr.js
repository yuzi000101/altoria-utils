/*
    mergeArr(arr1, arr2):将arr2与arr1的元素进行合并组成一个新的数组（不改变原数组）
    例：merge([1,3,5,7,5],[1,5,8]) ==> [1,3,5,7,5,8]
*/

export function mergeArr(arr1, ...arrs) {

    const newArr = [...arr1]

    if (arrs.length === 0) {
        return newArr
    }

    arrs.forEach(arr => {
        arr.forEach(item => {
            if (newArr.indexOf(item) === -1) {
                newArr.push(item)
            }
        })
    })

    return newArr
}