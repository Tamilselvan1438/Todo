// import { ChangeEvent, useReducer, KeyboardEvent } from "react";
// import Input from "./refacter/Input";
// import InputValue from "./refacter/InputValue";
// import Details from "./refacter/Details";
// import produce from "immer";

// interface Todo {
//   text: string;
//   completed: boolean;
// }

// interface StateType {
//   inputValue: Todo[];
//   value: string;
//   selected: string[];
//   all: boolean;
//   active: boolean;
//   completed: boolean;
// }

// type Action =
//   | { type: "ADD_ITEM" }
//   | { type: "REMOVE_ITEM"; payload: string }
//   | { type: "DELETE_SELECTED" }
//   | { type: "SELECTED_ITEM"; payload: string }
//   | { type: "SHOW_ALL" }
//   | { type: "SHOW_ACTIVE" }
//   | { type: "SHOW_COMPLETED" }
//   | { type: "SET_VALUE"; payload: string }
//   | { type: "SELECTED_ALL"};

// const initalState: StateType = {
//   inputValue: [],
//   value: "",
//   selected: [],
//   all: true,
//   active: false,
//   completed: false,
// };

// const reducer = produce((state: StateType, action: Action) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       state.inputValue = [
//         ...state.inputValue,
//         { text: state.value, completed: false },
//       ];
//       state.value = "";
//       break;
//     case "REMOVE_ITEM":
//       state.inputValue = state.inputValue.filter(
//         (item) => item.text !== action.payload
//       );
//       state.selected = [];
//       break;

//     case "DELETE_SELECTED":
//       state.inputValue = state.inputValue.filter(
//         (item) => !state.selected.includes(item.text)
//       );
//       state.selected = [];
//       break;
//     case "SELECTED_ITEM":
//       state.selected = state.selected.includes(action.payload)
//         ? state.selected.filter((item) => item !== action.payload)
//         : [...state.selected, action.payload];
//       break;
//     case "SHOW_ALL":
//       state.all = true;
//       state.active = false;
//       state.completed = false;
//       break;
//     case "SHOW_ACTIVE":
//       state.all = false;
//       state.active = true;
//       state.completed = false;
//       break;
//     case "SHOW_COMPLETED":
//       state.all = false;
//       state.active = false;
//       state.completed = true;
//       break;
//     case "SET_VALUE":
//       state.value = action.payload;
//       break;
//     case "SELECTED_ALL":
//       state.selected = state.inputValue.map((item) => item.text);
//     break;
//   }
// });

// export default function Todolist() {
//   const [state, dispatch] = useReducer(reducer, initalState);

//   const setValue = (event: ChangeEvent<HTMLInputElement>): void => {
//     dispatch({ type: "SET_VALUE", payload: event.target.value });
//   };

//   const removeItem = (element: string): void => {
//     dispatch({ type: "REMOVE_ITEM", payload: element });
//   };

//   const deleteSelected = (): void => {
//     dispatch({ type: "DELETE_SELECTED" });
//   };

//   const selectedItem = (name: string): void => {
//     dispatch({ type: "SELECTED_ITEM", payload: name });
//   };

//   const showAll = (): void => {
//     dispatch({ type: "SHOW_ALL" });
//   };

//   const showActive = (): void => {
//     dispatch({ type: "SHOW_ACTIVE" });
//   };

//   const showCompleted = (): void => {
//     dispatch({ type: "SHOW_COMPLETED" });
//   };

//   const addItem = (event: KeyboardEvent<HTMLInputElement>): void => {
//     if (event.key === "Enter") {
//       dispatch({ type: "ADD_ITEM" });
//     }
//   };
//   const selectedAll = ():void => {
//     dispatch({ type: "SELECTED_ALL" });
//   };

//   return (
//     <div>
//       <Input selectedAll={selectedAll} value={state.value} setValue={setValue} addItem={addItem} />
//       <InputValue
//         value={state.value}
//         all={state.all}
//         inputValue={state.inputValue}
//         selected={state.selected}
//         selectedItem={selectedItem}
//         removeItem={removeItem}
//         active={state.active}
//         completed={state.completed}
//       />
//       {state.inputValue.length !== 0 && (
//         <Details
//           inputValue={state.inputValue}
//           selected={state.selected}
//           showAll={showAll}
//           showActive={showActive}
//           showCompleted={showCompleted}
//           deleteSelected={deleteSelected}
//         />
//       )}
//     </div>
//   );
// }

import React, { createContext, useContext, useReducer } from "react";
import Input from "./refacter/Input";
import InputValue from "./refacter/InputValue";
import Details from "./refacter/Details";
import produce from "immer";

type Action =
  | { type: "VALUE_CHANGE"; payload: string }
  | { type: "SET_ADD"; payload: string }
  | { type: "SET_CHANGE"; payload: string }
  | { type: "SET_DELETE"; payload: string }
  | { type: "SET_SELECTED" }
  | { type: "SET_FILTER"; payload: string }
  | { type: "SET_FILTERED_TODO"; payload: string };

interface Todo {
  data: string;
  completed: boolean;
}

interface State {
  inputValus: Todo[];
  value: string;
  filter: string;
  selected: Todo[];
}

const initialState: State = {
  inputValus: [],
  value: "",
  filter: "All",
  selected: [],
};

const reducer = produce((state: State, action: Action) => {
  switch (action.type) {
    case "VALUE_CHANGE":
      state.value = action.payload;
      break;
    case "SET_ADD":
      state.inputValus = [
        ...state.inputValus,
        { data: state.value, completed: false },
      ];
      state.value = "";
      state.selected = state.inputValus;
      break;

    case "SET_CHANGE":
      state.inputValus = state.inputValus.map((todo) =>
        todo.data === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      break;
    case "SET_DELETE":
      state.inputValus = state.inputValus.filter(
        (todo) => todo.data !== action.payload
      );
      break;

    case "SET_SELECTED":
      state.inputValus = state.inputValus.filter((item) => !item.completed);
      state.selected = [];
      break;

    case "SET_FILTERED_TODO":
      switch (action.payload) {
        case "Active":
          state.selected = state.inputValus.filter((todo) => !todo.completed);
          break;
        case "Complete":
          state.selected = state.inputValus.filter((todo) => todo.completed);
          break;
        default:
          state.selected = state.inputValus;
      }
      break;

    default:
      break;
  }
});

interface ContextProps {
  inputValus: Todo[];
  value: string;
  filter: string;
  selected: Todo[];
  SetChange: (value: string) => void;
  SetAdd: (key: string) => void;
  SetTodoChange: (item: Todo) => void;
  SetDelete: (item: Todo) => void;
  SET_SELECTED: () => void;
  setFilter: (value: string) => void;
}

const ToDoListContext = createContext<ContextProps | null>(null);

const Todolist = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const SetChange = (value: string): void => {
    dispatch({ type: "VALUE_CHANGE", payload: value });
  };

  const SetAdd = (key: string) => {
    if (key === "Enter") {
      dispatch({ type: "SET_ADD", payload: state.value });
    }
  };

  const SetTodoChange = (item: Todo) => {
    dispatch({ type: "SET_CHANGE", payload: item.data });
    dispatch({ type: "SET_FILTERED_TODO", payload: state.filter });
  };

  const SetDelete = (item: Todo) => {
    dispatch({ type: "SET_DELETE", payload: item.data });
  };

  const SET_SELECTED = () => {
    dispatch({ type: "SET_SELECTED" });
  };

  const setFilter = (value: string) => {
    dispatch({ type: "SET_FILTERED_TODO", payload: value });
  };

  return (
    <div className="Main">
      <h2>Todos</h2>
      <ToDoListContext.Provider
        value={{
          ...state,
          SetChange,
          SetAdd,
          SetTodoChange,
          SetDelete,
          SET_SELECTED,
          setFilter,
        }}
      >
        <Input />
        <InputValue />
        <Details />
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
