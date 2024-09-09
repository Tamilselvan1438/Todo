// import React, { ChangeEvent } from "react";
// import "/home/intern/dev-practice/todo/src/todolist/todolist.css";

// interface InputType {
//   value: string;
//   setValue: (event: ChangeEvent<HTMLInputElement>) => void;
//   addItem: (event: React.KeyboardEvent<HTMLInputElement>) => void;
//   selectedAll: () => void;
// }

// function Input({ value, setValue, addItem, selectedAll }: InputType) {
//   return (
//     <div className="colour">
//       <div>
//         <div className="h1">
//           <h1 className="h1">TODOS</h1>
//           <button onClick={selectedAll}>✅</button>
//           <input
//             className="h1"
//             placeholder="what needs tobe done?"
//             value={value}
//             onChange={setValue}
//             onKeyDown={addItem}
//             required
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Input;


import { useTodoContext } from "../Todolist";

const Input = () => {
  const { value, SetChange, SetAdd } = useTodoContext();

  return (
    <div className="inputs">
      <input
        placeholder="What needs to be done?"
        value={value}
        onChange={(e)=>SetChange(e.target.value)}
        onKeyDown={(e) =>SetAdd(e.key)}
      />
    </div>
  );
};

export default Input;
