/* 
    三种基本排序
*/

import { find } from "../array/declares"

/* 交换工具函数 */
function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

// 冒泡排序
export function bubbleSort(arr) {
    let newArr = [...arr]
    let len = newArr.length
    let temp
    for (let i = len - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (newArr[j] > newArr[j + 1]) {
                temp = newArr[j]
                newArr[j] = newArr[j + 1]
                newArr[j + 1] = temp
            }
        }
    }
    return newArr
}

// 选择排序
export function selectionSort(arr) {
    let newArr = [...arr]
    let len = newArr.length
    let temp
    let minIndex
    for (let i = 0; i < len; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (newArr[minIndex] > newArr[j]) {
                minIndex = j
            }
        }
        temp = newArr[i]
        newArr[i] = newArr[minIndex]
        newArr[minIndex] = temp
    }
    return newArr
}

// 插入排序
export function insertionSort(arr) {
    let newArr = [...arr]
    let len = newArr.length
    let j
    let temp
    for (let i = 1; i < len; i++) {
        temp = newArr[i]
        j = i
        while (j > 0 && newArr[j - 1] > temp) {
            newArr[j] = newArr[j - 1]
            j--
        }
        newArr[j] = temp
    }
    return newArr
}

/* 
    希尔排序
    1. 计算出一系列增量值（折半法）
        递减， 最后一个必须是1
        distance = length
        distance = Math.floor(distance / 2)
    2. 以当前增量对数组进行分组，分成多个小组
        对每个小数组进行插入排序
        每个小数组排序是交替进行
*/
export function shellSort(arr) {
    let newArr = [...arr]
    let len = newArr.length
    let gap = Math.floor(len / 2)
    let temp
    let j
    while (gap >= 1) {
        for (let i = gap; i < len; i = i + gap) {
            temp = newArr[i]
            j = i
            while (newArr[j - gap] > temp && j > gap - 1) {
                newArr[j] = newArr[j - gap]
                j -= gap
            }
            newArr[j] = temp
        }
        gap = Math.floor(gap / 2)
    }
    return newArr
}

/* 归并排序 */
export function mergeSort(arr) {
    if (arr.length > 1) {
        const len = arr.length
        const middle = Math.floor(len / 2)
        const left = mergeSort(arr.slice(0, middle))
        const right = mergeSort(arr.slice(middle, len))
        arr = merge(left, right)
    }
    return arr
}
function merge(left, right) {
    let i = 0
    let j = 0
    const result = []
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++])
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

/* 快速排序 */
export function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,  // 保存分区下标
        left = typeof left === 'number' ? left : 0,
        right = typeof right == 'number' ? right : len - 1

    if (left < right) {
        partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }
    return arr
}

function partition(arr, left, right) { // 分区操作（排序）
    var pivot = left,  //设置主元下标
        index = pivot + 1

    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index)
            index++
        }
    }
    swap(arr, pivot, index - 1)
    return index - 1
}

/* 计数排序 */
export function countingSort(arr) {

    if (arr.length < 2) return arr
    const maxValue = findMaxValue(arr)
    const counts = new Array(maxValue + 1)

    // 统计排序元素数量
    arr.forEach(item => {
        if (!counts[item]) {
            counts[item] = 0
        }
        counts[item]++
    })

    let sortedIndex = 0
    counts.forEach((count, index) => {
        while (count > 0) {
            arr[sortedIndex++] = index
            count--
        }
    })
    return arr
}
// 寻找最值
function findMaxValue(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

/* 桶排序 */
export function bucketSort(arr, bucketSize = 5) {
    if (arr.length < 2) return arr
    const buckets = createBuckets(arr, bucketSize)  // 创建桶
    return sortBuckets(buckets) // 对每个桶进行排序
}
// 创建桶
function createBuckets(arr, bucketSize) {
    let minValue = arr[0]
    let maxValue = arr[0]
    // 寻找最值
    for (let i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i]
        } else if (maxValue < arr[i]) {
            maxValue = arr[i]
        }
    }

    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
    // 定义桶，并将每个桶置空
    const buckets = []
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = []
    }
    // 将元素放入对应桶中
    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize)
        buckets[bucketIndex].push(arr[i])
    }
    return buckets
}
// 对每个桶进行排序
function sortBuckets(buckets) {
    const sortedArr = []
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i]) {
            let result = insertionSort(buckets[i])
            sortedArr.push(...result)
        }
    }
    return sortedArr
}

/* 二分查找 */
export function binarySearch(arr, val) {
    const sortedArr = quickSort(arr)
    let left = 0
    let right = sortedArr.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (val === sortedArr[mid]) {
            return sortedArr[mid]
        } else if (val > sortedArr[mid]) {  // 向左查找
            left = mid + 1
        } else if (val < sortedArr[mid]) {  // 向右查找
            right = mid - 1
        }
    }
    return null  // 未找到
}
