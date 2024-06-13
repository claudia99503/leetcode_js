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

/*
1. 함수 `countNodes`를 정의하고, 매개변수로 트리의 루트 `root`를 받는다.
2. `root`가 `null`인지 확인한다.
    - `root`가 `null`이면, 트리가 비어 있으므로 0을 반환한다.
3. `root`가 `null`이 아니면, 다음을 수행한다:
    - 현재 노드를 포함하여 왼쪽 서브트리와 오른쪽 서브트리의 노드 수를 재귀적으로 계산한다.
    - 현재 노드를 포함한 전체 노드 수는 `1 + countNodes(root.left) + countNodes(root.right)`이다.
4. 전체 노드 수를 반환한다.
*/