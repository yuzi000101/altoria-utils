/*
    pull(array, ...values):
        删除数组中与value相同的元素，返回所有删除元素的数组
        说明：数组发生变化
        例：pull([1,3,5,3,7], 2, 7, 3, 7) ===> 数组变为[1,5], 返回值为[3,3,7]
    pull(array, values):
        功能与pull一致，只是参数变为数组
        例：pull([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组变为[1,5], 返回值为[3,3,7]
*/

export function pull(arr, ...values) {

    const result = []

    for (let index = 0; index < arr.length; index++) {
        const item = arr[index]
        if (values.indexOf(item) !== -1) {  // 如果找到符合条件的项
            arr.splice(index, 1)  //删除原数组中的项
            result.push(item)   //将删除项添加到需要的返回数组中

            index--

        }
    }
    return result
}

/* 
    实现pullAll()
*/
export function pullAll(arr, values) {

    return pull(arr, ...values)
}