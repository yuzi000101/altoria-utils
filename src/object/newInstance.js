/* 
    1.自定义new工具函数
        语法：newInstance(Fn, ...args)
        功能：创建Fn构造函数的实例对象
        实现：创建空对象obj，调用Fn指定this为obj，返回obj
*/

export function newInstance(Fn, ...args) {

    //创建空对象
    const obj = {}

    //调用Fn，且指定this为新创建的对象
    const result = Fn.apply(obj, args)

    //如果返回结果为对象类型，则最终结果就是这个对象
    if (result instanceof Object) {
        return result
    }

    // 使原型对象是空的Object对象那个，且constructor属性为Fn
    /*   
        obj.__proto__ = {}
        obj.__proto__.constructor = Fn   
        问题：创建的每一个实例对象的原型对象不是同一个（实际要求是同一个）
    */
    obj.__proto__ = Fn.prototype  // 将构造函数的显示原型属性赋值给实例对象的隐式原型属性

    // 返回新对象
    return obj
}