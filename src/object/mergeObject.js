/*
    语法：object mergeObject(...objs)
    功能： 合并多个对象，返回一个合并后对象（不改变原对象）
    合并前：
        {a:[{x:2}, {y:4}], b:1}
        {a:{z:3}, b:[2,3], c: 'foo'}
    合并后：
        {a:[{x:2}, {y:4}, {z:3}], b:[1,2,3],c:'foo'}
*/

import { concat } from '../array/concat'

export function mergeObject(...objs) {
    let result = {}

    objs.forEach(obj => {
        Object.keys(obj).forEach(key => {  //使用Object.keys()产生一个包含所有对象名的数组
            const value = obj[key]

            //检验result是否由key这个属性
            if (!result.hasOwnProperty(key)) {  //没有则添加
                result[key] = value
            } else {  //  如果由key这个属性
                //对原值与value合并产生新数组
                result[key] = concat([], result[key], value)
            }

        })
    })

    return result
}   