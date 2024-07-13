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
var sumOfLeftLeaves = function(root) {
    // 루트가 null이면 0을 반환
    if (!root) return 0;
    
    let sum = 0;

    // 트리를 순회하는 함수
    function traverse(node) {
        if (!node) return;

        // 왼쪽 자식이 잎인지 확인
        if (node.left && !node.left.left && !node.left.right) {
            // 왼쪽 잎의 값을 합산
            sum += node.left.val;
        }

        // 왼쪽 자식으로 재귀 호출
        traverse(node.left);
        // 오른쪽 자식으로 재귀 호출
        traverse(node.right);
    }

    // 루트 노드에서 순회 시작
    traverse(root);

    return sum;
};

