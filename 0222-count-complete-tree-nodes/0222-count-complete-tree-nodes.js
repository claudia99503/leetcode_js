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
 * @return {number}
 */
var countNodes = function(root) {
    // 트리가 비어 있으면 0을 반환합니다.
    if (root === null) {
        return 0;
    }
    // 현재 노드를 포함하여 왼쪽 서브트리와 오른쪽 서브트리의 노드 수를 재귀적으로 계산합니다.
    return 1 + countNodes(root.left) + countNodes(root.right);
};
