/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 두 트리가 모두 null인 경우
    if (!p && !q) {
        return true;
    }
    
    // 한 트리만 null인 경우 또는 두 트리의 값이 다른 경우
    if (!p || !q || p.val !== q.val) {
        return false;
    }
    
    // 왼쪽 서브트리와 오른쪽 서브트리를 재귀적으로 비교
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
