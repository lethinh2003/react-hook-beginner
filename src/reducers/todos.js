const initialState = JSON.parse(localStorage.getItem("list_todos")) || [
  { id: 1, title: "Hoc bai" },
  { id: 2, title: "Choi game" },
  { id: 3, title: "Hoc lap trinh" },
];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const storageTodos = JSON.stringify([
        ...state,
        {
          id: action.id,
          title: action.title,
        },
      ]);

      localStorage.setItem("list_todos", storageTodos);
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
        },
      ];
    case "DELETE_TODO":
      const filterTodos = [...state].filter((item) => {
        return item.id !== action.id;
      });
      const storageTodos2 = JSON.stringify(filterTodos);

      localStorage.setItem("list_todos", storageTodos2);
      return filterTodos;

    default:
      return state;
  }
};

export default todos;
