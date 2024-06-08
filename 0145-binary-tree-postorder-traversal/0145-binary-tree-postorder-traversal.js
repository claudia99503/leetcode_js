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
var postorderTraversal = function(root) {
    // 결과를 저장할 배열을 초기화
    let result = [];
    
    // 재귀적으로 노드를 순회하는 헬퍼 함수 정의
    function traverse(node) {
        // 노드가 null이면 함수 종료
        if (node === null) return;
        // 왼쪽 자식 노드를 재귀적으로 순회
        traverse(node.left);
        // 오른쪽 자식 노드를 재귀적으로 순회
        traverse(node.right);
        // 현재 노드의 값을 결과 배열에 추가
        result.push(node.val);
    }
    
    // 루트 노드부터 순회를 시작
    traverse(root);
    // 결과 배열 반환
    return result;
};

