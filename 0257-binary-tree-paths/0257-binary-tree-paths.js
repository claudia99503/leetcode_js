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
    // 결과를 저장할 배열을 만듭니다.
    const paths = [];

    // 만약 루트가 없다면, 빈 배열을 반환합니다.
    if (!root) return paths;

    // 노드와 현재까지의 경로를 받아서 처리하는 함수입니다.
    function buildPaths(node, path) {
        // 현재 경로에 현재 노드의 값을 추가합니다.
        path += node.val;

        // 리프 노드인지 확인합니다. (자식이 없는 노드)
        if (!node.left && !node.right) {
            // 리프 노드이면, 현재 경로를 결과 배열에 추가합니다.
            paths.push(path);
        } else {
            // 리프 노드가 아니면, 경로에 "->"를 추가합니다.
            path += "->";

            // 왼쪽 자식이 있으면 왼쪽 자식으로 가는 경로를 만듭니다.
            if (node.left) {
                buildPaths(node.left, path);
            }

            // 오른쪽 자식이 있으면 오른쪽 자식으로 가는 경로를 만듭니다.
            if (node.right) {
                buildPaths(node.right, path);
            }
        }
    }

    // 루트 노드에서 시작합니다.
    buildPaths(root, "");

    return paths;
};


// 예제 트리 노드 정의
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

