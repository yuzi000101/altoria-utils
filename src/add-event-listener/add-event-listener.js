/* 
    事件绑定
*/

export function addEventListener(el, eventType, callback, selector) {
    if (typeof el === 'string') {
        el = document.querySelector(el)
    }

    // 判断是否传入元素选择器
    if (!selector) {
        el.addEventListener(eventType, callback)
    } else {
        el.addEventListener(eventType, function (e) {
            const target = e.target
            // 判断选择器与元素是否相符
            if (target.matches(selector)) {
                callback.call(target, e)
            }
        })
    }
}