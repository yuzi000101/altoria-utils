/* 
    手写promise
*/

const PENDDING = 'pendding'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class Promise {

    /* promise构造函数 */
    constructor(excutor) {
        const self = this  // 保存this

        self.status = PENDDING
        self.data = undefined // 给promise对象指定一个用于保存结果数据的属性
        self.callback = [] // 结构为{onResolved(){}, onRejected(){}}

        function resolve(value) {
            if (self.status !== PENDDING) { return }

            self.status = 'resolved'
            self.data = value
            if (self.callback.length > 0) {
                setTimeout(() => {  //放入队列中执行
                    self.callback.forEach(callbacksObj => {
                        callbacksObj.onResolved(value)
                    })
                }, 0)
            }
        }

        function reject(reason) {
            if (self.status !== PENDDING) { return }

            self.status = 'rejected'
            self.data = reason
            if (self.callback.length > 0) {
                setTimeout(() => {  //放入队列中执行
                    self.callback.forEach(callbacksObj => {
                        callbacksObj.onRejected(reason)
                    })
                }, 0)
            }
        }

        try {
            excutor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    /* Promise原型对象then方法，指定成功/失败的回调，返回新的promise对象 */
    then(onResolved, onRejected) {

        const self = this

        onResolved = typeof onResolved === 'function' ? onResolved : value => value
        /* 异常穿透 */
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

        return new Promise((resolve, reject) => {

            function handle(callback) {
                try {  // 1.回调函数抛出异常
                    const result = callback(self.data)
                    if (result instanceof Promise) {  // 2.回调函数返回的是promise
                        result.then(resolve, reject)  // 改变promise的状态
                    } else { // 3.回调函数返回的不是promise
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }

            if (self.status === PENDDING) {
                self.callback.push({
                    onResolved(value) { handle(onResolved) },
                    onRejected(reason) { handle(onRejected) }
                })
            } else if (self.status === RESOLVED) {
                setTimeout(() => {
                    handle(onResolved)
                }, 0)
            } else {  // REJECTED
                setTimeout(() => {
                    handle(onRejected)
                }, 0)
            }
        })
    }

    /* Promise原型对象catch方法，指定失败的回调，返回新的promise对象 */
    catch(onRejected) {
        this.then(undefined, onRejected)
    }

    /* Promise函数对象resolve方法，返回一个指定结果的成功的promise对象 */
    static resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(resolve, reject)
            } else {
                resolve(value)
            }
        })
    }

    /* Promise函数对象reject方法，返回一个指定结果的失败的promise对象 */
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    /* Promise函数对象all方法，接收promise数组，只有所有promise对象成功返回成功，否则返回失败 */
    static all(promises) {
        let promiseCount = 0 // 统计的promise数量
        const values = new Array(promises.length)  // 保存成功的promise
        return new Promise((resovle, reject) => {
            promises.forEach((promise, index) => {
                promise.then(
                    (value) => {
                        promiseCount++
                        values[index] = value
                        if (promiseCount === promises.length) {
                            resovle(values)
                        }
                    },
                    (reason) => {
                        reject(reason)
                    }
                )
            })
        })
    }

    /* Promise函数对象race方法，其结果由第一个完成的promise结果决定 */
    static race(promises) {
        return new Promise((resolve, reject) => {
            promises.forEach(promise => {
                promise.then(
                    (value) => {
                        resovle(value)
                    },
                    (reason) => {
                        reject(reason)
                    }
                )
            })
        })
    }

    /* Promsie函数对象resolveDelay方法，延迟指定时间后返回成功的promise对象 */
    static resolveDelay(value, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (value instanceof Promise) { // 返回的是promise
                    value.then(resolve)
                } else {  // 返回的是一般值
                    resolve(value)
                }
            }, time)
        })
    }

    /* Promise函数对性的rejectDelay方法，延迟指定时间后返回失败的promise对象 */
    static rejectDelay(reason, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(reason)
            }, time)
        })
    }
}

