/* 
    图结构
*/

import Dictionary from './Dictionary'
import Queue from './Queue'

class Graph {

    constructor() {
        this.vertexes = [] // 存储顶点
        this.edges = new Dictionary() // 存储边
    }

    /* 添加顶点 */
    addVertex(v) {
        this.vertexes.push(v)
        this.edges.set(v, [])
    }
    /* 添加边 */
    addEdge(v1, v2) {
        this.edges.get(v1).push(v2)
        this.edges.get(v2).push(v1)
    }

    toString() {
        let s = ''
        for (let i = 0; i < this.vertexes.length; i++) {
            s += `${this.vertexes[i]}-> `
            const neighbors = this.edges.get(this.vertexes[i])
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `
            }
            s += '\n'
        }
        return s
    }

    // 初始化颜色
    initializeColor() {
        const colors = []
        for (let i = 0; i < this.vertexes.length; i++) {
            colors[this.vertexes[i]] = 'white'
        }
        return colors
    }

    /* 广度优先遍历（对比树的层序遍历） */
    bfs(initV, handler) {
        // 初始化颜色
        let colors = this.initializeColor()
        // 创建队列
        let queue = new Queue()
        // 将第一个元素放入队列
        queue.enqueue(initV)

        while (!queue.isEmpty()) {
            // 取出队头
            let v = queue.dequeue()
            // 获取所有相邻节点
            let vList = this.edges.get(v)
            // 探测过的节点颜色置灰
            colors[v] = 'gray'
            // 遍历所有节点加入队列
            for (let i = 0; i < vList.length; i++) {
                let neighbor = vList[i]
                if (colors[neighbor] === 'white') {
                    colors[neighbor] = 'gray'
                    queue.enqueue(neighbor)
                }
            }
            // 访问节点
            handler(v)
            // 访问过的节点置黑
            colors[v] = 'black'
        }
    }

    /* 深度优先遍历(对比树的先序遍历) */
    dfs(initV, handler) {
        let colors = this.initializeColor()
        this.dfsVisit(initV, colors, handler)
    }
    dfsVisit(v, colors, handler) {
        colors[v] = 'gray'
        handler(v)
        // 访问v相连的顶点
        let vList = this.edges.get(v)
        for (let i = 0; i < vList.length; i++) {
            let neighbor = vList[i]
            if (colors[neighbor] === 'white') {
                this.dfsVisit(neighbor, colors, handler)
            }
        }
        // 访问过的节点置黑
        colors[v] = 'black'
    }
}


export default Graph