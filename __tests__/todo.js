/* eslint-disable no-undef */

const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("It shouls add a todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("It should mark todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("It should ckeck retrieval of overdue items", () => {
    expect(overdue().length).toBe(0);
  });
  test("It should ckeck retrieval of dueToday items", () => {
    expect(dueToday().length).toBe(2);
  });
  test("It should ckeck retrieval of dueLater items", () => {
    expect(dueLater().length).toBe(0);
  });
});
