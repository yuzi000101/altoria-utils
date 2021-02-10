/* 
    字典
*/


//  将传入的key初始化为字符串  工具函数
function defaultToString(item) {
    if (item === null) {
        return 'NULL'
    } else if (item === undefined) {
        return 'UNDEFINED'
    } else if ((typeof item === 'string') || (item instanceof String)) {
        return `${item}`
    }
    return item.toString()

}


// 创建字典value类 {key: xxx, value: xxx}
function ValuePair(key, value) {
    this.key = key
    this.value = value
}

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    /* 判断字典中是否存在指定key */
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null
    }

    /* 添加元素 */
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key, value)
            return true
        }
        return false
    }

    /* 根据key返回元素 */
    get(key) {
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair == null ? undefined : valuePair.value
    }

    /* 移除指定key */
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }

    /* 返回字典中所有[键，值] */
    keyValues() {
        return Object.values(this.table)
    }

    /* 返回所有键 */
    keys() {
        return this.keyValues().map(keyValue => keyValue.key)
    }

    /* 返回所有值 */
    values() {
        return this.keyValues().map(keyValue => keyValue.value)
    }

    /* 清空字典 */
    clear() {
        this.table = {}
    }

    /* 返回字典元素数量 */
    size() {
        return Object.keys(this.table).length
    }

    /* 判断字典是否为空 */
    isEmpty() {
        return this.size() === 0
    }

    /* toString()方法 */
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let valuePair = this.keyValues()
        let len = valuePair.length
        let resultString = `${valuePair[0].key}: ${valuePair[0].value}`

        for (let index = 1; index < len; index++) {
            resultString = `${resultString}, ${valuePair[index].key}: ${valuePair[index].value}`
        }

        return resultString
    }
}

export default Dictionary