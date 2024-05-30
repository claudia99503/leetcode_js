/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 새로운 더미 노드를 생성합니다. 이는 병합된 리스트의 시작을 쉽게 추적할 수 있게 합니다.
    let dummy = new ListNode(0);
    // 현재 노드를 더미 노드로 초기화합니다. 현재 노드는 최종 병합된 리스트를 구축하는 데 사용됩니다.
    let current = dummy;

    // list1과 list2 둘 다 null이 아닐 때까지 반복합니다.
    while (list1 !== null && list2 !== null) {
        // list1의 값이 list2의 값보다 작거나 같으면
        if (list1.val <= list2.val) {
            // 현재 노드의 다음 노드를 list1으로 설정합니다.
            current.next = list1;
            // list1을 다음 노드로 이동합니다.
            list1 = list1.next;
        } else {
            // 그렇지 않으면, 즉 list2의 값이 list1의 값보다 작으면
            // 현재 노드의 다음 노드를 list2로 설정합니다.
            current.next = list2;
            // list2를 다음 노드로 이동합니다.
            list2 = list2.next;
        }
        // 현재 노드를 다음 노드로 이동합니다.
        current = current.next;
    }

    // list1이나 list2 중 하나가 아직 남아있다면, 그 리스트의 나머지 부분을 현재 노드의 다음 노드로 설정합니다.
    if (list1 !== null) {
        current.next = list1;
    } else {
        // list2가 남아있다면 그 리스트의 나머지 부분을 현재 노드의 다음 노드로 설정합니다.
        current.next = list2;
    }

    // 더미 노드의 다음 노드를 반환합니다. 이는 병합된 리스트의 시작 노드입니다.
    return dummy.next;
};