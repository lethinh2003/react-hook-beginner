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

export const setTodoAPI = (data) => ({
  type: "SET_TODO",
  payload: data,
});
export const getTodoAPIDetail = (data) => ({
  type: "GET_TODO_DETAIL",
  payload: data,
});
export const removeTodoAPIDetail = () => ({
  type: "REMOVE_TODO_DETAIL",
});
