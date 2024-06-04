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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // 높이를 계산하면서 높이 균형 여부를 체크하는 헬퍼 함수
    function checkHeight(node) {
        // 노드가 null이면 높이는 0
        if (node === null) {
            return 0;
        }

        // 왼쪽 서브트리의 높이를 재귀적으로 계산
        let leftHeight = checkHeight(node.left);
        // 오른쪽 서브트리의 높이를 재귀적으로 계산
        let rightHeight = checkHeight(node.right);

        // 왼쪽 또는 오른쪽 서브트리에서 균형이 맞지 않으면 -1 반환
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // 현재 노드의 높이는 왼쪽 서브트리와 오른쪽 서브트리 중 더 큰 높이에 1을 더한 값
        // 여기서 1을 더하는 이유는 현재 노드 자신이 높이에 포함되기 때문입니다
        // 서브트리의 최대 높이에 현재 노드를 포함하여 전체 높이를 계산합니다
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // 트리의 높이를 계산하고, -1이 반환되면 높이 균형이 맞지 않음을 의미
    return checkHeight(root) !== -1;
};

// 이진 트리 노드 정의
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
