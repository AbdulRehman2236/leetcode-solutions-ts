//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/*
Given the head of a linked list, rotate the list to the right by k places.

*/

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let tail: ListNode | null;
  let temp: ListNode | null;
  let length: number = getLength(head);
  k = k % length;

  for (let i = 0; i < k; i++) {
    tail = getTail(head);
    temp = head;
    let secondLastNodeIndex = getLength(temp) - 2;
    let count = 0;
    while (true) {
      if (count === secondLastNodeIndex) {
        temp!.next = null;
        break;
      }
      count++;
      temp = temp!.next;
    }
    tail!.next = head;
    head = tail;
  }

  return head;

  function getTail(head: ListNode | null): ListNode | null {
    let tail: ListNode | null = head;

    while (tail!.next !== null) {
      tail = tail!.next;
    }
    return tail;
  }

  function getLength(head: ListNode | null): number {
    let curr: ListNode | null = head;
    let length: number = 0;

    while (curr !== null) {
      ++length;
      curr = curr!.next;
    }
    return length;
  }
}

/*
Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]

Constraints:
The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
*/
