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
Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

export function reverseList(head: ListNode | null): ListNode | null {
  let curr = head;
  let prev = null;
  let temp;

  while (curr) {
    temp = curr!.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

/*
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]


Example 3:
Input: head = []
Output: []
*/
