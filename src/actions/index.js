let nextTodoId = 4;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  title: text,
});
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id: id,
});
