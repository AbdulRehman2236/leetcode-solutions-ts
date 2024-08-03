import { rotateRight } from "../../src/linked-list/rotate-linked-list";
import LinkedList from "../../src/linked-list/delete-the-middle-node-of-a-linked-list";

test("Rotate a linked list with multiple elements by a positive number of positions", () => {
  const list: LinkedList = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);

  expect(rotateRight(list.push(5), 2)).toEqual({
    next: { next: { next: { next: { next: null, val: 3 }, val: 2 }, val: 1 }, val: 5 },
    val: 4,
  });
});

test("Rotate a linked list with exactly three elements by a number greater than the list size", () => {
  const list: LinkedList = new LinkedList();
  list.push(0);
  list.push(1);

  expect(rotateRight(list.push(2), 4)).toEqual({ next: { next: { next: null, val: 1 }, val: 0 }, val: 2 });
});

test("Rotate a linked list with a rotating index greater than the list size", () => {
  const list: LinkedList = new LinkedList();
  list.push(17);
  list.push(75);
  list.push(80);
  list.push(87);
  list.push(44);
  list.push(45);
  list.push(75);
  list.push(86);
  list.push(74);

  expect(rotateRight(list.push(20), 19)).toEqual({
    next: {
      next: {
        next: {
          next: {
            next: { next: { next: { next: { next: { next: null, val: 17 }, val: 20 }, val: 74 }, val: 86 }, val: 75 },
            val: 45,
          },
          val: 44,
        },
        val: 87,
      },
      val: 80,
    },
    val: 75,
  });
});
