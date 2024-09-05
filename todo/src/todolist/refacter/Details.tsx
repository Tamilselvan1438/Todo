// import "/home/intern/dev-practice/todo/src/todolist/todolist.css";

// interface Todo {
//   text: string;
//   completed: boolean;
// }

// interface DetailsType {
//   inputValue: Todo[];
//   selected: string[];
//   showAll: () => void;
//   showActive: () => void;
//   showCompleted: () => void;
//   deleteSelected: () => void;
// }

// function Details({
//   inputValue,
//   selected,
//   showAll,
//   showActive,
//   showCompleted,
//   deleteSelected,zzz
// }: DetailsType) {
//   return (
//     <div className="h5">
//       <button>{inputValue.length - selected.length} items left!</button>
//       <span> </span>
//       <button onClick={showAll}>All</button>
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

import "/home/intern/dev-practice/todo/src/todolist/todolist.css";

interface Todo {
  text: string;
  completed: boolean;
}

interface DetailsType {
  inputValue: Todo[];
  selected: Todo[];
  setFilter: (value: "all" | "active" | "completed") => void;
  deleteSelected: () => void;
}

function Details({
  inputValue,
  selected,
  deleteSelected,
  setFilter
}: DetailsType) {
  return (
    <div className="h5">
      <button>{inputValue.length - selected.length} items left!</button>
      <span> </span>
      <button onClick={() => setFilter('all')} >All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed') }>Complite</button>
      <span> </span>
      <button onClick={deleteSelected} className="tamil">
        Clear completed
      </button>
    </div>
  );
}

export default Details;
