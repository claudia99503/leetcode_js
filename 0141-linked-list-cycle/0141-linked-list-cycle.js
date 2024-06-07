/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 두 개의 포인터를 시작 지점에 설정
    let slow = head;
    let fast = head;
    
    // 리스트를 순회하면서
    while (fast !== null && fast.next !== null) {
        // slow 포인터는 한 단계씩 이동
        slow = slow.next;
        // fast 포인터는 두 단계씩 이동
        fast = fast.next.next;
        
        // 두 포인터가 만나면 사이클이 존재함
        if (slow === fast) {
            return true;
        }
    }
    
    // fast 포인터가 끝에 도달하면 사이클이 없음
    return false;
};
