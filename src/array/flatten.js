/*
数组扁平化： 取出嵌套数组（多维）中的所有元素放到一个新数组（一维）中
如： [1,[2,[3,4]]] ==> [1,2,3,4]
*/

import { reduce, some } from './declares'
import { concat } from './concat'
/* 
    方法一： 递归 + reduce() + concat()
*/
export function flatten1(array) {
    return reduce(array, (pre, item) => {
        if (!Array.isArray(item)) {
            pre.push(item)
        } else {
            pre = concat(pre, flatten1(item))
        }
        return pre
    }, [])
}

/* 
    方法二: ... + some() + concat()
*/
export function flatten2(array) {
    let arr = concat([], ...array)

    while (some(arr, item => Array.isArray(item))) {
        arr = concat([], ...arr)
    }

    return arr
}