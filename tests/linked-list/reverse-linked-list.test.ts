import { reverseList } from "../../src/linked-list/reverse-linked-list";
import LinkedList from "../../src/linked-list/delete-the-middle-node-of-a-linked-list";

test("Reverse a linked list containing more than 2 elements", () => {
  const list: LinkedList = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);

  expect(reverseList(list.push(5))).toEqual({
    next: { next: { next: { next: { next: null, val: 1 }, val: 2 }, val: 3 }, val: 4 },
    val: 5,
  });
});

test("Reverse a linked list containing exactly 2 elements", () => {
  const list: LinkedList = new LinkedList();
  list.push(1);

  expect(reverseList(list.push(2))).toEqual({ next: { next: null, val: 1 }, val: 2 });
});
