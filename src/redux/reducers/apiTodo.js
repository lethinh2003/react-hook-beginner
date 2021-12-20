const initialState = {
  todos: [],
};
const apiTodo = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    case "GET_TODO_DETAIL":
      return {
        ...state,
        todos: action.payload,
      };
    case "REMOVE_TODO_DETAIL":
      return {
        ...state,
        todos: [],
      };

    default:
      return state;
  }
};

export default apiTodo;
