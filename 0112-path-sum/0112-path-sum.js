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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // 트리가 비어있는 경우
    if (!root) {
        return false;
    }
    
    // 리프 노드인 경우, 현재 노드의 값이 targetSum과 같은지 확인
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }
    
    // 왼쪽 및 오른쪽 서브트리에 대해 재귀적으로 호출
    // 현재 노드의 값을 targetSum에서 빼고, 남은 값을 새로운 targetSum으로 설정
    const remainingSum = targetSum - root.val;
    
    return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
};
