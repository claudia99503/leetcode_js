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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // 결과를 저장할 리스트
    const paths = [];

    // 재귀적으로 경로를 찾는 함수
    const findPaths = (node, currentPath) => {
        if (!node) return; // 노드가 null인 경우

        // 현재 경로에 현재 노드의 값을 추가
        currentPath += node.val;

        // 리프 노드인 경우, 경로를 결과 리스트에 추가
        if (!node.left && !node.right) {
            paths.push(currentPath);
        } else {
            // 리프 노드가 아닌 경우, 다음 경로를 위해 화살표 추가
            currentPath += '->';

            // 왼쪽과 오른쪽 자식 노드로 재귀 호출
            findPaths(node.left, currentPath);
            findPaths(node.right, currentPath);
        }
    };

    // 루트 노드에서 경로 찾기 시작
    findPaths(root, '');

    return paths;
};

// 예제 트리 노드 정의
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}