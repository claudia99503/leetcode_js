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
    if (!root) return 0;
    
    let sum = 0;

    function traverse(node) {
        if (!node) return;

        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val;
        }

        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);

    return sum;
};
