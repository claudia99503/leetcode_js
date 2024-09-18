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
var increasingBST = function(root) {
    let nodes = [];
    
    const inorder = (node) => {
        if (!node) return;
        inorder(node.left); 
        nodes.push(node);
        inorder(node.right);
    };
    
    inorder(root);
    
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].left = null;    
        nodes[i].right = nodes[i + 1]; 
    }
    
    nodes[nodes.length - 1].left = null;
    nodes[nodes.length - 1].right = null;
    
    return nodes[0];
};

