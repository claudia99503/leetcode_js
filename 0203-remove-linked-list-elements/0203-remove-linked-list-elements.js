/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // head가 val인 경우 head를 업데이트
    while (head !== null && head.val === val) {
        head = head.next;
    }
    
    // 현재 노드를 추적하는 포인터
    let current = head;
    
    // 리스트의 끝에 도달할 때까지 반복
    while (current !== null && current.next !== null) {
        if (current.next.val === val) {
            // 다음 노드의 값이 val인 경우, 노드를 건너뜀
            current.next = current.next.next;
        } else {
            // 그렇지 않으면 다음 노드로 이동
            current = current.next;
        }
    }
    
    return head;
};

// ListNode 클래스 정의 (테스트를 위해 필요할 수 있음)
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


/*
1. 함수 removeElements(head, val)을 정의한다:
   - head가 null이 아니고 head의 값이 val인 동안:
     - head를 head.next로 업데이트한다 (head 노드를 건너뜀).
   
   - 현재 노드를 추적하는 포인터 current를 head로 초기화한다.
   
2. current가 null이 아니고 current.next가 null이 아닌 동안:
   - 만약 current.next의 값이 val과 같다면:
     - current.next를 current.next.next로 설정한다 (다음 노드를 건너뜀).
   - 그렇지 않으면:
     - current를 current.next로 업데이트한다 (다음 노드로 이동).
   
3. head를 반환한다.
*/