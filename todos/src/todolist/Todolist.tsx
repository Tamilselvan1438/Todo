import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import produce from "immer";

type Action =
  | { type: "SET_NEWTODO"; payload: string }
  | { type: "SET_ADD"; payload: string }
  | { type: "SET_TODO_CHANGE"; payload: string }
  | { type: "SET_DELETE"; payload: string }
  | { type: "SET_FILTERED_TODO"; payload: string }
  | { type: "SET_COMPLETED_DELETE" };

interface Todo {
  data: string;
  completed: boolean;
}

interface State {
  todo: Todo[];
  newTodo: string;
  filter: "All" | "Active" | "Complete";
  filteredTodo: Todo[];
}

const initialState: State = {
  todo: [],
  newTodo: "",
  filter: "All",
  filteredTodo: [],
};

const reducer = produce((state: State, action: Action) => {
  switch (action.type) {
    case "SET_NEWTODO":
      state.newTodo = action.payload;
      break;

    case "SET_ADD":
      state.todo = [...state.todo, { data: state.newTodo, completed: false }];
      state.newTodo = "";
      state.filteredTodo = state.todo;
      break;

    case "SET_TODO_CHANGE":
      state.todo = state.todo.map((todo) =>
        todo.data === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      break;

    case "SET_DELETE":
      state.todo = state.todo.filter((todo) => todo.data !== action.payload);
      break;

    case "SET_COMPLETED_DELETE":
      state.todo = state.filteredTodo.filter((item) => !item.completed);
      break;

    case "SET_FILTERED_TODO":
      switch (action.payload) {
        case "Active":
          state.filteredTodo = state.todo.filter((todo) => !todo.completed);
          break;
        case "Complete":
          state.filteredTodo = state.todo.filter((todo) => todo.completed);
          break;
        default:
          state.filteredTodo = state.todo;
      }
      break;

    default:
      break;
  }
});

interface ContextProps {
  todo: Todo[];
  newTodo: string;
  filteredTodo: Todo[];
  SetChange: (value: string) => void;
  SetAdd: (key: string) => void;
  SetTodoChange: (item: string) => void;
  SetDelete: (item: string) => void;
  SetCompletedDelete: () => void;
  setFilterTodo: (value: string) => void;
}

const ToDoListContext = createContext<ContextProps | null>(null);

const Todolist = (props: PropsWithChildren) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const SetChange = (value: string): void => {
    dispatch({ type: "SET_NEWTODO", payload: value });
  };

  const SetAdd = (key: string): void => {
    if (key === "Enter") {
      dispatch({ type: "SET_ADD", payload: state.newTodo });
    }
  };

  const SetTodoChange = (item: string): void => {
    dispatch({ type: "SET_TODO_CHANGE", payload: item });
    dispatch({ type: "SET_FILTERED_TODO", payload: state.filter });
  };

  const SetDelete = (item: string): void => {
    dispatch({ type: "SET_DELETE", payload: item });
  };

  const SetCompletedDelete = (): void => {
    dispatch({ type: "SET_COMPLETED_DELETE" });
    dispatch({ type: "SET_FILTERED_TODO", payload: state.filter });
  };

  const setFilterTodo = (value: string): void => {
    dispatch({ type: "SET_FILTERED_TODO", payload: value });
  };

  const value = {
    todo: state.todo,
    newTodo: state.newTodo,
    filteredTodo: state.filteredTodo,
    SetChange,
    SetAdd,
    SetTodoChange,
    SetDelete,
    SetCompletedDelete,
    setFilterTodo,
  };
  return (
    <div className="Main">
      <ToDoListContext.Provider value={value}>
        {children}
      </ToDoListContext.Provider>
    </div>
  );
};

const useTodoContext = () => {
  const context = useContext(ToDoListContext);
  if (!context) {
    throw new Error("The component must be enclosed within a provider");
  }
  return context;
};

export { Todolist, useTodoContext };
