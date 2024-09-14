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
var findBottomLeftValue = function(root) {
    let maxDepth = -1;
    let leftmostValue;

    const dfs = (node, depth) => {
        if (!node) return;

        if (depth > maxDepth) {
            maxDepth = depth;
            leftmostValue = node.val;
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root, 0);

    return leftmostValue;
};

