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
    // 연결 리스트의 값을 배열에 복사
    let vals = []; // 값들을 저장할 배열 초기화
    let current = head; // 현재 노드를 가리킬 포인터 초기화
    while (current !== null) {
        vals.push(current.val); // 현재 노드의 값을 배열에 추가
        current = current.next; // 다음 노드로 이동
    }
    
    // 배열이 회문인지 확인
    let left = 0; // 왼쪽 포인터 초기화
    let right = vals.length - 1; // 오른쪽 포인터 초기화
    while (left < right) {
        if (vals[left] !== vals[right]) { // 왼쪽 값과 오른쪽 값이 다르면
            return false; // 회문이 아니므로 false 반환
        }
        left++; // 왼쪽 포인터를 오른쪽으로 이동
        right--; // 오른쪽 포인터를 왼쪽으로 이동
    }
    return true; // 모든 값이 같다면 회문이므로 true 반환
};

