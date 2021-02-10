/*
    difference(arr1, arr2):得到当前数组中所有不在arr中的元素组成的数组（不改变原数组）
    例：difference([1,3,5,7], [5,8]) ==> [1,3,7]
*/

import { filter } from './declares'

export function difference(arr1, arr2) {

    if (arr1.length === 0) {
        return []
    } else if (arr2.length === 0) {
        return [...arr1]
    }

    return filter(arr1, item => arr2.indexOf(item) === -1)
}

/* 
    扩展：处理在后续多个数组中的情况
*/
export function differences(arr1, ...arrs) {

    if (arr1.length === 0) {
        return []
    }

    return filter(arr1, item => {
        let result = true

        // arrs.forEach(arr => {
        //     const index = arr.indexOf(item)
        //     if (index !== -1) {
        //         result = false
        //     }
        // })

        for (let index = 0; index < arrs.length; index++) {
            const arr = arrs[index]
            if (arr.indexOf(item) !== -1) {
                result = false
                break  //结束当前for循环
            }
        }

        return result
    })
} 