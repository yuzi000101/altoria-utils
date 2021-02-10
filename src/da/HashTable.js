/* 
    哈希表(哈希集合)
*/

class HashTable {
    constructor() {
        this.storage = []
        this.count = 0  // 当前哈希表中元素个数
        this.limit = 7  // 当前哈希表总长度
    }

    /* 
        设计哈希函数
        1. 将字符串转换为比较大的数字 hashCode
        2. 将大的数字hashCode压缩到数组范围（大小）之内
    */
    hashCode(str, size) {
        let hashCode = 0
        // 霍纳算法，计算hashCode的值
        // 例：cats --> Unicode编码
        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }

        let index = hashCode % size
        return index

    }

    /* 添加元素 */
    put(key, value) {
        let index = this.hashCode(key, this.limit)
        // 1. 根据index找出对应的bucket
        let bucket = this.storage[index]
        // 2. 如果bucket为undefined 则将bucket置为[]
        if (bucket === undefined) {
            bucket = []
            this.storage[index] = bucket
        }
        // 3. 遍历bucket中的所有元素，如果与key相同则将对应的value修改为传入的新值
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] === key) {
                tuple[1] = value
                return
            }
        }
        // 4. 如果没有找到对应的key则插入
        this.storage[index].push([key, value])
        this.count++

        // 扩容
        if (this.count > this.limit * 0.75) {
            let newLimit = this.getPrimeNumber(this.limit * 2)
            this.resize(newLimit)
        }
    }

    /* 根据key获取元素 */
    get(key) {
        let index = this.hashCode(key, this.limit)

        let bucket = this.storage[index]
        if (bucket === undefined) {
            return null
        }

        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] === key) {
                return tuple[1]
            }
        }

        return null
    }

    /* 删除元素 */
    remove(key) {
        let index = this.hashCode(key, this.limit)

        let bucket = this.storage[index]
        if (bucket === undefined) {
            return null
        }

        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] === key) {
                bucket.splice(i, 1)
                this.count--

                // 缩容
                if ((this.limit > 7) && (this.count < this.limit * 0.25)) {
                    let newLimit = this.getPrimeNumber(Math.floor(this.limit / 2))
                    this.resize(newLimit)
                }

                return tuple[1]
            }
        }

        return null
    }

    /* 判断哈希表是否为空 */
    isEmpty() {
        return this.count === 0
    }

    /* 返回哈希表数据量 */
    size() {
        return this.count
    }

    /* 哈希表扩容/缩容 */
    resize(newLimit) {
        let oldStorage = this.storage
        this.storage = []
        this.count = 0
        this.limit = newLimit

        for (let i = 0; i < oldStorage.length; i++) {
            let bucket = oldStorage[i]
            if (bucket === undefined) {
                continue
            }
            for (let j = 0; j < bucket.length; j++) {
                let tuple = bucket[j]
                this.put(tuple[0], tuple[1])
            }
        }
    }

    /* 判断是否为质数 */
    isPrimeNumber(num) {
        let temp = Math.sqrt(num)
        for (let i = 2; i < temp; i++) {
            return false
        }
        return true
    }

    /* 获取扩容质数 */
    getPrimeNumber(oldLimit) {
        while (!this.isPrimeNumber(oldLimit)) {
            oldLimit++
        }
        return oldLimit
    }

    /* toString()方法 */
    toString() {
        if (this.isEmpty()) { return '' }

        let resultString = ''
        let len = this.storage.length
        let bucket
        let tuple

        for (let i = 0; i < len; i++) {
            bucket = this.storage[i]
            if (bucket === undefined) {
                continue
            }
            for (let j = 0; j < bucket.length; j++) {
                tuple = bucket[j]
                resultString = `${tuple[0]}==> ${tuple[1]}\n${resultString}`
            }
        }

        return resultString
    }
}

export default HashTable