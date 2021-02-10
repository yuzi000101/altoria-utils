import { call } from './call'

export function bind(fn, obj, ...args) {
    // 返回一个新函数
    return (...args2) => {
        // 调用原来的函数，指定this为obj，参数列表为args和args2一次组成，args优先级高于args2
        return call(fn, obj, ...args, ...args2)
    }
}