/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let pA = headA;
    let pB = headB;

    // 두 포인터가 교차할 때까지 반복
    while (pA !== pB) {
        // pA가 null에 도달하면 headB로 이동, 그렇지 않으면 다음 노드로 이동
        pA = pA === null ? headB : pA.next;
        // pB가 null에 도달하면 headA로 이동, 그렇지 않으면 다음 노드로 이동
        pB = pB === null ? headA : pB.next;
    }

    // 교차점 또는 null 반환
    return pA;
};
