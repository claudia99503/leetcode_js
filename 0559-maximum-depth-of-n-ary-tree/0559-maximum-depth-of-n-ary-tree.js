/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    let maxDepthValue = 0;
    
    for (let child of root.children) {
        maxDepthValue = Math.max(maxDepthValue, maxDepth(child));
    }

    return maxDepthValue + 1;
};

