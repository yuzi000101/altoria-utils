/* 
    消息订阅与发布
*/
export const PubSub = {
    id: 1,
    callbacks: {
        // pay:{
        //     token_1: fn,
        //     token_2: fn
        // }
    },

    /* 订阅消息 */
    subscribe(channel, callback) {
        let token = 'token_' + this.id++

        if (this.callbacks[channel]) {
            this.callbacks[channel][token] = callback
        } else {
            this.callbacks[channel] = {
                [token]: callback
            }
        }
        return token
    },

    /* 发布消息 */
    publish(channel, data) {
        if (this.callbacks[channel]) {
            Object.values(this.callbacks[channel]).forEach(callback => {
                callback(data)
            })
        }
    },

    /* 取消订阅 */
    unsubscribe(flag) {
        if (flag === undefined) {  // 全部取消
            this.callbacks = {}
        } else if (typeof flag === 'string') {
            if (flag.indexOf('token_') !== -1) {// 取消频道中的某个token
                const callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag))
                delete callbackObj[flag]
            } else { // 取消频道
                delete this.callbacks[flag]
            }
        }
    }
}
