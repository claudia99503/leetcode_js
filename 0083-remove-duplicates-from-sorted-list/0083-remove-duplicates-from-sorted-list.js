/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next; // 현재 노드의 다음 노드를 다음 다음 노드로 이어줌으로써 중복 제거
        } else {
            current = current.next; // 중복이 없는 경우 다음 노드로 이동
        }
    }
    
    return head; // 중복을 제거한 연결 리스트 반환
};
