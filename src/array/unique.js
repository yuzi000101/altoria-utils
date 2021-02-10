/* 
    数据去重：根据当前数组产生一个去除重复元素的数组
*/

/* 
   方法1： 利用forEach()和indexOf()
       本质上是双重遍历效率差一些
*/
export function unique1(array) {
    const arr = []
    array.forEach(item => {
        //只有当item不在arr中才添加
        if (arr.indexOf(item) === -1) {  //内部隐式遍历
            arr.push(item)
        }
    })
    return arr
}

/* 
   方法2： 利用forEach()和对象容器
       只需要一重遍历，效率稍高
*/
export function unique2(array) {
    const arr = []
    const contain = {}  // 结构{item: true}
    array.forEach(item => {
        //只有当item不在arr中才添加
        if (!contain.hasOwnProperty(item)) {  // 使用hasOwnProperty无需查找原型链
            arr.push(item)
            contain[item] = true
        }
    })
    return arr
}

/* 
   方法3： 利用ES6的 from+set或者...set
       编码简洁
*/
export function unique3(array) {
    // return Array.from(new Set(array))
    return [...new Set(array)]
}