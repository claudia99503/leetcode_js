/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 리스트가 비어있으면 true 반환
    if (!head) return true;
    
    // 링크드 리스트의 중간을 찾기 위해 slow와 fast 포인터 사용
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // 링크드 리스트의 후반부를 반전시킴
    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    
    // 첫 번째 반과 반전된 두 번째 반을 비교
    let left = head, right = prev;
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    
    // 모든 노드가 일치하면 true 반환
    return true;
};
