/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const resultArray = [];

    function inorderTraverse(node) {
        if (node !== null) {
            inorderTraverse(node.left);
            resultArray.push(node.val); // 왼쪽 서브트리를 순회한 후 현재 노드의 값을 추가
            inorderTraverse(node.right);
        }
    }

    inorderTraverse(root);

    return resultArray;
};
