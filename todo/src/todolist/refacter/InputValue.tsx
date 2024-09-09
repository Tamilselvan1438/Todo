// import "/home/intern/dev-practice/todo/src/todolist/todolist.css";

// interface Todo {
//   text: string;
//   completed: boolean;
// }

// interface InputValueType {
//     value:string,
//     all:boolean,
//     inputValue:Todo[],
//     selected:string[],
//     selectedItem:(name: string) => void,
//     removeItem:(element: string) => void,
//     active:boolean,
//     completed:boolean

// }

// function InputValue({value, all, inputValue, selected, selectedItem, removeItem, active, completed}:InputValueType) {
//   return (
//     <div className="h3">
//       <div>
//         {all && (
//           <ul>
//             {inputValue.map((item, i) => (
//               <div key={i} className="h3">
//                 <input
//                   type="checkbox"
//                   checked={selected.includes(item.text)}
//                   onChange={() => selectedItem(item.text)}
//                   readOnly
//                 />
//                 {item.text}{" "}
//                 <button
//                   className="tamil"
//                   key={i}
//                   value={value}
//                   onClick={() => removeItem(item.text)}
//                 >
//                   x
//                 </button>
//                 <hr />
//               </div>
//             ))}
//           </ul>
//         )}
//       </div>
//       <div>
//         {active && (
//           <ul>
//             {inputValue
//               .filter((item) => !selected.includes(item.text))
//               .map((item, i) => (
//                 <div key={i} className="h3">
//                   <input
//                     type="checkbox"
//                     checked={selected.includes(item.text)}
//                     onChange={() => selectedItem(item.text)}
//                     readOnly
//                   />
//                   {item.text}{" "}
//                   <button
//                     className="tamil"
//                     key={i}
//                     value={value}
//                     onClick={() => removeItem(item.text)}
//                   >
//                     x
//                   </button>
//                   <hr />
//                 </div>
//               ))}
//           </ul>
//         )}
//       </div>
//       <div>
//         {completed && (
//           <ul>
//           {inputValue
//             .filter((item) => selected.includes(item.text))
//             .map((item, i) => (
//               <div key={i} className="h3">
//                 <input
//                   type="checkbox"
//                   checked={selected.includes(item.text)}
//                   onChange={() => selectedItem(item.text)}
//                   readOnly
//                 />
//                 {item.text}{" "}
//                 <button
//                   className="tamil"
//                   key={i}
//                   value={value}
//                   onClick={() => removeItem(item.text)}
//                 >
//                   x
//                 </button>
//                 <hr />
//               </div>
//             ))}
//         </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default InputValue;


import _ from "lodash";
import { useTodoContext } from "../Todolist";



const InputValue = () => {
  const {selected, SetTodoChange, SetDelete } = useTodoContext()

  return (
    <div>
      {_.map(selected, (item, i) => (
        <div key={i}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => SetTodoChange(item)}
          />
          <span>{item.data}</span>
          <button onClick={() => SetDelete(item)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default InputValue;