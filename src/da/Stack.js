/*
    自定义栈类型
    1.使用数组封装
    2.使用对象封装
*/

/* 
    栈结构
*/
class Stack {
    constructor() {
        this.length = 0
        this.items = {}
    }

    // 压栈
    push(element) {
        this.items[this.length] = element
        this.length++
    }

    // 出栈
    pop() {
        delete this.items[this.length - 1]
        this.length--
    }

    // 查看栈顶
    peek() {
        return this.items[this.length - 1]
    }

    // 返回栈长度
    size() {
        return this.length
    }

    // 判断栈是否为空
    isEmpty() {
        return this.length === 0
    }

    // 清栈
    clear() {
        this.items = {}
        this.length = 0
    }

    // 输出栈元素
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let resultString = `${this.items[0]}`
        for (let i = 1; i < this.length; i++) {
            resultString = `${resultString},${this.items[i]}`
        }
        return resultString
    }
}

export default Stack