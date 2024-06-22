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



/*
## 이진 트리의 루트에서 리프까지의 모든 경로를 찾는 코드의 수도코드

1. **결과 배열 초기화**
   - `paths`라는 빈 배열을 만든다.
   
2. **루트 노드 확인**
   - 만약 `root`가 null이면, 빈 배열 `paths`를 반환한다.

3. **재귀 함수 정의 (buildPaths)**
   - 매개변수로 현재 노드 `node`와 현재까지의 경로 `path`를 받는다.

4. **현재 노드의 값을 경로에 추가**
   - `path`에 현재 노드 `node`의 값을 문자열로 추가한다.
   => 문자열과 숫자를 + 연산자로 더할 때 자동으로 문자열로 변환

5. **리프 노드인지 확인**
   - 현재 노드 `node`의 왼쪽 자식 노드와 오른쪽 자식 노드가 모두 null인지 확인한다.
   - 만약 리프 노드이면, 현재 경로 `path`를 결과 배열 `paths`에 추가한다.

6. **경로 확장**
   - 현재 노드가 리프 노드가 아니면, `path`에 "->"를 추가한다.

7. **왼쪽 자식 노드로 재귀 호출**
   - 현재 노드의 왼쪽 자식 노드가 null이 아니면, `buildPaths` 함수를 왼쪽 자식 노드와 현재 경로 `path`를 매개변수로 호출한다.

8. **오른쪽 자식 노드로 재귀 호출**
   - 현재 노드의 오른쪽 자식 노드가 null이 아니면, `buildPaths` 함수를 오른쪽 자식 노드와 현재 경로 `path`를 매개변수로 호출한다.

9. **루트 노드에서 시작**
   - `buildPaths` 함수를 루트 노드 `root`와 빈 문자열 `""`을 매개변수로 호출하여 경로 찾기를 시작한다.

10. **결과 반환**
    - 모든 경로가 저장된 결과 배열 `paths`를 반환한다.
*/