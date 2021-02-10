/* 
    入口js
    向外暴露工具函数
*/

/* Function */
export { call } from './function/call'
export { apply } from './function/apply'
export { bind } from './function/bind'
export { throttle } from './function/throttle'
export { debounce } from './function/debounce'

/* Array */
export { map, reduce, filter, find, findIndex, every, some } from './array/declares'
export { unique1, unique2, unique3 } from './array/unique'
export { concat } from './array/concat'
export { slice } from './array/slice'
export { flatten1, flatten2 } from './array/flatten'
export { compact } from './array/compact'
export { chunk } from './array/chunk'
export { difference, differences } from './array/difference'
export { mergeArr } from './array/mergeArr'
export { pull, pullAll } from './array/pull'
export { drop, dropRight } from './array/drop'

/* Object */
export { newInstance } from './object/newInstance'
export { myInstanceOf } from './object/myInstanceOf'
export { mergeObject } from './object/mergeObject'
export { clone1, clone2 } from './object/clone'
export { deepClone1, deepClone2, deepClone3 } from './object/deepClone'

/* String */
export { reverseString, palindrome, truncate } from './string'

/* Data Structures And Algorithms */
export { default as Stack } from './da/Stack'
export { default as Queue } from './da/Queue'
export { default as PriorityQueue } from './da/PriorityQueue'
export { default as Deque } from './da/Deque'
export { default as LinkedList } from './da/LinkedList'
export { default as DoublyLinkedList } from './da/DoublyLinkedList'
export { default as Set } from './da/Set'
export { default as Dictionary } from './da/Dictionary'
export { default as HashTable } from './da/HashTable'
export { default as BinarySearchTree } from './da/BinarySearchTree'
export { default as Graph } from './da/Graph'

/*  */
export { addEventListener } from './add-event-listener/add-event-listener'
export { eventBus } from './event-bus/event-bus'
export { PubSub } from './pub-sub/pub-sub'

export { axios } from './axios/axios'

/* Sort */
export {
    bubbleSort,
    selectionSort,
    insertionSort,
    shellSort,
    mergeSort,
    quickSort,
    countingSort,
    bucketSort,
    binarySearch
} from './da/sort'

