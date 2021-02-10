/* 
    字符串倒序：reverseString(str) 生成一个倒序的字符串
    字符串是否是回文：palindrome(str) 如果给定字符串是回文返回true否则返回false
    截取字符转：truncate(str, num) 如果字符串的长度超过了num，截取前面num长度部分，并以...结束
*/

export function reverseString(str) {
    return str.split('').reverse().join('')
}

export function palindrome(str) {
    return str === reverseString(str)
}

export function truncate(str, num) {
    return str.length > num ? str.substring(0, num) + '...' : num
}