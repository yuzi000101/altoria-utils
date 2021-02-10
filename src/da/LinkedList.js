/* 
    单向链表
*/

/* 创建链表某一节点类 */
function Node(element) {
    this.element = element
    this.next = null
}

class LinkedList {

    constructor() {
        this.head = null
        this.count = 0
    }

    /* 添加节点 */
    append(element) {
        // 创建一个新的节点
        let newNode = new Node(element)

        if (this.count === 0) {   // 是第一个节点
            this.head = newNode
        } else {  // 不是第一个节点
            // 从head开始找到最后一个节点
            let current = this.head
            while (current.next) {
                current = current.next
            }
            // 添加新元素
            current.next = newNode
        }
        this.count++ // 链表长度加一
    }

    /* 插入节点 */
    insert(element, position) {
        if (position < 0 || position > this.count) return false

        let newNode = new Node(element)

        if (position === 0) {  // 头部插入
            newNode.next = this.head
            this.head = newNode
        } else {  //中间插入
            let index = 0  // 遍历节点
            let current = this.head  // 存放下一个节点
            let previous = null  // 存放上一个节点
            while (index++ < position) {  // 遍历节点找出需要插入的位置
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }
        this.count++
    }

    /* 根据指定位置获取节点 */
    get(position) {
        if (position < 0 || position >= this.length) return null  // 越界判断

        // 遍历查找第position个元素
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }
        return current.element
    }

    /* 获取节点下标 */
    indexOf(element) {
        let current = this.head
        let index = 0  // 存储下标
        while (current) {
            if (current.element === element) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    /* 更新节点 */
    update(position, newElement) {
        if (position < 0 || position >= this.length) return false

        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }
        // 将position位置的element更改为newElement
        current.element = newElement
        return true
    }

    /* 根据下标删除节点 */
    removeAt(position) {
        if (position < 0 || position >= this.length) return null

        let current = this.head
        let index = 0
        let previous = null

        if (position === 0) { // 要删除的数据为链表头元素
            this.head = this.head.next
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            // 前一个节点的next指向要删除节点的next即可
            previous.next = current.next
        }
        this.count--
        // 返回删除的数据
        return current.element
    }

    /* 删除节点 */
    remove(element) {
        return this.removeAt(this.indexOf(element))
    }

    /* 判断链表是否为空 */
    isEmpty() {
        return this.count === 0
    }

    /* 返回链表个数 */
    size() {
        return this.count
    }

    // toString方法
    toString() {
        if (this.isEmpty()) {
            return ''
        }

        let current = this.head.next
        let resultString = this.head.element

        while (current) {
            resultString = `${resultString},${current.element}`
            current = current.next
        }
        return resultString
    }
}

export default LinkedList