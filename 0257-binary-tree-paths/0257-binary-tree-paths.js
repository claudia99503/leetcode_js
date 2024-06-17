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

/*
### 수도 코드

1. `binaryTreePaths` 함수를 정의한다:
    - 입력: 트리의 루트 노드 `root`
    - 출력: 모든 루트-리프 경로를 포함한 리스트

2. `paths` 빈 리스트를 초기화하여 모든 경로를 저장할 준비를 한다.

3. `findPaths` 함수를 정의한다:
    - 입력: 현재 노드 `node`, 현재까지의 경로 `currentPath`
    - 동작:
        a. 현재 노드가 null인 경우 함수 종료
        b. 현재 경로에 현재 노드의 값을 추가
        c. 현재 노드가 리프 노드인 경우:
            - 현재 경로를 `paths` 리스트에 추가
        d. 리프 노드가 아닌 경우:
            - 현재 경로에 '->'를 추가
            - 왼쪽 자식 노드에 대해 `findPaths` 함수 재귀 호출
            - 오른쪽 자식 노드에 대해 `findPaths` 함수 재귀 호출

4. 루트 노드에서 `findPaths` 함수 호출하여 경로 찾기를 시작한다:
    - 입력: 루트 노드 `root`, 빈 문자열 `''`

5. `paths` 리스트를 반환한다.
*/