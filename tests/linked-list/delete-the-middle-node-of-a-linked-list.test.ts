import { deleteMiddle } from "../../src/linked-list/delete-the-middle-node-of-a-linked-list";
import LinkedList from "../../src/linked-list/delete-the-middle-node-of-a-linked-list";

test("Remove the middle element from a list with multiple elements", () => {
  const list: LinkedList = new LinkedList();
  list.push(1);
  list.push(3);
  list.push(4);
  list.push(7);
  list.push(1);
  list.push(2);

  expect(deleteMiddle(list.push(6))).toEqual({
    next: { next: { next: { next: { next: { next: null, val: 6 }, val: 2 }, val: 1 }, val: 4 }, val: 3 },
    val: 1,
  });
});

test("Remove the middle element from a list with exactly four elements", () => {
  const list: LinkedList = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);

  expect(deleteMiddle(list.push(4))).toEqual({ next: { next: { next: null, val: 4 }, val: 2 }, val: 1 });
});

test("Remove the middle element from a list with two elements", () => {
  const list: LinkedList = new LinkedList();
  list.push(2);

  expect(deleteMiddle(list.push(1))).toEqual({ next: null, val: 2 });
});

test("Handle case where list contains only one element", () => {
  expect(deleteMiddle(new LinkedList().push(1))).toEqual(null);
});
