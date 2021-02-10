/* 
    双端队列
    addFront(element) 头部添加元素
    addBack(element)  尾部添加元素
    removeFront()  移除头部元素
    removeBack()  移除尾部元素
    peekFront()  查看队头
    peekBack()  查看队尾
    size()
    isEmpty()
    clear()
    toString()

    应用： 回文检测
*/

export default class Deque {
    constructor() {
        this._items = {}
        this._count = 0
        this._lowestCount = 0 // 记录队列头部
    }

    addFront(element) {
        // 队列为空
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this._lowestCount > 0) { // lowestCount大于0
            this._lowestCount--
            this._items[this._lowestCount] = element
            this._count++
        } else {  // lowestCount等于0
            for (let i = this._count; i > 0; i--) {
                this._items[i] = this._items[i - 1]
            }
            this._items[0] = element
            this._lowestCount = 0
            this._count++
        }
    }

    addBack(element) {
        this._items[this._count] = element
        this._count++
    }

    removeFront() {
        delete this._items[this._lowestCount]
        this._count--
    }

    removeBack() {
        this._items[this._count - 1]
        this._count--
    }

    peekFront() {
        return this._items[this._lowestCount]
    }

    peekBack() {
        return this._items[this._count - 1]
    }

    size() {
        return this._count - this._lowestCount
    }

    isEmpty() {
        return (this._count - this._lowestCount) === 0
    }

    clear() {
        this._items = {}
        this._lowestCount = 0
        this._count = 0
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let resultString = `${this._items[this._lowestCount]}`
        for (let i = this._lowestCount + 1; i < this._count; i++) {
            resultString = `${this.resultString}, ${this._items[i]}`
        }
        return resultString
    }
}