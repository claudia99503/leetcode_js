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
var insertionSortList = function(head) {
    if (!head) return head;
    
    let dummy = new ListNode(0);
    let curr = head;
    
    while (curr) {
        let temp = curr.next;
        
        let prev = dummy;
        while (prev.next && prev.next.val < curr.val) {
            prev = prev.next;
        }
        
        curr.next = prev.next;
        prev.next = curr;
        
        curr = temp;
    }
    
    return dummy.next;
};

