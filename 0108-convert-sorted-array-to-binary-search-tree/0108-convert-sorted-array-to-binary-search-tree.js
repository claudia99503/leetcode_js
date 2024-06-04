/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // 재귀적으로 서브트리를 만드는 헬퍼 함수
    function helper(start, end) {
        // 시작 인덱스가 끝 인덱스를 넘으면 null 반환
        if (start > end) {
            return null;
        }
        
        // 중간 인덱스를 계산
        let mid = Math.floor((start + end) / 2);
        
        // 중간 값을 루트로 하는 노드를 생성
        let node = new TreeNode(nums[mid]);
        
        // 왼쪽 서브트리를 재귀적으로 생성
        node.left = helper(start, mid - 1);
        
        // 오른쪽 서브트리를 재귀적으로 생성
        node.right = helper(mid + 1, end);
        
        // 현재 노드를 반환
        return node;
    }
    
    
    // 헬퍼 함수를 사용하여 트리를 생성
    return helper(0, nums.length - 1);
};

// 이진 트리 노드 정의 (문제에서 주어지지 않았지만 필요할 것으로 예상됨)
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/*
함수 sortedArrayToBST(nums):
    // nums 배열 전체를 처리하도록 helper 함수를 호출
    반환 helper(0, nums.length - 1)

함수 helper(start, end):
    // 시작 인덱스가 끝 인덱스를 넘으면 null 반환 (기저 조건)
    만약 start > end:
        반환 null
    
    // 중간 인덱스를 계산
    mid = (start + end) // 2
    
    // 중간 값을 루트로 하는 노드를 생성
    node = TreeNode(nums[mid])
    
    // 왼쪽 서브트리를 생성
    node.left = helper(start, mid - 1)
    
    // 오른쪽 서브트리를 생성
    node.right = helper(mid + 1, end)
    
    // 현재 노드를 반환
    반환 node

클래스 TreeNode:
    생성자(val, left, right):
        이.val = (val이 정의되지 않았으면 0)
        이.left = (left가 정의되지 않았으면 null)
        이.right = (right가 정의되지 않았으면 null)





*/
