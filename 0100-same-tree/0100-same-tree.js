/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 두 트리가 모두 null인 경우
    if (!p && !q) {
        return true;
    }
    
    // 한 트리만 null인 경우 또는 두 트리의 값이 다른 경우
    if (!p || !q || p.val !== q.val) {
        return false;
    }
    
    // 왼쪽 서브트리와 오른쪽 서브트리를 재귀적으로 비교
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/*
// 함수 isSameTree(p, q):
    // 두 트리가 모두 null인지 확인
    만약 p와 q가 모두 null이라면:
        true 반환
    
    // 두 트리 중 하나만 null이거나 두 트리의 값이 다르다면
    만약 p가 null이거나 q가 null이거나 p의 값이 q의 값과 다르다면:
        false 반환
    
    // 왼쪽 서브트리와 오른쪽 서브트리를 재귀적으로 비교
    만약 isSameTree(p의 왼쪽 서브트리, q의 왼쪽 서브트리)가 true이고
        isSameTree(p의 오른쪽 서브트리, q의 오른쪽 서브트리)가 true라면:
        true 반환
    그렇지 않다면:
        false 반환
*/
