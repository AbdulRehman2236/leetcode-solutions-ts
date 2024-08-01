import { oddEvenList } from "../../src/linked-list/odd-even-linked-list";
import LinkedList from "../../src/linked-list/delete-the-middle-node-of-a-linked-list";

test("Reorder nodes of the list with 5 nodes", () => {
  const list: LinkedList = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);

  expect(oddEvenList(list.push(5))).toEqual({
    next: { next: { next: { next: { next: null, val: 4 }, val: 2 }, val: 5 }, val: 3 },
    val: 1,
  });
});

test("Reorder nodes of the list with 7 nodes with even values at odd position", () => {
  const list: LinkedList = new LinkedList();
  list.push(2);
  list.push(1);
  list.push(3);
  list.push(5);
  list.push(6);
  list.push(4);

  expect(oddEvenList(list.push(7))).toEqual({
    next: {
      next: { next: { next: { next: { next: { next: null, val: 4 }, val: 5 }, val: 1 }, val: 7 }, val: 6 },
      val: 3,
    },
    val: 2,
  });
});
