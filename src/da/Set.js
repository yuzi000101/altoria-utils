/* 
    集合
*/

class Set {
    constructor() {
        this.items = {}
    }

    /* 添加元素 */
    add(value) {
        if (this.has(value)) {
            return false
        }
        this.items[value] = value
        return true
    }

    /* 判断元素是否在集合中 */
    has(value) {
        return this.items.hasOwnProperty(value)
    }

    /* 删除元素 */
    remove(vlaue) {
        if (this.has(value)) {
            delete this.items[value]
            return true
        }
        return false
    }

    /* 清空集合 */
    clear() {
        this.items = {}
    }

    /* 返回集合数量 */
    size() {
        return Object.keys(this.items).length
    }

    /* 返回包含集合中所有值的数组 */
    values() {
        return Object.keys(this.items)
    }

    /* 并集 */
    union(otherSet) {

        let unionSet = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        return unionSet
    }

    /* 交集 */
    intersection(otherSet) {
        let intersection = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersection.add(values[i])
            }
        }
        return intersection
    }

    /* 差集 */
    difference(otherSet) {
        let differenceSet = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }
        return differenceSet
    }

    /* 子集 */
    subSet(otherSet) {
        let values = this.values()

        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                return false
            }
        }
        return true
    }

}

export default Set