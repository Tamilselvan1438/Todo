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


import "/home/intern/dev-practice/todo/src/todolist/todolist.css";

interface Todo {
  text: string;
  completed: boolean;
}

interface InputValueType {
  value: string;
  inputValue: Todo[];
  selected: Todo[];
  selectedItem: (name: string) => void;
  removeItem: (element: string) => void;
}

function InputValue({
  value,
  inputValue,
  selected,
  selectedItem,
  removeItem,
}: InputValueType) {
  return (
    <div className="h3">
      <div>
       {inputValue.length !==0 && <ul>
          {inputValue.map((item, i) => (
            <div key={i} className="h3">
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => selectedItem(item.text)}
              />
              {item.text}{" "}
              <button
                className="tamil"
                key={i}
                value={value}
                onClick={() => removeItem(item.text)}
              >
                x
              </button>
              <hr />
            </div>
          ))}
        </ul>}
      </div>
    </div>
  );
}

export default InputValue;
