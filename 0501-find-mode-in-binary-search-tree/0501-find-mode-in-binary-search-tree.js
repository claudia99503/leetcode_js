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
 * @return {number[]}
 */
var findMode = function(root) {
    let current = null;
    let currentCount = 0;
    let maxCount = 0;
    let modes = [];
    
    const inOrderTraversal = (node) => {
        if (!node) return;
        
        inOrderTraversal(node.left);
        
        if (node.val !== current) {
            current = node.val;
            currentCount = 1;
        } else {
            currentCount++;
        }
        
        if (currentCount > maxCount) {
            maxCount = currentCount;
            modes = [current];
        } else if (currentCount === maxCount) {
            modes.push(current);
        }
        
        inOrderTraversal(node.right);
    };
    
    inOrderTraversal(root);
    
    return modes;
};

