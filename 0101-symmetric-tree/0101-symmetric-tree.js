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
var isSymmetric = function(root) {
    // 트리가 비어 있으면 대칭으로 간주
    if (!root) {
        return true;
    }
    
    // 두 서브트리를 비교하는 헬퍼 함수
    var isMirror = function(t1, t2) {
        // 둘 다 null이면 대칭
        if (!t1 && !t2) {
            return true;
        }
        // 하나만 null이거나 값이 다르면 대칭이 아님
        if (!t1 || !t2 || t1.val !== t2.val) {
            return false;
        }
        // 각 노드의 왼쪽과 오른쪽 자식을 비교
        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    };

    // 루트의 왼쪽과 오른쪽 서브트리를 비교
    return isMirror(root.left, root.right);
};
