/*
    实现浅拷贝
        方法一： 利用ES6语法
        方法二： 利用ES5语法：for ... in
*/

export function clone1(target) {
    if (target instanceof Array) {
        return [...target]
        // return target.slice()
        // return [].concat(target)
        // return Array.from(target)  // Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
        // return target.filter(item => true)
        // return target.map(item => item)
    } else if (target !== null && typeof target === 'object') {
        return { ...target }
    } else {
        return target
    }
}

export function clone2(target) {
    if (target instanceof Array || (target !== null && typeof target === 'object'())) {

        const cloneTarget = target instanceof Array ? [] : {}

        for (const key in target) {
            if (Object.hasOwnProperty.call(target, key)) {  // 只查找自身而不用遍历原型链
                const value = target[key]
                cloneTarget[key] = value
            }
        }

        return cloneTarget
    } else {
        return target
    }
}