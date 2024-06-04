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
var minDepth = function(root) {
    // 트리가 비어있으면 깊이는 0
    if (root === null) {
        return 0;
    }

    // 리프 노드(자식이 없는 노드)면 깊이는 1
    if (root.left === null && root.right === null) {
        return 1;
    }

    // 왼쪽 자식이 없는 경우, 오른쪽 자식의 깊이를 재귀적으로 계산
    if (root.left === null) {
        return minDepth(root.right) + 1;
    }

    // 오른쪽 자식이 없는 경우, 왼쪽 자식의 깊이를 재귀적으로 계산
    if (root.right === null) {
        return minDepth(root.left) + 1;
    }

    // 왼쪽과 오른쪽 자식이 모두 있는 경우, 두 자식의 깊이 중 작은 값에 1을 더한 값을 반환
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// 이진 트리 노드 정의
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
