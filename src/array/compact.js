/* 
    compact(array):返回数组中所有真元素所组成的数组
*/
import { filter } from './declares'

export function compact(array) {
    return filter(array, item => item)
}