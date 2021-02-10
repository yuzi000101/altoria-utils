export function call(fn, obj, ...args) {
    // 处理obj为null和undefined的情况
    if (obj === null || obj === undefined) {
        obj = window
    }
    // 给obj添加一个方法：temFn：this   
    obj.temFn = fn
    // 调用obj的temFn方法，传入args参数，得到返回值
    const result = obj.temFn(...args)
    // 删除obj上的temFn方法
    delete obj.temFn
    // 返回方法的返回值
    return result
}