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

/*
1. **함수 정의**: `sumOfLeftLeaves` 함수를 정의합니다.
2. **루트 노드 검사**:
   - 만약 `root`가 `null`이면 0을 반환합니다.
3. **합계 변수 초기화**:
   - `sum` 변수를 0으로 초기화합니다.
4. **트리를 순회하는 재귀 함수 정의**:
   - `traverse` 함수를 정의합니다. 이 함수는 주어진 노드 `node`를 기준으로 트리를 순회합니다.
5. **노드 검사**:
   - 만약 `node`가 `null`이면 함수를 종료합니다.
6. **왼쪽 자식 잎 노드 확인**:
   - 만약 `node.left`가 존재하고, `node.left`가 잎 노드이면 (즉, `node.left.left`와 `node.left.right`가 모두 `null`인 경우), `sum`에 `node.left.val` 값을 더합니다.
7. **왼쪽 자식 재귀 호출**:
   - `traverse(node.left)`를 호출하여 왼쪽 자식 노드를 계속해서 탐색합니다.
8. **오른쪽 자식 재귀 호출**:
   - `traverse(node.right)`를 호출하여 오른쪽 자식 노드를 계속해서 탐색합니다.
9. **루트 노드에서 순회 시작**:
   - `traverse(root)`를 호출하여 루트 노드에서부터 트리 순회를 시작합니다.
10. **합계 반환**:
    - 모든 왼쪽 잎 노드의 값을 합산한 `sum`을 반환합니다.
*/
