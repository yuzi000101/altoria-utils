/* 
    优先级队列
    入队列：enqueue()
    出队列：dequeue()
    查看对头：peek()
    查看元素个数：size()
    判断队列是否为空：isEmpty()
*/

/* 创建一个对象结构的元素 */
class CreateElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}

class PriorityQueue extends CreateElement {

    constructor(element, priority) {
        super(element, priority)
        this.arr = []
    }

    // 入队列：enqueue()
    enqueue(element, priority) {

        if (priority < 1 || priority > 100) {
            throw new Error('优先级需要控制在[1-100]之间')
        }
        // 创建一个新元素
        const newElement = new CreateElement(element, priority)

        // 将element添加到arr内部，如果内部队列为空，则直接添加
        if (this.arr.length === 0) {
            this.arr.push(newElement)
        } else { //将当前element插入到arr中的合适位置：在priority值大于当前值的左边
            let len = this.arr.length
            for (let index = 0; index < len; index++) {
                if (this.arr[index].priority > priority) {
                    this.arr.splice(index, 0, newElement)
                    return
                }
            }
            // 正常退出则说明当前元素的priority是最大的，则直接放入队尾
            this.arr.push(newElement)
        }
    }

    // 出队列：dequeue()
    dequeue() {
        return this.arr.shift()
    }

    // 查看对头：front()
    peek() {
        return this.arr[0]
    }

    // 查看元素个数：size()
    size() {
        return this.arr.length
    }

    // 判断队列是否为空：isEmpty()
    isEmpty() {
        return this.arr.length === 0
    }

    // 查看优先级队列元素
    toString() {
        if (this.arr.length === 0) {
            return ''
        }
        let resultString = this.arr[0].element
        let len = this.arr.length
        for (let index = 1; index < len; index++) {
            resultString = `${resultString},${this.arr[index].element}`
        }
        return resultString
    }
}

export default PriorityQueue
