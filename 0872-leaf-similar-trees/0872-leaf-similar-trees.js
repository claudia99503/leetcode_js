/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    // 트리에서 리프 노드 값을 모으는 헬퍼 함수
    const getLeaves = (root) => {
        const leaves = [];
        const dfs = (node) => {
            if (!node) return;
            if (!node.left && !node.right) {
                leaves.push(node.val);
            } else {
                dfs(node.left);
                dfs(node.right);
            }
        };
        dfs(root);
        return leaves;
    };

    // 두 트리의 리프 시퀀스를 가져옴
    const leaves1 = getLeaves(root1);
    const leaves2 = getLeaves(root2);

    if (leaves1.length !== leaves2.length) {
        return false;
    }

    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) {
            return false;
        }
    }

    return true;
};

