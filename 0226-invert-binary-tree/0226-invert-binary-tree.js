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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return root;
    }

    // 왼쪽과 오른쪽 자식을 교환
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // 재귀적으로 왼쪽과 오른쪽 서브트리를 뒤집음
    invertTree(root.left);
    invertTree(root.right);

    return root;
};