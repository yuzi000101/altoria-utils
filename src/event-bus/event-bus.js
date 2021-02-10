/* 
    手写事件总线
*/

export const eventBus = {
    callbacks: {},

    /* 订阅事件 */
    on(type, callback) {
        if (this.callbacks[type]) {
            this.callbacks[type].push(callback)
        } else {
            this.callbacks[type] = [callback]
        }
    },

    /* 分发事件 */
    emit(type, data) {
        if (this.callbacks[type] && this.callbacks[type].length > 0) {
            this.callbacks[type].forEach(callback => {
                callback(data)
            })
        }
    },

    /* 事件解绑 */
    off(eventName) {
        if (eventName) {
            delete this.callbacks[eventName]
        } else {
            this.callbacks = {}
        }
    }
}