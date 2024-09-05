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

import { ChangeEvent, useReducer, KeyboardEvent } from "react";
import Input from "./refacter/Input";
import InputValue from "./refacter/InputValue";
import Details from "./refacter/Details";
import produce from "immer";
import _ from "lodash";

interface Todo {
  text: string;
  completed: boolean;
}

interface StateType {
  inputValue: Todo[];
  value: string;
  selected: Todo[];
  filter: "all" | "active" | "completed";
}

type Action =
  | { type: "ADD_ITEM" }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "DELETE_SELECTED" }
  | { type: "SELECTED_ITEM"; payload: string }
  | { type: "SELECTED_AAC" }
  | { type: "SET_FILTER"; payload: "all" | "active" | "completed" }
  | { type: "SET_VALUE"; payload: string }
  | { type: "SELECTED_ALL" };

const initalState: StateType = {
  inputValue: [],
  value: "",
  selected: [],
  filter: "all",
};

const reducer = produce((state: StateType, action: Action) => {
  switch (action.type) {
    case "ADD_ITEM":
      state.inputValue = [
        ...state.inputValue,
        { text: state.value, completed: false },
      ];
      state.value = "";
      break;

    case "REMOVE_ITEM":
      state.inputValue = _.filter(
        state.inputValue,
        (item) => item.text !== action.payload
      );
      state.selected = [];
      break;

    case "DELETE_SELECTED":
      state.inputValue = _.filter(
        state.inputValue,
        (item) => !_.includes(state.selected, item)
      );
      state.selected = [];
      break;

    case "SET_FILTER":
      state.filter = action.payload;
      break;

    case "SELECTED_ITEM":
      state.selected = state.selected.includes(action.payload)
        ? state.selected.filter((item) => item !== action.payload)
        : [...state.selected, action.payload];
      break;

    case "SELECTED_AAC":
      // switch (state.filter) {
      //   case "all":
      //     state.selected = state.inputValue;
      //     break;
      //   case "active":
      //     state.selected = _.filter(
      //       state.inputValue,
      //       (item) => !item.completed
      //     );
      //     break;
      //   case "completed":
      //     state.selected = _.filter(state.inputValue, (item) => item.completed);
      // }
      break;

    case "SET_VALUE":
      state.value = action.payload;
      break;

    case "SELECTED_ALL":
      state.selected = state.inputValue.map((item) => item);
      break;
  }
});

export default function Todolist() {
  const [state, dispatch] = useReducer(reducer, initalState);

  const setValue = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "SET_VALUE", payload: event.target.value });
  };

  const removeItem = (element: string): void => {
    dispatch({ type: "REMOVE_ITEM", payload: element });
  };

  const deleteSelected = (): void => {
    dispatch({ type: "DELETE_SELECTED" });
  };

  const selectedItem = (name: string): void => {
    dispatch({ type: "SELECTED_ITEM", payload: name });
  };

  const setFilter = (value: "all" | "active" | "completed"): void => {
    dispatch({ type: "SET_FILTER", payload: value });
  };

  const addItem = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      dispatch({ type: "ADD_ITEM" });
    }
  };
  const selectedAll = (): void => {
    dispatch({ type: "SELECTED_ALL" });
  };

  return (
    <div>
      <Input
        selectedAll={selectedAll}
        value={state.value}
        setValue={setValue}
        addItem={addItem}
      />
      <InputValue
        value={state.value}
        inputValue={state.inputValue}
        selected={state.selected}
        selectedItem={selectedItem}
        removeItem={removeItem}
      />
      {state.inputValue.length !== 0 && (
        <Details
          inputValue={state.inputValue}
          selected={state.selected}
          deleteSelected={deleteSelected}
          setFilter={setFilter}
        />
      )}
    </div>
  );
}
