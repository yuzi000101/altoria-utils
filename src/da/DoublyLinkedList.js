/* 
    双向链表
*/

// 内部类用于常见节点
function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
}


class DoublyLinkedList {

    constructor() {
        // 属性
        this.head = null
        this.tail = null
        this.count = 0
    }

    /* 添加节点 */
    append(data) {
        let newNode = new Node(data)
        if (!this.count) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail  // 新节点的prev指向最后一个节点
            this.tail.next = newNode  // 最后一个节点的next指向新节点
            this.tail = newNode  // 尾部指针指向新添加的节点

        }
        this.count++
    }

    /* 2. toString方法 */
    toString() {
        return this.backwardString()
    }

    /* 2.2 从尾部遍历输出 */
    forwardString() {
        let current = this.tail
        let resultString = ''

        while (current) {
            resultString += current.data + ' '
            current = current.prev
        }

        return resultString
    }

    /* 2.3 从头部遍历输出 */
    backwardString() {
        if (this.isEmpty()) {
            return ''
        }
        let current = this.head.next
        let resultString = this.head.data

        while (current) {
            resultString = `${resultString},${current.data}`
            current = current.next
        }

        return resultString
    }

    /* 3. 插入 */
    insert(position, data) {
        if (position < 0 || position > this.count) return false

        let newNode = new Node(data)

        if (!this.count) {  // 链表无元素插入情况
            this.head = newNode
            this.tail = newNode
        } else {
            if (position === 0) {  // 插入到链表头部
                newNode.next = this.head
                this.head.prev = newNode
                this.head = newNode
            } else if (position === this.count) {  //插入到链表尾部
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
            } else {  // 在中间插入
                let current = this.head
                let index = 0

                while (index++ < position) {
                    current = current.next
                }
                newNode.next = current
                newNode.prev = current.prev
                current.prev.next = newNode
                current.prev = newNode
            }
        }

        this.count++
        return true
    }

    /* 4. 根据位置获取元素 */
    get(position) {
        if (position < 0 || position >= this.count) return null

        let current = this.head
        let index = 0

        if (this.count / 2 > position) {  // 说明传入position非常小
            while (index++ < position) {
                current = current.next
            }
        } else {
            current = this.tail
            index = this.count - 1
            while (index-- > position) {
                current = current.prev
            }
        }
        return current.data
    }

    /* 5. 获取元素下标 */
    indexOf(data) {
        let current = this.head
        let index = 0
        while (current) {
            if (current.data === data) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    /* 6. 更新元素 */
    update(position, newData) {
        if (position < 0 || position >= this.count) return false

        let current = this.head
        let index = 0

        if (this.count / 2 > position) {
            while (index++ < position) {
                current = current.next
            }
        } else {
            current = this.tail
            index = this.count - 1
            while (index-- > position) {
                current = current.prev
            }
        }
        current.data = newData
        return true
    }

    /* 7. 根据下标删除元素 */
    removeAt(position) {
        if (position < 0 || position > this.count) return null

        let current = this.head
        let index = 0

        // 链表中只有一个节点
        if (this.count === 1) {
            this.head = null
            this.tail = null
        } else {
            if (position === 0) {  // 删除链表中的第一个节点
                this.head.next.prev = null
                this.head = this.head.next
            } else if (position === this.count - 1) { // 删除链表中的最后一个节点
                current = this.tail
                this.tail.prev.next = null
                this.tail = this.tail.prev
            } else {  // 删除中间节点
                while (index++ < position) {
                    current = current.next
                }
                current.prev.next = current.next
                current.next.prev = current.prev
            }
        }

        this.count--
        return current.data
    }

    /* 8. 删除元素 */
    remove(data) {
        return this.removeAt(this.indexOf(data))
    }

    /* 9. isEmpty */
    isEmpty() {
        return this.count === 0
    }

    /* 10. size */
    size() {
        return this.count
    }

    /* 11. 获取头部元素 */
    getHead() {
        return this.head.data
    }

    /* 20.获取尾部元素 */
    getTail() {
        return this.tail.data
    }
}

export default DoublyLinkedList

