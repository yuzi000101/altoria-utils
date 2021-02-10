/* 
    自定义队列类型
    入队列：enqueue()
    出队列：dequeue()
    查看对头：peek()
    查看元素个数：size()
    判断队列是否为空：isEmpty()
*/

/* 
   Queue队列
*/
class Queue {
    constructor() {
        this.items = {}
        this.lowestCount = 0  // 队头指针
        this.count = 0
    }

    // 添加元素
    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }

    // 删除元素
    dequeue() {
        let result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    // 查看队头
    peek() {
        return this.items[this.lowestCount]
    }

    // 返回队列元素个数
    size() {
        return this.count - this.lowestCount
    }

    // 查看队列是否为空
    isEmpty() {
        return (this.count - this.lowestCount) === 0
    }

    // 清空队列
    clear() {
        this.items = {}
        this.lowestCount = 0
        this.count = 0
    }

    // 返回队列所有元素
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let resultString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            resultString = `${this.resultString}, ${this.items[i]}`
        }
        return resultString
    }
}

export default Queue
