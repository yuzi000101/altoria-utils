/* 
    二叉搜索树
*/

/* 创建节点 */
function Node(key) {
    this.key = key
    this.left = null
    this.right = null
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    /* 添加节点 */
    insert(key) {
        const node = new Node(key)

        if (this.root == null) {  // 判断是否有根
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    /* 递归插入新节点 */
    insertNode(node, newNode) {
        if (node.key > newNode.key) {  // 向左插入
            if (node.left == null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {  // 向右插入
            if (node.right == null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    /* 先序遍历 */
    preOrderTraversal(handler) {
        this.preOrderTraversalNode(this.root, handler)
    }
    /* 先序遍历某个节点 */
    preOrderTraversalNode(node, handler) {
        if (node != null) {
            handler(node.key)  // 处理当前节点
            this.preOrderTraversalNode(node.left, handler)  // 处理当前节点的左子节点
            this.preOrderTraversalNode(node.right, handler) // 处理当前节点的右子节点
        }
    }

    /* 中序遍历 */
    midOrderTraversal(handler) {
        this.midOrderTraversalNode(this.root, handler)
    }
    /* 中序遍历某个节点 */
    midOrderTraversalNode(node, handler) {
        if (node != null) {
            this.midOrderTraversalNode(node.left, handler)  // 遍历当前节点的左子节点
            handler(node.key)   // 处理当前节点
            this.midOrderTraversalNode(node.right, handler) // 遍历当前节点的右子节点
        }
    }

    /* 后序遍历 */
    postOrderTraversal(handler) {
        this.postOrderTraversalNode(this.root, handler)
    }
    /* 后序遍历某个节点 */
    postOrderTraversalNode(node, handler) {
        if (node != null) {
            this.postOrderTraversalNode(node.left, handler)
            this.postOrderTraversalNode(node.right, handler)
            handler(node.key)
        }
    }

    /* 查询最值 */
    max() {
        let node = this.root
        let key = node.key
        while (node != null) {
            key = node.key
            node = node.right
        }
        return key
    }
    min() {
        let node = this.root
        let key = node.key
        while (node != null) {
            key = node.key
            node = node.left
        }
        return key
    }
    /* 寻找指定key */
    search(key) {
        let node = this.root
        while (node != null) {
            if (key < node.key) {
                node = node.left
            } else if (key > node.key) {
                node = node.right
            } else {
                return true
            }
        }
        return false
    }

    /* 删除一个节点 */
    remove(key) {
        // 1. 查找要删除节点
        let current = this.root
        let parent = null
        let isLeftChild = true
        while (current.key != key) {
            parent = current
            if (key < current.key) {  // 查找左子节点
                isLeftChild = true
                current = current.left
            } else {  // 查找右子节点
                isLeftChild = false
                current = current.right
            }

            if (current == null) return false  // 未找到
        }

        // 2.1删除叶子节点
        if (current.left == null && current.right == null) {
            if (current == this.root) {
                this.root = null
            } else if (isLeftChild) {
                parent.left = null
            } else {
                parent.right = null
            }
        } else if (current.left == null) { // 删除的节点只有右子节点
            if (current == this.root) {
                this.root = current.right
            } else if (isLeftChild) {  // 删除节点在父节点的左边
                parent.left = current.right
            } else {  // 删除节点在父节点的右边
                parent.right = current.right
            }
        } else if (current.right == null) {  // 删除的节点只有左子节点
            if (current == this.root) {
                this.root = current.left
            } else if (isLeftChild) {
                parent.left = current.left
            } else {
                parent.right = current.left
            }
        } else {  // 删除的节点有两个子节点
            let successor = this.getSuccessor(current)
            if (current == this.root) { // 判断删除节点是否为根节点
                this.root = successor
            } else if (isLeftChild) {
                parent.left = successor
            } else {
                parent.right = successor
            }

            successor.left = current.left  //将后继节点的左子树 = 删除节点的左子树
        }
    }
    /* 寻找后继节点 */
    getSuccessor(delNode) {
        let successorParent = delNode  // 保存后继节点的父节点
        let successor = delNode  // 1.保存找到的后继节点
        let current = delNode.right
        // 2.遍历查找
        while (current != null) {
            successorParent = successor
            successor = current
            current = current.left
        }
        // 3.判断后继节点是否直接是delNode节点的right节点，不是则将delNode的右节点赋值给successor的右节点
        if (successor != delNode.right) {
            successorParent.left = successor.right // 将没有左节点的后继节点的右节点赋值给后继节点父节点的左节点
            successor.right = delNode.right   // 将删除节点的右子树赋值给后继节点的右子树
        }
        return successor
    }
}

export default BinarySearchTree

