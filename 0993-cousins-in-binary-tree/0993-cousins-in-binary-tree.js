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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xParent = null, yParent = null;
    let xDepth = -1, yDepth = -1;

    const dfs = (node, parent, depth) => {
        if (!node) return;

        if (node.val === x) {
            xParent = parent;
            xDepth = depth;
        }

        if (node.val === y) {
            yParent = parent;
            yDepth = depth;
        }

        dfs(node.left, node, depth + 1);
        dfs(node.right, node, depth + 1);
    };

    dfs(root, null, 0);

    return xDepth === yDepth && xParent !== yParent;
};

