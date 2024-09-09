// import "/home/intern/dev-practice/todo/src/todolist/todolist.css";

// interface Todo {
//   text: string;
//   completed: boolean;
// }

// interface DetailsType {
//   inputValue: Todo[];
//   selected: string[];
//   showall: () => void;
//   showActive: () => void;
//   showCompleted: () => void;
//   deleteSelected: () => void;
// }

// function Details({
//   inputValue,
//   selected,
//   showall,
//   showActive,
//   showCompleted,
//   deleteSelected,zzz
// }: DetailsType) {
//   return (
//     <div className="h5">
//       <button>{inputValue.length - selected.length} items left!</button>
//       <span> </span>
//       <button onClick={showall}>all</button>
//       <button onClick={showActive}>Active</button>
//       <button onClick={showCompleted}>Complite</button>
//       <span> </span>
//       <button onClick={deleteSelected} className="tamil">
//         Clear completed
//       </button>
//     </div>
//   );
// }

// export default Details;
import { useTodoContext } from "../Todolist";
import _ from "lodash";

const Details = () => {
  const { inputValus, SET_SELECTED, setFilter } = useTodoContext();

  return (
    <div className="fotter">
      <span>
        {_.filter(inputValus, (item) => !item.completed).length} item left!
      </span>
      <span>
        <button onClick={() => setFilter("All")}>all</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("Complete")}>Completed</button>
      </span>
      <button onClick={SET_SELECTED}>Clear completed</button>
    </div>
  );
};

export default Details;
