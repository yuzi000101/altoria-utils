/* 
    将数组拆分成多个size长度的区块，每个区块组成小数组，整体组成一个二维数组
*/

export function chunk(array, size = 1) {
    const bigArr = []
    let smallArr = []

    if (array.length === 0) {  //如果为空数组直接返回
        return bigArr
    }

    if (size < 1) {
        size = 1
    } else if (array.length < size) {
        size = array.length
    }

    array.forEach(item => {
        if (smallArr.length === 0) { // 将smallArr放到bigArr中
            bigArr.push(smallArr)
        }

        smallArr.push(item)   // 向smallArr添加元素

        // 限制小数组的长度为size
        if (smallArr.length === size) {
            smallArr = []
        }
    })

    return bigArr
}