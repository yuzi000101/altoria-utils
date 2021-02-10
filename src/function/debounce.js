/* 用来返回防抖函数的工具函数 */
export function debounce(callback, delay) {
    return function (event) {
        // 如果上次事件还没有真正处理，取消它
        // callback.timeoutId 会查找原型链
        if (callback.hasOwnProperty('timeoutId')) {  //不会查找原型链
            clearTimeout(callback.timeoutId)
        }

        //发生指定事件后才会调用事件处理的回调函数
        // 启动定时器，只是准备真正处理
        callback.timeoutId = setTimeout(() => {  //将定时器标记绑定到事件处理函数上
            // 真正处理事件
            callback.call(this, event)
            // 删除准备处理的标记
            delete callback.timeoutId
        }, delay)
    }
}