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
var reverseList = function(head) {
    let prev = null; // 이전 노드를 추적하기 위한 포인터
    let current = head; // 현재 노드를 추적하기 위한 포인터

    while (current !== null) {
        let next = current.next; // 다음 노드를 미리 저장
        current.next = prev; // 현재 노드의 포인터를 이전 노드로 변경
        prev = current; // 이전 노드를 현재 노드로 업데이트
        current = next; // 현재 노드를 다음 노드로 업데이트
    }

    return prev; // 새로운 헤드 반환
};

// ListNode 클래스 정의 (테스트를 위해 필요할 수 있음)
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
